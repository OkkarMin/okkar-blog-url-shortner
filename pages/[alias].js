import useSWR from "swr";
import { server } from "../config";
import { useRouter } from "next/router";
import AliasError from "../components/alias/alias_error";
import AliasRedirect from "../components/alias/alias_redirect";
import AliasLoading from "../components/alias/alias_loading";

export default function Alias() {
  const { alias } = useRouter().query;
  const { data, error } = useSWR(`${server}/api/url/${alias}`);

  if (error) return <AliasError error_message={`${alias} not found`} />;
  if (!data) return <AliasLoading alias={alias} />;
  if (data.error) return <AliasError error_message={data.error} />;

  return <AliasRedirect to_url={data.url} />;
}
