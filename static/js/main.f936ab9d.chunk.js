(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,a){e.exports={wrap:"pokemonCard_wrap__1jxAe",header:"pokemonCard_header__2PYvZ",logout:"pokemonCard_logout__mD2rY",back:"pokemonCard_back__2x9xN",contentContainer:"pokemonCard_contentContainer__3jFym",bigPic:"pokemonCard_bigPic__3AkYg",infoPanel:"pokemonCard_infoPanel__20qhn",hr:"pokemonCard_hr__10BWP",flex:"pokemonCard_flex__3GVar",description:"pokemonCard_description__U7sOP",leftPanel:"pokemonCard_leftPanel__35mcw",imgTest:"pokemonCard_imgTest__119Zp"}},34:function(e,t,a){e.exports={preloader:"preloader_preloader__2wRU9"}},4:function(e,t,a){e.exports={wrap:"login_wrap__1PgAK",positionLoginField:"login_positionLoginField__fCjrg",positionPasswordField:"login_positionPasswordField__2GGab",inputField:"login_inputField__ahj1Z",arrowLoginBtn:"login_arrowLoginBtn__2qk1X",label:"login_label__VLxfk",input:"login_input__1_RPq",error:"login_error__3n9qT"}},40:function(e,t,a){},41:function(e,t,a){},6:function(e,t,a){e.exports={wraper:"categories_wraper__1fDyF",header:"categories_header__3sQNV",pannel:"categories_pannel__1RQbd",main:"categories_main__2M-Z1",content:"categories_content__3QS33",categorySelect:"categories_categorySelect__2TNP1",type:"categories_type__1UnbN",categoryLabel:"categories_categoryLabel__1uxuY",arrowMini:"categories_arrowMini__dfCKB",logout:"categories_logout__1nMBy",select:"categories_select__2D8bG",smallPic:"categories_smallPic__uaIq4"}},64:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(32),o=a.n(r),i=(a(40),a(11)),l=(a(41),a(2)),j=a(4),d=a.n(j),b=a.p+"static/media/arrowBtn.c252fcc9.svg",u=a(3);var p=function(e){var t=Object(n.useState)({login:"kode@kode.ru",pass:"Enk0deng",errorClass:null}),a=Object(i.a)(t,2),s=a[0],r=a[1];return e.auth?Object(c.jsx)(u.a,{to:"/conform"}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:d.a.wrap,children:[Object(c.jsxs)("div",{className:"".concat(d.a.inputField," ").concat(d.a.positionLoginField," ").concat(s.errorClass),children:[Object(c.jsx)("label",{htmlFor:"login",className:d.a.label,children:"Login"}),Object(c.jsx)("input",{id:"login",type:"text",className:d.a.input,value:s.login,onChange:function(e){r(Object(l.a)(Object(l.a)({},s),{},{login:e.target.value}))}})]}),Object(c.jsxs)("div",{className:"".concat(d.a.inputField," ").concat(d.a.positionPasswordField," ").concat(s.errorClass),children:[Object(c.jsx)("label",{htmlFor:"pass",className:d.a.label,children:"Password"}),Object(c.jsx)("input",{type:"password",name:"\u043f\u0430\u0440\u043e\u043b\u044c",id:"pass",className:d.a.input,value:s.pass,onChange:function(e){r(Object(l.a)(Object(l.a)({},s),{},{pass:e.target.value}))}})]}),Object(c.jsx)("img",{className:d.a.arrowLoginBtn,src:b,onClick:function(){"kode@kode.ru"==s.login&&"Enk0deng"==s.pass?(r(Object(l.a)(Object(l.a)({},s),{},{errorClass:null})),e.setAuth(!0)):r(Object(l.a)(Object(l.a)({},s),{},{errorClass:d.a.error}))}})]})})};var m=function(e){var t=Object(n.useState)({OTP:9999,input:"",conform:!1,errorClass:null}),a=Object(i.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){r(Object(l.a)(Object(l.a)({},s),{},{OTP:Math.floor(1e3+9e3*Math.random())}))}),[]),s.conform?Object(c.jsx)(u.a,{to:"/categories"}):e.auth?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:d.a.wrap,children:[Object(c.jsxs)("div",{className:"".concat(d.a.inputField," ").concat(d.a.positionLoginField," ").concat(s.errorClass),children:[Object(c.jsxs)("label",{htmlFor:"login",className:d.a.label,children:["Code from SMS ",s.OTP]}),Object(c.jsx)("input",{id:"login",type:"text",className:d.a.input,value:s.input,onChange:function(e){r(Object(l.a)(Object(l.a)({},s),{},{input:e.target.value}))}})]}),Object(c.jsx)("img",{className:d.a.arrowLoginBtn,src:b,onClick:function(){s.input==s.OTP?r(Object(l.a)(Object(l.a)({},s),{},{conform:!0,errorClass:null})):r(Object(l.a)(Object(l.a)({},s),{},{errorClass:d.a.error}))}})]})}):Object(c.jsx)(u.a,{to:"/login"})},O=a(17),g=a(6),h=a.n(g),_=a.p+"static/media/Arrow_mini.82384630.svg",x=a(13),f=a(34),v=a.n(f);var y=function(){return Object(c.jsx)("h2",{className:v.a.preloader,children:"LOADING"})},k=a(15);var N=function(e){var t=Object(n.useState)({isLoading:!0}),a=Object(i.a)(t,2),s=a[0],r=a[1],o=Object(n.useState)([]),j=Object(i.a)(o,2),d=j[0],b=j[1];if(Object(n.useEffect)((function(){k.get("https://api.pokemontcg.io/v1/cards?types=".concat(s.type?s.type:"","&subtype=").concat(s.subtype?s.subtype:"")).then((function(e){b(e.data.cards)}))}),[s.type,s.subtype]),Object(n.useEffect)((function(){k.get("https://api.pokemontcg.io/v1/types").then((function(e){k.get("https://api.pokemontcg.io/v1/subtypes").then((function(t){r(Object(l.a)(Object(l.a)({},s),{},{types:e.data.types,subtypes:t.data.subtypes,isLoading:!1}))}))}))}),[]),!e.auth)return Object(c.jsx)(u.a,{to:"/login"});function p(e){r(Object(l.a)(Object(l.a)({},s),{},Object(O.a)({},e.target.name,e.target.value)))}return s.isLoading?Object(c.jsx)(y,{}):Object(c.jsxs)("div",{className:h.a.wraper,children:[Object(c.jsx)("header",{className:h.a.header,children:Object(c.jsx)("div",{className:h.a.logout,onClick:function(){e.setAuth(!1)},children:"Logout"})}),Object(c.jsxs)("div",{className:h.a.content,children:[Object(c.jsxs)("div",{className:h.a.pannel,children:[Object(c.jsxs)("div",{className:"".concat(h.a.categorySelect," ").concat(h.a.type),children:[Object(c.jsxs)("select",{name:"type",id:"",defaultValue:"",className:h.a.select,onChange:p,children:[Object(c.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Type"}),s.types.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("span",{className:h.a.categoryLabel,children:Object(c.jsx)("img",{src:_,className:h.a.arrowMini})})]}),Object(c.jsxs)("div",{className:h.a.categorySelect,children:[Object(c.jsxs)("select",{name:"subtype",id:"",defaultValue:"",className:h.a.select,onChange:p,children:[Object(c.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Subtype"}),s.subtypes.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("span",{className:h.a.categoryLabel,children:Object(c.jsx)("img",{src:_,className:h.a.arrowMini})})]})]}),Object(c.jsx)("div",{className:h.a.main,children:d.map((function(e){return Object(c.jsx)(x.b,{to:"/card/".concat(e.id),children:Object(c.jsx)("img",{className:h.a.smallPic,src:e.imageUrl,alt:""},e.id)},e.id)}))})]})]})},w=a(10),C=a.n(w);var P=function(e){var t=window.location.pathname.split("d/")[1],a=Object(n.useState)({isLoading:!0}),s=Object(i.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){k.get("https://api.pokemontcg.io/v1/cards/".concat(t||"dp6-90")).then((function(e){o(Object(l.a)(Object(l.a)({},r),{},{card:e.data.card,isLoading:!1}))}))}),[]),e.auth?r.isLoading?Object(c.jsx)(y,{}):Object(c.jsxs)("div",{className:C.a.wrap,children:[Object(c.jsxs)("header",{className:C.a.header,children:[Object(c.jsxs)(x.b,{className:C.a.back,to:"/categories",children:["<"," Back"]}),Object(c.jsx)("div",{className:C.a.logout,onClick:function(){e.setAuth(!1)},children:"Logout"})]}),Object(c.jsxs)("div",{className:C.a.contentContainer,children:[Object(c.jsxs)("div",{className:C.a.leftPanel,children:[Object(c.jsx)("div",{className:C.a.bigPic,children:Object(c.jsx)("img",{className:C.a.imgTest,src:r.card.imageUrlHiRes,alt:""})}),r.card.attacks?r.card.attacks.map((function(e){return Object(c.jsx)("div",{className:C.a.description,children:e.text},e.name)})):"error"]}),Object(c.jsxs)("div",{className:C.a.infoPanel,children:["Pokemon name: ",r.card.name,Object(c.jsx)("br",{}),"Type: ",r.card.types?r.card.types.join(" "):"error",Object(c.jsx)("br",{}),"SubType: ",r.card.subtype,Object(c.jsx)("hr",{className:C.a.hr}),"attackDamage: ",r.card.attacks?r.card.attacks[0].damage:"error",Object(c.jsx)("br",{}),"attackCost: ",r.card.attacks?r.card.attacks[0].cost:"error",Object(c.jsx)("br",{}),"resistances: ",r.card.resistances?r.card.resistances.map((function(e){return Object(c.jsx)("span",{children:e.type},e.type)})):Object(c.jsx)("span",{children:"none"}),Object(c.jsx)("br",{}),"evolvesFrom: ",r.card.evolvesFrom]})]})]}):Object(c.jsx)(u.a,{to:"/login"})};var L=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)("div",{className:"App",children:["don't work correctly ","<BrowserRouter>"," Enk0deng",Object(c.jsx)(u.b,{exact:!0,path:"/myapp",render:function(){return Object(c.jsx)(p,{auth:a,setAuth:s})}}),Object(c.jsx)(u.b,{path:"/login",render:function(){return Object(c.jsx)(p,{auth:a,setAuth:s})}}),Object(c.jsx)(u.b,{path:"/conform",render:function(){return Object(c.jsx)(m,{auth:a,setAuth:s})}}),Object(c.jsx)(u.b,{path:"/categories",render:function(){return Object(c.jsx)(N,{auth:a,setAuth:s})}}),Object(c.jsx)(u.b,{path:"/card",render:function(){return Object(c.jsx)(P,{auth:a,setAuth:s})}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.f936ab9d.chunk.js.map