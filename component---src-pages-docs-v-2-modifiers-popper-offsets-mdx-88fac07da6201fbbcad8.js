(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7oih":function(e,t,n){"use strict";n("E5k/"),n("zTTH"),n("sC2a");var o=n("wTIg"),r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("7ljp"),s=n("qKvR"),c=n("eVhr"),d=n("4FWg"),p=n("9Yco"),u=function(e){var t=e.children;return Object(s.d)(i.StaticQuery,{query:"3609520525",render:function(e){var n=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(n)},data:p})};n("TAD1"),n("HQhv");function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];if(0===e.slug.indexOf(o.slug+"/"))return void f(e,o.children)}t.push({title:e.title,slug:e.slug,children:[]})}n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("gu/5"),n("eoYm"),n("zGcK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=new Set(["/404/"]),m=["tippy","tutorial","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],h=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function v(e){var t=e.filter((function(e){return!g.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return h.indexOf(e.title)-h.indexOf(t.title)}));return[].concat(b(t.filter((function(e){return!m.some((function(t){return e.slug.includes(t)}))}))),b(m.reduce((function(e,n){return[].concat(b(e),b(t.filter((function(e){return e.slug.includes(n)}))))}),[])))}var x=n("vUvN"),y=n.n(x),O=(n("Ggvi"),n("sc67"),n("17x9")),j=n.n(O);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=function(e){var t=e.color,n=e.size,o=k(e,["color","size"]);return a.a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),a.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};N.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},N.defaultProps={color:"currentColor",size:"24"};var z=N,S={name:"80dmy3",styles:"display:block;transform:translateX(0);"},C=Object(o.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&S})," ",d.e.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),T={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},P=Object(o.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&T})),H=Object(o.a)(i.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),E=Object(o.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",d.e.lg,"{display:none;}"),q={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},A=Object(o.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",d.e.lg,"{display:block;}",(function(e){return e.scrolled&&q})),D=function(e){var t=e.mobile;return Object(s.d)("img",{src:y.a,draggable:"false",alt:"Popper Logo",css:Object(s.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},I=Object(o.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),L=Object(o.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:15px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",d.e.lg,"{display:none;}"),F=Object(o.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",d.e.lg,"{margin-top:15px;}"),M=function e(t){var n=t.route;return Object(s.d)(a.a.Fragment,null,Object(s.d)(P,{root:!0},Object(s.d)("li",null,Object(s.d)(H,{to:n.slug+"/",activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},n.title)),Object(s.d)(P,{root:1===n.slug.split("/").length},n.children.map((function(t,n){return Object(s.d)(e,{key:n,route:t})})))))},V=0;function B(e){e.description,e.lang,e.meta,e.title;var t=Object(r.useState)(!1),n=t[0],o=t[1],i=Object(r.useState)(!1),l=i[0],c=i[1],d=Object(r.useRef)();function p(){o(!0)}function b(){o(!1)}function g(){var e=d.current.scrollTop;V=e,c(e>10)}return Object(r.useLayoutEffect)((function(){var e=d.current;e.scrollTop=V;var t=e.querySelector('[aria-current="page"]');if(t){var n=t.getBoundingClientRect();(n.bottom>window.innerHeight||n.top<0)&&t.scrollIntoView()}}),[]),Object(s.d)(u,null,(function(e){return Object(s.d)(a.a.Fragment,null,Object(s.d)(E,null,Object(s.d)(I,{onClick:p,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(s.d)(z,{size:30})),Object(s.d)(D,{mobile:!0})),Object(s.d)(C,{open:n,ref:d,onScroll:g},Object(s.d)(A,{scrolled:l},Object(s.d)(D,null)),Object(s.d)(L,{onClick:b},"Close Menu"),Object(s.d)(F,null,function(e){for(var t=[],n=0;n<e.length;n++){f(e[n],t)}return t}(v(e.filter((function(e){return e.slug.startsWith("/docs/v2")})))).map((function(e,t){return Object(s.d)(M,{route:e,key:t})})))))}))}var R=n("9CUm");n("8ypT"),n("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=function(e){var t=e.color,n=e.size,o=W(e,["color","size"]);return a.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};X.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},X.defaultProps={color:"currentColor",size:"24"};var U=X,K=n("EAKA");function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var J=Object(o.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",d.e.lg,"{padding-top:0;margin-left:",260,"px;}"),Q=Object(o.a)(d.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",d.e.lg,"{margin-left:",260,"px;}"),Z=Object(o.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(o.a)(d.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",d.e.md,"{padding:0 40px;}"),_=Object(o.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),ee=Object(o.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",d.e.md,"{display:block;}"),te=Object(o.a)(i.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",d.e.md,"{font-size:22px;}",d.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),ne=Object(s.c)("vertical-align:3px;",d.e.md,"{vertical-align:0;}"),oe=Object(o.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",d.e.md,"{top:54px;}",d.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),re={"x-ad":c.a,a:function(e){return Object(s.d)("a",Y({},e,{onClick:ae}),e.children)}};function ae(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var n="H2"===t.nodeName;window.innerWidth<=d.f.lg?n||window.scrollBy(0,-60):n&&window.scrollBy(0,50)}catch(o){}}t.a=function(e){var t=e.children,n=e.path,o=e.pageResources;return Object(r.useLayoutEffect)(ae,[]),Object(s.d)(l.a,{components:re},Object(s.d)(s.a,{styles:Object(s.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",d.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",d.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(s.d)("div",null,o&&Object(s.d)(R.a,{title:o.json.pageContext.frontmatter.title}),Object(s.d)(B,{root:"/",target:"location"}),Object(s.d)(J,null,Object(s.d)(d.a,null,t),Object(s.d)(u,null,(function(e){var t=function(e){var t=v(e),o=n.replace(/\/$/,""),r=t.findIndex((function(e){return e.slug===o}));return{prev:t[r-1],next:t[r+1]}}(e),o=t.prev,r=t.next;return Object(s.d)(Z,null,Object(s.d)($,null,Object(s.d)(_,null,o&&Object(s.d)(te,{to:o.slug+"/","data-first":!0},Object(s.d)(oe,{"data-prev":!0},Object(s.d)(U,{size:28,css:ne})),o.title)),Object(s.d)(ee,null),Object(s.d)(_,null,r&&Object(s.d)(te,{to:r.slug+"/","data-last":!0},r.title,Object(s.d)(oe,{"data-next":!0},Object(s.d)(K.a,{size:28,css:ne}))))))}))),Object(s.d)(Q,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"title":"Utils"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"title":"Tutorial"}}},{"node":{"fields":{"slug":"/docs/v2/"},"frontmatter":{"title":"Documentation"}}},{"node":{"fields":{"slug":"/docs/v1/"},"frontmatter":{"title":"Documentation (v1.x)"}}}]}}}')},tE4j:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("q1tI");var o=n("7ljp"),r=n("7oih");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"popper-offsets",style:{position:"relative"}},Object(o.b)("a",a({parentName:"h1"},{href:"#popper-offsets","aria-label":"popper offsets permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",a({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Offsets"),Object(o.b)("p",null,"The ",Object(o.b)("code",a({parentName:"p"},{className:"language-text"}),"popperOffsets")," modifier is at the core of Popper, it computes the offsets\nneeded to position the popper element near the reference element."),Object(o.b)("p",null,"In other words, without this modifier you would have no reason to use Popper at\nall 😄"),Object(o.b)("p",null,"This piece of logic is written as a modifier because it makes it possible to run\nadditional custom modifiers before it, for example, if you need to read from the\nDOM and manipulate the measurements made by Popper at the beginning of the\nlifecycle."),Object(o.b)("p",null,"Additionally, you may want to replace this modifier with your own one, to\naddress very specific cases not covered by the default one."),Object(o.b)("x-ad",null),Object(o.b)("h2",{id:"phase",style:{position:"relative"}},Object(o.b)("a",a({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",a({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(o.b)("p",null,Object(o.b)("code",a({parentName:"p"},{className:"language-text"}),"read")),Object(o.b)("h2",{id:"options",style:{position:"relative"}},Object(o.b)("a",a({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",a({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(o.b)("p",null,"This modifier currently has no options."),Object(o.b)("h2",{id:"data",style:{position:"relative"}},Object(o.b)("a",a({parentName:"h2"},{href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",a({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Data"),Object(o.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(o.b)("pre",a({parentName:"div"},{className:"language-flow"}),Object(o.b)("code",a({parentName:"pre"},{className:"language-flow"}),Object(o.b)("span",a({parentName:"code"},{className:"token keyword"}),"type")," Data ",Object(o.b)("span",a({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),"{"),"\n  x",Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.b)("span",a({parentName:"code"},{className:"token type tag"}),"number"),Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),","),"\n  y",Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.b)("span",a({parentName:"code"},{className:"token type tag"}),"number"),Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.b)("span",a({parentName:"code"},{className:"token punctuation"}),";")))))}c.isMDXComponent=!0},vUvN:function(e,t,n){e.exports=n.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,n){"use strict";var o=n("P8UN"),r=n("Wadk")(6),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),o(o.P+o.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(a)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-modifiers-popper-offsets-mdx-88fac07da6201fbbcad8.js.map