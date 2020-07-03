import React, { useEffect } from "react";
import { SignUpForm } from "./../../../components/home/signup";

import bg from "./../../../assets/images/signup/signup.jpg";

const SignUp = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    return () => (document.body.style.backgroundImage = "");
  });

  return <SignUpForm />;
};

export default SignUp;
