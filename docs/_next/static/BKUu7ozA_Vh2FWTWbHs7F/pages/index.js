(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("YFqc"),s=n.n(a),f=o.a.createElement,l=function(e){var t=e.href,n=e.name;return f(s.a,{href:t,passHref:!0},f(c,null,n))},c=i.default.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-1xpbe03-0"})(['color:rgb(244,121,20);white-space:nowrap;+ a{position:relative;margin-left:.75em;padding-left:.75em;::before{position:absolute;content:"|";left:0;color:initial;}}']),p=o.a.createElement,u=(t.default=function(){return p(u,null,p(l,{href:"mailto:info@hkweb.nl",name:"info@hkweb.nl"}),p(l,{href:"tel:+31 (0)6 5422 4518",name:"06 - 5422 4518"}))},i.default.div.withConfig({displayName:"pages__Container",componentId:"sc-14id0io-0"})(["padding:.75em 0;"]))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),s=n("7W2i"),f=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var c,p=l(n("q1tI")),u=n("QmWs"),h=n("g/15"),d=f(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,w=window.IntersectionObserver,g={};function y(){return c||(w?c=new w((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var f=window.location.pathname;a=(0,u.resolve)(f,a),s=s?(0,u.resolve)(f,s):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,u.resolve)(e,n);return[o,r?(0,u.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),t}(p.Component);t.default=k},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);