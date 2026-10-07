(() => {
  const config = window.BLOG_MUSIC_CONFIG || {}
  if (config.enabled === false) return

  const root = document.getElementById('blog-music-player')
  if (!root) return
  const tracks = Array.isArray(config.tracks) ? config.tracks : []

  const card = document.createElement('section')
  card.className = 'blog-player-card'
  card.innerHTML = `
    <div class="blog-player-main">
      <img class="blog-player-cover" alt="音乐封面" hidden>
      <div class="blog-player-meta">
        <strong class="blog-player-title">站点音乐</strong>
        <span class="blog-player-status" aria-live="polite"></span>
      </div>
      <div class="blog-player-controls">
        <button type="button" data-action="previous" aria-label="上一首" title="上一首">◀</button>
        <button type="button" class="blog-player-toggle" data-action="toggle" aria-label="播放" title="播放">▶</button>
        <button type="button" data-action="next" aria-label="下一首" title="下一首">▶▶</button>
      </div>
    </div>
    <div class="blog-player-progress" hidden>
      <span data-current>0:00</span>
      <input type="range" min="0" max="1000" value="0" aria-label="播放进度">
      <span data-duration>0:00</span>
    </div>
    <details class="blog-player-list" hidden>
      <summary>播放列表</summary>
      <ul></ul>
    </details>
    <audio preload="metadata" playsinline></audio>`
  root.append(card)

  const audio = card.querySelector('audio')
  const title = card.querySelector('.blog-player-title')
  const status = card.querySelector('.blog-player-status')
  const cover = card.querySelector('.blog-player-cover')
  const toggle = card.querySelector('[data-action="toggle"]')
  const progress = card.querySelector('.blog-player-progress')
  const seek = progress.querySelector('input')
  const currentTime = progress.querySelector('[data-current]')
  const duration = progress.querySelector('[data-duration]')
  const list = card.querySelector('.blog-player-list')
  const listItems = list.querySelector('ul')
  let active = -1

  const formatTime = seconds => {
    if (!Number.isFinite(seconds)) return '0:00'
    const minutes = Math.floor(seconds / 60)
    return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
  }

  const setPlaying = playing => {
    toggle.textContent = playing ? 'Ⅱ' : '▶'
    toggle.setAttribute('aria-label', playing ? '暂停' : '播放')
    toggle.title = playing ? '暂停' : '播放'
  }

  const selectTrack = (index, play) => {
    if (!tracks.length) return
    active = (index + tracks.length) % tracks.length
    const track = tracks[active]
    audio.src = track.file
    title.textContent = track.title
    status.textContent = track.artist || '自定义歌单'
    if (track.cover) {
      cover.src = track.cover
      cover.hidden = false
    } else {
      cover.removeAttribute('src')
      cover.hidden = true
    }
    ;[...listItems.querySelectorAll('button')].forEach((button, buttonIndex) => {
      button.setAttribute('aria-current', String(buttonIndex === active))
    })
    if (play) {
      const attempt = audio.play()
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => { status.textContent = '自动播放受浏览器限制，请点播放' })
      }
    } else {
      audio.load()
      setPlaying(false)
    }
  }

  if (!tracks.length) {
    status.textContent = '在手机后台添加音频后即可播放'
    card.querySelectorAll('[data-action]').forEach(button => { button.disabled = true })
    return
  }

  progress.hidden = false
  list.hidden = false
  tracks.forEach((track, index) => {
    const item = document.createElement('li')
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = track.title
    button.setAttribute('aria-current', 'false')
    if (track.artist) {
      const artist = document.createElement('small')
      artist.textContent = track.artist
      button.append(artist)
    }
    button.addEventListener('click', () => {
      selectTrack(index, true)
      list.open = false
    })
    item.append(button)
    listItems.append(item)
  })

  card.querySelector('[data-action="previous"]').addEventListener('click', () => selectTrack(active - 1, true))
  card.querySelector('[data-action="next"]').addEventListener('click', () => selectTrack(active + 1, true))
  toggle.addEventListener('click', () => {
    if (audio.paused) {
      if (active < 0) selectTrack(0, true)
      else audio.play().catch(() => { status.textContent = '请再次点击播放，浏览器限制了自动播放' })
    } else {
      audio.pause()
    }
  })
  audio.addEventListener('play', () => setPlaying(true))
  audio.addEventListener('pause', () => setPlaying(false))
  audio.addEventListener('loadedmetadata', () => { duration.textContent = formatTime(audio.duration) })
  audio.addEventListener('timeupdate', () => {
    currentTime.textContent = formatTime(audio.currentTime)
    duration.textContent = formatTime(audio.duration)
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      seek.value = String(Math.round(audio.currentTime / audio.duration * 1000))
    }
  })
  audio.addEventListener('error', () => { status.textContent = '音频暂时无法读取，请检查文件或网络' })
  audio.addEventListener('ended', () => {
    if (config.loop === 'one') {
      audio.currentTime = 0
      audio.play().catch(() => {})
    } else if (config.loop === 'all' || active < tracks.length - 1) {
      selectTrack(active + 1, true)
    } else {
      setPlaying(false)
      status.textContent = '播放完成'
    }
  })
  seek.addEventListener('input', () => {
    if (Number.isFinite(audio.duration)) audio.currentTime = Number(seek.value) / 1000 * audio.duration
  })

  selectTrack(0, false)
  if (config.autoplay) {
    audio.play().catch(() => { status.textContent = '自动播放受浏览器限制，请点播放' })
  }
})()

