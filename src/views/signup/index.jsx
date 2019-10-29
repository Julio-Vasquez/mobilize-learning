import React from 'react';
import { SignUpForm } from './../../components/redux-form/signup/index';

export class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
        <SignUpForm />
    );
  }
}