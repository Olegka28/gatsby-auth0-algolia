import React from "react";
import { Router } from "@reach/router";

import { login, isAuthenticated, getProfile } from "src/utils/auth";
import { Navigation, Settings, Billing, Home, Layout } from "src/components";

const Account = () => {
  if (!isAuthenticated()) {
    login();
    return (
      <Layout>
        <p>Redirecting to login...</p>
      </Layout>
    );
  }

  const user = getProfile();

  return (
    <Layout>
      <Navigation />
      <Router>
        <Home path="/app" user={user} />
        <Settings path="/app/settings" />
        <Billing path="/app/billing" />
      </Router>
    </Layout>
  );
};

export default Account;
