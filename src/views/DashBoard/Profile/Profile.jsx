import React from "react";
import { FunctionToken } from "./../../../common/token";

export default function Profile() {
  const user = () => {
    const h = FunctionToken.Decode();
    return h.userName;
  };

  return (
    <div>
      <p>{user()}</p>
    </div>
  );
}
