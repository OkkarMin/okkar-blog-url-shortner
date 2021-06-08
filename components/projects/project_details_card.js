import { Link, Box, HStack, Image, Badge, Text } from "@chakra-ui/react";
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
      <Image src={details.imageUrl} alt={details.title} />

      <Box p="6">
        <Box fontWeight="semibold" as="h4">
          {details.title}
        </Box>
        <Box w="full" h="0.4" mt="4" background="black" />

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

        <Box w="full" h="0.4" mt="2" background="black" />

        <Box as="p" px="3" pt="3">
          {details.description}

          <HStack mt="4">
            <Text>
              <Link isExternal href={details.links.app} color="red.500">
                App <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Text>
              <Link isExternal href={details.links.github} color="red.500">
                GitHub <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
