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

export default function AchievementExperienceList(params) {
  return (
    <Stack direction={["column", "row"]} divider={<StackDivider />}>
      <VStack mt={["0", "4"]}>
        <Center minWidth="6.5em">
          <VStack>
            <Heading fontSize="md">‍Achievement</Heading>
            <Heading fontSize="md">‍🏆</Heading>
          </VStack>
        </Center>
      </VStack>
      <VStack alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start" ml="4">
          {/* SAS */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/elementaltechnologies.com" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Solution Architect Associate 🔖</Text>
                  <Text>Amazon Web Services</Text>
                  <Text as="i" fontSize="sm">
                    2020/08 - 2023/08
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>

          {/* CPF */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/cpf.gov.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Champion 🏆</Text>
                  <Text>CPF x Microsoft Hackthon</Text>
                  <Text as="i" fontSize="sm">
                    2020
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>

          {/* 24Hackathon NTU */}
          <Box mb="8">
            <HStack>
              <Avatar src="https://logo.clearbit.com/ntu.edu.sg" />
              <VStack alignItems="stretch">
                <Box ml="2">
                  <Text fontWeight="bold">Champion 🏆</Text>
                  <Text>24Hackathon @ NTU</Text>
                  <Text as="i" fontSize="sm">
                    2020
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
