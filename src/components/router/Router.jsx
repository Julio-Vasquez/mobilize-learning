import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

export const RouteAuth = ({ component: Component, redirect, auth }) => {
  return (
    <Route
      render=
      {
        props => auth
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: redirect }} />)
      }
    />
  );
};

RouteAuth.propTypes = {
  auth: PropTypes.bool.isRequired,
  redirect: PropTypes.string,
  component: PropTypes.element.isRequired
}