import React from "react";
import { useParams } from "react-router-dom";

import { FunctionToken } from "./../../../common/token";
import { ErrorToken } from './components/ErrorToken';
import { SetPassword } from './components/SetPassword';

export default function NewPassword() {
  const { token } = useParams();
  return FunctionToken.CheckToken(token) ? (
    <SetPassword token={token} />
  ) : (
      <ErrorToken />
    );
}

