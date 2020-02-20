import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import logo from "./../../../assets/images/reactlogo.png";
import bgImage from "./../../../assets/images/sidebar-2.jpg";

import DashBoardRoutes from "./routes";

const switchRoutes = (
  <Router>
    <Switch>
      {DashBoardRoutes.map((route, key) => {
        if (route.layout === "/admin") {
          return (
            <Route
              path={route.layout + route.path}
              component={route.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>
);

export default function Admin() {
  console.log(logo);
  return <div>{switchRoutes}</div>;
}
