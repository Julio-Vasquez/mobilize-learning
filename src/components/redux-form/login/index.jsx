import React, {useEffect} from 'react';
import NavBar from './../../layout-home/navbar/index';
import Footer from './../../layout-home/footer/index';
import './style.scss';

export default function Login(props){

  useEffect(()=>{
    setTimeout(hideURLbar, 0); 

    function hideURLbar(){ 
      window.scrollTo(0,1); 
    }
  });

  return( 
    <div className="Container">
      <NavBar />
      <div className="header">
	      <h1>Login Form</h1>
      </div>
      <div className="main-agileinfo">
        <div className="wthree-form">
          <h2>Fill out the form below to login</h2>
          <form action="#" method="post">
            <div className="form-sub">
              <input type="text" name="Username" placeholder="Username " required="" />
              <div className="icon">
                <i className="fa fa-user focusI" aria-hidden="true"></i>
              </div>
            </div>
            <div className="form-sub">
              <input type="password" name="Password" placeholder="Password" required="" />
              <div className="icon">
                <i className="fa fa-unlock-alt focusI" aria-hidden="true" ></i>
              </div>
            </div>
            <label className="anim">
              <input type="checkbox" className="checkbox" />
              <span>Remember Me</span> 
              <a href="#!" id="forgotPassword">Forgot Password</a>
            </label> 
            <div className="clear"></div>
            <div className="submit-agileits">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}