!(function (e) {
  var n = {};
  function o(r) {
    if (n[r]) return n[r].exports;
    var t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function (e, n, r) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var t in e)
          o.d(
            r,
            t,
            function (n) {
              return e[n];
            }.bind(null, t)
          );
      return r;
    }),
    (o.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (e, n, o) {
    var r = o(1);
    console.log("123", r.keys());
  },
  function (e, n, o) {
    var r = { "./demo1.js": 2, "./demo2.js": 3 };
    function t(e) {
      var n = u(e);
      return o(n);
    }
    function u(e) {
      if (!o.o(r, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      return r[e];
    }
    (t.keys = function () {
      return Object.keys(r);
    }),
      (t.resolve = u),
      (e.exports = t),
      (t.id = 1);
  },
  function (e, n) {
    console.log("demo1");
  },
  function (e, n) {
    console.log("demo2");
  },
]);