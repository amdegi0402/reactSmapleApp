webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store.js");









var _jsxFileName = "/home/anet/reactSmapleApp/lib/redux-store.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var isServer = false;
var _NRS_ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_10__["initStore"])(initialState);
  }

  if (!window[_NRS_]) {
    window[_NRS_] = Object(_store__WEBPACK_IMPORTED_MODULE_10__["initStore"])(initialState);
  }

  return window[_NRS_];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWithRedux, _Component);

    var _super = _createSuper(AppWithRedux);

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWithRedux, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
          var reduxStore, appProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  reduxStore = getOrCreateStore();
                  appContext.ctx.reduxStore = reduxStore;
                  appProps = {};

                  if (!(typeof App.getInitialProps === 'function')) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return App.getInitialProps(appContext);

                case 6:
                  appProps = _context.sent;

                case 7:
                  return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
                    initialReduxState: reduxStore.getState()
                  }));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function AppWithRedux(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppWithRedux);

      _this = _super.call(this, props);
      _this.reduxStore = getOrCreateStore(props.initialReduxState);
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWithRedux, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(App, _objectSpread(_objectSpread({}, this.props), {}, {
          reduxStore: this.reduxStore
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 14
        }, this);
      }
    }]);

    return AppWithRedux;
  }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHV4LXN0b3JlLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiX05SU18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdFN0b3JlIiwid2luZG93IiwiQXBwIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxRQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLHNCQUFkOztBQUdBLFNBQVNDLGdCQUFULENBQTJCQyxZQUEzQixFQUF5QztBQUN2QyxNQUFJSCxRQUFKLEVBQWM7QUFDWixXQUFPSSx5REFBUyxDQUFDRCxZQUFELENBQWhCO0FBQ0Q7O0FBR0QsTUFBSSxDQUFDRSxNQUFNLENBQUNKLEtBQUQsQ0FBWCxFQUFvQjtBQUNsQkksVUFBTSxDQUFDSixLQUFELENBQU4sR0FBZ0JHLHlEQUFTLENBQUNELFlBQUQsQ0FBekI7QUFDRDs7QUFDRCxTQUFPRSxNQUFNLENBQUNKLEtBQUQsQ0FBYjtBQUNEOztBQUdjLHlFQUFDSyxHQUFELEVBQVM7QUFDdEI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxpT0FHZ0NDLFVBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlVQyw0QkFKVixHQUl1Qk4sZ0JBQWdCLEVBSnZDO0FBS0lLLDRCQUFVLENBQUNFLEdBQVgsQ0FBZUQsVUFBZixHQUE0QkEsVUFBNUI7QUFDSUUsMEJBTlIsR0FNbUIsRUFObkI7O0FBQUEsd0JBT1EsT0FBT0osR0FBRyxDQUFDSyxlQUFYLEtBQStCLFVBUHZDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBUXVCTCxHQUFHLENBQUNLLGVBQUosQ0FBb0JKLFVBQXBCLENBUnZCOztBQUFBO0FBUU1HLDBCQVJOOztBQUFBO0FBQUEsbUZBV1NBLFFBWFQ7QUFZTUUscUNBQWlCLEVBQUVKLFVBQVUsQ0FBQ0ssUUFBWDtBQVp6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWlCRSwwQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtOLFVBQUwsR0FBa0JOLGdCQUFnQixDQUFDWSxLQUFLLENBQUNGLGlCQUFQLENBQWxDO0FBRmtCO0FBR25COztBQXBCSDtBQUFBO0FBQUEsK0JBdUJZO0FBQ1IsNEJBQU8scUVBQUMsR0FBRCxrQ0FBUyxLQUFLRSxLQUFkO0FBQ0wsb0JBQVUsRUFBRSxLQUFLTjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFFRDtBQTFCSDs7QUFBQTtBQUFBLElBQWtDTywrQ0FBbEM7QUE0QkQsQ0E3QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MjI1NmMxZTFlYTk5NDM3M2M4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlJztcblxuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5jb25zdCBfTlJTXyA9ICdfX05FWFRfUkVEVVhfU1RPUkVfXydcblxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlIChpbml0aWFsU3RhdGUpIHtcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIGluaXRTdG9yZShpbml0aWFsU3RhdGUpXG4gIH1cblxuXG4gIGlmICghd2luZG93W19OUlNfXSkge1xuICAgIHdpbmRvd1tfTlJTX10gPSBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxuICB9XG4gIHJldHVybiB3aW5kb3dbX05SU19dXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKEFwcCkgPT4ge1xuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKVxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hcHBQcm9wcyxcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz5cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9