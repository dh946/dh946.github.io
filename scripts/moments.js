const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

hexo.extend.tag.register('moments', function () {
  const entries = hexo.locals.get('data').moments || []
  if (!Array.isArray(entries)) throw new Error('moments.yml must contain a list')
  const notes = entries.map((entry, index) => {
    const date = new Date(entry.date)
    if (Number.isNaN(date.getTime()) || typeof entry.text !== 'string' || !entry.text.trim()) {
      throw new Error(`Dynamic entry ${index + 1} needs a valid date and non-empty text`)
    }
    return { ...entry, date }
  }).sort((a, b) => b.date - a.date)
  if (notes.length === 0) {
    return '<p class="moments-empty">还没有动态。写下最近的一件小事吧。</p>'
  }

  const displayDate = new Intl.DateTimeFormat('zh-CN', {
    timeZone: hexo.config.timezone || 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
  })
  return `<div class="moments-list">${notes.map((entry) => {
    const images = Array.isArray(entry.images) ? entry.images : (entry.image ? [{ url: entry.image, alt: entry.alt }] : [])
    const image = images.length ? `<div class="moment-images">${images.map((photo) => {
      if (!photo || typeof photo.url !== 'string' || !/^(\/(?!\/)|https?:\/\/)/i.test(photo.url)) {
        throw new Error('Dynamic images need a local /img/ path or an HTTP(S) URL')
      }
      return `<img class="moment-image" src="${escapeHtml(photo.url)}" alt="${escapeHtml(photo.alt || '生活照片')}" loading="lazy" decoding="async">`
    }).join('')}</div>` : ''
    const tags = Array.isArray(entry.tags) && entry.tags.length
      ? `<div class="moment-tags">${entry.tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join(' ')}</div>`
      : ''
    return `<article class="moment-card"><time datetime="${entry.date.toISOString()}">${displayDate.format(entry.date)}</time><div class="moment-text">${escapeHtml(entry.text).replace(/\n/g, '<br>')}</div>${image}${tags}</article>`
  }).join('')}</div>`
}, { async: false })
