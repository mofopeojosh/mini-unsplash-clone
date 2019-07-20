(function(e){function t(t){for(var s,a,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)a=i[p],n[a]&&f.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"130d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a=(r("5c0b"),r("2877")),i={},c=Object(a["a"])(i,n,o,!1,null,null,null),u=c.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("header",{staticClass:"header"},[e.q?s("h1",{staticClass:"header-search-title"},[e._v("Search Results for\n            "),s("q",[s("span",{staticClass:"search-query"},[e._v(e._s(e.q))])])]):s("form",{staticClass:"header-search",on:{submit:function(t){return t.preventDefault(),e.searchPhotos(t)}}},[s("img",{staticClass:"header-icon",attrs:{src:r("d8e7")}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"header-input",attrs:{placeholder:"Search for photo"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])]),s("main",{staticClass:"main-content"},[s("div",{staticClass:"photo-list"},[e.photoList.length?e._l(e.photoList,function(t,r){return s("a",{key:r,staticClass:"photo-list-item",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.previewImage(t)}}},[s("div",{staticClass:"photo-image",style:"background-image: url("+t.urls.regular+")"},[s("div",{staticClass:"photo-info"},[s("div",[e._v(e._s(t.user.name))]),s("small",[e._v(e._s(t.user.location))])])])])}):e._l(8,function(t){return s("div",{key:t,staticClass:"photo-list-item"},[e._m(0,!0)])})],2)]),e.showPreview?s("ImagePreview",{attrs:{preview:e.preview},on:{close:e.closePreview}}):e._e()],1)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"photo-list-placeholder"},[r("div",{staticClass:"photo-info"},[r("div",{staticClass:"photo-info-title"}),r("div",{staticClass:"photo-info-subtitle"})])])}],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"previewer"},[s("div",{staticClass:"previewer-close"},[s("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.closePreview(t)}}},[s("img",{staticClass:"previewer-close-icon",attrs:{src:r("7ddb")}})])]),s("div",{staticClass:"previewer-content"},[s("div",{staticClass:"previewer-image",style:"background-image: url("+e.preview.urls.regular+")"}),s("div",{staticClass:"previewer-footer"},[s("div",[e._v(e._s(e.preview.user.name))]),s("small",[e._v(e._s(e.preview.user.location))])])])])},d=[],v=r("3f08"),m={name:"ImageCard",components:{Fragment:v["a"]},props:{preview:Object},mounted:function(){document.addEventListener("keydown",this.handleEscape)},methods:{closePreview:function(){this.$emit("close")},handleEscape:function(e){27===e.keyCode&&this.closePreview()}}},w=m,b=(r("c21e"),Object(a["a"])(w,h,d,!1,null,"f135f71e",null)),g=b.exports,y={name:"home",components:{ImagePreview:g},props:{q:{type:String,default:null}},data:function(){return{photoList:[],searchQuery:"",showPreview:!1,preview:{}}},mounted:function(){this.getPhotos()},methods:{getPhotos:function(){var e=this,t={per_page:7};this.q&&(t.query=this.q),console.log(this.photoList),this.$axios.get("/photos",{params:t}).then(function(t){e.photoList=t.data})},searchPhotos:function(){this.$router.push({name:"search",query:{q:this.searchQuery}})},previewImage:function(e){this.preview=e,this.showPreview=!0},closePreview:function(){this.showPreview=!1}}},_=y,C=(r("fdfc"),Object(a["a"])(_,p,f,!1,null,"aebe82d6",null)),P=C.exports;s["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/search",name:"search",component:P,props:function(e){return{q:e.query.q}}}]}),q=r("2f62");s["a"].use(q["a"]);var O=new q["a"].Store({state:{},mutations:{},actions:{}}),j=r("bc3a"),k=r.n(j);s["a"].config.productionTip=!1,s["a"].prototype.$axios=k.a,s["a"].prototype.$axios.defaults.baseURL="https://api.unsplash.com/",s["a"].prototype.$axios.defaults.headers.common.Authorization="Client-ID b2ee44112977aaaef879bd0c5936a0bcfba8e56b9c7cce200f16f40d5e4369f9",new s["a"]({router:x,store:O,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("5e27"),n=r.n(s);n.a},"5e27":function(e,t,r){},"7ddb":function(e,t,r){e.exports=r.p+"img/close-icon.6bae1ab5.svg"},b736:function(e,t,r){},c21e:function(e,t,r){"use strict";var s=r("130d"),n=r.n(s);n.a},d8e7:function(e,t,r){e.exports=r.p+"img/search-icon.e041da0c.svg"},fdfc:function(e,t,r){"use strict";var s=r("b736"),n=r.n(s);n.a}});
//# sourceMappingURL=app.1aab672c.js.map