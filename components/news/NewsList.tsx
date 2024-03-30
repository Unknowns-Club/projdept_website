import { VStack } from "@kuma-ui/core";
import { NewsCard } from "./NewsCard";
import { newsList } from "../../content/news";

export const NewsList = () => {
  return (
    <>
      <VStack gap={16} width={"100%"}>
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
      </VStack>
    </>
  );
};
