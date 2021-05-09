import { Container, Text, Spacer } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <>
      <Spacer />
      <Container centerContent mt="12">
        <Text fontSize="xs">🛠 by Okkar with [♥️ , NextJS, ChakraUI]</Text>
      </Container>
    </>
  );
}
