(this["webpackJsonpqueue-management"]=this["webpackJsonpqueue-management"]||[]).push([[6],{156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);n(83),n(125);var r=n(0),a=n.n(r),c=n(39),o=n.n(c),u=n(63),s=n(33),i=n(64),l=n(65),d=n(6),b=n(67),p=n(44),j=n(36),f=n(14),O=n(90),m=n(26),h=n(3),x=["component","roles"],v=["component","roles","userInfo"],y=a.a.lazy((function(){return Promise.all([n.e(12),n.e(24)]).then(n.bind(null,1277))})),g=a.a.lazy((function(){return Promise.all([n.e(3),n.e(13)]).then(n.bind(null,310))})),E=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,1282))})),w=a.a.lazy((function(){return n.e(25).then(n.bind(null,1284))})),k=a.a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,1285))})),A=a.a.lazy((function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,1286))})),T=a.a.lazy((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,1287))})),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,1288))})),S=a.a.lazy((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,1289))})),N=a.a.lazy((function(){return n.e(26).then(n.bind(null,1290))})),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,1291))})),C=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(15)]).then(n.bind(null,1292))})),D=a.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(10)]).then(n.bind(null,1296))})),I=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(20)]).then(n.bind(null,1294))})),P=function(e){var t=e.component,n=(e.roles,Object(j.a)(e,x));return Object(h.jsx)(f.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return!Object(m.c)()||"/signup"!==e.location.pathname&&"/login"!==e.location.pathname?Object(h.jsx)(t,Object(d.a)({},e)):Object(h.jsx)(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var U=function(e){var t=e.component,n=(e.roles,e.userInfo),r=Object(j.a)(e,v);return Object(h.jsx)(f.b,Object(d.a)(Object(d.a)({},r),{},{render:function(e){var r=Object(m.c)();return r?r&&n&&"Doctors"===n.role_name&&"/app/subscription"!==e.location.pathname&&new Date(n.subscription_active_at)<new Date?Object(h.jsx)(f.a,{to:{pathname:"/app/subscription",state:{from:e.location}}}):!r||"/signup"!==e.location.pathname&&"/login"!==e.location.pathname?Object(h.jsx)(t,Object(d.a)({},e)):Object(h.jsx)(f.a,{to:{pathname:"/",state:{from:e.location}}}):Object(h.jsx)(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},L=[{path:"/login",exact:!0,name:"Login",component:E,route:P},{path:"/logout",name:"Logout",component:w,route:f.b},{path:"/signup",exact:!0,name:"signup",component:C,route:P},{path:"/support",exact:!0,name:"signup",component:_,route:P},{path:"/reset-password",exact:!0,name:"reset-password",component:I,route:P},{path:"/about-us",layout:"nonAuth",exact:!0,name:"AboutUS",component:k,route:f.b},{path:"/faq",layout:"nonAuth",exact:!0,name:"FAQ",component:A,route:f.b},{path:"/term-of-service",layout:"nonAuth",exact:!0,name:"TC",component:T,route:f.b},{path:"/privacy-policy",layout:"nonAuth",exact:!0,name:"PAP",component:S,route:f.b},{path:"/contact-us",layout:"nonAuth",exact:!0,name:"ContactUs",component:R,route:f.b},{path:"/",exact:!0,name:"home",layout:"nonAuth",component:y,route:f.b},{path:"/app",name:"Admin",component:D,route:U},{path:"/pdf",name:"Pdf",component:g,route:U},{path:"/invoice",exact:!0,name:"Invoice",component:O.a,route:f.b},{path:"notfound",name:"notfound",exact:!0,component:N,layout:"nonAuth",route:f.b}],G=n(75),z=n.n(G),F=n(68),q=(n(136),n(80)),Y=function(){return Object(h.jsx)("div",{})},Q=z()({loader:function(){return n.e(18).then(n.bind(null,1298))},render:function(e,t){var n=e.default;return Object(h.jsx)(n,Object(d.a)({},t))},loading:Y}),M=z()({loader:function(){return Promise.all([n.e(4),n.e(11),n.e(17)]).then(n.bind(null,1269))},render:function(e,t){var n=e.default;return Object(h.jsx)(n,Object(d.a)({},t))},loading:Y}),H=function(e){var t=function(t){Object(i.a)(r,t);var n=Object(l.a)(r);function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsx)(e,Object(d.a)({},this.props))}}]),r}(r.Component);return Object(p.b)()(t)},W=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getLayout=function(e){return e?Q:Object(m.c)()?M:Q},r.props.loginUserSuccess(e.userData),r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(b.a,{children:Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(q.a,{}),L.map((function(t,n){return Object(h.jsx)(t.route,{path:t.path,exact:t.exact,roles:t.roles,userInfo:e.props.user,component:H((function(n){var a=e.getLayout(t.layout);return Object(h.jsx)(r.Suspense,{fallback:Y(),children:Object(h.jsx)(a,Object(d.a)(Object(d.a)({},n),{},{children:Object(h.jsx)(t.component,Object(d.a)({},n))}))})}))},n)}))]})})}}]),n}(r.Component),B=Object(p.b)((function(e){return{isAuthenticated:e.Auth.isAuthenticated,isLoading:e.Auth.isLoading,user:e.Auth.user}}),{setLoadingData:F.g,loginUserSuccess:F.c})(W),J=n(29),V=n.n(J),X=["get-customers","check-email-exist","check-mobile-exist","get-prescriptions","check-customer-email-exist","check-customer-mobile-exist"];V.a.interceptors.request.use((function(e){var t=Object(m.b)();return X.find((function(t){return e.url.includes(t)}))||document.body.classList.add("custom-loader"),t&&(e.headers.Authorization="JWT ".concat(t)),(!e.url.includes("api/users/update-profile")||"post"!=e.method&&"POST"!=e.method)&&(e.headers["Content-Type"]="application/json",e.headers.Accept="application/json"),e}),(function(e){return document.body.classList.remove("custom-loader"),Promise.reject(e)})),V.a.interceptors.response.use((function(e){return document.body.classList.remove("custom-loader"),e}),(function(e){return document.body.classList.remove("custom-loader"),Promise.reject(e)}));var K=function(e){e&&e instanceof Function&&n.e(32).then(n.bind(null,1295)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Z=n(32),$=n(114),ee=n(5),te={user:Object(m.a)(),loading:!1,isLoading:!1,bdata:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.l:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case ee.n:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload,loading:!1,login_error:null});case ee.m:return Object(d.a)(Object(d.a)({},e),{},{login_error:t.payload,loading:!1});case ee.q:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case ee.s:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload,loading:!1,registerError:null});case ee.r:return Object(d.a)(Object(d.a)({},e),{},{registerError:t.payload,loading:!1});case ee.o:return Object(d.a)(Object(d.a)({},e),{},{user:null});case ee.i:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case ee.k:return Object(d.a)(Object(d.a)({},e),{},{passwordResetStatus:t.payload,loading:!1,error:null});case ee.j:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload,loading:!1});case ee.w:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.payload});case ee.t:return Object(d.a)(Object(d.a)({},e),{},{bdata:t.payload});default:return Object(d.a)({},e)}},re={category:[],dropdownData:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.a:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case ee.u:return Object(d.a)(Object(d.a)({},e),{},{category:e.category.concat(t.payload)});case ee.x:return Object(d.a)(Object(d.a)({},e),{},{dropdownData:t.payload});case ee.v:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return Object(d.a)({},e)}},ce={queue:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.p:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case ee.y:return Object(d.a)(Object(d.a)({},e),{},{queue:e.queue.concat(t.payload)});case ee.z:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return Object(d.a)({},e)}},ue=Object(Z.b)({Auth:ne,Course:ae,Queue:oe}),se=n(10),ie=n.n(se),le=n(9),de=n(116),be=n(23),pe=n(31),je=n(24),fe=ie.a.mark(ke),Oe=ie.a.mark(Ae),me=ie.a.mark(Te),he=ie.a.mark(_e),xe=ie.a.mark(Se),ve=ie.a.mark(Ne),ye=ie.a.mark(Re),ge=ie.a.mark(Ce),Ee=ie.a.mark(De),we=function(e){var t=new de.a;e?t.set("token",e.token,{path:"/"}):t.remove("token",{path:"/"})};function ke(e){var t,n,r,a,c,o;return ie.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.username,r=t.password,a=t.history,u.prev=1,u.next=4,Object(le.b)(je.c,"".concat(be.a,"api/common/auth-login/"),{username:n,password:r});case 4:return c=u.sent,we(c.data),u.next=8,Object(le.d)(Object(pe.e)(c.data));case 8:a.push("/app/dashboard"),u.next=17;break;case 11:return u.prev=11,u.t0=u.catch(1),o=u.t0.message?u.t0.message:"Invalid credentials",u.next=16,Object(le.d)(Object(pe.d)(o));case 16:we(null);case 17:case"end":return u.stop()}}),fe,null,[[1,11]])}function Ae(e){var t;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.history,n.prev=1,we(null),n.next=5,Object(le.b)((function(){t.push("/")}));case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),Oe,null,[[1,7]])}function Te(e){var t,n,r,a,c;return ie.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.data,r=t.history,o.prev=1,o.next=4,Object(le.b)(je.c,"".concat(be.a,"api/common/verify/"),n);case 4:return a=o.sent,we(a.data),r.push("/app/dashboard"),o.next=9,Object(le.d)(Object(pe.i)(a.data));case 9:o.next=23;break;case 11:o.prev=11,o.t0=o.catch(1),o.t1=o.t0.status,o.next=500===o.t1?16:401===o.t1?18:20;break;case 16:return c="Internal Server Error",o.abrupt("break",21);case 18:return c="Invalid credentials",o.abrupt("break",21);case 20:c=o.t0;case 21:return o.next=23,Object(le.d)(Object(pe.h)(c));case 23:case"end":return o.stop()}}),me,null,[[1,11]])}function _e(e){var t,n;return ie.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.username,{body:JSON.stringify({username:t}),method:"POST",headers:{"Content-Type":"application/json"}},r.prev=2,null,r.next=6,Object(le.d)(Object(pe.b)(null.message));case 6:r.next=20;break;case 8:r.prev=8,r.t0=r.catch(2),r.t1=r.t0.status,r.next=500===r.t1?13:401===r.t1?15:17;break;case 13:return n="Internal Server Error",r.abrupt("break",18);case 15:return n="Invalid credentials",r.abrupt("break",18);case 17:n=r.t0;case 18:return r.next=20,Object(le.d)(Object(pe.a)(n));case 20:case"end":return r.stop()}}),he,null,[[2,8]])}function Se(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.l,ke);case 2:case"end":return e.stop()}}),xe)}function Ne(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.o,Ae);case 2:case"end":return e.stop()}}),ve)}function Re(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.q,Te);case 2:case"end":return e.stop()}}),ye)}function Ce(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.i,_e);case 2:case"end":return e.stop()}}),ge)}function De(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.c)(Se),Object(le.c)(Ne),Object(le.c)(Re),Object(le.c)(Ce)]);case 2:case"end":return e.stop()}}),Ee)}var Ie=De,Pe=n(37),Ue=ie.a.mark(Qe),Le=ie.a.mark(Me),Ge=ie.a.mark(He),ze=ie.a.mark(We),Fe=ie.a.mark(Be),qe=ie.a.mark(Je),Ye=ie.a.mark(Ve);function Qe(){var e;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(le.b)(je.b,"".concat(be.a,"categories/all"));case 2:return e=t.sent,t.next=5,Object(le.d)(Object(Pe.b)(e.data));case 5:case"end":return t.stop()}}),Ue)}function Me(){var e;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(le.b)(je.b,"".concat(be.a,"categories/getParentCategory"));case 2:return e=t.sent,t.next=5,Object(le.d)(Object(Pe.c)(e.data));case 5:case"end":return t.stop()}}),Le)}function He(e){var t,n,r,a;return ie.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.data,t.history,c.prev=1,c.next=4,Object(le.b)(je.c,"".concat(be.a,"categories/create"),n);case 4:return r=c.sent,c.next=7,Object(le.d)(Object(Pe.b)(r.data));case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),a=c.t0.message?c.t0.message:"Invalid Data",c.next=14,Object(le.d)(Object(Pe.a)({type:"create",message:a}));case 14:case"end":return c.stop()}}),Ge,null,[[1,9]])}function We(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.f,Qe);case 2:case"end":return e.stop()}}),ze)}function Be(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.b,He);case 2:case"end":return e.stop()}}),Fe)}function Je(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.g,Me);case 2:case"end":return e.stop()}}),qe)}function Ve(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.c)(We),Object(le.c)(Be),Object(le.c)(Je)]);case 2:case"end":return e.stop()}}),Ye)}var Xe=Ve,Ke=n(40),Ze=ie.a.mark(rt),$e=ie.a.mark(at),et=ie.a.mark(ct),tt=ie.a.mark(ot),nt=ie.a.mark(ut);function rt(){var e;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(le.b)(je.b,"".concat(be.a,"categories/all"));case 2:return e=t.sent,t.next=5,Object(le.d)(Object(Ke.c)(e.data));case 5:case"end":return t.stop()}}),Ze)}function at(e){var t,n,r,a;return ie.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.data,t.history,c.prev=1,c.next=4,Object(le.b)(je.c,"".concat(be.a,"queue/"),n);case 4:return r=c.sent,c.next=7,Object(le.d)(Object(Ke.c)(r.data));case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),a=c.t0.message?c.t0.message:"Invalid Data",c.next=14,Object(le.d)(Object(Ke.b)({type:"create",message:a}));case 14:case"end":return c.stop()}}),$e,null,[[1,9]])}function ct(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.h,rt);case 2:case"end":return e.stop()}}),et)}function ot(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.c,at);case 2:case"end":return e.stop()}}),tt)}function ut(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.c)(ct),Object(le.c)(ot)]);case 2:case"end":return e.stop()}}),nt)}var st=ut,it=ie.a.mark(lt);function lt(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.c)(Ie),Object(le.c)(Xe),Object(le.c)(st)]);case 2:case"end":return e.stop()}}),it)}var dt=Object($.a)(),bt=[dt];function pt(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,n=Object(Z.d)(ue,e,t(Z.a.apply(void 0,bt)));return dt.run(lt),n}n(156);var jt=n(173),ft=n(192),Ot=Object(jt.a)({});function mt(e){o.a.render(Object(h.jsx)(a.a.Fragment,{children:Object(h.jsx)(p.a,{store:pt(),children:Object(h.jsx)(ft.a,{theme:Ot,children:Object(h.jsx)(B,{userData:e})})})}),document.getElementById("root"))}var ht=Object(m.b)();if(ht){var xt='{"token":"'.concat(ht,'"}');Object(je.c)("".concat(be.a,"api-token-refresh/"),xt).then((function(e){mt(e.data.user)})).catch((function(e){new Promise((function(e,t){(new de.a).remove("token",{path:"/"}),e(!0)})).then((function(e){mt(null)}))}))}else mt(null);K()},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://mymedbook.in/backend/"},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(29),a=n.n(r),c=function(e,t,n){return a.a.post(e,t,n)},o=function(e,t){return a.a.put(e,t)},u=function(e,t){return a.a.get(e,t)},s=function(e,t){return a.a.delete(e,t)}},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(111),a=n(116),c=function(){var e=o();if(!e)return!1;var t=Object(r.a)(e),n=Date.now()/1e3;return!(t.exp<n)||(console.warn("access token expired"),!1)},o=function(){var e=(new a.a).get("token");return e&&"undefined"!=e?e:null},u=function(){var e=(new a.a).get("user");return e&&"undefined"!=e?"object"==typeof e?e:JSON.parse(e):null}},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"j",(function(){return j}));var r=n(5),a=function(e,t,n){return{type:r.l,payload:{username:e,password:t,history:n}}},c=function(e){return{type:r.n,payload:e}},o=function(e){return{type:r.m,payload:e}},u=function(e,t){return{type:r.q,payload:{data:e,history:t}}},s=function(e){return{type:r.s,payload:e}},i=function(e){return{type:r.r,payload:e}},l=function(e){return{type:r.o,payload:{history:e}}},d=function(e){return{type:r.k,payload:e}},b=function(e){return{type:r.j,payload:e}},p=function(e){return{type:r.w,payload:e}},j=function(e){return{type:r.t,payload:e}}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(5),a=function(e){return{type:r.u,payload:e}},c=function(e){return{type:r.x,payload:e}},o=function(e){return{type:r.v,payload:e}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(5),a=function(e,t){return{type:r.c,payload:{data:e,history:t}}},c=function(e){return{type:r.y,payload:e}},o=function(e){return{type:r.z,payload:e}}},5:function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"m",(function(){return c})),n.d(t,"q",(function(){return o})),n.d(t,"s",(function(){return u})),n.d(t,"r",(function(){return s})),n.d(t,"o",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"w",(function(){return p})),n.d(t,"t",(function(){return j})),n.d(t,"u",(function(){return f})),n.d(t,"f",(function(){return O})),n.d(t,"x",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"A",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"v",(function(){return E})),n.d(t,"y",(function(){return w})),n.d(t,"h",(function(){return k})),n.d(t,"p",(function(){return A})),n.d(t,"c",(function(){return T})),n.d(t,"B",(function(){return _})),n.d(t,"e",(function(){return S})),n.d(t,"z",(function(){return N}));var r="LOGIN_USER",a="LOGIN_USER_SUCCESS",c="LOGIN_USER_FAILED",o="REGISTER_USER",u="REGISTER_USER_SUCCESS",s="REGISTER_USER_FAILED",i="LOGOUT_USER",l="FORGET_PASSWORD",d="FORGET_PASSWORD_SUCCESS",b="FORGET_PASSWORD_FAILED",p="SET_LOADING",j="SET_BDATA",f="SET_CATEGORY_DATA",O="FETCH_CATEGORY_DATA",m="SET_PARENT_CATEGORY_DATA",h="FETCH_PARENT_CATEGORY_DATA",x="CATEGORY_LIST",v="CREATE_CATEGORY",y="UPDATE_CATEGORY",g="DELETE_CATEGORY",E="SET_CATEGORY_ERROR",w="SET_QUEUE_DATA",k="FETCH_QUEUE_DATA",A="QUEUE_LIST",T="CREATE_QUEUE",_="UPDATE_QUEUE",S="DELETE_QUEUE",N="SET_QUEUE_ERROR"},68:function(e,t,n){"use strict";var r=n(31);n.d(t,"b",(function(){return r.c})),n.d(t,"c",(function(){return r.e})),n.d(t,"d",(function(){return r.f})),n.d(t,"e",(function(){return r.g})),n.d(t,"f",(function(){return r.j})),n.d(t,"g",(function(){return r.k}));n(37);var a=n(40);n.d(t,"a",(function(){return a.a}))},90:function(e,t,n){"use strict";n(0);var r=n(25),a=n(163),c=n(3),o=Object(a.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",flexDirection:"column",minHeight:"110vh",maxWidth:"900px",width:"100%","& .upper-section":{flex:2},"& .middle-section":{flex:1},"& .footer-section":{flex:1},"& .bold":{fontWeight:"600"},"& .gray":{color:"gray"}}}}));t.a=function(){var e=o();return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"m-10",children:Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)("div",{className:"upper-section",children:Object(c.jsxs)(r.a,{container:!0,children:[Object(c.jsxs)(r.a,{item:!0,xs:6,children:[Object(c.jsxs)("div",{className:"logo",children:[Object(c.jsx)("img",{src:"./img/logo.png",alt:""}),Object(c.jsx)("div",{className:"logo-text",children:Object(c.jsxs)("h3",{children:[Object(c.jsx)("span",{className:"fw-thin",style:{color:"#3b51a9"},children:"My"}),Object(c.jsx)("span",{className:"fw-bold ",style:{color:"#27b1ff"},children:"Medbook"})]})})]}),Object(c.jsxs)("div",{className:"patient-details mt-9",children:[Object(c.jsx)("h5",{className:"fw-thin text-uppercase",children:"Patient Details"}),Object(c.jsx)("div",{className:"patient-name mt-2",children:"CHINMAYI V S"}),Object(c.jsx)("div",{className:"patient-addr",style:{color:"gray"},children:"#20, 8th Main, 5th Cross, 7425631 Hanumantha Nagara, Bangalore - 541102."}),Object(c.jsx)("div",{className:"email gray mt-4",children:"chinmayi@gmail.com"}),Object(c.jsx)("div",{className:"mobile gray mt-1",children:"+91 8751236547"})]})]}),Object(c.jsx)(r.a,{item:!0,xs:6,style:{textAlign:"end",display:"flex",justifyContent:"flex-end"},children:Object(c.jsxs)(r.a,{item:!0,sm:8,children:[Object(c.jsx)("div",{className:"clinic-name bold",children:"SRL CLINIC"}),Object(c.jsx)("div",{className:"doctor-name ",children:"Dr. Krishnamurthy M C"}),Object(c.jsx)("div",{className:"doctor-addr gray",children:"#232/1, 4th Cross, 2nd Stage, Vijay Nagar, Bangalore - 570012"}),Object(c.jsx)("div",{className:"doctor-email gray",style:{marginTop:"2em"},children:"krishnamurtghy@gmail.com"}),Object(c.jsx)("div",{className:"doctor-mobile gray",children:"0825 8563214"}),Object(c.jsx)("h3",{style:{fontWeight:500},className:"mt-4",children:"Invoice"}),Object(c.jsxs)("div",{className:"invoice-no mt-2",children:[Object(c.jsx)("h6",{children:"Invoice No."}),Object(c.jsx)("div",{className:"no gray",children:"7425631"})]}),Object(c.jsxs)("div",{className:"invoice-date mt-2",children:[Object(c.jsx)("h6",{children:"Invoice Date."}),Object(c.jsx)("div",{className:"date gray",children:"01-01-2022"})]})]})})]})}),Object(c.jsx)("div",{className:"middle-section",children:Object(c.jsxs)(r.a,{container:!0,children:[Object(c.jsx)(r.a,{item:!0,sm:3,children:Object(c.jsx)("h5",{children:"Description"})}),Object(c.jsx)(r.a,{item:!0,sm:3,children:Object(c.jsx)("h5",{children:"Quantity"})}),Object(c.jsx)(r.a,{item:!0,sm:3,children:Object(c.jsx)("h5",{children:"Direction Of Intake"})}),Object(c.jsx)(r.a,{item:!0,sm:3,children:Object(c.jsx)("h5",{style:{textAlign:"end"},children:"Amount"})})]})}),Object(c.jsxs)("div",{className:"footer-section mt-3",children:[Object(c.jsx)("h6",{children:"OTHER INFORMATION"}),Object(c.jsx)("div",{className:"clinic-addr mt-2 gray",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem"}),Object(c.jsxs)(r.a,{container:!0,className:"mt-8",children:[Object(c.jsx)(r.a,{item:!0,xs:6,children:Object(c.jsx)("h5",{className:"gray bold",children:"Thank You for Trusting Us"})}),Object(c.jsx)(r.a,{item:!0,xs:6})]})]})]})})}}},[[157,7,9]]]);
//# sourceMappingURL=main.ad800f73.chunk.js.map