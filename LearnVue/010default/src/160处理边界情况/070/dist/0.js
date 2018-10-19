(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./component-two.js":
/*!**************************!*\
  !*** ./component-two.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-one */ \"./component-one.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    template: `<div>\r\n                    <div>this is component two（level {{levelData}}）</div>\r\n                    <component-one\r\n                        v-if=\"levelData<6\"\r\n                        :level=\"levelData+1\"></component-one>\r\n                </div>`,\r\n    props: ['level'],\r\n    data: function () {\r\n        return {\r\n            levelData: this.level || 0,\r\n        }\r\n    },\r\n    components: {\r\n        ComponentOne: _component_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    }\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./component-two.js?");

/***/ })

}]);