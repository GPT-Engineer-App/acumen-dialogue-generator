import { Box, Button, Container, Divider, Flex, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} height="100vh">
      <Flex h="full">
        {/* Left Panel */}
        <Box width="208px" borderRight="1px solid gray" p={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Acumen
          </Text>
          <Button colorScheme="blue" mb={4}>
            新建对话
          </Button>
          <Divider mb={4} />
          <VStack divider={<Divider borderColor="gray.200" />} spacing={4}>
            <Text fontSize="sm">
              标题1
              <br />
              2024-04-15 19:19:04
            </Text>
            <Text fontSize="sm">
              标题2
              <br />
              2024-04-15 19:20:05
            </Text>
            <Text fontSize="sm">
              标题3
              <br />
              2024-04-15 19:21:06
            </Text>
            <Text fontSize="sm">
              标题4
              <br />
              2024-04-15 19:22:07
            </Text>
          </VStack>
        </Box>

        {/* Right Panel */}
        <Flex flex="1" flexDirection="column" p={4}>
          {/* Conversation Area */}
          <VStack align="stretch" flex="1" overflowY="auto" spacing={4}>
            <Flex align="center">
              <Box w="40px" h="40px" bg="gray.200" borderRadius="full" mr={2} />
              <Text flex="1">比亚迪有几个型号</Text>
            </Flex>
            <Flex align="center" justifyContent="flex-end">
              <Text flex="1" textAlign="right">
                比亚迪有3个型号
              </Text>
              <Box w="40px" h="40px" bg="gray.200" borderRadius="full" ml={2} />
            </Flex>
          </VStack>

          {/* Input Area */}
          <Flex mt={4} align="center">
            <IconButton icon={<FaMicrophone />} aria-label="Record voice" size="lg" mr={2} />
            <InputGroup size="lg">
              <Input placeholder="输入消息..." pr="4.5rem" />
              <InputRightElement width="4.5rem">
                <IconButton icon={<FaPaperPlane />} aria-label="Send message" size="lg" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
