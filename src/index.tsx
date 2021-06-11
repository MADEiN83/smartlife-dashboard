import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import Home from "pages/home";
import store from "core/redux";

import "assets/css/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
