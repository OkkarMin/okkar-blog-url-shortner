import { Box, Button } from "@chakra-ui/react";
import { firestore } from "lib/firebase";
import { useRef, useState } from "react";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function CrazyButtonPage() {
  const { height, width } = useWindowDimensions();
  const buttonRef = useRef(null);

  const [buttonTop, setButtonTop] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);

  function goCrazy() {
    const maxTop = height - buttonRef.current.clientHeight;
    const maxLeft = width - buttonRef.current.clientWidth;

    console.log(buttonRef.current.clientHeight);
    console.log(buttonRef.current.clientWidth);

    let newButtonTop = Math.random() * (maxTop + 1);
    let newButtonLeft = Math.random() * (maxLeft + 1);

    setButtonTop(newButtonTop);
    setButtonLeft(newButtonLeft);
  }

  return (
    <Box width="100vw" height="100vh">
      <Button
        colorScheme="red"
        left={buttonLeft}
        onClick={() => goCrazy()}
        ref={buttonRef}
        top={buttonTop}
      >
        Catch Me!
      </Button>
    </Box>
  );
}
