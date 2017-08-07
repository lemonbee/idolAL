! function(e) {
	function t(a) {
		if(n[a]) return n[a].exports;
		var i = n[a] = {
			exports: {},
			id: a,
			loaded: !1
		};
		return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "/static/", t(0)
}({
	0: function(e, t, n) {
		e.exports = n(75)
	},
	1: function(e, t) {
		e.exports = function() {
			var e = [];
			return e.toString = function() {
				for(var e = [], t = 0; t < this.length; t++) {
					var n = this[t];
					n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
				}
				return e.join("")
			}, e.i = function(t, n) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for(var a = {}, i = 0; i < this.length; i++) {
					var r = this[i][0];
					"number" == typeof r && (a[r] = !0)
				}
				for(i = 0; i < t.length; i++) {
					var o = t[i];
					"number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
				}
			}, e
		}
	},
	2: function(e, t, n) {
		function a(e, t) {
			for(var n = 0; n < e.length; n++) {
				var a = e[n],
					i = m[a.id];
				if(i) {
					i.refs++;
					for(var r = 0; r < i.parts.length; r++) i.parts[r](a.parts[r]);
					for(; r < a.parts.length; r++) i.parts.push(u(a.parts[r], t))
				} else {
					for(var o = [], r = 0; r < a.parts.length; r++) o.push(u(a.parts[r], t));
					m[a.id] = {
						id: a.id,
						refs: 1,
						parts: o
					}
				}
			}
		}

		function i(e) {
			for(var t = [], n = {}, a = 0; a < e.length; a++) {
				var i = e[a],
					r = i[0],
					o = i[1],
					s = i[2],
					l = i[3],
					u = {
						css: o,
						media: s,
						sourceMap: l
					};
				n[r] ? n[r].parts.push(u) : t.push(n[r] = {
					id: r,
					parts: [u]
				})
			}
			return t
		}

		function r(e, t) {
			var n = h(),
				a = b[b.length - 1];
			if("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
			else {
				if("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				n.appendChild(t)
			}
		}

		function o(e) {
			e.parentNode.removeChild(e);
			var t = b.indexOf(e);
			t >= 0 && b.splice(t, 1)
		}

		function s(e) {
			var t = document.createElement("style");
			return t.type = "text/css", r(e, t), t
		}

		function l(e) {
			var t = document.createElement("link");
			return t.rel = "stylesheet", r(e, t), t
		}

		function u(e, t) {
			var n, a, i;
			if(t.singleton) {
				var r = v++;
				n = x || (x = s(t)), a = c.bind(null, n, r, !1), i = c.bind(null, n, r, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), a = f.bind(null, n), i = function() {
				o(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = s(t), a = d.bind(null, n), i = function() {
				o(n)
			});
			return a(e),
				function(t) {
					if(t) {
						if(t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						a(e = t)
					} else i()
				}
		}

		function c(e, t, n, a) {
			var i = n ? "" : a.css;
			if(e.styleSheet) e.styleSheet.cssText = y(t, i);
			else {
				var r = document.createTextNode(i),
					o = e.childNodes;
				o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
			}
		}

		function d(e, t) {
			var n = t.css,
				a = t.media;
			if(a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;
			else {
				for(; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}

		function f(e, t) {
			var n = t.css,
				a = t.sourceMap;
			a && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
			var i = new Blob([n], {
					type: "text/css"
				}),
				r = e.href;
			e.href = URL.createObjectURL(i), r && URL.revokeObjectURL(r)
		}
		var m = {},
			p = function(e) {
				var t;
				return function() {
					return "undefined" == typeof t && (t = e.apply(this, arguments)), t
				}
			},
			g = p(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
			}),
			h = p(function() {
				return document.head || document.getElementsByTagName("head")[0]
			}),
			x = null,
			v = 0,
			b = [];
		e.exports = function(e, t) {
			t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
			var n = i(e);
			return a(n, t),
				function(e) {
					for(var r = [], o = 0; o < n.length; o++) {
						var s = n[o],
							l = m[s.id];
						l.refs--, r.push(l)
					}
					if(e) {
						var u = i(e);
						a(u, t)
					}
					for(var o = 0; o < r.length; o++) {
						var l = r[o];
						if(0 === l.refs) {
							for(var c = 0; c < l.parts.length; c++) l.parts[c]();
							delete m[l.id]
						}
					}
				}
		};
		var y = function() {
			var e = [];
			return function(t, n) {
				return e[t] = n, e.filter(Boolean).join("\n")
			}
		}()
	},
	3: function(e, t, n) {
		var a;
		(function(i) {
			(function() {
				! function(i, r) {
					a = function() {
						return r(i)
					}.call(t, n, t, e), !(void 0 !== a && (e.exports = a))
				}(this, function(e) {
					var t = function() {
						function t(e) {
							return null == e ? String(e) : Z[Y.call(e)] || "object"
						}

						function n(e) {
							return "function" == t(e)
						}

						function a(e) {
							return null != e && e == e.window
						}

						function i(e) {
							return null != e && e.nodeType == e.DOCUMENT_NODE
						}

						function r(e) {
							return "object" == t(e)
						}

						function o(e) {
							return r(e) && !a(e) && Object.getPrototypeOf(e) == Object.prototype
						}

						function s(e) {
							var t = !!e && "length" in e && e.length,
								n = k.type(e);
							return "function" != n && !a(e) && ("array" == n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
						}

						function l(e) {
							return F.call(e, function(e) {
								return null != e
							})
						}

						function u(e) {
							return e.length > 0 ? k.fn.concat.apply([], e) : e
						}

						function c(e) {
							return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
						}

						function d(e) {
							return e in U ? U[e] : U[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
						}

						function f(e, t) {
							return "number" != typeof t || O[c(e)] ? t : t + "px"
						}

						function m(e) {
							var t, n;
							return L[e] || (t = R.createElement(e), R.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), L[e] = n), L[e]
						}

						function p(e) {
							return "children" in e ? D.call(e.children) : k.map(e.childNodes, function(e) {
								if(1 == e.nodeType) return e
							})
						}

						function g(e, t) {
							var n, a = e ? e.length : 0;
							for(n = 0; n < a; n++) this[n] = e[n];
							this.length = a, this.selector = t || ""
						}

						function h(e, t, n) {
							for(E in t) n && (o(t[E]) || ee(t[E])) ? (o(t[E]) && !o(e[E]) && (e[E] = {}), ee(t[E]) && !ee(e[E]) && (e[E] = []), h(e[E], t[E], n)) : t[E] !== C && (e[E] = t[E])
						}

						function x(e, t) {
							return null == t ? k(e) : k(e).filter(t)
						}

						function v(e, t, a, i) {
							return n(t) ? t.call(e, a, i) : t
						}

						function b(e, t, n) {
							null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
						}

						function y(e, t) {
							var n = e.className || "",
								a = n && n.baseVal !== C;
							return t === C ? a ? n.baseVal : n : void(a ? n.baseVal = t : e.className = t)
						}

						function w(e) {
							try {
								return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? k.parseJSON(e) : e) : e
							} catch(t) {
								return e
							}
						}

						function S(e, t) {
							t(e);
							for(var n = 0, a = e.childNodes.length; n < a; n++) S(e.childNodes[n], t)
						}
						var C, E, k, P, T, N, I = [],
							j = I.concat,
							F = I.filter,
							D = I.slice,
							R = e.document,
							L = {},
							U = {},
							O = {
								"column-count": 1,
								columns: 1,
								"font-weight": 1,
								"line-height": 1,
								opacity: 1,
								"z-index": 1,
								zoom: 1
							},
							A = /^\s*<(\w+|!)[^>]*>/,
							M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
							G = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
							B = /^(?:body|html)$/i,
							z = /([A-Z])/g,
							q = ["val", "css", "html", "text", "data", "width", "height", "offset"],
							H = ["after", "prepend", "before", "append"],
							J = R.createElement("table"),
							X = R.createElement("tr"),
							W = {
								tr: R.createElement("tbody"),
								tbody: J,
								thead: J,
								tfoot: J,
								td: X,
								th: X,
								"*": R.createElement("div")
							},
							V = /complete|loaded|interactive/,
							$ = /^[\w-]*$/,
							Z = {},
							Y = Z.toString,
							_ = {},
							K = R.createElement("div"),
							Q = {
								tabindex: "tabIndex",
								readonly: "readOnly",
								for: "htmlFor",
								class: "className",
								maxlength: "maxLength",
								cellspacing: "cellSpacing",
								cellpadding: "cellPadding",
								rowspan: "rowSpan",
								colspan: "colSpan",
								usemap: "useMap",
								frameborder: "frameBorder",
								contenteditable: "contentEditable"
							},
							ee = Array.isArray || function(e) {
								return e instanceof Array
							};
						return _.matches = function(e, t) {
							if(!t || !e || 1 !== e.nodeType) return !1;
							var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
							if(n) return n.call(e, t);
							var a, i = e.parentNode,
								r = !i;
							return r && (i = K).appendChild(e), a = ~_.qsa(i, t).indexOf(e), r && K.removeChild(e), a
						}, T = function(e) {
							return e.replace(/-+(.)?/g, function(e, t) {
								return t ? t.toUpperCase() : ""
							})
						}, N = function(e) {
							return F.call(e, function(t, n) {
								return e.indexOf(t) == n
							})
						}, _.fragment = function(e, t, n) {
							var a, i, r;
							return M.test(e) && (a = k(R.createElement(RegExp.$1))), a || (e.replace && (e = e.replace(G, "<$1></$2>")), t === C && (t = A.test(e) && RegExp.$1), t in W || (t = "*"), r = W[t], r.innerHTML = "" + e, a = k.each(D.call(r.childNodes), function() {
								r.removeChild(this)
							})), o(n) && (i = k(a), k.each(n, function(e, t) {
								q.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
							})), a
						}, _.Z = function(e, t) {
							return new g(e, t)
						}, _.isZ = function(e) {
							return e instanceof _.Z
						}, _.init = function(e, t) {
							var a;
							if(!e) return _.Z();
							if("string" == typeof e)
								if(e = e.trim(), "<" == e[0] && A.test(e)) a = _.fragment(e, RegExp.$1, t), e = null;
								else {
									if(t !== C) return k(t).find(e);
									a = _.qsa(R, e)
								}
							else {
								if(n(e)) return k(R).ready(e);
								if(_.isZ(e)) return e;
								if(ee(e)) a = l(e);
								else if(r(e)) a = [e], e = null;
								else if(A.test(e)) a = _.fragment(e.trim(), RegExp.$1, t), e = null;
								else {
									if(t !== C) return k(t).find(e);
									a = _.qsa(R, e)
								}
							}
							return _.Z(a, e)
						}, k = function(e, t) {
							return _.init(e, t)
						}, k.extend = function(e) {
							var t, n = D.call(arguments, 1);
							return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function(n) {
								h(e, n, t)
							}), e
						}, _.qsa = function(e, t) {
							var n, a = "#" == t[0],
								i = !a && "." == t[0],
								r = a || i ? t.slice(1) : t,
								o = $.test(r);
							return e.getElementById && o && a ? (n = e.getElementById(r)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : D.call(o && !a && e.getElementsByClassName ? i ? e.getElementsByClassName(r) : e.getElementsByTagName(t) : e.querySelectorAll(t))
						}, k.contains = R.documentElement.contains ? function(e, t) {
							return e !== t && e.contains(t)
						} : function(e, t) {
							for(; t && (t = t.parentNode);)
								if(t === e) return !0;
							return !1
						}, k.type = t, k.isFunction = n, k.isWindow = a, k.isArray = ee, k.isPlainObject = o, k.isEmptyObject = function(e) {
							var t;
							for(t in e) return !1;
							return !0
						}, k.isNumeric = function(e) {
							var t = Number(e),
								n = typeof e;
							return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
						}, k.inArray = function(e, t, n) {
							return I.indexOf.call(t, e, n)
						}, k.camelCase = T, k.trim = function(e) {
							return null == e ? "" : String.prototype.trim.call(e)
						}, k.uuid = 0, k.support = {}, k.expr = {}, k.noop = function() {}, k.map = function(e, t) {
							var n, a, i, r = [];
							if(s(e))
								for(a = 0; a < e.length; a++) n = t(e[a], a), null != n && r.push(n);
							else
								for(i in e) n = t(e[i], i), null != n && r.push(n);
							return u(r)
						}, k.each = function(e, t) {
							var n, a;
							if(s(e)) {
								for(n = 0; n < e.length; n++)
									if(t.call(e[n], n, e[n]) === !1) return e
							} else
								for(a in e)
									if(t.call(e[a], a, e[a]) === !1) return e;
							return e
						}, k.grep = function(e, t) {
							return F.call(e, t)
						}, e.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
							Z["[object " + t + "]"] = t.toLowerCase()
						}), k.fn = {
							constructor: _.Z,
							length: 0,
							forEach: I.forEach,
							reduce: I.reduce,
							push: I.push,
							sort: I.sort,
							splice: I.splice,
							indexOf: I.indexOf,
							concat: function() {
								var e, t, n = [];
								for(e = 0; e < arguments.length; e++) t = arguments[e], n[e] = _.isZ(t) ? t.toArray() : t;
								return j.apply(_.isZ(this) ? this.toArray() : this, n)
							},
							map: function(e) {
								return k(k.map(this, function(t, n) {
									return e.call(t, n, t)
								}))
							},
							slice: function() {
								return k(D.apply(this, arguments))
							},
							ready: function(e) {
								return V.test(R.readyState) && R.body ? e(k) : R.addEventListener("DOMContentLoaded", function() {
									e(k)
								}, !1), this
							},
							get: function(e) {
								return e === C ? D.call(this) : this[e >= 0 ? e : e + this.length]
							},
							toArray: function() {
								return this.get()
							},
							size: function() {
								return this.length
							},
							remove: function() {
								return this.each(function() {
									null != this.parentNode && this.parentNode.removeChild(this)
								})
							},
							each: function(e) {
								return I.every.call(this, function(t, n) {
									return e.call(t, n, t) !== !1
								}), this
							},
							filter: function(e) {
								return n(e) ? this.not(this.not(e)) : k(F.call(this, function(t) {
									return _.matches(t, e)
								}))
							},
							add: function(e, t) {
								return k(N(this.concat(k(e, t))))
							},
							is: function(e) {
								return this.length > 0 && _.matches(this[0], e)
							},
							not: function(e) {
								var t = [];
								if(n(e) && e.call !== C) this.each(function(n) {
									e.call(this, n) || t.push(this)
								});
								else {
									var a = "string" == typeof e ? this.filter(e) : s(e) && n(e.item) ? D.call(e) : k(e);
									this.forEach(function(e) {
										a.indexOf(e) < 0 && t.push(e)
									})
								}
								return k(t)
							},
							has: function(e) {
								return this.filter(function() {
									return r(e) ? k.contains(this, e) : k(this).find(e).size()
								})
							},
							eq: function(e) {
								return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
							},
							first: function() {
								var e = this[0];
								return e && !r(e) ? e : k(e)
							},
							last: function() {
								var e = this[this.length - 1];
								return e && !r(e) ? e : k(e)
							},
							find: function(e) {
								var t, n = this;
								return t = e ? "object" == typeof e ? k(e).filter(function() {
									var e = this;
									return I.some.call(n, function(t) {
										return k.contains(t, e)
									})
								}) : 1 == this.length ? k(_.qsa(this[0], e)) : this.map(function() {
									return _.qsa(this, e)
								}) : k()
							},
							closest: function(e, t) {
								var n = [],
									a = "object" == typeof e && k(e);
								return this.each(function(r, o) {
									for(; o && !(a ? a.indexOf(o) >= 0 : _.matches(o, e));) o = o !== t && !i(o) && o.parentNode;
									o && n.indexOf(o) < 0 && n.push(o)
								}), k(n)
							},
							parents: function(e) {
								for(var t = [], n = this; n.length > 0;) n = k.map(n, function(e) {
									if((e = e.parentNode) && !i(e) && t.indexOf(e) < 0) return t.push(e), e
								});
								return x(t, e)
							},
							parent: function(e) {
								return x(N(this.pluck("parentNode")), e)
							},
							children: function(e) {
								return x(this.map(function() {
									return p(this)
								}), e)
							},
							contents: function() {
								return this.map(function() {
									return this.contentDocument || D.call(this.childNodes)
								})
							},
							siblings: function(e) {
								return x(this.map(function(e, t) {
									return F.call(p(t.parentNode), function(e) {
										return e !== t
									})
								}), e)
							},
							empty: function() {
								return this.each(function() {
									this.innerHTML = ""
								})
							},
							pluck: function(e) {
								return k.map(this, function(t) {
									return t[e]
								})
							},
							show: function() {
								return this.each(function() {
									"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
								})
							},
							replaceWith: function(e) {
								return this.before(e).remove()
							},
							wrap: function(e) {
								var t = n(e);
								if(this[0] && !t) var a = k(e).get(0),
									i = a.parentNode || this.length > 1;
								return this.each(function(n) {
									k(this).wrapAll(t ? e.call(this, n) : i ? a.cloneNode(!0) : a)
								})
							},
							wrapAll: function(e) {
								if(this[0]) {
									k(this[0]).before(e = k(e));
									for(var t;
										(t = e.children()).length;) e = t.first();
									k(e).append(this)
								}
								return this
							},
							wrapInner: function(e) {
								var t = n(e);
								return this.each(function(n) {
									var a = k(this),
										i = a.contents(),
										r = t ? e.call(this, n) : e;
									i.length ? i.wrapAll(r) : a.append(r)
								})
							},
							unwrap: function() {
								return this.parent().each(function() {
									k(this).replaceWith(k(this).children())
								}), this
							},
							clone: function() {
								return this.map(function() {
									return this.cloneNode(!0)
								})
							},
							hide: function() {
								return this.css("display", "none")
							},
							toggle: function(e) {
								return this.each(function() {
									var t = k(this);
									(e === C ? "none" == t.css("display") : e) ? t.show(): t.hide()
								})
							},
							prev: function(e) {
								return k(this.pluck("previousElementSibling")).filter(e || "*")
							},
							next: function(e) {
								return k(this.pluck("nextElementSibling")).filter(e || "*")
							},
							html: function(e) {
								return 0 in arguments ? this.each(function(t) {
									var n = this.innerHTML;
									k(this).empty().append(v(this, e, t, n))
								}) : 0 in this ? this[0].innerHTML : null
							},
							text: function(e) {
								return 0 in arguments ? this.each(function(t) {
									var n = v(this, e, t, this.textContent);
									this.textContent = null == n ? "" : "" + n
								}) : 0 in this ? this.pluck("textContent").join("") : null
							},
							attr: function(e, t) {
								var n;
								return "string" != typeof e || 1 in arguments ? this.each(function(n) {
									if(1 === this.nodeType)
										if(r(e))
											for(E in e) b(this, E, e[E]);
										else b(this, e, v(this, t, n, this.getAttribute(e)))
								}) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(e)) ? n : C
							},
							removeAttr: function(e) {
								return this.each(function() {
									1 === this.nodeType && e.split(" ").forEach(function(e) {
										b(this, e)
									}, this)
								})
							},
							prop: function(e, t) {
								return e = Q[e] || e, 1 in arguments ? this.each(function(n) {
									this[e] = v(this, t, n, this[e])
								}) : this[0] && this[0][e]
							},
							removeProp: function(e) {
								return e = Q[e] || e, this.each(function() {
									delete this[e]
								})
							},
							data: function(e, t) {
								var n = "data-" + e.replace(z, "-$1").toLowerCase(),
									a = 1 in arguments ? this.attr(n, t) : this.attr(n);
								return null !== a ? w(a) : C
							},
							val: function(e) {
								return 0 in arguments ? (null == e && (e = ""), this.each(function(t) {
									this.value = v(this, e, t, this.value)
								})) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
									return this.selected
								}).pluck("value") : this[0].value)
							},
							offset: function(t) {
								if(t) return this.each(function(e) {
									var n = k(this),
										a = v(this, t, e, n.offset()),
										i = n.offsetParent().offset(),
										r = {
											top: a.top - i.top,
											left: a.left - i.left
										};
									"static" == n.css("position") && (r.position = "relative"), n.css(r)
								});
								if(!this.length) return null;
								if(R.documentElement !== this[0] && !k.contains(R.documentElement, this[0])) return {
									top: 0,
									left: 0
								};
								var n = this[0].getBoundingClientRect();
								return {
									left: n.left + e.pageXOffset,
									top: n.top + e.pageYOffset,
									width: Math.round(n.width),
									height: Math.round(n.height)
								}
							},
							css: function(e, n) {
								if(arguments.length < 2) {
									var a = this[0];
									if("string" == typeof e) {
										if(!a) return;
										return a.style[T(e)] || getComputedStyle(a, "").getPropertyValue(e)
									}
									if(ee(e)) {
										if(!a) return;
										var i = {},
											r = getComputedStyle(a, "");
										return k.each(e, function(e, t) {
											i[t] = a.style[T(t)] || r.getPropertyValue(t)
										}), i
									}
								}
								var o = "";
								if("string" == t(e)) n || 0 === n ? o = c(e) + ":" + f(e, n) : this.each(function() {
									this.style.removeProperty(c(e))
								});
								else
									for(E in e) e[E] || 0 === e[E] ? o += c(E) + ":" + f(E, e[E]) + ";" : this.each(function() {
										this.style.removeProperty(c(E))
									});
								return this.each(function() {
									this.style.cssText += ";" + o
								})
							},
							index: function(e) {
								return e ? this.indexOf(k(e)[0]) : this.parent().children().indexOf(this[0])
							},
							hasClass: function(e) {
								return !!e && I.some.call(this, function(e) {
									return this.test(y(e))
								}, d(e))
							},
							addClass: function(e) {
								return e ? this.each(function(t) {
									if("className" in this) {
										P = [];
										var n = y(this),
											a = v(this, e, t, n);
										a.split(/\s+/g).forEach(function(e) {
											k(this).hasClass(e) || P.push(e)
										}, this), P.length && y(this, n + (n ? " " : "") + P.join(" "))
									}
								}) : this
							},
							removeClass: function(e) {
								return this.each(function(t) {
									if("className" in this) {
										if(e === C) return y(this, "");
										P = y(this), v(this, e, t, P).split(/\s+/g).forEach(function(e) {
											P = P.replace(d(e), " ")
										}), y(this, P.trim())
									}
								})
							},
							toggleClass: function(e, t) {
								return e ? this.each(function(n) {
									var a = k(this),
										i = v(this, e, n, y(this));
									i.split(/\s+/g).forEach(function(e) {
										(t === C ? !a.hasClass(e) : t) ? a.addClass(e): a.removeClass(e)
									})
								}) : this
							},
							scrollTop: function(e) {
								if(this.length) {
									var t = "scrollTop" in this[0];
									return e === C ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
										this.scrollTop = e
									} : function() {
										this.scrollTo(this.scrollX, e)
									})
								}
							},
							scrollLeft: function(e) {
								if(this.length) {
									var t = "scrollLeft" in this[0];
									return e === C ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
										this.scrollLeft = e
									} : function() {
										this.scrollTo(e, this.scrollY)
									})
								}
							},
							position: function() {
								if(this.length) {
									var e = this[0],
										t = this.offsetParent(),
										n = this.offset(),
										a = B.test(t[0].nodeName) ? {
											top: 0,
											left: 0
										} : t.offset();
									return n.top -= parseFloat(k(e).css("margin-top")) || 0, n.left -= parseFloat(k(e).css("margin-left")) || 0, a.top += parseFloat(k(t[0]).css("border-top-width")) || 0, a.left += parseFloat(k(t[0]).css("border-left-width")) || 0, {
										top: n.top - a.top,
										left: n.left - a.left
									}
								}
							},
							offsetParent: function() {
								return this.map(function() {
									for(var e = this.offsetParent || R.body; e && !B.test(e.nodeName) && "static" == k(e).css("position");) e = e.offsetParent;
									return e
								})
							}
						}, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(e) {
							var t = e.replace(/./, function(e) {
								return e[0].toUpperCase()
							});
							k.fn[e] = function(n) {
								var r, o = this[0];
								return n === C ? a(o) ? o["inner" + t] : i(o) ? o.documentElement["scroll" + t] : (r = this.offset()) && r[e] : this.each(function(t) {
									o = k(this), o.css(e, v(this, n, t, o[e]()))
								})
							}
						}), H.forEach(function(n, a) {
							var i = a % 2;
							k.fn[n] = function() {
								var n, r, o = k.map(arguments, function(e) {
										var a = [];
										return n = t(e), "array" == n ? (e.forEach(function(e) {
											return e.nodeType !== C ? a.push(e) : k.zepto.isZ(e) ? a = a.concat(e.get()) : void(a = a.concat(_.fragment(e)))
										}), a) : "object" == n || null == e ? e : _.fragment(e)
									}),
									s = this.length > 1;
								return o.length < 1 ? this : this.each(function(t, n) {
									r = i ? n : n.parentNode, n = 0 == a ? n.nextSibling : 1 == a ? n.firstChild : 2 == a ? n : null;
									var l = k.contains(R.documentElement, r);
									o.forEach(function(t) {
										if(s) t = t.cloneNode(!0);
										else if(!r) return k(t).remove();
										r.insertBefore(t, n), l && S(t, function(t) {
											if(!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
												var n = t.ownerDocument ? t.ownerDocument.defaultView : e;
												n.eval.call(n, t.innerHTML)
											}
										})
									})
								})
							}, k.fn[i ? n + "To" : "insert" + (a ? "Before" : "After")] = function(e) {
								return k(e)[n](this), this
							}
						}), _.Z.prototype = g.prototype = k.fn, _.uniq = N, _.deserializeValue = w, k.zepto = _, k
					}();
					return e.Zepto = t, void 0 === e.$ && (e.$ = t),
						function(t) {
							function n(e) {
								return e._zid || (e._zid = m++)
							}

							function a(e, t, a, o) {
								if(t = i(t), t.ns) var s = r(t.ns);
								return(x[n(e)] || []).filter(function(e) {
									return e && (!t.e || e.e == t.e) && (!t.ns || s.test(e.ns)) && (!a || n(e.fn) === n(a)) && (!o || e.sel == o)
								})
							}

							function i(e) {
								var t = ("" + e).split(".");
								return {
									e: t[0],
									ns: t.slice(1).sort().join(" ")
								}
							}

							function r(e) {
								return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
							}

							function o(e, t) {
								return e.del && !b && e.e in y || !!t
							}

							function s(e) {
								return w[e] || b && y[e] || e
							}

							function l(e, a, r, l, u, d, m) {
								var p = n(e),
									g = x[p] || (x[p] = []);
								a.split(/\s/).forEach(function(n) {
									if("ready" == n) return t(document).ready(r);
									var a = i(n);
									a.fn = r, a.sel = u, a.e in w && (r = function(e) {
										var n = e.relatedTarget;
										if(!n || n !== this && !t.contains(this, n)) return a.fn.apply(this, arguments)
									}), a.del = d;
									var p = d || r;
									a.proxy = function(t) {
										if(t = c(t), !t.isImmediatePropagationStopped()) {
											t.data = l;
											var n = p.apply(e, t._args == f ? [t] : [t].concat(t._args));
											return n === !1 && (t.preventDefault(), t.stopPropagation()), n
										}
									}, a.i = g.length, g.push(a), "addEventListener" in e && e.addEventListener(s(a.e), a.proxy, o(a, m))
								})
							}

							function u(e, t, i, r, l) {
								var u = n(e);
								(t || "").split(/\s/).forEach(function(t) {
									a(e, t, i, r).forEach(function(t) {
										delete x[u][t.i], "removeEventListener" in e && e.removeEventListener(s(t.e), t.proxy, o(t, l))
									})
								})
							}

							function c(e, n) {
								return !n && e.isDefaultPrevented || (n || (n = e), t.each(k, function(t, a) {
									var i = n[t];
									e[t] = function() {
										return this[a] = S, i && i.apply(n, arguments)
									}, e[a] = C
								}), e.timeStamp || (e.timeStamp = Date.now()), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = S)), e
							}

							function d(e) {
								var t, n = {
									originalEvent: e
								};
								for(t in e) E.test(t) || e[t] === f || (n[t] = e[t]);
								return c(n, e)
							}
							var f, m = 1,
								p = Array.prototype.slice,
								g = t.isFunction,
								h = function(e) {
									return "string" == typeof e
								},
								x = {},
								v = {},
								b = "onfocusin" in e,
								y = {
									focus: "focusin",
									blur: "focusout"
								},
								w = {
									mouseenter: "mouseover",
									mouseleave: "mouseout"
								};
							v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
								add: l,
								remove: u
							}, t.proxy = function(e, a) {
								var i = 2 in arguments && p.call(arguments, 2);
								if(g(e)) {
									var r = function() {
										return e.apply(a, i ? i.concat(p.call(arguments)) : arguments)
									};
									return r._zid = n(e), r
								}
								if(h(a)) return i ? (i.unshift(e[a], e), t.proxy.apply(null, i)) : t.proxy(e[a], e);
								throw new TypeError("expected function")
							}, t.fn.bind = function(e, t, n) {
								return this.on(e, t, n)
							}, t.fn.unbind = function(e, t) {
								return this.off(e, t)
							}, t.fn.one = function(e, t, n, a) {
								return this.on(e, t, n, a, 1)
							};
							var S = function() {
									return !0
								},
								C = function() {
									return !1
								},
								E = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
								k = {
									preventDefault: "isDefaultPrevented",
									stopImmediatePropagation: "isImmediatePropagationStopped",
									stopPropagation: "isPropagationStopped"
								};
							t.fn.delegate = function(e, t, n) {
								return this.on(t, e, n)
							}, t.fn.undelegate = function(e, t, n) {
								return this.off(t, e, n)
							}, t.fn.live = function(e, n) {
								return t(document.body).delegate(this.selector, e, n), this
							}, t.fn.die = function(e, n) {
								return t(document.body).undelegate(this.selector, e, n), this
							}, t.fn.on = function(e, n, a, i, r) {
								var o, s, c = this;
								return e && !h(e) ? (t.each(e, function(e, t) {
									c.on(e, n, a, t, r)
								}), c) : (h(n) || g(i) || i === !1 || (i = a, a = n, n = f), i !== f && a !== !1 || (i = a, a = f), i === !1 && (i = C), c.each(function(c, f) {
									r && (o = function(e) {
										return u(f, e.type, i), i.apply(this, arguments)
									}), n && (s = function(e) {
										var a, r = t(e.target).closest(n, f).get(0);
										if(r && r !== f) return a = t.extend(d(e), {
											currentTarget: r,
											liveFired: f
										}), (o || i).apply(r, [a].concat(p.call(arguments, 1)))
									}), l(f, e, i, a, n, s || o)
								}))
							}, t.fn.off = function(e, n, a) {
								var i = this;
								return e && !h(e) ? (t.each(e, function(e, t) {
									i.off(e, n, t)
								}), i) : (h(n) || g(a) || a === !1 || (a = n, n = f), a === !1 && (a = C), i.each(function() {
									u(this, e, a, n)
								}))
							}, t.fn.trigger = function(e, n) {
								return e = h(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
									e.type in y && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
								})
							}, t.fn.triggerHandler = function(e, n) {
								var i, r;
								return this.each(function(o, s) {
									i = d(h(e) ? t.Event(e) : e), i._args = n, i.target = s, t.each(a(s, e.type || e), function(e, t) {
										if(r = t.proxy(i), i.isImmediatePropagationStopped()) return !1
									})
								}), r
							}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
								t.fn[e] = function(t) {
									return 0 in arguments ? this.bind(e, t) : this.trigger(e)
								}
							}), t.Event = function(e, t) {
								h(e) || (t = e, e = t.type);
								var n = document.createEvent(v[e] || "Events"),
									a = !0;
								if(t)
									for(var i in t) "bubbles" == i ? a = !!t[i] : n[i] = t[i];
								return n.initEvent(e, a, !0), c(n)
							}
						}(t),
						function(t) {
							function n(e, n, a) {
								var i = t.Event(n);
								return t(e).trigger(i, a), !i.isDefaultPrevented()
							}

							function a(e, t, a, i) {
								if(e.global) return n(t || y, a, i)
							}

							function i(e) {
								e.global && 0 === t.active++ && a(e, null, "ajaxStart")
							}

							function r(e) {
								e.global && !--t.active && a(e, null, "ajaxStop")
							}

							function o(e, t) {
								var n = t.context;
								return t.beforeSend.call(n, e, t) !== !1 && a(t, n, "ajaxBeforeSend", [e, t]) !== !1 && void a(t, n, "ajaxSend", [e, t])
							}

							function s(e, t, n, i) {
								var r = n.context,
									o = "success";
								n.success.call(r, e, o, t), i && i.resolveWith(r, [e, o, t]), a(n, r, "ajaxSuccess", [t, n, e]), u(o, t, n)
							}

							function l(e, t, n, i, r) {
								var o = i.context;
								i.error.call(o, n, t, e), r && r.rejectWith(o, [n, t, e]), a(i, o, "ajaxError", [n, i, e || t]), u(t, n, i)
							}

							function u(e, t, n) {
								var i = n.context;
								n.complete.call(i, t, e), a(n, i, "ajaxComplete", [t, n]), r(n)
							}

							function c(e, t, n) {
								if(n.dataFilter == d) return e;
								var a = n.context;
								return n.dataFilter.call(a, e, t)
							}

							function d() {}

							function f(e) {
								return e && (e = e.split(";", 2)[0]), e && (e == k ? "html" : e == E ? "json" : S.test(e) ? "script" : C.test(e) && "xml") || "text"
							}

							function m(e, t) {
								return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
							}

							function p(e) {
								e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = m(e.url, e.data), e.data = void 0)
							}

							function g(e, n, a, i) {
								return t.isFunction(n) && (i = a, a = n, n = void 0), t.isFunction(a) || (i = a, a = void 0), {
									url: e,
									data: n,
									success: a,
									dataType: i
								}
							}

							function h(e, n, a, i) {
								var r, o = t.isArray(n),
									s = t.isPlainObject(n);
								t.each(n, function(n, l) {
									r = t.type(l), i && (n = a ? i : i + "[" + (s || "object" == r || "array" == r ? n : "") + "]"), !i && o ? e.add(l.name, l.value) : "array" == r || !a && "object" == r ? h(e, l, a, n) : e.add(n, l)
								})
							}
							var x, v, b = +new Date,
								y = e.document,
								w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
								S = /^(?:text|application)\/javascript/i,
								C = /^(?:text|application)\/xml/i,
								E = "application/json",
								k = "text/html",
								P = /^\s*$/,
								T = y.createElement("a");
							T.href = e.location.href, t.active = 0, t.ajaxJSONP = function(n, a) {
								if(!("type" in n)) return t.ajax(n);
								var i, r, u = n.jsonpCallback,
									c = (t.isFunction(u) ? u() : u) || "Zepto" + b++,
									d = y.createElement("script"),
									f = e[c],
									m = function(e) {
										t(d).triggerHandler("error", e || "abort")
									},
									p = {
										abort: m
									};
								return a && a.promise(p), t(d).on("load error", function(o, u) {
									clearTimeout(r), t(d).off().remove(), "error" != o.type && i ? s(i[0], p, n, a) : l(null, u || "error", p, n, a), e[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
								}), o(p, n) === !1 ? (m("abort"), p) : (e[c] = function() {
									i = arguments
								}, d.src = n.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(d), n.timeout > 0 && (r = setTimeout(function() {
									m("timeout")
								}, n.timeout)), p)
							}, t.ajaxSettings = {
								type: "GET",
								beforeSend: d,
								success: d,
								error: d,
								complete: d,
								context: null,
								global: !0,
								xhr: function() {
									return new e.XMLHttpRequest
								},
								accepts: {
									script: "text/javascript, application/javascript, application/x-javascript",
									json: E,
									xml: "application/xml, text/xml",
									html: k,
									text: "text/plain"
								},
								crossDomain: !1,
								timeout: 0,
								processData: !0,
								cache: !0,
								dataFilter: d
							}, t.ajax = function(n) {
								var a, r, u = t.extend({}, n || {}),
									g = t.Deferred && t.Deferred();
								for(x in t.ajaxSettings) void 0 === u[x] && (u[x] = t.ajaxSettings[x]);
								i(u), u.crossDomain || (a = y.createElement("a"), a.href = u.url, a.href = a.href, u.crossDomain = T.protocol + "//" + T.host != a.protocol + "//" + a.host), u.url || (u.url = e.location.toString()), (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), p(u);
								var h = u.dataType,
									b = /\?.+=\?/.test(u.url);
								if(b && (h = "jsonp"), u.cache !== !1 && (n && n.cache === !0 || "script" != h && "jsonp" != h) || (u.url = m(u.url, "_=" + Date.now())), "jsonp" == h) return b || (u.url = m(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(u, g);
								var w, S = u.accepts[h],
									C = {},
									E = function(e, t) {
										C[e.toLowerCase()] = [e, t]
									},
									k = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : e.location.protocol,
									N = u.xhr(),
									I = N.setRequestHeader;
								if(g && g.promise(N), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), E("Accept", S || "*/*"), (S = u.mimeType || S) && (S.indexOf(",") > -1 && (S = S.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(S)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)
									for(v in u.headers) E(v, u.headers[v]);
								if(N.setRequestHeader = E, N.onreadystatechange = function() {
										if(4 == N.readyState) {
											N.onreadystatechange = d, clearTimeout(w);
											var e, n = !1;
											if(N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == k) {
												if(h = h || f(u.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) e = N.response;
												else {
													e = N.responseText;
													try {
														e = c(e, h, u), "script" == h ? (0, eval)(e) : "xml" == h ? e = N.responseXML : "json" == h && (e = P.test(e) ? null : t.parseJSON(e))
													} catch(e) {
														n = e
													}
													if(n) return l(n, "parsererror", N, u, g)
												}
												s(e, N, u, g)
											} else l(N.statusText || null, N.status ? "error" : "abort", N, u, g)
										}
									}, o(N, u) === !1) return N.abort(), l(null, "abort", N, u, g), N;
								var j = !("async" in u) || u.async;
								if(N.open(u.type, u.url, j, u.username, u.password), u.xhrFields)
									for(v in u.xhrFields) N[v] = u.xhrFields[v];
								for(v in C) I.apply(N, C[v]);
								return u.timeout > 0 && (w = setTimeout(function() {
									N.onreadystatechange = d, N.abort(), l(null, "timeout", N, u, g)
								}, u.timeout)), N.send(u.data ? u.data : null), N
							}, t.get = function() {
								return t.ajax(g.apply(null, arguments))
							}, t.post = function() {
								var e = g.apply(null, arguments);
								return e.type = "POST", t.ajax(e)
							}, t.getJSON = function() {
								var e = g.apply(null, arguments);
								return e.dataType = "json", t.ajax(e)
							}, t.fn.load = function(e, n, a) {
								if(!this.length) return this;
								var i, r = this,
									o = e.split(/\s/),
									s = g(e, n, a),
									l = s.success;
								return o.length > 1 && (s.url = o[0], i = o[1]), s.success = function(e) {
									r.html(i ? t("<div>").html(e.replace(w, "")).find(i) : e), l && l.apply(r, arguments)
								}, t.ajax(s), this
							};
							var N = encodeURIComponent;
							t.param = function(e, n) {
								var a = [];
								return a.add = function(e, n) {
									t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(e) + "=" + N(n))
								}, h(a, e, n), a.join("&").replace(/%20/g, "+")
							}
						}(t),
						function(e) {
							e.fn.serializeArray = function() {
								var t, n, a = [],
									i = function(e) {
										return e.forEach ? e.forEach(i) : void a.push({
											name: t,
											value: e
										})
									};
								return this[0] && e.each(this[0].elements, function(a, r) {
									n = r.type, t = r.name, t && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || r.checked) && i(e(r).val())
								}), a
							}, e.fn.serialize = function() {
								var e = [];
								return this.serializeArray().forEach(function(t) {
									e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
								}), e.join("&")
							}, e.fn.submit = function(t) {
								if(0 in arguments) this.bind("submit", t);
								else if(this.length) {
									var n = e.Event("submit");
									this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
								}
								return this
							}
						}(t),
						function() {
							try {
								getComputedStyle(void 0)
							} catch(n) {
								var t = getComputedStyle;
								e.getComputedStyle = function(e, n) {
									try {
										return t(e, n)
									} catch(e) {
										return null
									}
								}
							}
						}(), t
				}), e.exports = i.$
			}).call(i)
		}).call(t, function() {
			return this
		}())
	},
	4: function(e, t) {
		e.exports = [{
			id: "001",
			name: "彭于晏",
			tags: ["pengyuyan", "Eddie"],
			lines: 1,
			extra: !1
		}, {
			id: "002",
			name: "权志龙",
			tags: ["quanzhilong", "GD", "G-Dragon"],
			lines: 1,
			extra: !1
		}, {
			id: "003",
			name: "陈冠希",
			tags: ["chenguanxi"],
			lines: 5,
			extra: !0,
			move: -2
		}, {
			id: "004",
			name: "林宥嘉",
			tags: ["linyujia", "YOGA"],
			lines: 3,
			extra: !0
		}, {
			id: "005",
			name: "吴世勋",
			tags: ["wushixun", "sehun", "EXO"],
			lines: 1,
			extra: !1
		}, {
			id: "006",
			name: "鹿晗",
			tags: ["luhan", "狍子"],
			lines: 1,
			extra: !1
		}, {
			id: "007",
			name: "王大陆",
			tags: ["wangdalu"],
			lines: 1,
			extra: !1
		}, {
			id: "008",
			name: "王思聪",
			tags: ["wangsicong"],
			lines: 1,
			extra: !0
		}, {
			id: "009",
			name: "陈伟霆",
			tags: ["chenweiting", "大王"],
			lines: 1,
			extra: !0
		}, {
			id: "010",
			name: "陈柏霖",
			tags: ["chenbolin", "大仁哥"],
			lines: 2,
			extra: !0
		}, {
			id: "011",
			name: "高以翔",
			tags: ["gaoyixiang"],
			lines: 3,
			extra: !1
		}, {
			id: "012",
			name: "胡歌",
			tags: ["huge", "梅长苏"],
			lines: 2,
			extra: !1
		}, {
			id: "013",
			name: "李易峰",
			tags: ["liyifeng", "李政委", "李三岁"],
			lines: 1,
			extra: !1
		}, {
			id: "014",
			name: "沈昌珉",
			tags: ["shenchangmin", "最强昌珉"],
			lines: 2,
			extra: !0
		}, {
			id: "015",
			name: "吴亦凡",
			tags: ["wuyifan", "Kris", "白菜哥"],
			lines: 3,
			extra: !0
		}, {
			id: "016",
			name: "杨颖",
			tags: ["yangying", "Angelababy"],
			lines: 1,
			extra: !1,
			female: !0
		}, {
			id: "017",
			name: "余文乐",
			tags: ["yuwenle", "二叔"],
			lines: 2,
			extra: !1
		}, {
			id: "018",
			name: "水原希子",
			tags: ["shuiyuanxizi"],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "019",
			name: "黄子韬",
			tags: ["huangzitao", "TAO", "EXO"],
			lines: 3,
			extra: !1
		}, {
			id: "020",
			name: "李治廷",
			tags: ["lizhiting"],
			lines: 0,
			extra: !1
		}, {
			id: "021",
			name: "刘雯",
			tags: ["liuwen", "大表姐"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "022",
			name: "宋茜",
			tags: ["songqian", "Victoria", "F(x)"],
			lines: 1,
			extra: !1,
			female: !0
		}, {
			id: "023",
			name: "王阳明",
			tags: ["wangyangming"],
			lines: 4,
			extra: !0,
			move: -2
		}, {
			id: "024",
			name: "许魏洲",
			tags: ["xuweizhou"],
			lines: 1,
			extra: !1
		}, {
			id: "025",
			name: "罗志祥",
			tags: ["luozhixiang", "小猪"],
			lines: 3,
			extra: !0
		}, {
			id: "026",
			name: "祥郑允浩",
			tags: ["xiangzhengyunhao", "瑜卤允浩"],
			lines: 1,
			extra: !1
		}, {
			id: "027",
			name: "薛凯琪",
			tags: ["fifi"],
			lines: 6,
			extra: !0,
			female: !0
		}, {
			id: "028",
			name: "薛之谦",
			tags: [],
			lines: 2,
			extra: !0
		}, {
			id: "029",
			name: "杨幂",
			tags: ["mimi", "大幂幂"],
			lines: 1,
			extra: !1,
			female: !0
		}, {
			id: "030",
			name: "张智霖",
			tags: [],
			lines: 1,
			extra: !1
		}, {
			id: "031",
			name: "钟欣桐",
			tags: ["阿娇"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "032",
			name: "浅野启介",
			tags: ["qianyeqijie"],
			lines: 3,
			extra: !1,
			move: -2
		}, {
			id: "033",
			name: "上野树里",
			tags: ["shangyeshuli"],
			lines: 3,
			extra: !0,
			female: !0
		}, {
			id: "034",
			name: "石原里美",
			tags: ["shiyuanlimei", "十元"],
			lines: 3,
			extra: !1,
			female: !0
		}, {
			id: "035",
			name: "韩寒",
			tags: ["岳父"],
			lines: 2,
			extra: !1
		}, {
			id: "036",
			name: "小嶋阳菜",
			tags: ["xiaodaoyangcai"],
			lines: 4,
			extra: !0,
			female: !0
		}, {
			id: "037",
			name: "小松菜奈",
			tags: ["xiaosongcainai"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "038",
			name: "有村架纯",
			tags: [],
			lines: 6,
			extra: !0,
			move: -6,
			female: !0
		}, {
			id: "039",
			name: "长泽雅美",
			tags: ["changzeyamei"],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "040",
			name: "佐佐木希",
			tags: ["zuozuomuxi"],
			lines: 11,
			extra: !0,
			female: !0,
			move: -2
		}, {
			id: "041",
			name: "池昌旭",
			tags: [],
			lines: 1,
			extra: !1
		}, {
			id: "042",
			name: "崔雪莉",
			tags: ["F(x)"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "043",
			name: "BTS",
			tags: ["防弹少年团", "防弹少年团"],
			lines: 3,
			extra: !0
		}, {
			id: "044",
			name: "河智苑",
			tags: [],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "045",
			name: "金秀贤",
			tags: ["都敏俊", "秀MAN"],
			lines: 2,
			extra: !1
		}, {
			id: "046",
			name: "李光洙",
			tags: [],
			lines: 1,
			extra: !1
		}, {
			id: "047",
			name: "李敏镐",
			tags: ["欧巴"],
			lines: 1,
			extra: !1
		}, {
			id: "048",
			name: "李钟硕",
			tags: ["二硕"],
			lines: 1,
			extra: !1
		}, {
			id: "049",
			name: "南柱赫",
			tags: [],
			lines: 2,
			extra: !0
		}, {
			id: "050",
			name: "郑容和",
			tags: [],
			lines: 2,
			extra: !0
		}, {
			id: "051",
			name: "崔胜铉",
			tags: ["Bigbang", "TOP"],
			lines: 2,
			extra: !0
		}, {
			id: "052",
			name: "胜利",
			tags: ["Bigbang"],
			lines: 3,
			extra: !0
		}, {
			id: "053",
			name: "朴灿烈",
			tags: ["EXO", "火山宝宝"],
			lines: 1,
			extra: !1
		}, {
			id: "055",
			name: "崔始源",
			tags: ["SuperJunior"],
			lines: 1,
			extra: !1
		}, {
			id: "056",
			name: "宋旻浩",
			tags: ["WINNER", "MINO"],
			lines: 1,
			extra: !1
		}, {
			id: "057",
			name: "Justin Timberlake",
			tags: ["贾斯汀"],
			lines: 4,
			extra: !1,
			move: -4
		}, {
			id: "058",
			name: "松田龙平",
			tags: [],
			lines: 2,
			extra: !0
		}, {
			id: "059",
			name: "满岛光",
			tags: [],
			lines: 3,
			extra: !1,
			female: !0
		}, {
			id: "060",
			name: "坂口健太郎",
			tags: [],
			lines: 1,
			extra: !1
		}, {
			id: "062",
			name: "边伯贤",
			tags: ["EXO"],
			lines: 1,
			extra: !1
		}, {
			id: "063",
			name: "都暻秀",
			tags: ["EXO", "DO"],
			lines: 2,
			extra: !0
		}, {
			id: "064",
			name: "金珉硕",
			tags: ["EXO", "XIUMIN"],
			lines: 1,
			extra: !1
		}, {
			id: "065",
			name: "二阶堂富美",
			tags: [],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "066",
			name: "户田惠梨香",
			tags: [],
			lines: 3,
			extra: !0,
			female: !0
		}, {
			id: "067",
			name: "吉冈里帆",
			tags: [],
			lines: 6,
			extra: !0,
			move: -6,
			female: !0
		}, {
			id: "068",
			name: "方大同",
			tags: [],
			lines: 6,
			extra: !0,
			move: -7
		}, {
			id: "069",
			name: "Jim Parsons",
			tags: ["谢耳朵", "sheldon"],
			lines: 1,
			extra: !1
		}, {
			id: "070",
			name: "Robert Pattinson",
			tags: ["暮光之城"],
			lines: 3,
			extra: !0,
			move: -2
		}, {
			id: "071",
			name: "Rihanna",
			tags: ["蕾哈娜"],
			lines: 3,
			extra: !0,
			female: !0
		}, {
			id: "072",
			name: "Taylor Swift",
			tags: ["泰勒", "公交车", "霉霉"],
			lines: 3,
			extra: !0,
			female: !0
		}, {
			id: "073",
			name: "The Beatles",
			tags: ["披头士"],
			lines: 5,
			extra: !0,
			move: -2
		}, {
			id: "074",
			name: "Kim Kardashian",
			tags: [],
			lines: 3,
			extra: !1,
			move: -2,
			female: !0
		}, {
			id: "075",
			name: "蔡依林",
			tags: ["天了噜"],
			lines: 1,
			extra: !1,
			female: !0
		}, {
			id: "076",
			name: "Kat Dennings",
			tags: ["破产姐妹"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "077",
			name: "Beth Behrs",
			tags: ["破产姐妹"],
			lines: 3,
			extra: !1,
			female: !0
		}, {
			id: "078",
			name: "梅西",
			tags: ["足球"],
			lines: 4,
			extra: !0,
			move: -2
		}, {
			id: "079",
			name: "克里斯蒂亚诺·罗纳尔多",
			tags: ["c罗"],
			lines: 3,
			extra: !1
		}, {
			id: "080",
			name: "费尔南多·托雷斯",
			tags: ["托雷斯"],
			lines: 3,
			extra: !1
		}, {
			id: "081",
			name: "大卫·贝克汉姆",
			tags: ["贝克汉姆"],
			lines: 2,
			extra: !1
		}, {
			id: "082",
			name: "维多利亚·贝克汉姆",
			tags: ["贝克汉姆"],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "083",
			name: "布鲁克林·贝克汉姆",
			tags: ["贝克汉姆"],
			lines: 2,
			extra: !1
		}, {
			id: "084",
			name: "李准基",
			tags: [],
			lines: 2,
			extra: !0
		}, {
			id: "085",
			name: "克鲁兹·贝克汉姆",
			tags: ["贝克汉姆"],
			lines: 3,
			extra: !0
		}, {
			id: "086",
			name: "罗密欧·贝克汉姆",
			tags: ["贝克汉姆"],
			lines: 4,
			extra: !0,
			move: -4
		}, {
			id: "087",
			name: "舒淇",
			tags: [],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "088",
			name: "林允儿",
			tags: ["少女时代"],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "089",
			name: "金泰妍",
			tags: ["少女时代"],
			lines: 3,
			extra: !1,
			female: !0
		}, {
			id: "090",
			name: "金孝渊",
			tags: ["少女时代"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "091",
			name: "崔秀英",
			tags: ["少女时代"],
			lines: 2,
			extra: !1,
			female: !0
		}, {
			id: "092",
			name: "徐玄",
			tags: ["少女时代"],
			lines: 1,
			extra: !1,
			female: !0
		}, {
			id: "093",
			name: "权俞利",
			tags: ["少女时代"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "094",
			name: "Sunny",
			tags: ["少女时代"],
			lines: 2,
			extra: !0,
			female: !0
		}, {
			id: "095",
			name: "Tiffany",
			tags: ["少女时代"],
			lines: 3,
			extra: !1,
			female: !0
		}, {
			id: "096",
			name: "李玟雨",
			tags: ["神话"],
			lines: 1,
			extra: !1
		}, {
			id: "097",
			name: "申彗星",
			tags: ["神话"],
			lines: 3,
			extra: !1
		}, {
			id: "098",
			name: "Jun Jin",
			tags: ["神话"],
			lines: 5,
			extra: !1
		}, {
			id: "099",
			name: "科比",
			tags: ["篮球"],
			lines: 3,
			extra: !0
		}, {
			id: "100",
			name: "小李子",
			tags: ["Leonardo DiCaprio"],
			lines: 3,
			extra: !0
		}, {
			id: "101",
			extra: !0,
			tags: ["Chris Paul "],
			lines: "3",
			name: "克里斯-保罗"
		}, {
			id: "102",
			extra: !1,
			tags: ["AKB48"],
			lines: "2",
			name: "前田敦子",
			female: !0
		}, {
			id: "103",
			extra: !0,
			tags: [""],
			lines: "2",
			name: "倪妮",
			female: !0
		}, {
			id: "104",
			extra: !0,
			tags: ["阿sa"],
			lines: "2",
			name: "蔡卓妍",
			female: !0
		}, {
			id: "105",
			extra: !1,
			tags: [""],
			lines: "2",
			name: "菊地凛子",
			female: !0
		}, {
			id: "106",
			extra: !1,
			tags: [""],
			lines: "4",
			name: "浅野忠信"
		}, {
			id: "107",
			extra: !1,
			tags: [""],
			lines: "4",
			name: "武田玲奈",
			female: !0
		}, {
			id: "108",
			extra: !1,
			tags: ["JYJ"],
			lines: "1",
			name: "金俊秀"
		}, {
			id: "109",
			extra: !1,
			tags: [""],
			lines: "2",
			name: "金大川"
		}, {
			id: "110",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "韩庚"
		}, {
			id: "111",
			extra: !1,
			tags: [""],
			lines: "2",
			name: "韩寒"
		}, {
			id: "112",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "朴信惠",
			female: !0
		}, {
			id: "113",
			extra: !1,
			tags: ["EXO", "小绵羊"],
			lines: "1",
			name: "张艺兴"
		}, {
			id: "114",
			extra: !1,
			tags: ["Bigbang", "东永裴"],
			lines: "1",
			name: "太阳"
		}, {
			id: "115",
			extra: !0,
			tags: ["EXO"],
			lines: "3",
			move: -2,
			name: "EXO-K "
		}, {
			id: "116",
			extra: !0,
			tags: ["EXO"],
			lines: "2",
			name: "EXO-M"
		}, {
			id: "117",
			extra: !0,
			tags: ["f(x) ", "刘逸云"],
			lines: "4",
			name: "Amber"
		}, {
			id: "118",
			extra: !1,
			tags: ["f(x)", "郑秀晶"],
			lines: "1",
			name: "Krystal",
			female: !0
		}, {
			id: "119",
			extra: !1,
			tags: ["Super Junior"],
			lines: "2",
			name: "李东海"
		}, {
			id: "120",
			extra: !1,
			tags: ["Super Junior"],
			lines: "1",
			name: "利特"
		}, {
			id: "121",
			extra: !1,
			tags: ["Super Junior"],
			lines: "1",
			name: "强仁"
		}, {
			id: "122",
			extra: !0,
			tags: ["Super Junior"],
			lines: "2",
			name: "神童"
		}, {
			id: "123",
			extra: !1,
			tags: ["Super Junior"],
			lines: "3",
			name: "艺声"
		}, {
			id: "124",
			extra: !1,
			tags: ["Super Junior"],
			lines: "2",
			name: "银赫"
		}, {
			id: "125",
			extra: !0,
			tags: ["Super Junior"],
			lines: "2",
			name: "周觅"
		}, {
			id: "126",
			extra: !0,
			tags: [""],
			lines: "2",
			name: "Justin Bieber"
		}, {
			id: "127",
			extra: !1,
			tags: ["WINNER"],
			lines: "1",
			name: "金秦禹"
		}, {
			id: "128",
			extra: !0,
			tags: ["WINNER"],
			lines: "2",
			name: "李昇勋"
		}, {
			id: "129",
			extra: !0,
			tags: ["WINNER", "MINO"],
			lines: "7",
			name: "宋旻浩"
		}, {
			id: "130",
			extra: !0,
			tags: ["绿洲"],
			lines: "4",
			move: -2,
			name: "Oasis"
		}, {
			id: "131",
			extra: !0,
			tags: [""],
			lines: "3",
			name: "Sam Smith"
		}, {
			id: "132",
			extra: !0,
			tags: ["维密"],
			lines: "3",
			name: "Bella Hadid",
			female: !0
		}, {
			id: "133",
			extra: !0,
			tags: ["维密"],
			lines: "6",
			name: "gigi hadid",
			female: !0
		}, {
			id: "134",
			extra: !0,
			tags: ["depp"],
			lines: "3",
			move: -2,
			name: "Lily-Rose Depp",
			female: !0
		}, {
			id: "135",
			extra: !0,
			tags: [""],
			lines: "4",
			move: -2,
			name: "张辛苑",
			female: !0
		}, {
			id: "136",
			extra: !0,
			tags: [""],
			lines: "5",
			name: "苍井空",
			female: !0
		}, {
			id: "137",
			extra: !1,
			tags: ["SNH48"],
			lines: "2",
			name: "冯薪朵",
			female: !0
		}, {
			id: "138",
			extra: !1,
			tags: ["SNH48"],
			lines: "3",
			name: "万丽娜",
			female: !0
		}, {
			id: "139",
			extra: !1,
			tags: ["SNH48"],
			lines: "1",
			name: "黄婷婷",
			female: !0
		}, {
			id: "140",
			extra: !1,
			tags: ["SNH48"],
			lines: "0",
			name: "鞠婧祎",
			female: !0
		}, {
			id: "141",
			extra: !1,
			tags: ["SNH48"],
			lines: "2",
			name: "戴萌",
			female: !0
		}, {
			id: "142",
			extra: !1,
			tags: ["SNH48"],
			lines: "1",
			name: "许佳琪",
			female: !0
		}, {
			id: "143",
			extra: !0,
			tags: ["SNH48"],
			lines: "2",
			name: "赵嘉敏",
			female: !0
		}, {
			id: "144",
			extra: !0,
			tags: ["陈大发"],
			lines: "5",
			name: "陈意涵",
			female: !0
		}, {
			id: "145",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "孙艺珍",
			female: !0
		}, {
			id: "146",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "张贤胜"
		}, {
			id: "147",
			extra: !0,
			tags: ["GOT7", "Jackson"],
			lines: "3",
			move: -2,
			name: "王嘉尔"
		}, {
			id: "148",
			extra: !1,
			tags: ["GOT7"],
			lines: "2",
			name: "BamBam"
		}, {
			id: "149",
			extra: !1,
			tags: ["FTIsland"],
			lines: "1",
			name: "李弘基"
		}, {
			id: "150",
			extra: !1,
			tags: ["Beast"],
			lines: "1",
			name: "李起光"
		}, {
			id: "151",
			extra: !0,
			tags: ["Beast"],
			lines: "2",
			name: "尹斗俊"
		}, {
			id: "152",
			extra: !0,
			tags: ["CNBlue"],
			lines: "2",
			name: "李正信"
		}, {
			id: "153",
			extra: !1,
			tags: ["CNBlue"],
			lines: "1",
			name: "姜敏赫"
		}, {
			id: "154",
			extra: !0,
			tags: ["CNBlue"],
			lines: "2",
			name: "李宗泫"
		}, {
			id: "155",
			extra: !1,
			tags: ["INFINITE"],
			lines: "2",
			name: "李成钟"
		}, {
			id: "156",
			extra: !1,
			tags: ["INFINITE"],
			lines: "2",
			name: "张东雨"
		}, {
			id: "157",
			extra: !1,
			tags: ["INFINITE"],
			lines: "1",
			name: "南优贤"
		}, {
			id: "158",
			extra: !1,
			tags: ["Miss A", "SUZY"],
			lines: "1",
			name: "裴秀智",
			female: !0
		}, {
			id: "159",
			extra: !1,
			tags: ["SHINee"],
			lines: "1",
			name: "温流"
		}, {
			id: "160",
			extra: !1,
			tags: ["SHINee"],
			lines: "1",
			name: "钟铉"
		}, {
			id: "161",
			extra: !0,
			tags: ["SHINee"],
			lines: "2",
			name: "Key"
		}, {
			id: "162",
			extra: !1,
			tags: ["WINNER"],
			lines: "1",
			name: "姜胜允"
		}, {
			id: "163",
			extra: !1,
			tags: ["扎克", "facebook"],
			lines: "1",
			name: "zuck"
		}, {
			id: "164",
			extra: !1,
			tags: ["miranda", "米兰达·可儿"],
			lines: "3",
			name: "可儿",
			female: !0
		}, {
			id: "165",
			extra: !0,
			tags: ["埃隆·马斯克", "特斯拉"],
			lines: "2",
			name: "elon musk"
		}, {
			id: "166",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "高圆圆",
			female: !0
		}, {
			id: "167",
			extra: !0,
			tags: ["anne hathaway"],
			lines: "3",
			name: "安妮海瑟薇",
			female: !0
		}, {
			id: "168",
			extra: !0,
			tags: ["詹姆斯·弗兰科", ""],
			lines: "5",
			move: -4,
			name: "james franco"
		}, {
			id: "169",
			extra: !1,
			tags: ["阿姆"],
			lines: "2",
			name: "eminem"
		}, {
			id: "170",
			extra: !0,
			tags: ["obama"],
			lines: "3",
			name: "奥巴马"
		}, {
			id: "172",
			extra: !0,
			tags: ["赛琳娜·戈麦斯"],
			lines: "3",
			name: "selenagomez",
			female: !0
		}, {
			id: "173",
			extra: !1,
			tags: [""],
			lines: "3",
			name: "beyonce",
			female: !0
		}, {
			id: "174",
			extra: !0,
			tags: ["生活大爆炸", "normancook"],
			lines: "3",
			name: "penny",
			female: !0
		}, {
			id: "175",
			extra: !0,
			tags: ["酷玩", "乐队"],
			lines: "4",
			move: -2,
			name: "coldplay"
		}, {
			id: "176",
			extra: !0,
			tags: ["冰与火", "艾米莉亚·克拉克", "龙女"],
			lines: "3",
			name: "emilia clarke",
			female: !0
		}, {
			id: "177",
			extra: !0,
			tags: ["小罗伯特·唐尼"],
			lines: "3",
			name: "robert downey"
		}, {
			id: "178",
			extra: !0,
			tags: ["维密"],
			lines: "3",
			name: "karlie kloss",
			female: !0
		}, {
			id: "179",
			extra: !1,
			tags: ["极限特工", "肌肉男"],
			lines: "3",
			move: -2,
			name: "vin diesel"
		}, {
			id: "180",
			extra: !1,
			tags: ["杰森斯坦森", "肌肉男"],
			lines: "2",
			name: "jason statham"
		}, {
			id: "181",
			extra: !1,
			tags: [""],
			lines: "1",
			name: "窦靖童",
			female: !0
		}, {
			id: "182",
			extra: !0,
			tags: [""],
			lines: "2",
			name: "黄景瑜"
		}, {
			id: "183",
			extra: !0,
			tags: ["一美"],
			lines: "3",
			move: -2,
			name: "james macvocy"
		}, {
			id: "184",
			extra: !1,
			tags: ["gigi hadid", "one direction"],
			lines: "2",
			name: "Zayn Malik"
		}, {
			id: "185",
			extra: !1,
			tags: ["戳爷"],
			lines: "2",
			name: "Troye Sivan"
		}, {
			id: "186",
			lines: "2",
			name: "休杰克曼",
			tags: ["jackman"],
			extra: !1
		}, {
			id: "187",
			lines: "3",
			name: "瑞安·雷诺兹",
			tags: ["rr", "ryan", ""],
			extra: !0
		}, {
			id: "188",
			lines: "2",
			name: "桑德勒",
			tags: ["adamsandler ", "钱德勒"],
			extra: !1
		}, {
			id: "189",
			lines: "3",
			name: "道恩·强森",
			tags: ["巨石强森"],
			extra: !0
		}, {
			id: "190",
			lines: "2",
			name: "滨崎步",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "191",
			lines: "3",
			name: "Bruno Mars",
			tags: [""],
			extra: !0
		}, {
			id: "192",
			lines: "7",
			name: "波多野结衣",
			tags: [""],
			extra: !0,
			move: -8,
			female: !0
		}, {
			id: "193",
			lines: "1",
			name: "李佩斯",
			tags: ["佩佩", "精灵王"],
			extra: !1
		}, {
			id: "194",
			lines: "2",
			name: "Katy Parry",
			tags: ["水果姐"],
			extra: !1,
			female: !0
		}, {
			id: "195",
			lines: "5",
			name: "Mariah Carey",
			tags: ["牛姐"],
			extra: !0,
			move: -2,
			female: !0
		}, {
			id: "196",
			lines: "5",
			name: "Miley Cyrus",
			tags: [""],
			extra: !0,
			move: -4,
			female: !0
		}, {
			id: "197",
			lines: "3",
			name: "贾乃亮",
			tags: [""],
			extra: !0
		}, {
			id: "198",
			lines: "1",
			name: "李宇春",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "199",
			lines: "2",
			name: "陈建州",
			tags: [""],
			extra: !0
		}, {
			id: "200",
			lines: "4",
			name: "古天乐",
			tags: [""],
			extra: !0
		}, {
			id: "201",
			lines: "1",
			name: "桂纶镁",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "202",
			lines: "4",
			name: "郭采洁",
			tags: [""],
			extra: !0,
			move: -2,
			female: !0
		}, {
			id: "203",
			lines: "5",
			name: "吴磊",
			tags: [""],
			extra: !0
		}, {
			id: "204",
			lines: "2",
			name: "柯震东",
			tags: [""],
			extra: !0
		}, {
			id: "205",
			lines: "3",
			name: "邓紫棋",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			id: "206",
			lines: "2",
			name: "郑恺",
			tags: [""],
			extra: !0
		}, {
			id: "207",
			lines: "5",
			name: "张翰",
			tags: [""],
			extra: !0,
			move: -4
		}, {
			id: "208",
			lines: "1",
			name: "魏大勋",
			tags: [""],
			extra: !1
		}, {
			id: "209",
			lines: "1",
			name: "白敬亭",
			tags: [""],
			extra: !1
		}, {
			id: "210",
			lines: "1",
			name: "汤唯",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "211",
			lines: "2",
			name: "陈奕迅",
			tags: [""],
			extra: !1
		}, {
			id: "212",
			lines: "3",
			name: "唐嫣",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			id: "213",
			lines: "3",
			name: "范冰冰",
			tags: [""],
			extra: !0,
			move: -2,
			female: !0
		}, {
			id: "214",
			lines: "2",
			name: "黄晓明",
			tags: [""],
			extra: !0
		}, {
			id: "215",
			lines: "3",
			name: "赵丽颖",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			id: "216",
			lines: "5",
			name: "郑爽",
			tags: [""],
			extra: !0,
			move: -2,
			female: !0
		}, {
			id: "217",
			lines: "2",
			name: "林俊杰",
			tags: [""],
			extra: !1
		}, {
			id: "218",
			lines: "5",
			name: "刘昊然",
			tags: [""],
			extra: !0,
			move: -2
		}, {
			id: "219",
			lines: "2",
			name: "卢广仲",
			tags: [""],
			extra: !1
		}, {
			id: "220",
			lines: "2",
			name: "猫力",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			id: "221",
			lines: "2",
			name: "徐濠萦",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "222",
			lines: "2",
			name: "李现",
			tags: [""],
			extra: !0
		}, {
			id: "223",
			lines: "1",
			name: "张亮",
			tags: [""],
			extra: !1
		}, {
			id: "224",
			lines: "3",
			name: "周柏豪",
			tags: [""],
			extra: !0
		}, {
			id: "225",
			lines: "1",
			name: "修杰楷",
			tags: [""],
			extra: !1
		}, {
			id: "226",
			lines: "2",
			name: "Lady gaga ",
			tags: ["鳖鳖", "嘎嘎", "李谷嘎"],
			extra: !1,
			female: !0
		}, {
			id: "228",
			lines: "1",
			name: "张杰",
			tags: [""],
			extra: !1
		}, {
			id: "229",
			lines: "1",
			name: "菅田将晖",
			tags: [""],
			extra: !1
		}, {
			id: "230",
			lines: "0",
			name: "王凯",
			tags: [""],
			extra: !1
		}, {
			id: "231",
			lines: "3",
			name: "加藤玲奈",
			tags: ["AKB48"],
			extra: !0,
			female: !0
		}, {
			id: "232",
			lines: "1",
			name: "蒋劲夫",
			tags: [""],
			extra: !1
		}, {
			id: "233",
			lines: "2",
			name: "迪丽热巴",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "234",
			lines: "1",
			name: "谢娜",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "235",
			lines: "1",
			name: "古力娜扎",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "236",
			lines: "3",
			name: "王源",
			tags: ["tfboys"],
			extra: !0,
			move: -2
		}, {
			id: "237",
			lines: "4",
			name: "王俊凯",
			tags: ["tfboys"],
			extra: !0,
			move: -2
		}, {
			id: "238",
			lines: "3",
			name: "易烊千玺",
			tags: ["tfboys"],
			extra: !0,
			move: -2
		}, {
			id: "239",
			lines: "2",
			name: "关晓彤",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			id: "240",
			lines: "8",
			name: "吴彦祖",
			tags: [""],
			extra: !0
		}, {
			id: "241",
			lines: "3",
			name: "金希澈",
			tags: [""],
			extra: !1
		}, {
			id: "242",
			lines: "1",
			name: "黄宗泽",
			tags: [""],
			extra: !1
		}, {
			lines: "3",
			id: "243",
			name: "Blake Lively",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			lines: "4",
			id: "244",
			name: "Avril Lavigne",
			tags: ["艾薇儿"],
			extra: !0,
			female: !0,
			move: -2
		}, {
			lines: "5",
			id: "245",
			name: "Alan Walker",
			tags: [""],
			extra: !0,
			move: -3
		}, {
			lines: "2",
			id: "246",
			name: "Adele",
			tags: ["阿黛尔"],
			extra: !1,
			female: !0
		}, {
			lines: "2",
			id: "247",
			name: "Kendall Jenner",
			tags: [""],
			extra: !1,
			female: !0
		}, {
			lines: "1",
			id: "248",
			name: "田馥甄",
			tags: ["hebe"],
			extra: !1,
			female: !0
		}, {
			lines: "3",
			id: "249",
			name: "Adam Levine",
			tags: [""],
			extra: !0
		}, {
			lines: "3",
			id: "250",
			name: "Ariana Grande",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			lines: "3",
			id: "251",
			name: "Britney Spears",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			lines: "1",
			id: "252",
			name: "Charlie Puth",
			tags: [""],
			extra: !1
		}, {
			lines: "2",
			id: "253",
			name: "Drake",
			tags: [""],
			extra: !0
		}, {
			lines: "3",
			id: "254",
			name: "Ed Sheeran",
			tags: [""],
			extra: !1
		}, {
			lines: "1",
			id: "255",
			name: "Kanye West",
			tags: [""],
			extra: !1
		}, {
			lines: "3",
			id: "256",
			name: "Selena Gomez",
			tags: [""],
			extra: !0,
			female: !0
		}, {
			lines: "4",
			id: "257",
			name: "Shawn Mendes",
			tags: [""],
			extra: !0,
			move: -2
		}, {
			lines: "4",
			id: "258",
			name: "Sia",
			tags: [""],
			extra: !0,
			female: !0,
			move: -2
		}, {
			lines: "3",
			id: "259",
			name: "The Weeknd",
			tags: [""],
			extra: !0
		}, {
			lines: "6",
			id: "260",
			name: "The doors",
			tags: [""],
			extra: !0,
			move: -7
		}, {
			lines: "1",
			id: "261",
			name: "抖森",
			tags: ["Tom Hiddleston"],
			extra: !1
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "aika",
			id: "362",
			female: !0,
			move: -6
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "小島みなみ ",
			id: "363",
			female: !0,
			move: -5
		}, {
			lines: "7",
			tags: ["女演员"],
			extra: !0,
			name: "Amatsuka Moe",
			id: "364",
			female: !0,
			move: -8
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "あやみ旬果",
			id: "365",
			female: !0,
			move: -4
		}, {
			lines: "3",
			tags: ["女演员"],
			extra: !0,
			name: "葵つかさ ",
			id: "366",
			female: !0
		}, {
			lines: "3",
			tags: ["女演员"],
			extra: !0,
			name: "RION",
			id: "367",
			female: !0,
			move: -2
		}, {
			lines: "7",
			tags: ["女演员"],
			extra: !0,
			name: "hibiki",
			id: "368",
			female: !0,
			move: -8
		}, {
			lines: "3",
			tags: ["女演员"],
			extra: !0,
			name: "高瀬杏",
			id: "375",
			female: !0,
			move: -2
		}, {
			lines: "11",
			tags: ["女演员"],
			extra: !0,
			name: "北川爱莉香",
			id: "377",
			female: !0,
			move: -6
		}, {
			lines: "6",
			tags: ["女演员"],
			extra: !0,
			name: "友田彩也香",
			id: "378",
			female: !0,
			move: -5
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "天木じゅん",
			id: "379",
			female: !0,
			move: -5
		}, {
			lines: "6",
			tags: ["女演员"],
			extra: !0,
			name: "葉月美音",
			id: "380",
			female: !0,
			move: -6
		}, {
			lines: "4",
			tags: ["女演员"],
			extra: !0,
			name: "Anri Sugihara ",
			id: "381",
			female: !0,
			move: -5
		}, {
			lines: "7",
			tags: ["女演员"],
			extra: !0,
			name: "沖田杏梨",
			id: "382",
			female: !0,
			move: -7
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "meguri",
			id: "383",
			female: !0,
			move: -4
		}, {
			lines: "8",
			tags: ["女演员"],
			extra: !0,
			name: "涉谷由里",
			id: "384",
			female: !0
		}, {
			lines: "5",
			tags: ["女演员"],
			extra: !0,
			name: "吉沢明歩",
			id: "385",
			female: !0,
			move: -1
		}, {
			lines: "4",
			tags: ["女演员"],
			extra: !0,
			name: "希咲あや ",
			id: "387",
			female: !0,
			move: -1
		}, {
			lines: "6",
			tags: ["女演员"],
			extra: !0,
			name: "Hitomi Tanaka",
			id: "388",
			female: !0,
			move: -5
		}, {
			lines: "4",
			tags: ["女演员"],
			extra: !0,
			name: "杉原杏璃",
			id: "390",
			female: !0,
			move: -2
		}, {
			lines: "2",
			tags: ["女演员"],
			extra: !1,
			name: "HaoZienwei",
			id: "391",
			female: !0
		}, {
			lines: "2",
			tags: ["女演员"],
			extra: !1,
			name: "鈴木ふみ奈",
			id: "393",
			female: !0
		}]
	},
	6: function(e, t) {
		window.Canvas2Image = function() {
			function e(e, t, n) {
				var a = e.width,
					i = e.height;
				void 0 == t && (t = a), void 0 == n && (n = i);
				var r = document.createElement("canvas"),
					o = r.getContext("2d");
				return r.width = t, r.height = n, o.drawImage(e, 0, 0, a, i, 0, 0, t, n), r
			}

			function t(t, n, a, i) {
				return t = e(t, a, i), t.toDataURL(n)
			}

			function n(e) {
				document.location.href = e
			}

			function a(e) {
				var t = document.createElement("img");
				return t.src = e, t
			}

			function i(e) {
				e = e.toLowerCase().replace(/jpg/i, "jpeg");
				var t = e.match(/png|jpeg|bmp|gif/)[0];
				return "image/" + t
			}

			function r(e) {
				if(!window.btoa) throw "btoa undefined";
				var t = "";
				if("string" == typeof e) t = e;
				else
					for(var n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
				return btoa(t)
			}

			function o(e) {
				var t = e.width,
					n = e.height;
				return e.getContext("2d").getImageData(0, 0, t, n)
			}

			function s(e, t) {
				return "data:" + t + ";base64," + e
			}
			var l = function() {
					var e = document.createElement("canvas"),
						t = e.getContext("2d");
					return {
						canvas: !!t,
						imageData: !!t.getImageData,
						dataURL: !!e.toDataURL,
						btoa: !!window.btoa
					}
				}(),
				u = "image/octet-stream",
				c = function(e) {
					var t = e.width,
						n = e.height,
						a = t * n * 3,
						i = a + 54,
						o = [66, 77, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0],
						s = [40, 0, 0, 0, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						l = (4 - 3 * t % 4) % 4,
						u = e.data,
						c = "",
						d = t << 2,
						f = n,
						m = String.fromCharCode;
					do {
						for(var p = d * (f - 1), g = "", h = 0; h < t; h++) {
							var x = h << 2;
							g += m(u[p + x + 2]) + m(u[p + x + 1]) + m(u[p + x])
						}
						for(var v = 0; v < l; v++) g += String.fromCharCode(0);
						c += g
					} while (--f);
					var b = r(o.concat(s)) + r(c);
					return b
				},
				d = function(a, r, d, f) {
					if(l.canvas && l.dataURL)
						if("string" == typeof a && (a = document.getElementById(a)), void 0 == f && (f = "png"), f = i(f), /bmp/.test(f)) {
							var m = o(e(a, r, d)),
								p = c(m);
							n(s(p, u))
						} else {
							var p = t(a, f, r, d);
							n(p.replace(f, u))
						}
				},
				f = function(n, r, u, d) {
					if(l.canvas && l.dataURL) {
						if("string" == typeof n && (n = document.getElementById(n)), void 0 == d && (d = "png"), d = i(d), /bmp/.test(d)) {
							var f = o(e(n, r, u)),
								m = c(f);
							return a(s(m, "image/bmp"))
						}
						var m = t(n, d, r, u);
						return a(m)
					}
				};
			return {
				saveAsImage: d,
				saveAsPNG: function(e, t, n) {
					return d(e, t, n, "png")
				},
				saveAsJPEG: function(e, t, n) {
					return d(e, t, n, "jpeg")
				},
				saveAsGIF: function(e, t, n) {
					return d(e, t, n, "gif")
				},
				saveAsBMP: function(e, t, n) {
					return d(e, t, n, "bmp")
				},
				convertToImage: f,
				convertToPNG: function(e, t, n) {
					return f(e, t, n, "png")
				},
				convertToJPEG: function(e, t, n) {
					return f(e, t, n, "jpeg")
				},
				convertToGIF: function(e, t, n) {
					return f(e, t, n, "gif")
				},
				convertToBMP: function(e, t, n) {
					return f(e, t, n, "bmp")
				}
			}
		}()
	},
	7: function(e, t, n) {
		function a(e) {
			return n(i(e))
		}

		function i(e) {
			return r[e] || function() {
				throw new Error("Cannot find module '" + e + "'.")
			}()
		}
		var r = {
			"./bg_appjun.png": 50
		};
		a.keys = function() {
			return Object.keys(r)
		}, a.resolve = i, e.exports = a, a.id = 7
	},
	8: function(e, t, n) {
		function a(e) {
			return n(i(e))
		}

		function i(e) {
			return r[e] || function() {
				throw new Error("Cannot find module '" + e + "'.")
			}()
		}
		var r = {
			"./qr_appjun.png": 52,
			"./qr_fanfan.png": 53
		};
		a.keys = function() {
			return Object.keys(r)
		}, a.resolve = i, e.exports = a, a.id = 8
	},
	11: function(e, t, n) {
		t = e.exports = n(1)(), t.push([e.id, 'body,html{margin:0;background:#f5f8fa}body,html,textarea{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif}*{-webkit-font-smoothing:antialiased}.wrap{width:100%;max-width:10rem;min-height:100vh;margin:auto;overflow:hidden}.hide-avatar{position:absolute;z-index:-999;display:block;width:80%;opacity:0}.page{display:none}.page-top{background:#fff;overflow:hidden;position:relative}.logo-wrap{position:absolute;top:.266667rem;right:.266667rem}.co-logo{height:.32rem}.ins-logo{display:block;width:100%}.query-keyword{display:block;position:absolute;left:1rem;bottom:.533333rem;box-sizing:border-box;width:8rem;border:none;border-radius:.213333rem;background:hsla(0,0%,100%,.45);color:gray;text-align:center}[data-dpr="1"] .query-keyword{font-size:14px;padding:10px 20px}[data-dpr="2"] .query-keyword{font-size:28px;padding:20px 40px}[data-dpr="3"] .query-keyword{font-size:42px;padding:30px 60px}.select-wrap{background:#fff}.select-op{padding:.533333rem .4rem 0}button.random{color:#404040;font-size:.48rem;line-height:1;padding:.106667rem 0;border:none;background:transparent}button.random img{height:.48rem;margin-right:.266667rem}button.change-list{float:right;color:#404040;background:transparent;font-size:.373333rem;line-height:1;border:1px solid;border-radius:.106667rem;padding:.16rem .213333rem}button.change-list img{height:.373333rem;margin-right:.266667rem}.tabs{margin:.4rem}.tabs:after{content:"";display:block;clear:both}.tab{box-sizing:border-box;width:50%;float:left;text-align:center;color:#fc4988;border:1px solid #fc4988;line-height:2}[data-dpr="1"] .tab{font-size:14px}[data-dpr="2"] .tab{font-size:28px}[data-dpr="3"] .tab{font-size:42px}[data-dpr="1"] .tab.male{border-top-left-radius:4px;border-bottom-left-radius:4px}[data-dpr="2"] .tab.male{border-top-left-radius:8px;border-bottom-left-radius:8px}[data-dpr="3"] .tab.male{border-top-left-radius:12px;border-bottom-left-radius:12px}[data-dpr="1"] .tab.female{border-top-right-radius:4px;border-bottom-right-radius:4px}[data-dpr="2"] .tab.female{border-top-right-radius:8px;border-bottom-right-radius:8px}[data-dpr="3"] .tab.female{border-top-right-radius:12px;border-bottom-right-radius:12px}.tab.active{color:#fff;background:#fc4988}.no-result{text-align:center;margin-bottom:.266667rem;color:#fc4988}[data-dpr="1"] .no-result{font-size:14px}[data-dpr="2"] .no-result{font-size:28px}[data-dpr="3"] .no-result{font-size:42px}.select-list{margin:-.106667rem -.133333rem;padding-bottom:1.493333rem}.select-list:after{content:"";display:block;clear:both}.select-list h1{text-align:center;font-size:.426667rem;line-height:3;color:#999}.select-list li{padding:.106667rem;float:left}.select-list img{display:block;width:3.2rem;height:3.2rem}.edit-page{position:relative}.edit-wrap{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.orig-ins{display:block;width:100%;margin-top:-.533333rem}.btn-re-select{position:absolute;top:.8rem;left:.266667rem;font-size:.373333rem;line-height:1;padding:.16rem .266667rem;border:none;border-radius:.106667rem;background:#fff;color:#1ea1f3}.upload-wrap{position:absolute;left:0;top:6.48rem;width:3.333333rem;height:3.333333rem;border:none;background:#fff url(' + n(55) + ') no-repeat;background-size:100% 100%;color:transparent}.upload-wrap.line0{top:5.6rem}.upload-wrap.line1{top:6.48rem}.upload-wrap.line2{top:7.013333rem}.upload-wrap.line3{top:7.546667rem}.upload-wrap.line4{top:8.08rem}.upload-wrap.line5{top:8.613333rem}.upload-wrap.line6{top:9.146667rem}.upload-wrap.line0.extra{top:6.693333rem}.upload-wrap.line1.extra{top:7.226667rem}.upload-wrap.line2.extra{top:7.76rem}.upload-wrap.line3.extra{top:8.293333rem}.upload-wrap.line4.extra{top:8.826667rem}.upload-wrap.line5.extra{top:9.36rem}.upload-wrap.line6.extra{top:9.893333rem}.upload-wrap.line7.extra{top:10.426667rem}.upload-wrap.line8.extra{top:10.96rem}.upload-wrap.line11.extra{top:12.56rem}.upload-wrap.move1{margin-top:.026667rem}.upload-wrap.move2{margin-top:.053333rem}.upload-wrap.move3{margin-top:.08rem}.upload-wrap.move4{margin-top:.106667rem}.upload-wrap.move5{margin-top:.133333rem}.upload-wrap.move6{margin-top:.16rem}.upload-wrap.move7{margin-top:.186667rem}.upload-wrap.move8{margin-top:.213333rem}.upload-wrap.move9{margin-top:.24rem}.upload-wrap.move10{margin-top:.266667rem}.upload-wrap.move-1{margin-top:-.026667rem}.upload-wrap.move-2{margin-top:-.053333rem}.upload-wrap.move-3{margin-top:-.08rem}.upload-wrap.move-4{margin-top:-.106667rem}.upload-wrap.move-5{margin-top:-.133333rem}.upload-wrap.move-6{margin-top:-.16rem}.upload-wrap.move-7{margin-top:-.186667rem}.upload-wrap.move-8{margin-top:-.213333rem}.upload-wrap.move-9{margin-top:-.24rem}.upload-wrap.move-10{margin-top:-.266667rem}.btn-upload{display:block;position:absolute;top:0;left:0}.btn-upload,.upload-img{width:100%;height:100%;opacity:0}.result-page{min-height:100vh;background:#151515}.press-info{position:relative;background:#1ea1f3;color:#fff;line-height:3;font-weight:700;text-align:center}[data-dpr="1"] .press-info{font-size:14px}[data-dpr="2"] .press-info{font-size:28px}[data-dpr="3"] .press-info{font-size:42px}.btn-re-upload{position:absolute;left:.266667rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#1ea1f3;font-size:.373333rem;line-height:1;padding:.16rem .266667rem;border:none;background:#fff -webkit-linear-gradient(top,#fff,#deeef8);background:#fff linear-gradient(180deg,#fff,#deeef8);border-radius:.106667rem}.result-img-wrap{position:relative;overflow:hidden;background:#151515;padding:.4rem 0 1.333333rem}.result-img-wrap img{display:block;width:7.466667rem;min-height:8rem;margin:auto}.re-upload-wrap{background:#fff;border-bottom:1px solid #dbdbdb;padding:.4rem;text-align:center}canvas{position:absolute;z-index:-999;opacity:0;display:none}.download-link{position:fixed;display:block;box-sizing:border-box;bottom:0;left:0;width:100%;background:#fff;padding:.4rem .933333rem .4rem 1.2rem;border-top:1px solid #dbdbdb;color:#4a4a4a;font-size:.373333rem;line-height:1}.download-link.page1{padding-left:.533333rem;padding-right:.533333rem}.link-img{width:.64rem;height:.64rem;position:absolute;top:50%;left:.266667rem;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%;border:1px solid #979797}.download-link:after{content:"";position:absolute;top:50%;right:.533333rem;display:block;width:.266667rem;height:.266667rem;border:solid #404040;border-width:.053333rem .053333rem 0 0;border-radius:.053333rem;-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%)}.warning{margin-top:.533333rem;color:gray;text-align:center}[data-dpr="1"] .warning{font-size:12px}[data-dpr="2"] .warning{font-size:24px}[data-dpr="3"] .warning{font-size:36px}.open-tips{display:none;position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);color:#fff;text-align:center;font-size:.533333rem;font-weight:700;line-height:2;box-sizing:border-box;padding-top:4rem}', ""])
	},
	17: function(e, t, a) {
		var i, r;
		(function() {
			function a(e) {
				return !!e.exifdata
			}

			function o(e, t) {
				t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || "", e = e.replace(/^data\:([^\;]+)\;base64,/gim, "");
				for(var n = atob(e), a = n.length, i = new ArrayBuffer(a), r = new Uint8Array(i), o = 0; o < a; o++) r[o] = n.charCodeAt(o);
				return i
			}

			function s(e, t) {
				var n = new XMLHttpRequest;
				n.open("GET", e, !0), n.responseType = "blob", n.onload = function(e) {
					200 != this.status && 0 !== this.status || t(this.response)
				}, n.send()
			}

			function l(e, t) {
				function n(n) {
					var a = u(n),
						i = c(n);
					e.exifdata = a || {}, e.iptcdata = i || {}, t && t.call(e)
				}
				if(e.src)
					if(/^data\:/i.test(e.src)) {
						var a = o(e.src);
						n(a)
					} else if(/^blob\:/i.test(e.src)) {
					var i = new FileReader;
					i.onload = function(e) {
						n(e.target.result)
					}, s(e.src, function(e) {
						i.readAsArrayBuffer(e)
					})
				} else {
					var r = new XMLHttpRequest;
					r.onload = function() {
						if(200 != this.status && 0 !== this.status) throw "Could not load image";
						n(r.response), r = null
					}, r.open("GET", e.src, !0), r.responseType = "arraybuffer", r.send(null)
				} else if(window.FileReader && (e instanceof window.Blob || e instanceof window.File)) {
					var i = new FileReader;
					i.onload = function(e) {
						h && console.log("Got file of length " + e.target.result.byteLength), n(e.target.result)
					}, i.readAsArrayBuffer(e)
				}
			}

			function u(e) {
				var t = new DataView(e);
				if(h && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return h && console.log("Not a valid JPEG"), !1;
				for(var n, a = 2, i = e.byteLength; a < i;) {
					if(255 != t.getUint8(a)) return h && console.log("Not a valid marker at offset " + a + ", found: " + t.getUint8(a)), !1;
					if(n = t.getUint8(a + 1), h && console.log(n), 225 == n) return h && console.log("Found 0xFFE1 marker"), g(t, a + 4, t.getUint16(a + 2) - 2);
					a += 2 + t.getUint16(a + 2)
				}
			}

			function c(e) {
				var t = new DataView(e);
				if(h && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return h && console.log("Not a valid JPEG"), !1;
				for(var n = 2, a = e.byteLength, i = function(e, t) {
						return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5)
					}; n < a;) {
					if(i(t, n)) {
						var r = t.getUint8(n + 7);
						r % 2 !== 0 && (r += 1), 0 === r && (r = 4);
						var o = n + 8 + r,
							s = t.getUint16(n + 6 + r);
						return d(e, o, s)
					}
					n++
				}
			}

			function d(e, t, n) {
				for(var a, i, r, o, s, l = new DataView(e), u = {}, c = t; c < t + n;) 28 === l.getUint8(c) && 2 === l.getUint8(c + 1) && (o = l.getUint8(c + 2), o in S && (r = l.getInt16(c + 3), s = r + 5, i = S[o], a = p(l, c + 5, r), u.hasOwnProperty(i) ? u[i] instanceof Array ? u[i].push(a) : u[i] = [u[i], a] : u[i] = a)), c++;
				return u
			}

			function f(e, t, n, a, i) {
				var r, o, s, l = e.getUint16(n, !i),
					u = {};
				for(s = 0; s < l; s++) r = n + 12 * s + 2, o = a[e.getUint16(r, !i)], !o && h && console.log("Unknown tag: " + e.getUint16(r, !i)), u[o] = m(e, r, t, n, i);
				return u
			}

			function m(e, t, n, a, i) {
				var r, o, s, l, u, c, d = e.getUint16(t + 2, !i),
					f = e.getUint32(t + 4, !i),
					m = e.getUint32(t + 8, !i) + n;
				switch(d) {
					case 1:
					case 7:
						if(1 == f) return e.getUint8(t + 8, !i);
						for(r = f > 4 ? m : t + 8, o = [], l = 0; l < f; l++) o[l] = e.getUint8(r + l);
						return o;
					case 2:
						return r = f > 4 ? m : t + 8, p(e, r, f - 1);
					case 3:
						if(1 == f) return e.getUint16(t + 8, !i);
						for(r = f > 2 ? m : t + 8, o = [], l = 0; l < f; l++) o[l] = e.getUint16(r + 2 * l, !i);
						return o;
					case 4:
						if(1 == f) return e.getUint32(t + 8, !i);
						for(o = [], l = 0; l < f; l++) o[l] = e.getUint32(m + 4 * l, !i);
						return o;
					case 5:
						if(1 == f) return u = e.getUint32(m, !i), c = e.getUint32(m + 4, !i), s = new Number(u / c), s.numerator = u, s.denominator = c, s;
						for(o = [], l = 0; l < f; l++) u = e.getUint32(m + 8 * l, !i), c = e.getUint32(m + 4 + 8 * l, !i), o[l] = new Number(u / c), o[l].numerator = u, o[l].denominator = c;
						return o;
					case 9:
						if(1 == f) return e.getInt32(t + 8, !i);
						for(o = [], l = 0; l < f; l++) o[l] = e.getInt32(m + 4 * l, !i);
						return o;
					case 10:
						if(1 == f) return e.getInt32(m, !i) / e.getInt32(m + 4, !i);
						for(o = [], l = 0; l < f; l++) o[l] = e.getInt32(m + 8 * l, !i) / e.getInt32(m + 4 + 8 * l, !i);
						return o
				}
			}

			function p(e, t, a) {
				var i = "";
				for(n = t; n < t + a; n++) i += String.fromCharCode(e.getUint8(n));
				return i
			}

			function g(e, t) {
				if("Exif" != p(e, t, 4)) return h && console.log("Not valid EXIF data! " + p(e, t, 4)), !1;
				var n, a, i, r, o, s = t + 6;
				if(18761 == e.getUint16(s)) n = !1;
				else {
					if(19789 != e.getUint16(s)) return h && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
					n = !0
				}
				if(42 != e.getUint16(s + 2, !n)) return h && console.log("Not valid TIFF data! (no 0x002A)"), !1;
				var l = e.getUint32(s + 4, !n);
				if(l < 8) return h && console.log("Not valid TIFF data! (First offset less than 8)", e.getUint32(s + 4, !n)), !1;
				if(a = f(e, s, s + l, b, n), a.ExifIFDPointer) {
					r = f(e, s, s + a.ExifIFDPointer, v, n);
					for(i in r) {
						switch(i) {
							case "LightSource":
							case "Flash":
							case "MeteringMode":
							case "ExposureProgram":
							case "SensingMethod":
							case "SceneCaptureType":
							case "SceneType":
							case "CustomRendered":
							case "WhiteBalance":
							case "GainControl":
							case "Contrast":
							case "Saturation":
							case "Sharpness":
							case "SubjectDistanceRange":
							case "FileSource":
								r[i] = w[i][r[i]];
								break;
							case "ExifVersion":
							case "FlashpixVersion":
								r[i] = String.fromCharCode(r[i][0], r[i][1], r[i][2], r[i][3]);
								break;
							case "ComponentsConfiguration":
								r[i] = w.Components[r[i][0]] + w.Components[r[i][1]] + w.Components[r[i][2]] + w.Components[r[i][3]]
						}
						a[i] = r[i]
					}
				}
				if(a.GPSInfoIFDPointer) {
					o = f(e, s, s + a.GPSInfoIFDPointer, y, n);
					for(i in o) {
						switch(i) {
							case "GPSVersionID":
								o[i] = o[i][0] + "." + o[i][1] + "." + o[i][2] + "." + o[i][3]
						}
						a[i] = o[i]
					}
				}
				return a
			}
			var h = !1,
				x = function(e) {
					return e instanceof x ? e : this instanceof x ? void(this.EXIFwrapped = e) : new x(e)
				};
			"undefined" != typeof e && e.exports && (t = e.exports = x), t.EXIF = x;
			var v = x.Tags = {
					36864: "ExifVersion",
					40960: "FlashpixVersion",
					40961: "ColorSpace",
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					37121: "ComponentsConfiguration",
					37122: "CompressedBitsPerPixel",
					37500: "MakerNote",
					37510: "UserComment",
					40964: "RelatedSoundFile",
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37520: "SubsecTime",
					37521: "SubsecTimeOriginal",
					37522: "SubsecTimeDigitized",
					33434: "ExposureTime",
					33437: "FNumber",
					34850: "ExposureProgram",
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: "OECF",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBias",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: "MeteringMode",
					37384: "LightSource",
					37385: "Flash",
					37396: "SubjectArea",
					37386: "FocalLength",
					41483: "FlashEnergy",
					41484: "SpatialFrequencyResponse",
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: "FocalPlaneResolutionUnit",
					41492: "SubjectLocation",
					41493: "ExposureIndex",
					41495: "SensingMethod",
					41728: "FileSource",
					41729: "SceneType",
					41730: "CFAPattern",
					41985: "CustomRendered",
					41986: "ExposureMode",
					41987: "WhiteBalance",
					41988: "DigitalZoomRation",
					41989: "FocalLengthIn35mmFilm",
					41990: "SceneCaptureType",
					41991: "GainControl",
					41992: "Contrast",
					41993: "Saturation",
					41994: "Sharpness",
					41995: "DeviceSettingDescription",
					41996: "SubjectDistanceRange",
					40965: "InteroperabilityIFDPointer",
					42016: "ImageUniqueID"
				},
				b = x.TiffTags = {
					256: "ImageWidth",
					257: "ImageHeight",
					34665: "ExifIFDPointer",
					34853: "GPSInfoIFDPointer",
					40965: "InteroperabilityIFDPointer",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					274: "Orientation",
					277: "SamplesPerPixel",
					284: "PlanarConfiguration",
					530: "YCbCrSubSampling",
					531: "YCbCrPositioning",
					282: "XResolution",
					283: "YResolution",
					296: "ResolutionUnit",
					273: "StripOffsets",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					301: "TransferFunction",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					529: "YCbCrCoefficients",
					532: "ReferenceBlackWhite",
					306: "DateTime",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					305: "Software",
					315: "Artist",
					33432: "Copyright"
				},
				y = x.GPSTags = {
					0: "GPSVersionID",
					1: "GPSLatitudeRef",
					2: "GPSLatitude",
					3: "GPSLongitudeRef",
					4: "GPSLongitude",
					5: "GPSAltitudeRef",
					6: "GPSAltitude",
					7: "GPSTimeStamp",
					8: "GPSSatellites",
					9: "GPSStatus",
					10: "GPSMeasureMode",
					11: "GPSDOP",
					12: "GPSSpeedRef",
					13: "GPSSpeed",
					14: "GPSTrackRef",
					15: "GPSTrack",
					16: "GPSImgDirectionRef",
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: "GPSDestLatitudeRef",
					20: "GPSDestLatitude",
					21: "GPSDestLongitudeRef",
					22: "GPSDestLongitude",
					23: "GPSDestBearingRef",
					24: "GPSDestBearing",
					25: "GPSDestDistanceRef",
					26: "GPSDestDistance",
					27: "GPSProcessingMethod",
					28: "GPSAreaInformation",
					29: "GPSDateStamp",
					30: "GPSDifferential"
				},
				w = x.StringValues = {
					ExposureProgram: {
						0: "Not defined",
						1: "Manual",
						2: "Normal program",
						3: "Aperture priority",
						4: "Shutter priority",
						5: "Creative program",
						6: "Action program",
						7: "Portrait mode",
						8: "Landscape mode"
					},
					MeteringMode: {
						0: "Unknown",
						1: "Average",
						2: "CenterWeightedAverage",
						3: "Spot",
						4: "MultiSpot",
						5: "Pattern",
						6: "Partial",
						255: "Other"
					},
					LightSource: {
						0: "Unknown",
						1: "Daylight",
						2: "Fluorescent",
						3: "Tungsten (incandescent light)",
						4: "Flash",
						9: "Fine weather",
						10: "Cloudy weather",
						11: "Shade",
						12: "Daylight fluorescent (D 5700 - 7100K)",
						13: "Day white fluorescent (N 4600 - 5400K)",
						14: "Cool white fluorescent (W 3900 - 4500K)",
						15: "White fluorescent (WW 3200 - 3700K)",
						17: "Standard light A",
						18: "Standard light B",
						19: "Standard light C",
						20: "D55",
						21: "D65",
						22: "D75",
						23: "D50",
						24: "ISO studio tungsten",
						255: "Other"
					},
					Flash: {
						0: "Flash did not fire",
						1: "Flash fired",
						5: "Strobe return light not detected",
						7: "Strobe return light detected",
						9: "Flash fired, compulsory flash mode",
						13: "Flash fired, compulsory flash mode, return light not detected",
						15: "Flash fired, compulsory flash mode, return light detected",
						16: "Flash did not fire, compulsory flash mode",
						24: "Flash did not fire, auto mode",
						25: "Flash fired, auto mode",
						29: "Flash fired, auto mode, return light not detected",
						31: "Flash fired, auto mode, return light detected",
						32: "No flash function",
						65: "Flash fired, red-eye reduction mode",
						69: "Flash fired, red-eye reduction mode, return light not detected",
						71: "Flash fired, red-eye reduction mode, return light detected",
						73: "Flash fired, compulsory flash mode, red-eye reduction mode",
						77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89: "Flash fired, auto mode, red-eye reduction mode",
						93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod: {
						1: "Not defined",
						2: "One-chip color area sensor",
						3: "Two-chip color area sensor",
						4: "Three-chip color area sensor",
						5: "Color sequential area sensor",
						7: "Trilinear sensor",
						8: "Color sequential linear sensor"
					},
					SceneCaptureType: {
						0: "Standard",
						1: "Landscape",
						2: "Portrait",
						3: "Night scene"
					},
					SceneType: {
						1: "Directly photographed"
					},
					CustomRendered: {
						0: "Normal process",
						1: "Custom process"
					},
					WhiteBalance: {
						0: "Auto white balance",
						1: "Manual white balance"
					},
					GainControl: {
						0: "None",
						1: "Low gain up",
						2: "High gain up",
						3: "Low gain down",
						4: "High gain down"
					},
					Contrast: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					Saturation: {
						0: "Normal",
						1: "Low saturation",
						2: "High saturation"
					},
					Sharpness: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					SubjectDistanceRange: {
						0: "Unknown",
						1: "Macro",
						2: "Close view",
						3: "Distant view"
					},
					FileSource: {
						3: "DSC"
					},
					Components: {
						0: "",
						1: "Y",
						2: "Cb",
						3: "Cr",
						4: "R",
						5: "G",
						6: "B"
					}
				},
				S = {
					120: "caption",
					110: "credit",
					25: "keywords",
					55: "dateCreated",
					80: "byline",
					85: "bylineTitle",
					122: "captionWriter",
					105: "headline",
					116: "copyright",
					15: "category"
				};
			x.getData = function(e, t) {
				return !((e instanceof Image || e instanceof HTMLImageElement) && !e.complete || (a(e) ? t && t.call(e) : l(e, t), 0))
			}, x.getTag = function(e, t) {
				if(a(e)) return e.exifdata[t]
			}, x.getAllTags = function(e) {
				if(!a(e)) return {};
				var t, n = e.exifdata,
					i = {};
				for(t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
				return i
			}, x.pretty = function(e) {
				if(!a(e)) return "";
				var t, n = e.exifdata,
					i = "";
				for(t in n) n.hasOwnProperty(t) && (i += "object" == typeof n[t] ? n[t] instanceof Number ? t + " : " + n[t] + " [" + n[t].numerator + "/" + n[t].denominator + "]\r\n" : t + " : [" + n[t].length + " values]\r\n" : t + " : " + n[t] + "\r\n");
				return i
			}, x.readFromBinaryFile = function(e) {
				return u(e)
			}, i = [], r = function() {
				return x
			}.apply(t, i), !(void 0 !== r && (e.exports = r))
		}).call(this)
	},
	24: function(e, t, n) {
		var a = n(11);
		"string" == typeof a && (a = [
			[e.id, a, ""]
		]), n(2)(a, {}), a.locals && (e.exports = a.locals)
	},
	50: function(e, t, n) {
		e.exports = n.p + "cbd5d22d71ad84e3a6f8adb2eb25c5fc.png"
	},
	51: function(e, t, n) {
		e.exports = n.p + "6eefedc3dfc749fc90e838ee21077030.png"
	},
	52: function(e, t, n) {
		e.exports = n.p + "c32a82d48e55ea3fc31d6e54f451ad7a.png"
	},
	53: function(e, t, n) {
		e.exports = n.p + "3d8f0bfbdb503fc32a818d2a97244ffe.png"
	},
	54: function(e, t, n) {
		e.exports = n.p + "85e6509e5286e8da8932117af3890aac.jpg"
	},
	55: function(e, t, n) {
		e.exports = n.p + "b3bf4a3956e481396bc97d37e8ef3fcc.jpg"
	},
	75: function(e, t, n) {
		(function(e) {
			function t(e, t, n) {
				var a = [];
				if(t - e + 1 <= n)
					for(var i = e; i <= t; i++) a.push(i);
				else
					for(; a.length < n;) {
						var r = Math.floor(Math.random() * (t - e + 1)) + e;
						a.indexOf(r) < 0 && a.push(r)
					}
				return a
			}

			function a(e) {
				var n = t(0, e.length - 1, 9);
				return n.map(function(t) {
					return e[t]
				})
			}

			function i(t) {
				e(".select-list").children().remove(), !t || t.length <= 0 ? e(".select-list").append("<h1>没有符合条件的</h1>") : t.forEach(function(t) {
					var n = e('<li><img src="http://laosiji.ruguoapp.com/ins/insAvatar' + t.id + '.jpg"/></li>');
					n.click(function() {
						s(t), f("select-ins", t.id)
					}), e(".select-list").append(n)
				})
			}

			function r() {
				e(".no-result").hide(), i(a(S.filter(function(e) {
					return !!e.female == !!E
				})))
			}

			function o(t) {
				if("xxd" === t || "xixidong" === t || "dongdong" === t) return [{
					id: "227",
					lines: "1",
					name: "xixidong",
					tags: [""],
					extra: !1
				}];
				var n = [];
				return S.filter(function(e) {
					return !!e.female == !!E
				}).forEach(function(e) {
					if(e.name.toLowerCase().indexOf(t.toLowerCase()) > -1) n.push(e);
					else
						for(var a = 0; a < e.tags.length; a++)
							if(e.tags[a].toLowerCase().indexOf(t.toLowerCase()) > -1) {
								n.push(e);
								break
							}
				}), n.length <= 0 ? (e(".no-result").show(), n = a(S.filter(function(e) {
					return !!e.female == !!E
				}))) : e(".no-result").hide(), "女演员" === t ? n : n.slice(0, 9)
			}

			function s(t) {
				b = t, e(".edit-page .orig-ins").remove(), d(".edit-page"), e(".edit-page").append('<img class="orig-ins" src="http://laosiji.ruguoapp.com/ins/ins' + t.id + '.jpg" />'), e(".upload-wrap").attr("class", ["upload-wrap", "line" + t.lines, t.extra ? "extra" : "", t.move ? "move" + t.move : ""].join(" ")), window.document.title = w.replace("#", t.name), e(".hide-avatar").attr("src", "http://laosiji.ruguoapp.com/ins/insAvatar" + t.id + ".jpg"), e(".ins-name").text(b.name), e(".link-img").attr("src", "http://laosiji.ruguoapp.com/ins/insAvatar" + b.id + ".jpg")
			}

			function l(e, t) {
				var n = new Image;
				n.onload = function() {
					p.getData(n, function() {
						m(e, p.getTag(this, "Orientation"), function(e) {
							var n = new Image;
							n.onload = function() {
								var a = n.width,
									i = n.height,
									r = i > a;
								y = r ? {
									dataURL: e,
									img: n,
									sx: 0,
									sy: i / 2 - a / 2,
									sw: a,
									sh: a
								} : {
									dataURL: e,
									img: n,
									sx: a / 2 - i / 2,
									sy: 0,
									sw: i,
									sh: i
								}, t && t()
							}, n.src = e
						})
					})
				}, n.src = e
			}

			function u() {
				var t = document.getElementById("canvas"),
					a = t.getContext("2d"),
					i = 750,
					r = 1334,
					o = t.width / i,
					s = 40 * o,
					l = 249 * o,
					u = 251 * o,
					d = 90 * o,
					f = 10 * o,
					m = 90 * o;
				a.clearRect(0, 0, t.width, t.height), a.fillStyle = "#fff", a.fillRect(0, 0, t.width, t.height);
				var p = new Image;
				p.onload = function() {
					a.drawImage(p, 0, 0, i, r, 0, 0, t.width, t.height);
					var g = 2 * (C.base + C.line * b.lines + (b.extra ? C.extra : 0) + (b.move ? b.move : 0)) * o;
					a.fillRect(0, g, u, u), a.drawImage(y.img, y.sx, y.sy, y.sw, y.sh, 0, g, l, l);
					var h = new Image;
					h.onload = function() {
						a.drawImage(h, 0, 0, t.width, s);
						var n = new Image;
						n.onload = function() {
							a.drawImage(n, t.width - d - f, g - d - m, d, d), e(".result-img-wrap img").remove(), e(".result-img-wrap").prepend('<img class="result-img" src="' + t.toDataURL("image/jpeg", .8) + '" />')
						}, n.src = c()
					}, h.src = n(54)
				}, p.crossOrigin = "anonymous", p.src = "http://laosiji.ruguoapp.com/ins/ins" + b.id + ".jpg"
			}

			function c() {
				return v.co ? n(8)("./qr_" + v.co + ".png") : n(51)
			}

			function d(t) {
				e(".page").hide(), e(t).show()
			}

			function f(e, t) {
				ga && ga("send", "event", {
					eventCategory: "ins",
					eventAction: e,
					eventLabel: t || (h ? "android" : "ios"),
					transport: "beacon"
				})
			}

			function m(e, t, n) {
				var a = new Image;
				a.onload = function() {
					var e, a, i, r, o = 0;
					e = this.naturalWidth, a = this.naturalHeight;
					var s = Math.max(e, a);
					if(s > 1024) {
						var l = Math.min(e, a);
						l = l / s * 1024, s = 1024, e > a ? (e = s, a = l) : (e = l, a = s)
					}
					var u = document.createElement("canvas");
					u.width = i = e, u.height = r = a;
					var c = u.getContext("2d");
					switch(t) {
						case 3:
							o = 180, e = -i, a = -r;
							break;
						case 6:
							u.width = r, u.height = i, o = 90, e = i, a = -r;
							break;
						case 8:
							u.width = r, u.height = i, o = 270, e = -i, a = r
					}
					c.rotate(o * Math.PI / 180), c.drawImage(this, 0, 0, e, a), n(u.toDataURL("image/jpeg", .5))
				}, a.src = e
			}
			n(24), n(6);
			var p = n(17),
				g = navigator.userAgent,
				h = g.match(/(Android);?[\s\/]+([\d.]+)?/),
				x = (g.match(/MicroMessenger/i), g.match(/Weibo/i)),
				v = {};
			location.search.slice(1).split("&").filter(function(e) {
				return "string" == typeof e
			}).forEach(function(e) {
				e.split("=")[0] && (v[e.split("=")[0]] = e.split("=")[1])
			});
			var b, y, w = "#把我照片贴上了Instagram！",
				S = n(4),
				C = {
					base: 223,
					line: 20,
					extra: 28
				},
				E = !1;
			e(function() {
				e(".wrap").show(), d(".page-select"), r(), e(".query-keyword").on("input", function() {
					var t = e(".query-keyword").val();
					if(t) {
						var n = o(e(".query-keyword").val());
						i(n)
					} else r()
				}), e("button.change-list").click(function() {
					e(".query-keyword").val(""), r(), f("random-ins-list")
				}), e(".tab").click(function() {
					e(".tab").removeClass("active"), e(this).addClass("active"), E = e(this).hasClass("female"), e(".query-keyword").attr("placeholder", E ? "搜索你老婆的名字" : "搜索你老公的名字"), e(".btn-re-select").text(E ? "换个老婆" : "换个老公"), window.document.title = E ? w.replace("#", "老婆") : w.replace("#", "老公"), r()
				}), e(".btn-upload").click(function() {
					e(".btn-upload").val("")
				}).change(function() {
					var t = e(".btn-upload")[0].files[0],
						n = new FileReader;
					f("upload-img"), n.onload = function(e) {
						return dataURL = e.target.result, dataURL ? (f("upload-img-success"), void l(dataURL, function() {
							u(), d(".result-page")
						})) : (alert("图片获取失败"), void f("upload-img-failed"))
					}, n.readAsDataURL(t)
				}), e(".btn-re-upload").click(function() {
					d(".edit-page"), f("backto-upload")
				}), e(".btn-re-select").click(function() {
					e("button.change-list").click(), e(".btn-re-select").text("再次出轨"), d(".page-select"), f("backto-select")
				}), e(".download-link").click(function() {
					f("download-" + e(this).attr("label"), b ? b.id : "未选择"), h ? window.location.href = "https://ruguoapp.com/download.html" : window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ruguoapp.jike&ckey=CK1340299699203"
				}), e(".result-img-wrap").bind("touchend", function() {
					setTimeout(function() {
						h || "cutie" !== v.ref && "cutie" !== v.utm_source || e(".cutie").show(), x && e(".weibo").show()
					}, 800)
				}), e(".open-tips").click(function() {
					e(".open-tips").hide()
				}), v.co && e(".ins-logo").attr("src", n(7)("./bg_" + v.co + ".png")), "female" === v.tab && e(".female").click()
			})
		}).call(t, n(3))
	}
});