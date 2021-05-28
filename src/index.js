import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/header/Header.css";

ReactDOM.render(
  <BrowserRouter basename="/MyPortfolio">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
