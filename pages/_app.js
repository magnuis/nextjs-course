import Layout from "../components/layout/layout";
import "../styles/globals.css";

require("dotenv").config();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
