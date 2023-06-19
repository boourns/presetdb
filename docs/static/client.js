"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var v = Array.isArray;
  function h(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function p(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function y(l2, u2, i2) {
    var t2, o3, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o3 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return d(l2, f2, t2, o3, null);
  }
  function d(n2, i2, t2, o3, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function g(n2, l2) {
    if (null == l2)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l2, u2, i2, o3, r2, e2, c2;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l2 = t.length, i2 = void 0, o3 = void 0, e2 = (r2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (o3 = h({}, r2)).__v = r2.__v + 1, L(c2, r2, o3, u2.__n, void 0 !== c2.ownerSVGElement, null != r2.__h ? [e2] : null, i2, null == e2 ? g(r2) : e2, r2.__h), M(i2, r2), r2.__e != e2 && m(r2)), t.length > l2 && t.sort(f));
    x.__r = 0;
  }
  function P(n2, l2, u2, i2, t2, o3, r2, f2, e2, a2) {
    var h2, p2, y2, _2, b2, m2, w2, x2 = i2 && i2.__k || s, P2 = x2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if (null != (_2 = u2.__k[h2] = null == (_2 = l2[h2]) || "boolean" == typeof _2 || "function" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? d(null, _2, null, null, _2) : v(_2) ? d(k, { children: _2 }, null, null, null) : _2.__b > 0 ? d(_2.type, _2.props, _2.key, _2.ref ? _2.ref : null, _2.__v) : _2)) {
        if (_2.__ = u2, _2.__b = u2.__b + 1, null === (y2 = x2[h2]) || y2 && _2.key == y2.key && _2.type === y2.type)
          x2[h2] = void 0;
        else
          for (p2 = 0; p2 < P2; p2++) {
            if ((y2 = x2[p2]) && _2.key == y2.key && _2.type === y2.type) {
              x2[p2] = void 0;
              break;
            }
            y2 = null;
          }
        L(n2, _2, y2 = y2 || c, t2, o3, r2, f2, e2, a2), b2 = _2.__e, (p2 = _2.ref) && y2.ref != p2 && (w2 || (w2 = []), y2.ref && w2.push(y2.ref, null, _2), w2.push(p2, _2.__c || b2, _2)), null != b2 ? (null == m2 && (m2 = b2), "function" == typeof _2.type && _2.__k === y2.__k ? _2.__d = e2 = C(_2, e2, n2) : e2 = $(n2, _2, y2, x2, b2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = g(y2));
      }
    for (u2.__e = m2, h2 = P2; h2--; )
      null != x2[h2] && ("function" == typeof u2.type && null != x2[h2].__e && x2[h2].__e == u2.__d && (u2.__d = A(i2).nextSibling), q(x2[h2], x2[h2]));
    if (w2)
      for (h2 = 0; h2 < w2.length; h2++)
        O(w2[h2], w2[++h2], w2[++h2]);
  }
  function C(n2, l2, u2) {
    for (var i2, t2 = n2.__k, o3 = 0; t2 && o3 < t2.length; o3++)
      (i2 = t2[o3]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? C(i2, l2, u2) : $(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function $(n2, l2, u2, i2, t2, o3) {
    var r2, f2, e2;
    if (void 0 !== l2.__d)
      r2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != o3 || null == t2.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o3, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o3), r2 = o3;
        }
    return void 0 !== r2 ? r2 : t2.nextSibling;
  }
  function A(n2) {
    var l2, u2, i2;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
        if ((u2 = n2.__k[l2]) && (i2 = A(u2)))
          return i2;
    }
    return null;
  }
  function H(n2, l2, u2, i2, t2) {
    var o3;
    for (o3 in u2)
      "children" === o3 || "key" === o3 || o3 in l2 || T(n2, o3, null, u2[o3], i2);
    for (o3 in l2)
      t2 && "function" != typeof l2[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u2[o3] === l2[o3] || T(n2, o3, l2[o3], u2[o3], i2);
  }
  function I(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
  }
  function T(n2, l2, u2, i2, t2) {
    var o3;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || I(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || I(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o3 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o3] = u2, u2 ? i2 || n2.addEventListener(l2, o3 ? z : j, o3) : n2.removeEventListener(l2, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u2, i2, t2, o3, r2, f2, e2, c2) {
    var s2, a2, p2, y2, d2, _2, g2, m2, w2, x2, C2, S, $2, A2, H2, I2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (s2 = l.__b) && s2(u2);
    try {
      n:
        if ("function" == typeof I2) {
          if (m2 = u2.props, w2 = (s2 = I2.contextType) && t2[s2.__c], x2 = s2 ? w2 ? w2.props.value : s2.__ : t2, i2.__c ? g2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(m2, x2) : (u2.__c = a2 = new b(m2, x2), a2.constructor = I2, a2.render = B), w2 && w2.sub(a2), a2.props = m2, a2.state || (a2.state = {}), a2.context = x2, a2.__n = t2, p2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h({}, a2.__s)), h(a2.__s, I2.getDerivedStateFromProps(m2, a2.__s))), y2 = a2.props, d2 = a2.state, a2.__v = u2, p2)
            null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && m2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(m2, x2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(m2, a2.__s, x2) || u2.__v === i2.__v) {
              for (u2.__v !== i2.__v && (a2.props = m2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), C2 = 0; C2 < a2._sb.length; C2++)
                a2.__h.push(a2._sb[C2]);
              a2._sb = [], a2.__h.length && f2.push(a2);
              break n;
            }
            null != a2.componentWillUpdate && a2.componentWillUpdate(m2, a2.__s, x2), null != a2.componentDidUpdate && a2.__h.push(function() {
              a2.componentDidUpdate(y2, d2, _2);
            });
          }
          if (a2.context = x2, a2.props = m2, a2.__P = n2, S = l.__r, $2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a2.state = a2.__s, a2.__d = false, S && S(u2), s2 = a2.render(a2.props, a2.state, a2.context), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [];
          } else
            do {
              a2.__d = false, S && S(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
            } while (a2.__d && ++$2 < 25);
          a2.state = a2.__s, null != a2.getChildContext && (t2 = h(h({}, t2), a2.getChildContext())), p2 || null == a2.getSnapshotBeforeUpdate || (_2 = a2.getSnapshotBeforeUpdate(y2, d2)), P(n2, v(H2 = null != s2 && s2.type === k && null == s2.key ? s2.props.children : s2) ? H2 : [H2], u2, i2, t2, o3, r2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), g2 && (a2.__E = a2.__ = null), a2.__e = false;
        } else
          null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N(i2.__e, u2, i2, t2, o3, r2, f2, c2);
      (s2 = l.diffed) && s2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function M(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function N(l2, u2, i2, t2, o3, r2, f2, e2) {
    var s2, a2, h2, y2 = i2.props, d2 = u2.props, _2 = u2.type, k2 = 0;
    if ("svg" === _2 && (o3 = true), null != r2) {
      for (; k2 < r2.length; k2++)
        if ((s2 = r2[k2]) && "setAttribute" in s2 == !!_2 && (_2 ? s2.localName === _2 : 3 === s2.nodeType)) {
          l2 = s2, r2[k2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === _2)
        return document.createTextNode(d2);
      l2 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, e2 = false;
    }
    if (null === _2)
      y2 === d2 || e2 && l2.data === d2 || (l2.data = d2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !e2) {
        if (null != r2)
          for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
            y2[l2.attributes[k2].name] = l2.attributes[k2].value;
        (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
      }
      if (H(l2, d2, y2, o3, e2), h2)
        u2.__k = [];
      else if (P(l2, v(k2 = u2.props.children) ? k2 : [k2], u2, i2, t2, o3 && "foreignObject" !== _2, r2, f2, r2 ? r2[0] : i2.__k && g(i2, 0), e2), null != r2)
        for (k2 = r2.length; k2--; )
          null != r2[k2] && p(r2[k2]);
      e2 || ("value" in d2 && void 0 !== (k2 = d2.value) && (k2 !== l2.value || "progress" === _2 && !k2 || "option" === _2 && k2 !== y2.value) && T(l2, "value", k2, y2.value, false), "checked" in d2 && void 0 !== (k2 = d2.checked) && k2 !== l2.checked && T(l2, "checked", k2, y2.checked, false));
    }
    return l2;
  }
  function O(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function q(n2, u2, i2) {
    var t2, o3;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null, n2.__c = void 0;
    }
    if (t2 = n2.__k)
      for (o3 = 0; o3 < t2.length; o3++)
        t2[o3] && q(t2[o3], u2, i2 || "function" != typeof n2.type);
    i2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function D(u2, i2, t2) {
    var o3, r2, f2;
    l.__ && l.__(u2, i2), r2 = (o3 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L(i2, u2 = (!o3 && t2 || i2).__k = y(k, null, [u2]), r2 || c, c, void 0 !== i2.ownerSVGElement, !o3 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !o3 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o3), M(f2, u2);
  }
  n = s.slice, l = { __e: function(n2, l2, u2, i2) {
    for (var t2, o3, r2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((o3 = t2.constructor) && null != o3.getDerivedStateFromError && (t2.setState(o3.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, b.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u2), this.props)), n2 && h(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, x.__r = 0, e = 0;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _ = 0;
  function o2(o3, e2, n2, t2, f2, l2) {
    var s2, u2, a2 = {};
    for (u2 in e2)
      "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
    var i2 = { type: o3, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
    if ("function" == typeof o3 && (s2 = o3.defaultProps))
      for (u2 in s2)
        void 0 === a2[u2] && (a2[u2] = s2[u2]);
    return l.vnode && l.vnode(i2), i2;
  }

  // src/searchResults.tsx
  var SearchResults = class extends b {
    render() {
      const body = this.props.presets.banks.map((bank) => {
        const list = bank.presets.map(
          (p2) => /* @__PURE__ */ o2("div", { children: [
            p2.slot,
            ": ",
            p2.name
          ] })
        );
        return /* @__PURE__ */ o2("div", { children: [
          /* @__PURE__ */ o2("h2", { children: bank.name }),
          list
        ] });
      });
      return /* @__PURE__ */ o2("div", { children: body });
    }
  };

  // src/client/client.tsx
  var device;
  var search;
  var searchInput = document.querySelector(".presetSearch");
  var resultDiv = document.querySelector(".results");
  var loadSearch = async () => {
    device = await (await fetch("./device.json")).json();
    renderSearch();
  };
  var renderSearch = () => {
    if (!device || !search) {
      return;
    }
    let result = {
      banks: []
    };
    for (let b2 of device.presets.banks) {
      let resultBank = {
        name: b2.name,
        presets: []
      };
      const s2 = search.toLowerCase();
      for (let p2 of b2.presets) {
        if (p2.name.toLowerCase().includes(s2) || p2.tags.some((t2) => t2.toLowerCase().includes(s2))) {
          resultBank.presets.push(p2);
        }
      }
      if (resultBank.presets.length > 0) {
        result.banks.push(resultBank);
      }
    }
    D(/* @__PURE__ */ o2(SearchResults, { presets: result }), resultDiv);
  };
  loadSearch();
  searchInput.onkeyup = () => {
    search = searchInput.value;
    renderSearch();
  };
})();
