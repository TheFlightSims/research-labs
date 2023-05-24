"use strict";
(self.webpackChunk_quantum_lab_widgets = self.webpackChunk_quantum_lab_widgets || []).push([
    [320], {
        7320: (f, x, m) => {
            m.r(x), m.d(x, {
                BarrierInfo: () => Ms,
                CNotInfo: () => bs,
                CcxInfo: () => vs,
                ControlInfo: () => ks,
                HInfo: () => Cs,
                IdInfo: () => Ls,
                IfInfo: () => Os,
                MDXProvider: () => h,
                MeasureInfo: () => Is,
                NotInfo: () => qs,
                PInfo: () => Xs,
                PhaseDiskInfo: () => Ys,
                ResetInfo: () => Rs,
                RxInfo: () => _s,
                RxxInfo: () => As,
                RyInfo: () => Ts,
                RzInfo: () => Es,
                RzzInfo: () => Ss,
                SInfo: () => Ps,
                SdgInfo: () => Ds,
                SwapInfo: () => Hs,
                SxInfo: () => zs,
                SxdgInfo: () => Bs,
                TInfo: () => Fs,
                TdgInfo: () => Zs,
                TdxInfo: () => Vs,
                UInfo: () => Ws,
                YInfo: () => Qs,
                ZInfo: () => Gs
            });
            var s = m(7051),
                u = m(6271),
                d = m.n(u);
            const o = d().createContext({});

            function g(n) {
                return a;

                function a(t) {
                    const e = i(t.components);
                    return React.createElement(n, {
                        ...t,
                        allComponents: e
                    })
                }
            }

            function i(n) {
                const a = d().useContext(o);
                return d().useMemo(() => typeof n == "function" ? n(a) : {
                    ...a,
                    ...n
                }, [a, n])
            }
            const p = {};

            function h({
                components: n,
                children: a,
                disableParentContext: t
            }) {
                let e = i(n);
                return t && (e = n || p), d().createElement(o.Provider, {
                    value: e
                }, a)
            }
            var c = m(8562),
                j = m(9045),
                r = m.n(j);

            function N(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: `To make your quantum program more efficient, the compiler will try to
combine gates. The barrier is an instruction to the compiler to prevent
these combinations being made.  Additionally, it is useful for visualizations.`
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.Barrier.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var w = N;

            function y(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        code: "code",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: [`The controlled-NOT gate, also known as the controlled-x (CX) gate, acts on a
pair of qubits, with one acting as `, (0, s.jsx)(e.code, {
                                children: "control"
                            }), " and the other as ", (0, s.jsx)(e.code, {
                                children: "target"
                            }), `.
It performs a NOT on the target whenever the control is in state
`, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), `. If the control qubit is in a
`, (0, s.jsx)(e.a, {
                                href: "https://quantum-computing.ibm.com/composer/docs/iqx/terms-glossary#term-superposition",
                                children: "superposition"
                            }), ", this gate creates ", (0, s.jsx)(e.a, {
                                href: "https://quantum-computing.ibm.com/composer/docs/iqx/terms-glossary#term-superposition",
                                children: "entanglement"
                            }), "."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: `All unitary circuits can be decomposed into single qubit gates and CNOT gates.
Because the two-qubit CNOT gate costs much more time to execute on real hardware
than single qubit gates, circuit cost is sometimes measured in the number of CNOT
gates.`
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.CXGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var M = y;

            function b(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: [`The Toffoli gate, also known as the double controlled-NOT gate (CCX), has two control qubits and
one target. It applies a NOT to the target only when both controls are in
state `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), "."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The Toffoli gate with the Hadamard gate is a universal gate set for quantum computing."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.CCXGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var v = b;

            function k(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mn: "mn",
                        mo: "mo",
                        annotation: "annotation"
                    }, i(), n.components);
                    return (0, s.jsxs)(e.p, {
                        children: [`A control modifier yields a gate whose original operation is now contingent on the state of the
control qubit.  When the control is in the `, (0, s.jsx)(e.span, {
                            className: "math math-inline",
                            children: (0, s.jsxs)(e.span, {
                                className: "katex",
                                children: [(0, s.jsx)(e.span, {
                                    className: "katex-mathml",
                                    children: (0, s.jsx)(e.math, {
                                        xmlns: "http://www.w3.org/1998/Math/MathML",
                                        children: (0, s.jsxs)(e.semantics, {
                                            children: [(0, s.jsxs)(e.mrow, {
                                                children: [(0, s.jsx)(e.mi, {
                                                    mathvariant: "normal",
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.mn, {
                                                    children: "1"
                                                }), (0, s.jsx)(e.mo, {
                                                    stretchy: "false",
                                                    children: "\u27E9"
                                                })]
                                            }), (0, s.jsx)(e.annotation, {
                                                encoding: "application/x-tex",
                                                children: "|1\\rangle"
                                            })]
                                        })
                                    })
                                }), (0, s.jsx)(e.span, {
                                    className: "katex-html",
                                    "aria-hidden": "true",
                                    children: (0, s.jsxs)(e.span, {
                                        className: "base",
                                        children: [(0, s.jsx)(e.span, {
                                            className: "strut",
                                            style: {
                                                height: "1em",
                                                verticalAlign: "-0.25em"
                                            }
                                        }), (0, s.jsx)(e.span, {
                                            className: "mord",
                                            children: "\u22231"
                                        }), (0, s.jsx)(e.span, {
                                            className: "mclose",
                                            children: "\u27E9"
                                        })]
                                    })
                                })]
                            })
                        }), ` state, the target qubit(s) undergo the specified
unitary evolution.  In contrast, no operation is performed if the control is in the `, (0, s.jsx)(e.span, {
                            className: "math math-inline",
                            children: (0, s.jsxs)(e.span, {
                                className: "katex",
                                children: [(0, s.jsx)(e.span, {
                                    className: "katex-mathml",
                                    children: (0, s.jsx)(e.math, {
                                        xmlns: "http://www.w3.org/1998/Math/MathML",
                                        children: (0, s.jsxs)(e.semantics, {
                                            children: [(0, s.jsxs)(e.mrow, {
                                                children: [(0, s.jsx)(e.mi, {
                                                    mathvariant: "normal",
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.mn, {
                                                    children: "0"
                                                }), (0, s.jsx)(e.mo, {
                                                    stretchy: "false",
                                                    children: "\u27E9"
                                                })]
                                            }), (0, s.jsx)(e.annotation, {
                                                encoding: "application/x-tex",
                                                children: "|0\\rangle"
                                            })]
                                        })
                                    })
                                }), (0, s.jsx)(e.span, {
                                    className: "katex-html",
                                    "aria-hidden": "true",
                                    children: (0, s.jsxs)(e.span, {
                                        className: "base",
                                        children: [(0, s.jsx)(e.span, {
                                            className: "strut",
                                            style: {
                                                height: "1em",
                                                verticalAlign: "-0.25em"
                                            }
                                        }), (0, s.jsx)(e.span, {
                                            className: "mord",
                                            children: "\u22230"
                                        }), (0, s.jsx)(e.span, {
                                            className: "mclose",
                                            children: "\u27E9"
                                        })]
                                    })
                                })]
                            })
                        }), ` state.
If the control is in a superposition state, then the resulting operation follows from linearity.`]
                    })
                }
            }
            var C = k;

            function L(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The H, or Hadamard, gate rotates the states ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|0\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "0"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), `
and `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " to ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "+"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|+\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "+"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ` and
`, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|-\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "\u2212"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), `, respectively. It is useful for making
`, (0, s.jsx)(e.a, {
                                href: "https://www.quantum-computing.ibm.com/composer/docs/iqx/terms-glossary#term-superposition",
                                children: "superpositions"
                            }), ". If you have a universal gate set on a classical computer and add the Hadamard gate, it becomes a universal gate set on a quantum computer."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.HGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var O = L;

            function I(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p"
                    }, i(), n.components);
                    return (0, s.jsx)(e.p, {
                        children: `The identity gate (sometimes called the Id or the I gate) is actually the absence of a gate. It ensures that
nothing is applied to a qubit for one unit of gate time.`
                    })
                }
            }
            var q = I;

            function X(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p"
                    }, i(), n.components);
                    return (0, s.jsx)(e.p, {
                        children: `The IF operation allows quantum gates to be conditionally applied,
depending on the state of a classical register.`
                    })
                }
            }
            var R = X;

            function _(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p"
                    }, i(), n.components);
                    return (0, s.jsx)(e.p, {
                        children: `Measurement in the standard basis, also known as the z basis or
computational basis. Can be used to implement any kind of measurement
when combined with gates. It is not a reversible operation.`
                    })
                }
            }
            var A = _;

            function T(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        mi: "mi",
                        code: "code",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: [`The NOT gate, also known as the Pauli X gate, flips the
`, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|0\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "0"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " state to ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), `, and
vice versa. The NOT gate is equivalent to RX for the angle `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.4306em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            })]
                                        })
                                    })]
                                })
                            }), " or to ", (0, s.jsx)(e.code, {
                                children: "HZH"
                            }), "."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.XGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var E = T;

            function S(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        msup: "msup",
                        mi: "mi",
                        annotation: "annotation",
                        mo: "mo",
                        mn: "mn",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The Phase gate (previously called the U1 gate) applies a phase of ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsxs)(e.msup, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            children: "e"
                                                        }), (0, s.jsxs)(e.mrow, {
                                                            children: [(0, s.jsx)(e.mi, {
                                                                children: "i"
                                                            }), (0, s.jsx)(e.mi, {
                                                                children: "\u03B8"
                                                            })]
                                                        })]
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "e^{i\\theta}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.8491em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mord mathnormal",
                                                    children: "e"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "msupsub",
                                                    children: (0, s.jsx)(e.span, {
                                                        className: "vlist-t",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.8491em"
                                                                },
                                                                children: (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.063em",
                                                                        marginRight: "0.05em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "2.7em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsxs)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: [(0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                children: "i"
                                                                            }), (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.02778em"
                                                                                },
                                                                                children: "\u03B8"
                                                                            })]
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " to the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ` state. For certain values of
`, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03B8"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\theta"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6944em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.02778em"
                                                },
                                                children: "\u03B8"
                                            })]
                                        })
                                    })]
                                })
                            }), ", it is equivalent to other gates. For example, P(", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.4306em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            })]
                                        })
                                    })]
                                })
                            }), ")=Z, P(", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.4306em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            })]
                                        })
                                    })]
                                })
                            }), "/", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mn, {
                                                        children: "2"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "2"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6444em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "2"
                                            })]
                                        })
                                    })]
                                })
                            }), ")=S, and P(", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "4"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi/4"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/4"
                                            })]
                                        })
                                    })]
                                })
                            }), `)=T. Up to
a global phase of `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsxs)(e.msup, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            children: "e"
                                                        }), (0, s.jsxs)(e.mrow, {
                                                            children: [(0, s.jsx)(e.mi, {
                                                                children: "i"
                                                            }), (0, s.jsx)(e.mi, {
                                                                children: "\u03B8"
                                                            }), (0, s.jsx)(e.mi, {
                                                                mathvariant: "normal",
                                                                children: "/"
                                                            }), (0, s.jsx)(e.mn, {
                                                                children: "2"
                                                            })]
                                                        })]
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "e^{i\\theta/2}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.888em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mord mathnormal",
                                                    children: "e"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "msupsub",
                                                    children: (0, s.jsx)(e.span, {
                                                        className: "vlist-t",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.888em"
                                                                },
                                                                children: (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.063em",
                                                                        marginRight: "0.05em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "2.7em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsxs)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: [(0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                children: "i"
                                                                            }), (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.02778em"
                                                                                },
                                                                                children: "\u03B8"
                                                                            }), (0, s.jsx)(e.span, {
                                                                                className: "mord mtight",
                                                                                children: "/2"
                                                                            })]
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ", it is equivalent to RZ(", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03B8"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\theta"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6944em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.02778em"
                                                },
                                                children: "\u03B8"
                                            })]
                                        })
                                    })]
                                })
                            }), ")."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.PhaseGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var P = S;

            function D(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation"
                    }, i(), n.components);
                    return (0, s.jsxs)(e.p, {
                        children: [`The reset operation returns a qubit to state
`, (0, s.jsx)(e.span, {
                            className: "math math-inline",
                            children: (0, s.jsxs)(e.span, {
                                className: "katex",
                                children: [(0, s.jsx)(e.span, {
                                    className: "katex-mathml",
                                    children: (0, s.jsx)(e.math, {
                                        xmlns: "http://www.w3.org/1998/Math/MathML",
                                        children: (0, s.jsxs)(e.semantics, {
                                            children: [(0, s.jsxs)(e.mrow, {
                                                children: [(0, s.jsx)(e.mo, {
                                                    fence: "true",
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.mn, {
                                                    children: "0"
                                                }), (0, s.jsx)(e.mo, {
                                                    fence: "true",
                                                    children: "\u27E9"
                                                })]
                                            }), (0, s.jsx)(e.annotation, {
                                                encoding: "application/x-tex",
                                                children: "\\left|0\\right\\rangle"
                                            })]
                                        })
                                    })
                                }), (0, s.jsx)(e.span, {
                                    className: "katex-html",
                                    "aria-hidden": "true",
                                    children: (0, s.jsxs)(e.span, {
                                        className: "base",
                                        children: [(0, s.jsx)(e.span, {
                                            className: "strut",
                                            style: {
                                                height: "1em",
                                                verticalAlign: "-0.25em"
                                            }
                                        }), (0, s.jsxs)(e.span, {
                                            className: "minner",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "mopen delimcenter",
                                                style: {
                                                    top: "0em"
                                                },
                                                children: "\u2223"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose delimcenter",
                                                style: {
                                                    top: "0em"
                                                },
                                                children: "\u27E9"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), `, irrespective of its state before the
operation was applied. It is not a reversible operation.`]
                    })
                }
            }
            var z = D;

            function B(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mo: "mo",
                        mfrac: "mfrac",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The RX gate implements ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "e"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "x"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "p"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "("
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "i"
                                                    }), (0, s.jsxs)(e.mfrac, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            children: "\u03B8"
                                                        }), (0, s.jsx)(e.mn, {
                                                            children: "2"
                                                        })]
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "X"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: ")"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "exp(-i\\frac{\\theta}{2}X)"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.2251em",
                                                    verticalAlign: "-0.345em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "e"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "x"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "p"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "("
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2212"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "i"
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen nulldelimiter"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mfrac",
                                                    children: (0, s.jsxs)(e.span, {
                                                        className: "vlist-t vlist-t2",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist-r",
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.8801em"
                                                                },
                                                                children: [(0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-2.655em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mtight",
                                                                                children: "2"
                                                                            })
                                                                        })
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.23em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "frac-line",
                                                                        style: {
                                                                            borderBottomWidth: "0.04em"
                                                                        }
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.394em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.02778em"
                                                                                },
                                                                                children: "\u03B8"
                                                                            })
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, s.jsx)(e.span, {
                                                                className: "vlist-s",
                                                                children: "\u200B"
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.345em"
                                                                },
                                                                children: (0, s.jsx)(e.span, {})
                                                            })
                                                        })]
                                                    })
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose nulldelimiter"
                                                })]
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.07847em"
                                                },
                                                children: "X"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: ")"
                                            })]
                                        })
                                    })]
                                })
                            }), `.
On the Bloch sphere, this gate corresponds to rotating the qubit state around the x axis by the given angle.`]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.RXGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var H = B;

            function F(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The RXX gate implements ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "exp"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2061"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "("
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "i"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "\u03B8"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "2"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "X"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2297"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "X"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: ")"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\exp(-i \\theta/2 X \\otimes X)"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsxs)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: [(0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mop",
                                                children: "exp"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "("
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2212"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "i"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.02778em"
                                                },
                                                children: "\u03B8"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/2"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.07847em"
                                                },
                                                children: "X"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mspace",
                                                style: {
                                                    marginRight: "0.2222em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mbin",
                                                children: "\u2297"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mspace",
                                                style: {
                                                    marginRight: "0.2222em"
                                                }
                                            })]
                                        }), (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.07847em"
                                                },
                                                children: "X"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: ")"
                                            })]
                                        })]
                                    })]
                                })
                            }), ". The M\xF8lmer\u2013S\xF8rensen gate, the native gate on ion-trap systems, can be expressed as a sum of RXX gates."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.RXXGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var Z = F;

            function V(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mo: "mo",
                        mfrac: "mfrac",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The RY gate implements ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "e"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "x"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "p"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "("
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "i"
                                                    }), (0, s.jsxs)(e.mfrac, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            children: "\u03B8"
                                                        }), (0, s.jsx)(e.mn, {
                                                            children: "2"
                                                        })]
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "Y"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: ")"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "exp(-i\\frac{\\theta}{2}Y)"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.2251em",
                                                    verticalAlign: "-0.345em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "e"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "x"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "p"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "("
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2212"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "i"
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen nulldelimiter"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mfrac",
                                                    children: (0, s.jsxs)(e.span, {
                                                        className: "vlist-t vlist-t2",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist-r",
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.8801em"
                                                                },
                                                                children: [(0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-2.655em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mtight",
                                                                                children: "2"
                                                                            })
                                                                        })
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.23em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "frac-line",
                                                                        style: {
                                                                            borderBottomWidth: "0.04em"
                                                                        }
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.394em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.02778em"
                                                                                },
                                                                                children: "\u03B8"
                                                                            })
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, s.jsx)(e.span, {
                                                                className: "vlist-s",
                                                                children: "\u200B"
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.345em"
                                                                },
                                                                children: (0, s.jsx)(e.span, {})
                                                            })
                                                        })]
                                                    })
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose nulldelimiter"
                                                })]
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.22222em"
                                                },
                                                children: "Y"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: ")"
                                            })]
                                        })
                                    })]
                                })
                            }), `.
On the Bloch sphere, this gate corresponds to rotating the qubit state
around the y axis by the given angle and does not introduce complex amplitudes.`]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.RYGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var W = V;

            function Q(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mo: "mo",
                        mfrac: "mfrac",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The RZ gate implements ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "e"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "x"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "p"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "("
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "i"
                                                    }), (0, s.jsxs)(e.mfrac, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            children: "\u03B8"
                                                        }), (0, s.jsx)(e.mn, {
                                                            children: "2"
                                                        })]
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "Z"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: ")"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "exp(-i\\frac{\\theta}{2}Z)"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.2251em",
                                                    verticalAlign: "-0.345em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "e"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "x"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "p"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "("
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2212"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "i"
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen nulldelimiter"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mfrac",
                                                    children: (0, s.jsxs)(e.span, {
                                                        className: "vlist-t vlist-t2",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist-r",
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.8801em"
                                                                },
                                                                children: [(0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-2.655em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mtight",
                                                                                children: "2"
                                                                            })
                                                                        })
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.23em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "frac-line",
                                                                        style: {
                                                                            borderBottomWidth: "0.04em"
                                                                        }
                                                                    })]
                                                                }), (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.394em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "3em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.02778em"
                                                                                },
                                                                                children: "\u03B8"
                                                                            })
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, s.jsx)(e.span, {
                                                                className: "vlist-s",
                                                                children: "\u200B"
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.345em"
                                                                },
                                                                children: (0, s.jsx)(e.span, {})
                                                            })
                                                        })]
                                                    })
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose nulldelimiter"
                                                })]
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.07153em"
                                                },
                                                children: "Z"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: ")"
                                            })]
                                        })
                                    })]
                                })
                            }), `.
On the Bloch sphere, this gate corresponds to rotating the qubit state
around the z axis by the given angle.`]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.RZGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var G = Q;

            function Y(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: `The RZZ gate requires a single parameter: an angle expressed in radians.
This gate is symmetric; swapping the two qubits it acts on doesn\u2019t change anything.`
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.RZZGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var U = Y;

            function $(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        annotation: "annotation",
                        mo: "mo",
                        mn: "mn",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The S gate applies a phase of ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "i"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "i"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6595em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                children: "i"
                                            })]
                                        })
                                    })]
                                })
                            }), " to the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ` state. It is
equivalent to RZ for the angle `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "2"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi/2"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/2"
                                            })]
                                        })
                                    })]
                                })
                            }), ". Note that S=P(", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "2"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi/2"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/2"
                                            })]
                                        })
                                    })]
                                })
                            }), ")."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.SGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var J = $;

            function K(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "Also known as the Sdg or S-dagger gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The inverse of the S gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.SdgGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var ss = K;

            function es(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        msqrt: "msqrt",
                        mi: "mi",
                        annotation: "annotation",
                        svg: "svg",
                        path: "path",
                        a: "a",
                        mn: "mn",
                        mo: "mo"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "Also known as the square-root NOT gate."
                        }), `
`, (0, s.jsxs)(e.p, {
                            children: ["This gate implements the square-root of X, ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.msqrt, {
                                                        children: (0, s.jsx)(e.mi, {
                                                            children: "X"
                                                        })
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\sqrt{X}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.04em",
                                                    verticalAlign: "-0.1133em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord sqrt",
                                                children: (0, s.jsxs)(e.span, {
                                                    className: "vlist-t vlist-t2",
                                                    children: [(0, s.jsxs)(e.span, {
                                                        className: "vlist-r",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.9267em"
                                                            },
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "svg-align",
                                                                style: {
                                                                    top: "-3em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "mord",
                                                                    style: {
                                                                        paddingLeft: "0.833em"
                                                                    },
                                                                    children: (0, s.jsx)(e.span, {
                                                                        className: "mord mathnormal",
                                                                        style: {
                                                                            marginRight: "0.07847em"
                                                                        },
                                                                        children: "X"
                                                                    })
                                                                })]
                                                            }), (0, s.jsxs)(e.span, {
                                                                style: {
                                                                    top: "-2.8867em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "hide-tail",
                                                                    style: {
                                                                        minWidth: "0.853em",
                                                                        height: "1.08em"
                                                                    },
                                                                    children: (0, s.jsx)(e.svg, {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "400em",
                                                                        height: "1.08em",
                                                                        viewBox: "0 0 400000 1080",
                                                                        preserveAspectRatio: "xMinYMin slice",
                                                                        children: (0, s.jsx)(e.path, {
                                                                            d: `M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`
                                                                        })
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-s",
                                                            children: "\u200B"
                                                        })]
                                                    }), (0, s.jsx)(e.span, {
                                                        className: "vlist-r",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.1133em"
                                                            },
                                                            children: (0, s.jsx)(e.span, {})
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), `.
Applying this gate twice in a row produces the standard Pauli-X gate `, (0, s.jsx)(e.a, {
                                href: "https://www.quantum-computing.ibm.com/composer/docs/iqx/operations_glossary#not-gate",
                                children: "NOT gate"
                            }), `.
Like the Hadamard gate, `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.msqrt, {
                                                        children: (0, s.jsx)(e.mi, {
                                                            children: "X"
                                                        })
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\sqrt{X}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.04em",
                                                    verticalAlign: "-0.1133em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord sqrt",
                                                children: (0, s.jsxs)(e.span, {
                                                    className: "vlist-t vlist-t2",
                                                    children: [(0, s.jsxs)(e.span, {
                                                        className: "vlist-r",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.9267em"
                                                            },
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "svg-align",
                                                                style: {
                                                                    top: "-3em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "mord",
                                                                    style: {
                                                                        paddingLeft: "0.833em"
                                                                    },
                                                                    children: (0, s.jsx)(e.span, {
                                                                        className: "mord mathnormal",
                                                                        style: {
                                                                            marginRight: "0.07847em"
                                                                        },
                                                                        children: "X"
                                                                    })
                                                                })]
                                                            }), (0, s.jsxs)(e.span, {
                                                                style: {
                                                                    top: "-2.8867em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "hide-tail",
                                                                    style: {
                                                                        minWidth: "0.853em",
                                                                        height: "1.08em"
                                                                    },
                                                                    children: (0, s.jsx)(e.svg, {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "400em",
                                                                        height: "1.08em",
                                                                        viewBox: "0 0 400000 1080",
                                                                        preserveAspectRatio: "xMinYMin slice",
                                                                        children: (0, s.jsx)(e.path, {
                                                                            d: `M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`
                                                                        })
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-s",
                                                            children: "\u200B"
                                                        })]
                                                    }), (0, s.jsx)(e.span, {
                                                        className: "vlist-r",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.1133em"
                                                            },
                                                            children: (0, s.jsx)(e.span, {})
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), " creates an equal superposition state if the qubit is in the state ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "|0\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u22230"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: "\u27E9"
                                            })]
                                        })
                                    })]
                                })
                            }), `,
but with a different relative phase.
On some hardwares, it is a native gate that can be implemented with a `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "2"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi/2"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/2"
                                            })]
                                        })
                                    })]
                                })
                            }), " or X90 pulse."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.SXGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var ns = es;

            function as(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        msqrt: "msqrt",
                        mi: "mi",
                        annotation: "annotation",
                        svg: "svg",
                        path: "path",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "Also known as the SXdg or square-root NOT-dagger gate."
                        }), `
`, (0, s.jsxs)(e.p, {
                            children: ["This is the inverse of the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.msqrt, {
                                                        children: (0, s.jsx)(e.mi, {
                                                            children: "X"
                                                        })
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\sqrt{X}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.04em",
                                                    verticalAlign: "-0.1133em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord sqrt",
                                                children: (0, s.jsxs)(e.span, {
                                                    className: "vlist-t vlist-t2",
                                                    children: [(0, s.jsxs)(e.span, {
                                                        className: "vlist-r",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.9267em"
                                                            },
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "svg-align",
                                                                style: {
                                                                    top: "-3em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "mord",
                                                                    style: {
                                                                        paddingLeft: "0.833em"
                                                                    },
                                                                    children: (0, s.jsx)(e.span, {
                                                                        className: "mord mathnormal",
                                                                        style: {
                                                                            marginRight: "0.07847em"
                                                                        },
                                                                        children: "X"
                                                                    })
                                                                })]
                                                            }), (0, s.jsxs)(e.span, {
                                                                style: {
                                                                    top: "-2.8867em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "hide-tail",
                                                                    style: {
                                                                        minWidth: "0.853em",
                                                                        height: "1.08em"
                                                                    },
                                                                    children: (0, s.jsx)(e.svg, {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "400em",
                                                                        height: "1.08em",
                                                                        viewBox: "0 0 400000 1080",
                                                                        preserveAspectRatio: "xMinYMin slice",
                                                                        children: (0, s.jsx)(e.path, {
                                                                            d: `M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`
                                                                        })
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-s",
                                                            children: "\u200B"
                                                        })]
                                                    }), (0, s.jsx)(e.span, {
                                                        className: "vlist-r",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.1133em"
                                                            },
                                                            children: (0, s.jsx)(e.span, {})
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), ` gate.
Applying it twice in a row produces the Pauli-X gate `, (0, s.jsx)(e.a, {
                                href: "https://www.quantum-computing.ibm.com/composer/docs/iqx/operations_glossary#not-gate",
                                children: "NOT gate"
                            }), `, since the NOT gate is its own inverse.
Like the `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.msqrt, {
                                                        children: (0, s.jsx)(e.mi, {
                                                            children: "X"
                                                        })
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\sqrt{X}"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.04em",
                                                    verticalAlign: "-0.1133em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord sqrt",
                                                children: (0, s.jsxs)(e.span, {
                                                    className: "vlist-t vlist-t2",
                                                    children: [(0, s.jsxs)(e.span, {
                                                        className: "vlist-r",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.9267em"
                                                            },
                                                            children: [(0, s.jsxs)(e.span, {
                                                                className: "svg-align",
                                                                style: {
                                                                    top: "-3em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "mord",
                                                                    style: {
                                                                        paddingLeft: "0.833em"
                                                                    },
                                                                    children: (0, s.jsx)(e.span, {
                                                                        className: "mord mathnormal",
                                                                        style: {
                                                                            marginRight: "0.07847em"
                                                                        },
                                                                        children: "X"
                                                                    })
                                                                })]
                                                            }), (0, s.jsxs)(e.span, {
                                                                style: {
                                                                    top: "-2.8867em"
                                                                },
                                                                children: [(0, s.jsx)(e.span, {
                                                                    className: "pstrut",
                                                                    style: {
                                                                        height: "3em"
                                                                    }
                                                                }), (0, s.jsx)(e.span, {
                                                                    className: "hide-tail",
                                                                    style: {
                                                                        minWidth: "0.853em",
                                                                        height: "1.08em"
                                                                    },
                                                                    children: (0, s.jsx)(e.svg, {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "400em",
                                                                        height: "1.08em",
                                                                        viewBox: "0 0 400000 1080",
                                                                        preserveAspectRatio: "xMinYMin slice",
                                                                        children: (0, s.jsx)(e.path, {
                                                                            d: `M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`
                                                                        })
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-s",
                                                            children: "\u200B"
                                                        })]
                                                    }), (0, s.jsx)(e.span, {
                                                        className: "vlist-r",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist",
                                                            style: {
                                                                height: "0.1133em"
                                                            },
                                                            children: (0, s.jsx)(e.span, {})
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), ` gate, this gate can be used to create an equal superposition state, and it too
is natively implemented on some hardwares using an X90 pulse.`]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.SXdgGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var ts = as;

            function is(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "The SWAP gate swaps the states of two qubits."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.SwapGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var ls = is;

            function cs(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The T gate is equivalent to RZ for the angle ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "/"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "4"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi/4"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "/4"
                                            })]
                                        })
                                    })]
                                })
                            }), `.
Fault-tolerant quantum computers will compile all quantum programs down
to just the T gate and its inverse, as well as the Clifford gates.`]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.TGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var rs = cs;

            function ms(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "Also known as the Tdg or T-dagger gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The inverse of the T gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.TdgGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var hs = ms;

            function os(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "Also known as the Tdg or T-dagger gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The inverse of the T gate."
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.TdgGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var xs = os;

            function ds(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: `The three parameters allow the
construction of any single-qubit gate. Has a duration of one unit of gate time.`
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.UGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var ps = ds;

            function js(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mi: "mi",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The Pauli Y gate is equivalent to Ry for the angle ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "\u03C0"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\pi"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.4306em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C0"
                                            })]
                                        })
                                    })]
                                })
                            }), ". It is equivalent to applying X and Z, up to a global phase factor."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.YGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var us = js;

            function gs(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        a: "a"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(e.p, {
                            children: ["The Pauli Z gate acts as identity on the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|0\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "0"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ` state and multiplies the sign of the
`, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " state by -1. It therefore flips the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "+"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|+\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "+"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " and ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|-\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "\u2212"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), ` states. In the +/- basis, it
plays the same role as the NOT gate in the `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|0\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "0"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), "/", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " basis."]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: (0, s.jsx)(e.a, {
                                href: "https://qiskit.org/documentation/stubs/qiskit.circuit.library.ZGate.html",
                                children: "Qiskit API Reference"
                            })
                        })]
                    })
                }
            }
            var Ns = gs;

            function fs(n = {}) {
                const {
                    wrapper: a
                } = Object.assign({}, i(), n.components);
                return a ? (0, s.jsx)(a, Object.assign({}, n, {
                    children: (0, s.jsx)(t, {})
                })) : t();

                function t() {
                    const e = Object.assign({
                        p: "p",
                        h4: "h4",
                        span: "span",
                        math: "math",
                        semantics: "semantics",
                        mrow: "mrow",
                        mo: "mo",
                        mn: "mn",
                        annotation: "annotation",
                        mi: "mi",
                        msub: "msub",
                        msup: "msup"
                    }, i(), n.components);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(e.p, {
                            children: "The phase disk gives the local state of each qubit. The components of the phase disk are described below."
                        }), `
`, (0, s.jsxs)(e.h4, {
                            children: ["Probability the qubit is in the ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        fence: "true",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\left|1\\right\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsxs)(e.span, {
                                                className: "minner",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mopen delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u2223"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: "1"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "mclose delimcenter",
                                                    style: {
                                                        top: "0em"
                                                    },
                                                    children: "\u27E9"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), " state"]
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The probability that the qubit is in the  state is represented by the blue disk fill."
                        }), `
`, (0, s.jsxs)("svg", {
                            width: "111",
                            height: "81",
                            viewBox: "0 0 111 81",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("circle", {
                                cx: "25",
                                cy: "39.314",
                                r: "24",
                                fill: "#E5E5E5"
                            }), (0, s.jsx)("path", {
                                d: "M20.6 1V0.9H20.5H19.6699H19.5699V1V10.5V10.6H19.6699H20.5H20.6V10.5V1ZM28.2034 9.4139H28.3034V9.3139V8.5739V8.4739H28.2034H26.5034V2.3339V2.2339H26.4034H25.0934H25.0539L25.0251 2.26086L23.1751 3.99086L23.1025 4.05878L23.17 4.13179L23.66 4.66179L23.7281 4.7355L23.8016 4.66706L25.4634 3.11854V8.4739H23.6134H23.5134V8.5739V9.3139V9.4139H23.6134H28.2034ZM32.5955 5.79657L32.6047 5.76703L32.5955 5.73749L31.2186 1.28436L31.1968 1.2139H31.123H30.293H30.1574L30.1974 1.34344L31.5653 5.76703L30.1974 10.1906L30.1574 10.3202H30.293H31.123H31.1968L31.2186 10.2497L32.5955 5.79657Z",
                                className: "fill-text-01"
                            }), (0, s.jsx)("text", {
                                className: "fill-text-03",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "79",
                                    y: "15.75",
                                    children: "100%"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-03",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "79",
                                    y: "43.75",
                                    children: "50%"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "79",
                                    y: "30.064",
                                    children: "75%"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-03",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "79",
                                    y: "65.75",
                                    children: "0%"
                                })
                            }), (0, s.jsx)("path", {
                                d: "M25 63.314C38.2548 63.314 49 52.5688 49 39.314C49 34.9425 47.8313 30.844 45.7892 27.314H4.21077C2.16873 30.844 1 34.9425 1 39.314C1 52.5688 11.7452 63.314 25 63.314Z",
                                fill: "#33B1FF"
                            }), (0, s.jsx)("path", {
                                d: "M40 16.314L74 16.314",
                                className: "stroke-text-03"
                            }), (0, s.jsx)("path", {
                                d: "M51 27.314L74 27.314",
                                className: "stroke-text-02"
                            }), (0, s.jsx)("path", {
                                d: "M51 39.314L74 39.314",
                                className: "stroke-text-03"
                            }), (0, s.jsx)("path", {
                                d: "M40 62.314L74 62.314",
                                className: "stroke-text-03"
                            }), (0, s.jsx)("path", {
                                d: "M20.6 68.314V68.214H20.5H19.6699H19.5699V68.314V78.314V78.414H19.6699H20.5H20.6V78.314V68.314ZM24.0221 76.044L24.0225 76.0445C24.4751 76.7184 25.1322 77.0556 25.9805 77.0556C26.8288 77.0556 27.4844 76.7184 27.9338 76.0442C28.3823 75.3731 28.6 74.4127 28.6 73.1763C28.6 71.9368 28.3824 70.9764 27.9338 70.3083C27.4845 69.6311 26.8289 69.2921 25.9805 69.2921C25.132 69.2921 24.4749 69.6311 24.0223 70.3082L24.0223 70.3083C23.5769 70.9763 23.3609 71.9367 23.3609 73.1763C23.3609 74.4127 23.577 75.3729 24.0221 76.044ZM27.039 75.3816L27.0388 75.3818C26.9181 75.6187 26.7697 75.7907 26.5961 75.9037C26.423 76.0165 26.219 76.0743 25.9805 76.0743C25.7437 76.0743 25.5405 76.0165 25.3673 75.9037C25.1936 75.7907 25.0445 75.6187 24.9221 75.3818C24.6789 74.9015 24.5521 74.1701 24.5521 73.1763C24.5521 72.1789 24.679 71.4477 24.9221 70.9708C25.0445 70.7321 25.1938 70.5588 25.3676 70.445C25.5407 70.3315 25.7438 70.2733 25.9805 70.2733C26.2189 70.2733 26.4227 70.3315 26.5958 70.445C26.7694 70.5587 26.9179 70.7319 27.0387 70.9705L27.0391 70.9712C27.2852 71.4479 27.4137 72.1789 27.4137 73.1763C27.4137 74.1703 27.2852 74.9015 27.039 75.3816ZM32.8026 73.3904L32.8117 73.3608L32.8026 73.3313L31.4256 68.8782L31.4038 68.8077H31.3301H30.5H30.3644L30.4045 68.9373L31.7723 73.3608L30.4045 77.7844L30.3644 77.914H30.5H31.3301H31.4038L31.4256 77.8435L32.8026 73.3904Z",
                                className: "fill-text-01"
                            })]
                        }), `
`, (0, s.jsx)(e.h4, {
                            children: "Quantum Phase"
                        }), `
`, (0, s.jsx)(e.p, {
                            children: "The quantum phase of the qubit state is given by the line that extends from the center of the diagram to the edge of the gray disk (which rotates counterclockwise around the center point)."
                        }), `
`, (0, s.jsxs)("svg", {
                            width: "73",
                            height: "80",
                            viewBox: "0 0 73 80",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("circle", {
                                cx: "37",
                                cy: "40",
                                r: "24",
                                fill: "#E5E5E5"
                            }), (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M21 40.0173V39.9824C21 39.9882 21 39.994 21 39.9999C21 40.0057 21 40.0115 21 40.0173Z",
                                fill: "#33B1FF"
                            }), (0, s.jsx)("path", {
                                d: "M60.0001 41.4622C60.5523 41.4622 61.0001 41.0144 61.0001 40.4622C61.0001 39.9099 60.5523 39.4622 60.0001 39.4622L60.0001 41.4622ZM36.9999 39.4622C36.4477 39.4622 35.9999 39.9099 35.9999 40.4622C35.9999 41.0145 36.4477 41.4622 36.9999 41.4622L36.9999 39.4622ZM60.0001 39.4622L36.9999 39.4622L36.9999 41.4622L60.0001 41.4622L60.0001 39.4622Z",
                                fill: "#C1C1C1"
                            }), (0, s.jsx)("path", {
                                d: "M25.8274 19.5015C25.5521 19.0228 24.9408 18.8578 24.462 19.1331C23.9833 19.4084 23.8183 20.0197 24.0936 20.4985L25.8274 19.5015ZM35.5936 40.499C35.8689 40.9777 36.4802 41.1427 36.959 40.8674C37.4378 40.5921 37.6027 39.9808 37.3274 39.502L35.5936 40.499ZM24.0936 20.4985L35.5936 40.499L37.3274 39.502L25.8274 19.5015L24.0936 20.4985Z",
                                fill: "#161616"
                            }), (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "28.4671",
                                    y: "7.75",
                                    children: "\u03C0/2"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "25.3091",
                                    y: "76.75",
                                    children: "3\u03C0/2"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "0.321289",
                                    y: "42.75",
                                    children: "\u03C0"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "67.002",
                                    y: "42.75",
                                    children: "0"
                                })
                            }), (0, s.jsx)("path", {
                                d: "M31 21.7951L36.4245 23.7721L35.4243 18.0858L31 21.7951ZM35.4532 21.5151C35.6898 21.5051 35.9277 21.5 36.1667 21.5V20.5C35.9135 20.5 35.6615 20.5054 35.4108 20.516L35.4532 21.5151ZM36.1667 21.5C44.8555 21.5 52.1056 28.2143 53.5061 37.078L54.4939 36.922C53.0247 27.6243 45.3985 20.5 36.1667 20.5V21.5Z",
                                fill: "black"
                            }), (0, s.jsx)("text", {
                                fill: "#A8A8A8",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "35",
                                    y: "35.75",
                                    children: " \u03B8"
                                })
                            })]
                        }), `
`, (0, s.jsx)(e.h4, {
                            children: "Reduced purity of the qubit state"
                        }), `
`, (0, s.jsxs)(e.p, {
                            children: [`The radius of the black ring represents the
reduced purity of the qubit state, which for qubit `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "j"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "j"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.854em",
                                                    verticalAlign: "-0.1944em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.05724em"
                                                },
                                                children: "j"
                                            })]
                                        })
                                    })]
                                })
                            }), " in an ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mi, {
                                                        children: "N"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "N"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6833em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.10903em"
                                                },
                                                children: "N"
                                            })]
                                        })
                                    })]
                                })
                            }), "-qubit state ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "\u03C8"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "\u27E9"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "|\\psi\\rangle"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2223"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C8"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: "\u27E9"
                                            })]
                                        })
                                    })]
                                })
                            }), `
is given by `, (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsxs)(e.mrow, {
                                                        children: [(0, s.jsx)(e.mi, {
                                                            mathvariant: "normal",
                                                            children: "T"
                                                        }), (0, s.jsx)(e.mi, {
                                                            mathvariant: "normal",
                                                            children: "r"
                                                        })]
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "["
                                                    }), (0, s.jsxs)(e.msub, {
                                                        children: [(0, s.jsxs)(e.mrow, {
                                                            children: [(0, s.jsx)(e.mi, {
                                                                mathvariant: "normal",
                                                                children: "T"
                                                            }), (0, s.jsx)(e.mi, {
                                                                mathvariant: "normal",
                                                                children: "r"
                                                            })]
                                                        }), (0, s.jsxs)(e.mrow, {
                                                            children: [(0, s.jsx)(e.mi, {
                                                                children: "i"
                                                            }), (0, s.jsx)(e.mo, {
                                                                mathvariant: "normal",
                                                                children: "\u2260"
                                                            }), (0, s.jsx)(e.mi, {
                                                                children: "j"
                                                            })]
                                                        })]
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "["
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "\u2223"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "\u03C8"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "\u27E9"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "\u27E8"
                                                    }), (0, s.jsx)(e.mi, {
                                                        children: "\u03C8"
                                                    }), (0, s.jsx)(e.mi, {
                                                        mathvariant: "normal",
                                                        children: "\u2223"
                                                    }), (0, s.jsxs)(e.msup, {
                                                        children: [(0, s.jsx)(e.mo, {
                                                            stretchy: "false",
                                                            children: "]"
                                                        }), (0, s.jsx)(e.mn, {
                                                            children: "2"
                                                        })]
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "]"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "\\mathrm{Tr}[\\mathrm{Tr}_{i\\neq j}[|\\psi\\rangle\\langle\\psi|]^{2}]"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1.1002em",
                                                    verticalAlign: "-0.2861em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: (0, s.jsx)(e.span, {
                                                    className: "mord mathrm",
                                                    children: "Tr"
                                                })
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "["
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mord",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mord",
                                                    children: (0, s.jsx)(e.span, {
                                                        className: "mord mathrm",
                                                        children: "Tr"
                                                    })
                                                }), (0, s.jsx)(e.span, {
                                                    className: "msupsub",
                                                    children: (0, s.jsxs)(e.span, {
                                                        className: "vlist-t vlist-t2",
                                                        children: [(0, s.jsxs)(e.span, {
                                                            className: "vlist-r",
                                                            children: [(0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.3361em"
                                                                },
                                                                children: (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-2.55em",
                                                                        marginRight: "0.05em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "2.7em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsxs)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: [(0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                children: "i"
                                                                            }), (0, s.jsxs)(e.span, {
                                                                                className: "mrel mtight",
                                                                                children: [(0, s.jsx)(e.span, {
                                                                                    className: "mrel mtight",
                                                                                    children: (0, s.jsx)(e.span, {
                                                                                        className: "mord vbox mtight",
                                                                                        children: (0, s.jsx)(e.span, {
                                                                                            className: "thinbox mtight",
                                                                                            children: (0, s.jsxs)(e.span, {
                                                                                                className: "rlap mtight",
                                                                                                children: [(0, s.jsx)(e.span, {
                                                                                                    className: "strut",
                                                                                                    style: {
                                                                                                        height: "0.8889em",
                                                                                                        verticalAlign: "-0.1944em"
                                                                                                    }
                                                                                                }), (0, s.jsx)(e.span, {
                                                                                                    className: "inner",
                                                                                                    children: (0, s.jsx)(e.span, {
                                                                                                        className: "mord mtight",
                                                                                                        children: (0, s.jsx)(e.span, {
                                                                                                            className: "mrel mtight",
                                                                                                            children: "\uE020"
                                                                                                        })
                                                                                                    })
                                                                                                }), (0, s.jsx)(e.span, {
                                                                                                    className: "fix"
                                                                                                })]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }), (0, s.jsx)(e.span, {
                                                                                    className: "mrel mtight",
                                                                                    children: "="
                                                                                })]
                                                                            }), (0, s.jsx)(e.span, {
                                                                                className: "mord mathnormal mtight",
                                                                                style: {
                                                                                    marginRight: "0.05724em"
                                                                                },
                                                                                children: "j"
                                                                            })]
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(e.span, {
                                                                className: "vlist-s",
                                                                children: "\u200B"
                                                            })]
                                                        }), (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.2861em"
                                                                },
                                                                children: (0, s.jsx)(e.span, {})
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "["
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2223"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C8"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: "\u27E9"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "\u27E8"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.03588em"
                                                },
                                                children: "\u03C8"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "\u2223"
                                            }), (0, s.jsxs)(e.span, {
                                                className: "mclose",
                                                children: [(0, s.jsx)(e.span, {
                                                    className: "mclose",
                                                    children: "]"
                                                }), (0, s.jsx)(e.span, {
                                                    className: "msupsub",
                                                    children: (0, s.jsx)(e.span, {
                                                        className: "vlist-t",
                                                        children: (0, s.jsx)(e.span, {
                                                            className: "vlist-r",
                                                            children: (0, s.jsx)(e.span, {
                                                                className: "vlist",
                                                                style: {
                                                                    height: "0.8141em"
                                                                },
                                                                children: (0, s.jsxs)(e.span, {
                                                                    style: {
                                                                        top: "-3.063em",
                                                                        marginRight: "0.05em"
                                                                    },
                                                                    children: [(0, s.jsx)(e.span, {
                                                                        className: "pstrut",
                                                                        style: {
                                                                            height: "2.7em"
                                                                        }
                                                                    }), (0, s.jsx)(e.span, {
                                                                        className: "sizing reset-size6 size3 mtight",
                                                                        children: (0, s.jsx)(e.span, {
                                                                            className: "mord mtight",
                                                                            children: (0, s.jsx)(e.span, {
                                                                                className: "mord mtight",
                                                                                children: "2"
                                                                            })
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: "]"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), `
`, (0, s.jsxs)(e.p, {
                            children: ["The reduced purity for a single qubit is in the range ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "["
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "0.5"
                                                    }), (0, s.jsx)(e.mo, {
                                                        separator: "true",
                                                        children: ","
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    }), (0, s.jsx)(e.mo, {
                                                        stretchy: "false",
                                                        children: "]"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "[0.5, 1]"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "1em",
                                                    verticalAlign: "-0.25em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mopen",
                                                children: "["
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "0.5"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mpunct",
                                                children: ","
                                            }), (0, s.jsx)(e.span, {
                                                className: "mspace",
                                                style: {
                                                    marginRight: "0.1667em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "1"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mclose",
                                                children: "]"
                                            })]
                                        })
                                    })]
                                })
                            }), "; a value of one indicates that the qubit is not entangled with any other party.  In contrast, a reduced purity of ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsx)(e.mrow, {
                                                    children: (0, s.jsx)(e.mn, {
                                                        children: "0.5"
                                                    })
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "0.5"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6444em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "0.5"
                                            })]
                                        })
                                    })]
                                })
                            }), " shows that the qubit is left in the completely mixed state, and has some level of entanglement over the remaining ", (0, s.jsx)(e.span, {
                                className: "math math-inline",
                                children: (0, s.jsxs)(e.span, {
                                    className: "katex",
                                    children: [(0, s.jsx)(e.span, {
                                        className: "katex-mathml",
                                        children: (0, s.jsx)(e.math, {
                                            xmlns: "http://www.w3.org/1998/Math/MathML",
                                            children: (0, s.jsxs)(e.semantics, {
                                                children: [(0, s.jsxs)(e.mrow, {
                                                    children: [(0, s.jsx)(e.mi, {
                                                        children: "N"
                                                    }), (0, s.jsx)(e.mo, {
                                                        children: "\u2212"
                                                    }), (0, s.jsx)(e.mn, {
                                                        children: "1"
                                                    })]
                                                }), (0, s.jsx)(e.annotation, {
                                                    encoding: "application/x-tex",
                                                    children: "N-1"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsxs)(e.span, {
                                        className: "katex-html",
                                        "aria-hidden": "true",
                                        children: [(0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.7667em",
                                                    verticalAlign: "-0.0833em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord mathnormal",
                                                style: {
                                                    marginRight: "0.10903em"
                                                },
                                                children: "N"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mspace",
                                                style: {
                                                    marginRight: "0.2222em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mbin",
                                                children: "\u2212"
                                            }), (0, s.jsx)(e.span, {
                                                className: "mspace",
                                                style: {
                                                    marginRight: "0.2222em"
                                                }
                                            })]
                                        }), (0, s.jsxs)(e.span, {
                                            className: "base",
                                            children: [(0, s.jsx)(e.span, {
                                                className: "strut",
                                                style: {
                                                    height: "0.6444em"
                                                }
                                            }), (0, s.jsx)(e.span, {
                                                className: "mord",
                                                children: "1"
                                            })]
                                        })]
                                    })]
                                })
                            }), " qubits, and possibly even the environment."]
                        }), `
`, (0, s.jsxs)("svg", {
                            width: "175",
                            height: "159",
                            viewBox: "0 0 175 159",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "0.233631",
                                    y: "65.75",
                                    children: "No entanglement"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "99.0266",
                                    y: "65.75",
                                    children: "Partially mixed"
                                })
                            }), (0, s.jsx)("circle", {
                                cx: "43",
                                cy: "27",
                                r: "24",
                                fill: "#E5E5E5"
                            }), (0, s.jsx)("circle", {
                                cx: "43",
                                cy: "27",
                                r: "24",
                                stroke: "#161616",
                                strokeWidth: "2"
                            }), (0, s.jsx)("circle", {
                                cx: "135",
                                cy: "27",
                                r: "24",
                                fill: "#E5E5E5"
                            }), (0, s.jsx)("circle", {
                                cx: "135",
                                cy: "27",
                                r: "18",
                                stroke: "#161616",
                                strokeWidth: "2"
                            }), (0, s.jsx)("text", {
                                fill: "#161616",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "8",
                                fontWeight: "450",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "41.1016",
                                    y: "30",
                                    children: "1"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                fill: "#161616",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "8",
                                fontWeight: "450",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "128.27",
                                    y: "30",
                                    children: ".75"
                                })
                            }), `
`, (0, s.jsx)("text", {
                                className: "fill-text-01",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "10",
                                fontWeight: "500",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "0.144413",
                                    y: "156.75",
                                    children: "Maximally entangled"
                                })
                            }), (0, s.jsx)("circle", {
                                cx: "49",
                                cy: "118",
                                r: "24",
                                fill: "#E5E5E5"
                            }), (0, s.jsx)("circle", {
                                cx: "49",
                                cy: "118",
                                r: "11",
                                stroke: "#161616",
                                strokeWidth: "2"
                            }), (0, s.jsx)("text", {
                                fill: "#161616",
                                fontFamily: "IBM Plex Sans",
                                fontSize: "8",
                                fontWeight: "450",
                                letterSpacing: "0.32px",
                                children: (0, s.jsx)("tspan", {
                                    x: "45.3283",
                                    y: "121",
                                    children: ".5"
                                })
                            })]
                        })]
                    })
                }
            }
            var ws = fs;

            function l(n) {
                const a = (0, u.forwardRef)((t, e) => d().createElement("div", {
                    ref: e,
                    className: (0, c.Z)("composer-operations-glossary", t.className)
                }, d().createElement(n, {
                    ...t
                })));
                return r()(a, n), a.displayName = ys(n) ?? "withContainer", a
            }

            function ys(n) {
                return n.displayName || n.name
            }
            var Ms = l(w),
                bs = l(M),
                vs = l(v),
                ks = l(C),
                Cs = l(O),
                Ls = l(q),
                Os = l(R),
                Is = l(A),
                qs = l(E),
                Xs = l(P),
                Rs = l(z),
                _s = l(H),
                As = l(Z),
                Ts = l(W),
                Es = l(G),
                Ss = l(U),
                Ps = l(J),
                Ds = l(ss),
                zs = l(ns),
                Bs = l(ts),
                Hs = l(ls),
                Fs = l(rs),
                Zs = l(hs),
                Vs = l(xs),
                Ws = l(ps),
                Qs = l(us),
                Gs = l(Ns),
                Ys = l(ws)
        },
        4330: f => {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var x = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable;

            function u(o) {
                if (o == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(o)
            }

            function d() {
                try {
                    if (!Object.assign) return !1;
                    var o = new String("abc");
                    if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5") return !1;
                    for (var g = {}, i = 0; i < 10; i++) g["_" + String.fromCharCode(i)] = i;
                    var p = Object.getOwnPropertyNames(g).map(function(c) {
                        return g[c]
                    });
                    if (p.join("") !== "0123456789") return !1;
                    var h = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(c) {
                        h[c] = c
                    }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst"
                } catch {
                    return !1
                }
            }
            f.exports = d() ? Object.assign : function(o, g) {
                for (var i, p = u(o), h, c = 1; c < arguments.length; c++) {
                    i = Object(arguments[c]);
                    for (var j in i) m.call(i, j) && (p[j] = i[j]);
                    if (x) {
                        h = x(i);
                        for (var r = 0; r < h.length; r++) s.call(i, h[r]) && (p[h[r]] = i[h[r]])
                    }
                }
                return p
            }
        },
        3096: (f, x, m) => {
            /** @license React v17.0.2
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            m(4330);
            var s = m(6271),
                u = 60103;
            if (x.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
                var d = Symbol.for;
                u = d("react.element"), x.Fragment = d("react.fragment")
            }
            var o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                g = Object.prototype.hasOwnProperty,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function p(h, c, j) {
                var r, N = {},
                    w = null,
                    y = null;
                j !== void 0 && (w = "" + j), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (y = c.ref);
                for (r in c) g.call(c, r) && !i.hasOwnProperty(r) && (N[r] = c[r]);
                if (h && h.defaultProps)
                    for (r in c = h.defaultProps, c) N[r] === void 0 && (N[r] = c[r]);
                return {
                    $$typeof: u,
                    type: h,
                    key: w,
                    ref: y,
                    props: N,
                    _owner: o.current
                }
            }
            x.jsx = p, x.jsxs = p
        },
        7051: (f, x, m) => {
            f.exports = m(3096)
        }
    }
]);