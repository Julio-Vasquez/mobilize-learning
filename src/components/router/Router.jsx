import React from "react";
import { Route, Redirect } from "react-router-dom";

export const RouteAuth = ({ component: Component, redirect, auth }) => {
  return (
    <Route
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: redirect }} />
        )
      }
    />
  );
};
