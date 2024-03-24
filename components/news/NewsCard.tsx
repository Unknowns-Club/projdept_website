import {Box, css, Flex, Heading, Text, VStack} from "@kuma-ui/core"

export const NewsCard = ({title, content, img, time, url}: {
    title: string,
    content: string,
    img: string,
    time: string,
    url: string
}) => {
    return (
        <>
            <Box maxW={"50%"} minW={370} flex="1" bg={"rgba(255,255,255,0.5)"} cursor={"pointer"}
                 borderRadius={10}
                 width="100%"
                 boxShadow={"rgba(0,0,0,0.05) 0 2px 5px"} onClick={() => window.open(url, "_blank")} p={16}>
                <VStack gap={12}>
                    <Box>
                        <img className={css`border-radius: 10px;
                            box-shadow: rgba(0, 0, 0, 0.05) 0 2px 5px`} src={img} alt={title}/>
                    </Box>
                    <Heading fontSize={20}>{title}</Heading>
                    <Text color={"gray"}>{content}</Text>
                    <Flex justifyContent={"space-between"}>
                        <Text color={"#2276a1"} fontSize={14}>{time}</Text>
                        <Text color={"#2276a1"} fontSize={14}>查看详情</Text>
                    </Flex>
                </VStack>
            </Box>
        </>
    )
}