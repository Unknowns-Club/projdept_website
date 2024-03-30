import { Flex } from "@kuma-ui/core";
import { NewsCard } from "./NewsCard";
import { newsList } from "../../content/news";

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
