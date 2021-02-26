(this["webpackJsonpreact-preserve-ratio-example"]=this["webpackJsonpreact-preserve-ratio-example"]||[]).push([[0],{78:function(e,t,a){e.exports=a(90)},79:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);a(79);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),i=a(110),m=a(108),o=a(2),u=a(27),s={left:"flex-start",center:"space-around",right:"flex-end"},d={top:"flex-start",center:"center",bottom:"flex-end"},h=Object(n.createContext)({scale:1});function E(e){var t=e.align,a=e.children,r=e.maxHeight,c=e.maxScale,i=e.maxWidth,m=e.safeMode,o=e.valign,u=Object(n.useRef)(null),E=Object(n.useRef)(null),f=Object(n.useState)({width:0,height:0}),g=f[0],p=f[1],b=Object(n.useState)({width:0,height:0}),x=b[0],v=b[1],w=Object(n.useMemo)((function(){var e=Math.min(x.width/g.width,x.height/g.height);return Math.min(e,c||Number.MAX_VALUE,(r||Number.MAX_VALUE)/g.height,(i||Number.MAX_VALUE)/g.width)}),[g,c,r,i,x]),y=function(e){return e.forEach((function(e){switch(e.target){case u.current:p(e.contentRect);break;case E.current:v(e.contentRect)}}))};Object(n.useEffect)((function(){var e=new ResizeObserver((function(e){Array.isArray(e)&&(m?window.requestAnimationFrame((function(){y(e)})):y(e))}));return e.observe(u.current),e.observe(E.current),function(){e.disconnect()}}),[m]);var C=s[t||""]||"space-around",S=d[o||""]||"center";return l.a.createElement("div",{ref:E,style:{height:"100%",width:"100%",alignItems:S,border:"none",display:"flex",justifyContent:C,margin:0,overflow:"hidden",padding:0}},l.a.createElement("div",{ref:u,style:{transform:"scale("+w+")",transformOrigin:(o||"center")+" "+(t||"center")}},l.a.createElement(h.Provider,{value:{scale:w}},a)))}E.propTypes={align:u.string,children:u.node.isRequired,maxHeight:u.number,maxScale:u.number,maxWidth:u.number,safeMode:u.bool,valign:u.string};var f=a(96),g=a(97),p=a(112),b=a(98),x=a(99),v=a(100),w=a(101),y=a(111),C=a(103),S=a(109),z=a(71),j=a(107),k=a(114);function A(e){var t=e.children;return l.a.createElement("div",{style:{border:"1px dotted rgba(0, 0, 0, 0.2)",display:"block",fontSize:"2em",height:"240px",overflow:"hidden",resize:"both",width:"640px"}},t)}var O=function(){return l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ddffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!")},M=function(){var e=Object(n.useContext)(h).scale,t="#ddffdd",a="^_^";return e>1.49?(t="#ffdddd",a=">_<"):e>1.1&&(t="#ffffdd",a="O_O"),l.a.createElement("div",{style:{alignItems:"center",backgroundColor:t,display:"flex",fontSize:"2em",height:"240px",justifyContent:"center",width:"320px",transition:"background 200ms"}},a)},T=function(){var e=Object(n.useContext)(h).scale;return l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ddffdd",display:"flex",fontSize:"4em",height:"240px",justifyContent:"center",width:"320px",transition:"background 200ms"}},new Intl.NumberFormat("en-US",{maximumSignificantDigits:2}).format(e))},I=function(){var e=Object(n.useState)("center center"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({width:320,height:240}),i=Object(o.a)(c,2),m=i[0],u=i[1];return l.a.createElement("div",{style:{margin:"1em"}},l.a.createElement(f.a,{size:"xl"},"Examples:"," ",l.a.createElement(g.a,{href:"https://github.com/dobs/react-preserve-ratio"},"react-preserve-ratio")),l.a.createElement(p.a,{status:"warning"},l.a.createElement(p.b,null),"The component works on mobile but these examples currently don't. Stay tuned. :)"),l.a.createElement(f.a,{size:"lg"},"Basic Example"),l.a.createElement(b.a,{fontSize:"md"},"Try resizing the box below and notice how content automatically scales while maintaining its ratio."),l.a.createElement(A,null,l.a.createElement(E,null,l.a.createElement(O,null))),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Constraints Example"),l.a.createElement(b.a,null,"This time the ",l.a.createElement(x.a,null,"maxScale")," option is set to ",l.a.createElement(x.a,null,"1.5"),", limiting content to 150% its initial scale."),l.a.createElement(A,null,l.a.createElement(E,{maxScale:1.5},l.a.createElement(M,null))),l.a.createElement(b.a,null,"There are a few different constraint options:"),l.a.createElement(v.b,null,l.a.createElement(v.a,null,l.a.createElement(x.a,null,"maxScale"),": A number indicating the maximum scale for content relative to their real size."),l.a.createElement(v.a,null,l.a.createElement(x.a,null,"maxHeight"),": A number indicating the maximum height of content, in pixels."),l.a.createElement(v.a,null,l.a.createElement(x.a,null,"maxWidth"),": A number indicating the maximum width of content, in pixels.")),l.a.createElement(b.a,null,"Minimum constraints are more container-dependent an so aren't currently covered by the component in favour of letting users specify their own"," ",l.a.createElement(x.a,null,"min-width")," and ",l.a.createElement(x.a,null,"min-height")," on the container."),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Content Resizing Example"),l.a.createElement(b.a,null,"Content is also automatically scaled when content dimensions change."),l.a.createElement(w.a,{my:2,w:"640px"},l.a.createElement(y.a,{onClick:function(){return u({width:320,height:240})}},"Default"),l.a.createElement(y.a,{onClick:function(){return u({width:480,height:240})}},"Wide"),l.a.createElement(y.a,{onClick:function(){return u({width:240,height:320})}},"Tall"),l.a.createElement(C.a,null),l.a.createElement(S.c,{w:20,mr:2,min:1,max:999,value:m.width,onChange:function(e){return u({width:parseInt(e),height:m.height})}},l.a.createElement(S.d,null),l.a.createElement(S.e,null,l.a.createElement(S.b,null),l.a.createElement(S.a,null))),l.a.createElement(S.c,{w:20,min:1,max:999,value:m.height,onChange:function(e){return u({width:m.width,height:parseInt(e)})}},l.a.createElement(S.d,null),l.a.createElement(S.e,null,l.a.createElement(S.b,null),l.a.createElement(S.a,null)))),l.a.createElement(A,null,l.a.createElement(E,null,l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ddffdd",display:"flex",height:"".concat(m.height,"px"),justifyContent:"center",width:"".concat(m.width,"px")}},"Hello, world!"))),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Alignment Example"),l.a.createElement(b.a,null,"Components also support horizontal and vertical alignment via"," ",l.a.createElement(x.a,null,"align")," and ",l.a.createElement(x.a,null,"valign")," respectively."),l.a.createElement(z.a,{my:2,onChange:function(e){return r(e.toString())},value:a},l.a.createElement(j.a,{w:"320px"},l.a.createElement(j.d,null,l.a.createElement(j.c,null),l.a.createElement(j.c,null,"Left"),l.a.createElement(j.c,null,"Center"),l.a.createElement(j.c,null,"Right")),l.a.createElement(j.b,null,l.a.createElement(j.e,null,l.a.createElement(j.c,{textAlign:"right"},"Top"),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"top left"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"top center"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"top right"})))),l.a.createElement(j.b,null,l.a.createElement(j.e,null,l.a.createElement(j.c,{textAlign:"right"},"Center"),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"center left"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"center center"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"center right"})))),l.a.createElement(j.b,null,l.a.createElement(j.e,null,l.a.createElement(j.c,{textAlign:"right"},"Bottom"),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"bottom left"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"bottom center"})),l.a.createElement(j.c,null,l.a.createElement(k.a,{value:"bottom right"})))))),l.a.createElement(A,null,l.a.createElement(E,{align:a.split(" ")[1],valign:a.split(" ")[0]},l.a.createElement(O,null))),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Safe Mode Example"),l.a.createElement(b.a,null,"If elements are resized too quickly it can result in non-user-impacting errors. Where this could become a problem is if you're using a frontend error tracking service it could create a lot of noise."),l.a.createElement(b.a,null,"To help mitigate, there's a ",l.a.createElement(x.a,null,"safeMode")," prop that introduces a small amount of user-visible latency but in an attempt to reduce these errors."),l.a.createElement(b.a,null,"See"," ",l.a.createElement(g.a,{href:"https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded"},"this StackOverflow thread")," ","for more detail."),l.a.createElement(A,null,l.a.createElement(E,{safeMode:!0},l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ddffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!"))),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Context Example"),l.a.createElement(b.a,null,l.a.createElement("code",null,"PreserveRatioContext")," for child components that care about the current scale."),l.a.createElement(A,null,l.a.createElement(E,{safeMode:!0},l.a.createElement(T,null))),l.a.createElement(f.a,{size:"lg",mt:4,mb:3},"Window Scaling Example"),l.a.createElement(b.a,null,"A typical use case is having content scale to fill the current window, for example when displaying a slide as part of a slide show."),l.a.createElement(b.a,null,"The box below should scale to match the window size. Try resizing your window (or rotating your device) and see how the inner content scales to fit."),l.a.createElement("div",{style:{border:"1px dotted rgba(0, 0, 0, 0.2)",height:"calc(100vh - 2em)",width:"100%"}},l.a.createElement(E,null,l.a.createElement(O,null))))};c.a.render(l.a.createElement(i.a,{theme:Object(m.a)({components:{Alert:{baseStyle:{container:{my:3,maxW:"640px"}}},Button:{baseStyle:{mr:2}},Heading:{sizes:{lg:{mt:5,mb:3}}},List:{baseStyle:{maxW:"640px"}},Table:{baseStyle:{table:{maxW:"640px"},td:{textAlign:"center"}}},Text:{baseStyle:{my:3,maxW:"640px"}}}})},l.a.createElement(I,null)),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b700d54d.chunk.js.map