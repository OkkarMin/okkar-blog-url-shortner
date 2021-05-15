import fs from "fs";
import path from "path";
import matter from "gray-matter";
import NextLink from "next/link";
import { ListItem, Link, UnorderedList } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";

import Layout from "../../components/layout/layout";
import Container100Ch from "../../components/layout/container";

export default function Blog({ posts }) {
  return (
    <Layout title="📝 Blog">
      <Container100Ch>
        <UnorderedList>
          {posts.map((post) => (
            <NextLink
              as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/blog/[slug]`}
            >
              <Link textDecoration="underline">
                <ListItem>{post.data.title}</ListItem>
              </Link>
            </NextLink>
          ))}
        </UnorderedList>
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
