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
} from "@chakra-ui/react";

export default function EducationExperienceList(params) {
  return (
    <Stack direction={["column", "row"]} divider={<StackDivider />}>
      <Center minWidth="6.5em">
        <Heading fontSize="md">Education ‍🎓</Heading>
      </Center>
      <VStack alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start">
          {/* AWS */}
          <Box m="2">
            <HStack>
              <Avatar src="https://logo.clearbit.com/ntu.edu.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Educate Program Manager</Text>
                  <Text>Nanyang Technological University Singapore</Text>
                  <Text as="i" fontSize="sm">
                    2017/08 - 2021/12 (expected)
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>

          {/* AStar */}
          <Box m="2">
            <HStack>
              <Avatar src="https://logo.clearbit.com/sp.edu.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Diploma in Marine Engineering</Text>
                  <Text>Singapore Polytechnic</Text>
                  <Text as="i" fontSize="sm">
                    2012/04 - 2015/05
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </Flex>
      </VStack>
    </Stack>
  );
}
