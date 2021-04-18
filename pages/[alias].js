import AliasError from "../components/alias_error";
import AliasRedirect from "../components/redirect";

export default function Alias(props) {
  const { url, error } = props.data;

  if (error) return <AliasError error_message={error} />;

  return <AliasRedirect to_url={url} />;
}

export async function getServerSideProps({ query }) {
  const { alias } = query;

  const res = await fetch(`https://okkar.tk/api/url/${alias}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
