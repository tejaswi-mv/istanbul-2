"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function cov_nqyp923ot() {
  var path = "C:\\Users\\venut\\Documents\\istanbul\\app2\\src_org\\reportWebVitals.js";
  var hash = "d78d0931b6a593af0cdedd6a0f3edcc4fe97b349";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\venut\\Documents\\istanbul\\app2\\src_org\\reportWebVitals.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "3": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "4": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "5": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 26
        }
      },
      "6": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "7": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 79
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 17
          }
        }, {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 52
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d78d0931b6a593af0cdedd6a0f3edcc4fe97b349"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nqyp923ot = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_nqyp923ot();
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
cov_nqyp923ot().s[0]++;
const reportWebVitals = onPerfEntry => {
  cov_nqyp923ot().f[0]++;
  cov_nqyp923ot().s[1]++;
  if ((cov_nqyp923ot().b[1][0]++, onPerfEntry) && (cov_nqyp923ot().b[1][1]++, onPerfEntry instanceof Function)) {
    cov_nqyp923ot().b[0][0]++;
    cov_nqyp923ot().s[2]++;
    Promise.resolve().then(() => _interopRequireWildcard(require('web-vitals'))).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      cov_nqyp923ot().f[1]++;
      cov_nqyp923ot().s[3]++;
      getCLS(onPerfEntry);
      cov_nqyp923ot().s[4]++;
      getFID(onPerfEntry);
      cov_nqyp923ot().s[5]++;
      getFCP(onPerfEntry);
      cov_nqyp923ot().s[6]++;
      getLCP(onPerfEntry);
      cov_nqyp923ot().s[7]++;
      getTTFB(onPerfEntry);
    });
  } else {
    cov_nqyp923ot().b[0][1]++;
  }
};
var _default = exports.default = reportWebVitals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbnF5cDkyM290IiwiYWN0dWFsQ292ZXJhZ2UiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsInMiLCJyZXBvcnRXZWJWaXRhbHMiLCJvblBlcmZFbnRyeSIsImYiLCJiIiwiRnVuY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXF1aXJlIiwiX3JlZiIsImdldENMUyIsImdldEZJRCIsImdldEZDUCIsImdldExDUCIsImdldFRURkIiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmNfb3JnL3JlcG9ydFdlYlZpdGFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBvblBlcmZFbnRyeSA9PiB7XG4gIGlmIChvblBlcmZFbnRyeSAmJiBvblBlcmZFbnRyeSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgaW1wb3J0KCd3ZWItdml0YWxzJykudGhlbigoeyBnZXRDTFMsIGdldEZJRCwgZ2V0RkNQLCBnZXRMQ1AsIGdldFRURkIgfSkgPT4ge1xuICAgICAgZ2V0Q0xTKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldEZJRChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGQ1Aob25QZXJmRW50cnkpO1xuICAgICAgZ2V0TENQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldFRURkIob25QZXJmRW50cnkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXBvcnRXZWJWaXRhbHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFBQSxTQUFBRSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSxDQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSSx3QkFBQUosQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxlQUFBQSxDQUFBLHVCQUFBQSxDQUFBLHlCQUFBQSxDQUFBLFdBQUFNLE9BQUEsRUFBQU4sQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxVQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVIsQ0FBQSxPQUFBUyxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFmLENBQUEsb0JBQUFlLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWQsQ0FBQSxFQUFBZSxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFmLENBQUEsQ0FBQWUsQ0FBQSxZQUFBTixDQUFBLENBQUFILE9BQUEsR0FBQU4sQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWdCLEdBQUEsQ0FBQW5CLENBQUEsRUFBQVMsQ0FBQSxHQUFBQSxDQUFBO0FBQUFaLGFBQUEsR0FBQXVCLENBQUE7QUFmWixNQUFNQyxlQUFlLEdBQUdDLFdBQVcsSUFBSTtFQUFBekIsYUFBQSxHQUFBMEIsQ0FBQTtFQUFBMUIsYUFBQSxHQUFBdUIsQ0FBQTtFQUNyQyxJQUFJLENBQUF2QixhQUFBLEdBQUEyQixDQUFBLFVBQUFGLFdBQVcsTUFBQXpCLGFBQUEsR0FBQTJCLENBQUEsVUFBSUYsV0FBVyxZQUFZRyxRQUFRLEdBQUU7SUFBQTVCLGFBQUEsR0FBQTJCLENBQUE7SUFBQTNCLGFBQUEsR0FBQXVCLENBQUE7SUFDbERNLE9BQUEsQ0FBQUMsT0FBQSxHQUFBQyxJQUFBLE9BQUF4Qix1QkFBQSxDQUFBeUIsT0FBQSxDQUFPLFlBQVksSUFBRUQsSUFBSSxDQUFDRSxJQUFBLElBQWlEO01BQUEsSUFBaEQ7UUFBRUMsTUFBTTtRQUFFQyxNQUFNO1FBQUVDLE1BQU07UUFBRUMsTUFBTTtRQUFFQztNQUFRLENBQUMsR0FBQUwsSUFBQTtNQUFBakMsYUFBQSxHQUFBMEIsQ0FBQTtNQUFBMUIsYUFBQSxHQUFBdUIsQ0FBQTtNQUNwRVcsTUFBTSxDQUFDVCxXQUFXLENBQUM7TUFBQ3pCLGFBQUEsR0FBQXVCLENBQUE7TUFDcEJZLE1BQU0sQ0FBQ1YsV0FBVyxDQUFDO01BQUN6QixhQUFBLEdBQUF1QixDQUFBO01BQ3BCYSxNQUFNLENBQUNYLFdBQVcsQ0FBQztNQUFDekIsYUFBQSxHQUFBdUIsQ0FBQTtNQUNwQmMsTUFBTSxDQUFDWixXQUFXLENBQUM7TUFBQ3pCLGFBQUEsR0FBQXVCLENBQUE7TUFDcEJlLE9BQU8sQ0FBQ2IsV0FBVyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztFQUNKLENBQUM7SUFBQXpCLGFBQUEsR0FBQTJCLENBQUE7RUFBQTtBQUNILENBQUM7QUFBQyxJQUFBWSxRQUFBLEdBQUFDLE9BQUEsQ0FBQS9CLE9BQUEsR0FFYWUsZUFBZSIsImlnbm9yZUxpc3QiOltdfQ==