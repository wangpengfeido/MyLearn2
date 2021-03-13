import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const DOM_ID = "#root";

function render(container = window.document, routeBase = "/") {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={routeBase}>
        <App></App>
      </BrowserRouter>
    </React.StrictMode>,
    // 避免id冲突，限制查找范围
    container.querySelector(DOM_ID),
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

export async function bootstrap() {
  console.log("------child bootstrap");
}

export async function mount(props) {
  console.log("------child mount", props);
  render(props.container, "/bbb-child");
}

export async function unmount(props) {
  console.log("------child unmount", props);
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector(DOM_ID)
      : document.querySelector(DOM_ID),
  );
}
