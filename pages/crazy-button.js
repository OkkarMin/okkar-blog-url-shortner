import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Portal,
  Table,
  Tbody,
  Text,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import useWindowDimensions from "hooks/useWindowDimensions";
import { firestore } from "lib/firebase";

export default function CrazyButtonPage() {
  const { height, width } = useWindowDimensions();
  const [buttonTop, setButtonTop] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);
  const [caughtCount, setCaughtCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const unsubscribeButtonLocation = firestore
      .collection("button")
      .doc("buttonLocation")
      .onSnapshot((doc) => {
        moveToLocation(doc.data().randomTop, doc.data().randomLeft);
      });

    const unsubscribeCaughtCount = firestore
      .collection("button")
      .doc("caughtCount")
      .onSnapshot((doc) => {
        setCaughtCount(doc.data().count);
      });

    return function cleanup() {
      unsubscribeButtonLocation();
      unsubscribeCaughtCount();
    };
  }, []);

  function goCrazy() {
    const randomTop = Math.random();
    const randomLeft = Math.random();
    firestore.collection("button").doc("buttonLocation").set({
      randomTop,
      randomLeft,
    });

    setCaughtCount(caughtCount + 1);
    firestore.doc("button/caughtCount").set({
      count: caughtCount,
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
        <Portal>
          <Box mt="-10" p="2" width="md">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Text>Current catchers : </Text>
                </Tr>
                <Tr>
                  <Td>🛠 in progress</Td>
                </Tr>
                <Tr>
                  <Td>🤡 has been caught {caughtCount} times</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Portal>
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
