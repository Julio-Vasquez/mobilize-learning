import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { NavBar } from "./../../components/layout-home/NavBar";
import { Footer } from "./../../components/layout-home/Footer";
import { Page404 } from "./../../components/404";
import Loading from "./../../components/Loading";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const SignUp = lazy(() => import("./SignUp"));
const Login = lazy(() => import("./Login"));

const Routes = () => {
  return (
    <Router>
      <div className="Container">
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Switch className="h-100">
            <Route exact path="/" component={Home} />
            <Route path="/about" redirect="/" component={About} />
            <Route path="/contact" redirect="/" component={Contact} />
            <Route path="/signup" redirect="/" component={SignUp} />
            <Route path="/login" redirect="/" component={Login} />
            <Route path="*" component={Page404} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
