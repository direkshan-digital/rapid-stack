(function(e){function t(t){for(var n,o,u=t[0],c=t[1],i=t[2],p=0,m=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"18fe":function(e,t,r){},"28d8":function(e,t,r){"use strict";var n=r("afcf"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("|\n    "),r("router-link",{attrs:{to:{name:"login",params:{next:"/"}}}},[e._v("Login")]),e._v("|\n    "),r("router-link",{attrs:{to:"/createAccount"}},[e._v("Create Account")]),e._v("|\n    "),r("router-link",{attrs:{to:"/account"}},[e._v("Account Overview")])],1),r("router-view")],1)},s=[],o={},u=o,c=(r("034f"),r("2877")),i=Object(c["a"])(u,a,s,!1,null,null,null),l=i.exports,p=r("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("a",{attrs:{href:"/api/hello"}},[e._v("test")]),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},f=g,b=(r("ccd1"),Object(c["a"])(f,d,v,!1,null,"379548a4",null)),w=b.exports,_={name:"home",components:{HelloWorld:w}},x=_,k=Object(c["a"])(x,m,h,!1,null,null,null),P=k.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("This is an about page")])])}],O={},$=Object(c["a"])(O,y,j,!1,null,null,null),E=$.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("AccountEntry",{attrs:{headerText:"login",buttonText:"login"},on:{accountEntrySubmit:e.login}}),r("router-link",{attrs:{to:"/createAccount"}},[e._v("Ceate Account")]),r("label",[e._v(e._s(e.message))])],1)},S=[],T=(r("96cf"),r("3b8d")),C=r("bc3a"),I=r.n(C),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"account"}},[r("h1",[e._v(e._s(e.headerText))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),r("button",{attrs:{type:"button"},on:{click:e.submit}},[e._v(e._s(e.buttonText))])])},R=[],q={name:"AccountEntry",data:function(){return{input:{username:"",password:""}}},methods:{submit:function(){this.$emit("accountEntrySubmit",this.input)}},props:{buttonText:String,headerText:String}},L=q,U=(r("28d8"),Object(c["a"])(L,N,R,!1,null,"c3778b10",null)),H=U.exports,M={props:["next"],name:"login",data:function(){return{message:""}},components:{AccountEntry:H},methods:{login:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.username&&""!==t.password){e.next=3;break}return console.log("A username and password must be present"),e.abrupt("return");case 3:return e.prev=3,e.next=6,I.a.post("api/login",t);case 6:r=e.sent,localStorage.setItem("token",r.data.token),this.next?this.$router.push(this.next):this.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response.data.message?this.message=e.t0.response.data.message:this.message="Unable to log in at this time";case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(t){return e.apply(this,arguments)}return t}()}},W=M,z=Object(c["a"])(W,A,S,!1,null,null,null),F=z.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"account"}},[r("label",[e._v(e._s(e.message))]),r("label",[e._v(e._s(e.user.username))]),r("button",{on:{click:e.logout}},[e._v("Log Out")]),r("button",{on:{click:e.changePassword}},[e._v("Change Password")])])},V=[],Y={name:"account",data:function(){return{user:{},message:""}},methods:{logout:function(e){localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/"}})},changePassword:function(e){this.$router.push({name:"changePassword"})}},mounted:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("api/user",{params:{},headers:{Authorization:"bearer "+localStorage.getItem("token")}});case 3:t=e.sent,this.user=t.data.value,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),"Login required"===e.t0.response.data.message?(localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/account"}})):e.t0.result.data.message?this.message=e.t0.response.data.message:this.message="Unable to retreive user details at this time";case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},D=Y,B=Object(c["a"])(D,J,V,!1,null,null,null),G=B.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"create_account"}},[r("AccountEntry",{attrs:{headerText:"create account",buttonText:"create"},on:{accountEntrySubmit:e.createAccount}}),r("label",[e._v(e._s(e.message))])],1)},Q=[],X={name:"create_account",data:function(){return{message:""}},components:{AccountEntry:H},methods:{createAccount:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.username&&""!==t.password){e.next=3;break}return console.log("A username and password must be present"),e.abrupt("return");case 3:return e.prev=3,e.next=6,I.a.post("/api/user",t);case 6:r=e.sent,localStorage.setItem("token",r.data.token),this.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response.data.message?this.message=e.t0.response.data.message:this.message="Unable to create account at this time";case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(t){return e.apply(this,arguments)}return t}()}},Z=X,ee=Object(c["a"])(Z,K,Q,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"ChangePassword"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword1,expression:"newPassword1"}],attrs:{type:"password",name:"newPassword1",placeholder:"New Password"},domProps:{value:e.newPassword1},on:{input:function(t){t.target.composing||(e.newPassword1=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword2,expression:"newPassword2"}],attrs:{type:"password",name:"newPassword2",placeholder:"New Password Again"},domProps:{value:e.newPassword2},on:{input:function(t){t.target.composing||(e.newPassword2=t.target.value)}}}),r("button",{attrs:{type:"button"},on:{click:e.submit}},[e._v("Update Password")]),r("label",[e._v(e._s(e.message))])])},ne=[],ae={props:["next"],name:"account",data:function(){return{newPassword1:"",newPassword2:"",message:""}},methods:{submit:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.newPassword1&&this.newPassword2){e.next=4;break}return this.message="You must enter all fields",e.abrupt("return");case 4:if(this.newPassword1===this.newPassword2){e.next=7;break}return this.message="New passwords must match",e.abrupt("return");case 7:return e.next=9,I.a.post("api/changePassword",{password:this.newPassword1},{headers:{Authorization:"bearer "+localStorage.getItem("token")}});case 9:e.sent,this.$router.go(-1),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),e.t0.response.data.message?"Login required"===e.t0.response.data.message?(localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/changePassword"}})):this.message=e.t0.response.data.message:this.message="Unable to update password at this time";case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}()}},se=ae,oe=Object(c["a"])(se,re,ne,!1,null,null,null),ue=oe.exports;n["a"].use(p["a"]);var ce=new p["a"]({routes:[{path:"/createAccount",name:"create_account",component:te},{path:"/login/:next",name:"login",component:F,props:!0},{path:"/",name:"home",component:P,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:E},{path:"/account",name:"account",component:G,meta:{requiresAuth:!0}},{path:"/changePassword",name:"changePassword",component:ue,meta:{requiresAuth:!0}}]});ce.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.getItem("token")?r():r({name:"login",params:{next:e.fullPath}}):r()}));var ie=ce;n["a"].config.productionTip=!1,new n["a"]({router:ie,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},afcf:function(e,t,r){},ccd1:function(e,t,r){"use strict";var n=r("18fe"),a=r.n(n);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0a1bb265.js.map