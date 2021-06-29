import {
  Link,
  Box,
  HStack,
  Image,
  Badge,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const languageColors = {
  Python: "orange",
  JavaScript: "yellow",
  TypeScript: "blue",
  C: "cyan",
};

export default function ProjectDetailsCard({ isFirst, details }) {
  return (
    <Box
      maxW={isFirst ? "auto" : "sm"}
      rounded="lg"
      boxShadow="md"
      overflow="hidden"
      mt="6"
      _hover={{ boxShadow: "xl" }}
    >
      <Image src={details.imageUrl} alt={details.title} width="full" />

      <Box p="6">
        <Box fontWeight="semibold" as="h4">
          {details.title}
        </Box>

        <Divider />

        <Box mt="2">
          <Badge px="2" colorScheme={languageColors[details.language]}>
            {details.language}
          </Badge>
          {details.technology.map((tech, i) => (
            <Badge
              key={i}
              borderRadius="md"
              px="2"
              background="transparant"
              textColor="gray.700"
            >
              &bull; {tech}
            </Badge>
          ))}
        </Box>

        <Divider />

        <Box pt="3">
          {details.description}

          <HStack mt="4">
            {Object.keys(details.links).map((linkName, i) => {
              return (
                <Text key={i}>
                  <Link
                    isExternal
                    href={details.links[linkName]}
                    color="red.500"
                  >
                    {linkName}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
              );
            })}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
