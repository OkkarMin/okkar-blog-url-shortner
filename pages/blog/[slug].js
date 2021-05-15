import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Code,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";

import Layout from "../../components/layout/layout";
import BlogPostLink from "../../components/blog_post_link";
import Container100Ch from "../../components/layout/container";

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
  code: (props) => <Code {...props} />,
  pre: (props) => <Code {...props} />,
  inlineCode: (props) => <Code {...props} />,
};

export default function BlogPost({ source }) {
  return (
    <Layout title="📝 Blog">
      <Container100Ch>
        <VStack alignItems="flex-start" spacing="6">
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
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
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
