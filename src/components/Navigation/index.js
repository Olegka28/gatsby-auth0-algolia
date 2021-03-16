import React from "react";
import { Link } from "gatsby";

import { logout } from "src/utils/auth";
import * as classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link activeClassName={classes.activeLink} to="/app">
        Home
      </Link>
      <Link activeClassName={classes.activeLink} to="/app/settings">
        Settings
      </Link>
      <Link activeClassName={classes.activeLink} to="/app/billing">
        Billing
      </Link>

      <a
        href="#logout"
        onClick={(e) => {
          logout();
          e.preventDefault();
        }}
      >
        Log Out
      </a>
    </nav>
  );
};

export default Navigation;
