"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({\r\n    value: true\r\n}));\r\nexports[\"default\"] = _interopRequireDefault;\r\nfunction _interopRequireDefault(obj) {\r\n    return obj && obj.__esModule ? obj : {\r\n        default: obj\r\n    };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWItMDktZmluaXNoZWQvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"0 23px 0 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"49px\",\n        margin: 0,\n        padding: 0\n    }\n};\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\r\n                body { margin: 0; color: #000; background: #fff; }\r\n                .next-error-h1 {\r\n                  border-right: 1px solid rgba(0, 0, 0, .3);\r\n                }\r\n\r\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\r\n                  body { color: #fff; background: #000; }\r\n                  .next-error-h1 {\r\n                    border-right: 1px solid rgba(255, 255, 255, .3);\r\n                  }\r\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsd0JBQXdCLEdBQUdDLG1KQUErRDtBQUM5RixJQUFJQyxNQUFNLEdBQUdGLHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLG9CQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFJRSxLQUFLLEdBQUdILHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLDhDQUFvQixDQUFDLENBQUM7QUFDbkUsTUFBTUcsV0FBVyxHQUFHO0FBQ2hCLE9BQUcsRUFBRSxhQUFhO0FBQ2xCLE9BQUcsRUFBRSw4QkFBOEI7QUFDbkMsT0FBRyxFQUFFLG9CQUFvQjtBQUN6QixPQUFHLEVBQUUsdUJBQXVCO0NBQy9CO0FBQ0QsU0FBU0MsZ0JBQWdCLENBQUMsRUFBRUMsR0FBRyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7SUFDdEYsT0FBTztRQUNIQSxVQUFVO0tBQ2IsQ0FBQztBQUNOLENBQUM7QUFDRCxNQUFNQyxNQUFNLEdBQUc7SUFDWEMsS0FBSyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSwySEFBMkg7UUFDdklDLE1BQU0sRUFBRSxPQUFPO1FBQ2ZDLFNBQVMsRUFBRSxRQUFRO1FBQ25CQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxhQUFhLEVBQUUsUUFBUTtRQUN2QkMsVUFBVSxFQUFFLFFBQVE7UUFDcEJDLGNBQWMsRUFBRSxRQUFRO0tBQzNCO0lBQ0RDLElBQUksRUFBRTtRQUNGSixPQUFPLEVBQUUsY0FBYztRQUN2QkQsU0FBUyxFQUFFLE1BQU07UUFDakJNLFVBQVUsRUFBRSxNQUFNO1FBQ2xCUCxNQUFNLEVBQUUsTUFBTTtRQUNkUSxhQUFhLEVBQUUsUUFBUTtLQUMxQjtJQUNEQyxFQUFFLEVBQUU7UUFDQVAsT0FBTyxFQUFFLGNBQWM7UUFDdkJRLE1BQU0sRUFBRSxDQUFDO1FBQ1RDLFdBQVcsRUFBRSxNQUFNO1FBQ25CQyxPQUFPLEVBQUUsWUFBWTtRQUNyQkMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFVBQVUsRUFBRSxHQUFHO1FBQ2ZOLGFBQWEsRUFBRSxLQUFLO1FBQ3BCRCxVQUFVLEVBQUUsTUFBTTtLQUNyQjtJQUNEUSxFQUFFLEVBQUU7UUFDQUYsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFVBQVUsRUFBRSxRQUFRO1FBQ3BCUCxVQUFVLEVBQUUsTUFBTTtRQUNsQkcsTUFBTSxFQUFFLENBQUM7UUFDVEUsT0FBTyxFQUFFLENBQUM7S0FDYjtDQUNKO0FBQ0QsSUFBSUksVUFBVTtBQUNkLE1BQU1DLEtBQUssU0FBUyxDQUFDRCxVQUFVLEdBQUcxQixNQUFNLENBQUNILE9BQU8sQ0FBQytCLFNBQVMsQ0FBQztJQUN2REMsTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFdkIsVUFBVSxHQUFHd0IsWUFBWSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUN2RCxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUssSUFBSTlCLFdBQVcsQ0FBQ0ksVUFBVSxDQUFDLElBQUksa0NBQWtDO1FBQy9GLE9BQU8sV0FBVyxHQUFHTixNQUFNLENBQUNILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDckRDLEtBQUssRUFBRTNCLE1BQU0sQ0FBQ0MsS0FBSztTQUN0QixFQUFFLFdBQVcsR0FBR1IsTUFBTSxDQUFDSCxPQUFPLENBQUNvQyxhQUFhLENBQUNoQyxLQUFLLENBQUNKLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxHQUFHRyxNQUFNLENBQUNILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFM0IsVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxDQUFDLEVBQUUsRUFBRTBCLEtBQUssQ0FBQyxDQUFDLEdBQUcseURBQXlELENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBR2hDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxHQUFHakMsTUFBTSxDQUFDSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzNVRSx1QkFBdUIsRUFBRTtnQkFDckJDLE1BQU0sRUFBRSxDQUFDO2FBWVo7U0FDSixDQUFDLEVBQUU5QixVQUFVLEdBQUc7WUFDYitCLFNBQVMsRUFBRSxlQUFlO1lBQzFCSCxLQUFLOztZQUVMQSxLQUFLLEVBQUUzQixNQUFNLENBQUNTLElBQUk7U0FDckIsRUFBRSxXQUFXLEdBQUdoQixNQUFNLENBQUNILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxJQUFJO1lBQzlDQyxLQUFLLEVBQUUzQixNQUFNLENBQUNrQixFQUFFO1NBQ25CLEVBQUUsSUFBSSxDQUFDTSxLQUFLLENBQUNDLEtBQUssSUFBSTFCLFVBQVUsR0FBRzBCLEtBQUssR0FBRyxXQUFXLEdBQUdoQztJQUM5RDtDQUNIO0FBQ0QyQixLQUFLLENBQUNZO0FBQ05aLEtBQUssQ0FBQ2EsZUFBZSxHQUFHckMsZ0JBQWdCLENBQUM7QUFDekN3QixLQUFLLENBQUNjLG1CQUFtQixHQUFHdEM7QUFDNUJSLE9BQU8sQ0FBQ0UsT0FBTyxHQUFHOEIsS0FBSyxDQUFDLENBRXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFiLTA5LWZpbmlzaGVkLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzXCIpLmRlZmF1bHQ7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9oZWFkID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xyXG5jb25zdCBzdGF0dXNDb2RlcyA9IHtcclxuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcclxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxyXG4gICAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcclxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcclxufTtcclxuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7IHJlcyAsIGVyciAgfSkge1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGVcclxuICAgIH07XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZXJyb3I6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZGVzYzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xyXG4gICAgfSxcclxuICAgIGgxOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzAgMjNweCAwIDAnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4J1xyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDBcclxuICAgIH1cclxufTtcclxudmFyIF9Db21wb25lbnQ7XHJcbmNsYXNzIEVycm9yIGV4dGVuZHMgKF9Db21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpIHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgLCB3aXRoRGFya01vZGUgPXRydWUgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xyXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXHJcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XHJcbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR7d2l0aERhcmtNb2RlID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgICAgICAgICAgICAgICAgYm9keSB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB9XHJcbiAgICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWAgOiAnJ31gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxyXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXHJcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSk7XHJcbiAgICB9XHJcbn1cclxuRXJyb3IuZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJztcclxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcclxuRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwic3R5bGVzIiwiZXJyb3IiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkZXNjIiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJoMSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImgyIiwiX0NvbXBvbmVudCIsIkVycm9yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwid2l0aERhcmtNb2RlIiwicHJvcHMiLCJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2xhc3NOYW1lIiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();