## NEAUACM Project-Dept 官方网站

### 简介

此仓库为 NEAUACM 项目部网站的内容库，存放网页结构及文章内容。

### 技术栈

- 使用 `Next.js` 与 `Nextra` 作为框架，使用 SSG 生成静态网页。
- 使用 headless UI 库 `KumaUI`。

### 贡献

- 文档使用 `mdx` ，为 `markdown` + `react` 的拓展语法。
- 按照`doc`目录内的内容结构撰写文档即可。
- 如有新建 `react` 组件的需求，在`components`目录内创建即可。

### 构建

- 运行 `next build` 构建静态文档，输出在`opt`目录。