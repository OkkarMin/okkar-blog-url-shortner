import { Flex } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh" p={[2, 4]}>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
