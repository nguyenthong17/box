(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(23),s=n.n(r),a=(n(73),n(74),n(3)),j=n(10),o=n.n(j),i=n(1),l=Object(c.createContext)();function u(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(c.useState)(null),u=Object(a.a)(j,2),b=u[0],d=u[1],O=Object(c.useState)(!0),h=Object(a.a)(O,2),x=h[0],m=h[1],g=Object(c.useState)(null),v=Object(a.a)(g,2),p=v[0],f=v[1],S=Object(c.useState)(null),C=Object(a.a)(S,2),y=C[0],w=C[1],L=function(){var e=localStorage.getItem("authToken"),t={authorization:"Bearer ".concat(e)};w(t),e?o.a.get("/auth/verify",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;d(t),s(!0),m(!1)})).catch((function(e){d(null),s(!1),m(!1)})):m(!1)};return Object(c.useEffect)((function(){L()}),[]),Object(i.jsx)(l.Provider,{value:{isLoggedIn:r,user:b,isLoading:x,errMessage:p,loginUser:function(e){localStorage.setItem("authToken",e),L()},setErrMessage:f,logoutUser:function(){localStorage.removeItem("authToken"),s(!1),d(null)},headers:y},children:e.children})}var b=n(7);n(94);function d(){var e=Object(c.useContext)(l).isLoggedIn;return Object(i.jsxs)("div",{className:"container footer d-flex",children:[Object(i.jsx)("p",{className:"col align-self-center",children:"\xa9 box"}),!e&&Object(i.jsx)(b.b,{to:"/admin/login",children:Object(i.jsx)("p",{children:"Log in as admin"})})]})}var O=n(6),h=(n(95),n(38)),x=n(67),m=n(13),g=n(24);function v(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/customer/signup",children:"Sign up"})}),Object(i.jsxs)(g.a,{title:"Login",children:[Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(b.b,{to:"/customer/login",children:"Log in for Customer"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(b.b,{to:"/driver/login",children:"Log in for Driver"})})]})]})})})}function p(){var e=Object(c.useContext)(l).logoutUser;return Object(i.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(i.jsx)(m.a,{children:Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/",onClick:function(){e()},children:"Sign out"})})})})}function f(){return Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(g.a,{title:"Driver",children:[Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(b.b,{to:"/admin/driver/create",children:"Create driver"})}),Object(i.jsx)(g.a.Item,{children:Object(i.jsx)(b.b,{to:"/admin/driver",children:"List all driver"})})]}),Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/admin/orders",children:"Manage Order"})})]})}function S(){return Object(i.jsx)(m.a,{children:Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/driver/delivery",children:"Show delivery"})})})}function C(){return Object(i.jsxs)(m.a,{children:[Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/customer/orders",children:"Show all orders"})}),Object(i.jsx)(m.a.Item,{children:Object(i.jsx)(b.b,{to:"/customer/order/create",children:"Create Order"})})]})}function y(){var e=Object(c.useContext)(l),t=e.isLoggedIn,n=e.user;return Object(i.jsxs)(x.a,{className:"navbar d-flex",children:[Object(i.jsx)(b.b,{to:"/",children:Object(i.jsx)("img",{className:".logo col align-self-start",src:"/logo.png",alt:"Logo",height:"50px"})}),Object(i.jsxs)(h.a,{className:"navbar-link col-11",children:["customer"===(null===n||void 0===n?void 0:n.userType)&&Object(i.jsx)(C,{}),"driver"===(null===n||void 0===n?void 0:n.userType)&&Object(i.jsx)(S,{}),"admin"===(null===n||void 0===n?void 0:n.userType)&&Object(i.jsx)(f,{}),t?Object(i.jsx)(p,{}):Object(i.jsx)(v,{})]})]})}function w(){return Object(i.jsx)("h1",{className:"",children:"Welcome to box"})}function L(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(i.jsx)("p",{children:"Loading..."}):s&&"admin"===(null===j||void 0===j?void 0:j.userType)?t:Object(i.jsx)(O.a,{to:n})}function N(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(i.jsx)("p",{children:"Loading..."}):s&&"driver"===(null===j||void 0===j?void 0:j.userType)?t:Object(i.jsx)(O.a,{to:n})}function T(e){var t=e.children,n=e.redirectTo,r=Object(c.useContext)(l),s=r.isLoggedIn,a=r.isLoading,j=r.user;return a?Object(i.jsx)("p",{children:"Loading..."}):s&&"customer"===(null===j||void 0===j?void 0:j.userType)?t:Object(i.jsx)(O.a,{to:n})}function I(e){var t=e.children,n=Object(c.useContext)(l),r=n.isLoggedIn,s=n.isLoading,a=n.user;return s?Object(i.jsx)("p",{children:"Loading..."}):r?"admin"===(null===a||void 0===a?void 0:a.userType)?Object(i.jsx)(O.a,{to:"/admin"}):"driver"===(null===a||void 0===a?void 0:a.userType)?Object(i.jsx)(O.a,{to:"/driver"}):"customer"===(null===a||void 0===a?void 0:a.userType)?Object(i.jsx)(O.a,{to:"/customer"}):void 0:t}function P(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(i.jsx)("div",{className:"admin-login",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u};o.a.post("/login/admin",t).then((function(e){var t=e.data.authToken;x(t),d("/admin")})).catch((function(e){m(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Username",Object(i.jsx)("input",{type:"text",value:n,placeholder:"Username",onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",value:u,placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(i.jsx)("button",{children:"Submit"})]})})}function E(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),x=h[0],m=h[1],g=Object(c.useState)(""),v=Object(a.a)(g,2),p=v[0],f=v[1],S=Object(c.useContext)(l),C=S.headers,y=S.setErrMessage,w=Object(O.g)();return Object(i.jsx)("div",{className:"create-driver",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u,firstName:x,lastName:p};o.a.post("/admin/driver",t,{headers:C}).then((function(e){return w("/admin/driver")})).catch((function(e){y(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Username",Object(i.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(i.jsxs)("label",{children:["First name",Object(i.jsx)("input",{type:"text",placeholder:"First name",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(i.jsxs)("label",{children:["Last name",Object(i.jsx)("input",{type:"text",placeholder:"Last name",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(i.jsx)("button",{children:"Submit"})]})})}function k(){return Object(i.jsx)("h1",{children:"Welcome Admin"})}function U(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(i.jsx)("div",{className:"driver-login",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,password:u};o.a.post("/login/driver",t).then((function(e){var t=e.data.authToken;x(t),d("/driver")})).catch((function(e){m(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Username",Object(i.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(i.jsx)("button",{children:"Login"})]})})}function D(){var e=Object(c.useContext)(l).user,t=e.firstName,n=e.lastName;return Object(i.jsxs)("h1",{children:["Welcome ",t," ",n]})}function F(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),x=h[0],m=h[1],g=Object(c.useState)(""),v=Object(a.a)(g,2),p=v[0],f=v[1],S=Object(c.useState)(""),C=Object(a.a)(S,2),y=C[0],w=C[1],L=Object(c.useState)(""),N=Object(a.a)(L,2),T=N[0],I=N[1],P=Object(c.useState)(""),E=Object(a.a)(P,2),k=E[0],U=E[1],D=Object(c.useState)(""),F=Object(a.a)(D,2),M=F[0],A=F[1],B=Object(O.g)(),z=Object(c.useContext)(l).setErrMessage;return Object(i.jsx)("div",{className:"center-div",children:Object(i.jsxs)("form",{className:"signup",onSubmit:function(e){e.preventDefault();var t={email:n,password:u,firstName:x,lastName:p,street:y,houseNumber:T,postcode:k,city:M};o.a.post("/signup/customer",t).then((function(e){return B("/customer/login")})).catch((function(e){return z(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Email",Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Email"})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",value:u,onChange:function(e){return b(e.target.value)},placeholder:"Password"})]}),Object(i.jsxs)("label",{children:["First name",Object(i.jsx)("input",{type:"text",value:x,onChange:function(e){return m(e.target.value)},placeholder:"First name"})]}),Object(i.jsxs)("label",{children:["Last name",Object(i.jsx)("input",{type:"text",value:p,onChange:function(e){return f(e.target.value)},placeholder:"Last name"})]}),Object(i.jsxs)("label",{children:["Address Street",Object(i.jsx)("input",{type:"text",value:y,onChange:function(e){return w(e.target.value)},placeholder:"Street"})]}),Object(i.jsxs)("label",{children:["House number",Object(i.jsx)("input",{type:"text",value:T,onChange:function(e){return I(e.target.value)},placeholder:"House Number"})]}),Object(i.jsxs)("label",{children:["Postcode",Object(i.jsx)("input",{type:"text",value:k,onChange:function(e){return U(e.target.value)},placeholder:"Postcode"})]}),Object(i.jsxs)("label",{children:["City",Object(i.jsx)("input",{type:"text",value:M,onChange:function(e){return A(e.target.value)},placeholder:"City"})]}),Object(i.jsx)("button",{children:"Sign up"})]})})}function M(){var e=Object(c.useContext)(l).user;return Object(i.jsxs)("h1",{className:"center-div",children:["Welcome ",e.firstName," ",e.lastName]})}function A(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(O.g)(),h=Object(c.useContext)(l),x=h.loginUser,m=h.setErrMessage;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"driver-login",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password:u};o.a.post("/login/customer",t).then((function(e){var t=e.data.authToken;x(t),d("/customer")})).catch((function(e){return m(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Email",Object(i.jsx)("input",{type:"text",placeholder:"Email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(i.jsx)("button",{children:"Login"})]})})})}function B(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),l=j[0],u=j[1],b=Object(c.useState)(""),d=Object(a.a)(b,2),h=d[0],x=d[1],m=Object(c.useState)(""),g=Object(a.a)(m,2),v=g[0],p=g[1],f=Object(O.g)();return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password:l,firstName:h,lastName:v};o.a.post("/signup/admin",t).then((function(e){return f("/admin/login")})).catch((function(e){return console.log(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Email",Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Email"})]}),Object(i.jsxs)("label",{children:["Password",Object(i.jsx)("input",{type:"password",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Password"})]}),Object(i.jsxs)("label",{children:["First name",Object(i.jsx)("input",{type:"text",value:h,onChange:function(e){return x(e.target.value)},placeholder:"First name"})]}),Object(i.jsxs)("label",{children:["Last name",Object(i.jsx)("input",{type:"text",value:v,onChange:function(e){return p(e.target.value)},placeholder:"Last name"})]}),Object(i.jsx)("button",{children:"Sign up"})]})})}function z(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(l),j=s.user,u=s.headers,b=s.setErrMessage,d=Object(O.g)(),h={content:n,customerId:j._id,address:j.address};return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.post("/customer/order",h,{headers:u}).then((function(e){return d("/customer/orders")})).catch((function(e){return b(e.response.data.message)}))},children:[Object(i.jsxs)("label",{children:["Order content",Object(i.jsx)("textarea",{cols:"30",rows:"10",value:n,placeholder:"Please enter your order",onChange:function(e){return r(e.target.value)}})]}),Object(i.jsx)("button",{children:"Submit"})]})})}function W(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(c.useContext)(l).setErrMessage,h=Object(O.g)(),x=Object(O.h)().id,m=localStorage.getItem("authToken");return Object(c.useEffect)((function(){o.a.get("/customer/order/".concat(x),{headers:{Authorization:"Bearer ".concat(m)}}).then((function(e){b(e.data.content),r(e.data.content)})).catch((function(e){return d(e.response.data.message)}))}),[]),Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={newContent:n};o.a.put("/customer/order/".concat(x),t,{headers:{Authorization:"Bearer ".concat(m)}}).then((function(e){return h("/customer/orders")}))},children:[Object(i.jsxs)("label",{children:["Old order content",Object(i.jsx)("textarea",{cols:"30",rows:"10",value:u,readOnly:!0})]}),Object(i.jsxs)("label",{children:["New order content",Object(i.jsx)("textarea",{cols:"30",rows:"10",value:n,placeholder:"Please enter your order",onChange:function(e){return r(e.target.value)}})]}),Object(i.jsx)("button",{children:"Submit"})]})})}function _(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(l).user._id,j=localStorage.getItem("authToken"),u=n.map((function(e){var t=e._id,n=e.content,c="";return c=(null===e||void 0===e?void 0:e.driverId)?"On the way":"Processing",Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.slice(-5)}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:c}),"Processing"===c&&Object(i.jsx)("td",{children:Object(i.jsx)(b.b,{to:"/customer/order/".concat(t),children:"Edit"})})]},t)}));return Object(c.useEffect)((function(){o.a.get("/customer/".concat(s),{headers:{Authorization:"Bearer ".concat(j)}}).then((function(e){return r(e.data)}))}),[]),Object(i.jsx)("div",{className:"center-div",children:Object(i.jsxs)("table",{className:"customer-order",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Order Number"}),Object(i.jsx)("th",{children:"Content"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{})]})}),Object(i.jsx)("tbody",{children:u})]})})}var H=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(y,{}),Object(i.jsxs)(O.d,{children:[Object(i.jsx)(O.b,{path:"/",element:Object(i.jsx)(I,{children:Object(i.jsx)(w,{})})}),Object(i.jsx)(O.b,{path:"/secret",element:Object(i.jsx)(B,{})}),Object(i.jsx)(O.b,{path:"/admin/login",element:Object(i.jsx)(I,{children:Object(i.jsx)(P,{})})}),Object(i.jsx)(O.b,{path:"/admin",element:Object(i.jsx)(L,{redirectTo:"/",children:Object(i.jsx)(k,{})})}),Object(i.jsx)(O.b,{path:"/admin/driver/create",element:Object(i.jsx)(L,{redirectTo:"/",children:Object(i.jsx)(E,{})})}),Object(i.jsx)(O.b,{path:"/driver/login",element:Object(i.jsx)(I,{children:Object(i.jsx)(U,{})})}),Object(i.jsx)(O.b,{path:"/driver",element:Object(i.jsx)(N,{redirectTo:"/",children:Object(i.jsx)(D,{})})}),Object(i.jsx)(O.b,{path:"/customer",element:Object(i.jsx)(T,{redirectTo:"/",children:Object(i.jsx)(M,{})})}),Object(i.jsx)(O.b,{path:"/customer/signup",element:Object(i.jsx)(I,{children:Object(i.jsx)(F,{})})}),Object(i.jsx)(O.b,{path:"/customer/login",element:Object(i.jsx)(I,{children:Object(i.jsx)(A,{})})}),Object(i.jsx)(O.b,{path:"/customer/order/create",element:Object(i.jsx)(T,{redirectTo:"/",children:Object(i.jsx)(z,{})})}),Object(i.jsx)(O.b,{path:"/customer/order/:id",element:Object(i.jsx)(T,{redirectTo:"/",children:Object(i.jsx)(W,{})})}),Object(i.jsx)(O.b,{path:"/customer/orders",element:Object(i.jsx)(T,{children:Object(i.jsx)(_,{})})})]}),Object(i.jsx)(d,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(100);s.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(u,{children:Object(i.jsx)(H,{})})}),document.getElementById("root")),J()},73:function(e,t,n){},74:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.fe103bd6.chunk.js.map