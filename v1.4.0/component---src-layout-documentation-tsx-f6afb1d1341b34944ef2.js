(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,n){var r=n("iNmH"),o=n("Qatm"),a=n("Zhxd"),c=n("kluZ");e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},HZWP:function(e,t,n){"use strict";n.r(t);var r=n("A2+M"),o=n("mXGw"),a=n.n(o),c=n("Hrl7"),l=n("UutA"),u=n("tdfA"),i=n("YwNm"),s=n("A5Kj"),p=n("w26e"),m=n("+N5b"),f=n("V78Q"),d=n("G2e+"),b=n("Syvb"),x=n("QtcS"),h=n("wu5M"),y=n("Zga9"),v=n("Nhdc"),g=n("tqj0"),w=n("5DaQ"),E=n("2Jbq"),O=n("lNEg"),j=n("FbDh"),_=n("Wbzz"),M=function(e){var t="iframe.html?id="+e.toLowerCase()+"-&viewMode=docs&parent=gatsby";return Object(_.withPrefix)("/storybook/"+t)},k=function(e){var t=e.component,n=Object(o.useState)("0"),r=n[0],c=n[1];return Object(o.useEffect)((function(){var e=function(e){"height"===e.data.key&&c(e.data.height+"px")};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{height:r,src:M(t)}),"0"===r&&a.a.createElement(w.a,{alignItems:"center",justifyContent:"center",padding:"xlarge"},a.a.createElement(E.a,{"aria-label":"Loading"})))},P=Object(l.e)((function(e){return a.a.createElement("iframe",Object(O.a)(e))})).withConfig({displayName:"PropsExamples__Iframe",componentId:"sc-1kv84fi-0"})([""," border:none;width:100%;"],j.s),S=(l.e.iframe.withConfig({displayName:"Documentation__Iframe",componentId:"sc-1e8uluy-0"})(["border:none;height:120rem;width:100%;"]),Object(l.e)(s.a).withConfig({displayName:"Documentation__CustomTabs",componentId:"sc-1e8uluy-1"})(["border-bottom:1px solid ",";border-top:1px solid ",";display:flex;margin:",";min-height:",";","{margin-bottom:-1px;margin-top:",";}"],(function(e){return e.theme.colors.ui2}),(function(e){return e.theme.colors.ui2}),(function(e){var t=e.theme.space;return t.small+" 0 "+t.large}),(function(e){return e.theme.space.large}),m.a,(function(e){return e.theme.space.xsmall})));t.default=function(e){var t=e.data,n=t.mdx,o=t.site,l=n.frontmatter,w=l.github,E=l.status,O=void 0===E?"stable":E,j=l.storybook,_=l.storybookPath,M=l.title,P=w||M+"/"+M+".tsx",A=Object(i.b)(),D=a.a.createElement(r.MDXRenderer,null,n.body);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:M+" - "+o.siteMetadata.title}),a.a.createElement(g.a,null,a.a.createElement(s.a,null,a.a.createElement(p.a,{as:"h1",fontSize:"xxxxxlarge"},M),a.a.createElement(v.b,{status:O})),a.a.createElement(S,null,j&&a.a.createElement(m.a,A,a.a.createElement(f.a,null,"Overview"),a.a.createElement(f.a,null,"Storybook"," ",a.a.createElement(d.a,{fontSize:"xsmall",variant:"subdued",fontWeight:"normal",lineHeight:"normal"},"Props & Examples"))),a.a.createElement(b.a,{content:"GitHub"},a.a.createElement(x.a,{ml:"auto",iconAfter:a.a.createElement(u.a,null),onClick:function(){return window.open("https://github.com/looker-open-source/components/blob/main/packages/components/src/"+P)}},"View source"))),j?a.a.createElement(h.a,Object.assign({},A,{pt:"none"}),a.a.createElement(y.a,null,D),j&&a.a.createElement(y.a,null,a.a.createElement(k,{component:_||M}))):D))}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,n){var r=n("uUj8"),o=n("5WRv"),a=n("OvAC"),c=n("PE9J");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n("mXGw"),s=n("/FXl").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),l=p(t),m=i.useMemo((function(){if(!n)return null;var e=u({React:i,mdx:s},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return i.createElement(m,u({},a))}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},uUj8:function(e,t,n){var r=n("WI9V"),o=n("0qAl");function a(t,n,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-layout-documentation-tsx-f6afb1d1341b34944ef2.js.map