import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "core/router";
import reportWebVitals from "./reportWebVitals";
import store from "core/redux";

import "assets/css/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
