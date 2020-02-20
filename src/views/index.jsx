import React from "react";

import Routes from "./HomePage/routes";

import Admin from "./DashBoard/layout/Admin";

const auth = true;

export default function Index() {
  return (
    <div>
      {auth ? (
        <React.Fragment>
          <Admin />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Routes />
        </React.Fragment>
      )}
    </div>
  );
}
