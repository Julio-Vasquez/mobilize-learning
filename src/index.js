import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import initStore from "./store/store";
import App from "./views";

const history = createBrowserHistory();
export const store = initStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
