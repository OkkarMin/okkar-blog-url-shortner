import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spinner,
  VStack,
  Container,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AliasRedirect({ to_url }) {
  const router = useRouter();

  async function waitHalfSecond() {
    setTimeout(() => {
      router.push(to_url);
    }, 200);
  }

  // useEffect(() => {
  //   waitHalfSecond();
  // }, []);

  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <VStack>
        <Spinner />
        <Heading as="h3" size="lg">
          redirecting to{" "}
        </Heading>
        <Container maxW="100vw" textAlign="center">
          <Heading as="h3" size="lg" textColor="red.500">
            {to_url}
          </Heading>
        </Container>
        <Box maxW="sm">
          <Image src="/redirect.png" width="600" height="500" />
        </Box>
      </VStack>
    </Flex>
  );
}
