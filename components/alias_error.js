import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function AliasEror({ error_message }) {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <VStack>
        <Heading as="h3" size="lg">
          {error_message}
        </Heading>
        <Box m="20px auto" maxW="xl">
          <Image src="/404.jpg" width="600" height="400" />
        </Box>
      </VStack>
    </Flex>
  );
}
