import { Container, Text, Spacer } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <>
      <Spacer />
      <Container centerContent>
        <Text fontSize="xs">🛠 by Okkar with [♥️ , NextJS, ChakraUI]</Text>
      </Container>
    </>
  );
}
