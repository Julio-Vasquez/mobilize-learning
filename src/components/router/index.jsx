import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export const RouteAuth =({ component: Component, redirect, rols, auth, ...rest }) =>{
  return(
    <Route { ...rest } render = { props => (
      auth? 
      <Component {...props} />
      : 
      <Redirect to = {{ pathname : redirect}} />
    )} />
  )
};