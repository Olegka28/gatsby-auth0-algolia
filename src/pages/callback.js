import React from "react";
import { handleAuthentication } from "src/utils/auth";

import { Layout } from "src/components";

const Callback = () => {
  handleAuthentication();

  return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );
};

export default Callback;
