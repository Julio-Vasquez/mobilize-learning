import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Loading from "./../../components/Loading";
import History from "./../../common/history";

const Admin = lazy(() => import("./layout/Admin"));

const RoutesAdmin = () => {
  return (
    <Router history={History}>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RoutesAdmin;
