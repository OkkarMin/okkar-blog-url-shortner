import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { analytics } from "lib/firebase";
import { SEOConfiguration } from "config";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Baloo 2",
    body: "Baloo 2",
    code: "JetBrains Mono",
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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

  return (
    <>
      <DefaultSeo {...SEOConfiguration} />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
