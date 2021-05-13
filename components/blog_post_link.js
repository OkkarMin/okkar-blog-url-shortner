import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function BlogPostLink({ as, href, ...otherProps }) {
  const isInternalLink = href.indexOf("http") === -1 && href.indexOf("#") !== 0;

  return isInternalLink ? (
    <NextLink as={as} href={href}>
      <Link color="red.500">
        <a {...otherProps} />
      </Link>
    </NextLink>
  ) : (
    <Link color="red.500" href={href} isExternal>
      <a {...otherProps} /> <ExternalLinkIcon />
    </Link>
  );
}
