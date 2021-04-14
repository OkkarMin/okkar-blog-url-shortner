import redirect from "nextjs-redirect";
import { Image, Page, Loading, Spacer } from "@geist-ui/react";

export default function Alias(props) {
  const { url, error } = props.data;
  const Redirect = redirect(url);

  if (error) {
    return (
      <Page>
        <Image.Browser url={error} invert>
          <Image width={600} height={290} src="/404.jpg" />
        </Image.Browser>
      </Page>
    );
  }

  return (
    <Page>
      <Redirect>
        <Loading>redirecting to {url}</Loading>
        <Spacer />
        <Image width={600} height={290} src="/redirect.png" />
      </Redirect>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { alias } = query;

  const res = await fetch(`https://okkar.tk/api/url/${alias}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
