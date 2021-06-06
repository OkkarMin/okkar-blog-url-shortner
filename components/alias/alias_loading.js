import Image from "next/image";
import { Box, Flex, Heading, Spinner, VStack } from "@chakra-ui/react";

export default function AliasLoading({ alias }) {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <VStack>
        <Spinner />
        <Heading as="h3" size="lg">
          redirecting to{" "}
        </Heading>
        <Heading as="h3" size="lg" color="red.500">
          {alias}
        </Heading>
        <Box m="20px auto" maxW="sm">
          <Image src="/redirect.png" width="600" height="500" />
        </Box>
      </VStack>
    </Flex>
  );
}
