import { Box, Flex, Heading, HStack, Spacer, VStack } from "@kuma-ui/core";
import { MemberCard, NullCard } from "./MemberCard";

export const TeamList = () => {
  return (
    <>
      {/*教练/学生教练*/}
      <Flex gap={8}>
        <VStack flex={1}>
          <HStack gap={8} alignItems={"center"} mb={8}>
            <Box height={20} width={10} bg="#CFE4F0"></Box>
            <Heading fontSize={20} fontWeight={"bold"}>
              教练
            </Heading>
          </HStack>
          <HStack gap={8}>
            <MemberCard clazz="电气与信息学院" name="李晓明" />
          </HStack>
          <Spacer h={16}></Spacer>
        </VStack>
        <VStack flex={1}>
          <HStack gap={8} alignItems={"center"} mb={8}>
            <Box height={20} width={10} bg="#CFE4F0"></Box>
            <Heading fontSize={20} fontWeight={"bold"}>
              学生教练
            </Heading>
          </HStack>
          <HStack gap={8}>
            <MemberCard clazz="微机2004" name="李子豪" />
            <MemberCard clazz="软件2003" name="霍欣彤" />
          </HStack>
          <Spacer h={16}></Spacer>
        </VStack>
      </Flex>
      {/*队长/副队长*/}
      <Flex gap={8}>
        <VStack flex={1}>
          <HStack gap={8} alignItems={"center"} mb={8}>
            <Box height={20} width={10} bg="#CFE4F0"></Box>
            <Heading fontSize={20} fontWeight={"bold"}>
              队长
            </Heading>
          </HStack>
          <HStack gap={8}>
            <MemberCard clazz="计科2104" name="陈玟杏" />
          </HStack>
          <Spacer h={16}></Spacer>
        </VStack>
        <VStack flex={1}>
          <HStack gap={8} alignItems={"center"} mb={8}>
            <Box height={20} width={10} bg="#CFE4F0"></Box>
            <Heading fontSize={20} fontWeight={"bold"}>
              副队长
            </Heading>
          </HStack>
          <HStack gap={8}>
            <MemberCard clazz="计科2205" name="杨博宇" />
            <MemberCard clazz="物联2202" name="韩玉坤" />
          </HStack>
          <Spacer h={16}></Spacer>
        </VStack>
      </Flex>
      {/*正式队员*/}
      <HStack gap={8} alignItems={"center"} mb={8}>
        <Box height={20} width={10} bg="#CFE4F0"></Box>
        <Heading fontSize={20} fontWeight={"bold"}>
          正式队员
        </Heading>
      </HStack>
      <Flex gap={8} flexWrap={"wrap"}>
        <MemberCard clazz="微机2102" name="李俊翔" />
        <MemberCard clazz="计科2205" name="刘来熙" />
      </Flex>
      <Spacer h={16}></Spacer>
      {/*预备队员*/}
      <HStack gap={8} alignItems={"center"} mb={8}>
        <Box height={20} width={10} bg="#CFE4F0"></Box>
        <Heading fontSize={20} fontWeight={"bold"}>
          预备队员
        </Heading>
      </HStack>
      <Flex gap={8} flexWrap={"wrap"}>
        <NullCard info={"待 2024 年选拔"} />
      </Flex>
      <Spacer h={16}></Spacer>
    </>
  );
};
