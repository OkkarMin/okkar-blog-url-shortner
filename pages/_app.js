import { useEffect } from "react";
import { analytics } from "../lib/firebase";
import { useRouter } from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

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
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
