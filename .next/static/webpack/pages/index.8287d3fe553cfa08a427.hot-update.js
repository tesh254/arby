webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/arby/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      arbs = _React$useState2[0],\n      setArbitrage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      totalArbPercentile = _React$useState4[0],\n      setTotalArbPercentile = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      profit = _React$useState6[0],\n      setProfit = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      inv = _React$useState8[0],\n      setInv = _React$useState8[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  function calcIndividualArb() {}\n\n  function calcProfit() {}\n\n  function calculateEverything() {}\n\n  console.log(watch());\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var arb = {};\n    Object.entries(watch()).forEach(function (_ref) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      if (key === \"home-win\" || key === \"away-win\" || key === \"draw\") {\n        Object.assign(arb, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, key, {\n          platform: \"\",\n          odd: parseFloat(value)\n        }));\n      }\n    }); // @ts-ignore\n\n    setArbitrage(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), arb);\n    });\n  }, [JSON.stringify(watch())]);\n  console.log({\n    arbs: arbs\n  });\n  return __jsx(\"div\", {\n    className: \"max-w-screen w-full place-items-center justify-center flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-2xl font-bold mb-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"Calc Football Arb\"), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Investment\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"investment\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Home Win\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"home-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, \"Draw\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"draw\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, \"Away Win\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"away-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"mt-[8px] flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, \"Investment: \", inv), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, \"Percentile: \", totalArbPercentile), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, \"Profit: \", profit)));\n};\n\n_s(IndexPage, \"zV7fyEmru5+HP+pv+T7oP27bgiE=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFyYnMiLCJzZXRBcmJpdHJhZ2UiLCJ0b3RhbEFyYlBlcmNlbnRpbGUiLCJzZXRUb3RhbEFyYlBlcmNlbnRpbGUiLCJwcm9maXQiLCJzZXRQcm9maXQiLCJpbnYiLCJzZXRJbnYiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImNhbGNJbmRpdmlkdWFsQXJiIiwiY2FsY1Byb2ZpdCIsImNhbGN1bGF0ZUV2ZXJ5dGhpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXJiIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImFzc2lnbiIsInBsYXRmb3JtIiwib2RkIiwicGFyc2VGbG9hdCIsInByZXYiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQVNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSx3QkFDT0MsNENBQUssQ0FBQ0MsUUFBTixFQURQO0FBQUE7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsWUFEUzs7QUFBQSx5QkFFOEJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRjlCO0FBQUE7QUFBQSxNQUVmRyxrQkFGZTtBQUFBLE1BRUtDLHFCQUZMOztBQUFBLHlCQUdNTCw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLENBQXZCLENBSE47QUFBQTtBQUFBLE1BR2ZLLE1BSGU7QUFBQSxNQUdQQyxTQUhPOztBQUFBLHlCQUlBUCw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLENBQXZCLENBSkE7QUFBQTtBQUFBLE1BSWZPLEdBSmU7QUFBQSxNQUlWQyxNQUpVOztBQUFBLGlCQVdsQkMsK0RB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxnQkFBWSxFQUFFLEdBRmhCO0FBR0UsT0FBRyxFQUFFLEdBSFA7QUFJRSxRQUFJLEVBQUU7QUFKUixLQUtNQSxRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQWhDRixFQTBDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUJILEdBQW5CLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtQkosa0JBQW5CLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFlRSxNQUFmLENBSEYsQ0ExQ0YsQ0FERjtBQWtERCxDQTdGRDs7R0FBTVAsUztVQVdBVyx1RDs7O0tBWEFYLFM7QUErRlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG50eXBlIEFyYml0cmFnZSA9IHtcbiAgW2tleSBpbiBcImhvbWUtd2luXCIgfCBcImRyYXdcIiB8IFwiYXdheS13aW5cIl06IHtcbiAgICBwbGF0Zm9ybTogc3RyaW5nO1xuICAgIG9kZDogbnVtYmVyO1xuICB9O1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYXJicywgc2V0QXJiaXRyYWdlXSA9IFJlYWN0LnVzZVN0YXRlPEFyYml0cmFnZT4oKTtcbiAgY29uc3QgW3RvdGFsQXJiUGVyY2VudGlsZSwgc2V0VG90YWxBcmJQZXJjZW50aWxlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvZml0LCBzZXRQcm9maXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2ludiwgc2V0SW52XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKCk7XG5cbiAgZnVuY3Rpb24gY2FsY0luZGl2aWR1YWxBcmIoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGNQcm9maXQoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUV2ZXJ5dGhpbmcoKSB7fVxuXG4gIGNvbnNvbGUubG9nKHdhdGNoKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXJiID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMod2F0Y2goKSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSBcImhvbWUtd2luXCIgfHwga2V5ID09PSBcImF3YXktd2luXCIgfHwga2V5ID09PSBcImRyYXdcIikge1xuICAgICAgICBPYmplY3QuYXNzaWduKGFyYiwge1xuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBwbGF0Zm9ybTogXCJcIixcbiAgICAgICAgICAgIG9kZDogcGFyc2VGbG9hdCh2YWx1ZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc2V0QXJiaXRyYWdlKChwcmV2OiBBcmJpdHJhZ2UpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgLi4uYXJiLFxuICAgIH0pKTtcbiAgfSwgW0pTT04uc3RyaW5naWZ5KHdhdGNoKCkpXSk7XG5cbiAgY29uc29sZS5sb2coeyBhcmJzIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4gdy1mdWxsIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLVs4cHhdXCI+Q2FsYyBGb290YmFsbCBBcmI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1bOHB4XVwiPlxuICAgICAgICA8aDY+SW52ZXN0bWVudDwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiaW52ZXN0bWVudFwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1bOHB4XVwiPlxuICAgICAgICA8aDY+SG9tZSBXaW48L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImhvbWUtd2luXCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdXCI+XG4gICAgICAgIDxoNj5EcmF3PC9oNj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXswLjB9XG4gICAgICAgICAgbWluPXswLjB9XG4gICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJkcmF3XCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15XCI+XG4gICAgICAgIDxoNj5Bd2F5IFdpbjwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYXdheS13aW5cIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzhweF0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3Bhbj5JbnZlc3RtZW50OiB7aW52fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UGVyY2VudGlsZToge3RvdGFsQXJiUGVyY2VudGlsZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPlByb2ZpdDoge3Byb2ZpdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})