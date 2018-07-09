import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, compose } from "redux";
import "./css/index.css";
import App from "./components/App";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
