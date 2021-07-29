import { server } from "../../config";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Button, HStack, IconButton, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const getButtonVariant = (currentPath, buttonName) =>
  currentPath == buttonName ? "solid" : "ghost";

export default function Header() {
  const { pathname: currentPath } = useRouter();

  return (
    <HStack justifyContent="space-around">
      {/* Home, Projects and Blog buttons */}
      <HStack spacing={0}>
        <NextLink href={`${server}/`}>
          <Button variant={getButtonVariant(currentPath, "/")}>Home</Button>
        </NextLink>
        <NextLink href={`${server}/projects`}>
          <Button variant={getButtonVariant(currentPath, "/projects")}>
            Projects
          </Button>
        </NextLink>
        <NextLink href={`${server}/blog`}>
          <Button variant={getButtonVariant(currentPath, "/blog")}>Blog</Button>
        </NextLink>
      </HStack>

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
    </HStack>
  );
}
