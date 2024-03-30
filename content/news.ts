interface NewsInfo {
  title: string;
  content: string;
  img: string;
  time: string;
  url: string;
}

export const newsList: NewsInfo[] = [
  {
    title: "2024年预备队员选拔正式开始",
    content:
      "为检验 2024 年新生培训成果及进行 2024 年项目部预备队员选拔工作，进行本次考核。",
    img: "https://pic.neteralex.cn/iad/2024/03/30/6607a137d988e.webp",
    time: "2024/3/30",
    url: "/doc/train/2024_selection_info",
  },
  {
    title: "2024年新生培训正式开始",
    content:
      "欢迎各位同学参加东北农业大学 ACM 集训队项目部 2024 年纳新暨新人培训。",
    img: "https://pic.neteralex.cn/iad/2024/03/24/66002005caa11.webp",
    time: "2024/3/9",
    url: "/doc/train/2024_train_info",
  },
];
