! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.wanakana = {})
}(this, function (t) {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r = n(function (t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }),
        o = Object.freeze({
            default: r,
            __moduleExports: r
        }),
        i = n(function (t) {
            var e = t.exports = {
                version: "2.5.5"
            };
            "number" == typeof __e && (__e = e)
        }),
        u = Object.freeze({
            default: i,
            __moduleExports: i,
            version: i.version
        }),
        a = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        c = Object.freeze({
            default: a,
            __moduleExports: a
        }),
        f = c && a || c,
        s = function (t) {
            if (!f(t)) throw TypeError(t + " is not an object!");
            return t
        },
        l = Object.freeze({
            default: s,
            __moduleExports: s
        }),
        h = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        d = Object.freeze({
            default: h,
            __moduleExports: h
        }),
        v = d && h || d,
        p = !v(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        y = Object.freeze({
            default: p,
            __moduleExports: p
        }),
        g = o && r || o,
        _ = g.document,
        m = f(_) && f(_.createElement),
        b = function (t) {
            return m ? _.createElement(t) : {}
        },
        E = Object.freeze({
            default: b,
            __moduleExports: b
        }),
        O = y && p || y,
        j = E && b || E,
        w = !O && !v(function () {
            return 7 != Object.defineProperty(j("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        x = Object.freeze({
            default: w,
            __moduleExports: w
        }),
        S = function (t, e) {
            if (!f(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !f(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !f(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !f(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        A = Object.freeze({
            default: S,
            __moduleExports: S
        }),
        M = l && s || l,
        z = x && w || x,
        N = A && S || A,
        P = Object.defineProperty,
        k = O ? Object.defineProperty : function (t, e, n) {
            if (M(t), e = N(e, !0), M(n), z) try {
                return P(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        },
        L = {
            f: k
        },
        F = Object.freeze({
            default: L,
            __moduleExports: L,
            f: k
        }),
        I = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        R = Object.freeze({
            default: I,
            __moduleExports: I
        }),
        T = F && L || F,
        C = R && I || R,
        W = O ? function (t, e, n) {
            return T.f(t, e, C(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        },
        U = Object.freeze({
            default: W,
            __moduleExports: W
        }),
        K = {}.hasOwnProperty,
        B = function (t, e) {
            return K.call(t, e)
        },
        D = Object.freeze({
            default: B,
            __moduleExports: B
        }),
        V = 0,
        G = Math.random(),
        J = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++V + G).toString(36))
        },
        H = Object.freeze({
            default: J,
            __moduleExports: J
        }),
        Y = U && W || U,
        q = D && B || D,
        X = H && J || H,
        $ = u && i || u,
        Q = n(function (t) {
            var e = X("src"),
                n = Function.toString,
                r = ("" + n).split("toString");
            $.inspectSource = function (t) {
                return n.call(t)
            }, (t.exports = function (t, n, o, i) {
                var u = "function" == typeof o;
                u && (q(o, "name") || Y(o, "name", n)), t[n] !== o && (u && (q(o, e) || Y(o, e, t[n] ? "" + t[n] : r.join(n + ""))), t === g ? t[n] = o : i ? t[n] ? t[n] = o : Y(t, n, o) : (delete t[n], Y(t, n, o)))
            })(Function.prototype, "toString", function () {
                return "function" == typeof this && this[e] || n.call(this)
            })
        }),
        Z = Object.freeze({
            default: Q,
            __moduleExports: Q
        }),
        tt = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        },
        et = Object.freeze({
            default: tt,
            __moduleExports: tt
        }),
        nt = et && tt || et,
        rt = function (t, e, n) {
            if (nt(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        ot = Object.freeze({
            default: rt,
            __moduleExports: rt
        }),
        it = Z && Q || Z,
        ut = ot && rt || ot,
        at = function (t, e, n) {
            var r, o, i, u, a = t & at.F,
                c = t & at.G,
                f = t & at.P,
                s = t & at.B,
                l = c ? g : t & at.S ? g[e] || (g[e] = {}) : (g[e] || {}).prototype,
                h = c ? $ : $[e] || ($[e] = {}),
                d = h.prototype || (h.prototype = {});
            for (r in c && (n = e), n) i = ((o = !a && l && void 0 !== l[r]) ? l : n)[r], u = s && o ? ut(i, g) : f && "function" == typeof i ? ut(Function.call, i) : i, l && it(l, r, i, t & at.U), h[r] != i && Y(h, r, u), f && d[r] != i && (d[r] = i)
        };
    g.core = $, at.F = 1, at.G = 2, at.S = 4, at.P = 8, at.B = 16, at.W = 32, at.U = 64, at.R = 128;
    for (var ct, ft = at, st = Object.freeze({
            default: ft,
            __moduleExports: ft
        }), lt = X("typed_array"), ht = X("view"), dt = !(!g.ArrayBuffer || !g.DataView), vt = dt, pt = 0, yt = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); 9 > pt;)(ct = g[yt[pt++]]) ? (Y(ct.prototype, lt, !0), Y(ct.prototype, ht, !0)) : vt = !1;
    var gt = {
            ABV: dt,
            CONSTR: vt,
            TYPED: lt,
            VIEW: ht
        },
        _t = Object.freeze({
            default: gt,
            __moduleExports: gt,
            ABV: gt.ABV,
            CONSTR: gt.CONSTR,
            TYPED: gt.TYPED,
            VIEW: gt.VIEW
        }),
        mt = Object.freeze({
            default: !1,
            __moduleExports: !1
        }),
        bt = function (t, e, n) {
            for (var r in e) it(t, r, e[r], n);
            return t
        },
        Et = Object.freeze({
            default: bt,
            __moduleExports: bt
        }),
        Ot = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        },
        jt = Object.freeze({
            default: Ot,
            __moduleExports: Ot
        }),
        wt = Math.ceil,
        xt = Math.floor,
        St = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? xt : wt)(t)
        },
        At = Object.freeze({
            default: St,
            __moduleExports: St
        }),
        Mt = At && St || At,
        zt = Math.min,
        Nt = function (t) {
            return t > 0 ? zt(Mt(t), 9007199254740991) : 0
        },
        Pt = Object.freeze({
            default: Nt,
            __moduleExports: Nt
        }),
        kt = Pt && Nt || Pt,
        Lt = function (t) {
            if (void 0 === t) return 0;
            var e = Mt(t),
                n = kt(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        },
        Ft = Object.freeze({
            default: Lt,
            __moduleExports: Lt
        }),
        It = {}.toString,
        Rt = function (t) {
            return It.call(t).slice(8, -1)
        },
        Tt = Object.freeze({
            default: Rt,
            __moduleExports: Rt
        }),
        Ct = Tt && Rt || Tt,
        Wt = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == Ct(t) ? t.split("") : Object(t)
        },
        Ut = Object.freeze({
            default: Wt,
            __moduleExports: Wt
        }),
        Kt = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        },
        Bt = Object.freeze({
            default: Kt,
            __moduleExports: Kt
        }),
        Dt = Ut && Wt || Ut,
        Vt = Bt && Kt || Bt,
        Gt = function (t) {
            return Dt(Vt(t))
        },
        Jt = Object.freeze({
            default: Gt,
            __moduleExports: Gt
        }),
        Ht = Math.max,
        Yt = Math.min,
        qt = function (t, e) {
            return 0 > (t = Mt(t)) ? Ht(t + e, 0) : Yt(t, e)
        },
        Xt = Object.freeze({
            default: qt,
            __moduleExports: qt
        }),
        $t = Jt && Gt || Jt,
        Qt = Xt && qt || Xt,
        Zt = function (t) {
            return function (e, n, r) {
                var o, i = $t(e),
                    u = kt(i.length),
                    a = Qt(r, u);
                if (t && n != n) {
                    for (; u > a;)
                        if ((o = i[a++]) != o) return !0
                } else
                    for (; u > a; a++)
                        if ((t || a in i) && i[a] === n) return t || a || 0;
                return !t && -1
            }
        },
        te = Object.freeze({
            default: Zt,
            __moduleExports: Zt
        }),
        ee = g["__core-js_shared__"] || (g["__core-js_shared__"] = {}),
        ne = function (t) {
            return ee[t] || (ee[t] = {})
        },
        re = Object.freeze({
            default: ne,
            __moduleExports: ne
        }),
        oe = re && ne || re,
        ie = oe("keys"),
        ue = function (t) {
            return ie[t] || (ie[t] = X(t))
        },
        ae = Object.freeze({
            default: ue,
            __moduleExports: ue
        }),
        ce = te && Zt || te,
        fe = ae && ue || ae,
        se = ce(!1),
        le = fe("IE_PROTO"),
        he = function (t, e) {
            var n, r = $t(t),
                o = 0,
                i = [];
            for (n in r) n != le && q(r, n) && i.push(n);
            for (; e.length > o;) q(r, n = e[o++]) && (~se(i, n) || i.push(n));
            return i
        },
        de = Object.freeze({
            default: he,
            __moduleExports: he
        }),
        ve = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        pe = Object.freeze({
            default: ve,
            __moduleExports: ve
        }),
        ye = de && he || de,
        ge = pe && ve || pe,
        _e = ge.concat("length", "prototype"),
        me = Object.getOwnPropertyNames || function (t) {
            return ye(t, _e)
        },
        be = {
            f: me
        },
        Ee = Object.freeze({
            default: be,
            __moduleExports: be,
            f: me
        }),
        Oe = function (t) {
            return Object(Vt(t))
        },
        je = Object.freeze({
            default: Oe,
            __moduleExports: Oe
        }),
        we = je && Oe || je,
        xe = function (t) {
            for (var e = we(this), n = kt(e.length), r = arguments.length, o = Qt(r > 1 ? arguments[1] : void 0, n), i = r > 2 ? arguments[2] : void 0, u = void 0 === i ? n : Qt(i, n); u > o;) e[o++] = t;
            return e
        },
        Se = Object.freeze({
            default: xe,
            __moduleExports: xe
        }),
        Ae = n(function (t) {
            var e = oe("wks"),
                n = g.Symbol,
                r = "function" == typeof n;
            (t.exports = function (t) {
                return e[t] || (e[t] = r && n[t] || (r ? n : X)("Symbol." + t))
            }).store = e
        }),
        Me = Object.freeze({
            default: Ae,
            __moduleExports: Ae
        }),
        ze = Me && Ae || Me,
        Ne = T.f,
        Pe = ze("toStringTag"),
        ke = function (t, e, n) {
            t && !q(t = n ? t : t.prototype, Pe) && Ne(t, Pe, {
                configurable: !0,
                value: e
            })
        },
        Le = Object.freeze({
            default: ke,
            __moduleExports: ke
        }),
        Fe = mt,
        Ie = _t && gt || _t,
        Re = Et && bt || Et,
        Te = jt && Ot || jt,
        Ce = Ft && Lt || Ft,
        We = Ee && be || Ee,
        Ue = Se && xe || Se,
        Ke = Le && ke || Le,
        Be = n(function (t, e) {
            var n = We.f,
                r = T.f,
                o = "prototype",
                i = "Wrong index!",
                u = g.ArrayBuffer,
                a = g.DataView,
                c = g.Math,
                f = g.RangeError,
                s = g.Infinity,
                l = u,
                h = c.abs,
                d = c.pow,
                p = c.floor,
                y = c.log,
                _ = c.LN2,
                m = O ? "_b" : "buffer",
                b = O ? "_l" : "byteLength",
                E = O ? "_o" : "byteOffset";

            function j(t, e, n) {
                var r, o, i, u = Array(n),
                    a = 8 * n - e - 1,
                    c = (1 << a) - 1,
                    f = c >> 1,
                    l = 23 === e ? d(2, -24) - d(2, -77) : 0,
                    v = 0,
                    g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                for ((t = h(t)) != t || t === s ? (o = t != t ? 1 : 0, r = c) : (r = p(y(t) / _), 1 > t * (i = d(2, -r)) && (r--, i *= 2), 2 > (t += 1 > r + f ? l * d(2, 1 - f) : l / i) * i || (r++, i /= 2), c > r + f ? 1 > r + f ? (o = t * d(2, f - 1) * d(2, e), r = 0) : (o = (t * i - 1) * d(2, e), r += f) : (o = 0, r = c)); e >= 8; u[v++] = 255 & o, o /= 256, e -= 8);
                for (r = r << e | o, a += e; a > 0; u[v++] = 255 & r, r /= 256, a -= 8);
                return u[--v] |= 128 * g, u
            }

            function w(t, e, n) {
                var r, o = 8 * n - e - 1,
                    i = (1 << o) - 1,
                    u = i >> 1,
                    a = o - 7,
                    c = n - 1,
                    f = t[c--],
                    l = 127 & f;
                for (f >>= 7; a > 0; l = 256 * l + t[c], c--, a -= 8);
                for (r = l & (1 << -a) - 1, l >>= -a, a += e; a > 0; r = 256 * r + t[c], c--, a -= 8);
                if (0 === l) l = 1 - u;
                else {
                    if (l === i) return r ? NaN : f ? -s : s;
                    r += d(2, e), l -= u
                }
                return (f ? -1 : 1) * r * d(2, l - e)
            }

            function x(t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
            }

            function S(t) {
                return [255 & t]
            }

            function A(t) {
                return [255 & t, t >> 8 & 255]
            }

            function M(t) {
                return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
            }

            function z(t) {
                return j(t, 52, 8)
            }

            function N(t) {
                return j(t, 23, 4)
            }

            function P(t, e, n) {
                r(t[o], e, {
                    get: function () {
                        return this[n]
                    }
                })
            }

            function k(t, e, n, r) {
                var o = Ce(+n);
                if (o + e > t[b]) throw f(i);
                var u = o + t[E],
                    a = t[m]._b.slice(u, u + e);
                return r ? a : a.reverse()
            }

            function L(t, e, n, r, o, u) {
                var a = Ce(+n);
                if (a + e > t[b]) throw f(i);
                for (var c = t[m]._b, s = a + t[E], l = r(+o), h = 0; e > h; h++) c[s + h] = l[u ? h : e - h - 1]
            }
            if (Ie.ABV) {
                if (!v(function () {
                        u(1)
                    }) || !v(function () {
                        new u(-1)
                    }) || v(function () {
                        return new u, new u(1.5), new u(NaN), "ArrayBuffer" != u.name
                    })) {
                    for (var F, I = (u = function (t) {
                            return Te(this, u), new l(Ce(t))
                        })[o] = l[o], R = n(l), C = 0; R.length > C;)(F = R[C++]) in u || Y(u, F, l[F]);
                    Fe || (I.constructor = u)
                }
                var W = new a(new u(2)),
                    U = a[o].setInt8;
                W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || Re(a[o], {
                    setInt8: function (t, e) {
                        U.call(this, t, e << 24 >> 24)
                    },
                    setUint8: function (t, e) {
                        U.call(this, t, e << 24 >> 24)
                    }
                }, !0)
            } else u = function (t) {
                Te(this, u, "ArrayBuffer");
                var e = Ce(t);
                this._b = Ue.call(Array(e), 0), this[b] = e
            }, a = function (t, e, n) {
                Te(this, a, "DataView"), Te(t, u, "DataView");
                var r = t[b],
                    o = Mt(e);
                if (0 > o || o > r) throw f("Wrong offset!");
                if (o + (n = void 0 === n ? r - o : kt(n)) > r) throw f("Wrong length!");
                this[m] = t, this[E] = o, this[b] = n
            }, O && (P(u, "byteLength", "_l"), P(a, "buffer", "_b"), P(a, "byteLength", "_l"), P(a, "byteOffset", "_o")), Re(a[o], {
                getInt8: function (t) {
                    return k(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function (t) {
                    return k(this, 1, t)[0]
                },
                getInt16: function (t) {
                    var e = k(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function (t) {
                    var e = k(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0]
                },
                getInt32: function (t) {
                    return x(k(this, 4, t, arguments[1]))
                },
                getUint32: function (t) {
                    return x(k(this, 4, t, arguments[1])) >>> 0
                },
                getFloat32: function (t) {
                    return w(k(this, 4, t, arguments[1]), 23, 4)
                },
                getFloat64: function (t) {
                    return w(k(this, 8, t, arguments[1]), 52, 8)
                },
                setInt8: function (t, e) {
                    L(this, 1, t, S, e)
                },
                setUint8: function (t, e) {
                    L(this, 1, t, S, e)
                },
                setInt16: function (t, e) {
                    L(this, 2, t, A, e, arguments[2])
                },
                setUint16: function (t, e) {
                    L(this, 2, t, A, e, arguments[2])
                },
                setInt32: function (t, e) {
                    L(this, 4, t, M, e, arguments[2])
                },
                setUint32: function (t, e) {
                    L(this, 4, t, M, e, arguments[2])
                },
                setFloat32: function (t, e) {
                    L(this, 4, t, N, e, arguments[2])
                },
                setFloat64: function (t, e) {
                    L(this, 8, t, z, e, arguments[2])
                }
            });
            Ke(u, "ArrayBuffer"), Ke(a, "DataView"), Y(a[o], Ie.VIEW, !0), e.ArrayBuffer = u, e.DataView = a
        }),
        De = Object.freeze({
            default: Be,
            __moduleExports: Be
        }),
        Ve = ze("species"),
        Ge = function (t, e) {
            var n, r = M(t).constructor;
            return void 0 === r || void 0 == (n = M(r)[Ve]) ? e : nt(n)
        },
        Je = Object.freeze({
            default: Ge,
            __moduleExports: Ge
        }),
        He = ze("species"),
        Ye = function (t) {
            var e = g[t];
            O && e && !e[He] && T.f(e, He, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        qe = Object.freeze({
            default: Ye,
            __moduleExports: Ye
        }),
        Xe = st && ft || st,
        $e = De && Be || De,
        Qe = Je && Ge || Je,
        Ze = qe && Ye || qe,
        tn = g.ArrayBuffer,
        en = $e.ArrayBuffer,
        nn = $e.DataView,
        rn = Ie.ABV && tn.isView,
        on = en.prototype.slice,
        un = Ie.VIEW;
    Xe(Xe.G + Xe.W + Xe.F * (tn !== en), {
        ArrayBuffer: en
    }), Xe(Xe.S + Xe.F * !Ie.CONSTR, "ArrayBuffer", {
        isView: function (t) {
            return rn && rn(t) || f(t) && un in t
        }
    }), Xe(Xe.P + Xe.U + Xe.F * v(function () {
        return !new en(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function (t, e) {
            if (void 0 !== on && void 0 === e) return on.call(M(this), t);
            for (var n = M(this).byteLength, r = Qt(t, n), o = Qt(void 0 === e ? n : e, n), i = new(Qe(this, en))(kt(o - r)), u = new nn(this), a = new nn(i), c = 0; o > r;) a.setUint8(c++, u.getUint8(r++));
            return i
        }
    }), Ze("ArrayBuffer");
    var an = ze("toStringTag"),
        cn = "Arguments" == Ct(function () {
            return arguments
        }()),
        fn = function (t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), an)) ? n : cn ? Ct(e) : "Object" == (r = Ct(e)) && "function" == typeof e.callee ? "Arguments" : r
        },
        sn = Object.freeze({
            default: fn,
            __moduleExports: fn
        }),
        ln = {},
        hn = Object.freeze({
            default: ln,
            __moduleExports: ln
        }),
        dn = hn && ln || hn,
        vn = ze("iterator"),
        pn = Array.prototype,
        yn = function (t) {
            return void 0 !== t && (dn.Array === t || pn[vn] === t)
        },
        gn = Object.freeze({
            default: yn,
            __moduleExports: yn
        }),
        _n = Object.keys || function (t) {
            return ye(t, ge)
        },
        mn = Object.freeze({
            default: _n,
            __moduleExports: _n
        }),
        bn = mn && _n || mn,
        En = O ? Object.defineProperties : function (t, e) {
            M(t);
            for (var n, r = bn(e), o = r.length, i = 0; o > i;) T.f(t, n = r[i++], e[n]);
            return t
        },
        On = Object.freeze({
            default: En,
            __moduleExports: En
        }),
        jn = g.document,
        wn = jn && jn.documentElement,
        xn = Object.freeze({
            default: wn,
            __moduleExports: wn
        }),
        Sn = On && En || On,
        An = xn && wn || xn,
        Mn = fe("IE_PROTO"),
        zn = function () {},
        Nn = function () {
            var t, e = j("iframe"),
                n = ge.length;
            for (e.style.display = "none", An.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Nn = t.F; n--;) delete Nn.prototype[ge[n]];
            return Nn()
        },
        Pn = Object.create || function (t, e) {
            var n;
            return null !== t ? (zn.prototype = M(t), n = new zn, zn.prototype = null, n[Mn] = t) : n = Nn(), void 0 === e ? n : Sn(n, e)
        },
        kn = Object.freeze({
            default: Pn,
            __moduleExports: Pn
        }),
        Ln = fe("IE_PROTO"),
        Fn = Object.prototype,
        In = Object.getPrototypeOf || function (t) {
            return t = we(t), q(t, Ln) ? t[Ln] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Fn : null
        },
        Rn = Object.freeze({
            default: In,
            __moduleExports: In
        }),
        Tn = sn && fn || sn,
        Cn = ze("iterator"),
        Wn = $.getIteratorMethod = function (t) {
            if (void 0 != t) return t[Cn] || t["@@iterator"] || dn[Tn(t)]
        },
        Un = Object.freeze({
            default: Wn,
            __moduleExports: Wn
        }),
        Kn = Array.isArray || function (t) {
            return "Array" == Ct(t)
        },
        Bn = Object.freeze({
            default: Kn,
            __moduleExports: Kn
        }),
        Dn = Bn && Kn || Bn,
        Vn = ze("species"),
        Gn = function (t) {
            var e;
            return Dn(t) && ("function" != typeof (e = t.constructor) || e !== Array && !Dn(e.prototype) || (e = void 0), f(e) && null === (e = e[Vn]) && (e = void 0)), void 0 === e ? Array : e
        },
        Jn = Object.freeze({
            default: Gn,
            __moduleExports: Gn
        }),
        Hn = Jn && Gn || Jn,
        Yn = function (t, e) {
            return new(Hn(t))(e)
        },
        qn = Object.freeze({
            default: Yn,
            __moduleExports: Yn
        }),
        Xn = qn && Yn || qn,
        $n = function (t, e) {
            var n = 1 == t,
                r = 2 == t,
                o = 3 == t,
                i = 4 == t,
                u = 6 == t,
                a = 5 == t || u,
                c = e || Xn;
            return function (e, f, s) {
                for (var l, h, d = we(e), v = Dt(d), p = ut(f, s, 3), y = kt(v.length), g = 0, _ = n ? c(e, y) : r ? c(e, 0) : void 0; y > g; g++)
                    if ((a || g in v) && (h = p(l = v[g], g, d), t))
                        if (n) _[g] = h;
                        else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return l;
                    case 6:
                        return g;
                    case 2:
                        _.push(l)
                } else if (i) return !1;
                return u ? -1 : o || i ? i : _
            }
        },
        Qn = Object.freeze({
            default: $n,
            __moduleExports: $n
        }),
        Zn = ze("unscopables"),
        tr = Array.prototype;
    void 0 == tr[Zn] && Y(tr, Zn, {});
    var er = function (t) {
            tr[Zn][t] = !0
        },
        nr = Object.freeze({
            default: er,
            __moduleExports: er
        }),
        rr = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        },
        or = Object.freeze({
            default: rr,
            __moduleExports: rr
        }),
        ir = kn && Pn || kn,
        ur = {};
    Y(ur, ze("iterator"), function () {
        return this
    });
    var ar = function (t, e, n) {
            t.prototype = ir(ur, {
                next: C(1, n)
            }), Ke(t, e + " Iterator")
        },
        cr = Object.freeze({
            default: ar,
            __moduleExports: ar
        }),
        fr = cr && ar || cr,
        sr = Rn && In || Rn,
        lr = ze("iterator"),
        hr = !([].keys && "next" in [].keys()),
        dr = function () {
            return this
        },
        vr = function (t, e, n, r, o, i, u) {
            fr(n, e, r);
            var a, c, f, s = function (t) {
                    if (!hr && t in v) return v[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                l = e + " Iterator",
                h = "values" == o,
                d = !1,
                v = t.prototype,
                p = v[lr] || v["@@iterator"] || o && v[o],
                y = p || s(o),
                g = o ? h ? s("entries") : y : void 0,
                _ = "Array" == e && v.entries || p;
            if (_ && (f = sr(_.call(new t))) !== Object.prototype && f.next && (Ke(f, l, !0), Fe || "function" == typeof f[lr] || Y(f, lr, dr)), h && p && "values" !== p.name && (d = !0, y = function () {
                    return p.call(this)
                }), Fe && !u || !hr && !d && v[lr] || Y(v, lr, y), dn[e] = y, dn[l] = dr, o)
                if (a = {
                        values: h ? y : s("values"),
                        keys: i ? y : s("keys"),
                        entries: g
                    }, u)
                    for (c in a) c in v || it(v, c, a[c]);
                else Xe(Xe.P + Xe.F * (hr || d), e, a);
            return a
        },
        pr = Object.freeze({
            default: vr,
            __moduleExports: vr
        }),
        yr = nr && er || nr,
        gr = or && rr || or,
        _r = pr && vr || pr,
        mr = _r(Array, "Array", function (t, e) {
            this._t = $t(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return t && t.length > n ? gr(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]) : (this._t = void 0, gr(1))
        }, "values");
    dn.Arguments = dn.Array, yr("keys"), yr("values"), yr("entries");
    var br = ze("iterator"),
        Er = !1;
    try {
        [7][br]().return = function () {
            Er = !0
        }
    } catch (t) {}
    var Or = function (t, e) {
            if (!e && !Er) return !1;
            var n = !1;
            try {
                var r = [7],
                    o = r[br]();
                o.next = function () {
                    return {
                        done: n = !0
                    }
                }, r[br] = function () {
                    return o
                }, t(r)
            } catch (t) {}
            return n
        },
        jr = Object.freeze({
            default: Or,
            __moduleExports: Or
        }),
        wr = [].copyWithin || function (t, e) {
            var n = we(this),
                r = kt(n.length),
                o = Qt(t, r),
                i = Qt(e, r),
                u = arguments.length > 2 ? arguments[2] : void 0,
                a = Math.min((void 0 === u ? r : Qt(u, r)) - i, r - o),
                c = 1;
            for (o > i && i + a > o && (c = -1, i += a - 1, o += a - 1); a-- > 0;) i in n ? n[o] = n[i] : delete n[o], o += c, i += c;
            return n
        },
        xr = Object.freeze({
            default: wr,
            __moduleExports: wr
        }),
        Sr = {}.propertyIsEnumerable,
        Ar = {
            f: Sr
        },
        Mr = Object.freeze({
            default: Ar,
            __moduleExports: Ar,
            f: Sr
        }),
        zr = Mr && Ar || Mr,
        Nr = Object.getOwnPropertyDescriptor,
        Pr = O ? Nr : function (t, e) {
            if (t = $t(t), e = N(e, !0), z) try {
                return Nr(t, e)
            } catch (t) {}
            if (q(t, e)) return C(!zr.f.call(t, e), t[e])
        },
        kr = {
            f: Pr
        },
        Lr = Object.freeze({
            default: kr,
            __moduleExports: kr,
            f: Pr
        }),
        Fr = gn && yn || gn,
        Ir = Un && Wn || Un,
        Rr = Qn && $n || Qn,
        Tr = jr && Or || jr,
        Cr = xr && wr || xr,
        Wr = Lr && kr || Lr,
        Ur = n(function (t) {
            if (O) {
                var e = Fe,
                    n = g,
                    r = v,
                    o = Xe,
                    i = Ie,
                    u = ut,
                    a = Te,
                    c = C,
                    s = Y,
                    l = Re,
                    h = Mt,
                    d = kt,
                    p = Ce,
                    y = Qt,
                    _ = N,
                    m = q,
                    b = Tn,
                    E = f,
                    j = we,
                    w = Fr,
                    x = ir,
                    S = sr,
                    A = We.f,
                    M = Ir,
                    z = X,
                    P = ze,
                    k = Rr,
                    L = ce,
                    F = Qe,
                    I = mr,
                    R = dn,
                    W = Tr,
                    U = Ze,
                    K = Ue,
                    B = Cr,
                    D = T,
                    V = Wr,
                    G = D.f,
                    J = V.f,
                    H = n.RangeError,
                    $ = n.TypeError,
                    Q = n.Uint8Array,
                    Z = Array.prototype,
                    tt = $e.ArrayBuffer,
                    et = $e.DataView,
                    nt = k(0),
                    rt = k(2),
                    ot = k(3),
                    it = k(4),
                    at = k(5),
                    ct = k(6),
                    ft = L(!0),
                    st = L(!1),
                    lt = I.values,
                    ht = I.keys,
                    dt = I.entries,
                    vt = Z.lastIndexOf,
                    pt = Z.reduce,
                    yt = Z.reduceRight,
                    gt = Z.join,
                    _t = Z.sort,
                    mt = Z.slice,
                    bt = Z.toString,
                    Et = Z.toLocaleString,
                    Ot = P("iterator"),
                    jt = P("toStringTag"),
                    wt = z("typed_constructor"),
                    xt = z("def_constructor"),
                    St = i.CONSTR,
                    At = i.TYPED,
                    zt = i.VIEW,
                    Nt = k(1, function (t, e) {
                        return Rt(F(t, t[xt]), e)
                    }),
                    Pt = r(function () {
                        return 1 === new Q(new Uint16Array([1]).buffer)[0]
                    }),
                    Lt = !!Q && !!Q.prototype.set && r(function () {
                        new Q(1).set({})
                    }),
                    Ft = function (t, e) {
                        var n = h(t);
                        if (0 > n || n % e) throw H("Wrong offset!");
                        return n
                    },
                    It = function (t) {
                        if (E(t) && At in t) return t;
                        throw $(t + " is not a typed array!")
                    },
                    Rt = function (t, e) {
                        if (!(E(t) && wt in t)) throw $("It is not a typed array constructor!");
                        return new t(e)
                    },
                    Tt = function (t, e) {
                        return Ct(F(t, t[xt]), e)
                    },
                    Ct = function (t, e) {
                        for (var n = 0, r = e.length, o = Rt(t, r); r > n;) o[n] = e[n++];
                        return o
                    },
                    Wt = function (t, e, n) {
                        G(t, e, {
                            get: function () {
                                return this._d[n]
                            }
                        })
                    },
                    Ut = function (t) {
                        var e, n, r, o, i, a, c = j(t),
                            f = arguments.length,
                            s = f > 1 ? arguments[1] : void 0,
                            l = void 0 !== s,
                            h = M(c);
                        if (void 0 != h && !w(h)) {
                            for (a = h.call(c), r = [], e = 0; !(i = a.next()).done; e++) r.push(i.value);
                            c = r
                        }
                        for (l && f > 2 && (s = u(s, arguments[2], 2)), e = 0, n = d(c.length), o = Rt(this, n); n > e; e++) o[e] = l ? s(c[e], e) : c[e];
                        return o
                    },
                    Kt = function () {
                        for (var t = 0, e = arguments.length, n = Rt(this, e); e > t;) n[t] = arguments[t++];
                        return n
                    },
                    Bt = !!Q && r(function () {
                        Et.call(new Q(1))
                    }),
                    Dt = function () {
                        return Et.apply(Bt ? mt.call(It(this)) : It(this), arguments)
                    },
                    Vt = {
                        copyWithin: function (t, e) {
                            return B.call(It(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        every: function (t) {
                            return it(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        fill: function (t) {
                            return K.apply(It(this), arguments)
                        },
                        filter: function (t) {
                            return Tt(this, rt(It(this), t, arguments.length > 1 ? arguments[1] : void 0))
                        },
                        find: function (t) {
                            return at(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        findIndex: function (t) {
                            return ct(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        forEach: function (t) {
                            nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        indexOf: function (t) {
                            return st(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        includes: function (t) {
                            return ft(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        join: function (t) {
                            return gt.apply(It(this), arguments)
                        },
                        lastIndexOf: function (t) {
                            return vt.apply(It(this), arguments)
                        },
                        map: function (t) {
                            return Nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        reduce: function (t) {
                            return pt.apply(It(this), arguments)
                        },
                        reduceRight: function (t) {
                            return yt.apply(It(this), arguments)
                        },
                        reverse: function () {
                            for (var t, e = It(this).length, n = Math.floor(e / 2), r = 0; n > r;) t = this[r], this[r++] = this[--e], this[e] = t;
                            return this
                        },
                        some: function (t) {
                            return ot(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        sort: function (t) {
                            return _t.call(It(this), t)
                        },
                        subarray: function (t, e) {
                            var n = It(this),
                                r = n.length,
                                o = y(t, r);
                            return new(F(n, n[xt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, d((void 0 === e ? r : y(e, r)) - o))
                        }
                    },
                    Gt = function (t, e) {
                        return Tt(this, mt.call(It(this), t, e))
                    },
                    Jt = function (t) {
                        It(this);
                        var e = Ft(arguments[1], 1),
                            n = this.length,
                            r = j(t),
                            o = d(r.length),
                            i = 0;
                        if (o + e > n) throw H("Wrong length!");
                        for (; o > i;) this[e + i] = r[i++]
                    },
                    Ht = {
                        entries: function () {
                            return dt.call(It(this))
                        },
                        keys: function () {
                            return ht.call(It(this))
                        },
                        values: function () {
                            return lt.call(It(this))
                        }
                    },
                    Yt = function (t, e) {
                        return E(t) && t[At] && "symbol" != typeof e && e in t && +e + "" == e + ""
                    },
                    qt = function (t, e) {
                        return Yt(t, e = _(e, !0)) ? c(2, t[e]) : J(t, e)
                    },
                    Xt = function (t, e, n) {
                        return !(Yt(t, e = _(e, !0)) && E(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? G(t, e, n) : (t[e] = n.value, t)
                    };
                St || (V.f = qt, D.f = Xt), o(o.S + o.F * !St, "Object", {
                    getOwnPropertyDescriptor: qt,
                    defineProperty: Xt
                }), r(function () {
                    bt.call({})
                }) && (bt = Et = function () {
                    return gt.call(this)
                });
                var $t = l({}, Vt);
                l($t, Ht), s($t, Ot, Ht.values), l($t, {
                    slice: Gt,
                    set: Jt,
                    constructor: function () {},
                    toString: bt,
                    toLocaleString: Dt
                }), Wt($t, "buffer", "b"), Wt($t, "byteOffset", "o"), Wt($t, "byteLength", "l"), Wt($t, "length", "e"), G($t, jt, {
                    get: function () {
                        return this[At]
                    }
                }), t.exports = function (t, u, c, f) {
                    var l = t + ((f = !!f) ? "Clamped" : "") + "Array",
                        h = "get" + t,
                        v = "set" + t,
                        y = n[l],
                        g = y || {},
                        _ = y && S(y),
                        m = {},
                        O = y && y.prototype,
                        j = function (t, e) {
                            G(t, e, {
                                get: function () {
                                    return function (t, e) {
                                        var n = t._d;
                                        return n.v[h](e * u + n.o, Pt)
                                    }(this, e)
                                },
                                set: function (t) {
                                    return function (t, e, n) {
                                        var r = t._d;
                                        f && (n = 0 > (n = Math.round(n)) ? 0 : n > 255 ? 255 : 255 & n), r.v[v](e * u + r.o, n, Pt)
                                    }(this, e, t)
                                },
                                enumerable: !0
                            })
                        };
                    !y || !i.ABV ? (y = c(function (t, e, n, r) {
                        a(t, y, l, "_d");
                        var o, i, c, f, h = 0,
                            v = 0;
                        if (E(e)) {
                            if (!(e instanceof tt || "ArrayBuffer" == (f = b(e)) || "SharedArrayBuffer" == f)) return At in e ? Ct(y, e) : Ut.call(y, e);
                            o = e, v = Ft(n, u);
                            var g = e.byteLength;
                            if (void 0 === r) {
                                if (g % u) throw H("Wrong length!");
                                if (0 > (i = g - v)) throw H("Wrong length!")
                            } else if ((i = d(r) * u) + v > g) throw H("Wrong length!");
                            c = i / u
                        } else c = p(e), o = new tt(i = c * u);
                        for (s(t, "_d", {
                                b: o,
                                o: v,
                                l: i,
                                e: c,
                                v: new et(o)
                            }); c > h;) j(t, h++)
                    }), O = y.prototype = x($t), s(O, "constructor", y)) : r(function () {
                        y(1)
                    }) && r(function () {
                        new y(-1)
                    }) && W(function (t) {
                        new y, new y(null), new y(1.5), new y(t)
                    }, !0) || (y = c(function (t, e, n, r) {
                        var o;
                        return a(t, y, l), E(e) ? e instanceof tt || "ArrayBuffer" == (o = b(e)) || "SharedArrayBuffer" == o ? void 0 !== r ? new g(e, Ft(n, u), r) : void 0 !== n ? new g(e, Ft(n, u)) : new g(e) : At in e ? Ct(y, e) : Ut.call(y, e) : new g(p(e))
                    }), nt(_ !== Function.prototype ? A(g).concat(A(_)) : A(g), function (t) {
                        t in y || s(y, t, g[t])
                    }), y.prototype = O, e || (O.constructor = y));
                    var w = O[Ot],
                        M = !!w && ("values" == w.name || void 0 == w.name),
                        z = Ht.values;
                    s(y, wt, !0), s(O, At, l), s(O, zt, !0), s(O, xt, y), (f ? new y(1)[jt] == l : jt in O) || G(O, jt, {
                        get: function () {
                            return l
                        }
                    }), m[l] = y, o(o.G + o.W + o.F * (y != g), m), o(o.S, l, {
                        BYTES_PER_ELEMENT: u
                    }), o(o.S + o.F * r(function () {
                        g.of.call(y, 1)
                    }), l, {
                        from: Ut,
                        of: Kt
                    }), "BYTES_PER_ELEMENT" in O || s(O, "BYTES_PER_ELEMENT", u), o(o.P, l, Vt), U(l), o(o.P + o.F * Lt, l, {
                        set: Jt
                    }), o(o.P + o.F * !M, l, Ht), e || O.toString == bt || (O.toString = bt), o(o.P + o.F * r(function () {
                        new y(1).slice()
                    }), l, {
                        slice: Gt
                    }), o(o.P + o.F * (r(function () {
                        return [1, 2].toLocaleString() != new y([1, 2]).toLocaleString()
                    }) || !r(function () {
                        O.toLocaleString.call([1, 2])
                    })), l, {
                        toLocaleString: Dt
                    }), R[l] = M ? w : z, e || M || s(O, Ot, z)
                }
            } else t.exports = function () {}
        }),
        Kr = Object.freeze({
            default: Ur,
            __moduleExports: Ur
        }),
        Br = Kr && Ur || Kr;
    Br("Int8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Uint8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Uint8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }, !0), Br("Int16", 2, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Uint16", 2, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Int32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Uint32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Float32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }), Br("Float64", 8, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    });
    var Dr = function (t, e, n, r) {
            try {
                return r ? e(M(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && M(o.call(t)), e
            }
        },
        Vr = Object.freeze({
            default: Dr,
            __moduleExports: Dr
        }),
        Gr = Vr && Dr || Vr,
        Jr = n(function (t) {
            var e = {},
                n = {},
                r = t.exports = function (t, r, o, i, u) {
                    var a, c, f, s, l = u ? function () {
                            return t
                        } : Ir(t),
                        h = ut(o, i, r ? 2 : 1),
                        d = 0;
                    if ("function" != typeof l) throw TypeError(t + " is not iterable!");
                    if (Fr(l)) {
                        for (a = kt(t.length); a > d; d++)
                            if ((s = r ? h(M(c = t[d])[0], c[1]) : h(t[d])) === e || s === n) return s
                    } else
                        for (f = l.call(t); !(c = f.next()).done;)
                            if ((s = Gr(f, h, c.value, r)) === e || s === n) return s
                };
            r.BREAK = e, r.RETURN = n
        }),
        Hr = Object.freeze({
            default: Jr,
            __moduleExports: Jr
        }),
        Yr = n(function (t) {
            var e = X("meta"),
                n = T.f,
                r = 0,
                o = Object.isExtensible || function () {
                    return !0
                },
                i = !v(function () {
                    return o(Object.preventExtensions({}))
                }),
                u = function (t) {
                    n(t, e, {
                        value: {
                            i: "O" + ++r,
                            w: {}
                        }
                    })
                },
                a = t.exports = {
                    KEY: e,
                    NEED: !1,
                    fastKey: function (t, n) {
                        if (!f(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!q(t, e)) {
                            if (!o(t)) return "F";
                            if (!n) return "E";
                            u(t)
                        }
                        return t[e].i
                    },
                    getWeak: function (t, n) {
                        if (!q(t, e)) {
                            if (!o(t)) return !0;
                            if (!n) return !1;
                            u(t)
                        }
                        return t[e].w
                    },
                    onFreeze: function (t) {
                        return i && a.NEED && o(t) && !q(t, e) && u(t), t
                    }
                }
        }),
        qr = Object.freeze({
            default: Yr,
            __moduleExports: Yr,
            KEY: Yr.KEY,
            NEED: Yr.NEED,
            fastKey: Yr.fastKey,
            getWeak: Yr.getWeak,
            onFreeze: Yr.onFreeze
        }),
        Xr = function (t, e) {
            if (!f(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        },
        $r = Object.freeze({
            default: Xr,
            __moduleExports: Xr
        }),
        Qr = Hr && Jr || Hr,
        Zr = qr && Yr || qr,
        to = $r && Xr || $r,
        eo = T.f,
        no = Zr.fastKey,
        ro = O ? "_s" : "size",
        oo = function (t, e) {
            var n, r = no(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        },
        io = {
            getConstructor: function (t, e, n, r) {
                var o = t(function (t, i) {
                    Te(t, o, e, "_i"), t._t = e, t._i = ir(null), t._f = void 0, t._l = void 0, t[ro] = 0, void 0 != i && Qr(i, n, t[r], t)
                });
                return Re(o.prototype, {
                    clear: function () {
                        for (var t = to(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                        t._f = t._l = void 0, t[ro] = 0
                    },
                    delete: function (t) {
                        var n = to(this, e),
                            r = oo(n, t);
                        if (r) {
                            var o = r.n,
                                i = r.p;
                            delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[ro]--
                        }
                        return !!r
                    },
                    forEach: function (t) {
                        to(this, e);
                        for (var n, r = ut(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (t) {
                        return !!oo(to(this, e), t)
                    }
                }), O && eo(o.prototype, "size", {
                    get: function () {
                        return to(this, e)[ro]
                    }
                }), o
            },
            def: function (t, e, n) {
                var r, o, i = oo(t, e);
                return i ? i.v = n : (t._l = i = {
                    i: o = no(e, !0),
                    k: e,
                    v: n,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), r && (r.n = i), t[ro]++, "F" !== o && (t._i[o] = i)), t
            },
            getEntry: oo,
            setStrong: function (t, e, n) {
                _r(t, e, function (t, n) {
                    this._t = to(t, e), this._k = n, this._l = void 0
                }, function () {
                    for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                    return this._t && (this._l = e = e ? e.n : this._t._f) ? gr(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, gr(1))
                }, n ? "entries" : "values", !n, !0), Ze(e)
            }
        },
        uo = Object.freeze({
            default: io,
            __moduleExports: io,
            getConstructor: io.getConstructor,
            def: io.def,
            getEntry: io.getEntry,
            setStrong: io.setStrong
        }),
        ao = function (t, e) {
            if (M(t), !f(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        },
        co = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
                try {
                    (n = ut(Function.call, Wr.f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, r) {
                    return ao(t, r), e ? t.__proto__ = r : n(t, r), t
                }
            }({}, !1) : void 0),
            check: ao
        },
        fo = Object.freeze({
            default: co,
            __moduleExports: co,
            set: co.set,
            check: co.check
        }),
        so = fo && co || fo,
        lo = so.set,
        ho = function (t, e, n) {
            var r, o = e.constructor;
            return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && f(r) && lo && lo(t, r), t
        },
        vo = Object.freeze({
            default: ho,
            __moduleExports: ho
        }),
        po = vo && ho || vo,
        yo = function (t, e, n, r, o, i) {
            var u = g[t],
                a = u,
                c = o ? "set" : "add",
                s = a && a.prototype,
                l = {},
                h = function (t) {
                    var e = s[t];
                    it(s, t, "delete" == t ? function (t) {
                        return !(i && !f(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function (t) {
                        return !(i && !f(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function (t) {
                        return i && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function (t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : function (t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                    })
                };
            if ("function" == typeof a && (i || s.forEach && !v(function () {
                    (new a).entries().next()
                }))) {
                var d = new a,
                    p = d[c](i ? {} : -0, 1) != d,
                    y = v(function () {
                        d.has(1)
                    }),
                    _ = Tr(function (t) {
                        new a(t)
                    }),
                    m = !i && v(function () {
                        for (var t = new a, e = 5; e--;) t[c](e, e);
                        return !t.has(-0)
                    });
                _ || ((a = e(function (e, n) {
                    Te(e, a, t);
                    var r = po(new u, e, a);
                    return void 0 != n && Qr(n, o, r[c], r), r
                })).prototype = s, s.constructor = a), (y || m) && (h("delete"), h("has"), o && h("get")), (m || p) && h(c), i && s.clear && delete s.clear
            } else a = r.getConstructor(e, t, o, c), Re(a.prototype, n), Zr.NEED = !0;
            return Ke(a, t), l[t] = a, Xe(Xe.G + Xe.W + Xe.F * (a != u), l), i || r.setStrong(a, t, o), a
        },
        go = Object.freeze({
            default: yo,
            __moduleExports: yo
        }),
        _o = uo && io || uo,
        mo = go && yo || go,
        bo = (mo("Map", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function (t) {
                var e = _o.getEntry(to(this, "Map"), t);
                return e && e.v
            },
            set: function (t, e) {
                return _o.def(to(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, _o, !0), mo("Set", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function (t) {
                return _o.def(to(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, _o), Object.getOwnPropertySymbols),
        Eo = {
            f: bo
        },
        Oo = Object.freeze({
            default: Eo,
            __moduleExports: Eo,
            f: bo
        }),
        jo = Oo && Eo || Oo,
        wo = Object.assign,
        xo = !wo || v(function () {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
                e[t] = t
            }), 7 != wo({}, t)[n] || Object.keys(wo({}, e)).join("") != r
        }) ? function (t, e) {
            for (var n = we(t), r = arguments.length, o = 1, i = jo.f, u = zr.f; r > o;)
                for (var a, c = Dt(arguments[o++]), f = i ? bn(c).concat(i(c)) : bn(c), s = f.length, l = 0; s > l;) u.call(c, a = f[l++]) && (n[a] = c[a]);
            return n
        } : wo,
        So = Object.freeze({
            default: xo,
            __moduleExports: xo
        }),
        Ao = Zr.getWeak,
        Mo = Rr(5),
        zo = Rr(6),
        No = 0,
        Po = function (t) {
            return t._l || (t._l = new ko)
        },
        ko = function () {
            this.a = []
        },
        Lo = function (t, e) {
            return Mo(t.a, function (t) {
                return t[0] === e
            })
        };
    ko.prototype = {
        get: function (t) {
            var e = Lo(this, t);
            if (e) return e[1]
        },
        has: function (t) {
            return !!Lo(this, t)
        },
        set: function (t, e) {
            var n = Lo(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function (t) {
            var e = zo(this.a, function (e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    };
    var Fo = {
            getConstructor: function (t, e, n, r) {
                var o = t(function (t, i) {
                    Te(t, o, e, "_i"), t._t = e, t._i = No++, t._l = void 0, void 0 != i && Qr(i, n, t[r], t)
                });
                return Re(o.prototype, {
                    delete: function (t) {
                        if (!f(t)) return !1;
                        var n = Ao(t);
                        return !0 === n ? Po(to(this, e)).delete(t) : n && q(n, this._i) && delete n[this._i]
                    },
                    has: function (t) {
                        if (!f(t)) return !1;
                        var n = Ao(t);
                        return !0 === n ? Po(to(this, e)).has(t) : n && q(n, this._i)
                    }
                }), o
            },
            def: function (t, e, n) {
                var r = Ao(M(e), !0);
                return !0 === r ? Po(t).set(e, n) : r[t._i] = n, t
            },
            ufstore: Po
        },
        Io = Object.freeze({
            default: Fo,
            __moduleExports: Fo,
            getConstructor: Fo.getConstructor,
            def: Fo.def,
            ufstore: Fo.ufstore
        }),
        Ro = So && xo || So,
        To = Io && Fo || Io;
    n(function (t) {
        var e, n = Rr(0),
            r = Zr.getWeak,
            o = Object.isExtensible,
            i = To.ufstore,
            u = {},
            a = function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            c = {
                get: function (t) {
                    if (f(t)) {
                        var e = r(t);
                        return !0 === e ? i(to(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                    }
                },
                set: function (t, e) {
                    return To.def(to(this, "WeakMap"), t, e)
                }
            },
            s = t.exports = mo("WeakMap", a, c, To, !0, !0);
        v(function () {
            return 7 != (new s).set((Object.freeze || Object)(u), 7).get(u)
        }) && (e = To.getConstructor(a, "WeakMap"), Ro(e.prototype, c), Zr.NEED = !0, n(["delete", "has", "get", "set"], function (t) {
            var n = s.prototype,
                r = n[t];
            it(n, t, function (n, i) {
                if (f(n) && !o(n)) {
                    this._f || (this._f = new e);
                    var u = this._f[t](n, i);
                    return "set" == t ? this : u
                }
                return r.call(this, n, i)
            })
        }))
    });
    mo("WeakSet", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return To.def(to(this, "WeakSet"), t, !0)
        }
    }, To, !1, !0);
    var Co = (g.Reflect || {}).apply,
        Wo = Function.apply;
    Xe(Xe.S + Xe.F * !v(function () {
        Co(function () {})
    }), "Reflect", {
        apply: function (t, e, n) {
            var r = nt(t),
                o = M(n);
            return Co ? Co(r, e, o) : Wo.call(r, e, o)
        }
    });
    var Uo = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        },
        Ko = Object.freeze({
            default: Uo,
            __moduleExports: Uo
        }),
        Bo = Ko && Uo || Ko,
        Do = [].slice,
        Vo = {},
        Go = Function.bind || function (t) {
            var e = nt(this),
                n = Do.call(arguments, 1),
                r = function () {
                    var o = n.concat(Do.call(arguments));
                    return this instanceof r ? function (t, e, n) {
                        if (!(e in Vo)) {
                            for (var r = [], o = 0; e > o; o++) r[o] = "a[" + o + "]";
                            Vo[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                        }
                        return Vo[e](t, n)
                    }(e, o.length, o) : Bo(e, o, t)
                };
            return f(e.prototype) && (r.prototype = e.prototype), r
        },
        Jo = Object.freeze({
            default: Go,
            __moduleExports: Go
        }),
        Ho = Jo && Go || Jo,
        Yo = (g.Reflect || {}).construct,
        qo = v(function () {
            function t() {}
            return !(Yo(function () {}, [], t) instanceof t)
        }),
        Xo = !v(function () {
            Yo(function () {})
        });
    Xe(Xe.S + Xe.F * (qo || Xo), "Reflect", {
        construct: function (t, e) {
            nt(t), M(e);
            var n = 3 > arguments.length ? t : nt(arguments[2]);
            if (Xo && !qo) return Yo(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(Ho.apply(t, r))
            }
            var o = n.prototype,
                i = ir(f(o) ? o : Object.prototype),
                u = Function.apply.call(t, i, e);
            return f(u) ? u : i
        }
    }), Xe(Xe.S + Xe.F * v(function () {
        Reflect.defineProperty(T.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function (t, e, n) {
            M(t), e = N(e, !0), M(n);
            try {
                return T.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    });
    var $o = Wr.f;
    Xe(Xe.S, "Reflect", {
        deleteProperty: function (t, e) {
            var n = $o(M(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    }), Xe(Xe.S, "Reflect", {
        get: function t(e, n) {
            var r, o, i = 3 > arguments.length ? e : arguments[2];
            return M(e) === i ? e[n] : (r = Wr.f(e, n)) ? q(r, "value") ? r.value : void 0 !== r.get ? r.get.call(i) : void 0 : f(o = sr(e)) ? t(o, n, i) : void 0
        }
    }), Xe(Xe.S, "Reflect", {
        getOwnPropertyDescriptor: function (t, e) {
            return Wr.f(M(t), e)
        }
    }), Xe(Xe.S, "Reflect", {
        getPrototypeOf: function (t) {
            return sr(M(t))
        }
    }), Xe(Xe.S, "Reflect", {
        has: function (t, e) {
            return e in t
        }
    });
    var Qo = Object.isExtensible;
    Xe(Xe.S, "Reflect", {
        isExtensible: function (t) {
            return M(t), !Qo || Qo(t)
        }
    });
    var Zo = g.Reflect,
        ti = Zo && Zo.ownKeys || function (t) {
            var e = We.f(M(t)),
                n = jo.f;
            return n ? e.concat(n(t)) : e
        },
        ei = Object.freeze({
            default: ti,
            __moduleExports: ti
        }),
        ni = ei && ti || ei;
    Xe(Xe.S, "Reflect", {
        ownKeys: ni
    });
    var ri = Object.preventExtensions;
    Xe(Xe.S, "Reflect", {
        preventExtensions: function (t) {
            M(t);
            try {
                return ri && ri(t), !0
            } catch (t) {
                return !1
            }
        }
    }), Xe(Xe.S, "Reflect", {
        set: function t(e, n, r) {
            var o, i, u = 4 > arguments.length ? e : arguments[3],
                a = Wr.f(M(e), n);
            if (!a) {
                if (f(i = sr(e))) return t(i, n, r, u);
                a = C(0)
            }
            if (q(a, "value")) {
                if (!1 === a.writable || !f(u)) return !1;
                if (o = Wr.f(u, n)) {
                    if (o.get || o.set || !1 === o.writable) return !1;
                    o.value = r, T.f(u, n, o)
                } else T.f(u, n, C(0, r));
                return !0
            }
            return void 0 !== a.set && (a.set.call(u, r), !0)
        }
    }), so && Xe(Xe.S, "Reflect", {
        setPrototypeOf: function (t, e) {
            so.check(t, e);
            try {
                return so.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    });
    var oi, ii, ui, ai = g.process,
        ci = g.setImmediate,
        fi = g.clearImmediate,
        si = g.MessageChannel,
        li = g.Dispatch,
        hi = 0,
        di = {},
        vi = function () {
            var t = +this;
            if (di.hasOwnProperty(t)) {
                var e = di[t];
                delete di[t], e()
            }
        },
        pi = function (t) {
            vi.call(t.data)
        };
    ci && fi || (ci = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return di[++hi] = function () {
            Bo("function" == typeof t ? t : Function(t), e)
        }, oi(hi), hi
    }, fi = function (t) {
        delete di[t]
    }, "process" == Ct(ai) ? oi = function (t) {
        ai.nextTick(ut(vi, t, 1))
    } : li && li.now ? oi = function (t) {
        li.now(ut(vi, t, 1))
    } : si ? (ui = (ii = new si).port2, ii.port1.onmessage = pi, oi = ut(ui.postMessage, ui, 1)) : g.addEventListener && "function" == typeof postMessage && !g.importScripts ? (oi = function (t) {
        g.postMessage(t + "", "*")
    }, g.addEventListener("message", pi, !1)) : oi = "onreadystatechange" in j("script") ? function (t) {
        An.appendChild(j("script")).onreadystatechange = function () {
            An.removeChild(this), vi.call(t)
        }
    } : function (t) {
        setTimeout(ut(vi, t, 1), 0)
    });
    var yi = {
            set: ci,
            clear: fi
        },
        gi = Object.freeze({
            default: yi,
            __moduleExports: yi,
            set: yi.set,
            clear: yi.clear
        }),
        _i = gi && yi || gi,
        mi = _i.set,
        bi = g.MutationObserver || g.WebKitMutationObserver,
        Ei = g.process,
        Oi = g.Promise,
        ji = "process" == Ct(Ei),
        wi = function () {
            var t, e, n, r = function () {
                var r, o;
                for (ji && (r = Ei.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (ji) n = function () {
                Ei.nextTick(r)
            };
            else if (!bi || g.navigator && g.navigator.standalone)
                if (Oi && Oi.resolve) {
                    var o = Oi.resolve();
                    n = function () {
                        o.then(r)
                    }
                } else n = function () {
                    mi.call(g, r)
                };
            else {
                var i = !0,
                    u = document.createTextNode("");
                new bi(r).observe(u, {
                    characterData: !0
                }), n = function () {
                    u.data = i = !i
                }
            }
            return function (r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = o), t || (t = o, n()), e = o
            }
        },
        xi = Object.freeze({
            default: wi,
            __moduleExports: wi
        });
    var Si, Ai, Mi, zi, Ni = function (t) {
            return new function (t) {
                var e, n;
                this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = r
                }), this.resolve = nt(e), this.reject = nt(n)
            }(t)
        },
        Pi = {
            f: Ni
        },
        ki = Object.freeze({
            default: Pi,
            __moduleExports: Pi,
            f: Ni
        }),
        Li = function (t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        },
        Fi = Object.freeze({
            default: Li,
            __moduleExports: Li
        }),
        Ii = ki && Pi || ki,
        Ri = function (t, e) {
            if (M(t), f(e) && e.constructor === t) return e;
            var n = Ii.f(t);
            return (0, n.resolve)(e), n.promise
        },
        Ti = Object.freeze({
            default: Ri,
            __moduleExports: Ri
        }),
        Ci = Fi && Li || Fi,
        Wi = Ti && Ri || Ti,
        Ui = _i.set,
        Ki = (xi && wi || xi)(),
        Bi = g.TypeError,
        Di = g.process,
        Vi = g.Promise,
        Gi = "process" == Tn(Di),
        Ji = function () {},
        Hi = Ai = Ii.f,
        Yi = !! function () {
            try {
                var t = Vi.resolve(1),
                    e = (t.constructor = {})[ze("species")] = function (t) {
                        t(Ji, Ji)
                    };
                return (Gi || "function" == typeof PromiseRejectionEvent) && t.then(Ji) instanceof e
            } catch (t) {}
        }(),
        qi = function (t) {
            var e;
            return !(!f(t) || "function" != typeof (e = t.then)) && e
        },
        Xi = function (t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                Ki(function () {
                    for (var r = t._v, o = 1 == t._s, i = 0, u = function (e) {
                            var n, i, u, a = o ? e.ok : e.fail,
                                c = e.resolve,
                                f = e.reject,
                                s = e.domain;
                            try {
                                a ? (o || (2 == t._h && Zi(t), t._h = 1), !0 === a ? n = r : (s && s.enter(), n = a(r), s && (s.exit(), u = !0)), n === e.promise ? f(Bi("Promise-chain cycle")) : (i = qi(n)) ? i.call(n, c, f) : c(n)) : f(r)
                            } catch (t) {
                                s && !u && s.exit(), f(t)
                            }
                        }; n.length > i;) u(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && $i(t)
                })
            }
        },
        $i = function (t) {
            Ui.call(g, function () {
                var e, n, r, o = t._v,
                    i = Qi(t);
                if (i && (e = Ci(function () {
                        Gi ? Di.emit("unhandledRejection", o, t) : (n = g.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (r = g.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = Gi || Qi(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
            })
        },
        Qi = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        Zi = function (t) {
            Ui.call(g, function () {
                var e;
                Gi ? Di.emit("rejectionHandled", t) : (e = g.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        tu = function (t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), Xi(e, !0))
        },
        eu = function (t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw Bi("Promise can't be resolved itself");
                    (e = qi(t)) ? Ki(function () {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, ut(eu, r, 1), ut(tu, r, 1))
                        } catch (t) {
                            tu.call(r, t)
                        }
                    }): (n._v = t, n._s = 1, Xi(n, !1))
                } catch (t) {
                    tu.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    Yi || (Vi = function (t) {
        Te(this, Vi, "Promise", "_h"), nt(t), Si.call(this);
        try {
            t(ut(eu, this, 1), ut(tu, this, 1))
        } catch (t) {
            tu.call(this, t)
        }
    }, (Si = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = Re(Vi.prototype, {
        then: function (t, e) {
            var n = Hi(Qe(this, Vi));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = Gi ? Di.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Xi(this, !1), n.promise
        },
        catch: function (t) {
            return this.then(void 0, t)
        }
    }), Mi = function () {
        var t = new Si;
        this.promise = t, this.resolve = ut(eu, t, 1), this.reject = ut(tu, t, 1)
    }, Ii.f = Hi = function (t) {
        return t === Vi || t === zi ? new Mi(t) : Ai(t)
    }), Xe(Xe.G + Xe.W + Xe.F * !Yi, {
        Promise: Vi
    }), Ke(Vi, "Promise"), Ze("Promise"), zi = $.Promise, Xe(Xe.S + Xe.F * !Yi, "Promise", {
        reject: function (t) {
            var e = Hi(this);
            return (0, e.reject)(t), e.promise
        }
    }), Xe(Xe.S + Xe.F * (Fe || !Yi), "Promise", {
        resolve: function (t) {
            return Wi(Fe && this === zi ? Vi : this, t)
        }
    }), Xe(Xe.S + Xe.F * !(Yi && Tr(function (t) {
        Vi.all(t).catch(Ji)
    })), "Promise", {
        all: function (t) {
            var e = this,
                n = Hi(e),
                r = n.resolve,
                o = n.reject,
                i = Ci(function () {
                    var n = [],
                        i = 0,
                        u = 1;
                    Qr(t, !1, function (t) {
                        var a = i++,
                            c = !1;
                        n.push(void 0), u++, e.resolve(t).then(function (t) {
                            c || (c = !0, n[a] = t, --u || r(n))
                        }, o)
                    }), --u || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function (t) {
            var e = this,
                n = Hi(e),
                r = n.reject,
                o = Ci(function () {
                    Qr(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    });
    var nu = {
            f: ze
        },
        ru = Object.freeze({
            default: nu,
            __moduleExports: nu,
            f: ze
        }),
        ou = ru && nu || ru,
        iu = T.f,
        uu = function (t) {
            var e = $.Symbol || ($.Symbol = Fe ? {} : g.Symbol || {});
            "_" == t.charAt(0) || t in e || iu(e, t, {
                value: ou.f(t)
            })
        },
        au = Object.freeze({
            default: uu,
            __moduleExports: uu
        }),
        cu = function (t) {
            var e = bn(t),
                n = jo.f;
            if (n)
                for (var r, o = n(t), i = zr.f, u = 0; o.length > u;) i.call(t, r = o[u++]) && e.push(r);
            return e
        },
        fu = Object.freeze({
            default: cu,
            __moduleExports: cu
        }),
        su = We.f,
        lu = {}.toString,
        hu = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        du = function (t) {
            return hu && "[object Window]" == lu.call(t) ? function (t) {
                try {
                    return su(t)
                } catch (t) {
                    return hu.slice()
                }
            }(t) : su($t(t))
        },
        vu = {
            f: du
        },
        pu = Object.freeze({
            default: vu,
            __moduleExports: vu,
            f: du
        }),
        yu = au && uu || au,
        gu = fu && cu || fu,
        _u = pu && vu || pu,
        mu = Zr.KEY,
        bu = Wr.f,
        Eu = T.f,
        Ou = _u.f,
        ju = g.Symbol,
        wu = g.JSON,
        xu = wu && wu.stringify,
        Su = ze("_hidden"),
        Au = ze("toPrimitive"),
        Mu = {}.propertyIsEnumerable,
        zu = oe("symbol-registry"),
        Nu = oe("symbols"),
        Pu = oe("op-symbols"),
        ku = Object.prototype,
        Lu = "function" == typeof ju,
        Fu = g.QObject,
        Iu = !Fu || !Fu.prototype || !Fu.prototype.findChild,
        Ru = O && v(function () {
            return 7 != ir(Eu({}, "a", {
                get: function () {
                    return Eu(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (t, e, n) {
            var r = bu(ku, e);
            r && delete ku[e], Eu(t, e, n), r && t !== ku && Eu(ku, e, r)
        } : Eu,
        Tu = function (t) {
            var e = Nu[t] = ir(ju.prototype);
            return e._k = t, e
        },
        Cu = Lu && "symbol" == typeof ju.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof ju
        },
        Wu = function (t, e, n) {
            return t === ku && Wu(Pu, e, n), M(t), e = N(e, !0), M(n), q(Nu, e) ? (n.enumerable ? (q(t, Su) && t[Su][e] && (t[Su][e] = !1), n = ir(n, {
                enumerable: C(0, !1)
            })) : (q(t, Su) || Eu(t, Su, C(1, {})), t[Su][e] = !0), Ru(t, e, n)) : Eu(t, e, n)
        },
        Uu = function (t, e) {
            M(t);
            for (var n, r = gu(e = $t(e)), o = 0, i = r.length; i > o;) Wu(t, n = r[o++], e[n]);
            return t
        },
        Ku = function (t) {
            var e = Mu.call(this, t = N(t, !0));
            return !(this === ku && q(Nu, t) && !q(Pu, t)) && (!(e || !q(this, t) || !q(Nu, t) || q(this, Su) && this[Su][t]) || e)
        },
        Bu = function (t, e) {
            if (t = $t(t), e = N(e, !0), t !== ku || !q(Nu, e) || q(Pu, e)) {
                var n = bu(t, e);
                return !n || !q(Nu, e) || q(t, Su) && t[Su][e] || (n.enumerable = !0), n
            }
        },
        Du = function (t) {
            for (var e, n = Ou($t(t)), r = [], o = 0; n.length > o;) q(Nu, e = n[o++]) || e == Su || e == mu || r.push(e);
            return r
        },
        Vu = function (t) {
            for (var e, n = t === ku, r = Ou(n ? Pu : $t(t)), o = [], i = 0; r.length > i;) !q(Nu, e = r[i++]) || n && !q(ku, e) || o.push(Nu[e]);
            return o
        };
    Lu || (it((ju = function () {
        if (this instanceof ju) throw TypeError("Symbol is not a constructor!");
        var t = X(arguments.length > 0 ? arguments[0] : void 0),
            e = function (n) {
                this === ku && e.call(Pu, n), q(this, Su) && q(this[Su], t) && (this[Su][t] = !1), Ru(this, t, C(1, n))
            };
        return O && Iu && Ru(ku, t, {
            configurable: !0,
            set: e
        }), Tu(t)
    }).prototype, "toString", function () {
        return this._k
    }), Wr.f = Bu, T.f = Wu, We.f = _u.f = Du, zr.f = Ku, jo.f = Vu, O && !Fe && it(ku, "propertyIsEnumerable", Ku, !0), ou.f = function (t) {
        return Tu(ze(t))
    }), Xe(Xe.G + Xe.W + Xe.F * !Lu, {
        Symbol: ju
    });
    for (var Gu = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ju = 0; Gu.length > Ju;) ze(Gu[Ju++]);
    for (var Hu = bn(ze.store), Yu = 0; Hu.length > Yu;) yu(Hu[Yu++]);
    Xe(Xe.S + Xe.F * !Lu, "Symbol", {
        for: function (t) {
            return q(zu, t += "") ? zu[t] : zu[t] = ju(t)
        },
        keyFor: function (t) {
            if (!Cu(t)) throw TypeError(t + " is not a symbol!");
            for (var e in zu)
                if (zu[e] === t) return e
        },
        useSetter: function () {
            Iu = !0
        },
        useSimple: function () {
            Iu = !1
        }
    }), Xe(Xe.S + Xe.F * !Lu, "Object", {
        create: function (t, e) {
            return void 0 === e ? ir(t) : Uu(ir(t), e)
        },
        defineProperty: Wu,
        defineProperties: Uu,
        getOwnPropertyDescriptor: Bu,
        getOwnPropertyNames: Du,
        getOwnPropertySymbols: Vu
    }), wu && Xe(Xe.S + Xe.F * (!Lu || v(function () {
        var t = ju();
        return "[null]" != xu([t]) || "{}" != xu({
            a: t
        }) || "{}" != xu(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (f(e) || void 0 !== t) && !Cu(t)) return Dn(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !Cu(e)) return e
            }), r[1] = e, xu.apply(wu, r)
        }
    }), ju.prototype[Au] || Y(ju.prototype, Au, ju.prototype.valueOf), Ke(ju, "Symbol"), Ke(Math, "Math", !0), Ke(g.JSON, "JSON", !0);
    var qu = function (t, e) {
            var n = ($.Object || {})[t] || Object[t],
                r = {};
            r[t] = e(n), Xe(Xe.S + Xe.F * v(function () {
                n(1)
            }), "Object", r)
        },
        Xu = Object.freeze({
            default: qu,
            __moduleExports: qu
        }),
        $u = Xu && qu || Xu,
        Qu = Zr.onFreeze;
    $u("freeze", function (t) {
        return function (e) {
            return t && f(e) ? t(Qu(e)) : e
        }
    });
    var Zu = Zr.onFreeze;
    $u("seal", function (t) {
        return function (e) {
            return t && f(e) ? t(Zu(e)) : e
        }
    });
    var ta = Zr.onFreeze;
    $u("preventExtensions", function (t) {
        return function (e) {
            return t && f(e) ? t(ta(e)) : e
        }
    }), $u("isFrozen", function (t) {
        return function (e) {
            return !f(e) || !!t && t(e)
        }
    }), $u("isSealed", function (t) {
        return function (e) {
            return !f(e) || !!t && t(e)
        }
    }), $u("isExtensible", function (t) {
        return function (e) {
            return !!f(e) && (!t || t(e))
        }
    });
    var ea = Wr.f;
    $u("getOwnPropertyDescriptor", function () {
        return function (t, e) {
            return ea($t(t), e)
        }
    }), $u("getPrototypeOf", function () {
        return function (t) {
            return sr(we(t))
        }
    }), $u("keys", function () {
        return function (t) {
            return bn(we(t))
        }
    }), $u("getOwnPropertyNames", function () {
        return _u.f
    }), Xe(Xe.S + Xe.F, "Object", {
        assign: Ro
    });
    var na = Object.is || function (t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        },
        ra = Object.freeze({
            default: na,
            __moduleExports: na
        });
    Xe(Xe.S, "Object", {
        is: ra && na || ra
    }), Xe(Xe.S, "Object", {
        setPrototypeOf: so.set
    });
    var oa = Function.prototype,
        ia = /^\s*function ([^ (]*)/;
    "name" in oa || O && (0, T.f)(oa, "name", {
        configurable: !0,
        get: function () {
            try {
                return ("" + this).match(ia)[1]
            } catch (t) {
                return ""
            }
        }
    }), Xe(Xe.S, "String", {
        raw: function (t) {
            for (var e = $t(t.raw), n = kt(e.length), r = arguments.length, o = [], i = 0; n > i;) o.push(e[i++] + ""), r > i && o.push(arguments[i] + "");
            return o.join("")
        }
    });
    var ua = String.fromCharCode,
        aa = String.fromCodePoint;
    Xe(Xe.S + Xe.F * (!!aa && 1 != aa.length), "String", {
        fromCodePoint: function (t) {
            for (var e, n = [], r = arguments.length, o = 0; r > o;) {
                if (e = +arguments[o++], Qt(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(65536 > e ? ua(e) : ua(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    });
    var ca = function (t) {
            return function (e, n) {
                var r, o, i = Vt(e) + "",
                    u = Mt(n),
                    a = i.length;
                return 0 > u || u >= a ? t ? "" : void 0 : 55296 > (r = i.charCodeAt(u)) || r > 56319 || u + 1 === a || 56320 > (o = i.charCodeAt(u + 1)) || o > 57343 ? t ? i.charAt(u) : r : t ? i.slice(u, u + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        },
        fa = Object.freeze({
            default: ca,
            __moduleExports: ca
        }),
        sa = (fa && ca || fa)(!1);
    Xe(Xe.P, "String", {
        codePointAt: function (t) {
            return sa(this, t)
        }
    });
    var la = function (t) {
            var e = Vt(this) + "",
                n = "",
                r = Mt(t);
            if (0 > r || r == 1 / 0) throw RangeError("Count can't be negative");
            for (; r > 0;
                (r >>>= 1) && (e += e)) 1 & r && (n += e);
            return n
        },
        ha = Object.freeze({
            default: la,
            __moduleExports: la
        }),
        da = ha && la || ha;
    Xe(Xe.P, "String", {
        repeat: da
    });
    var va = ze("match"),
        pa = function (t) {
            var e;
            return f(t) && (void 0 !== (e = t[va]) ? !!e : "RegExp" == Ct(t))
        },
        ya = Object.freeze({
            default: pa,
            __moduleExports: pa
        }),
        ga = ya && pa || ya,
        _a = function (t, e, n) {
            if (ga(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return Vt(t) + ""
        },
        ma = Object.freeze({
            default: _a,
            __moduleExports: _a
        }),
        ba = ze("match"),
        Ea = function (t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[ba] = !1, !"/./" [t](e)
                } catch (t) {}
            }
            return !0
        },
        Oa = Object.freeze({
            default: Ea,
            __moduleExports: Ea
        }),
        ja = ma && _a || ma,
        wa = Oa && Ea || Oa,
        xa = "".startsWith;
    Xe(Xe.P + Xe.F * wa("startsWith"), "String", {
        startsWith: function (t) {
            var e = ja(this, t, "startsWith"),
                n = kt(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = t + "";
            return xa ? xa.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    });
    var Sa = "".endsWith;
    Xe(Xe.P + Xe.F * wa("endsWith"), "String", {
        endsWith: function (t) {
            var e = ja(this, t, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = kt(e.length),
                o = void 0 === n ? r : Math.min(kt(n), r),
                i = t + "";
            return Sa ? Sa.call(e, i, o) : e.slice(o - i.length, o) === i
        }
    });
    Xe(Xe.P + Xe.F * wa("includes"), "String", {
        includes: function (t) {
            return !!~ja(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Aa = function () {
            var t = M(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        Ma = Object.freeze({
            default: Aa,
            __moduleExports: Aa
        });
    O && "g" != /./g.flags && T.f(RegExp.prototype, "flags", {
        configurable: !0,
        get: Ma && Aa || Ma
    });
    var za = function (t, e, n) {
            var r = ze(t),
                o = n(Vt, r, "" [t]),
                i = o[0],
                u = o[1];
            v(function () {
                var e = {};
                return e[r] = function () {
                    return 7
                }, 7 != "" [t](e)
            }) && (it(String.prototype, t, i), Y(RegExp.prototype, r, 2 == e ? function (t, e) {
                return u.call(t, this, e)
            } : function (t) {
                return u.call(t, this)
            }))
        },
        Na = Object.freeze({
            default: za,
            __moduleExports: za
        }),
        Pa = Na && za || Na;
    Pa("match", 1, function (t, e, n) {
        return [function (n) {
            var r = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : RegExp(n)[e](r + "")
        }, n]
    }), Pa("replace", 2, function (t, e, n) {
        return [function (r, o) {
            var i = t(this),
                u = void 0 == r ? void 0 : r[e];
            return void 0 !== u ? u.call(r, i, o) : n.call(i + "", r, o)
        }, n]
    }), Pa("split", 2, function (t, e, n) {
        var r = ga,
            o = n,
            i = [].push;
        if ("".split(/.?/).length) {
            var u = void 0 === /()??/.exec("")[1];
            n = function (t, e) {
                var n = this + "";
                if (void 0 === t && 0 === e) return [];
                if (!r(t)) return o.call(n, t, e);
                var a, c, f, s, l, h = [],
                    d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    v = 0,
                    p = void 0 === e ? 4294967295 : e >>> 0,
                    y = RegExp(t.source, d + "g");
                for (u || (a = RegExp("^" + y.source + "$(?!\\s)", d));
                    (c = y.exec(n)) && ((f = c.index + c[0].length) <= v || (h.push(n.slice(v, c.index)), !u && c.length > 1 && c[0].replace(a, function () {
                        for (l = 1; arguments.length - 2 > l; l++) void 0 === arguments[l] && (c[l] = void 0)
                    }), c.length > 1 && n.length > c.index && i.apply(h, c.slice(1)), s = c[0].length, v = f, p > h.length));) y.lastIndex === c.index && y.lastIndex++;
                return v === n.length ? !s && y.test("") || h.push("") : h.push(n.slice(v)), h.length > p ? h.slice(0, p) : h
            }
        } else 0;
        return [function (r, o) {
            var i = t(this),
                u = void 0 == r ? void 0 : r[e];
            return void 0 !== u ? u.call(r, i, o) : n.call(i + "", r, o)
        }, n]
    }), Pa("search", 1, function (t, e, n) {
        return [function (n) {
            var r = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : RegExp(n)[e](r + "")
        }, n]
    });
    var ka = function (t, e, n) {
            e in t ? T.f(t, e, C(0, n)) : t[e] = n
        },
        La = Object.freeze({
            default: ka,
            __moduleExports: ka
        }),
        Fa = La && ka || La;
    Xe(Xe.S + Xe.F * !Tr(function (t) {}), "Array", {
        from: function (t) {
            var e, n, r, o, i = we(t),
                u = "function" == typeof this ? this : Array,
                a = arguments.length,
                c = a > 1 ? arguments[1] : void 0,
                f = void 0 !== c,
                s = 0,
                l = Ir(i);
            if (f && (c = ut(c, a > 2 ? arguments[2] : void 0, 2)), void 0 == l || u == Array && Fr(l))
                for (n = new u(e = kt(i.length)); e > s; s++) Fa(n, s, f ? c(i[s], s) : i[s]);
            else
                for (o = l.call(i), n = new u; !(r = o.next()).done; s++) Fa(n, s, f ? Gr(o, c, [r.value, s], !0) : r.value);
            return n.length = s, n
        }
    }), Xe(Xe.S + Xe.F * v(function () {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }), "Array", {
        of: function () {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) Fa(n, t, arguments[t++]);
            return n.length = e, n
        }
    }), Xe(Xe.P, "Array", {
        copyWithin: Cr
    }), yr("copyWithin");
    var Ia = Rr(5),
        Ra = !0;
    "find" in [] && Array(1).find(function () {
        Ra = !1
    }), Xe(Xe.P + Xe.F * Ra, "Array", {
        find: function (t) {
            return Ia(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), yr("find");
    var Ta = Rr(6),
        Ca = !0;
    "findIndex" in [] && Array(1).findIndex(function () {
        Ca = !1
    }), Xe(Xe.P + Xe.F * Ca, "Array", {
        findIndex: function (t) {
            return Ta(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), yr("findIndex"), Xe(Xe.P, "Array", {
        fill: Ue
    }), yr("fill");
    var Wa = g.isFinite;
    Xe(Xe.S, "Number", {
        isFinite: function (t) {
            return "number" == typeof t && Wa(t)
        }
    });
    var Ua = Math.floor,
        Ka = function (t) {
            return !f(t) && isFinite(t) && Ua(t) === t
        },
        Ba = Object.freeze({
            default: Ka,
            __moduleExports: Ka
        }),
        Da = Ba && Ka || Ba;
    Xe(Xe.S, "Number", {
        isInteger: Da
    });
    var Va = Math.abs;
    Xe(Xe.S, "Number", {
        isSafeInteger: function (t) {
            return Da(t) && 9007199254740991 >= Va(t)
        }
    }), Xe(Xe.S, "Number", {
        isNaN: function (t) {
            return t != t
        }
    }), Xe(Xe.S, "Number", {
        EPSILON: Math.pow(2, -52)
    }), Xe(Xe.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    }), Xe(Xe.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    });
    var Ga = Math.log1p || function (t) {
            return (t = +t) > -1e-8 && 1e-8 > t ? t - t * t / 2 : Math.log(1 + t)
        },
        Ja = Object.freeze({
            default: Ga,
            __moduleExports: Ga
        }),
        Ha = Ja && Ga || Ja,
        Ya = Math.sqrt,
        qa = Math.acosh;
    Xe(Xe.S + Xe.F * !(qa && 710 == Math.floor(qa(Number.MAX_VALUE)) && qa(1 / 0) == 1 / 0), "Math", {
        acosh: function (t) {
            return 1 > (t = +t) ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : Ha(t - 1 + Ya(t - 1) * Ya(t + 1))
        }
    });
    var Xa = Math.asinh;
    Xe(Xe.S + Xe.F * !(Xa && 1 / Xa(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? 0 > e ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    });
    var $a = Math.atanh;
    Xe(Xe.S + Xe.F * !($a && 0 > 1 / $a(-0)), "Math", {
        atanh: function (t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    });
    var Qa = Math.sign || function (t) {
            return 0 == (t = +t) || t != t ? t : 0 > t ? -1 : 1
        },
        Za = Object.freeze({
            default: Qa,
            __moduleExports: Qa
        }),
        tc = Za && Qa || Za;
    Xe(Xe.S, "Math", {
        cbrt: function (t) {
            return tc(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    }), Xe(Xe.S, "Math", {
        clz32: function (t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    });
    var ec = Math.exp;
    Xe(Xe.S, "Math", {
        cosh: function (t) {
            return (ec(t = +t) + ec(-t)) / 2
        }
    });
    var nc = Math.expm1,
        rc = !nc || nc(10) > 22025.465794806718 || 22025.465794806718 > nc(10) || -2e-17 != nc(-2e-17) ? function (t) {
            return 0 == (t = +t) ? t : t > -1e-6 && 1e-6 > t ? t + t * t / 2 : Math.exp(t) - 1
        } : nc,
        oc = Object.freeze({
            default: rc,
            __moduleExports: rc
        }),
        ic = oc && rc || oc;
    Xe(Xe.S + Xe.F * (ic != Math.expm1), "Math", {
        expm1: ic
    });
    var uc = Math.pow,
        ac = uc(2, -52),
        cc = uc(2, -23),
        fc = uc(2, 127) * (2 - cc),
        sc = uc(2, -126),
        lc = Math.fround || function (t) {
            var e, n, r = Math.abs(t),
                o = tc(t);
            return sc > r ? o * (r / sc / cc + 1 / ac - 1 / ac) * sc * cc : (n = (e = (1 + cc / ac) * r) - (e - r)) > fc || n != n ? o * (1 / 0) : o * n
        },
        hc = Object.freeze({
            default: lc,
            __moduleExports: lc
        });
    Xe(Xe.S, "Math", {
        fround: hc && lc || hc
    });
    var dc = Math.abs;
    Xe(Xe.S, "Math", {
        hypot: function (t, e) {
            for (var n, r, o = 0, i = 0, u = arguments.length, a = 0; u > i;)(n = dc(arguments[i++])) > a ? (o = o * (r = a / n) * r + 1, a = n) : o += n > 0 ? (r = n / a) * r : n;
            return a === 1 / 0 ? 1 / 0 : a * Math.sqrt(o)
        }
    });
    var vc = Math.imul;
    Xe(Xe.S + Xe.F * v(function () {
        return -5 != vc(4294967295, 5) || 2 != vc.length
    }), "Math", {
        imul: function (t, e) {
            var n = +t,
                r = +e,
                o = 65535 & n,
                i = 65535 & r;
            return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
        }
    }), Xe(Xe.S, "Math", {
        log1p: Ha
    }), Xe(Xe.S, "Math", {
        log10: function (t) {
            return Math.log(t) * Math.LOG10E
        }
    }), Xe(Xe.S, "Math", {
        log2: function (t) {
            return Math.log(t) / Math.LN2
        }
    }), Xe(Xe.S, "Math", {
        sign: tc
    });
    var pc = Math.exp;
    Xe(Xe.S + Xe.F * v(function () {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function (t) {
            return 1 > Math.abs(t = +t) ? (ic(t) - ic(-t)) / 2 : (pc(t - 1) - pc(-t - 1)) * (Math.E / 2)
        }
    });
    var yc = Math.exp;
    Xe(Xe.S, "Math", {
        tanh: function (t) {
            var e = ic(t = +t),
                n = ic(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (yc(t) + yc(-t))
        }
    }), Xe(Xe.S, "Math", {
        trunc: function (t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    });
    var gc = ce(!0);
    Xe(Xe.P, "Array", {
        includes: function (t) {
            return gc(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), yr("includes");
    var _c = zr.f,
        mc = function (t) {
            return function (e) {
                for (var n, r = $t(e), o = bn(r), i = o.length, u = 0, a = []; i > u;) _c.call(r, n = o[u++]) && a.push(t ? [n, r[n]] : r[n]);
                return a
            }
        },
        bc = Object.freeze({
            default: mc,
            __moduleExports: mc
        }),
        Ec = bc && mc || bc,
        Oc = Ec(!1);
    Xe(Xe.S, "Object", {
        values: function (t) {
            return Oc(t)
        }
    });
    var jc = Ec(!0);
    Xe(Xe.S, "Object", {
        entries: function (t) {
            return jc(t)
        }
    }), Xe(Xe.S, "Object", {
        getOwnPropertyDescriptors: function (t) {
            for (var e, n, r = $t(t), o = Wr.f, i = ni(r), u = {}, a = 0; i.length > a;) void 0 !== (n = o(r, e = i[a++])) && Fa(u, e, n);
            return u
        }
    });
    var wc = function (t, e, n, r) {
            var o = Vt(t) + "",
                i = o.length,
                u = void 0 === n ? " " : n + "",
                a = kt(e);
            if (i >= a || "" == u) return o;
            var c = a - i,
                f = da.call(u, Math.ceil(c / u.length));
            return f.length > c && (f = f.slice(0, c)), r ? f + o : o + f
        },
        xc = Object.freeze({
            default: wc,
            __moduleExports: wc
        }),
        Sc = g.navigator,
        Ac = Sc && Sc.userAgent || "",
        Mc = Object.freeze({
            default: Ac,
            __moduleExports: Ac
        }),
        zc = xc && wc || xc,
        Nc = Mc && Ac || Mc;
    Xe(Xe.P + Xe.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Nc), "String", {
        padStart: function (t) {
            return zc(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    }), Xe(Xe.P + Xe.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Nc), "String", {
        padEnd: function (t) {
            return zc(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    });
    var Pc = [].slice,
        kc = function (t) {
            return function (e, n) {
                var r = arguments.length > 2,
                    o = !!r && Pc.call(arguments, 2);
                return t(r ? function () {
                    ("function" == typeof e ? e : Function(e)).apply(this, o)
                } : e, n)
            }
        };
    Xe(Xe.G + Xe.B + Xe.F * /MSIE .\./.test(Nc), {
        setTimeout: kc(g.setTimeout),
        setInterval: kc(g.setInterval)
    }), Xe(Xe.G + Xe.B, {
        setImmediate: _i.set,
        clearImmediate: _i.clear
    });
    for (var Lc = ze("iterator"), Fc = ze("toStringTag"), Ic = dn.Array, Rc = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, Tc = bn(Rc), Cc = 0; Tc.length > Cc; Cc++) {
        var Wc, Uc = Tc[Cc],
            Kc = Rc[Uc],
            Bc = g[Uc],
            Dc = Bc && Bc.prototype;
        if (Dc && (Dc[Lc] || Y(Dc, Lc, Ic), Dc[Fc] || Y(Dc, Fc, Uc), dn[Uc] = Ic, Kc))
            for (Wc in mr) Dc[Wc] || it(Dc, Wc, mr[Wc], !0)
    }
    n(function (t) {
        ! function (e) {
            var n, r = Object.prototype,
                o = r.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                u = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag",
                f = e.regeneratorRuntime;
            if (f) t.exports = f;
            else {
                (f = e.regeneratorRuntime = t.exports).wrap = m;
                var s = "suspendedStart",
                    l = "suspendedYield",
                    h = "executing",
                    d = "completed",
                    v = {},
                    p = {};
                p[u] = function () {
                    return this
                };
                var y = Object.getPrototypeOf,
                    g = y && y(y(N([])));
                g && g !== r && o.call(g, u) && (p = g);
                var _ = j.prototype = E.prototype = Object.create(p);
                O.prototype = _.constructor = j, j.constructor = O, j[c] = O.displayName = "GeneratorFunction", f.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === O || "GeneratorFunction" === (e.displayName || e.name))
                }, f.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, j) : (t.__proto__ = j, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(_), t
                }, f.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, w(x.prototype), x.prototype[a] = function () {
                    return this
                }, f.AsyncIterator = x, f.async = function (t, e, n, r) {
                    var o = new x(m(t, e, n, r));
                    return f.isGeneratorFunction(e) ? o : o.next().then(function (t) {
                        return t.done ? t.value : o.next()
                    })
                }, w(_), _[c] = "Generator", _[u] = function () {
                    return this
                }, _.toString = function () {
                    return "[object Generator]"
                }, f.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, f.values = N, z.prototype = {
                    constructor: z,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !t)
                            for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, o) {
                            return a.type = "throw", a.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var u = this.tryEntries[i],
                                a = u.completion;
                            if ("root" === u.tryLoc) return r("end");
                            if (this.prev >= u.tryLoc) {
                                var c = o.call(u, "catchLoc"),
                                    f = o.call(u, "finallyLoc");
                                if (c && f) {
                                    if (u.catchLoc > this.prev) return r(u.catchLoc, !0);
                                    if (u.finallyLoc > this.prev) return r(u.finallyLoc)
                                } else if (c) {
                                    if (u.catchLoc > this.prev) return r(u.catchLoc, !0)
                                } else {
                                    if (!f) throw Error("try statement without catch or finally");
                                    if (u.finallyLoc > this.prev) return r(u.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (this.prev >= r.tryLoc && o.call(r, "finallyLoc") && r.finallyLoc > this.prev) {
                                var i = r;
                                break
                            }
                        }!i || "break" !== t && "continue" !== t || i.tryLoc > e || e > i.finallyLoc || (i = null);
                        var u = i ? i.completion : {};
                        return u.type = t, u.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(u)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), M(n), v
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    M(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), v
                    }
                }
            }

            function m(t, e, n, r) {
                var o = Object.create((e && e.prototype instanceof E ? e : E).prototype),
                    i = new z(r || []);
                return o._invoke = function (t, e, n) {
                    var r = s;
                    return function (o, i) {
                        if (r === h) throw Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === o) throw i;
                            return P()
                        }
                        for (n.method = o, n.arg = i;;) {
                            var u = n.delegate;
                            if (u) {
                                var a = S(u, n);
                                if (a) {
                                    if (a === v) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === s) throw r = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var c = b(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? d : l, c.arg === v) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = d, n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(t, n, i), o
            }

            function b(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function E() {}

            function O() {}

            function j() {}

            function w(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function x(t) {
                function n(e, r, i, u) {
                    var a = b(t[e], t, r);
                    if ("throw" !== a.type) {
                        var c = a.arg,
                            f = c.value;
                        return f && "object" == typeof f && o.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) {
                            n("next", t, i, u)
                        }, function (t) {
                            n("throw", t, i, u)
                        }) : Promise.resolve(f).then(function (t) {
                            c.value = t, i(c)
                        }, u)
                    }
                    u(a.arg)
                }
                var r;
                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function (t, e) {
                    function o() {
                        return new Promise(function (r, o) {
                            n(t, e, r, o)
                        })
                    }
                    return r = r ? r.then(o, o) : o()
                }
            }

            function S(t, e) {
                var r = t.iterator[e.method];
                if (r === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, S(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var o = b(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, v;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
            }

            function A(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function M(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function z(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(A, this), this.reset(!0)
            }

            function N(t) {
                if (t) {
                    var e = t[u];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            i = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: n,
                    done: !0
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : e)
    });
    var Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        Gc = function () {
            return function (t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function (t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Jc = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); t.length > e; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        };

    function Hc(t) {
        return null === t ? "null" : t !== Object(t) ? void 0 === t ? "undefined" : Vc(t) : {}.toString.call(t).slice(8, -1).toLowerCase()
    }

    function Yc(t) {
        return "string" !== Hc(t) || !t.length
    }

    function qc() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1],
            n = arguments[2];
        if (Yc(t)) return !1;
        var r = t.charCodeAt(0);
        return r >= e && n >= r
    }
    var Xc = {
            HIRAGANA: "toHiragana",
            KATAKANA: "toKatakana"
        },
        $c = {
            HEPBURN: "hepburn"
        },
        Qc = {
            useObsoleteKana: !1,
            passRomaji: !1,
            upcaseKatakana: !1,
            ignoreCase: !1,
            IMEMode: !1,
            romanization: $c.HEPBURN
        },
        Zc = 65,
        tf = 90,
        ef = 12353,
        nf = 12438,
        rf = 12449,
        of = 12540,
        uf = 19968,
        af = 40879,
        cf = 12540,
        ff = 12539,
        sf = [65377, 65381],
        lf = [
            [12288, 12351], sf, [12539, 12540],
            [65281, 65295],
            [65306, 65311],
            [65339, 65343],
            [65371, 65376],
            [65504, 65518]
        ],
        hf = [].concat([
            [12352, 12447],
            [12448, 12543], sf, [65382, 65439]
        ], lf, [
            [65313, 65338],
            [65345, 65370],
            [65296, 65305],
            [19968, 40959],
            [13312, 19903]
        ]),
        df = [
            [0, 127]
        ].concat([
            [256, 257],
            [274, 275],
            [298, 299],
            [332, 333],
            [362, 363]
        ]),
        vf = [
            [32, 47],
            [58, 63],
            [91, 96],
            [123, 126]
        ].concat([
            [8216, 8217],
            [8220, 8221]
        ]);

    function pf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return hf.some(function (e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1])
        })
    }

    function yf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1],
            n = "regexp" === Hc(e);
        return !Yc(t) && [].concat(Jc(t)).every(function (t) {
            var r = pf(t);
            return n ? r || e.test(t) : r
        })
    }
    var gf = function () {
        return Object.assign({}, Qc, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
    };

    function _f(t, e, n) {
        var r = e;

        function o(t, e) {
            var i = t.charAt(0);
            return function t(e, r, i, u) {
                if (!r) return n || 1 === Object.keys(e).length ? e[""] ? [
                    [i, u, e[""]]
                ] : [] : [
                    [i, u, null]
                ];
                if (1 === Object.keys(e).length) return [
                    [i, u, e[""]]
                ].concat(o(r, u));
                var a = function (t, e) {
                    if (void 0 !== t[e]) return Object.assign({
                        "": t[""] + e
                    }, t[e])
                }(e, r.charAt(0));
                if (void 0 === a) return [
                    [i, u, e[""]]
                ].concat(o(r, u));
                return t(a, r.slice(1), i, u + 1)
            }(Object.assign({
                "": i
            }, r[i]), t.slice(1), e, e + 1)
        }
        return o(t, 0)
    }

    function mf(t) {
        return Object.entries(t).reduce(function (t, e) {
            var n = Gc(e, 2),
                r = n[0],
                o = n[1],
                i = "string" === Hc(o);
            return t[r] = i ? {
                "": o
            } : mf(o), t
        }, {})
    }

    function bf(t, e) {
        return e.split("").reduce(function (t, e) {
            return void 0 === t[e] && (t[e] = {}), t[e]
        }, t)
    }

    function Ef() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = {};
        return "object" === Hc(t) && Object.entries(t).forEach(function (t) {
                var n = Gc(t, 2),
                    r = n[1],
                    o = e;
                n[0].split("").forEach(function (t) {
                    void 0 === o[t] && (o[t] = {}), o = o[t]
                }), o[""] = r
            }),
            function (t) {
                return function t(e, n) {
                    return void 0 === e || "string" === Hc(e) ? n : Object.entries(n).reduce(function (n, r) {
                        var o = Gc(r, 2),
                            i = o[0];
                        return n[i] = t(e[i], o[1]), n
                    }, e)
                }(JSON.parse(JSON.stringify(t)), e)
            }
    }

    function Of(t, e) {
        return e ? "function" === Hc(e) ? e(t) : Ef(e)(t) : t
    }
    var jf = {
            a: "あ",
            i: "い",
            u: "う",
            e: "え",
            o: "お",
            k: {
                a: "か",
                i: "き",
                u: "く",
                e: "け",
                o: "こ"
            },
            s: {
                a: "さ",
                i: "し",
                u: "す",
                e: "せ",
                o: "そ"
            },
            t: {
                a: "た",
                i: "ち",
                u: "つ",
                e: "て",
                o: "と"
            },
            n: {
                a: "な",
                i: "に",
                u: "ぬ",
                e: "ね",
                o: "の"
            },
            h: {
                a: "は",
                i: "ひ",
                u: "ふ",
                e: "へ",
                o: "ほ"
            },
            m: {
                a: "ま",
                i: "み",
                u: "む",
                e: "め",
                o: "も"
            },
            y: {
                a: "や",
                u: "ゆ",
                o: "よ"
            },
            r: {
                a: "ら",
                i: "り",
                u: "る",
                e: "れ",
                o: "ろ"
            },
            w: {
                a: "わ",
                i: "ゐ",
                e: "ゑ",
                o: "を"
            },
            g: {
                a: "が",
                i: "ぎ",
                u: "ぐ",
                e: "げ",
                o: "ご"
            },
            z: {
                a: "ざ",
                i: "じ",
                u: "ず",
                e: "ぜ",
                o: "ぞ"
            },
            d: {
                a: "だ",
                i: "ぢ",
                u: "づ",
                e: "で",
                o: "ど"
            },
            b: {
                a: "ば",
                i: "び",
                u: "ぶ",
                e: "べ",
                o: "ぼ"
            },
            p: {
                a: "ぱ",
                i: "ぴ",
                u: "ぷ",
                e: "ぺ",
                o: "ぽ"
            },
            v: {
                a: "ゔぁ",
                i: "ゔぃ",
                u: "ゔ",
                e: "ゔぇ",
                o: "ゔぉ"
            }
        },
        wf = {
            ".": "。",
            ",": "、",
            ":": "：",
            "/": "・",
            "!": "！",
            "?": "？",
            "~": "〜",
            "-": "ー",
            "‘": "「",
            "’": "」",
            "“": "『",
            "”": "』",
            "[": "［",
            "]": "］",
            "(": "（",
            ")": "）",
            "{": "｛",
            "}": "｝"
        },
        xf = {
            k: "き",
            s: "し",
            t: "ち",
            n: "に",
            h: "ひ",
            m: "み",
            r: "り",
            g: "ぎ",
            z: "じ",
            d: "ぢ",
            b: "び",
            p: "ぴ",
            v: "ゔ",
            q: "く",
            f: "ふ"
        },
        Sf = {
            ya: "ゃ",
            yi: "ぃ",
            yu: "ゅ",
            ye: "ぇ",
            yo: "ょ"
        },
        Af = {
            a: "ぁ",
            i: "ぃ",
            u: "ぅ",
            e: "ぇ",
            o: "ぉ"
        },
        Mf = {
            sh: "sy",
            ch: "ty",
            cy: "ty",
            chy: "ty",
            shy: "sy",
            j: "zy",
            jy: "zy",
            shi: "si",
            chi: "ti",
            tsu: "tu",
            ji: "zi",
            fu: "hu"
        },
        zf = Object.assign({
            tu: "っ",
            wa: "ゎ",
            ka: "ヵ",
            ke: "ヶ"
        }, Af, Sf),
        Nf = {
            yi: "い",
            wu: "う",
            ye: "いぇ",
            wi: "うぃ",
            we: "うぇ",
            kwa: "くぁ",
            whu: "う",
            tha: "てゃ",
            thu: "てゅ",
            tho: "てょ",
            dha: "でゃ",
            dhu: "でゅ",
            dho: "でょ"
        },
        Pf = {
            wh: "う",
            qw: "く",
            q: "く",
            gw: "ぐ",
            sw: "す",
            ts: "つ",
            th: "て",
            tw: "と",
            dh: "で",
            dw: "ど",
            fw: "ふ",
            f: "ふ"
        };

    function kf() {
        var t = mf(jf),
            e = function (e) {
                return bf(t, e)
            };
        return Object.entries(xf).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[0],
                o = n[1];
            Object.entries(Sf).forEach(function (t) {
                var n = Gc(t, 2),
                    i = n[1];
                e(r + n[0])[""] = o + i
            })
        }), Object.entries(wf).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[1];
            e(n[0])[""] = r
        }), Object.entries(Pf).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[0],
                o = n[1];
            Object.entries(Af).forEach(function (t) {
                var n = Gc(t, 2),
                    i = n[1];
                e(r + n[0])[""] = o + i
            })
        }), ["n", "n'", "xn"].forEach(function (t) {
            e(t)[""] = "ん"
        }), t.c = JSON.parse(JSON.stringify(t.k)), Object.entries(Mf).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[0],
                o = n[1],
                i = r.slice(0, r.length - 1),
                u = r.charAt(r.length - 1);
            e(i)[u] = JSON.parse(JSON.stringify(e(o)))
        }), Object.entries(zf).forEach(function (t) {
            var n, r = Gc(t, 2),
                o = r[0],
                i = r[1],
                u = function (t) {
                    return t.charAt(t.length - 1)
                },
                a = function (t) {
                    return t.slice(0, t.length - 1)
                },
                c = e("x" + o);
            c[""] = i, e("l" + a(o))[u(o)] = c, (n = o, [].concat(Jc(Object.entries(Mf)), [
                ["c", "k"]
            ]).reduce(function (t, e) {
                var r = Gc(e, 2),
                    o = r[0],
                    i = r[1];
                return n.startsWith(i) ? t.concat(n.replace(i, o)) : t
            }, [])).forEach(function (t) {
                ["l", "x"].forEach(function (n) {
                    e(n + a(t))[u(t)] = e(n + o)
                })
            })
        }), Object.entries(Nf).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[1];
            e(n[0])[""] = r
        }), [].concat(Jc(Object.keys(xf)), ["c", "y", "w", "j"]).forEach(function (e) {
            var n = t[e];
            n[e] = function t(e) {
                return Object.entries(e).reduce(function (e, n) {
                    var r = Gc(n, 2),
                        o = r[0],
                        i = r[1];
                    return e[o] = o ? t(i) : "っ" + i, e
                }, {})
            }(n)
        }), delete t.n.n, Object.freeze(JSON.parse(JSON.stringify(t)))
    }
    var Lf = null;
    var Ff = Ef({
        wi: "ゐ",
        we: "ゑ"
    });

    function If() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && qc(t, Zc, tf)
    }

    function Rf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && t.charCodeAt(0) === cf
    }

    function Tf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && t.charCodeAt(0) === ff
    }

    function Cf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && (!!Rf(t) || qc(t, ef, nf))
    }

    function Wf() {
        var t = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split("").forEach(function (e) {
            if (Rf(e) || Tf(e)) t.push(e);
            else if (Cf(e)) {
                var n = e.charCodeAt(0) + (rf - ef);
                t.push(String.fromCharCode(n))
            } else t.push(e)
        }), t.join("")
    }

    function Uf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments[2],
            r = void 0;
        return n ? r = e : n = Bf(r = gf(e)),
            function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments[2];
                n || (n = Bf(e));
                return _f(t.toLowerCase(), n, !e.IMEMode)
            }(t, r, n).map(function (e) {
                var n = Gc(e, 3),
                    o = n[0],
                    i = n[1],
                    u = n[2];
                if (null === u) return t.slice(o);
                var a = r.IMEMode === Xc.HIRAGANA,
                    c = r.IMEMode === Xc.KATAKANA || [].concat(Jc(t.slice(o, i))).every(If);
                return a || !c ? u : Wf(u)
            }).join("")
    }
    var Kf = null;

    function Bf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = (null == Lf && (Lf = kf()), Lf);
        return e = t.IMEMode ? function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return e.n.n = {
                "": "ん"
            }, e.n[" "] = {
                "": "ん"
            }, e
        }(e) : e, e = t.useObsoleteKana ? Ff(e) : e, t.customKanaMapping && (null == Kf && (Kf = Of(e, t.customKanaMapping)), e = Kf), e
    }
    var Df = [];

    function Vf(t) {
        var e = Object.assign({}, gf(t), {
                IMEMode: t.IMEMode || !0
            }),
            n = Bf(e),
            r = [].concat(Jc(Object.keys(n)), Jc(Object.keys(n).map(function (t) {
                return t.toUpperCase()
            })));
        return function (t) {
            var o = t.target;
            void 0 !== o.value && "true" !== o.dataset.ignoreComposition && function (t, e, n, r, o) {
                var i = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            r = void 0,
                            o = void 0,
                            i = void 0;
                        if (0 === e && n.includes(t[0])) {
                            var u = function (t, e) {
                                    return [""].concat(Jc(Jf(t, function (t) {
                                        return e.includes(t) || !yf(t, /[0-9]/)
                                    })))
                                }(t, n),
                                a = Gc(u, 3);
                            r = a[0], o = a[1], i = a[2]
                        } else if (e > 0) {
                            var c = function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = Jf([].concat(Jc(t.slice(0, e))).reverse(), function (t) {
                                            return !yf(t)
                                        }),
                                        r = Gc(n, 2),
                                        o = r[0];
                                    return [r[1].reverse().join(""), o.split("").reverse().join(""), t.slice(e)]
                                }(t, e),
                                f = Gc(c, 3);
                            r = f[0], o = f[1], i = f[2]
                        } else {
                            var s = Jf(t, function (t) {
                                    return !n.includes(t)
                                }),
                                l = Gc(s, 2);
                            r = l[0];
                            var h = Jf(o = l[1], function (t) {
                                    return !yf(t)
                                }),
                                d = Gc(h, 2);
                            o = d[0], i = d[1]
                        }
                        return [r, o, i]
                    }(t.value, t.selectionEnd, r),
                    u = Gc(i, 3),
                    a = u[0],
                    c = u[1],
                    f = u[2],
                    s = Uf(c, e, n);
                if (c !== s) {
                    var l = a.length + s.length,
                        h = a + s + f;
                    t.value = h, h, f.length ? setTimeout(function () {
                        return t.setSelectionRange(l, l)
                    }, 1) : t.setSelectionRange(l, l)
                } else t.value
            }(o, e, n, r)
        }
    }

    function Gf(t) {
        var e = t.type,
            n = t.target,
            r = t.data;
        /Mac/.test(window.navigator && window.navigator.platform) && ("compositionupdate" === e && yf(r) && (n.dataset.ignoreComposition = "true"), "compositionend" === e && (n.dataset.ignoreComposition = "false"))
    }

    function Jf() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t) {
                return !!t
            }, n = [], r = t.length, o = 0; r > o && e(t[o], o);) n.push(t[o]), o += 1;
        return [n.join(""), t.slice(o)]
    }
    var Hf = {
            input: function (t) {
                var e = t.target;
                return console.log("input:", {
                    value: e.value,
                    selectionStart: e.selectionStart,
                    selectionEnd: e.selectionEnd
                })
            },
            compositionstart: function () {
                return console.log("compositionstart")
            },
            compositionupdate: function (t) {
                var e = t.target;
                return console.log("compositionupdate", {
                    data: t.data,
                    value: e.value,
                    selectionStart: e.selectionStart,
                    selectionEnd: e.selectionEnd
                })
            },
            compositionend: function () {
                return console.log("compositionend")
            }
        },
        Yf = function (t) {
            Object.entries(Hf).forEach(function (e) {
                var n = Gc(e, 2);
                return t.addEventListener(n[0], n[1])
            })
        },
        qf = function (t) {
            Object.entries(Hf).forEach(function (e) {
                var n = Gc(e, 2);
                return t.removeEventListener(n[0], n[1])
            })
        },
        Xf = ["TEXTAREA", "INPUT"],
        $f = 0,
        Qf = function () {
            return $f += 1, "" + Date.now() + $f
        };

    function Zf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && df.some(function (e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1])
        })
    }

    function ts() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1],
            n = "regexp" === Hc(e);
        return !Yc(t) && [].concat(Jc(t)).every(function (t) {
            var r = Zf(t);
            return n ? r || e.test(t) : r
        })
    }

    function es() {
        return qc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", rf, of )
    }

    function ns() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && (Cf(t) || es(t))
    }

    function rs() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(ns)
    }

    function os() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(Cf)
    }

    function is() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(es)
    }

    function us() {
        return qc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", uf, af)
    }

    function as() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(us)
    }

    function cs() {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                passKanji: !0
            },
            e = [].concat(Jc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")),
            n = !1;
        return t.passKanji || (n = e.some(as)), (e.some(os) || e.some(is)) && e.some(ts) && !n
    }
    var fs = function (t, e) {
            return Rf(t) && 1 > e
        },
        ss = function (t, e) {
            return Rf(t) && e > 0
        },
        ls = function (t) {
            return ["ヶ", "ヵ"].includes(t)
        },
        hs = {
            a: "あ",
            i: "い",
            u: "う",
            e: "え",
            o: "う"
        };

    function ds() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1],
            n = arguments[2],
            r = "";
        return t.split("").reduce(function (o, i, u) {
            if (Tf(i) || fs(i, u) || ls(i)) return o.concat(i);
            if (r && ss(i, u)) {
                var a = e(r).slice(-1);
                return es(t[u - 1]) && "o" === a && n ? o.concat("お") : o.concat(hs[a])
            }
            if (!Rf(i) && es(i)) {
                var c = i.charCodeAt(0) + (ef - rf),
                    f = String.fromCharCode(c);
                return r = f, o.concat(f)
            }
            return r = "", o.concat(i)
        }, []).join("")
    }
    var vs = null,
        ps = {
            "あ": "a",
            "い": "i",
            "う": "u",
            "え": "e",
            "お": "o",
            "か": "ka",
            "き": "ki",
            "く": "ku",
            "け": "ke",
            "こ": "ko",
            "さ": "sa",
            "し": "shi",
            "す": "su",
            "せ": "se",
            "そ": "so",
            "た": "ta",
            "ち": "chi",
            "つ": "tsu",
            "て": "te",
            "と": "to",
            "な": "na",
            "に": "ni",
            "ぬ": "nu",
            "ね": "ne",
            "の": "no",
            "は": "ha",
            "ひ": "hi",
            "ふ": "fu",
            "へ": "he",
            "ほ": "ho",
            "ま": "ma",
            "み": "mi",
            "む": "mu",
            "め": "me",
            "も": "mo",
            "ら": "ra",
            "り": "ri",
            "る": "ru",
            "れ": "re",
            "ろ": "ro",
            "や": "ya",
            "ゆ": "yu",
            "よ": "yo",
            "わ": "wa",
            "ゐ": "wi",
            "ゑ": "we",
            "を": "wo",
            "ん": "n",
            "が": "ga",
            "ぎ": "gi",
            "ぐ": "gu",
            "げ": "ge",
            "ご": "go",
            "ざ": "za",
            "じ": "ji",
            "ず": "zu",
            "ぜ": "ze",
            "ぞ": "zo",
            "だ": "da",
            "ぢ": "ji",
            "づ": "zu",
            "で": "de",
            "ど": "do",
            "ば": "ba",
            "び": "bi",
            "ぶ": "bu",
            "べ": "be",
            "ぼ": "bo",
            "ぱ": "pa",
            "ぴ": "pi",
            "ぷ": "pu",
            "ぺ": "pe",
            "ぽ": "po",
            "ゔぁ": "va",
            "ゔぃ": "vi",
            "ゔ": "vu",
            "ゔぇ": "ve",
            "ゔぉ": "vo"
        },
        ys = {
            "。": ".",
            "、": ",",
            "：": ":",
            "・": "/",
            "！": "!",
            "？": "?",
            "〜": "~",
            "ー": "-",
            "「": "‘",
            "」": "’",
            "『": "“",
            "』": "”",
            "［": "[",
            "］": "]",
            "（": "(",
            "）": ")",
            "｛": "{",
            "｝": "}",
            "　": " "
        },
        gs = ["あ", "い", "う", "え", "お", "や", "ゆ", "よ"],
        _s = {
            "ゃ": "ya",
            "ゅ": "yu",
            "ょ": "yo"
        },
        ms = {
            "ぃ": "yi",
            "ぇ": "ye"
        },
        bs = {
            "ぁ": "a",
            "ぃ": "i",
            "ぅ": "u",
            "ぇ": "e",
            "ぉ": "o"
        },
        Es = ["き", "に", "ひ", "み", "り", "ぎ", "び", "ぴ", "ゔ", "く", "ふ"],
        Os = {
            "し": "sh",
            "ち": "ch",
            "じ": "j",
            "ぢ": "j"
        },
        js = {
            "っ": "",
            "ゃ": "ya",
            "ゅ": "yu",
            "ょ": "yo",
            "ぁ": "a",
            "ぃ": "i",
            "ぅ": "u",
            "ぇ": "e",
            "ぉ": "o"
        },
        ws = {
            b: "b",
            c: "t",
            d: "d",
            f: "f",
            g: "g",
            h: "h",
            j: "j",
            k: "k",
            m: "m",
            p: "p",
            q: "q",
            r: "r",
            s: "s",
            t: "t",
            v: "v",
            w: "w",
            x: "x",
            z: "z"
        };

    function xs() {
        var t, e, n;
        return null == vs && (t = mf(ps), e = function (e) {
            return bf(t, e)
        }, n = function (t, n) {
            e(t)[""] = n
        }, Object.entries(ys).forEach(function (t) {
            var n = Gc(t, 2),
                r = n[1];
            e(n[0])[""] = r
        }), [].concat(Jc(Object.entries(_s)), Jc(Object.entries(bs))).forEach(function (t) {
            var e = Gc(t, 2);
            n(e[0], e[1])
        }), Es.forEach(function (t) {
            var r = e(t)[""][0];
            Object.entries(_s).forEach(function (e) {
                var o = Gc(e, 2);
                n(t + o[0], r + o[1])
            }), Object.entries(ms).forEach(function (e) {
                var o = Gc(e, 2);
                n(t + o[0], r + o[1])
            })
        }), Object.entries(Os).forEach(function (t) {
            var e = Gc(t, 2),
                r = e[0],
                o = e[1];
            Object.entries(_s).forEach(function (t) {
                var e = Gc(t, 2);
                n(r + e[0], o + e[1][1])
            }), n(r + "ぃ", o + "yi"), n(r + "ぇ", o + "e")
        }), t["っ"] = function t(e) {
            return Object.entries(e).reduce(function (e, n) {
                var r = Gc(n, 2),
                    o = r[0],
                    i = r[1];
                if (o) e[o] = t(i);
                else {
                    var u = i.charAt(0);
                    e[o] = Object.keys(ws).includes(u) ? ws[u] + i : i
                }
                return e
            }, {})
        }(t), Object.entries(js).forEach(function (t) {
            var e = Gc(t, 2);
            n(e[0], e[1])
        }), gs.forEach(function (t) {
            n("ん" + t, "n'" + e(t)[""])
        }), vs = Object.freeze(JSON.parse(JSON.stringify(t)))), vs
    }

    function Ss() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = gf(e);
        return function (t, e) {
            var n = function (t) {
                switch (t.romanization) {
                    case $c.HEPBURN:
                        return xs();
                    default:
                        return {}
                }
            }(e);
            e.customRomajiMapping && (null == As && (As = Of(n, e.customRomajiMapping)), n = As);
            return _f(ds(t, Ss, !0), n, !e.IMEMode)
        }(t, n).map(function (n) {
            var r = Gc(n, 3),
                o = r[2];
            return e.upcaseKatakana && is(t.slice(r[0], r[1])) ? o.toUpperCase() : o
        }).join("")
    }
    var As = null;

    function Ms() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && vf.some(function (e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1])
        })
    }

    function zs() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && lf.some(function (e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1])
        })
    }
    var Ns = function (t) {
            return " " === t
        },
        Ps = function (t) {
            return "　" === t
        },
        ks = function (t) {
            return /[０-９]/.test(t)
        },
        Ls = function (t) {
            return /[0-9]/.test(t)
        },
        Fs = {
            EN: "en",
            JA: "ja",
            EN_NUM: "englishNumeral",
            JA_NUM: "japaneseNumeral",
            EN_PUNC: "englishPunctuation",
            JA_PUNC: "japanesePunctuation",
            KANJI: "kanji",
            HIRAGANA: "hiragana",
            KATAKANA: "katakana",
            SPACE: "space",
            OTHER: "other"
        };

    function Is(t) {
        var e = Fs.EN,
            n = Fs.JA,
            r = Fs.EN_NUM,
            o = Fs.JA_NUM,
            i = Fs.EN_PUNC,
            u = Fs.JA_PUNC,
            a = Fs.KANJI,
            c = Fs.HIRAGANA,
            f = Fs.KATAKANA,
            s = Fs.SPACE,
            l = Fs.OTHER;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) switch (!0) {
            case ks(t):
            case Ls(t):
                return l;
            case Ns(t):
                return e;
            case Ms(t):
                return l;
            case Ps(t):
                return n;
            case zs(t):
                return l;
            case pf(t):
                return n;
            case Zf(t):
                return e;
            default:
                return l
        } else switch (!0) {
            case Ps(t):
            case Ns(t):
                return s;
            case ks(t):
                return o;
            case Ls(t):
                return r;
            case Ms(t):
                return i;
            case zs(t):
                return u;
            case us(t):
                return a;
            case Cf(t):
                return c;
            case es(t):
                return f;
            case pf(t):
                return n;
            case Zf(t):
                return e;
            default:
                return l
        }
    }

    function Rs(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.compact,
            r = void 0 !== n && n,
            o = e.detailed,
            i = void 0 !== o && o;
        if (null == t || Yc(t)) return [];
        var u = [].concat(Jc(t)),
            a = u.shift(),
            c = Is(a, r);
        return u.reduce(function (t, e) {
            var n = Is(e, r),
                o = n === c;
            c = n;
            var u = e;
            return o && (u = (i ? t.pop().value : t.pop()) + u), t.concat(i ? {
                type: n,
                value: u
            } : u)
        }, [a = i ? {
            type: c,
            value: a
        } : a])
    }
    var Ts = function (t, e) {
            return e && !rs(t[0])
        },
        Cs = function (t, e) {
            return !e && !rs(t[t.length - 1])
        },
        Ws = function (t, e) {
            return e && ![].concat(Jc(e)).some(as) || !e && rs(t)
        };
    t.bind = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Xf.includes(t.nodeName)) throw Error("Element provided to Wanakana bind() was not a valid input or textarea element.\n Received: (" + JSON.stringify(t) + ")");
        var r = Vf(e),
            o = Qf();
        t.setAttribute("data-wanakana-id", o), t.setAttribute("lang", "ja"), t.setAttribute("autoCapitalize", "none"), t.setAttribute("autoCorrect", "off"), t.setAttribute("autoComplete", "off"), t.setAttribute("spellCheck", "false"), t.addEventListener("input", r), t.addEventListener("compositionupdate", Gf), t.addEventListener("compositionend", Gf),
            function (t, e, n) {
                Df = Df.concat({
                    id: t,
                    inputHandler: e,
                    compositionHandler: n
                })
            }(o, r, Gf), !0 === n && Yf(t)
    }, t.unbind = function (t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (e = t) && Df.find(function (t) {
                return t.id === e.getAttribute("data-wanakana-id")
            });
        if (null == r) throw Error("Element provided to Wanakana unbind() had no listener registered.\n Received: " + JSON.stringify(t));
        var o, i = r.inputHandler,
            u = r.compositionHandler;
        t.removeAttribute("data-wanakana-id"), t.removeAttribute("data-ignore-composition"), t.removeEventListener("input", i), t.removeEventListener("compositionstart", u), t.removeEventListener("compositionupdate", u), t.removeEventListener("compositionend", u), o = r.id, Df = Df.filter(function (t) {
            return t.id !== o
        }), !0 === n && qf(t)
    }, t.isRomaji = ts, t.isJapanese = yf, t.isKana = rs, t.isHiragana = os, t.isKatakana = is, t.isMixed = cs, t.isKanji = as, t.toRomaji = Ss, t.toKana = Uf, t.toHiragana = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = gf(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
        return e.passRomaji ? ds(t, Ss) : cs(t, {
            passKanji: !0
        }) ? Uf(ds(t, Ss).toLowerCase(), e) : ts(t) || Ms(t) ? Uf(t.toLowerCase(), e) : ds(t, Ss)
    }, t.toKatakana = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = gf(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
        return e.passRomaji ? Wf(t) : cs(t) || ts(t) || Ms(t) ? Wf(Uf(t.toLowerCase(), e)) : Wf(t)
    }, t.stripOkurigana = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.leading,
            r = void 0 !== n && n,
            o = e.matchKanji,
            i = void 0 === o ? "" : o;
        if (!yf(t) || Ts(t, r) || Cs(t, r) || Ws(t, i)) return t;
        var u = i || t,
            a = RegExp(r ? "^" + Rs(u).shift() : Rs(u).pop() + "$");
        return t.replace(a, "")
    }, t.tokenize = Rs, t.VERSION = "4.0.2", t.TO_KANA_METHODS = Xc, t.ROMANIZATIONS = $c, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=wanakana.min.js.map