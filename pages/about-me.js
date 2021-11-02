import { Center, Heading, Text } from "@chakra-ui/react";

const isServer = typeof window === "undefined";
let RSS = null;
try {
  RSS = require("react-scroll-motion");
} catch (error) {}

export default function AboutMe() {
  return !isServer ? (
    <RSS.ScrollContainer>
      <RSS.ScrollPage page={0}>
        <RSS.Animator
          animation={RSS.batch(RSS.Fade(), RSS.Sticky(), RSS.MoveOut(0, -200))}
        >
          <Center>
            <Heading>Hey there!👋</Heading>
          </Center>
          <Heading>Let's get to know me better!</Heading>
          <Center>
            <Heading alignSelf="flex-end">↓</Heading>
          </Center>
        </RSS.Animator>
      </RSS.ScrollPage>

      <RSS.ScrollPage page={1}>
        <RSS.Animator
          animation={RSS.batch(RSS.StickyIn(), RSS.FadeIn(), RSS.ZoomIn())}
        >
          <Heading style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</Heading>
        </RSS.Animator>
      </RSS.ScrollPage>

      <RSS.ScrollPage page={2}>
        <RSS.Animator
          animation={RSS.batch(RSS.Fade(), RSS.Move(), RSS.Sticky())}
        >
          <Heading>I'm FadeUp</Heading>
        </RSS.Animator>
      </RSS.ScrollPage>
      <RSS.ScrollPage page={3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <RSS.Animator animation={RSS.MoveIn(-1000, 0)}>
              Hello Guys 👋🏻
            </RSS.Animator>
            <RSS.Animator animation={RSS.MoveIn(1000, 0)}>
              Nice to meet you 🙋🏻‍♀️
            </RSS.Animator>
            <RSS.Animator animation={RSS.MoveOut(1000, 0)}>
              Good bye ✋🏻
            </RSS.Animator>
            <RSS.Animator animation={RSS.MoveOut(-1000, 0)}>
              See you 💛
            </RSS.Animator>
          </span>
        </div>
      </RSS.ScrollPage>

      <RSS.ScrollPage page={4}>
        <RSS.Animator animation={RSS.batch(RSS.Fade(), RSS.Sticky())}>
          <Text>Done</Text>
          <Text>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </Text>
        </RSS.Animator>
      </RSS.ScrollPage>
    </RSS.ScrollContainer>
  ) : (
    <div></div>
  );
}
