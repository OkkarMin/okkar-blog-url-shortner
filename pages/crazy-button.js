import { Button, Flex } from "@chakra-ui/react";
import { firestore } from "lib/firebase";

export default function CrazyButtonPage() {
  return (
    <Flex
      direction="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        colorScheme="red"
        onClick={() => firestore.collection("users").add({ name: "Okkar" })}
      >
        Crazy Button
      </Button>
    </Flex>
  );
}
