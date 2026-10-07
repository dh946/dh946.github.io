const fs = require('node:fs')
const path = require('node:path')

const publicDir = path.resolve(__dirname, '../public')
const required = ['index.html', 'archives/index.html', 'categories/index.html', 'tags/index.html', 'moments/index.html', 'gallery/index.html', 'gallery/demo-album/index.html', 'private/index.html', 'img/avatar.svg', 'js/music-config.js', 'js/music-player.js']
const removed = ['about', 'link', 'movies', 'cartoon', 'pan', 'video', 'fafa', 'in3', 'favorite', 'JLU', 'gzsh', 'sjbz', 'sjsy', 'zipai', ...Array.from({ length: 8 }, (_, i) => `fun${i + 1}`)]
const errors = []
for (const file of required) {
  if (!fs.existsSync(path.join(publicDir, file))) errors.push(`Missing page/resource: ${file}`)
}
for (const route of removed) {
  if (fs.existsSync(path.join(publicDir, route, 'index.html'))) errors.push(`Removed page was generated: ${route}`)
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(target) : [target]
  })
}

const htmlFiles = walk(publicDir).filter(file => file.endsWith('.html'))
for (const file of htmlFiles) {
  const relative = path.relative(publicDir, file).replace(/\\/g, '/')
  const html = fs.readFileSync(file, 'utf8')
  if (/(artitalk\.js|leancloud\.(cn|app))/i.test(html)) errors.push(`Legacy dynamic dependency in ${relative}`)
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1].replace(/&amp;/g, '&')
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) continue
    const url = new URL(value, `https://blog.invalid/${relative}`)
    const target = path.resolve(publicDir, `.${decodeURIComponent(url.pathname)}`)
    if (!target.startsWith(publicDir + path.sep) && target !== publicDir) {
      errors.push(`Invalid local path in ${relative}: ${value}`)
      continue
    }
    const candidates = [target, path.join(target, 'index.html')]
    if (!candidates.some(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile())) {
      errors.push(`Broken local reference in ${relative}: ${value}`)
    }
  }
}

if (errors.length) {
  console.error([...new Set(errors)].join('\n'))
  process.exitCode = 1
} else {
  console.log(`Site check passed: ${htmlFiles.length} HTML pages, required routes and local resources verified.`)
}

