(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./one/index.js":
/*!**********************!*\
  !*** ./one/index.js ***!
  \**********************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrap\", function() { return bootstrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unmount\", function() { return unmount; });\nlet domEl;\r\nfunction bootstrap(props) {\r\n  return Promise.resolve().then(() => {\r\n    domEl = document.createElement('div');\r\n    domEl.id = 'app1';\r\n    document.body.appendChild(domEl);\r\n  });\r\n}\r\nfunction mount(props) {\r\n  return Promise.resolve().then(() => {\r\n    // 在这里通常使用框架将ui组件挂载到dom。请参阅https://single-spa.js.org/docs/ecosystem.html。\r\n    domEl.textContent = 'App 1 is mounted!';\r\n  });\r\n}\r\nfunction unmount(props) {\r\n  return Promise.resolve().then(() => {\r\n    // 在这里通常是通知框架把ui组件从dom中卸载。参见https://single-spa.js.org/docs/ecosystem.html\r\n    domEl.textContent = '';\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./one/index.js?");

/***/ })

}]);