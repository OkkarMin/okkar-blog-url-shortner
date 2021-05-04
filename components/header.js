import Link from "next/link";
import { server } from "../config";
import { Button, Stack, IconButton } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <Stack spacing={2} isInline justifyContent="space-around">
        {/* Header logos */}
        <Stack spacing={2} isInline>
          <Link href={`${server}/github`}>
            <IconButton
              aria-label="Link to Okkar's Github"
              variant="ghost"
              icon={<AiFillGithub />}
            />
          </Link>
          <Link href={`${server}/linkedin`}>
            <IconButton
              aria-label="Link to Okkar's Linkedin"
              variant="ghost"
              icon={<AiFillLinkedin />}
            />
          </Link>
        </Stack>

        {/* Header Blog and Resume buttons */}
        <Stack spacing={2} isInline>
          <Button variant="ghost">Blog</Button>
          <Button variant="ghost">Resume</Button>
        </Stack>
      </Stack>
      <Stack spacing={2} />
    </>
  );
}
