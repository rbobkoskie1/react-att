(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(19),c=n.n(i),u=n(38),o=n(22),l=n(13),s=n(4),g=n(41);var m=function(e){var t=e.id,n=e.url,r=Object(g.a)(function(){return{type:"image",item:{id:t},collect:function(e){return{isDragging:!!e.isDragging()}}}}),i=Object(s.a)(r,2),c=i[0].isDragging,u=i[1];return a.a.createElement("img",{ref:u,src:n,width:"150px",style:{border:c?"5px solid pink":"0px"}})},d=n(42);n(31);console.log("UPDATE");var p=[{id:1,url:"https://github.com/rbobkoskie1/react-att/src/images/Family_1.jpg"},{id:2,url:"https://rbobkoskie1.github.io/react-att/src/images/Family_2.jpg"},{id:3,url:"https://rbobkoskie1.github.io/react-att/src/images/ROB_BADGE_PIC.jpg"}];var f=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(d.a)(function(){return{accept:"image",drop:function(e){return g(e.id)},collect:function(e){return{isOver:!!e.isOver()}}}}),u=Object(s.a)(c,2),o=(u[0].isOver,u[1]),g=function(e){var t=p.filter(function(t){return e===t.id});i(function(e){return[].concat(Object(l.a)(e),[t[0]])})};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Pictures"},p.map(function(e){return a.a.createElement(m,{url:e.url,id:e.id})})),a.a.createElement("div",{className:"Board",ref:o},n.map(function(e){return a.a.createElement(m,{url:e.url,id:e.id})})))};var b=function(){return a.a.createElement(u.a,{backend:o.a},a.a.createElement("div",{className:"App"},a.a.createElement(f,null)))},v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,39)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)})};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),v()}},[[24,3,2]]]);
//# sourceMappingURL=main.833df329.chunk.js.map