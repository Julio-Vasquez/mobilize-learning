import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

//import Routes from "./views/HomePage/routes";
//import App from "./views";
import RoutesAdmin from "./views/DashBoard/routes";

ReactDOM.render(<RoutesAdmin />, document.getElementById("root"));
