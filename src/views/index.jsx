import React from "react";
import { useSelector } from "react-redux";

import Routes from "./HomePage/routes";

import RoutesAdmin from "./DashBoard/routes";

export default function App() {
  const { authentication } = useSelector((state) => state.Auth);

  console.log("====================");
  console.log(authentication);

  console.log("====================");
  return (
    <div>
      {!authentication && <Routes />}
      {authentication && <RoutesAdmin />}
    </div>
  );
}
