import { server } from "../config";
import { Button, HStack, IconButton, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  return (
    <HStack justifyContent="space-around">
      {/* Header logos */}
      <HStack spacing={0}>
        <Link isExternal href={`${server}/github`}>
          <IconButton
            aria-label="Link to Okkar's Github"
            variant="ghost"
            icon={<AiFillGithub />}
          />
        </Link>
        <Link isExternal href={`${server}/linkedin`}>
          <IconButton
            aria-label="Link to Okkar's Linkedin"
            variant="ghost"
            icon={<AiFillLinkedin />}
          />
        </Link>
      </HStack>

      {/* Header Blog and Resume buttons */}
      <HStack spacing={0}>
        <Button variant="ghost">Blog</Button>
        <Button variant="ghost">Resume</Button>
      </HStack>
    </HStack>
  );
}
