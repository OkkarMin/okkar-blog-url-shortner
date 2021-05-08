import Image from "next/image";
import { Box, Flex, Heading, Link, Spinner, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AliasRedirect({ to_url }) {
  const router = useRouter();

  async function waitHalfSecond() {
    setTimeout(() => {
      router.push(to_url);
    }, 500);
  }

  useEffect(() => {
    waitHalfSecond();
  });

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <VStack>
        <Spinner />
        <Heading as="h3" size="lg">
          redirecting to{" "}
        </Heading>
        <Heading as="h3" size="lg">
          <Link color="red.500" href={to_url}>
            {to_url}
          </Link>
        </Heading>
        <Box m="20px auto" maxW="sm">
          <Image src="/redirect.png" width="600" height="500" />
        </Box>
      </VStack>
    </Flex>
  );
}
