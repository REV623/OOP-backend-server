"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/GameOption",{

/***/ "./components/MiniHexagon.jsx":
/*!************************************!*\
  !*** ./components/MiniHexagon.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: relative;\\n  width: \",\n        \";\\n  height: calc(\",\n        \" * 0.866025403784);\\n  background-color: \",\n        \";\\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  /* Apply lower opacity when hovered over */\\n  &:hover {\\n    opacity: 0.5;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 20px;\\n  font-weight: bold;\\n  color: white;\\n  visibility: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nvar HexagonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function(props) {\n    return props.width;\n}, function(props) {\n    return props.width;\n}, function(props) {\n    return props.backgroundColor;\n});\n_c = HexagonWrapper;\nvar HexagonText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1(), function(props) {\n    return props.isVisible && props.isClicked ? \"visible\" : \"hidden\";\n});\n_c1 = HexagonText;\nvar MiniHexagon = function(param) {\n    var width = param.width, text = param.text, backgroundColor = param.backgroundColor, row = param.row, col = param.col, deposit = param.deposit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isClicked = ref1[0], setIsClicked = ref1[1];\n    var handleClick = function() {\n        if (backgroundColor !== \"white\") alert(\"Region (\".concat(row, \",\").concat(col, \") : Deposit = \").concat(deposit));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HexagonWrapper, {\n        width: width,\n        backgroundColor: backgroundColor,\n        onClick: handleClick,\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HexagonText, {\n            isVisible: isHovered,\n            isClicked: isClicked,\n            children: isClicked ? text : \"\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\components\\\\MiniHexagon.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\components\\\\MiniHexagon.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(MiniHexagon, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c2 = MiniHexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniHexagon);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HexagonWrapper\");\n$RefreshReg$(_c1, \"HexagonText\");\n$RefreshReg$(_c2, \"MiniHexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pbmlIZXhhZ29uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFFdkMsSUFBTUcsY0FBYyxHQUFHRCw2REFBVSxvQkFFdEIsU0FBQ0csS0FBSztXQUFLQSxLQUFLLENBQUNDLEtBQUs7Q0FBQSxFQUNoQixTQUFDRCxLQUFLO1dBQUtBLEtBQUssQ0FBQ0MsS0FBSztDQUFBLEVBQ2pCLFNBQUNELEtBQUs7V0FBS0EsS0FBSyxDQUFDRSxlQUFlO0NBQUEsQ0FVckQ7QUFkS0osS0FBQUEsY0FBYztBQWdCcEIsSUFBTUssV0FBVyxHQUFHTiw2REFBVSxxQkFJZCxTQUFDRyxLQUFLO1dBQ2xCQSxLQUFLLENBQUNJLFNBQVMsSUFBSUosS0FBSyxDQUFDSyxTQUFTLEdBQUcsU0FBUyxHQUFHLFFBQVE7Q0FBQSxDQUM1RDtBQU5LRixNQUFBQSxXQUFXO0FBUWpCLElBQU1HLFdBQVcsR0FBRyxnQkFBeUQ7UUFBdERMLEtBQUssU0FBTEEsS0FBSyxFQUFFTSxJQUFJLFNBQUpBLElBQUksRUFBRUwsZUFBZSxTQUFmQSxlQUFlLEVBQUVNLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsT0FBTyxTQUFQQSxPQUFPOztJQUNwRSxJQUFrQ2QsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2UsU0FBUyxHQUFrQmYsR0FBZSxHQUFqQyxFQUFFZ0IsWUFBWSxHQUFJaEIsR0FBZSxHQUFuQjtJQUM5QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ1MsU0FBUyxHQUFrQlQsSUFBZSxHQUFqQyxFQUFFaUIsWUFBWSxHQUFJakIsSUFBZSxHQUFuQjtJQUU5QixJQUFNa0IsV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBR1osZUFBZSxLQUFLLE9BQU8sRUFDNUJhLEtBQUssQ0FBQyxVQUFTLENBQVNOLE1BQUcsQ0FBVkQsR0FBRyxFQUFDLEdBQUMsQ0FBTSxDQUFnQkUsTUFBTyxDQUEzQkQsR0FBRyxFQUFDLGdCQUFjLENBQVUsUUFBUkMsT0FBTyxDQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQscUJBQ0UsOERBQUNaLGNBQWM7UUFDYkcsS0FBSyxFQUFFQSxLQUFLO1FBQ1pDLGVBQWUsRUFBRUEsZUFBZTtRQUNoQ2MsT0FBTyxFQUFFRixXQUFXO1FBQ3BCRyxZQUFZLEVBQUU7bUJBQU1MLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FBQTtRQUN0Q00sWUFBWSxFQUFFO21CQUFNTixZQUFZLENBQUMsS0FBSyxDQUFDO1NBQUE7a0JBRXZDLDRFQUFDVCxXQUFXO1lBQUNDLFNBQVMsRUFBRU8sU0FBUztZQUFFTixTQUFTLEVBQUVBLFNBQVM7c0JBQ3BEQSxTQUFTLEdBQUdFLElBQUksR0FBRyxFQUFFOzs7OztpQkFDVjs7Ozs7YUFDQyxDQUNqQjtBQUNKLENBQUM7R0F0QktELFdBQVc7QUFBWEEsTUFBQUEsV0FBVztBQXdCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01pbmlIZXhhZ29uLmpzeD9hNmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSGV4YWdvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRofTtcclxuICBoZWlnaHQ6IGNhbGMoJHsocHJvcHMpID0+IHByb3BzLndpZHRofSAqIDAuODY2MDI1NDAzNzg0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMjUlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAlIDUwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAvKiBBcHBseSBsb3dlciBvcGFjaXR5IHdoZW4gaG92ZXJlZCBvdmVyICovXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGV4YWdvblRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdmlzaWJpbGl0eTogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pc1Zpc2libGUgJiYgcHJvcHMuaXNDbGlja2VkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcclxuYDtcclxuXHJcbmNvbnN0IE1pbmlIZXhhZ29uID0gKHsgd2lkdGgsIHRleHQsIGJhY2tncm91bmRDb2xvciwgcm93LCBjb2wsIGRlcG9zaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZihiYWNrZ3JvdW5kQ29sb3IgIT09IFwid2hpdGVcIilcclxuICAgICAgYWxlcnQoYFJlZ2lvbiAoJHtyb3d9LCR7Y29sfSkgOiBEZXBvc2l0ID0gJHtkZXBvc2l0fWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGV4YWdvbldyYXBwZXJcclxuICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxIZXhhZ29uVGV4dCBpc1Zpc2libGU9e2lzSG92ZXJlZH0gaXNDbGlja2VkPXtpc0NsaWNrZWR9PlxyXG4gICAgICAgIHtpc0NsaWNrZWQgPyB0ZXh0IDogXCJcIn1cclxuICAgICAgPC9IZXhhZ29uVGV4dD5cclxuICAgIDwvSGV4YWdvbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlIZXhhZ29uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkhleGFnb25XcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIkhleGFnb25UZXh0IiwiaXNWaXNpYmxlIiwiaXNDbGlja2VkIiwiTWluaUhleGFnb24iLCJ0ZXh0Iiwicm93IiwiY29sIiwiZGVwb3NpdCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsInNldElzQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiYWxlcnQiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MiniHexagon.jsx\n"));

/***/ })

});