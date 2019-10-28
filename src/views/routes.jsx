import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { RouteAuth } from './../components/router/index';

import Home from './home/index';
import { About } from './about/about';

import { Page404 }  from './../components/layout-home/404/index';
import  Login from './../components/redux-form/login/index'
class Routes extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    const { auth } = this.props;
    return <Router>
      <div>
        {
          //auth.rols ?
          <Switch className="h-100">
              <Route exact path="/" component={Home} />
              <RouteAuth path="/about" redirect="/" component={About} auth={true} />
              <RouteAuth path="/login" redirect="/" component={Login} auth={true} />
              <Route component={Page404} />
          </Switch>
          //:
          //<h1>... pailas papi </h1>
        }
      </div>
    </Router> 
  }

}

export default Routes;