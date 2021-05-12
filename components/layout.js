import Head from "next/head";
import { Center, Flex } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children, title }) {
  return (
    <Center>
      <Head>
        <title>{`${title} | Okkar Min`}</title>
      </Head>

      <Flex
        direction="column"
        minHeight="100vh"
        padding={[2, 4]}
        maxWidth={["95%", "90%", "70%"]}
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </Center>
  );
}
