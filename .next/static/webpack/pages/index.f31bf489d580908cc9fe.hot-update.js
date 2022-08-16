webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/arby/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({\n    \"home-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    draw: {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    \"away-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    }\n  }),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      arbs = _React$useState2[0],\n      setArbitrage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      totalArbPercentile = _React$useState4[0],\n      setTotalArbPercentile = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      profit = _React$useState6[0],\n      setProfit = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      inv = _React$useState8[0],\n      setInv = _React$useState8[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  function calcIndividualArb() {}\n\n  function calcProfit() {}\n\n  function calculateEverything() {}\n\n  console.log(watch());\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var arb = {};\n    Object.entries(watch()).forEach(function (_ref) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      if (key === \"home-win\" || key === \"away-win\" || key === \"draw\") {\n        var percentile = 1 / parseFloat(value) * 100;\n        Object.assign(arb, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, key, {\n          platform: \"\",\n          odd: parseFloat(value),\n          arb: percentile\n        }));\n      }\n\n      if (key === \"investment\") {\n        setInv(value);\n      }\n    }); // @ts-ignore\n\n    setArbitrage(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), arb);\n    });\n  }, [JSON.stringify(watch())]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var totalPerc = 0;\n    Object.entries(arbs).forEach( // @ts-ignore\n    function (_ref3) {\n      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n          _ = _ref4[0],\n          value = _ref4[1];\n\n      if (value.odd) {\n        totalPerc += 1 / value.odd * 100;\n      }\n    });\n    setTotalArbPercentile(totalPerc);\n  }, [JSON.stringify(arbs)]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (totalArbPercentile) {\n      var prof = inv / totalArbPercentile - inv;\n      setProfit(prof);\n    }\n  }, [totalArbPercentile]);\n  return __jsx(\"div\", {\n    className: \"max-w-screen w-full place-items-center justify-center flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-2xl font-bold mb-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"Calc Football Arb\"), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"Investment\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"investment\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Home Win \", arbs[\"home-win\"], \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat(inv * arbs[\"home-win\"].arb / totalArbPercentile)), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"home-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, \"Draw \", arbs[\"draw\"], \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat(inv * arbs[\"draw\"].arb / totalArbPercentile)), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"draw\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, \"Away Win \", arbs[\"away-win\"].arb, \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat(inv * arbs[\"away-win\"].arb / totalArbPercentile)), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"away-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"mt-[8px] flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, \"Investment: \", inv), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }\n  }, \"Percentile: \", totalArbPercentile.toFixed(2)), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }, \"Profit: \", profit)));\n};\n\n_s(IndexPage, \"UB4UEnmRwF/1dcCYkd4Gd3apJn4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtIiwib2RkIiwiYXJiIiwiZHJhdyIsImFyYnMiLCJzZXRBcmJpdHJhZ2UiLCJ0b3RhbEFyYlBlcmNlbnRpbGUiLCJzZXRUb3RhbEFyYlBlcmNlbnRpbGUiLCJwcm9maXQiLCJzZXRQcm9maXQiLCJpbnYiLCJzZXRJbnYiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImNhbGNJbmRpdmlkdWFsQXJiIiwiY2FsY1Byb2ZpdCIsImNhbGN1bGF0ZUV2ZXJ5dGhpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInBlcmNlbnRpbGUiLCJwYXJzZUZsb2F0IiwiYXNzaWduIiwicHJldiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3RhbFBlcmMiLCJfIiwicHJvZiIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHdCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQTBCO0FBQ3JELGdCQUFZO0FBQ1ZDLGNBQVEsRUFBRSxFQURBO0FBRVZDLFNBQUcsRUFBRSxHQUZLO0FBR1ZDLFNBQUcsRUFBRTtBQUhLLEtBRHlDO0FBTXJEQyxRQUFJLEVBQUU7QUFDSkgsY0FBUSxFQUFFLEVBRE47QUFFSkMsU0FBRyxFQUFFLEdBRkQ7QUFHSkMsU0FBRyxFQUFFO0FBSEQsS0FOK0M7QUFXckQsZ0JBQVk7QUFDVkYsY0FBUSxFQUFFLEVBREE7QUFFVkMsU0FBRyxFQUFFLEdBRks7QUFHVkMsU0FBRyxFQUFFO0FBSEs7QUFYeUMsR0FBMUIs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QkFBa0IsQ0FBQ2dDLE9BQW5CLENBQTJCLENBQTNCLENBQW5CLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFlOUIsTUFBZixDQUhGLENBekRGLENBREY7QUFpRUQsQ0E3SkQ7O0dBQU1YLFM7VUEyQkFlLHVEOzs7S0EzQkFmLFM7QUErSlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG50eXBlIEFyYml0cmFnZSA9IHtcbiAgW2tleSBpbiBcImhvbWUtd2luXCIgfCBcImRyYXdcIiB8IFwiYXdheS13aW5cIl06IHtcbiAgICBwbGF0Zm9ybTogc3RyaW5nO1xuICAgIG9kZDogbnVtYmVyO1xuICAgIGFyYjogbnVtYmVyO1xuICB9O1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYXJicywgc2V0QXJiaXRyYWdlXSA9IFJlYWN0LnVzZVN0YXRlPEFyYml0cmFnZT4oe1xuICAgIFwiaG9tZS13aW5cIjoge1xuICAgICAgcGxhdGZvcm06IFwiXCIsXG4gICAgICBvZGQ6IDAuMCxcbiAgICAgIGFyYjogMC4wLFxuICAgIH0sXG4gICAgZHJhdzoge1xuICAgICAgcGxhdGZvcm06IFwiXCIsXG4gICAgICBvZGQ6IDAuMCxcbiAgICAgIGFyYjogMC4wLFxuICAgIH0sXG4gICAgXCJhd2F5LXdpblwiOiB7XG4gICAgICBwbGF0Zm9ybTogXCJcIixcbiAgICAgIG9kZDogMC4wLFxuICAgICAgYXJiOiAwLjAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IFt0b3RhbEFyYlBlcmNlbnRpbGUsIHNldFRvdGFsQXJiUGVyY2VudGlsZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2ZpdCwgc2V0UHJvZml0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtpbnYsIHNldEludl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSgpO1xuXG4gIGZ1bmN0aW9uIGNhbGNJbmRpdmlkdWFsQXJiKCkge31cblxuICBmdW5jdGlvbiBjYWxjUHJvZml0KCkge31cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVFdmVyeXRoaW5nKCkge31cblxuICBjb25zb2xlLmxvZyh3YXRjaCgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFyYjogdW5rbm93biA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKHdhdGNoKCkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJob21lLXdpblwiIHx8IGtleSA9PT0gXCJhd2F5LXdpblwiIHx8IGtleSA9PT0gXCJkcmF3XCIpIHtcbiAgICAgICAgY29uc3QgcGVyY2VudGlsZTogdW5rbm93biA9ICgxIC8gcGFyc2VGbG9hdCh2YWx1ZSkpICogMTAwO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXJiIGFzIEFyYml0cmFnZSwge1xuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBwbGF0Zm9ybTogXCJcIixcbiAgICAgICAgICAgIG9kZDogcGFyc2VGbG9hdCh2YWx1ZSksXG4gICAgICAgICAgICBhcmI6IHBlcmNlbnRpbGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09IFwiaW52ZXN0bWVudFwiKSB7XG4gICAgICAgIHNldEludih2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc2V0QXJiaXRyYWdlKChwcmV2OiBBcmJpdHJhZ2UpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgLi4uKGFyYiBhcyBBcmJpdHJhZ2UpLFxuICAgIH0pKTtcbiAgfSwgW0pTT04uc3RyaW5naWZ5KHdhdGNoKCkpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdG90YWxQZXJjID0gMDtcbiAgICBPYmplY3QuZW50cmllcyhhcmJzKS5mb3JFYWNoKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKFtfLCB2YWx1ZV06IFtcbiAgICAgICAgXCJob21lLXdpblwiIHwgXCJkcmF3XCIgfCBcImF3YXktd2luXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGF0Zm9ybTogc3RyaW5nO1xuICAgICAgICAgIG9kZDogbnVtYmVyO1xuICAgICAgICB9XG4gICAgICBdKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS5vZGQpIHtcbiAgICAgICAgICB0b3RhbFBlcmMgKz0gKDEgLyB2YWx1ZS5vZGQpICogMTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldFRvdGFsQXJiUGVyY2VudGlsZSh0b3RhbFBlcmMpO1xuICB9LCBbSlNPTi5zdHJpbmdpZnkoYXJicyldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0b3RhbEFyYlBlcmNlbnRpbGUpIHtcbiAgICAgIGNvbnN0IHByb2YgPSBpbnYgLyB0b3RhbEFyYlBlcmNlbnRpbGUgLSBpbnY7XG5cbiAgICAgIHNldFByb2ZpdChwcm9mKTtcbiAgICB9XG4gIH0sIFt0b3RhbEFyYlBlcmNlbnRpbGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuIHctZnVsbCBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi1bOHB4XVwiPkNhbGMgRm9vdGJhbGwgQXJiPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktWzhweF1cIj5cbiAgICAgICAgPGg2PkludmVzdG1lbnQ8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImludmVzdG1lbnRcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktWzhweF1cIj5cbiAgICAgICAgPGg2PlxuICAgICAgICAgIEhvbWUgV2luIHthcmJzW1wiaG9tZS13aW5cIl19JXtcIiBcIn1cbiAgICAgICAgICB7aW52ICYmXG4gICAgICAgICAgICB0b3RhbEFyYlBlcmNlbnRpbGUgJiZcbiAgICAgICAgICAgIGBLRVMuJHsoaW52ICogYXJic1tcImhvbWUtd2luXCJdLmFyYikgLyB0b3RhbEFyYlBlcmNlbnRpbGV9YH1cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXswLjB9XG4gICAgICAgICAgbWluPXswLjB9XG4gICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJob21lLXdpblwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1bOHB4XVwiPlxuICAgICAgICA8aDY+XG4gICAgICAgICAgRHJhdyB7YXJic1tcImRyYXdcIl19JXtcIiBcIn1cbiAgICAgICAgICB7aW52ICYmXG4gICAgICAgICAgICB0b3RhbEFyYlBlcmNlbnRpbGUgJiZcbiAgICAgICAgICAgIGBLRVMuJHsoaW52ICogYXJic1tcImRyYXdcIl0uYXJiKSAvIHRvdGFsQXJiUGVyY2VudGlsZX1gfVxuICAgICAgICA8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRyYXdcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlcIj5cbiAgICAgICAgPGg2PlxuICAgICAgICAgIEF3YXkgV2luIHthcmJzW1wiYXdheS13aW5cIl0uYXJifSV7XCIgXCJ9XG4gICAgICAgICAge2ludiAmJlxuICAgICAgICAgICAgdG90YWxBcmJQZXJjZW50aWxlICYmXG4gICAgICAgICAgICBgS0VTLiR7KGludiAqIGFyYnNbXCJhd2F5LXdpblwiXS5hcmIpIC8gdG90YWxBcmJQZXJjZW50aWxlfWB9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYXdheS13aW5cIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzhweF0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3Bhbj5JbnZlc3RtZW50OiB7aW52fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UGVyY2VudGlsZToge3RvdGFsQXJiUGVyY2VudGlsZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UHJvZml0OiB7cHJvZml0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})