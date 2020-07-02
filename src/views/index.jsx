import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./HomePage/routes";

import RoutesAdmin from "./DashBoard/routes";

export default function App() {
  const { authentication } = useSelector((state) => state.Auth);
  return (
    <div>
      {!authentication ? <Routes /> : <RoutesAdmin />}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        pauseOnHover={false}
      />
    </div>
  );
}
