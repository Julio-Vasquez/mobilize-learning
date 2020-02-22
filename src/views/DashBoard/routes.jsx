import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Admin from "./../DashBoard/layout/Admin";
import Routes from "./../HomePage/routes";
import SpecifyTheme from "./../../components/admin/SpecificTheme";

const hist = createBrowserHistory();

const RoutesAdmin = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route
          path="/admin/roadsigns/curse=:data"
          component={SpecifyTheme}
          exact={true}
        />
        <Route
          path="/admin/mobilitybehaviors/curse=:data"
          component={SpecifyTheme}
          exact={true}
        />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Routes} />
      </Switch>
    </Router>
  );
};
export default RoutesAdmin;
