import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";

import { RouteAuth } from "./../../components/router/index";
import { NavBar } from "./../../components/layout-home/navbar";
import { Footer } from "./../../components/layout-home/footer";
import { Page404 } from "./../../components/404";

import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import Admin from "./../DashBoard/layout/routes";

const hist = createBrowserHistory();

const Routes = () => {
  console.log(Admin);
  return (
    <Router history={hist}>
      <div className="Container">
        <NavBar />
        {
          <Switch className="h-100">
            <Route exact path="/" component={Home} />
            <RouteAuth
              path="/about"
              redirect="/"
              component={About}
              auth={true}
            />
            <RouteAuth
              path="/contact"
              redirect="/"
              component={Contact}
              auth={true}
            />
            <RouteAuth
              path="/signup"
              redirect="/"
              component={SignUp}
              auth={true}
            />
            <RouteAuth
              path="/login"
              redirect="/"
              component={Login}
              auth={true}
            />

            <Route path="*" component={Page404} />
          </Switch>
        }
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
