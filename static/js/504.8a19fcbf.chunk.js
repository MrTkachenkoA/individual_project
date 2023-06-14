"use strict";(self.webpackChunkindividual_project=self.webpackChunkindividual_project||[]).push([[504],{877:function(n,e,r){r.d(e,{RF:function(){return d},T8:function(){return f},Y5:function(){return p},Zm:function(){return c},fD:function(){return l},wr:function(){return s}});var t=r(5861),o=r(4687),i=r.n(o),a=r(3263);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="14ce8915ef52d801924d89668f2ca827",c="https://image.tmdb.org/t/p/original",s=function(){var n=(0,t.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/all/day?api_key=".concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4146:function(n,e,r){r.d(e,{e:function(){return v}});var t,o,i,a,u=r(7689),c=r(877),s=r(168),p=r(82),d=r(1087),l=p.ZP.ul(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  margin: 40px 0;\n  gap: 30px;\n"]))),f=p.ZP.li(o||(o=(0,s.Z)(["\n  width: 240px;\n  background-color: #740101ba;\n  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),\n    0 11px 9px -5px rgb(0 0 0 / 75%);\n  border-radius: 5px;\n  overflow: hidden;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.1;\n  }\n"]))),h=(0,p.ZP)(d.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n"]))),x=p.ZP.p(a||(a=(0,s.Z)(["\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n"]))),g=r(8384),m=r(184),v=function(n){var e=n.moviesArr,r=(0,u.TH)();if(e!==[])return(0,m.jsx)(l,{children:e.map((function(n){var e=n.id,t=n.original_title,o=n.original_name,i=n.poster_path;return(0,m.jsx)(f,{tabIndex:"2",children:(0,m.jsxs)(h,{to:"/movies/".concat(e),state:{from:r},tabIndex:"-1",children:[i?(0,m.jsx)("img",{src:c.Zm+i,alt:t,width:240,height:320}):(0,m.jsx)("img",{src:g,alt:"defaulLogo",width:240,height:320}),(0,m.jsx)(x,{children:t||o})]})},e)}))})}},5504:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,i,a,u,c=r(5861),s=r(9439),p=r(4687),d=r.n(p),l=r(2791),f=r(1087),h=r(7689),x=r(8820),g=r(877),m=r(1322),v=r(4146),b=r(168),w=r(82),Z=w.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n"]))),y=w.ZP.h2(o||(o=(0,b.Z)(["\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  color: white;\n"]))),k=w.ZP.form(i||(i=(0,b.Z)(["\n  position: relative;\n  margin-bottom: 30px;\n"]))),j=w.ZP.input(a||(a=(0,b.Z)(["\n  min-width: 250px;\n  height: 30px;\n  font-size: 16px;\n  padding: 5px 30px 5px 10px;\n  color: white;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid white;\n  transition: border-color 250ms linear;\n  &:hover,\n  &:focus {\n    outline: none;\n    border: none;\n    border-bottom: 2px solid white;\n  }\n"]))),P=w.ZP.button(u||(u=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  transform: translateY(-50%);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: white;\n  transition: color 250ms linear;\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),C=r(9346),_=r(184),q=function(){var n,e=(0,l.useState)(""),r=(0,s.Z)(e,2),t=r[0],o=r[1],i=(0,l.useState)([]),a=(0,s.Z)(i,2),u=a[0],p=a[1],b=(0,l.useState)(!0),w=(0,s.Z)(b,2),q=w[0],O=w[1],S=(0,f.lr)(),T=(0,s.Z)(S,2),A=T[0],E=T[1],L=null!==(n=A.get("query"))&&void 0!==n?n:"",N=(0,h.s0)();(0,l.useEffect)((function(){if(!L)return p([]),void O(!1);!function(){var n=(0,c.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.T8)(L);case 3:if(0!==(e=n.sent).data.results.length){n.next=9;break}return p([]),O(!1),(0,C.N)("Not found! Try another query"),n.abrupt("return",N("/movies"));case 9:p(e.data.results),O(!1),n.next=18;break;case 13:return n.prev=13,n.t0=n.catch(0),console.log("Oops! Something went wrong! Try again!"),(0,C.N)("Oops! Something went wrong! Try again!"),n.abrupt("return");case 18:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}()()}),[L]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)(y,{children:"Movie search"}),(0,_.jsxs)(k,{onSubmit:function(n){return n.preventDefault(),O(!0),t.trim()?L===t.trim().toLowerCase()?(O(!1),void(0,C.e)("Enter a new query")):void E({query:t.trim().toLowerCase()}):(O(!1),void(0,C.e)("Enter a query to search"))},children:[(0,_.jsx)(j,{onChange:function(n){o(n.target.value)},value:t,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter a search query"}),(0,_.jsx)(P,{type:"submit",children:(0,_.jsx)(x.RB5,{})})]})]}),(0,_.jsx)(v.e,{moviesArr:u}),(0,_.jsx)(m.a,{loading:q})]})}},9346:function(n,e,r){r.d(e,{N:function(){return o},e:function(){return i}});r(2542);var t=r(7596),o=function(n){return t.Am.error(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},i=function(n){return t.Am.info(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}},8384:function(n,e,r){n.exports=r.p+"static/media/logo-movie-tape-cinema.bed37fbfee5bd8f087b5.png"}}]);
//# sourceMappingURL=504.8a19fcbf.chunk.js.map