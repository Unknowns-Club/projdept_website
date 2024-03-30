import { Box, Flex, Heading, Text, VStack } from "@kuma-ui/core";
import Image from "next/image";

export const NewsCard = ({
  title,
  content,
  img,
  time,
  url,
}: {
  title: string;
  content: string;
  img: string;
  time: string;
  url: string;
}) => {
  return (
    <>
      <Box
        minW={370}
        bg={"rgba(255,255,255,0.5)"}
        cursor={"pointer"}
        borderRadius={10}
        width="100%"
        boxShadow={"rgba(0,0,0,0.05) 0 2px 5px"}
        onClick={() => window.open(url, "_self")}
        p={16}
      >
        <Flex justifyContent="space-between" gap={12}>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={12}
          >
            <VStack gap={12}>
              <Heading fontWeight={"bold"} fontSize={20}>
                {title}
              </Heading>
              <Text color={"gray"}>{content}</Text>
            </VStack>

            <Text color={"#2276a1"} fontSize={14}>
              {time}
            </Text>
          </Flex>
          <Box display={["none", "block"]}>
            <Image
              src={img}
              alt={title}
              width={320}
              height={180}
              objectFit="fill"
              style={{
                borderRadius: 10,
                height: "100%",
                maxWidth: "240px",
              }}
            ></Image>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
