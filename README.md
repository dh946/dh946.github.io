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

打开 https://app.pagescms.org/，用 GitHub 登录，仅授权 `dh946.github.io` 仓库，并选择当前源码分支。仓库中的 `.pages.yml` 已配置“动态”和“文章”编辑表单。

动态支持文字、日期、最多 9 张图片和标签，按时间倒序显示。上传图片保存到 `source/img/uploads/`，页面使用 `/img/uploads/` 路径。CMS 保存后提交到 GitHub，触发上述构建流程。CMS 暂时不可用时，也可直接使用 GitHub 网页编辑文件。

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

