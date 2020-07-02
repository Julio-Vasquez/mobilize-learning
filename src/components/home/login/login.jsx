import React, { useEffect, useState } from "react";
import Toast from "./../../../common/toast";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./../../../services/auth/actions";
import { Link } from "react-router-dom";

import "./login.scss";

export function LoginForm() {
  useEffect(() => {
    setTimeout(hideURLbar, 0);
    function hideURLbar() {
      window.scrollTo(0, 1);
    }
  });

  const {
    success: { newPassword },
  } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (newPassword) Toast("Contraseña cambiada correctamente", "success");
  });

  const [loginValues, setLoginValues] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = loginValues;
    if (!userName || !password)
      Toast("Debe llenar el formulario para continuar", "warning");
    else if (userName.length <= 4 || password.length <= 4) {
      Toast("Los campos son de minimo 4 caracteres", "error");
    } else {
      dispatch(auth.login(userName, password));
    }
  };

  return (
    <div className="logincontainer">
      <div className="header">
        <h1>Iniciar sesión</h1>
      </div>
      <div className="main-agileinfo">
        <div className="wthree-form">
          <h2>Rellene el siguiente formulario para iniciar sesión</h2>
          <form
            method="post"
            onChange={onChange}
            onSubmit={onSubmit}
            name="testform"
          >
            <div className="form-sub">
              <input
                type="text"
                name="userName"
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
                name="password"
                placeholder="Password"
                required=""
              />
              <div className="icon">
                <i className="fa fa-unlock-alt focusI" aria-hidden="true"></i>
              </div>
            </div>
            <label className="anim">
              <Link to="request-password-reset" id="forgotPassword">
                Olvide mi Contraseña
              </Link>
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
