import { Button, Stack, IconButton } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <Stack spacing={2} justifyContent="flex-start" p={[2, 4, 6, 8]}>
      <Stack spacing={2} isInline justifyContent="space-around">
        <Stack spacing={2} isInline>
          <IconButton variant="ghost" as={AiFillGithub} />
          <IconButton variant="ghost" as={AiFillLinkedin} />
        </Stack>
        <Stack spacing={2} isInline>
          <Button variant="ghost" size="md">
            Blog
          </Button>
          <Button variant="ghost" size="md">
            Resume
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2} />
    </Stack>
  );
}
