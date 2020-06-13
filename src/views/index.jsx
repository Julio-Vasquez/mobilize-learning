import React from "react";
import { useSelector } from "react-redux";

import Routes from "./HomePage/routes";

import RoutesAdmin from "./DashBoard/routes";

export default function App() {
  const { authentication } = useSelector((state) => state.Auth);
  return (
    <div>
      {authentication ? (
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
