module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/project/arby/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst IndexPage = () => {\n  const [arbs, setArbitrage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({\n    \"home-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    draw: {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    \"away-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    }\n  });\n  const [totalArbPercentile, setTotalArbPercentile] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const [profit, setProfit] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const [inv, setInv] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const {\n    register,\n    handleSubmit,\n    watch,\n    formState: {\n      errors\n    }\n  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])();\n\n  function calcIndividualArb() {}\n\n  function calcProfit() {}\n\n  function calculateEverything() {}\n\n  console.log(watch());\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const arb = {};\n    Object.entries(watch()).forEach(([key, value]) => {\n      if (key === \"home-win\" || key === \"away-win\" || key === \"draw\") {\n        const percentile = 1 / parseFloat(value) * 100;\n        Object.assign(arb, {\n          [key]: {\n            platform: \"\",\n            odd: parseFloat(value),\n            arb: percentile\n          }\n        });\n      }\n\n      if (key === \"investment\") {\n        setInv(value);\n      }\n    }); // @ts-ignore\n\n    setArbitrage(prev => _objectSpread(_objectSpread({}, prev), arb));\n  }, [JSON.stringify(watch())]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    let totalPerc = 0;\n    Object.entries(arbs).forEach( // @ts-ignore\n    ([_, value]) => {\n      if (value.odd) {\n        totalPerc += 1 / value.odd * 100;\n      }\n    });\n    setTotalArbPercentile(totalPerc);\n  }, [JSON.stringify(arbs)]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (totalArbPercentile) {\n      const prof = inv * 100 / totalArbPercentile - inv;\n      setProfit(prof);\n    }\n  }, [totalArbPercentile]);\n  return __jsx(\"div\", {\n    className: \"max-w-screen w-full place-items-center justify-center flex flex-col\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-2xl font-bold mb-[8px]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"Calc Football Arb\"), __jsx(\"div\", {\n    className: \"my-[8px] min-w-[300px]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"Investment\"), __jsx(\"input\", _extends({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"investment\"), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px] min-w-[300px]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Home Win \", arbs[\"home-win\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && `KES.${(inv * arbs[\"home-win\"].arb / totalArbPercentile).toFixed(2)}`), __jsx(\"input\", _extends({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"home-win\"), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px] min-w-[300px]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, \"Draw \", arbs[\"draw\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && `KES.${(inv * arbs[\"draw\"].arb / totalArbPercentile).toFixed(2)}`), __jsx(\"input\", _extends({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"draw\"), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, \"Away Win \", arbs[\"away-win\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && `KES.${(inv * arbs[\"away-win\"].arb / totalArbPercentile).toFixed(2)}`), __jsx(\"input\", _extends({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"away-win\"), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"mt-[8px] flex flex-col\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, \"Investment: \", inv), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }\n  }, \"Percentile: \", totalArbPercentile.toFixed(2)), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }\n  }, \"Profit: \", profit.toFixed(2))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJhcmJzIiwic2V0QXJiaXRyYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtIiwib2RkIiwiYXJiIiwiZHJhdyIsInRvdGFsQXJiUGVyY2VudGlsZSIsInNldFRvdGFsQXJiUGVyY2VudGlsZSIsInByb2ZpdCIsInNldFByb2ZpdCIsImludiIsInNldEludiIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VGb3JtIiwiY2FsY0luZGl2aWR1YWxBcmIiLCJjYWxjUHJvZml0IiwiY2FsY3VsYXRlRXZlcnl0aGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwicGVyY2VudGlsZSIsInBhcnNlRmxvYXQiLCJhc3NpZ24iLCJwcmV2IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdGFsUGVyYyIsIl8iLCJwcm9mIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBVUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTSxDQUFDQyxJQUFELEVBQU9DLFlBQVAsSUFBdUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBMEI7QUFDckQsZ0JBQVk7QUFDVkMsY0FBUSxFQUFFLEVBREE7QUFFVkMsU0FBRyxFQUFFLEdBRks7QUFHVkMsU0FBRyxFQUFFO0FBSEssS0FEeUM7QUFNckRDLFFBQUksRUFBRTtBQUNKSCxjQUFRLEVBQUUsRUFETjtBQUVKQyxTQUFHLEVBQUUsR0FGRDtBQUdKQyxTQUFHLEVBQUU7QUFIRCxLQU4rQztBQVdyRCxnQkFBWTtBQUNWRixjQUFRLEVBQUUsRUFEQTtBQUVWQyxTQUFHLEVBQUUsR0FGSztBQUdWQyxTQUFHLEVBQUU7QUFISztBQVh5QyxHQUEx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QUFBLHFCQUFtQkYsR0FBbkIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1CSixrQkFBa0IsQ0FBQ2dDLE9BQW5CLENBQTJCLENBQTNCLENBQW5CLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFlOUIsTUFBTSxDQUFDOEIsT0FBUCxDQUFlLENBQWYsQ0FBZixDQUhGLENBN0RGLENBREY7QUFxRUQsQ0FqS0Q7O0FBbUtlekMsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXVlcnlzdHJpbmdcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbnR5cGUgQXJiaXRyYWdlID0ge1xuICBba2V5IGluIFwiaG9tZS13aW5cIiB8IFwiZHJhd1wiIHwgXCJhd2F5LXdpblwiXToge1xuICAgIHBsYXRmb3JtOiBzdHJpbmc7XG4gICAgb2RkOiBudW1iZXI7XG4gICAgYXJiOiBudW1iZXI7XG4gIH07XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFthcmJzLCBzZXRBcmJpdHJhZ2VdID0gUmVhY3QudXNlU3RhdGU8QXJiaXRyYWdlPih7XG4gICAgXCJob21lLXdpblwiOiB7XG4gICAgICBwbGF0Zm9ybTogXCJcIixcbiAgICAgIG9kZDogMC4wLFxuICAgICAgYXJiOiAwLjAsXG4gICAgfSxcbiAgICBkcmF3OiB7XG4gICAgICBwbGF0Zm9ybTogXCJcIixcbiAgICAgIG9kZDogMC4wLFxuICAgICAgYXJiOiAwLjAsXG4gICAgfSxcbiAgICBcImF3YXktd2luXCI6IHtcbiAgICAgIHBsYXRmb3JtOiBcIlwiLFxuICAgICAgb2RkOiAwLjAsXG4gICAgICBhcmI6IDAuMCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgW3RvdGFsQXJiUGVyY2VudGlsZSwgc2V0VG90YWxBcmJQZXJjZW50aWxlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvZml0LCBzZXRQcm9maXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2ludiwgc2V0SW52XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKCk7XG5cbiAgZnVuY3Rpb24gY2FsY0luZGl2aWR1YWxBcmIoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGNQcm9maXQoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUV2ZXJ5dGhpbmcoKSB7fVxuXG4gIGNvbnNvbGUubG9nKHdhdGNoKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXJiOiB1bmtub3duID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMod2F0Y2goKSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSBcImhvbWUtd2luXCIgfHwga2V5ID09PSBcImF3YXktd2luXCIgfHwga2V5ID09PSBcImRyYXdcIikge1xuICAgICAgICBjb25zdCBwZXJjZW50aWxlOiB1bmtub3duID0gKDEgLyBwYXJzZUZsb2F0KHZhbHVlKSkgKiAxMDA7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihhcmIgYXMgQXJiaXRyYWdlLCB7XG4gICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgIHBsYXRmb3JtOiBcIlwiLFxuICAgICAgICAgICAgb2RkOiBwYXJzZUZsb2F0KHZhbHVlKSxcbiAgICAgICAgICAgIGFyYjogcGVyY2VudGlsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gXCJpbnZlc3RtZW50XCIpIHtcbiAgICAgICAgc2V0SW52KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzZXRBcmJpdHJhZ2UoKHByZXY6IEFyYml0cmFnZSkgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICAuLi4oYXJiIGFzIEFyYml0cmFnZSksXG4gICAgfSkpO1xuICB9LCBbSlNPTi5zdHJpbmdpZnkod2F0Y2goKSldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0b3RhbFBlcmMgPSAwO1xuICAgIE9iamVjdC5lbnRyaWVzKGFyYnMpLmZvckVhY2goXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoW18sIHZhbHVlXTogW1xuICAgICAgICBcImhvbWUtd2luXCIgfCBcImRyYXdcIiB8IFwiYXdheS13aW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHBsYXRmb3JtOiBzdHJpbmc7XG4gICAgICAgICAgb2RkOiBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgIF0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLm9kZCkge1xuICAgICAgICAgIHRvdGFsUGVyYyArPSAoMSAvIHZhbHVlLm9kZCkgKiAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgc2V0VG90YWxBcmJQZXJjZW50aWxlKHRvdGFsUGVyYyk7XG4gIH0sIFtKU09OLnN0cmluZ2lmeShhcmJzKV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRvdGFsQXJiUGVyY2VudGlsZSkge1xuICAgICAgY29uc3QgcHJvZiA9IChpbnYgKiAxMDApIC8gdG90YWxBcmJQZXJjZW50aWxlIC0gaW52O1xuXG4gICAgICBzZXRQcm9maXQocHJvZik7XG4gICAgfVxuICB9LCBbdG90YWxBcmJQZXJjZW50aWxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbiB3LWZ1bGwgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItWzhweF1cIj5DYWxjIEZvb3RiYWxsIEFyYjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdIG1pbi13LVszMDBweF1cIj5cbiAgICAgICAgPGg2PkludmVzdG1lbnQ8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImludmVzdG1lbnRcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktWzhweF0gbWluLXctWzMwMHB4XVwiPlxuICAgICAgICA8aDY+XG4gICAgICAgICAgSG9tZSBXaW4ge2FyYnNbXCJob21lLXdpblwiXS5hcmIudG9GaXhlZCgyKX0le1wiIFwifVxuICAgICAgICAgIHtpbnYgJiZcbiAgICAgICAgICAgIHRvdGFsQXJiUGVyY2VudGlsZSAmJlxuICAgICAgICAgICAgYEtFUy4keygoaW52ICogYXJic1tcImhvbWUtd2luXCJdLmFyYikgLyB0b3RhbEFyYlBlcmNlbnRpbGUpLnRvRml4ZWQoXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICl9YH1cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXswLjB9XG4gICAgICAgICAgbWluPXswLjB9XG4gICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJob21lLXdpblwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1bOHB4XSBtaW4tdy1bMzAwcHhdXCI+XG4gICAgICAgIDxoNj5cbiAgICAgICAgICBEcmF3IHthcmJzW1wiZHJhd1wiXS5hcmIudG9GaXhlZCgyKX0le1wiIFwifVxuICAgICAgICAgIHtpbnYgJiZcbiAgICAgICAgICAgIHRvdGFsQXJiUGVyY2VudGlsZSAmJlxuICAgICAgICAgICAgYEtFUy4keygoaW52ICogYXJic1tcImRyYXdcIl0uYXJiKSAvIHRvdGFsQXJiUGVyY2VudGlsZSkudG9GaXhlZCgyKX1gfVxuICAgICAgICA8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRyYXdcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlcIj5cbiAgICAgICAgPGg2PlxuICAgICAgICAgIEF3YXkgV2luIHthcmJzW1wiYXdheS13aW5cIl0uYXJiLnRvRml4ZWQoMil9JXtcIiBcIn1cbiAgICAgICAgICB7aW52ICYmXG4gICAgICAgICAgICB0b3RhbEFyYlBlcmNlbnRpbGUgJiZcbiAgICAgICAgICAgIGBLRVMuJHsoKGludiAqIGFyYnNbXCJhd2F5LXdpblwiXS5hcmIpIC8gdG90YWxBcmJQZXJjZW50aWxlKS50b0ZpeGVkKFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApfWB9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYXdheS13aW5cIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzhweF0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3Bhbj5JbnZlc3RtZW50OiB7aW52fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UGVyY2VudGlsZToge3RvdGFsQXJiUGVyY2VudGlsZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UHJvZml0OiB7cHJvZml0LnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIj9kZmM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhvb2stZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-hook-form\n");

/***/ })

/******/ });