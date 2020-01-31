(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GMyT:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return i}));t("E5k/"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("q1tI");var n=t("7ljp"),c=t("7oih");t("qKvR");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={},p={_frontmatter:o},r=c.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(n.b)(r,s({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"migrating-to-popper-2",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h1"},{href:"#migrating-to-popper-2","aria-label":"migrating to popper 2 permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Migrating to Popper 2"),Object(n.b)("p",null,"Popper 2 introduces a lot of changes for the better! Here's a guide to help you\nmigrate to the new version."),Object(n.b)("x-ad",null),Object(n.b)("h2",{id:"1-install-the-new-package",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#1-install-the-new-package","aria-label":"1 install the new package permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"1. Install the new package"),Object(n.b)("p",null,"Remove the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"popper.js")," package from your ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"package.json")," or CDN script tag\nincludes, and install ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"@popperjs/core"),"."),Object(n.b)("p",null,"Popper has changed its package name to live under the scoped ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"@popperjs"),"\norganization. This is where other packages like ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"react-popper")," will now live\ntoo."),Object(n.b)("h2",{id:"2-change-the-import",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#2-change-the-import","aria-label":"2 change the import permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"2. Change the import"),Object(n.b)("h3",{id:"modules",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#modules","aria-label":"modules permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Modules"),Object(n.b)("p",null,"In Popper 1, it was a class:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," Popper ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'popper.js'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"new")," ",Object(n.b)("span",s({parentName:"code"},{className:"token class-name"}),"Popper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"In Popper 2, it's now a function:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'@popperjs/core'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",{id:"cdn--umd-version",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#cdn--umd-version","aria-label":"cdn  umd version permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"CDN / ",Object(n.b)("code",s({parentName:"h3"},{className:"language-text"}),"umd")," version"),Object(n.b)("p",null,"This named import lives under the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"Popper")," namespace object:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),"Popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),"createPopper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",{id:"3-change-your-css-attribute-selectors",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#3-change-your-css-attribute-selectors","aria-label":"3 change your css attribute selectors permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"3. Change your CSS attribute selectors"),Object(n.b)("p",null,"In v1, attributes were prefixed with ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"x-"),", for example, ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"x-placement"),". In v2,\nthese are now prefixed with ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"data-popper-"),", which matches the HTML5 spec, and\nhas its own data namespace to prevent conflicts."),Object(n.b)("p",null,"Also, ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"x-out-of-boundaries")," is now ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"data-popper-reference-hidden"),"."),Object(n.b)("h2",{id:"4-remove-all-css-margins",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#4-remove-all-css-margins","aria-label":"4 remove all css margins permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"4. Remove all CSS margins"),Object(n.b)("p",null,"In Popper 2 we no longer consider CSS ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"margin")," because of inherent issues with\nit. Instead, to apply some padding between the popper and its reference element,\nuse the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"offset")," modifier. You also need to remove ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"margin")," from your arrows\ntoo; instead use the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"padding")," option in the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"arrow")," modifier."),Object(n.b)("h2",{id:"5-ensure-your-popper-and-arrow-box-size-is-constant-for-all-placements",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#5-ensure-your-popper-and-arrow-box-size-is-constant-for-all-placements","aria-label":"5 ensure your popper and arrow box size is constant for all placements permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"5. Ensure your popper and arrow box size is constant for all placements"),Object(n.b)("p",null,"Your popper and arrow cannot be a different width or height for different\nplacements; it must be constant in size. This is due to the way the Popper\nlifecycle works – which can't know ahead of time (before writing to the DOM)\nwhat the computed CSS will be, which can change the size of the elements. In\nPopper 1, this caused all sorts of flicker and jitter issues."),Object(n.b)("p",null,"We are looking into a way to allow this in the future, but it's currently a\ndifficult problem to solve efficiently."),Object(n.b)("h2",{id:"6-add-back-boundary-paddings-if-necessary",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#6-add-back-boundary-paddings-if-necessary","aria-label":"6 add back boundary paddings if necessary permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"6. Add back boundary paddings if necessary"),Object(n.b)("p",null,"In Popper 2, all ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"padding")," is now ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"0"),". In v1, these were ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"5")," for\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"preventOverflow")," and ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"flip"),". If necessary, you can add these back using the\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"padding")," option, which works the same as v1."),Object(n.b)("h2",{id:"7-change-positionfixed",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#7-change-positionfixed","aria-label":"7 change positionfixed permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"7. Change ",Object(n.b)("code",s({parentName:"h2"},{className:"language-text"}),"positionFixed")),Object(n.b)("p",null,"In Popper 2, this is now the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"strategy")," option:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  strategy",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'fixed'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",{id:"8-update-method-names",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#8-update-method-names","aria-label":"8 update method names permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"8. Update method names"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"scheduleUpdate()")," is now ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"update()")," (and returns a promise)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"update()")," is now ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"forceUpdate()")," (and is sync)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"enableEventListeners")," / ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"disableEventListeners")," are gone; see the\n",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"eventListeners")," modifier. You can use the ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"setOptions")," method to change the\n",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"scroll")," and ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"resize")," options at will to replicate the original methods'\nfunctionality.")),Object(n.b)("h2",{id:"9-update-callbacks",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#9-update-callbacks","aria-label":"9 update callbacks permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"9. Update callbacks"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"onCreate")," is now ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"onFirstUpdate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"onUpdate")," is gone; use a custom modifier with an ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"afterWrite")," phase")),Object(n.b)("h2",{id:"10-update-modifiers",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#10-update-modifiers","aria-label":"10 update modifiers permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"10. Update modifiers"),Object(n.b)("p",null,"In Popper 2 this is now an array of objects (modifiers), instead of an object\nwhere each property was the modifier name."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'flip'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      enabled",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token boolean"}),"false"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"In addition, their options are grouped together in the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"options")," object:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'flip'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n        padding",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"5"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"We cannot list all the changes to them here (there are a lot!); you'll need to\nvisit each modifier in the menu to learn more about their new behavior."),Object(n.b)("p",null,"See ",Object(n.b)("a",s({parentName:"p"},{href:"../modifiers/"}),"Modifiers")," for more information on writing custom modifiers."),Object(n.b)("h2",{id:"11-inner-keeptogether-shift-modifiers-are-gone",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#11-inner-keeptogether-shift-modifiers-are-gone","aria-label":"11 inner keeptogether shift modifiers are gone permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"11. ",Object(n.b)("code",s({parentName:"h2"},{className:"language-text"}),"inner"),", ",Object(n.b)("code",s({parentName:"h2"},{className:"language-text"}),"keepTogether"),", ",Object(n.b)("code",s({parentName:"h2"},{className:"language-text"}),"shift")," modifiers are gone"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"inner")," can be replicated using the ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"offset")," modifier with negative values"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"keepTogether")," functionality lives in ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"preventOverflow")," in ",Object(n.b)("code",s({parentName:"li"},{className:"language-text"}),"tether")," options")),Object(n.b)("h2",{id:"12-remove-virtual-element-properties",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#12-remove-virtual-element-properties","aria-label":"12 remove virtual element properties permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"12. Remove virtual element properties"),Object(n.b)("p",null,"The only property your virtual elements (or Reference Objects in Popper 1) need\nis ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"getBoundingClientRect"),". The other properties are unnecessary now."),Object(n.b)("h2",{id:"13-transitions",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#13-transitions","aria-label":"13 transitions permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"13. Transitions"),Object(n.b)("p",null,"In Popper 2, the ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"computeStyles")," modifier has a new option called ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"adaptive"),"\nenabled by default, which breaks CSS transitions. You should set this option to\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"false")," if CSS transitions are enabled."),Object(n.b)("p",null,"Keep in mind, ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"adaptive")," has the benefit of allowing you to change the height or\nwidth of the popper in most cases without needing to update its position, so\nyou'll lose this benefit when disabling it."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-migration-guide-mdx-70c34fce958fe8eec49e.js.map