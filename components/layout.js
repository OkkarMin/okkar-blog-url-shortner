import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh" p={[2, 4]}>
      {children}
    </Flex>
  );
}
