(function () {function r(a){return a&&a.__esModule?{d:a.default}:{d:a}}var Ca=function(){},b={},f=[],na=[];function i(e,t){var r,o,n,a,$=na;for(a=arguments.length;a-->2;)f.push(arguments[a]);for(t&&null!=t.children&&(f.length||f.push(t.children),delete t.children);f.length;)if((o=f.pop())&&void 0!==o.pop)for(a=o.length;a--;)f.push(o[a]);else"boolean"==typeof o&&(o=null),(n="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(n=!1)),n&&r?$[$.length-1]+=o:$===na?$=[o]:$.push(o),r=n;var i=new Ca;return i.nodeName=e,i.children=$,i.attributes=null==t?void 0:t,i.key=null==t?void 0:t.key,void 0!==b.vnode&&b.vnode(i),i}function k(e,t){for(var r in t)e[r]=t[r];return e}var Sa="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function N(e,t){return i(e.nodeName,k(k({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var Qa=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Y=[];function ia(e){!e._dirty&&(e._dirty=!0)&&1==Y.push(e)&&(b.debounceRendering||Sa)(o)}function o(){var e,t=Y;for(Y=[];e=t.pop();)e._dirty&&A(e)}function Pa(e,t,r){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&L(e,t.nodeName):r||e._componentConstructor===t.nodeName}function L(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function M(e){var t=k({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function Oa(e,t){var r=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return r.normalizedNodeName=e,r}function K(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,r,o,n){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)r&&r(null),o&&o(e);else if("class"!==t||n){if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof r||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof r)for(var a in r)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===Qa.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var $=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?r||e.addEventListener(t,U,$):e.removeEventListener(t,U,$),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!n&&t in e){try{e[t]=null==o?"":o}catch(p){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var i=n&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(i?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}}else e.className=o||""}function U(e){return this._listeners[e.type](b.event&&b.event(e)||e)}var V=[],H=0,h=!1,aa=!1;function ba(){for(var e;e=V.pop();)b.afterMount&&b.afterMount(e),e.componentDidMount&&e.componentDidMount()}function da(e,t,r,o,n,a){H++||(h=null!=n&&void 0!==n.ownerSVGElement,aa=null!=e&&!("__preactattr_"in e));var $=ea(e,t,r,o,a);return n&&$.parentNode!==n&&n.appendChild($),--H||(aa=!1,a||ba()),$}function ea(e,t,r,o,n){var a=e,$=h;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||n)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),z(e,!0))),a.__preactattr_=!0,a;var i=t.nodeName;if("function"==typeof i)return Ia(e,t,r,o);if(h="svg"===i||"foreignObject"!==i&&h,i=String(i),(!e||!L(e,i))&&(a=Oa(i,h),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),z(e,!0)}var p=a.firstChild,s=a.__preactattr_,l=t.children;if(null==s){s=a.__preactattr_={};for(var v=a.attributes,d=v.length;d--;)s[v[d].name]=v[d].value}return!aa&&l&&1===l.length&&"string"==typeof l[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=l[0]&&(p.nodeValue=l[0]):(l&&l.length||null!=p)&&Ma(a,l,r,o,aa||null!=s.dangerouslySetInnerHTML),Ka(a,t.attributes,s),h=$,a}function Ma(e,t,r,o,n){var a,$,i,p,s,l=e.childNodes,v=[],d={},c=0,u=0,W=l.length,q=0,f=t?t.length:0;if(0!==W)for(var m=0;m<W;m++){var _=l[m],h=_.__preactattr_;null!=(x=f&&h?_._component?_._component.__key:h.key:null)?(c++,d[x]=_):(h||(void 0!==_.splitText?!n||_.nodeValue.trim():n))&&(v[q++]=_)}if(0!==f)for(m=0;m<f;m++){var x;if(s=null,null!=(x=(p=t[m]).key))c&&void 0!==d[x]&&(s=d[x],d[x]=void 0,c--);else if(u<q)for(a=u;a<q;a++)if(void 0!==v[a]&&Pa($=v[a],p,n)){s=$,v[a]=void 0,a===q-1&&q--,a===u&&u++;break}s=ea(s,p,r,o),i=l[m],s&&s!==e&&s!==i&&(null==i?e.appendChild(s):s===i.nextSibling?K(i):e.insertBefore(s,i))}if(c)for(var m in d)void 0!==d[m]&&z(d[m],!1);for(;u<=q;)void 0!==(s=v[q--])&&z(s,!1)}function z(e,t){var r=e._component;r?G(r):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||K(e),ma(e))}function ma(e){for(e=e.lastChild;e;){var t=e.previousSibling;z(e,!0),e=t}}function Ka(e,t,r){var o;for(o in r)t&&null!=t[o]||null==r[o]||O(e,o,r[o],r[o]=void 0,h);for(o in t)"children"===o||"innerHTML"===o||o in r&&t[o]===("value"===o||"checked"===o?e[o]:r[o])||O(e,o,r[o],r[o]=t[o],h)}var s=[];function va(e,t,r){var o,n=s.length;for(e.prototype&&e.prototype.render?(o=new e(t,r),p.call(o,t,r)):((o=new p(t,r)).constructor=e,o.render=Ja);n--;)if(s[n].constructor===e)return o.nextBase=s[n].nextBase,s.splice(n,1),o;return o}function Ja(e,t,r){return this.constructor(e,r)}function B(e,t,r,o,n){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||n?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===b.syncComponentUpdates&&e.base?ia(e):A(e,1,n)),e.__ref&&e.__ref(e))}function A(e,t,r,o){if(!e._disable){var n,a,$,i=e.props,p=e.state,s=e.context,l=e.prevProps||i,v=e.prevState||p,d=e.prevContext||s,c=e.base,u=e.nextBase,W=c||u,q=e._component,f=!1,m=d;if(e.constructor.getDerivedStateFromProps&&(p=k(k({},p),e.constructor.getDerivedStateFromProps(i,p)),e.state=p),c&&(e.props=l,e.state=v,e.context=d,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(i,p,s)?f=!0:e.componentWillUpdate&&e.componentWillUpdate(i,p,s),e.props=i,e.state=p,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!f){n=e.render(i,p,s),e.getChildContext&&(s=k(k({},s),e.getChildContext())),c&&e.getSnapshotBeforeUpdate&&(m=e.getSnapshotBeforeUpdate(l,v));var _,h,x=n&&n.nodeName;if("function"==typeof x){var C=M(n);(a=q)&&a.constructor===x&&C.key==a.__key?B(a,C,1,s,!1):(_=a,e._component=a=va(x,C,s),a.nextBase=a.nextBase||u,a._parentComponent=e,B(a,C,0,s,!1),A(a,1,r,!0)),h=a.base}else $=W,(_=q)&&($=e._component=null),(W||1===t)&&($&&($._component=null),h=da($,n,s,r||!c,W&&W.parentNode,!0));if(W&&h!==W&&a!==q){var N=W.parentNode;N&&h!==N&&(N.replaceChild(h,W),_||(W._component=null,z(W,!1)))}if(_&&G(_),e.base=h,h&&!o){for(var y=e,g=e;g=g._parentComponent;)(y=g).base=h;h._component=y,h._componentConstructor=y.constructor}}for(!c||r?V.unshift(e):f||(e.componentDidUpdate&&e.componentDidUpdate(l,v,m),b.afterUpdate&&b.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);H||o||ba()}}function Ia(e,t,r,o){for(var n=e&&e._component,a=n,$=e,i=n&&e._componentConstructor===t.nodeName,p=i,s=M(t);n&&!p&&(n=n._parentComponent);)p=n.constructor===t.nodeName;return n&&p&&(!o||n._component)?(B(n,s,3,r,o),e=n.base):(a&&!i&&(G(a),e=$=null),n=va(t.nodeName,s,r),e&&!n.nextBase&&(n.nextBase=e,$=null),B(n,s,1,r,o),e=n.base,$&&e!==$&&($._component=null,z($,!1))),e}function G(e){b.beforeUnmount&&b.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?G(r):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,K(t),s.push(e),ma(t)),e.__ref&&e.__ref(null)}function p(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function P(e,t,r){return da(r,e,{},!1,t,!1)}k(p.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=k(k({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),ia(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),A(this,2)},render:function(){}});var Q={h:i,createElement:i,cloneElement:N,Component:p,render:P,rerender:o,options:b};Q,b,o,P,p,N,i,i;function R(n,t){for(var r in t)n[r]=t[r];return n}var Ha=function(n){var t=[];function r(n){for(var r=[],u=0;u<t.length;u++)t[u]===n?n=null:r.push(t[u]);t=r}function u(r,u,e){n=u?r:R(R({},n),r);for(var o=t,$=0;$<o.length;$++)o[$](n,e)}return n=n||{},{action:function(t){function r(n){u(n,!1,t)}return function(){for(var u=arguments,e=[n],o=0;o<arguments.length;o++)e.push(u[o]);var $=t.apply(this,e);if(null!=$)return $.then?$.then(r):r($)}},setState:u,subscribe:function(n){return t.push(n),function(){r(n)}},unsubscribe:r,getState:function(){return n}}};var Ga=function(){},j={},g=[],W=[];function d(e,r){var t,o,n,$,a=W;for($=arguments.length;$-->2;)g.push(arguments[$]);for(r&&null!=r.children&&(g.length||g.push(r.children),delete r.children);g.length;)if((o=g.pop())&&void 0!==o.pop)for($=o.length;$--;)g.push(o[$]);else"boolean"==typeof o&&(o=null),(n="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(n=!1)),n&&t?a[a.length-1]+=o:a===W?a=[o]:a.push(o),t=n;var i=new Ga;return i.nodeName=e,i.children=a,i.attributes=null==r?void 0:r,i.key=null==r?void 0:r.key,void 0!==j.vnode&&j.vnode(i),i}function q(e,r){for(var t in r)e[t]=r[t];return e}var Ea="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function _(e,r){return d(e.nodeName,q(q({},e.attributes),r),arguments.length>2?[].slice.call(arguments,2):e.children)}var Da=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=[];function ca(e){!e._dirty&&(e._dirty=!0)&&1==t.push(e)&&(j.debounceRendering||Ea)(n)}function n(){var e,r=t;for(t=[];e=r.pop();)e._dirty&&E(e)}function Aa(e,r,t){return"string"==typeof r||"number"==typeof r?void 0!==e.splitText:"string"==typeof r.nodeName?!e._componentConstructor&&fa(e,r.nodeName):t||e._componentConstructor===r.nodeName}function fa(e,r){return e.normalizedNodeName===r||e.nodeName.toLowerCase()===r.toLowerCase()}function ga(e){var r=q({},e.attributes);r.children=e.children;var t=e.nodeName.defaultProps;if(void 0!==t)for(var o in t)void 0===r[o]&&(r[o]=t[o]);return r}function za(e,r){var t=r?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return t.normalizedNodeName=e,t}function C(e){var r=e.parentNode;r&&r.removeChild(e)}function ja(e,r,t,o,n){if("className"===r&&(r="class"),"key"===r);else if("ref"===r)t&&t(null),o&&o(e);else if("class"!==r||n){if("style"===r){if(o&&"string"!=typeof o&&"string"!=typeof t||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof t)for(var $ in t)$ in o||(e.style[$]="");for(var $ in o)e.style[$]="number"==typeof o[$]&&!1===Da.test($)?o[$]+"px":o[$]}}else if("dangerouslySetInnerHTML"===r)o&&(e.innerHTML=o.__html||"");else if("o"==r[0]&&"n"==r[1]){var a=r!==(r=r.replace(/Capture$/,""));r=r.toLowerCase().substring(2),o?t||e.addEventListener(r,ka,a):e.removeEventListener(r,ka,a),(e._listeners||(e._listeners={}))[r]=o}else if("list"!==r&&"type"!==r&&!n&&r in e){try{e[r]=null==o?"":o}catch(p){}null!=o&&!1!==o||"spellcheck"==r||e.removeAttribute(r)}else{var i=n&&r!==(r=r.replace(/^xlink:?/,""));null==o||!1===o?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase()):e.removeAttribute(r):"function"!=typeof o&&(i?e.setAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase(),o):e.setAttribute(r,o))}}else e.className=o||""}function ka(e){return this._listeners[e.type](j.event&&j.event(e)||e)}var la=[],I=0,u=!1,oa=!1;function pa(){for(var e;e=la.pop();)j.afterMount&&j.afterMount(e),e.componentDidMount&&e.componentDidMount()}function qa(e,r,t,o,n,$){I++||(u=null!=n&&void 0!==n.ownerSVGElement,oa=null!=e&&!("__preactattr_"in e));var a=ra(e,r,t,o,$);return n&&a.parentNode!==n&&n.appendChild(a),--I||(oa=!1,$||pa()),a}function ra(e,r,t,o,n){var $=e,a=u;if(null!=r&&"boolean"!=typeof r||(r=""),"string"==typeof r||"number"==typeof r)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||n)?e.nodeValue!=r&&(e.nodeValue=r):($=document.createTextNode(r),e&&(e.parentNode&&e.parentNode.replaceChild($,e),w(e,!0))),$.__preactattr_=!0,$;var i=r.nodeName;if("function"==typeof i)return Ba(e,r,t,o);if(u="svg"===i||"foreignObject"!==i&&u,i=String(i),(!e||!fa(e,i))&&($=za(i,u),e)){for(;e.firstChild;)$.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild($,e),w(e,!0)}var p=$.firstChild,s=$.__preactattr_,l=r.children;if(null==s){s=$.__preactattr_={};for(var v=$.attributes,d=v.length;d--;)s[v[d].name]=v[d].value}return!oa&&l&&1===l.length&&"string"==typeof l[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=l[0]&&(p.nodeValue=l[0]):(l&&l.length||null!=p)&&La($,l,t,o,oa||null!=s.dangerouslySetInnerHTML),xa($,r.attributes,s),u=a,$}function La(e,r,t,o,n){var $,a,i,p,s,l=e.childNodes,v=[],d={},c=0,u=0,O=l.length,G=0,f=r?r.length:0;if(0!==O)for(var m=0;m<O;m++){var _=l[m],h=_.__preactattr_;null!=(x=f&&h?_._component?_._component.__key:h.key:null)?(c++,d[x]=_):(h||(void 0!==_.splitText?!n||_.nodeValue.trim():n))&&(v[G++]=_)}if(0!==f)for(m=0;m<f;m++){var x;if(s=null,null!=(x=(p=r[m]).key))c&&void 0!==d[x]&&(s=d[x],d[x]=void 0,c--);else if(u<G)for($=u;$<G;$++)if(void 0!==v[$]&&Aa(a=v[$],p,n)){s=a,v[$]=void 0,$===G-1&&G--,$===u&&u++;break}s=ra(s,p,t,o),i=l[m],s&&s!==e&&s!==i&&(null==i?e.appendChild(s):s===i.nextSibling?C(i):e.insertBefore(s,i))}if(c)for(var m in d)void 0!==d[m]&&w(d[m],!1);for(;u<=G;)void 0!==(s=v[G--])&&w(s,!1)}function w(e,r){var t=e._component;t?D(t):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==r&&null!=e.__preactattr_||C(e),ua(e))}function ua(e){for(e=e.lastChild;e;){var r=e.previousSibling;w(e,!0),e=r}}function xa(e,r,t){var o;for(o in t)r&&null!=r[o]||null==t[o]||ja(e,o,t[o],t[o]=void 0,u);for(o in r)"children"===o||"innerHTML"===o||o in t&&r[o]===("value"===o||"checked"===o?e[o]:t[o])||ja(e,o,t[o],t[o]=r[o],u)}var l=[];function sa(e,r,t){var o,n=l.length;for(e.prototype&&e.prototype.render?(o=new e(r,t),c.call(o,r,t)):((o=new c(r,t)).constructor=e,o.render=ya);n--;)if(l[n].constructor===e)return o.nextBase=l[n].nextBase,l.splice(n,1),o;return o}function ya(e,r,t){return this.constructor(e,t)}function F(e,r,t,o,n){e._disable||(e._disable=!0,e.__ref=r.ref,e.__key=r.key,delete r.ref,delete r.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||n?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(r,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=r,e._disable=!1,0!==t&&(1!==t&&!1===j.syncComponentUpdates&&e.base?ca(e):E(e,1,n)),e.__ref&&e.__ref(e))}function E(e,r,t,o){if(!e._disable){var n,$,a,i=e.props,p=e.state,s=e.context,l=e.prevProps||i,v=e.prevState||p,d=e.prevContext||s,c=e.base,u=e.nextBase,O=c||u,G=e._component,f=!1,m=d;if(e.constructor.getDerivedStateFromProps&&(p=q(q({},p),e.constructor.getDerivedStateFromProps(i,p)),e.state=p),c&&(e.props=l,e.state=v,e.context=d,2!==r&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(i,p,s)?f=!0:e.componentWillUpdate&&e.componentWillUpdate(i,p,s),e.props=i,e.state=p,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!f){n=e.render(i,p,s),e.getChildContext&&(s=q(q({},s),e.getChildContext())),c&&e.getSnapshotBeforeUpdate&&(m=e.getSnapshotBeforeUpdate(l,v));var _,h,x=n&&n.nodeName;if("function"==typeof x){var C=ga(n);($=G)&&$.constructor===x&&C.key==$.__key?F($,C,1,s,!1):(_=$,e._component=$=sa(x,C,s),$.nextBase=$.nextBase||u,$._parentComponent=e,F($,C,0,s,!1),E($,1,t,!0)),h=$.base}else a=O,(_=G)&&(a=e._component=null),(O||1===r)&&(a&&(a._component=null),h=qa(a,n,s,t||!c,O&&O.parentNode,!0));if(O&&h!==O&&$!==G){var N=O.parentNode;N&&h!==N&&(N.replaceChild(h,O),_||(O._component=null,w(O,!1)))}if(_&&D(_),e.base=h,h&&!o){for(var y=e,g=e;g=g._parentComponent;)(y=g).base=h;h._component=y,h._componentConstructor=y.constructor}}for(!c||t?la.unshift(e):f||(e.componentDidUpdate&&e.componentDidUpdate(l,v,m),j.afterUpdate&&j.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);I||o||pa()}}function Ba(e,r,t,o){for(var n=e&&e._component,$=n,a=e,i=n&&e._componentConstructor===r.nodeName,p=i,s=ga(r);n&&!p&&(n=n._parentComponent);)p=n.constructor===r.nodeName;return n&&p&&(!o||n._component)?(F(n,s,3,t,o),e=n.base):($&&!i&&(D($),e=a=null),n=sa(r.nodeName,s,t),e&&!n.nextBase&&(n.nextBase=e,a=null),F(n,s,1,t,o),e=n.base,a&&e!==a&&(a._component=null,w(a,!1))),e}function D(e){j.beforeUnmount&&j.beforeUnmount(e);var r=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var t=e._component;t?D(t):r&&(r.__preactattr_&&r.__preactattr_.ref&&r.__preactattr_.ref(null),e.nextBase=r,C(r),l.push(e),ua(r)),e.__ref&&e.__ref(null)}function c(e,r){this._dirty=!0,this.context=r,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function Z(e,r,t){return qa(t,e,{},!1,r,!1)}q(c.prototype,{setState:function(e,r){this.prevState||(this.prevState=this.state),this.state=q(q({},this.state),"function"==typeof e?e(this.state,this.props):e),r&&this._renderCallbacks.push(r),ca(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),E(this,2)},render:function(){}});var Fa={h:d,createElement:d,cloneElement:_,Component:c,render:Z,rerender:n,options:j};Fa,j,n,Z,c,_,d,d;var T,S;function J(r,t){for(var e in t)r[e]=t[e];return r}function e(r){this.getChildContext=function(){return{store:r.store}}}e.prototype.render=function(r){return r.children[0]},T=function(r,t){var e;return"function"!=typeof r&&("string"==typeof(e=r||[])&&(e=e.split(/\s*,\s*/)),r=function(r){for(var t={},n=0;n<e.length;n++)t[e[n]]=r[e[n]];return t}),function(e){function n(n,o){var $=this,i=o.store,u=r(i?i.getState():{},n),c=t?function(r,t){"function"==typeof r&&(r=r(t));var e={};for(var n in r)e[n]=t.action(r[n]);return e}(t,i):{store:i},a=function(){var t=r(i?i.getState():{},$.props);for(var e in t)if(t[e]!==u[e])return u=t,$.setState(null);for(var n in u)if(!(n in t))return u=t,$.setState(null)};this.componentDidMount=function(){i.subscribe(a)},this.componentWillUnmount=function(){i.unsubscribe(a)},this.render=function(r){return d(e,J(J(J({},c),r),u))}}return(n.prototype=new c).constructor=n}},T,S=e,S;var v;var wa={};function ha(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Na(e,t){let l,n=/(?:\?([^#]*))?(#.*)?$/,r=e.match(n),$={};if(r&&r[1]){let e=r[1].split("&");for(let t=0;t<e.length;t++){let l=e[t].split("=");$[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}}e=ha(e.replace(n,"")),t=ha(t||"");let o=Math.max(e.length,t.length);for(let a=0;a<o;a++)if(t[a]&&":"===t[a].charAt(0)){let n=t[a].replace(/(^:|[+*?]+$)/g,""),r=(t[a].match(/[+*?]+$/)||{})[0]||"",o=~r.indexOf("+"),i=~r.indexOf("*"),c=e[a]||"";if(!c&&!i&&(r.indexOf("?")<0||o)){l=!1;break}if($[n]=decodeURIComponent(c),o||i){$[n]=e.slice(a).map(decodeURIComponent).join("/");break}}else if(t[a]!==e[a]){l=!1;break}return!1!==l&&$}wa=Na;const x=(t,e)=>{for(let o in t){const n=t[o];if(n.routes){const t=x(n.routes,e);if(t)return{component:n.component,args:t.args,definition:t.definition}}else{var $Yl6q$$interop$default=r(wa);const t=$Yl6q$$interop$default.d(e,n.path);if(t)return{component:n.component,args:t,definition:{name:o,path:n.path}}}}};x,x;let ta=Array.isArray,X=Object.keys,Ra=Object.prototype.hasOwnProperty;function y(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){const e=ta(r),$=ta(t);let n,a,i;if(e&&$){if((a=r.length)!==t.length)return!1;for(n=a;0!=n--;)if(!y(r[n],t[n]))return!1;return!0}if(e!==$)return!1;const o=r instanceof Date,f=t instanceof Date;if(o!==f)return!1;if(o&&f)return r.getTime()===t.getTime();const s=r instanceof RegExp,u=t instanceof RegExp;if(s!==u)return!1;if(s&&u)return r.toString()===t.toString();const L=X(r);if((a=L.length)!==X(t).length)return!1;for(n=a;0!=n--;)if(!Ra.call(t,L[n]))return!1;for(n=a;0!=n--;)if(!y(r[i=L[n]],t[i]))return!1;return!0}return!1}const Ta=({routes:t,currentPath:o,currentRoute:r,setCurrentRoute:e,notFound:i})=>{const n=x(t,o);if(n){const t={path:n.definition.path,name:n.definition.name,args:n.args,...("undefined"!=typeof window&&{url:`${window.location.protocol}//${window.location.host}${o}`})};return y(r,t)||e(t),n.component}return i};"undefined"!=typeof window&&(window.onpopstate=function(t){v&&v.setState({currentPath:window.location.pathname+window.location.search})});var Ua=function(t){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href"))return e}while(e=e.parentNode)};"undefined"!=typeof window&&document.addEventListener("click",function(t){var e=Ua(t);if(e){if(t.metaKey)return;if(e.getAttribute("native"))return;t.preventDefault(),t.stopImmediatePropagation();var r=e.getAttribute("noScroll"),o=e.getAttribute("href"),n=o.startsWith("http")?"/".concat(o.slice(8).split("/").slice(1).join("/")):o;!r&&window.scrollTo(0,0),window.history.pushState(null,null,o),v.setState({currentPath:n})}});var Va=T(function(t){return{currentPath:t.currentPath,currentRoute:t.route}})(function(t){var e=t.currentPath,r=t.currentRoute,o=t.routes,n=t.store;v||(v=n);var a=Ta({routes:o,setCurrentRoute:function(t){return n.setState({route:t})},currentRoute:r,currentPath:e});return a?Preact.h(a,null):null});var Wa={};Wa=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION__||window.top.__REDUX_DEVTOOLS_EXTENSION__,o=!1;return t?(e.devtools||(e.devtools=t.connect(),e.devtools.subscribe(function(t){"DISPATCH"===t.type&&t.state&&(o="JUMP_TO_ACTION"===t.payload.type||"JUMP_TO_STATE"===t.payload.type,e.setState(JSON.parse(t.state),!0))}),e.devtools.init(e.getState()),e.subscribe(function(t,s){var n=s&&s.name||"setState";o?o=!1:e.devtools.send(n,t)})),e):(console.warn("Please install/enable Redux devtools extension"),e.devtools=null,e)};var Xa=r(Wa);var Ya=Xa.d(Ha({currentPath:window.location.search+window.location.hash})),Za={home:{path:"/",component:function(){return Preact.h("div",null,"Home")}},signup:{path:"signup",component:function(){return Preact.h("div",null,"Signup")}}},$a=function(){return Preact.h(S,{store:Ya},Preact.h("div",null,Preact.h("h1",null,"Main App"),Preact.h("div",null,Preact.h("a",{href:"/"},"Home"),Preact.h("a",{href:"signup"},"Signup")),Preact.h(Va,{routes:Za})))};Q.render(Preact.h($a,null),document.getElementById("app"),document.getElementById("app").children[0]);})();