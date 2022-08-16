webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/arby/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({\n    \"home-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    draw: {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    },\n    \"away-win\": {\n      platform: \"\",\n      odd: 0.0,\n      arb: 0.0\n    }\n  }),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      arbs = _React$useState2[0],\n      setArbitrage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      totalArbPercentile = _React$useState4[0],\n      setTotalArbPercentile = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      profit = _React$useState6[0],\n      setProfit = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      inv = _React$useState8[0],\n      setInv = _React$useState8[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  function calcIndividualArb() {}\n\n  function calcProfit() {}\n\n  function calculateEverything() {}\n\n  console.log(watch());\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var arb = {};\n    Object.entries(watch()).forEach(function (_ref) {\n      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      if (key === \"home-win\" || key === \"away-win\" || key === \"draw\") {\n        var percentile = 1 / parseFloat(value) * 100;\n        Object.assign(arb, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, key, {\n          platform: \"\",\n          odd: parseFloat(value),\n          arb: percentile\n        }));\n      }\n\n      if (key === \"investment\") {\n        setInv(value);\n      }\n    }); // @ts-ignore\n\n    setArbitrage(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), arb);\n    });\n  }, [JSON.stringify(watch())]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var totalPerc = 0;\n    Object.entries(arbs).forEach( // @ts-ignore\n    function (_ref3) {\n      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n          _ = _ref4[0],\n          value = _ref4[1];\n\n      if (value.odd) {\n        totalPerc += 1 / value.odd * 100;\n      }\n    });\n    setTotalArbPercentile(totalPerc);\n  }, [JSON.stringify(arbs)]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (totalArbPercentile) {\n      var prof = inv / totalArbPercentile - inv;\n      setProfit(prof);\n    }\n  }, [totalArbPercentile]);\n  return __jsx(\"div\", {\n    className: \"max-w-screen w-full place-items-center justify-center flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-2xl font-bold mb-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"Calc Football Arb\"), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"Investment\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"investment\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Home Win \", arbs[\"home-win\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat((inv * arbs[\"home-win\"].arb / totalArbPercentile).toFixed(2))), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"home-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, \"Draw \", arbs[\"draw\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat((inv * arbs[\"draw\"].arb / totalArbPercentile).toFixed(2))), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"draw\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, \"Away Win \", arbs[\"away-win\"].arb.toFixed(2), \"%\", \" \", inv && totalArbPercentile && \"KES.\".concat((inv * arbs[\"away-win\"].arb / totalArbPercentile).toFixed(2))), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"away-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"mt-[8px] flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, \"Investment: \", inv), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }\n  }, \"Percentile: \", totalArbPercentile.toFixed(2)), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }\n  }, \"Profit: \", profit)));\n};\n\n_s(IndexPage, \"UB4UEnmRwF/1dcCYkd4Gd3apJn4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBsYXRmb3JtIiwib2RkIiwiYXJiIiwiZHJhdyIsImFyYnMiLCJzZXRBcmJpdHJhZ2UiLCJ0b3RhbEFyYlBlcmNlbnRpbGUiLCJzZXRUb3RhbEFyYlBlcmNlbnRpbGUiLCJwcm9maXQiLCJzZXRQcm9maXQiLCJpbnYiLCJzZXRJbnYiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImNhbGNJbmRpdmlkdWFsQXJiIiwiY2FsY1Byb2ZpdCIsImNhbGN1bGF0ZUV2ZXJ5dGhpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInBlcmNlbnRpbGUiLCJwYXJzZUZsb2F0IiwiYXNzaWduIiwicHJldiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3RhbFBlcmMiLCJfIiwicHJvZiIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHdCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQTBCO0FBQ3JELGdCQUFZO0FBQ1ZDLGNBQVEsRUFBRSxFQURBO0FBRVZDLFNBQUcsRUFBRSxHQUZLO0FBR1ZDLFNBQUcsRUFBRTtBQUhLLEtBRHlDO0FBTXJEQyxRQUFJLEVBQUU7QUFDSkgsY0FBUSxFQUFFLEVBRE47QUFFSkMsU0FBRyxFQUFFLEdBRkQ7QUFHSkMsU0FBRyxFQUFFO0FBSEQsS0FOK0M7QUFXckQsZ0JBQVk7QUFDVkYsY0FBUSxFQUFFLEVBREE7QUFFVkMsU0FBRyxFQUFFLEdBRks7QUFHVkMsU0FBRyxFQUFFO0FBSEs7QUFYeUMsR0FBMUIsQ0FEUDtBQUFBO0FBQUEsTUFDZkUsSUFEZTtBQUFBLE1BQ1RDLFlBRFM7O0FBQUEseUJBa0I4QlAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FsQjlCO0FBQUE7QUFBQSxNQWtCZk8sa0JBbEJlO0FBQUEsTUFrQktDLHFCQWxCTDs7QUFBQSx5QkFtQk1ULDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsQ0FBdkIsQ0FuQk47QUFBQTtBQUFBLE1BbUJmUyxNQW5CZTtBQUFBLE1BbUJQQyxTQW5CTzs7QUFBQSx5QkFvQkFYLDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsQ0FBdkIsQ0FwQkE7QUFBQTtBQUFBLE1Bb0JmVyxHQXBCZTtBQUFBLE1Bb0JWQyxNQXBCVTs7QUFBQSxpQkEyQmxCQywrREFBTyxFQTNCVztBQUFBLE1BdUJwQkMsUUF2Qm9CLFlBdUJwQkEsUUF2Qm9CO0FBQUEsTUF3QnBCQyxZQXhCb0IsWUF3QnBCQSxZQXhCb0I7QUFBQSxNQXlCcEJDLEtBekJvQixZQXlCcEJBLEtBekJvQjtBQUFBLE1BMEJQQyxNQTFCTyxZQTBCcEJDLFNBMUJvQixDQTBCUEQsTUExQk87O0FBNkJ0QixXQUFTRSxpQkFBVCxHQUE2QixDQUFFOztBQUUvQixXQUFTQyxVQUFULEdBQXNCLENBQUU7O0FBRXhCLFdBQVNDLG1CQUFULEdBQStCLENBQUU7O0FBRWpDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBSyxFQUFqQjtBQUVBUSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNckIsR0FBWSxHQUFHLEVBQXJCO0FBQ0FzQixVQUFNLENBQUNDLE9BQVAsQ0FBZVYsS0FBSyxFQUFwQixFQUF3QlcsT0FBeEIsQ0FBZ0MsZ0JBQWtCO0FBQUE7QUFBQSxVQUFoQkMsR0FBZ0I7QUFBQSxVQUFYQyxLQUFXOztBQUNoRCxVQUFJRCxHQUFHLEtBQUssVUFBUixJQUFzQkEsR0FBRyxLQUFLLFVBQTlCLElBQTRDQSxHQUFHLEtBQUssTUFBeEQsRUFBZ0U7QUFDOUQsWUFBTUUsVUFBbUIsR0FBSSxJQUFJQyxVQUFVLENBQUNGLEtBQUQsQ0FBZixHQUEwQixHQUF0RDtBQUVBSixjQUFNLENBQUNPLE1BQVAsQ0FBYzdCLEdBQWQsZ0dBQ0d5QixHQURILEVBQ1M7QUFDTDNCLGtCQUFRLEVBQUUsRUFETDtBQUVMQyxhQUFHLEVBQUU2QixVQUFVLENBQUNGLEtBQUQsQ0FGVjtBQUdMMUIsYUFBRyxFQUFFMkI7QUFIQSxTQURUO0FBT0Q7O0FBRUQsVUFBSUYsR0FBRyxLQUFLLFlBQVosRUFBMEI7QUFDeEJoQixjQUFNLENBQUNpQixLQUFELENBQU47QUFDRDtBQUNGLEtBaEJELEVBRmMsQ0FvQmQ7O0FBQ0F2QixnQkFBWSxDQUFDLFVBQUMyQixJQUFEO0FBQUEsNkNBQ1JBLElBRFEsR0FFUDlCLEdBRk87QUFBQSxLQUFELENBQVo7QUFJRCxHQXpCUSxFQXlCTixDQUFDK0IsSUFBSSxDQUFDQyxTQUFMLENBQWVuQixLQUFLLEVBQXBCLENBQUQsQ0F6Qk0sQ0FBVDtBQTJCQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVksU0FBUyxHQUFHLENBQWhCO0FBQ0FYLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlckIsSUFBZixFQUFxQnNCLE9BQXJCLEVBQ0U7QUFDQSxxQkFNTTtBQUFBO0FBQUEsVUFOSlUsQ0FNSTtBQUFBLFVBTkRSLEtBTUM7O0FBQ0osVUFBSUEsS0FBSyxDQUFDM0IsR0FBVixFQUFlO0FBQ2JrQyxpQkFBUyxJQUFLLElBQUlQLEtBQUssQ0FBQzNCLEdBQVgsR0FBa0IsR0FBL0I7QUFDRDtBQUNGLEtBWkg7QUFlQU0seUJBQXFCLENBQUM0QixTQUFELENBQXJCO0FBQ0QsR0FsQlEsRUFrQk4sQ0FBQ0YsSUFBSSxDQUFDQyxTQUFMLENBQWU5QixJQUFmLENBQUQsQ0FsQk0sQ0FBVDtBQW9CQW1CLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlqQixrQkFBSixFQUF3QjtBQUN0QixVQUFNK0IsSUFBSSxHQUFHM0IsR0FBRyxHQUFHSixrQkFBTixHQUEyQkksR0FBeEM7QUFFQUQsZUFBUyxDQUFDNEIsSUFBRCxDQUFUO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQy9CLGtCQUFELENBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBSyxhQUFTLEVBQUMscUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFZLEVBQUUsR0FGaEI7QUFHRSxPQUFHLEVBQUUsR0FIUDtBQUlFLFFBQUksRUFBRTtBQUpSLEtBS01PLFFBQVEsQ0FBQyxZQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGLENBRkYsRUFZRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNZVCxJQUFJLENBQUMsVUFBRCxDQUFKLENBQWlCRixHQUFqQixDQUFxQm9DLE9BQXJCLENBQTZCLENBQTdCLENBRFosT0FDOEMsR0FEOUMsRUFFRzVCLEdBQUcsSUFDRkosa0JBREQsa0JBRVEsQ0FBRUksR0FBRyxHQUFHTixJQUFJLENBQUMsVUFBRCxDQUFKLENBQWlCRixHQUF4QixHQUErQkksa0JBQWhDLEVBQW9EZ0MsT0FBcEQsQ0FDTCxDQURLLENBRlIsQ0FGSCxDQURGLEVBU0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFZLEVBQUUsR0FGaEI7QUFHRSxPQUFHLEVBQUUsR0FIUDtBQUlFLFFBQUksRUFBRTtBQUpSLEtBS016QixRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURixDQVpGLEVBNkJFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDUVQsSUFBSSxDQUFDLE1BQUQsQ0FBSixDQUFhRixHQUFiLENBQWlCb0MsT0FBakIsQ0FBeUIsQ0FBekIsQ0FEUixPQUNzQyxHQUR0QyxFQUVHNUIsR0FBRyxJQUNGSixrQkFERCxrQkFFUSxDQUFFSSxHQUFHLEdBQUdOLElBQUksQ0FBQyxNQUFELENBQUosQ0FBYUYsR0FBcEIsR0FBMkJJLGtCQUE1QixFQUFnRGdDLE9BQWhELENBQXdELENBQXhELENBRlIsQ0FGSCxDQURGLEVBT0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFZLEVBQUUsR0FGaEI7QUFHRSxPQUFHLEVBQUUsR0FIUDtBQUlFLFFBQUksRUFBRTtBQUpSLEtBS016QixRQUFRLENBQUMsTUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRixDQTdCRixFQTRDRTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNZVCxJQUFJLENBQUMsVUFBRCxDQUFKLENBQWlCRixHQUFqQixDQUFxQm9DLE9BQXJCLENBQTZCLENBQTdCLENBRFosT0FDOEMsR0FEOUMsRUFFRzVCLEdBQUcsSUFDRkosa0JBREQsa0JBRVEsQ0FBRUksR0FBRyxHQUFHTixJQUFJLENBQUMsVUFBRCxDQUFKLENBQWlCRixHQUF4QixHQUErQkksa0JBQWhDLEVBQW9EZ0MsT0FBcEQsQ0FDTCxDQURLLENBRlIsQ0FGSCxDQURGLEVBU0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFZLEVBQUUsR0FGaEI7QUFHRSxPQUFHLEVBQUUsR0FIUDtBQUlFLFFBQUksRUFBRTtBQUpSLEtBS016QixRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURixDQTVDRixFQTZERTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUJILEdBQW5CLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtQkosa0JBQWtCLENBQUNnQyxPQUFuQixDQUEyQixDQUEzQixDQUFuQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZTlCLE1BQWYsQ0FIRixDQTdERixDQURGO0FBcUVELENBaktEOztHQUFNWCxTO1VBMkJBZSx1RDs7O0tBM0JBZixTO0FBbUtTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxudHlwZSBBcmJpdHJhZ2UgPSB7XG4gIFtrZXkgaW4gXCJob21lLXdpblwiIHwgXCJkcmF3XCIgfCBcImF3YXktd2luXCJdOiB7XG4gICAgcGxhdGZvcm06IHN0cmluZztcbiAgICBvZGQ6IG51bWJlcjtcbiAgICBhcmI6IG51bWJlcjtcbiAgfTtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FyYnMsIHNldEFyYml0cmFnZV0gPSBSZWFjdC51c2VTdGF0ZTxBcmJpdHJhZ2U+KHtcbiAgICBcImhvbWUtd2luXCI6IHtcbiAgICAgIHBsYXRmb3JtOiBcIlwiLFxuICAgICAgb2RkOiAwLjAsXG4gICAgICBhcmI6IDAuMCxcbiAgICB9LFxuICAgIGRyYXc6IHtcbiAgICAgIHBsYXRmb3JtOiBcIlwiLFxuICAgICAgb2RkOiAwLjAsXG4gICAgICBhcmI6IDAuMCxcbiAgICB9LFxuICAgIFwiYXdheS13aW5cIjoge1xuICAgICAgcGxhdGZvcm06IFwiXCIsXG4gICAgICBvZGQ6IDAuMCxcbiAgICAgIGFyYjogMC4wLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBbdG90YWxBcmJQZXJjZW50aWxlLCBzZXRUb3RhbEFyYlBlcmNlbnRpbGVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcm9maXQsIHNldFByb2ZpdF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbaW52LCBzZXRJbnZdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oKTtcblxuICBmdW5jdGlvbiBjYWxjSW5kaXZpZHVhbEFyYigpIHt9XG5cbiAgZnVuY3Rpb24gY2FsY1Byb2ZpdCgpIHt9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlRXZlcnl0aGluZygpIHt9XG5cbiAgY29uc29sZS5sb2cod2F0Y2goKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhcmI6IHVua25vd24gPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyh3YXRjaCgpKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiaG9tZS13aW5cIiB8fCBrZXkgPT09IFwiYXdheS13aW5cIiB8fCBrZXkgPT09IFwiZHJhd1wiKSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRpbGU6IHVua25vd24gPSAoMSAvIHBhcnNlRmxvYXQodmFsdWUpKSAqIDEwMDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGFyYiBhcyBBcmJpdHJhZ2UsIHtcbiAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgcGxhdGZvcm06IFwiXCIsXG4gICAgICAgICAgICBvZGQ6IHBhcnNlRmxvYXQodmFsdWUpLFxuICAgICAgICAgICAgYXJiOiBwZXJjZW50aWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSBcImludmVzdG1lbnRcIikge1xuICAgICAgICBzZXRJbnYodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNldEFyYml0cmFnZSgocHJldjogQXJiaXRyYWdlKSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIC4uLihhcmIgYXMgQXJiaXRyYWdlKSxcbiAgICB9KSk7XG4gIH0sIFtKU09OLnN0cmluZ2lmeSh3YXRjaCgpKV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRvdGFsUGVyYyA9IDA7XG4gICAgT2JqZWN0LmVudHJpZXMoYXJicykuZm9yRWFjaChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChbXywgdmFsdWVdOiBbXG4gICAgICAgIFwiaG9tZS13aW5cIiB8IFwiZHJhd1wiIHwgXCJhd2F5LXdpblwiLFxuICAgICAgICB7XG4gICAgICAgICAgcGxhdGZvcm06IHN0cmluZztcbiAgICAgICAgICBvZGQ6IG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgXSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUub2RkKSB7XG4gICAgICAgICAgdG90YWxQZXJjICs9ICgxIC8gdmFsdWUub2RkKSAqIDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZXRUb3RhbEFyYlBlcmNlbnRpbGUodG90YWxQZXJjKTtcbiAgfSwgW0pTT04uc3RyaW5naWZ5KGFyYnMpXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG90YWxBcmJQZXJjZW50aWxlKSB7XG4gICAgICBjb25zdCBwcm9mID0gaW52IC8gdG90YWxBcmJQZXJjZW50aWxlIC0gaW52O1xuXG4gICAgICBzZXRQcm9maXQocHJvZik7XG4gICAgfVxuICB9LCBbdG90YWxBcmJQZXJjZW50aWxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbiB3LWZ1bGwgcGxhY2UtaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItWzhweF1cIj5DYWxjIEZvb3RiYWxsIEFyYjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdXCI+XG4gICAgICAgIDxoNj5JbnZlc3RtZW50PC9oNj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXswLjB9XG4gICAgICAgICAgbWluPXswLjB9XG4gICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJpbnZlc3RtZW50XCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdXCI+XG4gICAgICAgIDxoNj5cbiAgICAgICAgICBIb21lIFdpbiB7YXJic1tcImhvbWUtd2luXCJdLmFyYi50b0ZpeGVkKDIpfSV7XCIgXCJ9XG4gICAgICAgICAge2ludiAmJlxuICAgICAgICAgICAgdG90YWxBcmJQZXJjZW50aWxlICYmXG4gICAgICAgICAgICBgS0VTLiR7KChpbnYgKiBhcmJzW1wiaG9tZS13aW5cIl0uYXJiKSAvIHRvdGFsQXJiUGVyY2VudGlsZSkudG9GaXhlZChcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKX1gfVxuICAgICAgICA8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImhvbWUtd2luXCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdXCI+XG4gICAgICAgIDxoNj5cbiAgICAgICAgICBEcmF3IHthcmJzW1wiZHJhd1wiXS5hcmIudG9GaXhlZCgyKX0le1wiIFwifVxuICAgICAgICAgIHtpbnYgJiZcbiAgICAgICAgICAgIHRvdGFsQXJiUGVyY2VudGlsZSAmJlxuICAgICAgICAgICAgYEtFUy4keygoaW52ICogYXJic1tcImRyYXdcIl0uYXJiKSAvIHRvdGFsQXJiUGVyY2VudGlsZSkudG9GaXhlZCgyKX1gfVxuICAgICAgICA8L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRyYXdcIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlcIj5cbiAgICAgICAgPGg2PlxuICAgICAgICAgIEF3YXkgV2luIHthcmJzW1wiYXdheS13aW5cIl0uYXJiLnRvRml4ZWQoMil9JXtcIiBcIn1cbiAgICAgICAgICB7aW52ICYmXG4gICAgICAgICAgICB0b3RhbEFyYlBlcmNlbnRpbGUgJiZcbiAgICAgICAgICAgIGBLRVMuJHsoKGludiAqIGFyYnNbXCJhd2F5LXdpblwiXS5hcmIpIC8gdG90YWxBcmJQZXJjZW50aWxlKS50b0ZpeGVkKFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApfWB9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYXdheS13aW5cIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzhweF0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3Bhbj5JbnZlc3RtZW50OiB7aW52fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UGVyY2VudGlsZToge3RvdGFsQXJiUGVyY2VudGlsZS50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UHJvZml0OiB7cHJvZml0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})