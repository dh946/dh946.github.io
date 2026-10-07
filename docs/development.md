# 修改、预览与 GitHub 发布

1. 修改源码：动态数据、文章、主题配置和样式均在本仓库。
2. 本地检查：`npm run clean`、`npm run build`、`npm run check`。
3. 本地浏览：`npm run server` 后访问 http://localhost:4000/。
4. 提交到 `codex/blog-source`：GitHub Actions 构建并上传 `blog-preview`，在 Actions 页查看日志。
5. 首次发布：验收源码迁移 PR 后，在仓库 Pages 设置中选择 GitHub Actions，再合并到默认 `master` 分支。
6. 后续发布：更新 `master` 或在 Pages CMS 保存，检查通过后自动部署。

## 当前 Windows 会话的诊断结论

2026-10-07：Codex 默认沙箱启动失败，报 `helper_unknown_error: setup refresh had errors`。同样的命令获准在沙箱外执行后正常运行；博客的 Node/Hexo 能成功构建。沙箱内部 setup 的具体失败原因尚未取得日志。

Git 提示仓库由旧的 CodexSandboxOffline 账户持有。可以对可信的本项目使用一次性参数 `git -c safe.directory=J:/blog ...`，无需设置通配符安全例外。

本机系统代理当时为 `127.0.0.1:10808`。Git 直连 github.com:443 失败，使用现有代理后成功；需要时可用 `git -c http.proxy=http://127.0.0.1:10808 ...`。代理端口以本机实际设置为准。
