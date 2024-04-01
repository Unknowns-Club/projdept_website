export const docRecommendList: docRecommendItem[] = [
  {
    title: "易发音错误的单词",
    info: "中国程序员容易发音错误的单词列表",
    category: "杂项",
    link: "https://github.com/shimohq/chinese-programmer-wrong-pronunciation",
  },
  {
    title: "Web 开发全面教程 - MDN",
    info: "来自 MDN 的全方面 Web 开发教程",
    category: "Web",
    link: "https://developer.mozilla.org/zh-CN/docs/Learn",
  },
  {
    title: "中文技术文档写作规范",
    info: "写出可读性更高的技术文档应遵守的规范",
    category: "杂项",
    link: "https://github.com/ruanyf/document-style-guide",
  },
  {
    title: "开源软件指南",
    info: "了解如何启动和发展开源项目",
    category: "项目",
    link: "https://opensource.guide/zh-hans/",
  },
  {
    title: "Git 交互式教程",
    info: "交互式的全面 Git 使用教程",
    category: "项目",
    link: "https://learngitbranching.js.org/?locale=zh_CN",
  },
];

interface docRecommendItem {
  title: string;
  link: string;
  info: string;
  category: string;
}
