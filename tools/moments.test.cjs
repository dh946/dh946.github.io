const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const source = fs.readFileSync(path.join(__dirname, '../scripts/moments.js'), 'utf8')
function render(entries) {
  let renderTag
  vm.runInNewContext(source, {
    hexo: {
      config: { timezone: 'Asia/Shanghai' },
      locals: { get: () => ({ moments: entries }) },
      extend: { tag: { register: (_name, callback) => { renderTag = callback } } }
    }
  })
  return renderTag()
}

test('empty timeline has a visible state instead of a loader', () => {
  assert.match(render([]), /moments-empty/)
})

test('timeline sorts newest first, displays Shanghai time and escapes content', () => {
  const html = render([
    { date: '2026-10-01T12:00:00+08:00', text: 'older', image: '/img/old.webp' },
    { date: '2026-10-07T04:00:00Z', text: '<script>newer</script>', images: [{ url: '/img/new.webp', alt: 'A "photo"' }], tags: ['<tag>'] }
  ])
  assert.ok(html.indexOf('newer') < html.indexOf('older'))
  assert.match(html, /12:00/)
  assert.match(html, /&lt;script&gt;newer&lt;\/script&gt;/)
  assert.match(html, /&lt;tag&gt;/)
  assert.match(html, /A &quot;photo&quot;/)
  assert.match(html, /\/img\/old.webp/)
})

test('invalid dates and empty text fail the build', () => {
  assert.throws(() => render([{ date: 'not-a-date', text: 'text' }]), /valid date/)
  assert.throws(() => render([{ date: '2026-10-07', text: ' ' }]), /non-empty text/)
})

test('image URLs reject script and protocol-relative addresses', () => {
  for (const url of ['javascript:alert(1)', '//unknown.example/photo.png']) {
    assert.throws(() => render([{ date: '2026-10-07', text: 'text', images: [{ url }] }]), /HTTP\(S\)/)
  }
})
