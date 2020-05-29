import React, { useEffect } from "react";

import "./style.scss";

export function LoginForm(props) {
  useEffect(() => {
    setTimeout(hideURLbar, 0);

    function hideURLbar() {
      window.scrollTo(0, 1);
    }
  });

  return (
    <div className="logincontainer">
      <div className="header">
        <h1>Login Form</h1>
      </div>
      <div className="main-agileinfo">
        <div className="wthree-form">
          <h2>Rellene el siguiente formulario para iniciar sesión</h2>
          <form action="/admin" method="get">
            <div className="form-sub">
              <input
                type="text"
                name="Username"
                placeholder="Username "
                required=""
              />
              <div className="icon">
                <i className="fa fa-user focusI" aria-hidden="true"></i>
              </div>
            </div>
            <div className="form-sub">
              <input
                type="password"
                name="Password"
                placeholder="Password"
                required=""
              />
              <div className="icon">
                <i className="fa fa-unlock-alt focusI" aria-hidden="true"></i>
              </div>
            </div>
            <label className="anim">
              <input type="checkbox" className="checkbox" />
              <span>Remember Me</span>
              <a href="#!" id="forgotPassword">
                Forgot Password
              </a>
            </label>
            <div className="clear"></div>
            <div className="submit-agileits">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
