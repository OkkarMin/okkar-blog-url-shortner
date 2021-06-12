import { Box, Heading, Flex, Avatar, Stack, Image } from "@chakra-ui/react";
import ReactRotatingText from "react-rotating-text";

import BioExperienceTabs from "components/introduction/bio_experience_tabs";
import Container100Ch from "components/layout/container";

export default function Introduction() {
  return (
    <Container100Ch>
      <Box mt="4" w={"full"} boxShadow="xl" rounded={"lg"} overflow={"hidden"}>
        {/* Background and avatar image */}
        <Box>
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
        </Box>

        {/* Name and rotating text */}
        <Box>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"}>Okkar Min</Heading>
            <ReactRotatingText
              pause={2000}
              emptyPause={500}
              items={[
                "Software Developer",
                "System Enginner",
                "Software Architect",
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
    </Container100Ch>
  );
}
