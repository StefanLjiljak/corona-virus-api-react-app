webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "D:\\itBootcamp\\corona-virus-api-react-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n}\n\nhtml {\nfont-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  width:100vw;\n  padding-bottom: 30px;\n  min-height: 100vh;\n  position:relative;\n  overflow-x:hidden;\n  background-color: rgba(0,0,0, 0.1);\n}\n\nheader {\n  width:80%;\n  text-align: center;\n  justify-items:center;\n  justify-content:center;\n  align-items:center;\n  margin:2rem auto;\n}\n\nmain {\n  width:80%;\n  text-align: center;\n  justify-items:center;\n  justify-content:center;\n  align-items:center;\n  margin:1rem auto;\n}\n\nfooter {\n  position: absolute;\n  text-align: center;\n  justify-items:center;\n  justify-content:center;\n  align-items:center;\n  background: #333;\n  color: #fff;\n  padding: 15px;\n  bottom: 0;\n  width: 100%;\n}\n\n\nsection {\n  margin:2rem auto;\n  height:100%\n}\n\nselect:hover {\n  cursor: pointer;\n}\n\narticle {\n  margin:2rem auto;\n}\n\nh2,h3,h4 {\n  margin:1rem auto;\n  padding:0.3rem auto;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
_c = GlobalStyle;
function IndexPage() {
  var date = new Date();
  var yearNow = date.getFullYear();
  var dateNow = date.toLocaleDateString('sr-RS');
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("head", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            <!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-ZSSZM19E6K\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-ZSSZM19E6K');\n</script>"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "\u041A\u041E\u0420\u041E\u041D\u0410 \u0412\u0418\u0420\u0423\u0421 - COVID 19 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"), __jsx("meta", {
    property: "og:title",
    content: "\u041A\u041E\u0420\u041E\u041D\u0410 \u0412\u0418\u0420\u0423\u0421 (COVID 19) \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0435\u043C\u0459\u0430\u043C\u0430",
    key: "title",
    description: "\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0435\u043C\u0459\u0430\u043C\u0430 \u043E \u043A\u043E\u0440\u043E\u043D\u0430 \u0432\u0438\u0440\u0443\u0441\u0443 COVID 19",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  })), __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "\u041A\u041E\u0420\u041E\u041D\u0410 \u0412\u0418\u0420\u0423\u0421 (COVID 19)"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0435\u043C\u0459\u0430\u043C\u0430 \u043D\u0430 \u0434\u0430\u043D ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 40
    }
  }, dateNow), " \u0433\u043E\u0434\u0438\u043D\u0435.")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), __jsx("article", {
    className: "global",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "\u0413\u043B\u043E\u0431\u0430\u043B\u043D\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 188 \u0437\u0435\u043C\u0430\u0459\u0430 \u043D\u0430 \u0434\u0430\u043D ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 54
    }
  }, dateNow), ' ', "\u0433\u043E\u0434\u0438\u043D\u0435."), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "https://covid19.mathdro.id/api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, "Copyright \xA9 ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 26
    }
  }, yearNow), ", Stefan Ljiljak"));
}
_c2 = IndexPage;

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5kZXhQYWdlIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyTm93IiwiZ2V0RnVsbFllYXIiLCJkYXRlTm93IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO0tBQU1ELFc7QUF1RVMsU0FBU0UsU0FBVCxHQUFxQjtBQUNsQyxNQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLFdBQUwsRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxrQkFBTCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsMkJBQXVCLEVBQUU7QUFDdkJDLFlBQU07QUFEaUIsS0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFqQkYsRUFrQkU7QUFDRSxZQUFRLEVBQUMsVUFEWDtBQUVFLFdBQU8sRUFBQyxxTUFGVjtBQUdFLE9BQUcsRUFBQyxPQUhOO0FBSUUsZUFBVyxFQUFDLGdOQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsQ0FERixFQTBCRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEpBQytCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsT0FBUCxDQUQvQiwyQ0FGRixDQTNCRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TUFDMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxPQUFQLENBRDNDLEVBQ2tFLEdBRGxFLDBDQURGLEVBS0UsTUFBQyx5REFBRDtBQUFPLE9BQUcsRUFBQyxnQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FKRixDQWpDRixFQTZDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9GLE9BQVAsQ0FEbkIscUJBN0NGLENBREY7QUFtREQ7TUF2RHVCSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42MjM3Nzc3MDQ4ZTI0NTgwOTkxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0YXRzIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdHMnO1xyXG5pbXBvcnQgQ291bnRyeVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRyeVNlbGVjdG9yJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4qe1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG5mb250LWZhbWlseTotLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICB3aWR0aDoxMDB2dztcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjEpO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHdpZHRoOjgwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgbWFyZ2luOjJyZW0gYXV0bztcclxufVxyXG5cclxubWFpbiB7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBtYXJnaW46MXJlbSBhdXRvO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbnNlY3Rpb24ge1xyXG4gIG1hcmdpbjoycmVtIGF1dG87XHJcbiAgaGVpZ2h0OjEwMCVcclxufVxyXG5cclxuc2VsZWN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIG1hcmdpbjoycmVtIGF1dG87XHJcbn1cclxuXHJcbmgyLGgzLGg0IHtcclxuICBtYXJnaW46MXJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6MC4zcmVtIGF1dG87XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHllYXJOb3cgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IGRhdGVOb3cgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnc3ItUlMnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+XHJcbjxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVpTU1pNMTlFNktcIj48L3NjcmlwdD5cclxuPHNjcmlwdD5cclxuICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgZ3RhZygnY29uZmlnJywgJ0ctWlNTWk0xOUU2SycpO1xyXG48L3NjcmlwdD5gLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPHRpdGxlPtCa0J7QoNCe0J3QkCDQktCY0KDQo9ChIC0gQ09WSUQgMTkg0YHRgtCw0YLQuNGB0YLQuNC60LA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCLQmtCe0KDQntCd0JAg0JLQmNCg0KPQoSAoQ09WSUQgMTkpINGB0YLQsNGC0LjRgdGC0LjQutCwINC/0L4g0LfQtdC80ZnQsNC80LBcIlxyXG4gICAgICAgICAga2V5PVwidGl0bGVcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCLRgdGC0LDRgtC40YHRgtC40LrQsCDQv9C+INC30LXQvNGZ0LDQvNCwINC+INC60L7RgNC+0L3QsCDQstC40YDRg9GB0YMgQ09WSUQgMTlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPtCa0J7QoNCe0J3QkCDQktCY0KDQo9ChIChDT1ZJRCAxOSk8L2gxPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgINGB0YLQsNGC0LjRgdGC0LjQutCwINC/0L4g0LfQtdC80ZnQsNC80LAg0L3QsCDQtNCw0L0gPHNwYW4+e2RhdGVOb3d9PC9zcGFuPiDQs9C+0LTQuNC90LUuXHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgPENvdW50cnlTZWxlY3RvciAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJnbG9iYWxcIj5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAg0JPQu9C+0LHQsNC70L3QsCDRgdGC0LDRgtC40YHRgtC40LrQsCDQt9CwIDE4OCDQt9C10LzQsNGZ0LAg0L3QsCDQtNCw0L0gPHNwYW4+e2RhdGVOb3d9PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgINCz0L7QtNC40L3QtS5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8U3RhdHMgdXJsPVwiaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpXCIgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDxzcGFuPnt5ZWFyTm93fTwvc3Bhbj4sIFN0ZWZhbiBMamlsamFrXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9