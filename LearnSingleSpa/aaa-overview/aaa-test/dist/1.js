(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./two/index.js":
/*!**********************!*\
  !*** ./two/index.js ***!
  \**********************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrap\", function() { return bootstrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unmount\", function() { return unmount; });\nlet domEl;\r\nfunction bootstrap(props) {\r\n  return Promise.resolve().then(() => {\r\n    domEl = document.createElement('div');\r\n    domEl.id = 'app2';\r\n    document.body.appendChild(domEl);\r\n  });\r\n}\r\nfunction mount(props) {\r\n  return Promise.resolve().then(() => {\r\n    domEl.textContent = 'App 2 is mounted!';\r\n  });\r\n}\r\nfunction unmount(props) {\r\n  return Promise.resolve().then(() => {\r\n    domEl.textContent = '';\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./two/index.js?");

/***/ })

}]);