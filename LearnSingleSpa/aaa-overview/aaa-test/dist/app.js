/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/single-spa/lib/esm/single-spa.min.js":
/*!**********************************************************************************************************!*\
  !*** D:/myWorkspace/my-github/MyLearn2/LearnSingleSpa/node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \**********************************************************************************************************/
/*! exports provided: BOOTSTRAPPING, LOADING_SOURCE_CODE, LOAD_ERROR, MOUNTED, MOUNTING, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, SKIP_BECAUSE_BROKEN, UNMOUNTING, UPDATING, addErrorHandler, checkActivityFunctions, ensureJQuerySupport, getAppNames, getAppStatus, getMountedApps, mountRootParcel, navigateToUrl, pathToActiveWhen, registerApplication, removeErrorHandler, setBootstrapMaxTime, setMountMaxTime, setUnloadMaxTime, setUnmountMaxTime, start, triggerAppChange, unloadApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOTSTRAPPING\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_SOURCE_CODE\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_ERROR\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTED\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTING\", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_BOOTSTRAPPED\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_LOADED\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_MOUNTED\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SKIP_BECAUSE_BROKEN\", function() { return T; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNMOUNTING\", function() { return E; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATING\", function() { return g; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorHandler\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkActivityFunctions\", function() { return Ot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureJQuerySupport\", function() { return ft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppNames\", function() { return yt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppStatus\", function() { return Tt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMountedApps\", function() { return Et; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountRootParcel\", function() { return W; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToUrl\", function() { return nt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathToActiveWhen\", function() { return Nt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerApplication\", function() { return Pt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeErrorHandler\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBootstrapMaxTime\", function() { return F; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMountMaxTime\", function() { return J; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnloadMaxTime\", function() { return Q; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnmountMaxTime\", function() { return H; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return Rt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triggerAppChange\", function() { return Mt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unloadApplication\", function() { return bt; });\n/* single-spa@5.5.4 - ESM - prod */\nvar t=Object.freeze({__proto__:null,get start(){return Rt},get ensureJQuerySupport(){return ft},get setBootstrapMaxTime(){return F},get setMountMaxTime(){return J},get setUnmountMaxTime(){return H},get setUnloadMaxTime(){return Q},get registerApplication(){return Pt},get getMountedApps(){return Et},get getAppStatus(){return Tt},get unloadApplication(){return bt},get checkActivityFunctions(){return Ot},get getAppNames(){return yt},get pathToActiveWhen(){return Nt},get navigateToUrl(){return nt},get triggerAppChange(){return Mt},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return W},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return m},get NOT_MOUNTED(){return d},get MOUNTING(){return v},get UPDATING(){return g},get LOAD_ERROR(){return y},get MOUNTED(){return w},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return T}});function n(t){return(n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=(\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof window?window:\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r(\"cat\",{detail:{foo:\"bar\"}});return\"cat\"===t.type&&\"bar\"===t.detail.foo}catch(t){}return!1}()?r:\"undefined\"!=typeof document&&\"function\"==typeof document.createEvent?function(t,n){var e=document.createEvent(\"CustomEvent\");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},i=[];function u(t,n,e){var r=f(t,n,e);i.length?i.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function a(t){if(\"function\"!=typeof t)throw Error(s(28,!1));i.push(t)}function c(t){if(\"function\"!=typeof t)throw Error(s(29,!1));var n=!1;return i=i.filter((function(e){var r=e===t;return n=n||r,!r})),n}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return\"single-spa minified message #\".concat(t,\": \").concat(n?n+\" \":\"\",\"See https://single-spa.js.org/error/?code=\").concat(t).concat(r.length?\"&arg=\".concat(r.join(\"&arg=\")):\"\")}function f(t,n,e){var r,o=\"\".concat(S(n),\" '\").concat(b(n),\"' died in status \").concat(n.status,\": \");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(s(30,!1,n.status,b(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=b(n),n.status=e,r}var l=\"NOT_LOADED\",p=\"LOADING_SOURCE_CODE\",h=\"NOT_BOOTSTRAPPED\",m=\"BOOTSTRAPPING\",d=\"NOT_MOUNTED\",v=\"MOUNTING\",w=\"MOUNTED\",g=\"UPDATING\",E=\"UNMOUNTING\",y=\"LOAD_ERROR\",T=\"SKIP_BECAUSE_BROKEN\";function P(t){return t.status===w}function O(t){try{return t.activeWhen(window.location)}catch(n){return u(n,t,T),!1}}function b(t){return t.name}function A(t){return Boolean(t.unmountThisParcel)}function S(t){return A(t)?\"parcel\":\"application\"}function N(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])\"__proto__\"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function _(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function D(t){return t&&(\"function\"==typeof t||(n=t,Array.isArray(n)&&!_(n,(function(t){return\"function\"!=typeof t}))));var n}function M(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=S(t),o=b(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return U(e)?e:Promise.reject(s(15,!1,r,o,n,u))}))}),Promise.resolve())}}function U(t){return t&&\"function\"==typeof t.then&&\"function\"==typeof t.catch}function j(t,n){return Promise.resolve().then((function(){return t.status!==h?t:(t.status=m,V(t,\"bootstrap\").then((function(){return t.status=d,t})).catch((function(e){if(n)throw f(e,t,T);return u(e,t,T),t})))}))}function L(t,n){return Promise.resolve().then((function(){if(t.status!==w)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw f(r,t,T);u(r,t,T)}))})).then((function(){return t}));function r(){return V(t,\"unmount\").then((function(){t.status=d})).catch((function(e){if(n)throw f(e,t,T);u(e,t,T)}))}}))}var R=!1,x=!1;function I(t,n){return Promise.resolve().then((function(){return t.status!==d?t:(R||(window.dispatchEvent(new o(\"single-spa:before-first-mount\")),R=!0),V(t,\"mount\").then((function(){return t.status=w,x||(window.dispatchEvent(new o(\"single-spa:first-mount\")),x=!0),t})).catch((function(e){return t.status=w,L(t,!0).then(r,r);function r(){if(n)throw f(e,t,T);return u(e,t,T),t}})))}))}var B=0,G={parcels:{}};function W(){return C.apply(G,arguments)}function C(t,e){var r=this;if(!t||\"object\"!==n(t)&&\"function\"!=typeof t)throw Error(s(2,!1));if(t.name&&\"string\"!=typeof t.name)throw Error(s(3,!1,n(t.name)));if(\"object\"!==n(e))throw Error(s(4,!1,name,n(e)));if(!e.domElement)throw Error(s(5,!1,name));var o,i=B++,u=\"function\"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?p:h,customProps:e,parentName:b(r),unmountThisParcel:function(){if(c.status!==w)throw Error(s(6,!1,name,c.status));return L(c,!0).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return m(t),t})).catch((function(t){throw c.status=T,v(t),t}))}};r.parcels[i]=c;var l=a();if(!l||\"function\"!=typeof l.then)throw Error(s(7,!1));var m,v,E=(l=l.then((function(t){if(!t)throw Error(s(8,!1));var n=t.name||\"parcel-\".concat(i);if(!D(t.bootstrap))throw Error(s(9,!1,n));if(!D(t.mount))throw Error(s(10,!1,n));if(!D(t.unmount))throw Error(s(11,!1,n));if(t.update&&!D(t.update))throw Error(s(12,!1,n));var e=M(t,\"bootstrap\"),r=M(t,\"mount\"),u=M(t,\"unmount\");c.status=h,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=q(t.timeouts),t.update&&(c.update=M(t,\"update\"),o.update=function(t){return c.customProps=t,$(function(t){return Promise.resolve().then((function(){if(t.status!==w)throw Error(s(32,!1,b(t)));return t.status=g,V(t,\"update\").then((function(){return t.status=w,t})).catch((function(n){throw f(n,t,T)}))}))}(c))})}))).then((function(){return j(c,!0)})),y=E.then((function(){return I(c,!0)})),P=new Promise((function(t,n){m=t,v=n}));return o={mount:function(){return $(Promise.resolve().then((function(){if(c.status!==d)throw Error(s(13,!1,name,c.status));return r.parcels[i]=c,I(c)})))},unmount:function(){return $(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:$(l),bootstrapPromise:$(E),mountPromise:$(y),unmountPromise:$(P)}}function $(t){return t.then((function(){return null}))}function k(e){var r=b(e),o=\"function\"==typeof e.customProps?e.customProps(r,window.location):e.customProps;(\"object\"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(s(40,!1),r,o));var i=N({},o,{name:r,mountParcel:C.bind(e),singleSpa:t});return A(e)&&(i.unmountSelf=e.unmountThisParcel),i}var K={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function F(t,n,e){if(\"number\"!=typeof t||t<=0)throw Error(s(16,!1));K.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function J(t,n,e){if(\"number\"!=typeof t||t<=0)throw Error(s(17,!1));K.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if(\"number\"!=typeof t||t<=0)throw Error(s(18,!1));K.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if(\"number\"!=typeof t||t<=0)throw Error(s(19,!1));K.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n){var e=t.timeouts[n],r=e.warningMillis,o=S(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](k(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var f=s(31,!1,n,o,b(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(f)):console.error(f);else if(!c){var n=t,o=n*r;console.warn(f),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r)}}}))}function q(t){var n={};for(var e in K)n[e]=N({},K[e],t&&t[e]||{});return n}function z(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==l&&t.status!==y?t:(t.status=p,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(k(t));if(!U(o))throw r=!0,Error(s(33,!1,b(t)));return o.then((function(r){var o;t.loadErrorTime=null,\"object\"!==n(e=r)&&(o=34),D(e.bootstrap)||(o=35),D(e.mount)||(o=36),D(e.unmount)||(o=37);var i=S(e);if(o){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(s(o,!1,i,b(t),a),e),u(void 0,t,T),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=N({},t.devtools.overlays,e.devtools.overlays)),t.status=h,t.bootstrap=M(e,\"bootstrap\"),t.mount=M(e,\"mount\"),t.unmount=M(e,\"unmount\"),t.unload=M(e,\"unload\"),t.timeouts=q(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=T:(e=y,t.loadErrorTime=(new Date).getTime()),u(n,t,e),t})));var e,r}))}var X,Y=\"undefined\"!=typeof window,Z={hashchange:[],popstate:[]},tt=[\"hashchange\",\"popstate\"];function nt(t){var n;if(\"string\"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(s(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=ct(window.location.href),r=ct(n);0===n.indexOf(\"#\")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function et(t){var n=this;if(t){var e=t[0].type;tt.indexOf(e)>=0&&Z[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function rt(){Ut([],arguments)}function ot(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return X&&e===o||rt(it(window.history.state,n)),r}}function it(t,n){var e;try{e=new PopStateEvent(\"popstate\",{state:t})}catch(n){(e=document.createEvent(\"PopStateEvent\")).initPopStateEvent(\"popstate\",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Y){window.addEventListener(\"hashchange\",rt),window.addEventListener(\"popstate\",rt);var ut=window.addEventListener,at=window.removeEventListener;window.addEventListener=function(t,n){if(!(\"function\"==typeof n&&tt.indexOf(t)>=0)||_(Z[t],(function(t){return t===n})))return ut.apply(this,arguments);Z[t].push(n)},window.removeEventListener=function(t,n){if(!(\"function\"==typeof n&&tt.indexOf(t)>=0))return at.apply(this,arguments);Z[t]=Z[t].filter((function(t){return t!==n}))},window.history.pushState=ot(window.history.pushState,\"pushState\"),window.history.replaceState=ot(window.history.replaceState,\"replaceState\"),window.singleSpaNavigate?console.warn(s(41,!1)):window.singleSpaNavigate=nt}function ct(t){var n=document.createElement(\"a\");return n.href=t,n}var st=!1;function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!st){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return lt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return lt.call(this,e,window.removeEventListener,t,n,arguments)},st=!0}}function lt(t,n,e,r,o){return\"string\"!=typeof e?t.apply(this,o):(e.split(/\\s+/).forEach((function(t){tt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,\"\"))})),\"\"===e.trim()?this:t.apply(this,o))}var pt={};function ht(t){return Promise.resolve().then((function(){var n=pt[b(t)];return n?t.status===l?(mt(t,n),t):\"UNLOADING\"===t.status?n.promise.then((function(){return t})):t.status!==d?t:(t.status=\"UNLOADING\",V(t,\"unload\").then((function(){return mt(t,n),t})).catch((function(e){return function(t,n,e){delete pt[b(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t,T),n.reject(e)}(t,n,e),t}))):t}))}function mt(t,n){delete pt[b(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve()}function dt(t,n,e,r){pt[b(t)]={app:t,resolve:e,reject:r},Object.defineProperty(pt[b(t)],\"promise\",{get:n})}function vt(t){return pt[t]}var wt=[];function gt(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return wt.forEach((function(i){var u=i.status!==T&&O(i);switch(i.status){case y:o-i.loadErrorTime>=200&&e.push(i);break;case l:case p:u&&e.push(i);break;case h:case d:!u&&vt(b(i))?t.push(i):u&&r.push(i);break;case w:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function Et(){return wt.filter(P).map(b)}function yt(){return wt.map(b)}function Tt(t){var n=_(wt,(function(n){return b(n)===t}));return n?n.status:null}function Pt(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return\"object\"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(s(39,!1));var e=[\"name\",\"app\",\"activeWhen\",\"customProps\"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(s(38,!1,e.join(\", \"),r.join(\", \")));if(\"string\"!=typeof t.name||0===t.name.length)throw Error(s(20,!1));if(\"object\"!==n(t.app)&&\"function\"!=typeof t.app)throw Error(s(20,!1));var o=function(t){return\"string\"==typeof t||\"function\"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(s(24,!1));if(!St(t.customProps))throw Error(s(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if(\"string\"!=typeof t||0===t.length)throw Error(s(20,!1));if(!n)throw Error(s(23,!1));if(\"function\"!=typeof e)throw Error(s(24,!1));if(!St(r))throw Error(s(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp=\"function\"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return\"function\"==typeof t?t:Nt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==yt().indexOf(i.name))throw Error(s(21,!1,i.name));wt.push(N({loadErrorTime:null,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Y&&(ft(),Ut())}function Ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return wt.filter((function(n){return n.activeWhen(t)})).map(b)}function bt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if(\"string\"!=typeof t)throw Error(s(26,!1));var e=_(wt,(function(n){return b(n)===t}));if(!e)throw Error(s(27,!1,t));var r,o=vt(b(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){dt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,At(e,o.resolve,o.reject)):r=new Promise((function(t,n){dt(e,(function(){return r}),t,n),At(e,t,n)})),r}function At(t,n,e){L(t).then(ht).then((function(){n(),setTimeout((function(){Ut()}))})).catch(e)}function St(t){return!t||\"function\"==typeof t||\"object\"===n(t)&&null!==t&&!Array.isArray(t)}function Nt(t){var n=function(t){var n=0,e=!1,r=\"^\";\"/\"!==t[0]&&(t=\"/\"+t);for(var o=0;o<t.length;o++){var i=t[o];(!e&&\":\"===i||e&&\"/\"===i)&&u(o)}return u(t.length),new RegExp(r,\"i\");function u(o){var i=t.slice(n,o).replace(/[|\\\\{}()[\\]^$+*?.]/g,\"\\\\$&\");r+=e?\"[^/]+/?\":i,o!==t.length||e||(r=\"/\"===r.charAt(r.length-1)?\"\".concat(r,\".*$\"):\"\".concat(r,\"(/.*)?$\")),e=!e,n=o}}(t);return function(t){var e=t.href.replace(t.origin,\"\").replace(t.search,\"\").split(\"?\")[0];return n.test(e)}}var _t=!1,Dt=[];function Mt(){return Ut()}function Ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(_t)return new Promise((function(t,e){Dt.push({resolve:t,reject:e,eventArguments:n})}));var r,i=gt(),u=i.appsToUnload,a=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount;return xt()?(_t=!0,r=u.concat(c,a,s),p()):(r=c,f());function f(){return Promise.resolve().then((function(){var t=c.map(z);return Promise.all(t).then(m).then((function(){return[]})).catch((function(t){throw m(),t}))}))}function p(){return Promise.resolve().then((function(){window.dispatchEvent(new o(0===r.length?\"single-spa:before-no-app-change\":\"single-spa:before-app-change\",v(!0))),window.dispatchEvent(new o(\"single-spa:before-routing-event\",v(!0)));var n=u.map(ht),e=a.map(L).map((function(t){return t.then(ht)})).concat(n),i=Promise.all(e);i.then((function(){window.dispatchEvent(new o(\"single-spa:before-mount-routing-event\",v(!0)))}));var f=c.map((function(t){return z(t).then((function(t){return jt(t,i)}))})),l=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return jt(t,i)}));return i.catch((function(t){throw m(),t})).then((function(){return m(),Promise.all(f.concat(l)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(h)}))}))}function h(){var n=Et();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?\"single-spa:no-app-change\":\"single-spa:app-change\";window.dispatchEvent(new o(e,v())),window.dispatchEvent(new o(\"single-spa:routing-event\",v()))}catch(t){setTimeout((function(){throw t}))}if(_t=!1,Dt.length>0){var i=Dt;Dt=[],Ut(i)}return n}function m(){t.forEach((function(t){et(t.eventArguments)})),et(n)}function v(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i={},f=(e(t={},w,[]),e(t,d,[]),e(t,l,[]),e(t,T,[]),t);return o?(c.concat(s).forEach((function(t,n){p(t,w)})),u.forEach((function(t){p(t,l)})),a.forEach((function(t){p(t,d)}))):r.forEach((function(t){p(t)})),{detail:{newAppStatuses:i,appsByNewStatus:f,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0]}};function p(t,n){var e=b(t);n=n||Tt(e),i[e]=n,(f[n]=f[n]||[]).push(e)}}}function jt(t,n){return O(t)?j(t).then((function(t){return n.then((function(){return O(t)?I(t):t}))})):n.then((function(){return t}))}var Lt=!1;function Rt(t){var n;Lt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,X=n),Y&&Ut()}function xt(){return Lt}Y&&setTimeout((function(){Lt||console.warn(s(1,!1))}),5e3);var It={getRawAppData:function(){return[].concat(wt)},reroute:Ut,NOT_LOADED:l,toLoadPromise:z,toBootstrapPromise:j,unregisterApplication:function(t){if(0===wt.filter((function(n){return b(n)===t})).length)throw Error(s(25,!1,t));return bt(t).then((function(){var n=wt.map(b).indexOf(t);wt.splice(n,1)}))}};Y&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=It);\n//# sourceMappingURL=single-spa.min.js.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///D:/myWorkspace/my-github/MyLearn2/LearnSingleSpa/node_modules/single-spa/lib/esm/single-spa.min.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./main/index.js":
/*!***********************!*\
  !*** ./main/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"../../node_modules/single-spa/lib/esm/single-spa.min.js\");\n\r\n\r\nsingle_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"](\r\n  {\r\n    name: 'one',\r\n    app: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../one/index.js */ \"./one/index.js\")),\r\n    activeWhen: '/one',\r\n  },\r\n);\r\n\r\nsingle_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"](\r\n  {\r\n    name: 'two',\r\n    app: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../two/index.js */ \"./two/index.js\")),\r\n    activeWhen: '/two',\r\n  }\r\n);\r\n\r\nsingle_spa__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\r\n\n\n//# sourceURL=webpack:///./main/index.js?");

/***/ })

/******/ });