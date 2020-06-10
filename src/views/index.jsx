import React from "react";

import Routes from "./HomePage/routes";

import RoutesAdmin from "./DashBoard/routes";

const auth = false;

export default function App() {
  return (
    <div>
      {auth ? (
        <React.Fragment>
          <RoutesAdmin />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Routes />
        </React.Fragment>
      )}
    </div>
  );
}
