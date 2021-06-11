import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
