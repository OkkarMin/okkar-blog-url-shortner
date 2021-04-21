import redirect from "nextjs-redirect";
import Image from "next/image";
import { Box, Flex, Heading, Link, Spinner, VStack } from "@chakra-ui/react";

export default function Develop({ to_url }) {
  const Redirect = redirect(to_url);

  return (
    <Redirect>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <VStack>
          <Spinner />
          <Heading as="h3" size="lg">
            redirecting to{" "}
            <Link color="red.500" href={to_url}>
              {to_url}
            </Link>
          </Heading>
          <Box m="20px auto" maxW="sm">
            <Image src="/redirect.png" width="600" height="400" />
          </Box>
        </VStack>
      </Flex>
    </Redirect>
  );
}
