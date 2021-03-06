import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { NavBar } from "./../../components/layout-home/NavBar";
import { Footer } from "./../../components/layout-home/Footer";
import { Page404 } from "./../../components/404";
import { Loading } from "./../../components/Loading";
import History from "./../../common/history";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const SignUp = lazy(() => import("./SignUp"));
const Login = lazy(() => import("./Login"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const NewPassword = lazy(() => import("./NewPassword"));

const Routes = () => {
  return (
    <Router history={History}>
      <div className="Container">
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Switch className="h-100">
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />
            <Route path="/signup" component={SignUp} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route
              path="/request-password-reset"
              component={ResetPassword}
              exact={true}
            />
            <Route
              path="/setnewpassword/:token"
              component={NewPassword}
              exact={true}
            />

            <Route path="*" component={Page404} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
