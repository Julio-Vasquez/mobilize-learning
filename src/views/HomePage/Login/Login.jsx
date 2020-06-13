import React, { useEffect } from "react";

import { LoginForm } from "./../../../components/home/login";
import bg from "./../../../assets/images/login/Login.jpeg";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = "";
    };
  });

  return <LoginForm />;
};

export default Login;
