(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{6071:function(e,t,r){"use strict";var n=r(3848),a=r(9448);t.default=void 0;var o=a(r(7294)),i=r(1689),s=r(2441),c=r(5749),l={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],s=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=o.Children.only(v),N=x&&"object"===typeof x&&x.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),g=n(w,2),j=g[0],E=g[1],k=o.default.useCallback((function(e){j(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[N,j]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,a=l[d+"%"+p+(n?"%"+n:"")];e&&!a&&u(r,d,p,{locale:n})}),[p,d,E,b,t,r]);var C={ref:k,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,r,d,p,h,m,y,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var O="undefined"!==typeof b?b:r&&r.locale,P=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,O,r&&r.locales,r&&r.domainLocales);C.href=P||(0,i.addBasePath)((0,i.addLocale)(p,O,r&&r.defaultLocale))}return o.default.cloneElement(x,C)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=n(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(7294),o=r(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},5714:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),a=r(7294),o=r(9008),i=r(1664),s=r(2122),c=r(9756),l=r(4184),u=r.n(l),f=r(6792),d=a.forwardRef((function(e,t){var r,n=e.as,o=void 0===n?"div":n,i=e.className,l=e.fluid,d=e.bsPrefix,p=(0,c.Z)(e,["as","className","fluid","bsPrefix"]),v=((r={})[d=(0,f.vE)(d,"jumbotron")]=!0,r[d+"-fluid"]=l,r);return a.createElement(o,(0,s.Z)({ref:t},p,{className:u()(i,v)}))}));d.defaultProps={fluid:!1},d.displayName="Jumbotron";var p=d,v=r(8358),h=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,o=e.size,i=e.active,l=e.className,d=e.block,p=e.type,h=e.as,m=(0,c.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,f.vE)(r,"btn"),b=u()(l,y,i&&"active",n&&y+"-"+n,d&&y+"-block",o&&y+"-"+o);if(m.href)return a.createElement(v.Z,(0,s.Z)({},m,{as:h,ref:t,className:u()(b,m.disabled&&"disabled")}));t&&(m.ref=t),p?m.type=p:h||(m.type="button");var x=h||"button";return a.createElement(x,(0,s.Z)({},m,{className:b}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var m=h,y=r(682),b=r(9583),x=r(1252),N=r.n(x),w=function(){return(0,n.jsxs)(y.Z,{className:"mt-4",children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Web\u8b1b\u7fd2\u4f1a2021"})}),(0,n.jsxs)(p,{children:[(0,n.jsx)("h1",{children:"Web\u8b1b\u7fd2\u4f1a2021"}),(0,n.jsx)("p",{children:"Arthur\u304c\u5b9f\u65bd\u3059\u308bWeb\u8b1b\u7fd2\u4f1a2021\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63b2\u8f09\u3059\u308bWeb\u30b5\u30a4\u30c8\u3067\u3059\u3002\u672c\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u4e3b\u306bTitech App Project\u306e\u65b0\u30e1\u30f3\u30d0\u30fc\u5411\u3051\u306b\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"})]}),(0,n.jsx)("h2",{className:"text-primary mt-4",children:"\u30ef\u30fc\u30eb\u30c9\u30ef\u30a4\u30c9\u30a6\u30a7\u30d6\u57fa\u790e"}),(0,n.jsx)("p",{children:"WWW\u3068\u3044\u3046\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u305f\u4e0a\u3067\u3001HTML/CSS/JavaScript\u3092\u7528\u3044\u305f\u30b7\u30f3\u30d7\u30eb\u306a\u69cb\u6210\u306e\u9759\u7684Web\u30b5\u30a4\u30c8\u3092\u88fd\u4f5c\u3057\u516c\u958b\u3059\u308b\u3053\u3068\u3092\u76ee\u6a19\u306b\u3057\u3066\u3044\u307e\u3059\u3002"}),(0,n.jsx)(i.default,{href:"/courses/basic",passHref:!0,children:(0,n.jsxs)(m,{variant:"light",children:[(0,n.jsx)(b.DAO,{className:N().ButtonIcon}),"\u8a73\u7d30"]})}),(0,n.jsx)("h2",{className:"text-primary mt-4",children:"\u30ef\u30fc\u30eb\u30c9\u30ef\u30a4\u30c9\u30a6\u30a7\u30d6\u767a\u5c55"}),(0,n.jsx)("p",{children:"React/Next.js/TypeScript\u3092\u7528\u3044\u305f\u30e2\u30c0\u30f3\u306a\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u958b\u767a\u3092\u30e1\u30a4\u30f3\u306b\u3001\u57fa\u790e\u3067\u306f\u6271\u3048\u306a\u304b\u3063\u305f\u5fdc\u7528\u7684\u306a\u5185\u5bb9\u3092\u6271\u3044\u307e\u3059\u3002"}),(0,n.jsx)(i.default,{href:"/courses/advanced",passHref:!0,children:(0,n.jsxs)(m,{variant:"light",children:[(0,n.jsx)(b.DAO,{className:N().ButtonIcon}),"\u8a73\u7d30"]})}),(0,n.jsx)("h2",{className:"text-primary mt-4",children:"Web\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u653b\u6483\u30fb\u9632\u5fa1"}),(0,n.jsx)("p",{children:"Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b89\u5168\u306b\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u95a2\u3059\u308b\u77e5\u8b58\u3092\u53d6\u308a\u6319\u3052\u307e\u3059\u3002\u307e\u305f\u3001CTF Web\u5206\u91ce\u306e\u6f14\u7fd2\u3082\u884c\u3044\u307e\u3059\u3002"}),(0,n.jsx)(i.default,{href:"/courses/security",passHref:!0,children:(0,n.jsxs)(m,{variant:"light",children:[(0,n.jsx)(b.DAO,{className:N().ButtonIcon}),"\u8a73\u7d30"]})})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5714)}])},1252:function(e){e.exports={ButtonIcon:"styles_ButtonIcon__1BU8r"}},1664:function(e,t,r){e.exports=r(6071)},682:function(e,t,r){"use strict";var n=r(2122),a=r(9756),o=r(4184),i=r.n(o),s=r(7294),c=r(6792),l=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,l=e.as,u=void 0===l?"div":l,f=e.className,d=(0,a.Z)(e,["bsPrefix","fluid","as","className"]),p=(0,c.vE)(r,"container"),v="string"===typeof o?"-"+o:"-fluid";return s.createElement(u,(0,n.Z)({ref:t},d,{className:i()(f,o?""+p+v:p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},8358:function(e,t,r){"use strict";var n=r(2122),a=r(9756),o=r(7294),i=r(6833);function s(e){return!e||"#"===e.trim()}var c=o.forwardRef((function(e,t){var r=e.as,c=void 0===r?"a":r,l=e.disabled,u=e.onKeyDown,f=(0,a.Z)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,r=f.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():r&&r(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.createElement(c,(0,n.Z)({ref:t},f,{onClick:d,onKeyDown:(0,i.Z)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));c.displayName="SafeAnchor",t.Z=c},6833:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,c=e.title,l=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4453:function(){}},function(e){e.O(0,[774,445,866,433],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);