# 匿名邮客的博客源项目

基于 Hexo 7 与 Butterfly 5。文章和动态保存在 Git 仓库，由 GitHub Actions 构建和检查。动态页面直接输出 HTML，不依赖 Artitalk 或 LeanCloud。

## 本地预览

```sh
npm ci
npm run clean
npm run build
npm run check
npm run server
```

## 发布

调试源码分支为 `codex/blog-source`。推送后自动构建并上传 `blog-preview` 文件包，不更新正式网站。Actions 日志会报告缺失页面、内部链接和本地图片问题。

验收后，将源码分支合并到 `master`，并在 Settings → Pages 中把 Build and deployment 的 Source 设为 GitHub Actions。之后每次更新 `master`，构建检查通过才会发布；失败时保留上一版网站。

工作流也提供手动 `publish` 选项（默认关闭）。GitHub 的手动运行入口需要工作流已存在于默认分支。首次迁移前可通过源码分支的 push 构建调试。

## 网页编辑

打开 https://app.pagescms.org/，用 GitHub 登录，仅授权 `dh946.github.io` 仓库，并选择 `master` 分支。仓库中的 `.pages.yml` 配置了“文章”“动态”“相册管理”“网站设置”和“音乐播放器”表单。

文章和动态可直接在手机浏览器编辑。动态支持文字、日期、最多 9 张图片和标签，按时间倒序显示。相册表单可一次选择最多 24 张照片，自动生成相册封面卡片和独立页面。网站设置用于替换首页背景图。音乐表单用于上传自有音频、维护歌单和播放顺序；手机浏览器可能拦截自动播放，首次点击播放即可。

照片上传到 `source/img/uploads/`，音频上传到 `source/music/uploads/`，网页均从 GitHub Pages 提供静态文件。上传前建议将照片压缩到适合手机浏览的尺寸，并避免把大型无损音频加入公开仓库。CMS 保存后提交到 GitHub，触发检查和部署；页面更新可能受浏览器缓存影响。CMS 暂时不可用时，也可直接使用 GitHub 网页编辑文件。

未发布草稿放在本地 `source/_drafts/`，已从 GitHub 同步范围排除。公开仓库只保存可公开的内容。

## 写作

文章放在 `source/_posts/`，页面放在 `source/`。图片优先放在 `source/img/`，在文章中使用 `/img/文件名` 引用。动态列表放在 `source/_data/moments.yml`，示例结构如下（此示例不会发布到页面）：

```yaml
- date: '2026-10-07T12:00:00+08:00'
  text: |
    今天想记录的一件小事。
  images:
    - url: /img/uploads/photo.webp
      alt: 图片描述
  tags: [生活]
```

旧站文章“测试文章”目前只作为本地草稿保存在 `source/_drafts/`，检查来源和授权后再发布。


