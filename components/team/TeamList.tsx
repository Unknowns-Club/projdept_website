import {Box, Flex, Heading, HStack, Spacer, VStack} from "@kuma-ui/core";
import {MemberCard, NullCard} from "./MemberCard";
import {teamList} from "../../content/team";

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
                        <MemberCard clazz="电气与信息学院" name="李晓明"/>
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
                        {teamList.studentCoaches.map((it, index) => (
                            <MemberCard key={index} clazz={it.clazz} name={it.name}/>
                        ))}
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
                        <MemberCard
                            clazz={teamList.teamLeader.clazz}
                            name={teamList.teamLeader.name}
                        />
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
                        {teamList.teamAssistLeaders.map((it, index) => (
                            <MemberCard key={index} clazz={it.clazz} name={it.name}/>
                        ))}
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
                {teamList.fullMembers.map((it, index) => (
                    <MemberCard key={index} clazz={it.clazz} name={it.name}/>
                ))}
            </Flex>
            <Spacer h={16}></Spacer>
            {/*预备队员*/}
            <HStack gap={8} alignItems={"center"} mb={8}>
                <Box height={20} width={10} bg="#CFE4F0"></Box>
                <Heading fontSize={20} fontWeight={"bold"}>
                    预备队员
                </Heading>
            </HStack>
            {
                teamList.reservedMembers.length === 0
                    ? <>
                        <NullCard info={"等待2025年选拔"}/>
                        <Spacer h={16}></Spacer>
                    </>
                    : <>
                        <Flex gap={8} flexWrap={"wrap"}>
                            {teamList.reservedMembers.map((it, index) => (
                                <MemberCard key={index} clazz={it.clazz} name={it.name}/>
                            ))}
                        </Flex>
                        <Spacer h={16}></Spacer>
                    </>
            }

            {/*预备队员*/}
            <HStack gap={8} alignItems={"center"} mb={8}>
                <Box height={20} width={10} bg="#CFE4F0"></Box>
                <Heading fontSize={20} fontWeight={"bold"}>
                    退役队员(自2024.6)
                </Heading>
            </HStack>
            <Flex gap={8} flexWrap={"wrap"}>
                {teamList.retiredMembers.map((it, index) => (
                    <MemberCard key={index} clazz={it.clazz} name={it.name}/>
                ))}
            </Flex>
            <Spacer h={16}></Spacer>
        </>
    );
};
