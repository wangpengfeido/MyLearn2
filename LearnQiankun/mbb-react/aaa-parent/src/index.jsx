import { registerMicroApps, start } from "qiankun";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const DOM_ID = "#root";

registerMicroApps([
  {
    name: "bbb-child",
    entry: "http://localhost:18081",
    container: "#bbb-child-container",
    activeRule: ["/bbb-child"],
  },
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector(DOM_ID),
);
