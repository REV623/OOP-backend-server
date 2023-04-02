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

/***/ "./pages/Hexagon.jsx":
/*!***************************!*\
  !*** ./pages/Hexagon.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hexagon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Region_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/Region.png */ \"./public/Region.png\");\n/* harmony import */ var _public_CityCenter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/CityCenter.png */ \"./public/CityCenter.png\");\n/* harmony import */ var _public_City_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/City.png */ \"./public/City.png\");\n/* harmony import */ var _components_MiniHexagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MiniHexagon */ \"./components/MiniHexagon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Hexagon(props) {\n    var _this = this;\n    var findregion = function findregion(row, col) {};\n    _s();\n    var row = props.row;\n    var column = props.col;\n    var regionSet = props.regionSet;\n    var BigRegions = [];\n    var ownerRegion = new Array(row);\n    for(var i = 0; i < row; i++){\n        ownerRegion[i] = new Array(column);\n        for(var j = 0; j < column; j++){\n            ownerRegion[i][j] = -1;\n        }\n    }\n    for(var i1 = 1; i1 < regionSet.length; i1 += 3){\n        ownerRegion[parseInt(regionSet[i1]) - 1][parseInt(regionSet[i1 + 1]) - 1] = parseInt(regionSet[i1 + 2]);\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hoveredHex = ref[0], setHoveredHex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), clickedHex = ref1[0], setClickedHex = ref1[1];\n    //const [clickedHexColor, setClickedHexColor] = useState(null);\n    var handleHexClick = function(rowIndex, colIndex) {\n        setClickedHex({\n            row: rowIndex,\n            col: colIndex,\n            clicked: false\n        });\n    };\n    var handleHexHover = function(rowIndex, colIndex) {\n        setHoveredHex({\n            row: rowIndex,\n            col: colIndex,\n            value: Math.floor(Math.random() * 100)\n        });\n    };\n    //keep picture hexagon(region) in array\n    for(var i2 = 0; i2 < row; i2++){\n        var hexrow = [];\n        for(var j1 = 0; j1 < column; j1++){\n            hexrow.push(\"Pneuma\");\n        // if (j === centerC - 1 && i === centerR - 1)\n        //   hexrow.push(\"./Region.png\"); //\"./CityCenter.png\"\n        // else if (j === C - 1 && i === R - 1)\n        //   hexrow.push(\"./Region.png\"); //\"./City.png\"\n        // else hexrow.push(\"./Region.png\");\n        }\n        BigRegions.push(hexrow);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"HexagonGrid\",\n        style: {\n            width: \"60%\",\n            //display: \"flex\" ,\n            justifycontent: \"center\",\n            alignitems: \"center\",\n            marginLeft: \"20%\"\n        },\n        children: BigRegions.map(function(hexrow, rowIndex) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"HexagonRow\" + \"\".concat(rowIndex),\n                className: \"rowcss\",\n                children: hexrow.map(function(img, colIndex) {\n                    return colIndex % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"\".concat(rowIndex, \",\").concat(colIndex),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MiniHexagon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            id: \"\".concat(rowIndex, \",\").concat(colIndex),\n                            width: \"50px\",\n                            row: rowIndex,\n                            col: colIndex,\n                            deposit: ownerRegion[rowIndex][colIndex],\n                            backgroundColor: ownerRegion[rowIndex][colIndex] > 0 ? props.playerColor : \"white\",\n                            text: \"69\" /*\"69\"*/ \n                        }, \"\".concat(rowIndex, \",\").concat(colIndex), false, {\n                            fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"low\",\n                        id: \"\".concat(rowIndex, \",\").concat(colIndex),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MiniHexagon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            id: \"\".concat(rowIndex, \",\").concat(colIndex),\n                            width: \"50px\",\n                            row: rowIndex,\n                            col: colIndex,\n                            deposit: ownerRegion[rowIndex][colIndex],\n                            backgroundColor: ownerRegion[rowIndex][colIndex] > 0 ? props.playerColor : \"white\",\n                            text: \"420\" /*\"420\"*/ \n                        }, \"\".concat(rowIndex, \",\").concat(colIndex), false, {\n                            fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, rowIndex, false, {\n                fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC Amd\\\\Desktop\\\\SpringOOP\\\\OOP-backend-server\\\\OOP_FRONT_END\\\\pages\\\\Hexagon.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}; /*return (\r\n    <div\r\n      style={{\r\n        width: \"60%\",\r\n        //display: \"flex\" ,\r\n        justifycontent: \"center\",\r\n        alignitems: \"center\",\r\n        marginLeft: \"17.5%\",\r\n      }}\r\n    >\r\n      {BigRegions.map((hexrow, rowIndex) => (\r\n        <div className=\"rowcss\" key={rowIndex}>\r\n          {hexrow.map((img, colIndex) =>\r\n            colIndex % 2 === 0 ? (\r\n              <img\r\n                key={`${rowIndex}-${colIndex}`}\r\n                src={img}\r\n                className=\"low\"\r\n                style={{ width: \"10%\" }}\r\n              />\r\n            ) : (\r\n              <img\r\n                key={`${rowIndex}-${colIndex}`}\r\n                src={img}\r\n                style={{ width: \"10%\" }}\r\n              />\r\n            )\r\n          )}\r\n        </div>\r\n      ))}\r\n    </div>\r\n  );*/  /*\r\n{hoveredHex &&\r\n                  hoveredHex.row === rowIndex &&\r\n                  hoveredHex.col === colIndex && (\r\n                    <div\r\n                      style={{\r\n                        position: \"absolute\",\r\n                        top: 0,\r\n                        left: 0,\r\n                        width: \"100%\",\r\n                        height: \"100%\",\r\n                        display: \"flex\",\r\n                        alignItems: \"center\",\r\n                        justifyContent: \"center\",\r\n                        color: \"#FFF\",\r\n                        fontSize: \"16px\",\r\n                        fontWeight: \"bold\",\r\n                      }}\r\n                    >\r\n                      {hoveredHex.value}\r\n                    </div>\r\n                  )}*/ \n_s(Hexagon, \"7udYEMzCx5sfzcpmAkRC60B4jf0=\");\n_c = Hexagon;\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vcGFnZXMvSGV4YWdvbi5qc3g/ZGQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlZ2lvbiBmcm9tIFwiLi4vcHVibGljL1JlZ2lvbi5wbmdcIjtcclxuaW1wb3J0IENpdHlDZW50ZXIgZnJvbSBcIi4uL3B1YmxpYy9DaXR5Q2VudGVyLnBuZ1wiO1xyXG5pbXBvcnQgQ2l0eSBmcm9tIFwiLi4vcHVibGljL0NpdHkucG5nXCI7XHJcbmltcG9ydCBNaW5pSGV4YWdvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NaW5pSGV4YWdvblwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXhhZ29uKHByb3BzKSB7XHJcbiAgbGV0IHJvdyA9IHByb3BzLnJvdztcclxuICBsZXQgY29sdW1uID0gcHJvcHMuY29sO1xyXG4gIGxldCByZWdpb25TZXQgPSBwcm9wcy5yZWdpb25TZXQ7XHJcbiAgY29uc3QgQmlnUmVnaW9ucyA9IFtdO1xyXG5cclxuICB2YXIgb3duZXJSZWdpb24gPSBuZXcgQXJyYXkocm93KTtcclxuICBmb3IobGV0IGk9MCA7IGk8cm93IDsgaSsrKXtcclxuICAgIG93bmVyUmVnaW9uW2ldID0gbmV3IEFycmF5KGNvbHVtbik7XHJcbiAgICBmb3IobGV0IGo9MCA7IGo8Y29sdW1uIDsgaisrKXtcclxuICAgICAgb3duZXJSZWdpb25baV1bal0gPSAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGxldCBpPTEgOyBpPHJlZ2lvblNldC5sZW5ndGggOyBpKz0zKXtcclxuICAgIG93bmVyUmVnaW9uW3BhcnNlSW50KHJlZ2lvblNldFtpXSktMV1bcGFyc2VJbnQocmVnaW9uU2V0W2krMV0pLTFdID0gcGFyc2VJbnQocmVnaW9uU2V0W2krMl0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2hvdmVyZWRIZXgsIHNldEhvdmVyZWRIZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NsaWNrZWRIZXgsIHNldENsaWNrZWRIZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy9jb25zdCBbY2xpY2tlZEhleENvbG9yLCBzZXRDbGlja2VkSGV4Q29sb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhleENsaWNrID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEhleCh7IHJvdzogcm93SW5kZXgsIGNvbDogY29sSW5kZXgsIGNsaWNrZWQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhleEhvdmVyID0gKHJvd0luZGV4LCBjb2xJbmRleCkgPT4ge1xyXG4gICAgc2V0SG92ZXJlZEhleCh7XHJcbiAgICAgIHJvdzogcm93SW5kZXgsXHJcbiAgICAgIGNvbDogY29sSW5kZXgsXHJcbiAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZmluZHJlZ2lvbihyb3csY29sKXtcclxuXHJcbiAgfVxyXG5cclxuICAvL2tlZXAgcGljdHVyZSBoZXhhZ29uKHJlZ2lvbikgaW4gYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XHJcbiAgICBjb25zdCBoZXhyb3cgPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspIHtcclxuICAgICAgaGV4cm93LnB1c2goXHJcbiAgICAgICAgXCJQbmV1bWFcIlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICA8TWluaUhleGFnb24gdGV4dD1cIjEyM1wiIC8+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGlmIChqID09PSBjZW50ZXJDIC0gMSAmJiBpID09PSBjZW50ZXJSIC0gMSlcclxuICAgICAgLy8gICBoZXhyb3cucHVzaChcIi4vUmVnaW9uLnBuZ1wiKTsgLy9cIi4vQ2l0eUNlbnRlci5wbmdcIlxyXG4gICAgICAvLyBlbHNlIGlmIChqID09PSBDIC0gMSAmJiBpID09PSBSIC0gMSlcclxuICAgICAgLy8gICBoZXhyb3cucHVzaChcIi4vUmVnaW9uLnBuZ1wiKTsgLy9cIi4vQ2l0eS5wbmdcIlxyXG4gICAgICAvLyBlbHNlIGhleHJvdy5wdXNoKFwiLi9SZWdpb24ucG5nXCIpO1xyXG4gICAgfVxyXG4gICAgQmlnUmVnaW9ucy5wdXNoKGhleHJvdyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cIkhleGFnb25HcmlkXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICAvL2Rpc3BsYXk6IFwiZmxleFwiICxcclxuICAgICAgICBqdXN0aWZ5Y29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbml0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjAlXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtCaWdSZWdpb25zLm1hcCgoaGV4cm93LCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPXtcIkhleGFnb25Sb3dcIiArIGAke3Jvd0luZGV4fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3djc3NcIlxyXG4gICAgICAgICAga2V5PXtyb3dJbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aGV4cm93Lm1hcCgoaW1nLCBjb2xJbmRleCkgPT5cclxuICAgICAgICAgICAgY29sSW5kZXggJSAyID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9e2Ake3Jvd0luZGV4fSwke2NvbEluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPE1pbmlIZXhhZ29uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7cm93SW5kZXh9LCR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2Ake3Jvd0luZGV4fSwke2NvbEluZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdz17cm93SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNvbD17Y29sSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGRlcG9zaXQ9e293bmVyUmVnaW9uW3Jvd0luZGV4XVtjb2xJbmRleF19XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17b3duZXJSZWdpb25bcm93SW5kZXhdW2NvbEluZGV4XT4wID8gcHJvcHMucGxheWVyQ29sb3IgOiBcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCI2OVwiIC8qXCI2OVwiKi9cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb3dcIiBpZD17YCR7cm93SW5kZXh9LCR7Y29sSW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8TWluaUhleGFnb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtyb3dJbmRleH0sJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBpZD17YCR7cm93SW5kZXh9LCR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgcm93PXtyb3dJbmRleH1cclxuICAgICAgICAgICAgICAgICAgY29sPXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgICAgZGVwb3NpdD17b3duZXJSZWdpb25bcm93SW5kZXhdW2NvbEluZGV4XX1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtvd25lclJlZ2lvbltyb3dJbmRleF1bY29sSW5kZXhdPjAgPyBwcm9wcy5wbGF5ZXJDb2xvciA6IFwid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dD1cIjQyMFwiIC8qXCI0MjBcIiovXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8qcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICAvL2Rpc3BsYXk6IFwiZmxleFwiICxcclxuICAgICAgICBqdXN0aWZ5Y29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbml0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMTcuNSVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge0JpZ1JlZ2lvbnMubWFwKChoZXhyb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3djc3NcIiBrZXk9e3Jvd0luZGV4fT5cclxuICAgICAgICAgIHtoZXhyb3cubWFwKChpbWcsIGNvbEluZGV4KSA9PlxyXG4gICAgICAgICAgICBjb2xJbmRleCAlIDIgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtyb3dJbmRleH0tJHtjb2xJbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb3dcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAlXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93SW5kZXh9LSR7Y29sSW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAlXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7Ki9cclxuXHJcbi8qXHJcbntob3ZlcmVkSGV4ICYmXHJcbiAgICAgICAgICAgICAgICAgIGhvdmVyZWRIZXgucm93ID09PSByb3dJbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgICBob3ZlcmVkSGV4LmNvbCA9PT0gY29sSW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2hvdmVyZWRIZXgudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9Ki8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlZ2lvbiIsIkNpdHlDZW50ZXIiLCJDaXR5IiwiTWluaUhleGFnb24iLCJIZXhhZ29uIiwicHJvcHMiLCJmaW5kcmVnaW9uIiwicm93IiwiY29sIiwiY29sdW1uIiwicmVnaW9uU2V0IiwiQmlnUmVnaW9ucyIsIm93bmVyUmVnaW9uIiwiQXJyYXkiLCJpIiwiaiIsImxlbmd0aCIsInBhcnNlSW50IiwiaG92ZXJlZEhleCIsInNldEhvdmVyZWRIZXgiLCJjbGlja2VkSGV4Iiwic2V0Q2xpY2tlZEhleCIsImhhbmRsZUhleENsaWNrIiwicm93SW5kZXgiLCJjb2xJbmRleCIsImNsaWNrZWQiLCJoYW5kbGVIZXhIb3ZlciIsInZhbHVlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGV4cm93IiwicHVzaCIsImRpdiIsImlkIiwic3R5bGUiLCJ3aWR0aCIsImp1c3RpZnljb250ZW50IiwiYWxpZ25pdGVtcyIsIm1hcmdpbkxlZnQiLCJtYXAiLCJjbGFzc05hbWUiLCJpbWciLCJkZXBvc2l0IiwiYmFja2dyb3VuZENvbG9yIiwicGxheWVyQ29sb3IiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Hexagon.jsx\n"));

/***/ })

});