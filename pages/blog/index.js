import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NextLink from "next/link";
import { server } from "config";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";

import Layout from "components/layout/layout";
import Container100Ch from "components/layout/container";

export default function Blog({ posts }) {
  return (
    <Layout title="📝 Blog">
      <Container100Ch>
        <VStack
          alignItems="center"
          direction="column"
          justifyContent="center"
          mt="4"
          spacing={6}
          w="full"
        >
          {posts.map((post, i) => (
            <NextLink
              key={i}
              href={`${server}/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            >
              <Box
                width="full"
                rounded="lg"
                boxShadow="md"
                _hover={{ boxShadow: "lg", cursor: "pointer" }}
              >
                <Box p={4}>
                  <Box>
                    <Heading fontSize="2xl">{post.data.title}</Heading>
                    <Text mt={2} fontSize="md">
                      {post.data.summary}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </NextLink>
          ))}
        </VStack>
      </Container100Ch>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
