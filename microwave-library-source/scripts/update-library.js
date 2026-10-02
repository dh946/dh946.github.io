#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const library = path.join(root, '文献库_按技术方案');
const incoming = path.join(library, '_incoming');
const dataFile = path.join(root, 'data', 'papers.json');
const siteDataFile = path.join(root, 'dist', 'papers-data.js');
const manifestFile = path.join(library, 'classification-manifest.json');
const textDir = path.join(root, 'tmp', 'pdfs', 'text');
const groups = [
  '01_双点与电子光频分割_eOFD',
  '02_Kerr微腔与微梳光频分割',
  '03_Brillouin激光与差频光频分割',
  '04_光外差与双激光拍频',
  '05_OEO与COEO',
  '06_光梳直接探测'
];
const rules = {
  OFD:['optical frequency division','ofd'], eOFD:['electro-optic frequency division','eofd'],
  OEO:['optoelectronic oscillator','oeo'], COEO:['coupled optoelectronic','coeo'],
  Brillouin:['brillouin','sbs laser'], 'Kerr microcomb':['kerr','soliton microcomb','microcomb'],
  Integrated:['integrated','chip-scale','on-chip'], mmWave:['millimeter-wave','millimetre-wave','mmwave','mm-wave'],
  Tunable:['tunable','frequency-hopping','frequency hopping'], TFLN:['thin-film lithium niobate','tfln'],
  SiN:['silicon nitride'], Theory:['theory','theoretical']
};

function slug(value){return value.normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'').toLowerCase().slice(0,80)||'paper';}
function metadata(filename){const stem=path.basename(filename,'.pdf');const m=stem.match(/[-_]\s*(19\d{2}|20\d{2})\s*[-_]/);return m?{year:Number(m[1]),title:stem.slice((m.index||0)+m[0].length).replace(/^[-_\s]+/,'')}:{year:null,title:stem};}
function extractedText(filename){const target=path.join(textDir,path.basename(filename).replace(/\.pdf$/i,'.txt'));return fs.existsSync(target)?fs.readFileSync(target,'utf8').slice(0,50000):'';}
function inferTags(title,text){const h=`${title}\n${text}`.toLowerCase();return Object.entries(rules).filter(([,needles])=>needles.some(n=>h.includes(n))).map(([tag])=>tag);}
function inferCategory(title,text,tags){const h=`${title}\n${text}`.toLowerCase();if(tags.includes('COEO')||tags.includes('OEO'))return 'OEO_COEO';if(h.includes('optical frequency division')||h.includes('eofd')||/\bofd\b/.test(h))return 'OFD';if(h.includes('heterodyne')||h.includes('two-color')||h.includes('two colour')||h.includes('dual-wavelength'))return 'OPTICAL_HETERODYNE';if(h.includes('frequency comb')||h.includes('microcomb')||h.includes('mode-locked'))return 'DIRECT_COMB_DETECTION';return 'DIRECT_COMB_DETECTION';}
function groupFor(title,text,tags){const h=`${title}\n${text}`.toLowerCase();if(tags.includes('COEO')||tags.includes('OEO'))return groups[4];if(tags.includes('Brillouin'))return groups[2];if(tags.includes('eOFD')||/electro-optic frequency division|two-color|two colour|dual-wavelength|optically locked|reference cavity/.test(h))return groups[0];if(h.includes('heterodyne')||h.includes('dual laser')||h.includes('two lasers'))return groups[3];if(tags.includes('OFD')||tags.includes('Kerr microcomb')||h.includes('soliton'))return groups[1];return groups[5];}
function candidates(text){const m=text.replace(/\s+/g,' ').match(/.{0,80}[−–-]\s*\d+(?:\.\d+)?\s*dBc(?:\s*\/\s*Hz|\s*Hz\s*[−-]?1).{0,100}/gi)||[];return[...new Set(m.map(x=>x.trim()))].slice(0,12);}
function relativePdf(file){return path.relative(library,file).split(path.sep).join('/');}
function listPdfs(directory){if(!fs.existsSync(directory))return[];return fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{const target=path.join(directory,entry.name);if(entry.isDirectory())return listPdfs(target);return entry.isFile()&&entry.name.toLowerCase().endsWith('.pdf')?[target]:[];});}
function writeManifest(pdfs){const byGroup=Object.fromEntries(groups.map(group=>[group,[]]));for(const file of pdfs){const rel=relativePdf(file);const group=rel.split('/')[0];if(byGroup[group])byGroup[group].push({sourceFile:path.basename(file),archivedPath:`${library.split(path.sep).pop()}/${rel}`});}const items=Object.values(byGroup).flat().map(item=>({group:item.archivedPath.split('/')[1],sourceFile:item.sourceFile,archivedPath:item.archivedPath}));const manifest={generatedAt:new Date().toISOString(),sourceDirectory:'文献库_按技术方案',archiveDirectory:'文献库_按技术方案',copyMode:'canonical categorized library',groups:Object.fromEntries(groups.map(group=>[group,{count:byGroup[group].length,files:byGroup[group].map(item=>item.sourceFile)}])),items};fs.writeFileSync(manifestFile,`${JSON.stringify(manifest,null,2)}\n`,'utf8');}

