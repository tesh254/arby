webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/project/arby/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      arbs = _React$useState2[0],\n      setArbitrage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      totalArbPercentile = _React$useState4[0],\n      setTotalArbPercentile = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      profit = _React$useState6[0],\n      setProfit = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      inv = _React$useState8[0],\n      setInv = _React$useState8[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  function calcIndividualArb() {}\n\n  function calcProfit() {}\n\n  function calculateEverything() {}\n\n  console.log({\n    watch: watch\n  });\n  return __jsx(\"div\", {\n    className: \"max-w-screen flex flex-col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-2xl font-bold mb-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Calc Football Arb\"), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Home Win\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"home-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my-[8px]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Draw\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"draw\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: \"my\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, \"Away Win\"), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"number\",\n    defaultValue: 0.0,\n    min: 0.0,\n    step: 0.01\n  }, register(\"away-win\"), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_s(IndexPage, \"nsVxj1oTvKwOzuIhf5y00i9qZv0=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFyYnMiLCJzZXRBcmJpdHJhZ2UiLCJ0b3RhbEFyYlBlcmNlbnRpbGUiLCJzZXRUb3RhbEFyYlBlcmNlbnRpbGUiLCJwcm9maXQiLCJzZXRQcm9maXQiLCJpbnYiLCJzZXRJbnYiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImNhbGNJbmRpdmlkdWFsQXJiIiwiY2FsY1Byb2ZpdCIsImNhbGN1bGF0ZUV2ZXJ5dGhpbmciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHdCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLEVBRFA7QUFBQTtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxZQURTOztBQUFBLHlCQUU4QkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGOUI7QUFBQTtBQUFBLE1BRWZHLGtCQUZlO0FBQUEsTUFFS0MscUJBRkw7O0FBQUEseUJBR01MLDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsQ0FBdkIsQ0FITjtBQUFBO0FBQUEsTUFHZkssTUFIZTtBQUFBLE1BR1BDLFNBSE87O0FBQUEseUJBSUFQLDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsQ0FBdkIsQ0FKQTtBQUFBO0FBQUEsTUFJZk8sR0FKZTtBQUFBLE1BSVZDLE1BSlU7O0FBQUEsaUJBV2xCQywrREFBTyxFQVhXO0FBQUEsTUFPcEJDLFFBUG9CLFlBT3BCQSxRQVBvQjtBQUFBLE1BUXBCQyxZQVJvQixZQVFwQkEsWUFSb0I7QUFBQSxNQVNwQkMsS0FUb0IsWUFTcEJBLEtBVG9CO0FBQUEsTUFVUEMsTUFWTyxZQVVwQkMsU0FWb0IsQ0FVUEQsTUFWTzs7QUFhdEIsV0FBU0UsaUJBQVQsR0FBNkIsQ0FBRTs7QUFFL0IsV0FBU0MsVUFBVCxHQUFzQixDQUFFOztBQUV4QixXQUFTQyxtQkFBVCxHQUErQixDQUFFOztBQUVqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVAsU0FBSyxFQUFMQTtBQUFGLEdBQVo7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxnQkFBWSxFQUFFLEdBRmhCO0FBR0UsT0FBRyxFQUFFLEdBSFA7QUFJRSxRQUFJLEVBQUU7QUFKUixLQUtNRixRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQUZGLEVBWUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFZLEVBQUUsR0FGaEI7QUFHRSxPQUFHLEVBQUUsR0FIUDtBQUlFLFFBQUksRUFBRTtBQUpSLEtBS01BLFFBQVEsQ0FBQyxNQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGLENBWkYsRUFzQkU7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxnQkFBWSxFQUFFLEdBRmhCO0FBR0UsT0FBRyxFQUFFLEdBSFA7QUFJRSxRQUFJLEVBQUU7QUFKUixLQUtNQSxRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQXRCRixDQURGO0FBbUNELENBeEREOztHQUFNWixTO1VBV0FXLHVEOzs7S0FYQVgsUztBQTBEU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG50eXBlIEFyYml0cmFnZSA9IHtcbiAgW2tleSBpbiBcImhvbWUtd2luXCIgfCBcImRyYXdcIiB8IFwiYXdheS13aW5cIl06IHtcbiAgICBwbGF0Zm9ybTogc3RyaW5nO1xuICAgIG9kZDogbnVtYmVyO1xuICB9O1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYXJicywgc2V0QXJiaXRyYWdlXSA9IFJlYWN0LnVzZVN0YXRlPEFyYml0cmFnZT4oKTtcbiAgY29uc3QgW3RvdGFsQXJiUGVyY2VudGlsZSwgc2V0VG90YWxBcmJQZXJjZW50aWxlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvZml0LCBzZXRQcm9maXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2ludiwgc2V0SW52XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKCk7XG5cbiAgZnVuY3Rpb24gY2FsY0luZGl2aWR1YWxBcmIoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGNQcm9maXQoKSB7fVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUV2ZXJ5dGhpbmcoKSB7fVxuXG4gIGNvbnNvbGUubG9nKHsgd2F0Y2ggfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLVs4cHhdXCI+Q2FsYyBGb290YmFsbCBBcmI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1bOHB4XVwiPlxuICAgICAgICA8aDY+SG9tZSBXaW48L2g2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9ezAuMH1cbiAgICAgICAgICBtaW49ezAuMH1cbiAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImhvbWUtd2luXCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LVs4cHhdXCI+XG4gICAgICAgIDxoNj5EcmF3PC9oNj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXswLjB9XG4gICAgICAgICAgbWluPXswLjB9XG4gICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJkcmF3XCIpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15XCI+XG4gICAgICAgIDxoNj5Bd2F5IFdpbjwvaDY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MC4wfVxuICAgICAgICAgIG1pbj17MC4wfVxuICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYXdheS13aW5cIil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})