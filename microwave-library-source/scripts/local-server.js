#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { randomUUID } = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const LIBRARY = path.join(ROOT, '文献库_按技术方案');
const INCOMING = path.join(LIBRARY, '_incoming');
const DATA_FILE = path.join(ROOT, 'data', 'papers.json');
const SITE_DATA_FILE = path.join(DIST, 'papers-data.js');
const PORT = Number(process.env.MICROWAVE_LIBRARY_PORT || 8765);
const HOST = '127.0.0.1';
const OFFSETS = new Set([1, 100, 1000, 10000, 1000000, 10000000]);
const CATEGORIES = new Set(['OEO_COEO', 'OFD', 'OPTICAL_HETERODYNE', 'DIRECT_COMB_DETECTION']);
const STABILITY_METHODS = new Set(['passive', 'active']);
const MAX_PDF_BYTES = 100 * 1024 * 1024;
let importQueue = Promise.resolve();

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}
function writeData(data) {
  data.updatedAt = new Date().toISOString().slice(0, 10);
  const formatted = `${JSON.stringify(data, null, 2)}\n`;
  fs.copyFileSync(DATA_FILE, path.join(ROOT, 'data', 'papers.last-save.backup.json'));
  fs.writeFileSync(`${DATA_FILE}.tmp`, formatted, 'utf8');
  fs.copyFileSync(`${DATA_FILE}.tmp`, DATA_FILE);
  fs.unlinkSync(`${DATA_FILE}.tmp`);
  fs.writeFileSync(SITE_DATA_FILE, `window.PAPER_DATA=${JSON.stringify(data)};\n`, 'utf8');
}
function send(res, status, body, type = 'application/json; charset=utf-8') {
  const payload = Buffer.isBuffer(body) ? body : Buffer.from(typeof body === 'string' ? body : JSON.stringify(body));
  res.writeHead(status, {'Content-Type': type, 'Content-Length': payload.length, 'Cache-Control': 'no-store'});
  res.end(payload);
}
function bodyJson(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.setEncoding('utf8');
    req.on('data', chunk => { raw += chunk; if (raw.length > 262144) reject(new Error('请求数据过大')); });
    req.on('end', () => { try { resolve(JSON.parse(raw || '{}')); } catch { reject(new Error('JSON 格式错误')); } });
    req.on('error', reject);
  });
}
function safeTags(value) {
  if (!Array.isArray(value)) throw new Error('标签必须是数组');
  const tags = [...new Set(value.map(tag => String(tag).trim()).filter(Boolean))];
  if (tags.length > 100 || tags.some(tag => tag.length > 50)) throw new Error('标签数量或长度超出限制');
  return tags;
}
function saveMeasurement(paper, input) {
  if (!input) return;
  const offsetHz = Number(input.offsetHz);
  const value = Number(input.value);
  const entryType = input.entryType;
  if (!OFFSETS.has(offsetHz)) throw new Error('不支持该频偏');
  if (!Number.isFinite(value) || value > 20 || value < -250) throw new Error('相位噪声数值无效');
  let basis, carrierGHz, key, label;
  if (entryType === 'normalized') {
    basis = 'normalized_10ghz'; carrierGHz = 10; key = 'manual-normalized-10ghz'; label = '手动补录 · 10 GHz 归一化值';
  } else if (entryType === 'raw') {
    carrierGHz = Number(input.carrierGHz);
    if (!Number.isFinite(carrierGHz) || carrierGHz <= 0 || carrierGHz > 100000) throw new Error('原始载频无效');
    basis = 'raw'; key = `manual-raw-${carrierGHz}`; label = `手动补录 · ${carrierGHz} GHz 输出`;
  } else {
    throw new Error('数据口径无效');
  }
  paper.measurements ||= [];
  let measurement = paper.measurements.find(item => item.id === key);
  if (!measurement) {
    measurement = {id:key, label, basis, carrierGHz, points:[], evidence:'manual-local-entry', manual:true};
    paper.measurements.push(measurement);
  }
  const point = {offsetHz, value, manual:true, updatedAt:new Date().toISOString()};
  const index = measurement.points.findIndex(item => Number(item.offsetHz) === offsetHz);
  if (index >= 0) measurement.points[index] = point; else measurement.points.push(point);
  measurement.points.sort((a,b) => a.offsetHz - b.offsetHz);
}
function saveFrequencyStability(paper, input) {
  if (!input) return;
  const value = Number(input.value);
  const method = String(input.method || '');
  if (!Number.isFinite(value) || value <= 0 || value > 1) throw new Error('1 秒 Allan 偏差应为 0 到 1 之间的正数');
  if (!STABILITY_METHODS.has(method)) throw new Error('请选择主动法或被动法');
  const record = {
    metric: 'adev', averagingTimeSeconds: 1, value, unit: 'fractional', method,
    sourceNote: String(input.sourceNote || '').trim().slice(0, 500),
    evidence: 'manual-local-entry', updatedAt: new Date().toISOString()
  };
  paper.frequencyStability ||= [];
  const index = paper.frequencyStability.findIndex(item => item.metric === 'adev' && item.averagingTimeSeconds === 1 && item.method === method);
  if (index >= 0) paper.frequencyStability[index] = record;
  else paper.frequencyStability.push(record);
}
function patchPaper(data, id, patch) {
  const paper = data.papers.find(item => item.id === id);
  if (!paper) throw new Error('未找到论文记录');
  if ('tags' in patch) paper.tags = safeTags(patch.tags);
  if ('category' in patch) {
    if (!CATEGORIES.has(patch.category)) throw new Error('技术分类无效');
    paper.category = patch.category;
  }
  saveMeasurement(paper, patch.measurement);
  saveFrequencyStability(paper, patch.frequencyStability);
  if (patch.measurement && paper.status === 'draft') paper.status = 'verified';
  paper.lastManualEditAt = new Date().toISOString();
  return paper;
}
function staticFile(res, filePath) {
  if (!filePath.startsWith(DIST)) return send(res, 403, {error:'禁止访问'});
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return send(res, 404, {error:'文件不存在'});
  const ext = path.extname(filePath).toLowerCase();
  const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
  send(res, 200, fs.readFileSync(filePath), types[ext] || 'application/octet-stream');
}

