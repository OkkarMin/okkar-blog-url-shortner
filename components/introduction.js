import { server } from "../config";
import NextLink from "next/link";
import ReactRotatingText from "react-rotating-text";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Text, Link } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <Container mt={6}>
      <Heading>Hello 👋 I'm Okkar Min</Heading>

      <Heading textDecor="underline">
        <ReactRotatingText
          items={[
            "Software Architect",
            "System Enginner",
            "Software Developer",
            "IOT Enthusiast",
          ]}
        />
      </Heading>

      <Text mt={6}>
        Connect with me at{" "}
        <Link
          textDecoration="underline"
          color="red.500"
          isExternal={true}
          href={`${server}/linkedin`}
        >
          LinkedIn
          <ExternalLinkIcon mx="2px" />
        </Link>
        Read my{" "}
        <NextLink href={`${server}/blog`}>
          <Link textDecoration="underline" color="red.500">
            blog posts
          </Link>
        </NextLink>{" "}
        or take a look at some of{" "}
        <NextLink href={`${server}/projects`}>
          <Link textDecoration="underline" color="red.500">
            my projects
          </Link>
        </NextLink>{" "}
        while you're here.
      </Text>
    </Container>
  );
}
