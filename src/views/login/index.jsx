import React from 'react';

import { LoginForm } from './../../components/redux-form/login/index';

export class Login extends React.Component
{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg')"
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  render(){
    return(
        <LoginForm />
    );
  }
}