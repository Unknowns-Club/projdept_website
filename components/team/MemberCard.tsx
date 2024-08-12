import {Box, Flex, Text, VStack} from "@kuma-ui/core";

export const MemberCard = ({
                               name,
                               clazz,
                           }: {
    name: string;
    clazz: string;
}) => {
    return (
        <Box
            width={"25%"}
            flex={1}
            minW={150}
            bg="rgba(255,255,255,0.5)"
            boxShadow={"rgba(0,0,0,0.05) 0 2px 5px"}
            px={16}
            py={12}
            mb={8}
        >
            <Flex justifyContent="space-between">
                <VStack gap={8}>
                    <Text fontSize={20}>{name}</Text>
                    <Text color={"#2276a1"} fontSize={14}>
                        {clazz}
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
};

export const NullCard = ({info}: { info: string }) => {
    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                width={"100%"}
                fontWeight="bold"
                color={"#4E81A6"}
                p={16}
                bg="rgba(255,255,255,0.5)"
                boxShadow={"rgba(0,0,0,0.05) 0 2px 5px"}
                mb={8}
            >
                {info}
            </Flex>
        </>
    );
};
