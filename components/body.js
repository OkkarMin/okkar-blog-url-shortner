import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  useColorModeValue,
  Flex,
  Avatar,
  Stack,
  Spacer,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  StackDivider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import ReactRotatingText from "react-rotating-text";

export default function Body() {
  return (
    <VStack>
      <Container>
        <Center py={6}>
          <Box w={"full"} boxShadow={"2xl"} rounded={"lg"} overflow={"hidden"}>
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1615192232476-758a110dac9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={"https://avatars.githubusercontent.com/u/24297303?v=4"}
                alt={"Okkar Min"}
                bg="white"
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"}>Okkar Min</Heading>
                <Text>
                  <ReactRotatingText
                    items={[
                      "Software Architect",
                      "System Enginner",
                      "Software Developer",
                      "IOT Enthusiast",
                      "Somethiing else",
                    ]}
                  />
                </Text>
              </Stack>

              <Tabs isFitted variant="enclosed">
                <TabList mb={4}>
                  <Tab _selected={{ fontWeight: "bold", bg: "gray.100" }}>
                    Bio
                  </Tab>
                  <Tab _selected={{ fontWeight: "bold", bg: "gray.100" }}>
                    {" "}
                    Experience{" "}
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text>
                      Hello 👋 I'm Okkar Min, final year computer science
                      student from Nanyang Technological University.
                    </Text>
                    <Text mt={4}>
                      "To automate or not to automate, that is the question". I
                      enjoy discussing on technology and its trade-offs.
                    </Text>

                    <Stack
                      mt={4}
                      direction={["column", "row"]}
                      divider={<StackDivider />}
                    >
                      <Button
                        w="full"
                        rightIcon={<ArrowForwardIcon />}
                        variant="outline"
                      >
                        My experience
                      </Button>

                      <Button
                        w="full"
                        rightIcon={<ArrowForwardIcon />}
                        variant="outline"
                      >
                        Blog
                      </Button>

                      <Button
                        w="full"
                        rightIcon={<ArrowForwardIcon />}
                        variant="outline"
                      >
                        Projects
                      </Button>
                    </Stack>

                    <HStack mt={4} divider={<StackDivider />}></HStack>
                  </TabPanel>
                  <TabPanel>
                    <Text>✏️ in progress</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              {/* <Button
                w={"full"}
                mt={8}
                bg={useColorModeValue("#151f21", "gray.900")}
                color={"white"}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Follow
              </Button> */}
            </Box>
          </Box>
        </Center>
      </Container>
    </VStack>
  );
}
