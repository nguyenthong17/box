(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),s=n.n(r),a=(n(73),n(74),n(3)),j=n(9),i=n.n(j),o=n(1),l=Object(c.createContext)();function u(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(c.useState)(null),u=Object(a.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(!0),h=Object(a.a)(O,2),x=h[0],m=h[1],v=Object(c.useState)(null),g=Object(a.a)(v,2),p=g[0],f=g[1],S=Object(c.useState)(null),C=Object(a.a)(S,2),y=C[0],N=C[1],w=function(){var e=localStorage.getItem("authToken"),t={authorization:"Bearer ".concat(e)};N(t),e?i.a.get("/auth/verify",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;b(t),s(!0),m(!1)})).catch((function(e){b(null),s(!1),m(!1)})):m(!1)};return Object(c.useEffect)((function(){w()}),[]),Object(o.jsx)(l.Provider,{value:{isLoggedIn:r,user:d,isLoading:x,errMessage:p,loginUser:function(e){localStorage.setItem("authToken",e),w()},setErrMessage:f,logoutUser:function(){localStorage.removeItem("authToken"),s(!1),b(null)},headers:y},children:e.children})}var d=n(7);n(94);function b(){var e=Object(c.useContext)(l).isLoggedIn;return Object(o.jsxs)("div",{className:"container footer d-flex",children:[Object(o.jsx)("p",{className:"col align-self-center",children:"\xa9 box"}),!e&&Object(o.jsx)(d.b,{to:"/admin/login",className:"navbar-link",children:Object(o.jsx)("p",{children:"Log in as admin"})})]})}var O=n(6),h=(n(95),n(39)),x=n(67),m=n(13),v=n(32);function g(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/customer/signup",children:"Sign up"})}),Object(o.jsxs)(v.a,{title:"Login",children:[Object(o.jsx)(v.a.Item,{children:Object(o.jsx)(d.b,{to:"/customer/login",children:"Log in for Customer"})}),Object(o.jsx)(v.a.Item,{children:Object(o.jsx)(d.b,{to:"/driver/login",children:"Log in for Driver"})})]})]})})})}function p(){var e=Object(c.useContext)(l).logoutUser;return Object(o.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(o.jsx)(m.a,{children:Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/",onClick:function(){e()},children:"Sign out"})})})})}function f(){return Object(o.jsxs)(m.a,{className:"navbar-link",children:[Object(o.jsxs)(v.a,{title:"Driver",className:"navbar-link",children:[Object(o.jsx)(v.a.Item,{children:Object(o.jsx)(d.b,{to:"/admin/driver/create",children:"Create driver"})}),Object(o.jsx)(v.a.Item,{children:Object(o.jsx)(d.b,{to:"/admin/driver",children:"List all driver"})})]}),Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/admin/orders",children:"Manage Order"})})]})}function S(){return Object(o.jsx)(m.a,{className:"navbar-link",children:Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/driver/delivery",children:"Show delivery"})})})}function C(){return Object(o.jsxs)(m.a,{children:[Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/customer/orders",children:"Show all orders"})}),Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(d.b,{to:"/customer/order/create",children:"Create Order"})})]})}function y(){var e=Object(c.useContext)(l),t=e.isLoggedIn,n=e.user;return Object(o.jsxs)(x.a,{className:"navbar d-flex",children:[Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("img",{className:".logo col align-self-start",src:"/logo.png",alt:"Logo",height:"50px"})}),Object(o.jsxs)(h.a,{className:"navbar-link col-11",children:["customer"===(null===n||void 0===n?void 0:n.userType)&&Object(o.jsx)(C,{}),"driver"===(null===n||void 0===n?void 0:n.userType)&&Object(o.jsx)(S,{}),"admin"===(null===n||void 0===n?void 0:n.userType)&&Object(o.jsx)(f,{}),t?Object(o.jsx)(p,{}):Object(o.jsx)(g,{})]})]})}function N(){return Object(o.jsx)("h1",{className:"center-div",children:"Welcome to box"})}function w(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(o.jsx)("p",{children:"Loading..."}):s&&"admin"===(null===j||void 0===j?void 0:j.userType)?t:Object(o.jsx)(O.a,{to:n})}function I(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(o.jsx)("p",{children:"Loading..."}):s&&"driver"===(null===j||void 0===j?void 0:j.userType)?t:Object(o.jsx)(O.a,{to:n})}function L(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(o.jsx)("p",{children:"Loading..."}):s&&"customer"===(null===j||void 0===j?void 0:j.userType)?t:Object(o.jsx)(O.a,{to:n})}function T(e){var t=e.children,n=Object(c.useContext)(l),r=n.isLoggedIn,s=n.isLoading,a=n.user;return s?Object(o.jsx)("p",{children:"Loading..."}):r?"admin"===(null===a||void 0===a?void 0:a.userType)?Object(o.jsx)(O.a,{to:"/admin"}):"driver"===(null===a||void 0===a?void 0:a.userType)?Object(o.jsx)(O.a,{to:"/driver"}):"customer"===(null===a||void 0===a?void 0:a.userType)?Object(o.jsx)(O.a,{to:"/customer"}):void 0:t}function E(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(o.jsx)("div",{className:"signup center-div",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u};i.a.post("/login/admin",t).then((function(e){var t=e.data.authToken;x(t),b("/admin")})).catch((function(e){m(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Username",Object(o.jsx)("input",{type:"text",value:n,placeholder:"Username",onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",value:u,placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{children:"Login"})]})})}function k(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(c.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1],v=Object(c.useState)(""),g=Object(a.a)(v,2),p=g[0],f=g[1],S=Object(c.useContext)(l),C=S.headers,y=S.setErrMessage,N=Object(O.g)();return Object(o.jsx)("div",{className:"signup",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u,firstName:x,lastName:p};i.a.post("/admin/driver",t,{headers:C}).then((function(e){return N("/admin/driver")})).catch((function(e){y(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Username",Object(o.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(o.jsxs)("label",{children:["First name",Object(o.jsx)("input",{type:"text",placeholder:"First name",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Last name",Object(o.jsx)("input",{type:"text",placeholder:"Last name",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(o.jsx)("button",{children:"Submit"})]})})}function P(){return Object(o.jsx)("h1",{children:"Welcome Admin"})}var D=n(19);function F(){var e=localStorage.getItem("authToken"),t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(c.useState)([]),u=Object(a.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(!1),h=Object(a.a)(O,2),x=h[0],m=h[1],v=Object(c.useState)(0),g=Object(a.a)(v,2),p=g[0],f=g[1],S=Object(c.useContext)(l).setErrMessage,C=x?"block":"none",y=function(){i.a.get("/admin/orders",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return s(e.data.ordersFromDB)})).catch((function(e){return S(e.response.data.message)})),i.a.get("/admin/drivers",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return b(e.data.driversFromDB)})).catch((function(e){return S(e.response.data.message)}))},N=function(e){var t=e.target.value;m(!!t)},w=Object(D.a)(d).map((function(e){return Object(o.jsxs)("option",{value:e._id,children:[e.firstName," ",e.lastName]},e._id)})),I=Object(D.a)(r).filter((function(e){return!(null===e||void 0===e?void 0:e.driverId)})).map((function(t){var n=t._id,c=t.address;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:n.slice(-5)}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:Object(o.jsxs)("select",{id:"driver",onChange:N,children:[Object(o.jsx)("option",{value:"",defaultValue:"",children:" "}),w]})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{id:"assign-button",type:"submit",style:{display:C},onClick:function(){return function(t){var n=document.getElementById("driver").value;i.a.put("/admin/".concat(t),{driverId:n},{headers:{Authorization:"Bearer ".concat(e)}}),f(p+1)}(n)},children:"Assign"})})]},n)}));return Object(c.useEffect)((function(){y()}),[p]),Object(c.useEffect)((function(){y()}),[]),0===r.length?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("div",{className:"center-div",children:[Object(o.jsx)("h2",{children:"Unassigned Orders"}),Object(o.jsxs)("table",{className:"driver-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Order Id"}),Object(o.jsx)("th",{children:"Address"}),Object(o.jsx)("th",{children:"Pick a driver"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:I})]})]})}function A(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(o.jsx)("div",{className:"signup center-div",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u};i.a.post("/login/driver",t).then((function(e){var t=e.data.authToken;x(t),b("/driver")})).catch((function(e){m(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Username",Object(o.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{children:"Login"})]})})}function B(){var e=Object(c.useContext)(l).user,t=e.firstName,n=e.lastName;return Object(o.jsxs)("h1",{children:["Welcome ",t," ",n]})}function U(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(c.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1],v=Object(c.useState)(""),g=Object(a.a)(v,2),p=g[0],f=g[1],S=Object(c.useState)(""),C=Object(a.a)(S,2),y=C[0],N=C[1],w=Object(c.useState)(""),I=Object(a.a)(w,2),L=I[0],T=I[1],E=Object(c.useState)(""),k=Object(a.a)(E,2),P=k[0],D=k[1],F=Object(c.useState)(""),A=Object(a.a)(F,2),B=A[0],U=A[1],M=Object(O.g)(),z=Object(c.useContext)(l).setErrMessage;return Object(o.jsx)("div",{className:"center-div",children:Object(o.jsxs)("form",{className:"signup",onSubmit:function(e){e.preventDefault();var t={email:n,password:u,firstName:x,lastName:p,street:y,houseNumber:L,postcode:P,city:B};i.a.post("/signup/customer",t).then((function(e){return M("/customer/login")})).catch((function(e){return z(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Email",Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Email"})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Password"})]}),Object(o.jsxs)("label",{children:["First name",Object(o.jsx)("input",{type:"text",value:x,onChange:function(e){return m(e.target.value)},placeholder:"First name"})]}),Object(o.jsxs)("label",{children:["Last name",Object(o.jsx)("input",{type:"text",value:p,onChange:function(e){return f(e.target.value)},placeholder:"Last name"})]}),Object(o.jsxs)("label",{children:["Address Street",Object(o.jsx)("input",{type:"text",value:y,onChange:function(e){return N(e.target.value)},placeholder:"Street"})]}),Object(o.jsxs)("label",{children:["House number",Object(o.jsx)("input",{type:"text",value:L,onChange:function(e){return T(e.target.value)},placeholder:"House Number"})]}),Object(o.jsxs)("label",{children:["Postcode",Object(o.jsx)("input",{type:"text",value:P,onChange:function(e){return D(e.target.value)},placeholder:"Postcode"})]}),Object(o.jsxs)("label",{children:["City",Object(o.jsx)("input",{type:"text",value:B,onChange:function(e){return U(e.target.value)},placeholder:"City"})]}),Object(o.jsx)("button",{children:"Sign up"})]})})}function M(){var e=Object(c.useContext)(l).user;return Object(o.jsxs)("h1",{className:"center-div",children:["Welcome ",e.firstName," ",e.lastName]})}function z(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"signup center-div",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password:u};i.a.post("/login/customer",t).then((function(e){var t=e.data.authToken;x(t),b("/customer")})).catch((function(e){return m(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Email",Object(o.jsx)("input",{type:"text",placeholder:"Email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{children:"Login"})]})})})}function _(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),l=j[0],u=j[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),h=b[0],x=b[1],m=Object(c.useState)(""),v=Object(a.a)(m,2),g=v[0],p=v[1],f=Object(O.g)();return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:l,firstName:h,lastName:g};i.a.post("/signup/admin",t).then((function(e){return f("/admin/login")})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["username",Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"username"})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Password"})]}),Object(o.jsxs)("label",{children:["First name",Object(o.jsx)("input",{type:"text",value:h,onChange:function(e){return x(e.target.value)},placeholder:"First name"})]}),Object(o.jsxs)("label",{children:["Last name",Object(o.jsx)("input",{type:"text",value:g,onChange:function(e){return p(e.target.value)},placeholder:"Last name"})]}),Object(o.jsx)("button",{children:"Sign up"})]})})}function W(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(l),j=s.user,u=s.headers,d=s.setErrMessage,b=Object(O.g)(),h={content:n,customerId:j._id,address:j.address};return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.a.post("/customer/order",h,{headers:u}).then((function(e){return b("/customer/orders")})).catch((function(e){return d(e.response.data.message)}))},children:[Object(o.jsxs)("label",{children:["Order content",Object(o.jsx)("textarea",{cols:"30",rows:"10",value:n,placeholder:"Please enter your order",onChange:function(e){return r(e.target.value)}})]}),Object(o.jsx)("button",{children:"Submit"})]})})}function H(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],d=j[1],b=Object(c.useContext)(l).setErrMessage,h=Object(O.g)(),x=Object(O.h)().id,m=localStorage.getItem("authToken");return Object(c.useEffect)((function(){i.a.get("/customer/order/".concat(x),{headers:{Authorization:"Bearer ".concat(m)}}).then((function(e){d(e.data.content),r(e.data.content)})).catch((function(e){return b(e.response.data.message)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={newContent:n};i.a.put("/customer/order/".concat(x),t,{headers:{Authorization:"Bearer ".concat(m)}}).then((function(e){return h("/customer/orders")}))},children:[Object(o.jsxs)("label",{children:["Old order content",Object(o.jsx)("textarea",{cols:"30",rows:"10",value:u,readOnly:!0})]}),Object(o.jsxs)("label",{children:["New order content",Object(o.jsx)("textarea",{cols:"30",rows:"10",value:n,placeholder:"Please enter your order",onChange:function(e){return r(e.target.value)}})]}),Object(o.jsx)("button",{children:"Submit"})]})})}function J(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(l).user._id,j=localStorage.getItem("authToken"),u=Object(D.a)(n).map((function(e){var t=e._id,n=e.content,c="";return c=(null===e||void 0===e?void 0:e.driverId)?e.delivered?"Delivered":"On the way":"Processing",Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.slice(-5)}),Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:c}),"Processing"===c&&Object(o.jsx)("td",{children:Object(o.jsx)(d.b,{to:"/customer/order/".concat(t),children:"Edit"})})]},t)}));return Object(c.useEffect)((function(){i.a.get("/customer/".concat(s),{headers:{Authorization:"Bearer ".concat(j)}}).then((function(e){return r(e.data)}))}),[]),0===n.length?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("div",{className:"center-div",children:Object(o.jsxs)("table",{className:"customer-order",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Order Number"}),Object(o.jsx)("th",{children:"Content"}),Object(o.jsx)("th",{children:"Status"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:u})]})})}function V(){var e=localStorage.getItem("authToken"),t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(c.useState)(0),u=Object(a.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(""),h=Object(a.a)(O,2),x=h[0],m=h[1],v=Object(c.useContext)(l),g=v.user,p=v.setErrMessage,f=function(){i.a.get("/driver/".concat(g._id),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return s(e.data.orders)})).catch((function(e){return p(e.response.data.message)}))},S=function(e){var t=e.target.value;m(t)},C=Object(D.a)(r).map((function(t){var n=t._id,c=t.address;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:n.slice(-5)}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:Object(o.jsxs)("select",{className:"delivered",onChange:S,children:[Object(o.jsx)("option",{value:"",defaultValue:""}),Object(o.jsx)("option",{value:n,children:"Delivered"})]})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{style:{display:n===x?"block":"none"},onClick:function(){return t=n,i.a.put("/driver/order/".concat(t),{delivered:!0},{headers:{Authorization:"Bearer ".concat(e)}}),void b(d+1);var t},children:"Confirm"})})]},n)}));return Object(c.useEffect)((function(){f()}),[d]),Object(c.useEffect)((function(){f()}),[]),0===r.length?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("div",{className:"center-div",children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Order ID"}),Object(o.jsx)("th",{children:"Address"}),Object(o.jsx)("th",{children:"Delivered?"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:C})]})})}var q=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(y,{}),Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{path:"/",element:Object(o.jsx)(T,{children:Object(o.jsx)(N,{})})}),Object(o.jsx)(O.b,{path:"/secret",element:Object(o.jsx)(_,{})}),Object(o.jsx)(O.b,{path:"/admin/login",element:Object(o.jsx)(T,{children:Object(o.jsx)(E,{})})}),Object(o.jsx)(O.b,{path:"/admin",element:Object(o.jsx)(w,{redirectTo:"/",children:Object(o.jsx)(P,{})})}),Object(o.jsx)(O.b,{path:"/admin/driver/create",element:Object(o.jsx)(w,{redirectTo:"/",children:Object(o.jsx)(k,{})})}),Object(o.jsx)(O.b,{path:"/admin/orders",element:Object(o.jsx)(w,{redirectTo:"/",children:Object(o.jsx)(F,{})})}),Object(o.jsx)(O.b,{path:"/driver/login",element:Object(o.jsx)(T,{children:Object(o.jsx)(A,{})})}),Object(o.jsx)(O.b,{path:"/driver",element:Object(o.jsx)(I,{redirectTo:"/",children:Object(o.jsx)(B,{})})}),Object(o.jsx)(O.b,{path:"/driver/delivery",element:Object(o.jsx)(I,{redirectTo:"/",children:Object(o.jsx)(V,{})})}),Object(o.jsx)(O.b,{path:"/customer",element:Object(o.jsx)(L,{redirectTo:"/",children:Object(o.jsx)(M,{})})}),Object(o.jsx)(O.b,{path:"/customer/signup",element:Object(o.jsx)(T,{children:Object(o.jsx)(U,{})})}),Object(o.jsx)(O.b,{path:"/customer/login",element:Object(o.jsx)(T,{children:Object(o.jsx)(z,{})})}),Object(o.jsx)(O.b,{path:"/customer/order/create",element:Object(o.jsx)(L,{redirectTo:"/",children:Object(o.jsx)(W,{})})}),Object(o.jsx)(O.b,{path:"/customer/order/:id",element:Object(o.jsx)(L,{redirectTo:"/",children:Object(o.jsx)(H,{})})}),Object(o.jsx)(O.b,{path:"/customer/orders",element:Object(o.jsx)(L,{redirectTo:"/",children:Object(o.jsx)(J,{})})})]}),Object(o.jsx)(b,{})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(100);s.a.render(Object(o.jsx)(d.a,{children:Object(o.jsx)(u,{children:Object(o.jsx)(q,{})})}),document.getElementById("root")),G()},73:function(e,t,n){},74:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.2e5ec9d0.chunk.js.map