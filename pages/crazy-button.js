import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import useWindowDimensions from "hooks/useWindowDimensions";
import { firestore } from "lib/firebase";

export default function CrazyButtonPage() {
  const { height, width } = useWindowDimensions();
  const [buttonTop, setButtonTop] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("button")
      .doc("buttonLocation")
      .onSnapshot((doc) => {
        moveToLocation(doc.data().randomTop, doc.data().randomLeft);
      });

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  function goCrazy() {
    const randomTop = Math.random();
    const randomLeft = Math.random();

    firestore.collection("button").doc("buttonLocation").set({
      randomTop,
      randomLeft,
    });
  }

  function moveToLocation(randomTop, randomLeft) {
    const maxTop = height - buttonRef.current.clientHeight;
    const maxLeft = width - buttonRef.current.clientWidth;

    // + 1 becuase Math.random is [0, 1)
    let newButtonTop = randomTop * (maxTop + 1);
    let newButtonLeft = randomLeft * (maxLeft + 1);

    // Update the button location
    setButtonTop(newButtonTop);
    setButtonLeft(newButtonLeft);
  }

  return (
    <>
      <Head>
        <title>🤪 Crazy Button | Okkar Min</title>
      </Head>

      <Box>
        <Button
          colorScheme="red"
          left={buttonLeft}
          onClick={() => goCrazy()}
          ref={buttonRef}
          top={buttonTop}
        >
          Catch Me! 🤡
        </Button>
      </Box>
    </>
  );
}
