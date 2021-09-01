(this["webpackJsonppokelist-web"]=this["webpackJsonppokelist-web"]||[]).push([[0],{41:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var c,a,r,i,o,s,l,d,j,b,x,u,p,h,m,O,f,g,v,w,k,y,N,C,S,P,F,B=t(1),z=t.n(B),A=t(36),M=t.n(A),D=t(2),L=(t(41),t(14)),I=t(13),_=t.n(I),E=t(15),J=t(16),T=t(4),Y=[{name:"normal",color:"#A8A878"},{name:"fire",color:"#F08030"},{name:"water",color:"#6890F0"},{name:"grass",color:"#78C850"},{name:"electric",color:"#F8D030"},{name:"ice",color:"#98D8D8"},{name:"fighting",color:"#C03028"},{name:"poison",color:"#A040A0"},{name:"ground",color:"#E0C068"},{name:"flying",color:"#A890F0"},{name:"psychic",color:"#F85888"},{name:"bug",color:"#A8B820"},{name:"rock",color:"#B8A038"},{name:"ghost",color:"#705898"},{name:"dark",color:"#705848"},{name:"dragon",color:"#7038F8"},{name:"steel",color:"#B8B8D0"},{name:"fairy",color:"#F0B6BC"}],G=function(){var e=Object(J.a)(_.a.mark((function e(n){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://pokeapi.co/api/v2/").concat(n));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),H=function(e,n){var t=!1;"#"===e[0]&&(e=e.slice(1),t=!0);var c=parseInt(e,16),a=(c>>16)+n;a>255?a=255:a<0&&(a=0);var r=(c>>8&255)+n;r>255?r=255:r<0&&(r=0);var i=(255&c)+n;return i>255?i=255:i<0&&(i=0),(t?"#":"")+(i|r<<8|a<<16).toString(16)},R=t(0),W=Object(B.createContext)(),X=function(e){var n=Object(B.useState)([]),t=Object(T.a)(n,2),c=t[0],a=t[1],r=Object(B.useState)("pokemon?limit=15"),i=Object(T.a)(r,2),o=i[0],s=i[1];Object(B.useEffect)((function(){l()}),[]);var l=Object(B.useCallback)(Object(J.a)(_.a.mark((function e(){var n,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(o);case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,s(t.next.substring(26,t.next.length-1)),t.results.map(function(){var e=Object(J.a)(_.a.mark((function e(n){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("pokemon/".concat(n.name));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a((function(e){return[].concat(Object(E.a)(e),[c])}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})))),d=[c,a,l];return Object(R.jsx)(W.Provider,{value:d,children:e.children})},q=Object(B.createContext)(),K=function(e){var n=Object(B.useState)(JSON.parse(localStorage.getItem("capturedPokemons")||"[]")),t=Object(T.a)(n,2),c=[t[0],t[1]];return Object(R.jsx)(q.Provider,{value:c,children:e.children})},Q=t(3),U=Q.a.div(c||(c=Object(D.a)(["\n  nav {\n    background-color: #292929;\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 5px 0;\n    position: fixed;\n    z-index: 2;\n  }\n"]))),V=Q.a.div(a||(a=Object(D.a)(["\n  color: #f5f5f5;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  &:hover {\n    background-color: #15171c;\n  }\n"]))),Z=function(){return Object(R.jsx)(U,{children:Object(R.jsxs)("nav",{children:[Object(R.jsx)(L.b,{className:"link-no-decoration",to:"/pokelist-web",children:Object(R.jsx)(V,{children:"PokeList"})}),Object(R.jsx)(L.b,{className:"link-no-decoration",to:"/pokelist-web/my-pokemon",children:Object(R.jsx)(V,{children:"My Pokemon"})})]})})},$=t(6),ee=t(18),ne=function(e){var n=e.src,t=Q.a.img(r||(r=Object(D.a)(["\n    width: 100%;\n    height: inherit;\n    object-fit: contain;\n    object-position: bottom;\n    margin: 0 auto;\n  "])));return Object(R.jsx)(t,{src:n})},te={s:576,m:768,l:992,xl:1200},ce=function(e){var n=Object.keys(te).map((function(e){return[e,te[e]]})).reduce((function(n,t){var c=Object(T.a)(t,2),a=c[0],r=c[1];return e===a?[].concat(Object(E.a)(n),["@media (min-width: ".concat(r,"px)")]):n}),[]);return Object(T.a)(n,1)[0]},ae=Object(ee.a)(i||(i=Object(D.a)(["\n  from {\n    box-shadow: none;\n  }\n  to {\n    transform: translate(0, -10px);\n    box-shadow: 0 10px 10px #00000050;\n  }\n"]))),re=Q.a.div(o||(o=Object(D.a)(["\n  background-color: #ffffff99;\n  display: flex;\n  padding: 16px;\n  margin: 10px 0;\n  border-radius: 10px;\n  &:hover {\n    box-shadow: 0 10px 10px #00000050;\n  }\n\n  .card-image {\n    height: 100px;\n    width: 100px;\n    margin-right: 16px;\n  }\n\n  .card-info {\n    flex-grow: 1;\n  }\n\n  .nickname, .name {\n    margin-bottom: 0.5rem;\n  }\n\n  "," {\n    display: block;\n    &:hover {\n      animation: "," 0.1s ease forwards;\n    }\n\n    .card-image {\n      height: 150px;\n      width: 150px;\n      margin: 16px auto;\n      padding: 24px;\n    }\n    .card-info {\n      text-align: center;\n    }\n  }\n"])),ce("s"),ae),ie=function(e){var n=e.pokemon,t=e.countOwned,c=e.children;return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(re,{children:[Object(R.jsx)("div",{className:"card-image display-flex-centered",children:Object(R.jsx)(ne,{src:n.sprites.other.dream_world.front_default,alt:n.name})}),Object(R.jsxs)("div",{className:"card-info",children:[n.nickname&&Object(R.jsx)("h2",{className:"nickname capitalize",children:n.nickname}),Object(R.jsx)("h3",{className:"name capitalize",children:n.name}),null!=t&&Object(R.jsxs)("p",{className:"text-owned",children:["owned: ",t]})]}),Object(R.jsx)("div",{children:c})]})})},oe="#fff",se="#CC0000",le="#3B4CCA",de="#f5f5f5",je=function(e){var n=e.width,t=void 0===n?"auto":n,c=e.bgColor,a=void 0===c?de:c,r=e.children,i=e.callbackFunc,o=void 0===i?function(){}:i,l=Q.a.button(s||(s=Object(D.a)(["\n    background-color: ",";\n    padding: 0.5rem 2rem;\n    border: none;\n    border-radius: 50px;\n    width: ",";\n    &:hover {\n      background-color: ",";\n    }\n  "])),a,t,H(a,-20));return Object(R.jsx)(l,{onClick:function(){return o()},children:r})},be=Q.a.div(l||(l=Object(D.a)(["\n  .list-wrapper {\n    margin: 0 16px;\n    display: flex;\n    flex-flow: column nowrap;\n  }\n\n  .pokemon-card {\n    display: flex;\n  }\n\n  "," {\n    .list-wrapper {\n      margin: 0 auto;\n      flex-flow: row wrap;\n      justify-content: space-evenly;\n    }\n  }\n"])),ce("s")),xe=function(){var e=Object(B.useContext)(W),n=Object(T.a)(e,3),t=n[0],c=n[1],a=n[2],r=Object(B.useContext)(q),i=Object(T.a)(r,1)[0];return Object(R.jsxs)(be,{children:[Object(R.jsx)("h1",{className:"text-centered",children:"Pokemons List"}),Object(R.jsx)("div",{className:"list-wrapper",children:t.map((function(e,n){return Object(R.jsx)("div",{children:Object(R.jsx)(L.b,{className:"link-no-decoration",to:"details/".concat(e.name),children:Object(R.jsx)(ie,{pokemon:e,countOwned:(t=e.name,i.filter((function(e){return e.name===t})).length)})})},n);var t}))}),c&&Object(R.jsx)("div",{className:"display-flex-centered",children:Object(R.jsx)(je,{bgColor:le,callbackFunc:function(){return a()},children:Object(R.jsx)("h2",{className:"mx-0 my-0 text-white",children:"Load more"})})})]})},ue=t(33),pe=Q.a.div(d||(d=Object(D.a)(["\n  max-height: 300px;\n  overflow-y: scroll;\n"]))),he=Q.a.div(j||(j=Object(D.a)(["\n  background-color: ",";\n  width: auto;\n  padding: 10px;\n  border-bottom: 2px solid ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),oe,de,de),me=function(e){var n=e.data,t=e.property;return Object(R.jsx)(pe,{children:Object(R.jsx)("div",{children:n&&n.map((function(e,n){return Object(R.jsx)(he,{children:Object(R.jsxs)("p",{className:"my-0 capitalize",children:[n+1,". ",e["".concat(t)]]})},n)}))})})},Oe=t(20),fe=Q.a.div(b||(b=Object(D.a)(["\n    border-radius: 100px;\n    width: auto;\n    color: #f5f5f5;\n    padding: 5px 10px;\n    margin-right: 8px;\n  "]))),ge=function(e){var n=Y.find((function(n){return n.name===e}));return"background-color: ".concat(n?n.color:"#d5d5d5")},ve=function(e){return Object(R.jsx)(fe,{className:Object(Oe.a)(x||(x=Object(D.a)(["",""])),ge(e.name)),children:Object(R.jsx)("span",{className:"text-white",children:e.name})})},we=Q.a.div(u||(u=Object(D.a)(["\n    display: flex;\n  "]))),ke=function(e){return Object(R.jsx)(we,{children:e.types&&e.types.map((function(e,n){return Object(R.jsx)(ve,{name:e.type.name},n)}))})},ye=Q.a.div(p||(p=Object(D.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n"]))),Ne=Q.a.div(h||(h=Object(D.a)(["\n  background-color: #00000099;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n"]))),Ce=Q.a.div(m||(m=Object(D.a)(["\n  width: 100%;\n  height: 80vh;\n  border-radius: 10px 10px 0 0;\n  background-color: #fff;\n  display: flex;\n  align-self: flex-end;\n  justify-content: center;\n  align-items: center;\n\n  "," {\n    align-self: center;\n    height: auto;\n    border-radius: 10px;\n    width: 50%;\n    height: 50vh;\n    padding: 32px 24px;\n  }\n"])),ce("s")),Se=Q.a.input(O||(O=Object(D.a)(["\n  height: 32px;\n  padding: 2px 6px;\n  text-align: center;\n  background-color: ",";\n  border: 2px solid ",";\n  font-size: 16px;\n"])),de,H(de,-20)),Pe=function(e){var n=e.closeModal,t=e.isCaptured,c=e.pokemon,a=e.saveCatchedPokemon,r=e.capturedPokemons,i=Object(B.useState)(""),o=Object(T.a)(i,2),s=o[0],l=o[1],d=Object(B.useState)(null),j=Object(T.a)(d,2),b=j[0],x=j[1];Object(B.useEffect)((function(){return x(null)}),[s]);var u=function(){return Object(R.jsxs)("div",{className:"text-centered",children:[Object(R.jsx)("h2",{children:"Failed to catch"}),Object(R.jsx)("p",{children:"Maybe try again?"}),Object(R.jsx)(je,{callbackFunc:function(){return n(!1)},children:"Close"})]})};return Object(R.jsx)(ye,{children:Object(R.jsx)(Ne,{className:"overlay display-flex-centered",children:Object(R.jsxs)(Ce,{children:[t&&Object(R.jsxs)("div",{className:"text-centered",children:[Object(R.jsxs)("h2",{className:"capitalize",children:["You catched ",c.name,"!"]}),Object(R.jsx)("p",{children:"Give it a catchy nickname"}),Object(R.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!=s?r.find((function(e){return e.nickname.toLowerCase()===s.toLowerCase()}))?x("Nickname has been taken"):a(s):x("Nickname should not be empty")}(e)},children:[Object(R.jsxs)("div",{className:Object(Oe.a)(f||(f=Object(D.a)(["margin-bottom: 1rem"]))),children:[Object(R.jsx)(Se,{name:"nickname",type:"text",value:s,onChange:function(e){return l(e.target.value)}}),b&&Object(R.jsx)("div",{children:Object(R.jsx)("small",{className:"text-error",children:b})})]}),Object(R.jsx)("div",{children:Object(R.jsx)(je,{bgColor:le,type:"submit",children:Object(R.jsx)("h4",{className:"text-white mx-0 my-0",children:"Save"})})})]})]}),!t&&Object(R.jsx)(u,{})]})})})},Fe=t.p+"static/media/pokeball.3b2396ac.svg",Be=Q.a.div(g||(g=Object(D.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n"]))),ze=Q.a.div(v||(v=Object(D.a)(["\n  background-color: #00000099;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n"]))),Ae=Object(ee.a)(w||(w=Object(D.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Me=Q.a.div(k||(k=Object(D.a)(["\n  background-color: #fff;\n  width: 50px;\n  height: 50px;\n  border: 10px solid #fff;\n  border-radius: 50%;\n  animation: "," 2s linear infinite;\n"])),Ae),De=function(){return Object(R.jsx)(Be,{children:Object(R.jsx)(ze,{className:"overlay display-flex-centered",children:Object(R.jsx)(Me,{children:Object(R.jsx)(ne,{src:Fe})})})})},Le=Q.a.div(y||(y=Object(D.a)(["\n  margin: 16px auto;\n\n  label {\n    display: flex;\n    justify-content: space-between;\n  }\n  .meter { \n    height: 10px;  <em>/* Can be anything */</em>\n    position: relative;\n    background: #555;\n    border-radius: 25px;\n    padding: 8px;\n    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);\n}\n  .meter > span {\n    display: block;\n    height: 100%;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    background-color: rgb(43,194,83);\n    background-image: linear-gradient(\n      center bottom,\n      rgb(43,194,83) 37%,\n      rgb(84,240,84) 69%\n    );\n    box-shadow: \n      inset 0 2px 5px  rgba(255,255,255,0.3),\n      inset 0 -2px 6px rgba(0,0,0,0.4);\n    position: relative;\n    overflow: hidden;\n  }\n"]))),Ie=function(e){var n=e.statName,t=e.points;return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(Le,{children:[Object(R.jsxs)("label",{children:[Object(R.jsx)("span",{className:"capitalize",children:n}),Object(R.jsx)("span",{children:t})]}),Object(R.jsx)("div",{className:"meter",children:Object(R.jsx)("span",{className:Object(Oe.a)(N||(N=Object(D.a)(["width: ","%"])),t)})})]})})},_e=Q.a.div(C||(C=Object(D.a)(["\n  .content-wrap {\n    padding: 0 16px;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n  }\n  .content-left, .content-right {\n    width: 100%;\n  }\n  \n  .image-wrapper {\n    max-width: 200px;\n    max-height:200px;\n    margin-bottom: 3rem;\n  }\n\n  .more-info {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  "," {\n    .content-wrap {\n      flex-flow: row nowrap;\n      justify-content: space-between;\n    }\n    .content-left {\n      width: 30%;\n    }\n    .content-right {\n      width: 68%;\n    }\n  }\n"])),ce("s")),Ee=Q.a.div(S||(S=Object(D.a)(["\n  background-color: #ffffff;\n  border-radius: 10px;\n  padding: 24px;\n  margin-bottom: 24px;\n"]))),Je=function(e){var n=e.match,t=Object(B.useState)({}),c=Object(T.a)(t,2),a=c[0],r=c[1],i=Object(B.useContext)(q),o=Object(T.a)(i,2),s=o[0],l=o[1],d=Object(B.useState)(!1),j=Object(T.a)(d,2),b=j[0],x=j[1],u=Object(B.useState)([]),p=Object(T.a)(u,2),h=p[0],m=p[1],O=Object(B.useState)([]),f=Object(T.a)(O,2),g=f[0],v=f[1],w=Object(B.useState)([]),k=Object(T.a)(w,2),y=k[0],N=k[1],C=Object(B.useState)(!1),S=Object(T.a)(C,2),P=S[0],F=S[1],z=Object(B.useState)(!1),A=Object(T.a)(z,2),M=A[0],D=A[1];Object(B.useEffect)((function(){L(),N((function(){return s.filter((function(e){return e.name===n.params.pokemonName}))}))}),[]);var L=function(){var e=Object(J.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("pokemon/".concat(n.params.pokemonName));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c),m((function(){return c.moves.map((function(e){return e.move}))})),v((function(){return c.abilities.map((function(e){return e.ability}))}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(_e,{className:"pokemons-list",children:[Object(R.jsx)("h1",{className:"text-centered",children:"Pokemon Details"}),Object(R.jsxs)("div",{className:"content-wrap",children:[Object(R.jsxs)("div",{className:"content-left",children:[Object(R.jsxs)(Ee,{children:[Object(R.jsx)("div",{className:"image-wrapper mx-auto",children:Object(R.jsx)(ne,{src:a.sprites&&a.sprites.other.dream_world.front_default,alt:a.name})}),Object(R.jsx)("div",{children:Object(R.jsx)("h2",{className:"capitalize text-centered",children:a.name})}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"more-info",children:[Object(R.jsx)("h4",{children:"Weight"}),Object(R.jsxs)("p",{children:[a.weight," kg"]})]}),Object(R.jsxs)("div",{className:"more-info",children:[Object(R.jsx)("h4",{children:"Height"}),Object(R.jsxs)("p",{children:[a.height/10," m"]})]}),Object(R.jsxs)("div",{className:"more-info",children:[Object(R.jsx)("h4",{children:"Base XP"}),Object(R.jsx)("p",{children:a.base_experience})]})]}),Object(R.jsx)(ke,{types:a.types}),Object(R.jsx)("div",{className:"my",children:Object(R.jsx)(je,{centered:!0,width:"100%",bgColor:le,callbackFunc:function(){return D(!0),setTimeout((function(){return D(!1)}),1e3),setTimeout((function(){return F(!0)}),1e3),void x(Math.random()>=.5)},children:Object(R.jsx)("h2",{className:"mx-0 my-0 text-white",children:"Catch"})})})]}),Object(R.jsxs)(Ee,{children:[Object(R.jsxs)("h2",{className:"capitalize",children:["My ",a.name," (",y.length,")"]}),y.length>0?Object(R.jsx)(me,{data:y,property:"nickname"}):Object(R.jsx)("div",{children:Object(R.jsxs)("p",{children:["No ",a.name," captured yet"]})})]})]}),Object(R.jsxs)("div",{className:"content-right",children:[Object(R.jsxs)(Ee,{children:[Object(R.jsx)("h2",{children:"Abilities"}),Object(R.jsx)(me,{data:g,property:"name"})]}),Object(R.jsxs)(Ee,{children:[Object(R.jsx)("h2",{children:"Stats"}),a.stats&&a.stats.map((function(e,n){return Object(R.jsx)(Ie,{statName:e.stat.name,points:e.base_stat},n)}))]}),Object(R.jsxs)(Ee,{children:[Object(R.jsx)("h2",{children:"Moves"}),Object(R.jsx)(me,{data:h,property:"name"})]})]})]}),M&&Object(R.jsx)(De,{}),P&&Object(R.jsx)(Pe,{closeModal:function(){F(!1)},saveCatchedPokemon:function(e){return n=e,F(!1),void l((function(e){var t=[].concat(Object(E.a)(e),[Object(ue.a)(Object(ue.a)({},a),{},{nickname:n})]);return localStorage.setItem("capturedPokemons",JSON.stringify(t)),t}));var n},isCaptured:b,pokemon:a,capturedPokemons:s})]})},Te=Q.a.div(P||(P=Object(D.a)(["\n  .list-wrapper {\n    margin: 0 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    align-content: stretch;\n  }\n\n  .pokemon-card {\n    display: flex;\n  }\n\n  .card-menu {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-end;\n  }\n\n  .btn-menu {\n    margin-bottom: 14px;\n  }\n\n  "," {\n    .list-wrapper {\n      margin: 0 auto;\n      flex-flow: row wrap;\n      justify-content: space-around;\n    }\n    .card-menu {\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-evenly;\n    }\n  }\n"])),ce("s")),Ye=function(){var e=Object(B.useContext)(q),n=Object(T.a)(e,2),t=n[0],c=n[1];return Object(R.jsxs)(Te,{children:[Object(R.jsx)("h1",{className:"text-centered",children:"My Pokemons"}),Object(R.jsxs)("div",{className:"list-wrapper",children:[0===t.length&&Object(R.jsxs)("div",{className:"text-centered",children:[Object(R.jsx)("h3",{children:"You haven't catched any Pokemon (yet)!"}),Object(R.jsx)("p",{children:'No worries, just go to the PokeList > select a Pokemon > hit "Catch" button'})]}),t.map((function(e,n){return Object(R.jsx)("div",{children:Object(R.jsx)(ie,{pokemon:e,children:Object(R.jsxs)("div",{className:"card-menu",children:[Object(R.jsx)("div",{className:"btn-menu",children:Object(R.jsx)(L.b,{className:"link-no-decoration",to:"details/".concat(e.name),children:Object(R.jsx)(je,{bgColor:le,children:Object(R.jsx)("h4",{className:"text-white my-0",children:"Detail"})})})}),Object(R.jsx)("div",{className:"btn-menu",children:Object(R.jsx)(je,{bgColor:se,callbackFunc:function(){return function(e){var n=t.indexOf(e),a=Object(E.a)(t);a.splice(n,1),localStorage.setItem("capturedPokemons",JSON.stringify(a)),c(a)}(e)},children:Object(R.jsx)("h4",{className:"text-white my-0",children:"Release"})})})]})})},n)}))]})]})},Ge=function(){return Object(R.jsxs)($.d,{children:[Object(R.jsx)($.a,{path:"/",to:"/pokelist-web"}),Object(R.jsx)($.b,{path:"/pokelist-web",exact:!0,component:xe}),Object(R.jsx)($.b,{path:"/pokelist-web/details/:pokemonName",component:Je}),Object(R.jsx)($.b,{path:"/pokelist-web/my-pokemon",exact:!0,component:Ye})]})},He=Q.a.div(F||(F=Object(D.a)(["\n    width: 100%;\n    padding: 100px 0;\n    margin: 0 auto;\n    aspect-ratio: 100 / 29;\n\n    "," {\n      width: 80%;\n    }\n  "])),ce("m"));var Re=function(){return Object(R.jsx)("div",{className:"app",children:Object(R.jsxs)(L.a,{children:[Object(R.jsx)(Z,{}),Object(R.jsx)(X,{children:Object(R.jsx)(K,{children:Object(R.jsx)(He,{children:Object(R.jsx)(Ge,{})})})})]})})},We=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};M.a.render(Object(R.jsx)(z.a.StrictMode,{children:Object(R.jsx)(Re,{})}),document.getElementById("root")),We()}},[[49,1,2]]]);
//# sourceMappingURL=main.1d6b6e3a.chunk.js.map