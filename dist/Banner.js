!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("316b8696",i,!1,{})},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("c319dffa",i,!1,{})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,d=!1,l=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){d=n,u=o||{};var a=i(t,e);return v(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o];(c=r[s.id]).refs--,n.push(c)}e?v(a=i(t,e)):a=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete r[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(m(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(d)return l;i.parentNode.removeChild(i)}if(p){var o=c++;i=s||(s=g()),e=x.bind(null,i,o,!1),n=x.bind(null,i,o,!0)}else i=g(),e=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var y,b=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function w(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute(f,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".bordered[data-v-a2fea148] {\n  outline: 1px solid black;\n}\n.container[data-v-a2fea148] {\n  position: relative;\n  margin: 10px auto;\n  box-sizing: border-box;\n  overflow: hidden;\n  padding: 0;\n}\n.container .wrapper[data-v-a2fea148] {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  transform: translateX(0);\n  transition: all ease-in;\n}\n.container .wrapper .slide[data-v-a2fea148] {\n  height: 100%;\n  flex: 1;\n}\n.container .pagination[data-v-a2fea148] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 1.5rem;\n  position: absolute;\n  bottom: 0.2rem;\n}\n.container .pagination .list[data-v-a2fea148] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.container .pagination .list .indicator[data-v-a2fea148] {\n  flex: 1;\n  flex-wrap: nowrap;\n  height: 1.2rem;\n  width: 1.2rem;\n  margin: 0.2rem;\n  text-align: center;\n  line-height: 1.2rem;\n  font-size: 50%;\n}\n.container .pagination .list .indicator.active[data-v-a2fea148] {\n  background: #eba787 !important;\n}\n.container .pagination .list .indicator.square[data-v-a2fea148] {\n  border: none;\n}\n.container .pagination .list .indicator.circle[data-v-a2fea148] {\n  border-radius: 100%;\n}\n.container .pagination .list .indicator.bar[data-v-a2fea148] {\n  width: 2rem;\n  height: 0.5rem;\n  line-height: 0.5rem;\n  border-radius: 2px;\n}\n.container .nav[data-v-a2fea148] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  opacity: 0.1;\n  border: 1.5rem solid transparent;\n  transition: opacity 0.5s ease-in;\n  cursor: pointer;\n}\n.container .nav[data-v-a2fea148]:hover {\n  opacity: 1;\n}\n.container .nav.left-arrow[data-v-a2fea148] {\n  left: 0;\n  transform: translate(-1.5rem, -50%);\n  border-right-color: #0044ff;\n}\n.container .nav.right-arrow[data-v-a2fea148] {\n  right: 0;\n  transform: translate(1.5rem, -50%);\n  border-left-color: #0044ff;\n}\n",""])},function(t,e,n){"use strict";var i=n(1);n.n(i).a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".slide[data-v-81662d9e] :first-child {\n  width: 100%;\n  height: 100%;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:t.bordered?"bordered":"",style:{width:t.width,height:t.height},on:{mouseover:function(e){t.disableOnHover&&t.over()},mouseout:function(e){t.disableOnHover&&t.out()}}},[n("div",{ref:"banner",staticClass:"wrapper",style:{transform:"translateX("+t.offset+"px)","transition-duration":t.stopTransition?"0s":t.duration,width:t.wraperWidth+"px"}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"pagination",style:{"justify-content":t.pagination.align}},[t.pagination.apply&&t.slideCount?n("ul",{staticClass:"list"},t._l(Array("loop"==t.mode?t.slideCount-2:t.slideCount),(function(e,i){return n("li",{key:i,class:["indicator",t.pagination.type,i==t.cur-1?t.pagination.activeClassName:""],style:{backgroundColor:t.pagination.indicator.bgColor,color:t.pagination.indicator.color},on:{click:function(e){t.pagination.clickable&&"loop"!=t.mode&&t.go(i)}}},[t._v(t._s(t.pagination.indicator.showCounter?i+1:""))])})),0):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"loop"==t.mode||t.showNavigation&&0!=t.activeIndex,expression:"mode!='loop'?(showNavigation&&activeIndex!=0):true"}],staticClass:"nav left-arrow",on:{click:function(e){"loop"==t.mode?t.prevLoop():t.prev()}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"loop"==t.mode||t.showNavigation&&t.activeIndex!=t.slideCount-1,expression:"mode!='loop'?(showNavigation&&activeIndex!=slideCount-1):true"}],staticClass:"nav right-arrow",on:{click:function(e){"loop"==t.mode?t.nextLoop():t.next()}}})])};i._withStripped=!0;var o={name:"Banner",data:function(){return{containerWidth:0,activeIndex:0,timer:null,slideCount:0,flag:!0,loopcurindex:1,stopTransition:!1}},props:{width:{type:String,default:"400px"},height:{type:String,default:"300px"},bordered:{type:Boolean,default:!0},duration:{type:String,default:"500ms"},mode:{type:String,default:"alternate",validator:function(t){return["alternate","loop"].includes(t)}},autoplay:{type:Object,default:function(){return{interval:2e3,apply:!0}}},effect:{type:String,default:"slide",validator:function(t){return["slide","fade"].includes(t)}},pagination:{type:Object,default:function(){return{apply:!0,align:"center",clickable:!0,activeClassName:"active",type:"square",indicator:{bgColor:"rgb(76, 0, 255)",color:"black",showCounter:!1}}},validator:function(t){return["bar","circle","square"].includes(t.type)&&["center","start","end"].includes(t.align)}},"show-navigation":{type:Boolean,default:!0},"disable-on-hover":{type:Boolean,default:!1}},computed:{offset:function(){return-this.activeIndex*this.containerWidth},wraperWidth:function(){return this.containerWidth*this.slideCount},cur:function(){return"loop"==this.$props.mode?this.loopcurindex:this.activeIndex+1}},mounted:function(){switch(this.effect){case"slide":var t=this.$refs.banner;if(this.containerWidth=t.parentNode.offsetWidth,"loop"==this.mode){var e=t.children;t.appendChild(e[0].cloneNode(!0)),t.insertBefore(e[e.length-2].cloneNode(!0),e[0]),this.activeIndex=1}1==this.autoplay.apply&&this.start(),this.slideCount=t.children.length;break;default:throw new ReferenceError("unknow swiper effect ".concat(this.effect,",consider use effect 'fade' or 'slide' instead."))}},beforeDestroy:function(){this.cancel()},methods:{start:function(){this.cancel(),this.timer=setInterval(this.move.bind(this),this.autoplay.interval)},cancel:function(){clearInterval(this.timer)},over:function(){this.cancel()},out:function(){1==this.autoplay.apply&&this.start()},move:function(){switch(this.mode){case"loop":this.nextLoop();break;case"alternate":this.alternate();break;default:throw new ReferenceError("unknow option ".concat(this.direction,' for "direction"!'))}},next:function(){var t=this.activeIndex+1;this.go(t)},nextLoop:function(){this.$refs.banner.removeEventListener("transitionend",this.TREnd1,!1),1==this.activeIndex&&(this.stopTransition=!1);var t=this.activeIndex+1;this.go(t),this.loopcurindex=t,t==this.slideCount-1&&(this.loopcurindex=1,this.$refs.banner.addEventListener("transitionend",this.TREnd1,!1))},TREnd1:function(){this.stopTransition=!0,this.go(1)},TREnd2:function(){this.stopTransition=!0,this.go(this.slideCount-2)},prevLoop:function(){this.$refs.banner.removeEventListener("transitionend",this.TREnd2,!1),this.activeIndex==this.slideCount-2&&(this.stopTransition=!1);var t=this.activeIndex-1;this.go(t),this.loopcurindex=t,0==t&&(this.loopcurindex=this.slideCount-2,this.$refs.banner.addEventListener("transitionend",this.TREnd2,!1))},prev:function(){var t=this.activeIndex-1;this.go(t)},alternate:function(){var t=this.activeIndex;this.flag?++t>=this.slideCount&&(this.flag=!1,t-=2):--t<=-1&&(this.flag=!0,t+=2),this.activeIndex=t},go:function(t){var e=this;this.cancel(),this.activeIndex=t,1==this.autoplay.apply&&this.$nextTick((function(){e.start()}))}}};n(4);function r(t,e,n,i,o,r,a,s){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}var a=r(o,i,[],!1,null,"a2fea148",null);a.options.__file="src/components/Banner.vue";var s=a.exports,c=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slide"},[this._t("default")],2)};c._withStripped=!0;var d={name:"Slide"},l=(n(6),r(d,c,[],!1,null,"81662d9e",null));l.options.__file="src/components/Slide.vue";var u=l.exports;n.d(e,"Banner",(function(){return s})),n.d(e,"Slide",(function(){return u}))}])}));