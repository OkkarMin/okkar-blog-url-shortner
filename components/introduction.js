import {
  Box,
  Center,
  Heading,
  VStack,
  Flex,
  Avatar,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import ReactRotatingText from "react-rotating-text";

import BioExperienceTabs from "./bio_experience_tabs";

export default function Introduction() {
  return (
    <Container maxWidth="80ch">
      <VStack mt={4}>
        <Box w={"full"} boxShadow={"2xl"} rounded={"lg"} overflow={"hidden"}>
          {/* Background and avatar image */}
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

          {/* Name and rotating text */}
          <Box>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"}>Okkar Min</Heading>
              <ReactRotatingText
                pause={2000}
                emptyPause={500}
                items={[
                  "Software Architect",
                  "System Enginner",
                  "Software Developer",
                  "IOT Enthusiast",
                ]}
              />
            </Stack>
          </Box>

          {/* Bio and experience tabs */}
          <Box>
            <BioExperienceTabs />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}
