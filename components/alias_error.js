import { Box, Heading, Image, VStack } from "@chakra-ui/react";

export default function AliasEror({ error_message }) {
  return (
    <VStack m="20px auto">
      <Heading as="h3" size="lg">
        okkar.tk/{error_message}
      </Heading>
      <Box m="20px auto" maxW="xl">
        <Image src="/404.jpg" />
      </Box>
    </VStack>
  );
}
