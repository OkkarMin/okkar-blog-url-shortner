import redirect from "nextjs-redirect";
import { Box, Heading, Image, Link, Spinner, VStack } from "@chakra-ui/react";

export default function AliasRedirect({ to_url }) {
  const Redirect = redirect(to_url);

  return (
    <Redirect>
      <VStack m="20px auto">
        <Spinner />
        <Heading as="h3" size="lg">
          Redirecting to{" "}
          <Link color="red.400" href={to_url}>
            {to_url}
          </Link>
        </Heading>
        <Box m="20px auto" maxW="sm">
          <Image src="/redirect.png" />
        </Box>
      </VStack>
    </Redirect>
  );
}
