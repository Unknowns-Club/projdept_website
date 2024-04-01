import { Box, css, Flex, HStack, Text, VStack } from "@kuma-ui/core";

interface BookCardParams {
  title: string;
  link: string;
  info: string;
  category: string;
}

export const BookCardList = () => {
  return (
    <Flex py={"1em"} flexWrap="wrap" width={"100%"} gap={"1em"}>
      <BookCard
        link="https://github.com/shimohq/chinese-programmer-wrong-pronunciation"
        title="易发音错误的单词"
        info="中国程序员容易发音错误的单词列表"
        category="杂项"
      />

      <BookCard
        link="https://developer.mozilla.org/zh-CN/docs/Learn"
        title="MDN Web Docs"
        info="来自 MDN 的 Web 开发教程"
        category={"Web"}
      />
      <BookCard
        link="https://developer.mozilla.org/zh-CN/docs/Learn"
        title="MDN Web Docs"
        info="来自 MDN 的 Web 开发教程"
        category={"Web"}
      />
    </Flex>
  );
};

const BookCard = ({ title, link, info, category }: BookCardParams) => {
  return (
    <Box
      className={css`
        height: 200px;
        width: 150px;
        border-radius: 10px;
        background: var(--shiki-color-background);
        box-shadow: var(--shiki-shadow) 0 1px 3px 1px;
        padding: 1em;
        cursor: pointer;
        transition: transform 1s;
      `}
      _hover={{ transform: "scale(1.02)" }}
    >
      <Flex
        h={"100%"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <VStack gap="0.5em">
          <Text fontWeight="bold" color="var(--shiki-token-constant)">
            {title}
          </Text>
          <Text color={"var(--shiki-color-text: #d1d1d1)"}>{info}</Text>
        </VStack>
        <HStack>
          <Box
            borderRadius={10}
            fontSize={"0.8em"}
            px={"0.5em"}
            py={"0.125em"}
            bg={"var(--shiki-token-constant-lighter)"}
          >
            {category}
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};
