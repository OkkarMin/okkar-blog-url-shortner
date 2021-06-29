import { NextSeo } from "next-seo";

// TODO: add publishedTime, modifiedTime and tags

const BlogPostSEOWrapper = ({ frontMatter, children }) => {
  console.log(frontMatter);
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | Okkar Min`}
        description={frontMatter.summary}
        openGraph={{
          type: "article",
          title: frontMatter.title,
          description: frontMatter.summary,
          url: frontMatter.url,
          article: {
            publishedTime: "",
            modifiedTime: "",
            authors: ["https://www.linkedin.com/in/okarmin"],
            tags: ["", "", ""],
          },
          images: [
            {
              url: frontMatter.image,
              alt: frontMatter.imageAlt,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      {children}
    </>
  );
};

export default BlogPostSEOWrapper;
