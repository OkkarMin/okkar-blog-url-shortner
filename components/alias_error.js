import { Image, Page } from "@geist-ui/react";

export default function AliasEror({ error_message }) {
  return (
    <Page>
      <Image.Browser url={error_message} invert>
        <Image width={600} height={290} src="/404.jpg" />
      </Image.Browser>
    </Page>
  );
}
