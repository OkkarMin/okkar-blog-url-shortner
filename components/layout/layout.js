import Head from "next/head";
import { Center, Flex } from "@chakra-ui/react";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title }) {
  return (
    <Flex direction="column" minHeight="100vh" padding={[2, 4]}>
      <Head>
        <title>{`${title} | Okkar Min`}</title>
      </Head>

      <Header />

      <Center>
        <Flex direction="column" maxWidth={["95%", "90%", "70%"]}>
          {children}
        </Flex>
      </Center>

      <Footer />
    </Flex>
  );
}
