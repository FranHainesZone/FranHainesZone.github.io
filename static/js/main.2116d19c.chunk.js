(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,t,e){n.exports=e(29)},28:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e.n(r),i=e(12),c=e.n(i),a=(e(24),e(13)),s=e.n(a),l=e(0),u=e(30),d=e(31),b=e(32),f=e(4),g=e(8),p=e(15),h={background:"#404049",colorLogo:"#70DCBA",colorLogoHover:"#57ad92",colorTagline:"#ff9650",body:"#FFFFFF",fontLogo:"Fredoka One",fontBody:"Lato",fontHeading:"Baloo Bhai 2",fontNav:"Baloo Bhai 2"},O={toggleBackground:"#3e5a98",toggleForeground:"#fafbb2;",togglePosition:"30px"},m={linksNavUnderline:"#B05589"},j={circleForeground:"#ff58ae",circleBackgroundStart:"#70DCBA",circleBackgroundEnd:"#404049",triangle:"#3f51b5"},x=Object(f.a)({},h,O,m,j),v={background:"#70DCBA",colorLogo:"#3f51b5",colorLogoHover:"#263377",colorTagline:"#be4b02",body:"#404049",fontLogo:"Fredoka One",fontBody:"Lato",fontHeading:"Nunito",fontNav:"Nunito"},k={toggleBackground:"#93e6ef",toggleForeground:"#fbde0d",togglePosition:"0px"},w={linksNavUnderline:"#fdd7eb"},C={circleForeground:"#ff58ae",circleBackgroundStart:"#70DCBA",circleBackgroundEnd:"#fdd7eb",triangle:"#3f51b5"},y=Object(f.a)({},v,k,w,C),B=function(n){return"dark"===n?x:y},F=Object(r.createContext)({dark:!1,toggle:function(){}}),z=function(){return Object(r.useContext)(F)},N=function(n){var t=n.children,e=function(){var n=Object(r.useState)({dark:!1,hasThemeMounted:!1}),t=Object(g.a)(n,2),e=t[0],o=t[1];return Object(r.useEffect)(function(){var n="true"===localStorage.getItem("dark");o(Object(f.a)({},e,{dark:n,hasThemeMounted:!0}))},[]),[e,o]}(),i=Object(g.a)(e,2),c=i[0],a=i[1];if(!c.hasThemeMounted)return o.a.createElement("div",null);var s=c.dark?B("dark"):B("light");return o.a.createElement(p.a,{theme:s},o.a.createElement(F.Provider,{value:{dark:c.dark,toggle:function(){var n=!c.dark;localStorage.setItem("dark",JSON.stringify(n)),a(Object(f.a)({},c,{dark:n}))}}},t))},T=e(2);function E(){var n=Object(T.a)([""]);return E=function(){return n},n}function L(){var n=Object(T.a)(["\n    display: none;\n  "]);return L=function(){return n},n}function H(){var n=Object(T.a)(["\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    left: 0%;\n    transform: translate(-50%, -50%);\n    display: inline-block;\n    width: 55px;\n    height: 30px;\n    background: ",';\n    border-radius: 3em;\n    border: 0.125rem #ffffff solid;\n    transition: background 0.25s ease-in-out;\n    cursor: pointer;\n    @media (min-width: 992px) {\n      left: 50%;\n    }\n\n    &::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: ',";\n      width: 50%;\n      height: 100%;\n      background: ",";\n      border-radius: inherit;\n      box-shadow: 0 0 7px 1px ",";\n      transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out,\n        left 0.25s ease-in-out;\n    }\n  "]);return H=function(){return n},n}var S=function(n){return Object(l.b)(H(),n.toggleBackground,n.togglePosition,n.toggleForeground,n.toggleForeground)},I=function(){return Object(l.b)(L())},U=function(){return Object(l.b)(E())},A=function(){var n=z(),t={labelCss:S,inputCss:I,wrapperCss:U},e=t.labelCss,o=t.inputCss,i=t.wrapperCss;return Object(l.c)(r.Fragment,null,Object(l.c)("div",{css:i},Object(l.c)("label",{css:e,htmlFor:"theme-switch"}),Object(l.c)("input",{css:o,id:"theme-switch",type:"checkbox",onClick:function(){return n.toggle()}})))};function D(){var n=Object(T.a)(["\n    color: ",";\n    text-decoration: none;\n    font-size: 1.1rem;\n    font-weight: 700;\n    font-family: ",";\n    position: relative;\n    position: relative;\n    background-repeat: no-repeat;\n    transition: background-size 0.3s linear, background-position 0.3s linear;\n    background-size: 0px 20px, 100% 20px, 0px 10px;\n    background-position: 150% 100%, 100% 100%, 0% 80%;\n    background-image: linear-gradient(\n        ",",\n        ","\n      ),\n      linear-gradient(#0000, #0000),\n      linear-gradient(",", ",");\n    &:hover {\n      color: ",";\n      background-size: 0px 20px, 0 20px, 100% 10px;\n      background-position: 150% 100%, 100% 100%, 0% 80%;\n    }\n  "]);return D=function(){return n},n}function P(){var n=Object(T.a)(["\n    display: inline;\n    padding-left: 1.875rem;\n    &:first-of-type {\n      padding-left: 0px;\n    }\n  "]);return P=function(){return n},n}function W(){var n=Object(T.a)(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    margin-left: auto;\n    margin-right: 0;\n  "]);return W=function(){return n},n}function J(){var n=Object(T.a)(["\n    line-height: 2rem;\n    display: flex;\n  "]);return J=function(){return n},n}var M=function(){return Object(l.b)(J())},R=function(){return Object(l.b)(W())},X=function(){return Object(l.b)(P())},Y=function(n){return Object(l.b)(D(),n.body,n.fontNav,n.linksNavUnderline,n.linksNavUnderline,n.linksNavUnderline,n.linksNavUnderline,n.body)},q=function(){z();var n={wrapperCss:M,linkCss:Y,ulCss:R,liCss:X},t=n.wrapperCss,e=n.ulCss,r=n.liCss,o=n.linkCss;return Object(l.c)("nav",{css:t},Object(l.c)("ul",{css:e},Object(l.c)("li",{css:r},Object(l.c)("a",{href:"/hi",css:o},"Writing")),Object(l.c)("li",{css:r},Object(l.c)("a",{href:"/hi",css:o},"Coding")),Object(l.c)("li",{css:r},Object(l.c)("a",{href:"/hi",css:o},"Chatting"))))};function G(){var n=Object(T.a)(["\n    font-family: ",";\n    color: ",";\n    font-weight: 700;\n    font-size: 1.2rem;\n    text-align: center;\n    line-height: 2rem;\n    letter-spacing: 4px;\n    text-transform: uppercase;\n    position: relative;\n    display: inline-block;\n    text-decoration: none;\n    overflow: hidden;\n\n    @media (min-width: 1200px) {\n      padding-left: 30px;\n    }\n\n    &::before {\n      position: absolute;\n      content: attr(data-content);\n      top: 0;\n      left: 0;\n      width: 0;\n      color: ",";\n      white-space: nowrap;\n      overflow: hidden;\n      transition: width 275ms ease;\n      @media (min-width: 1200px) {\n        padding-left: 30px;\n      }\n    }\n    &:hover::before {\n      width: 100%;\n    }\n  "]);return G=function(){return n},n}var K=function(n){return Object(l.b)(G(),n.fontLogo,n.colorLogo,n.colorLogoHover)},Q=function(){var n={containerCss:K}.containerCss;return Object(l.c)("div",{css:n,"data-content":"Fran Haines"},"Fran Haines")};function V(){var n=Object(T.a)(["\n    background: ",";\n    padding: 3.125rem 0;\n  "]);return V=function(){return n},n}var Z=function(n){return Object(l.b)(V(),n.background)},$=function(){var n={wrapperCss:Z}.wrapperCss;return Object(l.c)("header",{css:n},Object(l.c)(u.a,{fluid:!0},Object(l.c)(d.a,null,Object(l.c)(b.a,null,Object(l.c)(Q,null)),Object(l.c)(b.a,{xs:8,className:"d-none d-lg-block"},Object(l.c)(q,null)),Object(l.c)(b.a,{xs:1},Object(l.c)(A,null)))))},_=function(){var n=Object(r.useState)({x:null,y:null}),t=Object(g.a)(n,2),e=t[0],o=t[1],i=function(n){o({x:n.clientX,y:n.clientY})};return Object(r.useEffect)(function(){return window.addEventListener("mousemove",i),function(){return window.removeEventListener("mousemove",i)}},[]),e};function nn(){var n=Object(T.a)(["\n    background: ",";\n    z-index: 1;\n    @keyframes hue-rotation {\n      100% {\n        filter: hue-rotate(360deg);\n      }\n    }\n  "]);return nn=function(){return n},n}function tn(){var n=Object(T.a)(["\n    z-index: 2;\n    max-width: 500px;\n    color: ",";\n    margin-top: 0;\n\n    p {\n      font-size: 1.5rem;\n      @media (min-width: 992px) {\n        font-size: 1rem;\n      }\n    }\n  "]);return tn=function(){return n},n}function en(){var n=Object(T.a)(["\n    width: 0;\n    height: 0;\n    border-left: 100px solid transparent;\n    border-right: 100px solid transparent;\n    left: -100px;\n    top: 350px;\n    mix-blend-mode: overlay;\n    transform: rotate(90deg);\n    position: absolute;\n    border-bottom: 150px solid ",";\n    z-index: 5;\n    @media (min-width: 992px) {\n      position: relative;\n      top: -275px;\n      left: 10px;\n      transform: rotate(75deg);\n      border-left: 200px solid transparent;\n      border-right: 200px solid transparent;\n      border-bottom: 250px solid ",";\n    }\n  "]);return en=function(){return n},n}function rn(){var n=Object(T.a)(["\n    background: linear-gradient(\n      -45deg,\n      "," 0%,\n      "," 100%\n    );\n    animation: hue-rotation 10s infinite alternate;\n    position: absolute;\n    right: -50px;\n    top: 125px;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    z-index: 1;\n    @media (min-width: 992px) {\n      position: relative;\n      top: -310px;\n      left: 30px;\n      width: 500px;\n      height: 500px;\n    }\n  "]);return rn=function(){return n},n}function on(){var n=Object(T.a)(["\n    width: 10%;\n    height: 0;\n    display: block;\n    right: -100px;\n    border-radius: 50%;\n    background: ",";\n    mask: radial-gradient(transparent 65px, "," 50px);\n    mix-blend-mode: overlay;\n    position: absolute;\n    z-index: 2;\n    height: 200px;\n    width: 200px;\n    @media (min-width: 992px) {\n      position: relative;\n      mask: radial-gradient(transparent 99px, "," 100px);\n      top: 250px;\n      right: 135px;\n      height: 300px;\n      width: 300px;\n    }\n  "]);return on=function(){return n},n}function cn(){var n=Object(T.a)(["\n    font-family: ",";\n    color: ",";\n    font-weight: 700;\n    font-size: 3.5rem;\n  "]);return cn=function(){return n},n}function an(){var n=Object(T.a)(["\n    font-family: ",";\n    color: ",";\n    font-weight: 700;\n    font-size: 3rem;\n  "]);return an=function(){return n},n}var sn=function(n){return Object(l.b)(an(),n.fontHeading,n.colorTagline)},ln=function(n){return Object(l.b)(cn(),n.fontHeading,n.black)},un=function(n){return Object(l.b)(on(),n.circleForeground,n.circleForeground,n.circleForeground)},dn=function(n){return Object(l.b)(rn(),n.circleBackgroundStart,n.circleBackgroundEnd)},bn=function(n){return Object(l.b)(en(),n.triangle,n.triangle)},fn=function(n){return Object(l.b)(tn(),n.body)},gn=function(n){return Object(l.b)(nn(),n.background)},pn=function(){z();var n={foregroundCircle:un,backgroundCircle:dn,triangle:bn,heroWrapper:gn,textWrapper:fn,h1:sn,h2:ln},t=n.heroWrapper,e=n.foregroundCircle,r=n.backgroundCircle,o=n.triangle,i=n.textWrapper,c=n.h1,a=n.h2,s=_(),f=s.x,g=s.y;return Object(l.c)("section",{css:t},Object(l.c)(u.a,null,Object(l.c)(d.a,null,Object(l.c)(b.a,null,Object(l.c)("div",{className:"d-flex"},Object(l.c)("div",{css:i},Object(l.c)("h1",{css:c},"Hi there, I'm Fran."," ",Object(l.c)("span",{role:"img","aria-label":"Cartoon image of woman with red hair."},"\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb0")),Object(l.c)("h2",{css:a},"A Front-end Developer based in Bristol."),Object(l.c)("p",null,"I love my job and try to pass that passion on by mentoring at both Codebar and a local Bristol high school."," "),Object(l.c)("p",null,"I love being outdoors - I'm really into running, cycling and skateboarding. I also love video games (PlayStation fo' life). In a post-pandemic world you can usually find me at gigs in and around Bristol.")),Object(l.c)("div",{className:"ml-auto"},Object(l.c)("div",{css:e,style:{marginLeft:"calc(-".concat(f,"px * 0.03)"),marginTop:"calc(-".concat(g,"px * 0.03)")}}),Object(l.c)("div",{css:r,style:{marginRight:"calc(-".concat(f,"px * 0.01)"),marginBottom:"calc(-".concat(g,"px * 0.01)")}}),Object(l.c)("div",{css:o,style:{marginRight:"calc(-".concat(f,"px * 0.05)"),marginTop:"calc(-".concat(g,"px * 0.05)")}})))))))};function hn(){var n=Object(T.a)(['\n    font-size: 6rem;\n    position: absolute;\n    line-height: 6rem;\n    left: 50px;\n    z-index: 10;\n    font-family: "Lato";\n    font-weight: 900;\n    -webkit-text-stroke-width: 2px;\n    -webkit-text-stroke-color: #fff;\n    transition: color 0.15s cubic-bezier(0.25, 0.25, 0.75, 0.75);\n  ']);return hn=function(){return n},n}function On(){var n=Object(T.a)(["\n    position: absolute;\n    bottom: 0;\n    left: 15px;\n    right: 0;\n    background: rgba(52, 180, 140, 0.8);\n    overflow: hidden;\n    width: 0;\n    margin-bottom: 15px;\n    height: calc(100% - 50px);\n    transition: 0.5s ease;\n  "]);return On=function(){return n},n}function mn(){var n=Object(T.a)(['\n    position: absolute;\n    left: 50px;\n    bottom: 50px;\n    color: #fff;\n    z-index: 10;\n    max-width: 550px;\n    h3 {\n      font-family: "Nunito";\n      font-size: 2.5rem;\n      font-weight: 700;\n    }\n    h4 {\n      font-family: "Lato";\n    }\n  ']);return mn=function(){return n},n}function jn(){var n=Object(T.a)(["\n    color: transparent;\n    cursor: pointer;\n    &:hover span {\n      color: white;\n    }\n    &:hover div {\n      width: calc(100% - 30px);\n    }\n  "]);return jn=function(){return n},n}function xn(){var n=Object(T.a)(["\n    width: 100%;\n    padding-top: 35px;\n  "]);return xn=function(){return n},n}function vn(){var n=Object(T.a)(["\n    color: white;\n    font-family: ",";\n    font-weight: 700;\n    font-size: 3rem;\n  "]);return vn=function(){return n},n}function kn(){var n=Object(T.a)(["\n    position: absolute;\n    background-color: #3f51b5;\n    width: 100%;\n    padding: 50px 0px;\n    z-index: 2;\n    @media (min-width: 992px) {\n      top: 850px;\n    }\n  "]);return kn=function(){return n},n}var wn=function(){return Object(l.b)(kn())},Cn=function(n){return Object(l.b)(vn(),n.fontHeading)},yn=function(){return Object(l.b)(xn())},Bn=function(){return Object(l.b)(jn())},Fn=function(){return Object(l.b)(mn())},zn=function(){return Object(l.b)(On())},Nn=function(){return Object(l.b)(hn())},Tn=function(){var n={containerCss:wn,h2Styling:Cn,imageCss:yn,workCardCss:Bn,workCardNumberCss:Nn,workCardTextCss:Fn,workCardTextOverlayCss:zn},t=n.containerCss,e=n.h2Styling,r=n.imageCss,o=n.workCardCss,i=n.workCardNumberCss,c=n.workCardTextCss,a=n.workCardTextOverlayCss;return Object(l.c)("section",{css:t},Object(l.c)(u.a,null,Object(l.c)("h2",{css:e},"Coding"),Object(l.c)(d.a,null,Object(l.c)(b.a,{xs:12,sm:6},Object(l.c)("figure",{css:o},Object(l.c)("span",{css:i},"01"),Object(l.c)("div",{css:a}),Object(l.c)("figcaption",{css:c},Object(l.c)("h3",null,"This is the headlin e"),Object(l.c)("h4",null,"This is the sub-headline")),Object(l.c)("img",{src:"https://via.placeholder.com/600",alt:"alt",css:r}))),Object(l.c)(b.a,{xs:12,sm:6},Object(l.c)("figure",{css:o},Object(l.c)("span",{css:i},"02"),Object(l.c)("div",{css:a}),Object(l.c)("figcaption",{css:c},Object(l.c)("h3",null,"This is the headlin e"),Object(l.c)("h4",null,"This is the sub-headline")),Object(l.c)("img",{src:"https://via.placeholder.com/600",alt:"alt",css:r}))),Object(l.c)(b.a,{xs:12,sm:6},Object(l.c)("figure",{css:o},Object(l.c)("span",{css:i},"03"),Object(l.c)("div",{css:a}),Object(l.c)("figcaption",{css:c},Object(l.c)("h3",null,"This is the headlin e"),Object(l.c)("h4",null,"This is the sub-headline")),Object(l.c)("img",{src:"https://via.placeholder.com/600",alt:"alt",css:r}))))))},En=function(){return o.a.createElement("div",null,o.a.createElement($,null),o.a.createElement(pn,null),o.a.createElement(Tn,null))};e(28);s.a.load({google:{families:["Fredoka One: 400","Lato: 300,400,700,900","sans-serif","Nunito: 400,500,600,700,800"]}}),c.a.render(o.a.createElement(N,null,o.a.createElement(En,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2116d19c.chunk.js.map