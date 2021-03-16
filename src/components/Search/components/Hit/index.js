import React from "react";
import { Highlight } from "react-instantsearch-dom";

import * as classes from "./Hit.module.scss";

function Hit(props) {
  return (
    <div>
      <div className={classes.hitFirstName}>
        <Highlight attribute="firstname" hit={props.hit} />
      </div>
      <div className={classes.hitLastName}>
        <Highlight attribute="lastname" hit={props.hit} />
      </div>
    </div>
  );
}

export { Hit };