const checkOnly=process.argv.includes('--check');
fs.mkdirSync(incoming,{recursive:true});
const data=JSON.parse(fs.readFileSync(dataFile,'utf8'));
const recordsBySource=new Map(data.papers.map(paper=>[String(paper.sourceFile).replace(/\\/g,'/'),paper]));
const recordsByBase=new Map();
for(const paper of data.papers){const base=path.posix.basename(String(paper.sourceFile).replace(/\\/g,'/'));if(!recordsByBase.has(base))recordsByBase.set(base,paper);else recordsByBase.set(base,null);}
let pdfs=listPdfs(library);
const additions=[];
for(let index=0;index<pdfs.length;index++){
  let file=pdfs[index];let relative=relativePdf(file);let filename=path.basename(file);
  if(relative.startsWith('_incoming/')){
    const {title}=metadata(filename);const text=extractedText(filename);const tags=inferTags(title,text);const group=groupFor(title,text,tags);const destination=path.join(library,group,filename);
    if(fs.existsSync(destination))throw new Error(`归档目录中已存在同名 PDF：${filename}`);
    fs.mkdirSync(path.dirname(destination),{recursive:true});fs.renameSync(file,destination);file=destination;relative=relativePdf(file);
  }
  let record=recordsBySource.get(relative);
  if(!record){const legacy=recordsByBase.get(filename);if(legacy){record=legacy;recordsBySource.delete(String(record.sourceFile).replace(/\\/g,'/'));record.sourceFile=relative;recordsBySource.set(relative,record);}}
  if(record)continue;
  const {title,year}=metadata(filename);const text=extractedText(filename);const tags=inferTags(title,text);
  const recordId=`draft-${year||'undated'}-${slug(title)}`;
  const newRecord={id:recordId,title,authors:'待核对',year,category:inferCategory(title,text,tags),tags,sourceFile:relative,status:'draft',note:'自动发现的新文献；候选数值尚未人工核对，不参与排名。',measurements:[],autoCandidates:candidates(text)};
  data.papers.push(newRecord);recordsBySource.set(relative,newRecord);additions.push(newRecord);
}
pdfs=listPdfs(library);
const present=new Set(pdfs.map(file=>relativePdf(file)));
const missing=data.papers.filter(paper=>!present.has(String(paper.sourceFile).replace(/\\/g,'/')));
console.log(`Library PDFs: ${pdfs.length}`);console.log(`Structured records: ${data.papers.length}`);console.log(`New draft records: ${additions.length}`);
additions.forEach(record=>console.log(`  + ${record.sourceFile}`));missing.forEach(record=>console.log(`  ! missing: ${record.sourceFile}`));
if(checkOnly)process.exit(additions.length||missing.length?1:0);
data.updatedAt=new Date().toISOString().slice(0,10);
fs.writeFileSync(dataFile,`${JSON.stringify(data,null,2)}\n`,'utf8');
fs.writeFileSync(siteDataFile,`window.PAPER_DATA=${JSON.stringify(data)};\n`,'utf8');
writeManifest(pdfs);
console.log('Updated data/papers.json, dist/papers-data.js, and classification-manifest.json');

