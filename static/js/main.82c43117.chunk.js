(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(5),r=n.n(i),u=(n(12),n(6)),s=n(7),j=(n(13),n(14),n(0)),d=function(t){return Object(j.jsx)("ul",{children:t.items.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:e.text}),Object(j.jsx)("button",{onClick:function(){t.onDeleteTodo(e.id)},children:"DELETE"})]},e.id)}))})},l=(n(16),function(t){var e=Object(c.useRef)(null);return Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value;t.onAddTodo(c)},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"todo-text",children:"Todo text"}),Object(j.jsx)("input",{type:"text",id:"todo-text",ref:e})]}),Object(j.jsx)("button",{type:"submit",children:"ADD TODO"})]})}),b=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"TODO LIST"}),Object(j.jsx)(l,{onAddTodo:function(t){o((function(e){return[].concat(Object(u.a)(e),[{id:(new Date).toISOString(),text:t}])}))}}),Object(j.jsx)(d,{items:n,onDeleteTodo:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.82c43117.chunk.js.map