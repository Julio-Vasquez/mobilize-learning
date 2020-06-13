import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loading from "./../../components/Loading";

const Admin = lazy(() => import("./../DashBoard/layout/Admin"));

const hist = createBrowserHistory();

const RoutesAdmin = () => {
  return (
    <Router history={hist}>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RoutesAdmin;
