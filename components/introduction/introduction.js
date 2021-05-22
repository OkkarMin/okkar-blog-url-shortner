import {
  Box,
  Heading,
  VStack,
  Flex,
  Avatar,
  Stack,
  Image,
} from "@chakra-ui/react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

import BioExperienceTabs from "./bio_experience_tabs";
import Container100Ch from "components/layout/container";

const MotionBox = motion(Box);

export default function Introduction() {
  return (
    <Container100Ch>
      <Box mt="4" w={"full"} boxShadow="xl" rounded={"lg"} overflow={"hidden"}>
        {/* Background and avatar image */}
        <MotionBox
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
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
        </MotionBox>

        {/* Name and rotating text */}
        <MotionBox
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
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
        </MotionBox>

        {/* Bio and experience tabs */}
        <MotionBox
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <BioExperienceTabs />
        </MotionBox>
      </Box>
    </Container100Ch>
  );
}
