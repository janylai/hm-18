(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c,i=n(0),o=n(9),r=n.n(o),l=(n(20),n(15)),s=n(3),a=(n(21),n(1)),u=function(e){return Object(a.jsx)("li",{className:"goal-item",onClick:function(){e.onDelete(e.id)},children:e.children})},d=(n(23),function(e){return Object(a.jsx)("ul",{className:"goal-list",children:e.items.map((function(t){return Object(a.jsx)(u,{id:t.id,onDelete:e.onDeleteItem,children:t.text},t.id)}))})}),j=n(10),b=n(11),h=(n(24),function(e){return Object(a.jsx)("button",{type:e.type,className:"button",onClick:e.onClick,children:e.children})}),f=(n(25),b.a.div(c||(c=Object(j.a)(["\nwidth: 100px;\nheight: 100px;\nmargin: 0.5rem;\n"]))),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],r=Object(i.useState)(!0),l=Object(s.a)(r,2),u=l[0],d=l[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length?(e.onAddGoal(c),o("")):d(!1)},children:[Object(a.jsxs)("div",{className:"form-control",children:[!u&&Object(a.jsx)("p",{style:{color:"red",position:"absolute",top:"100px"},children:"Enter some value!"}),Object(a.jsx)("label",{style:{color:u?"black":"red"},children:"Course Goal"}),Object(a.jsx)("input",{value:c,style:{borderColor:u?"black":"red",background:u?"transparent":"salmon"},type:"text",onChange:function(e){var t=e.target.value;t.trim().length>0&&d(!0),o(t)}})]}),Object(a.jsx)(h,{type:"submit",children:"Add Goal"})]})}),x=(n(30),function(){var e=Object(i.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return n.length>0&&(o=Object(a.jsx)(d,{items:n,onDeleteItem:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})),Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{id:"goal-form",children:Object(a.jsx)(f,{onAddGoal:function(e){c((function(t){var n=Object(l.a)(t);return n.unshift({text:e,id:Math.random().toString()}),n}))}})}),Object(a.jsx)("section",{id:"goals",children:o})]})});r.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.657aa77b.chunk.js.map