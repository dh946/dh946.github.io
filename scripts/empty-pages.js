// Hexo's index/archive generators omit routes when there are no published posts.
hexo.extend.generator.register('empty-pages', function (locals) {
  if (locals.posts.length) return []
  const root = this.config.root || '/'
  const common = { comments: false, total: 1, current: 1, posts: locals.posts }
  return [
    {
      path: 'index.html',
      layout: 'page',
      data: {
        ...common,
        __index: true,
        content: `<section class="home-welcome"><h2>写作、生活与一点点记录</h2><p>文章正在整理，先从生活里的小事开始。</p><p><a href="${root}moments/">看看动态</a> · <a href="${root}gallery/">翻翻相册</a></p></section>`
      }
    },
    {
      path: `${this.config.archive_dir}/index.html`,
      layout: 'archive',
      data: { ...common, title: '文章', archive: true }
    }
  ]
})
