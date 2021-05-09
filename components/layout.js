import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} | Okkar Min`}</title>
      </Head>

      <Flex direction="column" minHeight="100vh" p={[2, 4]}>
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
}
