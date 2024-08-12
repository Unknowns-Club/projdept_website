## NEAUACM Project-Dept 官方网站

### 简介

此仓库为 NEAUACM 集训队项目部网站的存储库，存放网页结构及文档内容。

### 技术栈

- 使用 [TypeScript](https://www.typescriptlang.org/zh/) 作为组件编写语言，[mdx](https://www.mdxjs.cn/) 作为文档编写语言。
- 使用 [Next.js](https://nextjs.org/) 与 [Nextra](https://nextra.site/) 作为框架，使用 SSG(静态站点生成)技术生成静态网页。
- 使用 headless UI 库 [KumaUI](https://www.kuma-ui.com/)。

### 参与文档建设

本文档正处于建设中，欢迎各位队员进行贡献。

你可以：

- 修正文字或句法谬误
- 补充代码示例
- 添加新内容

本文档使用 `mdx` 作为编写语言，请你在撰稿之前了解有关于 `Markdown` 的知识，以便顺利进行编辑。

如果需要更进一步满足自定义的需求，请使用 `React` 在 `components` 文件夹内创建组件。

#### 目录说明

- `components` - 存放 React 组件
- `content` - 存放独立页面的内容
- `pages` - 文档存放位置
    - `<分类名>` - 文档分类（文档应在各`<分类名>`下撰写）
    - `<页面名>.mdx` - 独立页面（独立页面应放在`pages`的根目录）
    - `_meta.ts` - 分类的元数据
- `public` - 静态资源
- `styles` - 存放 CSS
- `theme.config.tsx` - 站点设置

### 构建网站

> 如果有调试或构建需求，请安装 [pnpm](https://www.pnpm.cn/) 作为包管理器。

- 运行 `pnpm install` 安装项目所需依赖；
- 运行 `next build` 构建静态文档，输出在`opt`目录。