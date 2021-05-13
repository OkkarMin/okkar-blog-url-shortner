import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NextLink from "next/link";
import { Container, ListItem, Link, UnorderedList } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";

import Layout from "../../components/layout";

export default function Blog({ posts }) {
  return (
    <Layout title="📝 Blog">
      <Container maxWidth="80ch">
        <UnorderedList>
          {posts.map((post) => (
            <NextLink
              as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/blog/[slug]`}
            >
              <Link>
                <ListItem>{post.data.title}</ListItem>
              </Link>
            </NextLink>
          ))}
        </UnorderedList>
      </Container>
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
