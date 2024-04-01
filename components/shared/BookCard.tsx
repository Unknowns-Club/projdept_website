import { Box, css, Flex, HStack, Text, VStack } from "@kuma-ui/core";
import { docRecommendList } from "../../content/doc-recommend";

interface BookCardParams {
  title: string;
  link: string;
  info: string;
  category: string;
}

export const BookCardList = () => {
  return (
    <Flex py={"1em"} flexWrap="wrap" width={"100%"} gap={"1em"}>
      {docRecommendList.map((it, index) => {
        return (
          <BookCard
            link={it.link}
            title={it.title}
            info={it.info}
            category={it.category}
          />
        );
      })}
    </Flex>
  );
};

export const BookCard = ({ title, link, info, category }: BookCardParams) => {
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
      onClick={() => window.open(link, "_blank")}
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
