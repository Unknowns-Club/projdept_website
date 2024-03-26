import { Flex } from "@kuma-ui/core";
import { NewsCard } from "./NewsCard";

interface NewsInfo {
  title: string;
  content: string;
  img: string;
  time: string;
  url: string;
}

const newsList: NewsInfo[] = [
  {
    title: "2024年新生培训正式开始",
    content: "本次培训自 2024 年 3 月 10 日开始，预计持续一个月时间。",
    img: "https://pic.neteralex.cn/iad/2024/03/24/66002005caa11.webp",
    time: "2024/3/9",
    url: "/doc/train/2024_train_info",
  },
];

export const NewsList = () => {
  return (
    <>
      <Flex gap={16} flexWrap={"wrap"} width={"100%"}>
        {newsList.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            content={item.content}
            img={item.img}
            url={item.url}
            time={item.time}
          />
        ))}
      </Flex>
    </>
  );
};
