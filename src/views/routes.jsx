import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { RouteAuth } from './../components/router/index';

import { NavBar } from './../components/layout-home/navbar/index';
import { Footer } from './../components/layout-home/footer/index';

import { Home } from './home/index';
import { About } from './about/index';
import { Contact } from './contact/index';
import { SignUp } from './signup/index';
import { Login } from './login/index';

import { Page404 } from './../components/404/index';

class Routes extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    //const { auth } = this.props;
    return <Router>
      <div className="Container">
      <NavBar />
        {
          <Switch className="h-100">
            <Route exact path="/" component={Home} />
            <RouteAuth path="/about" redirect="/" component={About} auth={true} />
            <RouteAuth path="/contact" redirect="/" component={Contact} auth={true} />
            <RouteAuth path="/signup" redirect="/" component={SignUp} auth={true} />
            <RouteAuth path="/login" redirect="/" component={Login} auth={true} />
            <Route path="/404" component={Page404} />
            <Redirect to='/404' />
          </Switch>
        }
        <Footer />
      </div>
    </Router> 
  }

}

export default Routes;
/*
<Route render={
              () =><Page404 path="/" text="Volver al inicio" />
            } />
*/