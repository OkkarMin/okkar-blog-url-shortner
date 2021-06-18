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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

import Layout from "components/layout/layout";
import BlogPostLink from "components/blog_post_link";
import Container100Ch from "components/layout/container";

const CodeBlock = ({ className, children: codes }) => {
  return (
    <Box borderRadius="lg" maxWidth="100ch">
      <SyntaxHighlighter
        language={className.split("-")[1]}
        style={tomorrow}
        wrapLines={true}
        showLineNumbers={true}
        codeTagProps={{
          style: {
            fontFamily: "JetBrains Mono",
            lineHeight: "1rem",
          },
        }}
      >
        {codes}
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
    <ListItem ml="1rem" fontSize="lg" lineHeight="1.8rem" {...props} />
  ),
  code: CodeBlock,
  inlineCode: (props) => <Code {...props} />,
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