function listPdfs(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, {withFileTypes:true}).flatMap(entry => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return listPdfs(target);
    return entry.isFile() && entry.name.toLowerCase().endsWith('.pdf') ? [target] : [];
  });
}

function uploadPdf(req, res) {
  const requestedName = decodeURIComponent(new URL(req.url, `http://${HOST}:${PORT}`).searchParams.get('filename') || '');
  const filename = path.basename(requestedName).trim();
  if (!filename || filename !== requestedName || /[<>:"/\\|?*\u0000-\u001f]/.test(filename) || !filename.toLowerCase().endsWith('.pdf')) {
    return send(res, 400, {error:'请选择名称有效的 PDF 文件'});
  }
  const pdfs = listPdfs(LIBRARY);
  if (pdfs.some(file => path.basename(file).toLowerCase() === filename.toLowerCase())) {
    return send(res, 409, {error:'文献库中已存在同名 PDF'});
  }

  fs.mkdirSync(INCOMING, {recursive:true});
  const temporary = path.join(LIBRARY, `.upload-${randomUUID()}.tmp`);
  const target = path.join(INCOMING, filename);
  let size = 0;
  let prefix = Buffer.alloc(0);
  const output = fs.createWriteStream(temporary, {flags:'wx'});
  req.on('data', chunk => {
    size += chunk.length;
    if (prefix.length < 5) prefix = Buffer.concat([prefix, chunk.subarray(0, 5 - prefix.length)]);
    if (size > MAX_PDF_BYTES) req.destroy(new Error('PDF 文件不能超过 100 MB'));
  });
  req.on('error', error => output.destroy(error));
  output.on('error', error => {
    fs.rm(temporary, {force:true}, () => {});
    if (!res.headersSent) send(res, error.message.includes('100 MB') ? 413 : 500, {error:error.message.includes('100 MB') ? error.message : '接收 PDF 失败'});
  });
  output.on('finish', () => {
    if (prefix.toString('ascii') !== '%PDF-') {
      fs.rm(temporary, {force:true}, () => send(res, 400, {error:'文件内容不是有效的 PDF'}));
      return;
    }
    fs.copyFile(temporary, target, fs.constants.COPYFILE_EXCL, error => {
      fs.rm(temporary, {force:true}, () => {});
      if (error) return send(res, error.code === 'EEXIST' ? 409 : 500, {error:error.code === 'EEXIST' ? '文献库中已存在同名 PDF' : '无法保存 PDF'});
      const registration = importQueue.then(() => new Promise((resolve, reject) => {
        const child = spawn(process.execPath, [path.join(ROOT, 'scripts', 'update-library.js')], {cwd:ROOT, windowsHide:true, stdio:['ignore','pipe','pipe']});
        let stderr = '';
        child.stderr.setEncoding('utf8');
        child.stderr.on('data', chunk => { stderr += chunk; });
        child.once('error', reject);
        child.once('exit', code => code === 0 ? resolve() : reject(new Error(stderr.trim() || `登记文献失败（退出码 ${code}）`)));
      }));
      importQueue = registration.catch(() => {});
      registration.then(() => {
        const data = readData();
        const paper = data.papers.find(item => path.posix.basename(String(item.sourceFile).replace(/\\/g,'/')) === filename);
        if (!paper) throw new Error('PDF 已保存，但未能生成文献记录');
        send(res, 201, {ok:true, paper, updatedAt:data.updatedAt});
      }).catch(error => {
        console.error(error);
        send(res, 500, {error:'PDF 已接收，但自动登记失败：' + (error.message || '未知错误')});
      });
    });
  });
  req.pipe(output);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${HOST}:${PORT}`);
    if (req.method === 'GET' && url.pathname === '/api/data') return send(res, 200, readData());
    if (req.method === 'POST' && url.pathname === '/api/pdfs') return uploadPdf(req, res);
    if (req.method === 'PATCH' && url.pathname.startsWith('/api/papers/')) {
      const id = decodeURIComponent(url.pathname.slice('/api/papers/'.length));
      const patch = await bodyJson(req);
      const data = readData();
      const paper = patchPaper(data, id, patch);
      writeData(data);
      return send(res, 200, {ok:true, paper, updatedAt:data.updatedAt});
    }
    if (req.method === 'GET' && url.pathname.startsWith('/pdf/')) {
      const relative = decodeURIComponent(url.pathname.slice('/pdf/'.length)).replace(/\\/g,'/');
      const target = path.resolve(LIBRARY, relative);
      if (!target.startsWith(`${LIBRARY}${path.sep}`) || !target.toLowerCase().endsWith('.pdf') || !fs.existsSync(target)) return send(res, 404, {error:'PDF 不存在'});
      res.writeHead(200, {'Content-Type':'application/pdf','Content-Disposition':`inline; filename*=UTF-8''${encodeURIComponent(path.basename(target))}`,'Cache-Control':'private, max-age=60'});
      return fs.createReadStream(target).pipe(res);
    }
    if (req.method !== 'GET') return send(res, 405, {error:'方法不支持'});
    const relative = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
    return staticFile(res, path.resolve(DIST, relative));
  } catch (error) {
    console.error(error);
    return send(res, 400, {error:error.message || '请求失败'});
  }
});

server.listen(PORT, HOST, () => {
  const url = `http://${HOST}:${PORT}`;
  console.log(`光生微波文献库已启动：${url}`);
  console.log('关闭此窗口即可停止本地服务。');
  if (process.argv.includes('--open')) openBrowser(url);
});

function openBrowser(url) {
  const child = spawn('powershell.exe', ['-NoProfile', '-Command', `Start-Process '${url}'`], {
    detached: true, stdio: 'ignore', windowsHide: true
  });
  child.on('error', error => console.error(`无法自动打开浏览器，请手动访问 ${url}: ${error.message}`));
  child.unref();
}

server.on('error', error => {
  const url = `http://${HOST}:${PORT}`;
  if (error.code === 'EADDRINUSE') {
    console.log(`文献网页服务已经运行：${url}`);
    if (process.argv.includes('--open')) openBrowser(url);
    return;
  }
  console.error(`文献网页启动失败：${error.message}`);
  process.exitCode = 1;
});

