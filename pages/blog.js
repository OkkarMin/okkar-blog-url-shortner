import fs from "fs";
import path from "path";
import {
  Center,
  Code,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Layout from "../components/layout";

const components = {
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight="1.8rem" {...props} />,
  ul: (props) => <UnorderedList>{props.children}</UnorderedList>,
  ol: (props) => <OrderedList>{props.children}</OrderedList>,
  li: (props) => (
    <ListItem ml="1rem" fontSize="lg" lineHeight="1.8rem" {...props} />
  ),
  code: (props) => <Code {...props} />,
  pre: (props) => <Code {...props} />,
  inlineCode: (props) => <Code {...props} />,
};

export default function Blog({ source }) {
  return (
    <Layout title="📝 Blog">
      <VStack alignItems="flex-start" padding={[2, 4]} spacing="4">
        <MDXRemote {...source} components={components} />
      </VStack>
    </Layout>
  );
}

export async function getStaticProps() {
  const POSTS_PATH = path.join(process.cwd(), "mdFiles");
  const fromFile = fs.readFileSync(path.join(POSTS_PATH, "example.mdx"));

  const mdxSource = await serialize(fromFile);

  return { props: { source: mdxSource } };
}
