import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Box,
  Code,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";
import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

import Layout from "components/layout/layout";
import BlogPostLink from "components/blog/blog_post_link";
import Container100Ch from "components/layout/container";

const CodeBlock = ({ className, children: codes }) => {
  return (
    <Box maxWidth={["xs", "md", "xl", "full"]}>
      <SyntaxHighlighter
        language={className.split("-")[1]}
        style={atomOneDark}
        codeTagProps={{
          style: {
            fontFamily: "JetBrains Mono",
          },
        }}
      >
        {/* see https://stackoverflow.com/a/38645276 */}
        {codes.trimRight()}
      </SyntaxHighlighter>
    </Box>
  );
};

const components = {
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" {...props} />,
  a: BlogPostLink,
  p: (props) => <Text fontSize="lg" lineHeight="1.8rem" {...props} />,
  ul: (props) => <UnorderedList>{props.children}</UnorderedList>,
  ol: (props) => <OrderedList>{props.children}</OrderedList>,
  li: (props) => (
    <ListItem ml="3ch" fontSize="lg" lineHeight="1.8rem" {...props} />
  ),
  code: CodeBlock,
  inlineCode: (props) => <Code {...props} />,
  Box,
  Image,
};

export default function BlogPost({ source }) {
  return (
    <Layout title="📝 Blog">
      <Container100Ch>
        <VStack mt="4" alignItems="flex-start" spacing="6">
          <MDXRemote {...source} components={components} />
        </VStack>
      </Container100Ch>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
