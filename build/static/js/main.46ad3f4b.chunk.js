(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t(15),r=t.n(o),u=t(6),a=t(3),i=t(4),s=t.n(i),l="http://localhost:3001/api/persons",b=function(){return s.a.get(l).then((function(e){return e.data}))},d=function(e){return s.a.post(l,e).then((function(e){return e.data}))},j=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},f=t(0),m=function(e){var n=e.value,t=e.onChange;return Object(f.jsxs)("div",{children:["Filter Phonebook",Object(f.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.onSubmit,t=e.newName,c=e.newNumber,o=e.numberChange,r=e.nameChange;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:r})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:o})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.persons,t=e.deleteClick;return Object(f.jsx)("div",{children:n.map((function(e,n){return Object(f.jsx)("li",{children:Object(f.jsxs)("p",{children:[e.name," ",e.number," ",Object(f.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]})},n)}))})},p=function(e){var n=e.notificationType,t=e.message;return null===n?null:"success"===n?Object(f.jsx)("div",{className:"success",children:t}):"error"===n?Object(f.jsx)("div",{className:"error",children:t}):void 0},x=(t(39),function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),i=Object(a.a)(r,2),s=i[0],l=i[1],x=Object(c.useState)(""),g=Object(a.a)(x,2),w=g[0],C=g[1],k=Object(c.useState)(""),N=Object(a.a)(k,2),S=N[0],T=N[1],y=Object(c.useState)([]),L=Object(a.a)(y,2),_=L[0],D=L[1],A=Object(c.useState)(null),P=Object(a.a)(A,2),E=P[0],J=P[1],B=Object(c.useState)(null),F=Object(a.a)(B,2),I=F[0],q=F[1];Object(c.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var z=function(e){window.confirm("Delete ".concat(e.name," ?"))&&(h(e._id).then(o(t.filter((function(n){return n._id!==e._id})))),q("success"),J("Deleted ".concat(s," from phonebook")),setTimeout((function(){J(null)}),3e3))};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{notificationType:I,message:E}),Object(f.jsx)(m,{value:S,onChange:function(e){T(e.target.value),D(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),Object(f.jsx)("h2",{children:"Add a New Person"}),Object(f.jsx)(O,{onSubmit:function(e){e.preventDefault();var n=t.some((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));if(n){if(n&&window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()})),r=Object(u.a)(Object(u.a)({},c),{},{number:w});j(c._id,r).then((function(e){o(t.map((function(n){return n.id!==c._id?n:e}))),q("success"),J("Added ".concat(s," to the phonebook")),setTimeout((function(){J(null)}),3e3)})).catch((function(e){q("error"),J("person '".concat(t.name,"' was already removed from server")),setTimeout((function(){J(null)}),5e3)}))}}else{var a={name:s,number:w};s.length<=3?(q("error"),J("Name must be at least three characters long"),setTimeout((function(){J(null)}),3e3)):w.length<=8?(q("error"),J("Number must be at least 8 digits long "),setTimeout((function(){J(null)}),3e3)):d(a).then((function(e){o(t.concat(e)),J("Added ".concat(s)),setTimeout((function(){J(null)}),3e3)})).catch((function(e){q("error"),J("".concat(e.response.data.error)),setTimeout((function(){J(null)}),3e3)}))}l(""),C("")},newName:s,newNumber:w,nameChange:function(e){l(e.target.value)},numberChange:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),S.length>0?Object(f.jsx)(v,{persons:_,deleteClick:z}):Object(f.jsx)(v,{persons:t,deleteClick:z})]})});r.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.46ad3f4b.chunk.js.map