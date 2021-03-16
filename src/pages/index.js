import React from "react";
import { Link } from "gatsby";

import { Layout } from "src/components";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <Link to="/app">Go to your account</Link>
    </Layout>
  );
};

export default IndexPage;
