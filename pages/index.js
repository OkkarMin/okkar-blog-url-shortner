import Layout from "../components/layout";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Body from "../components/body";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Introduction />
      <Body />
      <Footer />
    </Layout>
  );
}
