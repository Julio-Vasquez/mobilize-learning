import React, { useEffect } from "react";

import { LoginForm } from "./../../../components/redux-form/login/index";

export const Login = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

  return <LoginForm />;
};
