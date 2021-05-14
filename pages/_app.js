import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { analytics } from "../lib/firebase";
import { SEOConfiguration } from "../config";
import {
  Center,
  ChakraProvider,
  CSSReset,
  extendTheme,
  Spinner,
  Flex,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/karla";

const theme = extendTheme({
  fonts: {
    heading: "Karla",
    body: "Rubik",
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent("screen_view");
      };

      router.events.on("routeChangeComplete", logEvent);

      // for first page
      logEvent(window.location.pathname);

      return () => router.events.off("routeChangeComplete", logEvent);
    }
  }, []);

  useEffect(() => {
    document.fonts
      .load("12px Karla")
      .then(() =>
        document.fonts.load("12px Rubik").then(() => setIsReady(true))
      );
  }, []);

  return isReady ? (
    <>
      <DefaultSeo {...SEOConfiguration} />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  ) : (
    <>
      <DefaultSeo {...SEOConfiguration} />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <VStack
          height="100vh"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" />
        </VStack>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
