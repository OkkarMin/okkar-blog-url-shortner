const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://okkarm.in";

export const SEOConfiguration = {
  openGraph: {
    locale: "en_IE",
    type: "website",
    url: "https://okkarm.in",
    title: "Okkar Min - Developer, tinkerer, occasional writer",
    defaultTitle: "Okkar Min - Developer, tinkerer, occasional writer",
    images: [
      {
        url: "https://okkarm.in/meta_image.png",
        width: 1200,
        height: 628,
        alt: "Okkar Min's meta image",
      },
    ],
  },
};
