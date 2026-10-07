const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const isLocalOrHttps = value => typeof value === 'string' && (/^\/(?!\/)/.test(value) || /^https:\/\//i.test(value))
const siteData = () => hexo.locals.get('data')

function albumsFrom(data = siteData()) {
  const albums = data.albums || []
  if (!Array.isArray(albums)) throw new Error('albums.yml must contain a list')
  const slugs = new Set()

  return albums.map((album, index) => {
    if (!album || typeof album.title !== 'string' || !album.title.trim()) {
      throw new Error(`Album ${index + 1} needs a title`)
    }
    if (typeof album.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(album.slug)) {
      throw new Error(`Album ${index + 1} needs a lowercase URL slug (letters, numbers and hyphens)`)
    }
    if (slugs.has(album.slug)) throw new Error(`Duplicate album slug: ${album.slug}`)
    slugs.add(album.slug)

    const date = new Date(album.date)
    if (Number.isNaN(date.getTime())) throw new Error(`Album ${album.slug} needs a valid date`)
    if (!Array.isArray(album.photos) || album.photos.length === 0 || album.photos.length > 24) {
      throw new Error(`Album ${album.slug} needs between 1 and 24 photos`)
    }
    if (album.photos.some(photo => !isLocalOrHttps(photo))) {
      throw new Error(`Album ${album.slug} photos must use a local path or HTTPS URL`)
    }

    const cover = album.cover || album.photos[0]
    if (!isLocalOrHttps(cover)) throw new Error(`Album ${album.slug} cover must use a local path or HTTPS URL`)
    return { ...album, date, cover }
  }).sort((a, b) => b.date - a.date)
}

function formatDate(date) {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: hexo.config.timezone || 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(date)
}

hexo.extend.filter.register('before_generate', () => {
  const settings = siteData().site || {}
  const background = settings.home_background || ''
  if (background && !isLocalOrHttps(background)) {
    throw new Error('Home background must use a local path or HTTPS URL')
  }
  hexo.theme.config.index_img = background
})

hexo.extend.tag.register('albums', () => {
  const albums = albumsFrom()
  if (!albums.length) return '<p class="moments-empty">还没有相册。用手机上传几张照片，创建第一本相册吧。</p>'
  return `<div class="album-grid">${albums.map(album => `
    <a class="album-card" href="/gallery/${encodeURIComponent(album.slug)}/">
      <img src="${escapeHtml(album.cover)}" alt="${escapeHtml(`${album.title}相册封面`)}" loading="lazy" decoding="async">
      <div class="album-card-copy">
        <span class="album-eyebrow">${escapeHtml(formatDate(album.date))} · ${album.photos.length} 张照片</span>
        <h2>${escapeHtml(album.title)}</h2>
        <p>${escapeHtml(album.description || '')}</p>
      </div>
    </a>`).join('')}</div>`
}, { async: false })

hexo.extend.generator.register('album-pages', function (locals) {
  const albums = albumsFrom(locals.data)
  return albums.map(album => {
    const path = `gallery/${album.slug}/index.html`
    const content = `<div class="album-hero"><p>${escapeHtml(album.description || '')}</p><p class="album-eyebrow">${escapeHtml(formatDate(album.date))} · ${album.photos.length} 张照片</p></div>
      <div class="album-photo-grid">${album.photos.map((photo, index) => `<figure><img src="${escapeHtml(photo)}" alt="${escapeHtml(`${album.title} · 照片 ${index + 1}`)}" loading="lazy" decoding="async"><figcaption>照片 ${index + 1}</figcaption></figure>`).join('')}</div>
      <p><a href="/gallery/">← 返回相册</a></p>`
    const page = {
      __page: true,
      title: album.title,
      date: album.date,
      updated: album.date,
      slug: album.slug,
      path,
      permalink: `/gallery/${album.slug}/`,
      layout: 'page',
      type: 'gallery',
      comments: false,
      content
    }
    return { path, layout: ['page', 'post', 'index'], data: page }
  })
})

hexo.extend.generator.register('music-config', function (locals) {
  const music = (locals.data && locals.data.music) || {}
  const tracks = music.tracks || []
  if (!Array.isArray(tracks)) throw new Error('music.yml tracks must contain a list')
  const loop = ['all', 'one', 'none'].includes(music.loop) ? music.loop : 'all'
  const playlist = tracks.map((track, index) => {
    if (!track || typeof track.title !== 'string' || !track.title.trim()) {
      throw new Error(`Music track ${index + 1} needs a title`)
    }
    if (!isLocalOrHttps(track.file)) throw new Error(`Music track ${track.title} needs a local file or HTTPS URL`)
    if (track.cover && !isLocalOrHttps(track.cover)) throw new Error(`Music cover for ${track.title} must use a local path or HTTPS URL`)
    return {
      title: track.title,
      artist: track.artist || '',
      file: track.file,
      cover: track.cover || ''
    }
  })
  const config = {
    enabled: music.enabled !== false,
    autoplay: music.autoplay === true,
    loop,
    tracks: playlist
  }
  const serialized = JSON.stringify(config).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
  return {
    path: 'js/music-config.js',
    data: () => `window.BLOG_MUSIC_CONFIG=${serialized};`
  }
})

