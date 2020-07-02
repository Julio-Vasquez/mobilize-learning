import React, { useEffect } from "react";

import bg from "./../../../assets/images/signup/signup.jpg";
import "./signup.scss";

export const SignUpForm = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => (document.body.style.backgroundImage = "");
  });

  return <div>Registrarse</div>;
};
