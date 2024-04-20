# 为本网站做出贡献

我们始终乐意接受我们可爱的社区的帮助，这个网站也不例外。然而，在您开始之前，我们想先介绍一些基本规则。

## 什么是 Vuepress？
Vuepress 是一个静态网站生成器，尽管它看起来非常不错。它需要三样东西：一个配置文件，Markdown（.md）文档，以及图片等资源，然后将它们编译成 HTML，以便在浏览器中进行访问。

## 我如何做出贡献？
简单：
* Fork [这个存储库](https://github.com/CuteLittleSky/pojavlauncherteam.github.io)。

* 在任何页面上点击“编辑此页”，然后使用您调整过的 Markdown 语法（使用 Discord？你已经了解 Markdown 了），然后保存和提交。就是这么简单。

* 如果您想在您的 fork 上看到您的更改，您需要做以下操作之一：

1- 将存储库重命名为 `<yourusername>.github.io`

* 设置 Pages 设置以从 `gh-pages` 的根目录构建。

2-（如果您已安装了 node）运行 `npm install && npm run build && npm run start`。

**如果你想对中文文档作出贡献，请在[这个存储库](https://github.com/CuteLittleSky/pojavlauncherteam.github.io)提交PR而不是在官方文档储存库提交PR。**

## 应该做什么，不应该做什么？
只要符合以下所有规则，您几乎可以更改任何内容：

- **不要**做出任何承诺，除非您得到了开发者的许可。
- **不要**传播错误信息和不准确的内容。
- 虽然您可以更改其他所有内容，**但不要修改 .vuepress/config.js**。
- 永远不要、绝对不要将 `gh-pages` 和 `main` 合并到一起。gh-pages 是**VuePress生成的HTML网页文件**，main 是**文档的Markdown源文件**。
- **不要**删除任何包含.的文件（.nvmrc、.gitattributes 等）。

记住这些规则，您就可以自由地帮助我们完善我们的网站了！
