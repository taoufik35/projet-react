(this["webpackJsonpprojet-react"]=this["webpackJsonpprojet-react"]||[]).push([[0],{26:function(e,t){},36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(24),s=a.n(r),i=(a(36),a(37),a.p+"static/media/header.3ac240e0.png"),j=a(1);var l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"himage",src:i,alt:"header"})})},d=a.p+"static/media/footer.24d0e52c.png";var o=function(){return Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:d,alt:"footer"})})},h=a(10);var b=function(){return Object(j.jsx)("nav",{className:"navbar navbar-dark bg-dark ",children:Object(j.jsxs)("ul",{className:"nav ",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(h.b,{className:"nav-link text-white ","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(h.b,{className:"nav-link text-white","aria-current":"page",to:"/search",children:"Search"})})]})})},u=a(26),m=a.n(u),x=a(27),O=a(28),v=a(31),g=a(30),p=a(29),f=a.n(p);var N=function(e){return Object(j.jsx)("div",{className:"col-6 col-sm-4 col-lg-3",children:Object(j.jsx)("article",{className:"bg-dark text-center text-danger py-5 my-2 ",children:e.index})},e.index)},k=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var c;return Object(x.a)(this,a),(c=t.call(this,e)).state={loaded:!1,error:!1,articles:null,data:null,message:"chargement en cours"},c}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://swapi.dev/api/").then((function(t){var a=Object.keys(t.data).map((function(e){return Object(j.jsx)(N,{index:e})}));e.setState({loaded:!0,data:t.data,articles:a})})).catch((function(t){e.setState({loaded:!0,error:t,message:"porbl\xe8me de chargement merci de reessayer !!"})}))}},{key:"render",value:function(){return this.state.loaded?this.state.error?Object(j.jsxs)("p",{children:["Une erreur est survenu :-( .message : ",this.state.error.message]}):Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"row",children:this.state.articles})}):Object(j.jsx)("p",{children:"Vos donnees sont en cours de chargement"})}}]),a}(n.a.Component),y=a(2);var w=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(h.a,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("main",{className:"container-fluid my-5 containe ",children:Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/",children:Object(j.jsx)(k,{})}),Object(j.jsx)(y.a,{path:"/search",children:Object(j.jsx)(m.a,{})}),Object(j.jsx)(k,{})]})})]}),Object(j.jsx)(o,{})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.611fc22d.chunk.js.map