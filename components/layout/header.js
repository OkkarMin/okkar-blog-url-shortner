import { server } from "../../config";
import NextLink from "next/link";
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
        <NextLink href={`${server}/`}>
          <Button variant="ghost">Home</Button>
        </NextLink>
        <NextLink href={`${server}/projects`}>
          <Button variant="ghost">Projects</Button>
        </NextLink>
        <NextLink href={`${server}/blog`}>
          <Button variant="ghost">Blog</Button>
        </NextLink>
      </HStack>
    </HStack>
  );
}
