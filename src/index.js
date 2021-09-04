import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider as ProvideContact } from "./hooks/useContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/header/Header.scss";

ReactDOM.render(
  <React.StrictMode>
    <ProvideContact>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </ProvideContact>
  </React.StrictMode>,
  document.getElementById("root")
);
