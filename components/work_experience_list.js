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
      <Center minWidth="6.5em">
        <Heading fontSize="md">Work 👨🏻‍💻‍</Heading>
      </Center>
      <VStack alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start">
          {/* AWS */}
          <Box m="2">
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
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/* AStar */}
          <Box m="2">
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
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/* NTU */}
          <Box m="2">
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
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Stack>
  );
}
