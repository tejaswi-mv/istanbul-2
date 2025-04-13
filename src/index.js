"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_19yc3631ry() {
  var path = "C:\\Users\\venut\\Documents\\istanbul\\app2\\src_org\\index.js";
  var hash = "cffc6c3d1461d48df8e895916e4070c187144243";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\venut\\Documents\\istanbul\\app2\\src_org\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 13
        },
        end: {
          line: 7,
          column: 65
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "2": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 18
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cffc6c3d1461d48df8e895916e4070c187144243"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19yc3631ry = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19yc3631ry();
const root = (cov_19yc3631ry().s[0]++, _client.default.createRoot(document.getElementById('root')));
cov_19yc3631ry().s[1]++;
root.render(/*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
cov_19yc3631ry().s[2]++;
(0, _reportWebVitals.default)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jbGllbnQiLCJfQXBwIiwiX3JlcG9ydFdlYlZpdGFscyIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImNvdl8xOXljMzYzMXJ5IiwicGF0aCIsImhhc2giLCJnbG9iYWwiLCJGdW5jdGlvbiIsImdjdiIsImNvdmVyYWdlRGF0YSIsInN0YXRlbWVudE1hcCIsInN0YXJ0IiwibGluZSIsImNvbHVtbiIsImVuZCIsImZuTWFwIiwiYnJhbmNoTWFwIiwicyIsImYiLCJiIiwiX2NvdmVyYWdlU2NoZW1hIiwiY292ZXJhZ2UiLCJhY3R1YWxDb3ZlcmFnZSIsInJvb3QiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIlN0cmljdE1vZGUiLCJyZXBvcnRXZWJWaXRhbHMiXSwic291cmNlcyI6WyIuLi9zcmNfb3JnL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tICcuL3JlcG9ydFdlYlZpdGFscyc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcblxuLy8gSWYgeW91IHdhbnQgdG8gc3RhcnQgbWVhc3VyaW5nIHBlcmZvcm1hbmNlIGluIHlvdXIgYXBwLCBwYXNzIGEgZnVuY3Rpb25cbi8vIHRvIGxvZyByZXN1bHRzIChmb3IgZXhhbXBsZTogcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKSlcbi8vIG9yIHNlbmQgdG8gYW4gYW5hbHl0aWNzIGVuZHBvaW50LiBMZWFybiBtb3JlOiBodHRwczovL2JpdC5seS9DUkEtdml0YWxzXG5yZXBvcnRXZWJWaXRhbHMoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQUEsT0FBQTtBQUNBLElBQUFFLElBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLGdCQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFBZ0QsU0FBQUQsdUJBQUFLLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxLQUFBRSxPQUFBLEVBQUFGLENBQUE7QUFBQSxTQUFBRyxlQUFBO0VBQUEsSUFBQUMsSUFBQTtFQUFBLElBQUFDLElBQUE7RUFBQSxJQUFBQyxNQUFBLE9BQUFDLFFBQUE7RUFBQSxJQUFBQyxHQUFBO0VBQUEsSUFBQUMsWUFBQTtJQUFBTCxJQUFBO0lBQUFNLFlBQUE7TUFBQTtRQUFBQyxLQUFBO1VBQUFDLElBQUE7VUFBQUMsTUFBQTtRQUFBO1FBQUFDLEdBQUE7VUFBQUYsSUFBQTtVQUFBQyxNQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUFGLEtBQUE7VUFBQUMsSUFBQTtVQUFBQyxNQUFBO1FBQUE7UUFBQUMsR0FBQTtVQUFBRixJQUFBO1VBQUFDLE1BQUE7UUFBQTtNQUFBO01BQUE7UUFBQUYsS0FBQTtVQUFBQyxJQUFBO1VBQUFDLE1BQUE7UUFBQTtRQUFBQyxHQUFBO1VBQUFGLElBQUE7VUFBQUMsTUFBQTtRQUFBO01BQUE7SUFBQTtJQUFBRSxLQUFBO0lBQUFDLFNBQUE7SUFBQUMsQ0FBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUFDLENBQUE7SUFBQUMsQ0FBQTtJQUFBQyxlQUFBO0lBQUFmLElBQUE7RUFBQTtFQUFBLElBQUFnQixRQUFBLEdBQUFmLE1BQUEsQ0FBQUUsR0FBQSxNQUFBRixNQUFBLENBQUFFLEdBQUE7RUFBQSxLQUFBYSxRQUFBLENBQUFqQixJQUFBLEtBQUFpQixRQUFBLENBQUFqQixJQUFBLEVBQUFDLElBQUEsS0FBQUEsSUFBQTtJQUFBZ0IsUUFBQSxDQUFBakIsSUFBQSxJQUFBSyxZQUFBO0VBQUE7RUFBQSxJQUFBYSxjQUFBLEdBQUFELFFBQUEsQ0FBQWpCLElBQUE7RUFBQTtJQVdwQztJQUFBRCxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBbUIsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQW5CLGNBQUE7QUFUWixNQUFNb0IsSUFBSSxJQUFBcEIsY0FBQSxHQUFBYyxDQUFBLE9BQUdPLGVBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUFDeEIsY0FBQSxHQUFBYyxDQUFBO0FBQ2xFTSxJQUFJLENBQUNLLE1BQU0sY0FDVGxDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBMkIsYUFBQSxDQUFDbkMsTUFBQSxDQUFBUSxPQUFLLENBQUM0QixVQUFVLHFCQUNmcEMsTUFBQSxDQUFBUSxPQUFBLENBQUEyQixhQUFBLENBQUMvQixJQUFBLENBQUFJLE9BQUcsTUFBRSxDQUNVLENBQ3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQUFDLGNBQUEsR0FBQWMsQ0FBQTtBQUNBLElBQUFjLHdCQUFlLEVBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==