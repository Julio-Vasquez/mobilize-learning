import React from "react";
import { useSelector } from "react-redux";

import bg from "./../../../assets/images/bann.jpg";

export default function DashBoard() {
  const store = useSelector((state) => state.Auth);
  console.log(store);
  return (
    <div style={{ width: "100%" }}>
      <img src={bg} alt="" width="100%" />
    </div>
  );
}
