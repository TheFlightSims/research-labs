// File: main.js

(() => {
    let e, t, n, r, a, i = (o.hmrS_jsonp = o.hmrS_jsonp || { 179: 0 }),
        u = {};

    function l(t, n) {
        return e = n, new Promise(((e, n) => {
            u[t] = e;
            const r = o.p + o.hu(t),
                a = new Error();
            o.l(r, ((e) => {
                if (u[t]) {
                    u[t] = void 0;
                    const r = e && ("load" === e.type ? "missing" : e.type),
                        o = e && e.target && e.target.src;
                    a.message = `Loading hot update chunk ${t} failed.\n(${r}: ${o})`;
                    a.name = "ChunkLoadError";
                    a.type = r;
                    a.request = o;
                    n(a);
                }
            }));
        }));
    }

    function c(e) {
        function u(e) {
            for (let t = [e], n = {}, r = t.map((e) => ({ chain: [e], id: e })); r.length > 0;) {
                const a = r.pop(),
                    i = a.id,
                    u = a.chain,
                    c = o.c[i];
                if (c && (!c.hot._selfAccepted || c.hot._selfInvalidated)) {
                    if (c.hot._selfDeclined) {
                        return {
                            type: "self-declined",
                            chain: u,
                            moduleId: i
                        };
                    }
                    if (c.hot._main) {
                        return {
                            type: "unaccepted",
                            chain: u,
                            moduleId: i
                        };
                    }
                    for (let s = 0; s < c.parents.length; s++) {
                        const f = c.parents[s],
                            d = o.c[f];
                        if (d) {
                            if (d.hot._declinedDependencies[i]) {
                                return {
                                    type: "declined",
                                    chain: u.concat([f]),
                                    moduleId: i,
                                    parentId: f
                                };
                            }
                            if (-1 === t.indexOf(f)) {
                                if (d.hot._acceptedDependencies[i]) {
                                    (n[f] || (n[f] = [])).push(i);
                                } else {
                                    delete n[f];
                                    t.push(f);
                                    r.push({ chain: u.concat([f]), id: f });
                                }
                            }
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: t,
                outdatedDependencies: n
            };
        }

        function l(e, t) {
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                -1 === e.indexOf(r) && e.push(r);
            }
        }
        o.f && delete o.f.jsonpHmr;
        t = void 0;
        const s = {},
            f = [],
            d = {};

        function p(e) {
            console.warn(`[HMR] unexpected require(${e.id}) to disposed module`);
        }

        for (const h in n)
            if (o.o(n, h)) {
                const m = n[h],
                    v = !1,
                    y = !1,
                    g = !1,
                    b = "";
                let _;

                const x = m
                    ? u(h)
                    : {
                          type: "disposed",
                          moduleId: h
                      };

                if (x.chain) {
                    b = `\nUpdate propagation: ${x.chain.join(" -> ")}`;
                }

                switch (x.type) {
                    case "self-declined":
                        e.onDeclined && e.onDeclined(x);
                        e.ignoreDeclined || (v = new Error(`Aborted because of self decline: ${x.moduleId}${b}`));
                        break;
                    case "declined":
                        e.onDeclined && e.onDeclined(x);
                        e.ignoreDeclined || (v = new Error(`Aborted because of declined dependency: ${x.moduleId} in ${x.parentId}${b}`));
                        break;
                    case "unaccepted":
                        e.onUnaccepted && e.onUnaccepted(x);
                        e.ignoreUnaccepted || (v = new Error(`Aborted because ${h} is not accepted${b}`));
                        break;
                    case "accepted":
                        e.onAccepted && e.onAccepted(x);
                        y = !0;
                        break;
                    case "disposed":
                        e.onDisposed && e.onDisposed(x);
                        g = !0;
                        break;
                    default:
                        throw new Error(`Unexpected type ${x.type}`);
                }

                if (v) {
                    return {
                        error: v
                    };
                }

                if (y) {
                    for (const h in d[h] = m, l(f, x.outdatedModules), x.outdatedDependencies) {
                        if (o.o(x.outdatedDependencies, h)) {
                            (s[h] || (s[h] = [])).push(x.outdatedDependencies[h]);
                        }
                    }
                }

                if (g) {
                    l(f, [x.moduleId]);
                    d[h] = p;
                }
            }
        n = void 0;

        for (let E, _ = 0, k = f.length; _ < k; _++) {
            const T = f[_];
            const C = o.c[T];
            if (C && (C.hot._selfAccepted || C.hot._main) && d[T] !== p && !C.hot._selfInvalidated) {
                E.push({
                    module: T,
                    require: C.hot._requireSelf,
                    errorHandler: C.hot._selfAccepted
                });
            }
        }

        return {
            dispose: function () {
                let e;
                r.forEach((function (e) {
                    delete i[e];
                }));
                r = void 0;
                for (let t, n = f.slice(); n.length > 0;) {
                    const a = n.pop(),
                        u = o.c[a];
                    if (u) {
                        const l = {},
                            c = u.hot._disposeHandlers;
                        for (_ = 0; _ < c.length; _++) {
                            c[_].call(null, l);
                        }
                        o.hmrD[a] = l;
                        u.hot.active = !1;
                        delete o.c[a];
                        delete s[a];
                        _ = 0;
                        for (let f; _ < u.children.length; _++) {
                            const d = o.c[u.children[_]];
                            if (d) {
                                if ((e = d.parents.indexOf(a)) >= 0) {
                                    d.parents.splice(e, 1);
                                }
                            }
                        }
                    }
                }
                for (const p in s)
                    if (o.o(s, p)) {
                        const u = o.c[p];
                        if (u) {
                            E = s[p];
                            for (_ = 0; _ < E.length; _++) {
                                T = E[_];
                                (e = u.children.indexOf(T)) >= 0 && u.children.splice(e, 1);
                            }
                        }
                    }
            },
            apply: function (t) {
                for (const n in d) o.o(d, n) && (o.m[n] = d[n]);
                for (_ = 0; _ < a.length; _++) {
                    a[_](o);
                }
                for (const i in s)
                    if (o.o(s, i)) {
                        const u = o.c[i];
                        if (u) {
                            E = s[i];
                            for (_ = 0; _ < E.length; _++) {
                                const t = E[_],
                                    n = u.hot._acceptedDependencies[t],
                                    r = u.hot._acceptedErrorHandlers[t];
                                if (n) {
                                    if (-1 !== f.indexOf(n)) {
                                        continue;
                                    }
                                    f.push(n);
                                    d.push(r);
                                    p.push(t);
                                }
                            }
                            for (_ = 0; _ < f.length; _++) {
                                try {
                                    f[_].call(null, E);
                                } catch (n) {
                                    if ("function" == typeof d[_]) {
                                        try {
                                            d[_](n, {
                                                moduleId: i,
                                                dependencyId: p[_]
                                            });
                                        } catch (r) {
                                            e.onErrored && e.onErrored({
                                                type: "accept-error-handler-errored",
                                                moduleId: i,
                                                dependencyId: p[_],
                                                error: r,
                                                originalError: n
                                            });
                                            e.ignoreErrored || (t(r), t(n));
                                        }
                                    } else {
                                        e.onErrored && e.onErrored({
                                            type: "accept-errored",
                                            moduleId: i,
                                            dependencyId: p[_],
                                            error: n
                                        });
                                        e.ignoreErrored || t(n);
                                    }
                                }
                            }
                        }
                    }
                for (let w = 0; w < E.length; w++) {
                    const _ = E[w],
                        x = _.module;
                    try {
                        _.require(x);
                    } catch (n) {
                        if ("function" == typeof _.errorHandler) {
                            try {
                                _.errorHandler(n, {
                                    moduleId: x,
                                    module: o.c[x]
                                });
                            } catch (r) {
                                e.onErrored && e.onErrored({
                                    type: "self-accept-error-handler-errored",
                                    moduleId: x,
                                    error: r,
                                    originalError: n
                                });
                                e.ignoreErrored || (t(r), t(n));
                            }
                        } else {
                            e.onErrored && e.onErrored({
                                type: "self-accept-errored",
                                moduleId: x,
                                error: n
                            });
                            e.ignoreErrored || t(n);
                        }
                    }
                }
                return f;
            }
        };
    }

    self.webpackHotUpdatejupyterhub_admin_react = function (t, r, i) {
        for (const l in r) o.o(r, l) && (n[l] = r[l], e && e.push(l));
        i && a.push(i);
        u[t] && (u[t](), u[t] = void 0);
    };

    o.hmrI.jsonp = function (e, t) {
        n || (n = {}, a = [], r = [], t.push(c));
        o.o(n, e) || (n[e] = o.m[e]);
    };

    o.hmrC.jsonp = function (e, u, s, f, d, p) {
        d.push(c);
        t = {};
        r = u;
        n = s.reduce(((e, t) => ((e[t] = !1), e)), {});
        a = [];
        e.forEach(((e) => {
            o.o(i, e) && void 0 !== i[e]
                ? (f.push(l(e, p)), t[e] = !0)
                : (t[e] = !1);
        }));
        o.f &&
            (o.f.jsonpHmr = function (e, n) {
                t && o.o(t, e) && !t[e] && (n.push(l(e)), (t[e] = !0));
            });
    };

    o.hmrM = () => {
        if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
        return fetch(o.p + o.hmrF()).then(((e) => {
            if (404 !== e.status) {
                if (!e.ok) throw new Error(`Failed to fetch update manifest ${e.statusText}`);
                return e.json();
            }
        }));
    };
})();

(() => {
    const e = 927;
    o(() => {
        __webpack_require__.e(e)
            .then(__webpack_require__.bind(null, e))
            .then((e) => {
                const t = e.apply(null, arguments);
                return t instanceof Promise && t.then.bind(t);
            });
    });
})();
