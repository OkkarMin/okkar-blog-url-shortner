import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  StackDivider,
  HStack,
  VStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function WorkExperienceList(params) {
  return (
    <Stack direction={["column", "row"]} divider={<StackDivider />}>
      <VStack mt={["0", "4"]}>
        <Center minWidth="6.5em">
          <VStack>
            <Heading fontSize="md">Work</Heading>
            <Heading fontSize="md">👨🏻‍💻‍</Heading>
          </VStack>
        </Center>
      </VStack>
      <VStack alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start" ml="4">
          {/* AWS */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/elementaltechnologies.com" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Educate Program Manager</Text>
                  <Text>Amazon Web Services</Text>
                  <Text as="i" fontSize="sm">
                    2020/06 - 2020/12
                  </Text>
                </Box>
              </VStack>
            </HStack>
            <Box ml="4em">
              <UnorderedList>
                <ListItem>
                  Wrote programs in Python and JavaScript to automate manual
                  processes.
                </ListItem>
                <ListItem>
                  Coordinated ASEAN-wide Hackathon, DeepRacer competition and
                  VirtualCareer Fair for 2500 students
                </ListItem>
                <ListItem>
                  Guided students across ASEAN with their AWS cloud native
                  system designs
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/* AStar */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/a-star.edu.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">
                    Research Development Software Engineer
                  </Text>
                  <Text>Agency for Science, Technology and Research</Text>
                  <Text as="i" fontSize="sm">
                    2019/12 - 2020/05
                  </Text>
                </Box>
              </VStack>
            </HStack>
            <Box ml="4em">
              <UnorderedList>
                <ListItem>
                  Researched and developed smart bin system using IOT technology
                </ListItem>
                <ListItem>
                  Designed, implemented and documented mobile application for
                  internal usage
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/* NTU */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/ntu.edu.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Outreach Workshop Instructor</Text>
                  <Text>Nanyang Technological University Singapore</Text>
                  <Text as="i" fontSize="sm">
                    2018/08 - Current
                  </Text>
                </Box>
              </VStack>
            </HStack>
            <Box ml="4em">
              <UnorderedList>
                <ListItem>
                  Taught junior college/polytechnic students programming and
                  computational thinking classes
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Stack>
  );
}
