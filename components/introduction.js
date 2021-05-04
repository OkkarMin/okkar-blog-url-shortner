import { server } from "../config";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Stack, Heading, Text, Link } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      px={[5]}
    >
      <Stack spacing={2} minWidth="60%">
        <Heading>Hello 👋 I'm Okkar Min</Heading>

        <Text>
          Software Architect, System Engineer and Developer. Connect with me at{" "}
          <Link color="cyan.700" isExternal={true} href={`${server}/linkedin`}>
            LinkedIn
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>

        <Text>
          Read my{" "}
          <NextLink href={`${server}/blog`}>
            <Link color="cyan.700">blog posts </Link>
          </NextLink>{" "}
          or take a look at some of{" "}
          <NextLink href={`${server}/projects`}>
            <Link color="cyan.700">my projects </Link>
          </NextLink>
          while you're here.
        </Text>
      </Stack>
    </Stack>
  );
}
