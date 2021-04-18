import redirect from "nextjs-redirect";
import { Image, Page, Spacer, Loading } from "@geist-ui/react";

export default function AliasRedirect({ to_url }) {
  const Redirect = redirect(to_url);

  return (
    <Page>
      <Redirect>
        <Loading>redirecting to {to_url}</Loading>
        <Spacer />
        <Image width={600} height={290} src="/redirect.png" />
      </Redirect>
    </Page>
  );
}
