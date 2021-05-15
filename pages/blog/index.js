import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NextLink from "next/link";
import { server } from "../../config";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";

import Layout from "../../components/layout/layout";
import Container100Ch from "../../components/layout/container";

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
          {posts.map((post) => (
            <NextLink href={`${server}/blog/new-beginning`}>
              <Box
                mx="auto"
                rounded="lg"
                boxShadow="base"
                _hover={{ boxShadow: "lg", cursor: "pointer" }}
              >
                <Image
                  roundedTop="lg"
                  w="full"
                  h={64}
                  fit="cover"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Article"
                />
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
