(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(5),i=n.n(r),a=(n(11),n(4)),o=n.n(a),j=n(6),d=n(2),h=(n(13),n(0)),b=function(){var e="https://picsum.photos/1600/900",t="random unsplash image";return Object(h.jsxs)("figure",{children:[Object(h.jsx)("img",{src:e,alt:t,className:"random-image"}),Object(h.jsxs)("figcaption",{children:["A randomly generated image:"," ",Object(h.jsx)("a",{href:"http://picsum.photos",target:"_blank",rel:"noreferrer",children:"picsum.photos"})]})]})},u=function(){var e=Object(s.useState)("heads"),t=Object(d.a)(e,2),n=t[0],c=t[1];function r(){Math.random()<.5?c("heads"):c("tails")}Object(s.useEffect)((function(){r()}),[]);return Object(h.jsxs)("div",{className:"coin-toss",children:[Object(h.jsx)("img",{src:{heads:"https://www.chards.co.uk/media/blog/46/1995onepoundrev500.png",tails:"https://www.chards.co.uk/media/blog/46/1997onepoundrev500.png"}[n],alt:n+" img",width:"75",onClick:r}),Object(h.jsxs)("div",{className:"coin-toss-result-text",children:[Object(h.jsx)("strong",{children:"Coin Toss: (\ud83e\uddd1/\ud83d\udc09)"}),Object(h.jsx)("span",{className:"coin-toss-result",children:n.toLocaleUpperCase()})]})]})};var l=function(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(" http://192.168.0.22:5000/view-count").then((function(e){return e.json()})).then((function(e){return c(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r(),document.querySelector("body").style.maxHeight=window.innerHeight.toString()+"px"}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"upper",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"marknorman"}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("main",{className:"main-body",children:[Object(h.jsxs)("p",{children:["This page has been viewed ",Object(h.jsx)("b",{children:n.count})," times! \ud83d\udd25"]}),Object(h.jsx)("br",{}),Object(h.jsx)(b,{}),Object(h.jsx)("br",{}),Object(h.jsx)(u,{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Test paragraph (used for debugging):"}),Object(h.jsx)("p",{children:window.innerHeight})]})]}),Object(h.jsx)("footer",{children:"copyright \xa9 mark norman 2021"})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e72e3c88.chunk.js.map