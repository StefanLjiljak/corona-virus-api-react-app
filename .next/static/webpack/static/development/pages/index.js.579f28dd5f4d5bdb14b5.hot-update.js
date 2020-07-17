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
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "\u041A\u041E\u0420\u041E\u041D\u0410 \u0412\u0418\u0420\u0423\u0421 (COVID 19)"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0435\u043C\u0459\u0430\u043C\u0430 \u043D\u0430 \u0434\u0430\u043D ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 40
    }
  }, dateNow), " \u0433\u043E\u0434\u0438\u043D\u0435.")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  })), __jsx("article", {
    className: "global",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "\u0413\u043B\u043E\u0431\u0430\u043B\u043D\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 188 \u0437\u0435\u043C\u0430\u0459\u0430 \u043D\u0430 \u0434\u0430\u043D ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 54
    }
  }, dateNow), ' ', "\u0433\u043E\u0434\u0438\u043D\u0435."), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "https://covid19.mathdro.id/api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Copyright \xA9 ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5kZXhQYWdlIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyTm93IiwiZ2V0RnVsbFllYXIiLCJkYXRlTm93IiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO0tBQU1ELFc7QUF1RVMsU0FBU0UsU0FBVCxHQUFxQjtBQUNsQyxNQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLFdBQUwsRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxrQkFBTCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFERixFQUVFO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxXQUFPLEVBQUMscU1BRlY7QUFHRSxPQUFHLEVBQUMsT0FITjtBQUlFLGVBQVcsRUFBQyxnTkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEpBQytCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0QsT0FBUCxDQUQvQiwyQ0FGRixDQVhGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZNQUMyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLE9BQVAsQ0FEM0MsRUFDa0UsR0FEbEUsMENBREYsRUFLRSxNQUFDLHlEQUFEO0FBQU8sT0FBRyxFQUFDLGdDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLENBakJGLEVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsT0FBUCxDQURuQixxQkE3QkYsQ0FERjtBQW1DRDtNQXZDdUJILFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU3OWYyOGRkNWY0ZDViZGIxNGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0cyc7XHJcbmltcG9ydCBDb3VudHJ5U2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3InO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbip7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbmZvbnQtZmFtaWx5Oi0tYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOjEwMHZ3O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuMSk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBtYXJnaW46MnJlbSBhdXRvO1xyXG59XHJcblxyXG5tYWluIHtcclxuICB3aWR0aDo4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIG1hcmdpbjoxcmVtIGF1dG87XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWFyZ2luOjJyZW0gYXV0bztcclxuICBoZWlnaHQ6MTAwJVxyXG59XHJcblxyXG5zZWxlY3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgbWFyZ2luOjJyZW0gYXV0bztcclxufVxyXG5cclxuaDIsaDMsaDQge1xyXG4gIG1hcmdpbjoxcmVtIGF1dG87XHJcbiAgcGFkZGluZzowLjNyZW0gYXV0bztcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBsZXQgeWVhck5vdyA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgZGF0ZU5vdyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdzci1SUycpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+0JrQntCg0J7QndCQINCS0JjQoNCj0KEgLSBDT1ZJRCAxOSDRgdGC0LDRgtC40YHRgtC40LrQsDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgY29udGVudD1cItCa0J7QoNCe0J3QkCDQktCY0KDQo9ChIChDT1ZJRCAxOSkg0YHRgtCw0YLQuNGB0YLQuNC60LAg0L/QviDQt9C10LzRmdCw0LzQsFwiXHJcbiAgICAgICAgICBrZXk9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cItGB0YLQsNGC0LjRgdGC0LjQutCwINC/0L4g0LfQtdC80ZnQsNC80LAg0L4g0LrQvtGA0L7QvdCwINCy0LjRgNGD0YHRgyBDT1ZJRCAxOVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+0JrQntCg0J7QndCQINCS0JjQoNCj0KEgKENPVklEIDE5KTwvaDE+XHJcbiAgICAgICAgPGg1PlxyXG4gICAgICAgICAg0YHRgtCw0YLQuNGB0YLQuNC60LAg0L/QviDQt9C10LzRmdCw0LzQsCDQvdCwINC00LDQvSA8c3Bhbj57ZGF0ZU5vd308L3NwYW4+INCz0L7QtNC40L3QtS5cclxuICAgICAgICA8L2g1PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICA8Q291bnRyeVNlbGVjdG9yIC8+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImdsb2JhbFwiPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICDQk9C70L7QsdCw0LvQvdCwINGB0YLQsNGC0LjRgdGC0LjQutCwINC30LAgMTg4INC30LXQvNCw0ZnQsCDQvdCwINC00LDQvSA8c3Bhbj57ZGF0ZU5vd308L3NwYW4+eycgJ31cclxuICAgICAgICAgICAg0LPQvtC00LjQvdC1LlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxTdGF0cyB1cmw9XCJodHRwczovL2NvdmlkMTkubWF0aGRyby5pZC9hcGlcIiAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIENvcHlyaWdodCAmY29weTsgPHNwYW4+e3llYXJOb3d9PC9zcGFuPiwgU3RlZmFuIExqaWxqYWtcclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=