import { Container, Text, Spacer, Center } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <>
      <Spacer />
      <Center mt="12">
        <Text fontSize="xs">🛠 by Okkar with [♥️ , NextJS, ChakraUI]</Text>
      </Center>
    </>
  );
}
