(this["webpackJsonpreact-preserve-ratio-example"]=this["webpackJsonpreact-preserve-ratio-example"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);n(6);var a=n(0),l=n.n(a),r=n(4),i=n.n(r),o=n(2),c=n(1),m={left:"flex-start",center:"space-around",right:"flex-end"},u={top:"flex-start",center:"center",bottom:"flex-end"};function s(e){var t=e.align,n=e.children,r=e.maxHeight,i=e.maxScale,c=e.maxWidth,s=e.safeMode,h=e.valign,d=Object(a.useRef)(null),g=Object(a.useRef)(null),f=Object(a.useState)({width:0,height:0}),p=Object(o.a)(f,2),E=p[0],b=p[1],w=Object(a.useState)({width:0,height:0}),x=Object(o.a)(w,2),v=x[0],y=x[1],C=Object(a.useMemo)((function(){var e=Math.min(v.width/E.width,v.height/E.height);return Math.min(e,i||Number.MAX_VALUE,(r||Number.MAX_VALUE)/E.height,(c||Number.MAX_VALUE)/E.width)}),[E,i,r,c,v]),k=function(e){return e.forEach((function(e){switch(e.target){case d.current:b(e.contentRect);break;case g.current:y(e.contentRect)}}))};Object(a.useEffect)((function(){var e=new ResizeObserver((function(e){Array.isArray(e)&&(s?window.requestAnimationFrame((function(){k(e)})):k(e))}));return e.observe(d.current),e.observe(g.current),function(){e.disconnect()}}),[s]);var j=m[t||""]||"space-around",O=u[h||""]||"center";return l.a.createElement("div",{ref:g,style:{height:"100%",width:"100%",alignItems:O,border:"none",display:"flex",justifyContent:j,margin:0,overflow:"hidden",padding:0}},l.a.createElement("div",{ref:d,style:{transform:"scale(".concat(C,")"),transformOrigin:"".concat(h||"center"," ").concat(t||"center")}},n))}function h(e){var t=e.children;return l.a.createElement("div",{style:{border:"1px dotted rgba(0, 0, 0, 0.2)",display:"block",height:"240px",overflow:"hidden",resize:"both",width:"640px"}},t)}s.propTypes={align:c.string,children:c.node.isRequired,maxHeight:c.number,maxScale:c.number,maxWidth:c.number,safeMode:c.bool,valign:c.string};var d=function(){var e=Object(a.useState)({align:"center",valign:"center"}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({width:320,height:240}),c=Object(o.a)(i,2),m=c[0],u=c[1];return l.a.createElement("div",{style:{margin:"1em"}},l.a.createElement("h1",null,"Examples: react-preserve-scale"),l.a.createElement("h2",null,"Basic Example"),l.a.createElement("p",null,"Try resizing the box below and notice how content automatically scales while maintaining its ratio."),l.a.createElement(h,null,l.a.createElement(s,null,l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!"))),l.a.createElement("h2",null,"Constraints Example"),l.a.createElement("p",null,"This time the ",l.a.createElement("code",null,"maxScale")," option is set to ",l.a.createElement("code",null,"2"),", limiting content to 2x its initial scale."),l.a.createElement(h,null,l.a.createElement(s,{maxScale:2},l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!"))),l.a.createElement("p",null,"There are a few different constraint options:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"maxScale"),": A number indicating the maximum scale for content relative to their real size."),l.a.createElement("li",null,l.a.createElement("code",null,"maxHeight"),": A number indicating the maximum height of content, in pixels."),l.a.createElement("li",null,l.a.createElement("code",null,"maxWidth"),": A number indicating the maximum width of content, in pixels.")),l.a.createElement("p",null,"Minimum constraints are more container-dependent an so aren't currently covered by the component in favour of letting users specify their own"," ",l.a.createElement("code",null,"min-width")," and ",l.a.createElement("code",null,"min-height")," on the container."),l.a.createElement("h2",null,"Content Resizing Example"),l.a.createElement("p",null,"Content is also automatically scaled when content dimensions change."),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){return u({width:320,height:240})}},"Default"),l.a.createElement("button",{onClick:function(){return u({width:480,height:240})}},"Wide"),l.a.createElement("button",{onClick:function(){return u({width:240,height:320})}},"Tall"),"|",l.a.createElement("input",{type:"number",max:"999",min:"1",value:m.width,onChange:function(e){return u({width:parseInt(e.target.value),height:m.height})}}),"x",l.a.createElement("input",{type:"number",max:"999",min:"1",value:m.height,onChange:function(e){return u({width:m.width,height:parseInt(e.target.value)})}})),l.a.createElement(h,null,l.a.createElement(s,null,l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"".concat(m.height,"px"),justifyContent:"center",transition:"width 200ms, height 200ms",width:"".concat(m.width,"px")}},"Hello, world!"))),l.a.createElement("h2",null,"Alignment Example"),l.a.createElement("p",null,"Components also support horizontal and vertical alignment via"," ",l.a.createElement("code",null,"align")," and ",l.a.createElement("code",null,"valign")," respectively."),l.a.createElement("p",null,l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"left",valign:"top"})}},l.a.createElement("span",{role:"img","aria-label":"top-left"},"\u2196\ufe0f")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"center",valign:"top"})}},l.a.createElement("span",{role:"img","aria-label":"top-center"},"\u2b06\ufe0f")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"right",valign:"top"})}},l.a.createElement("span",{role:"img","aria-label":"top-right"},"\u2197\ufe0f")),l.a.createElement("br",null),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"left",valign:"center"})}},l.a.createElement("span",{role:"img","aria-label":"center-left"},"\u2b05\ufe0f")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"center",valign:"center"})}},l.a.createElement("span",{role:"img","aria-label":"center-center"},"\u23fa")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"right",valign:"center"})}},l.a.createElement("span",{role:"img","aria-label":"center-right"},"\u27a1\ufe0f")),l.a.createElement("br",null),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"left",valign:"bottom"})}},l.a.createElement("span",{role:"img","aria-label":"bottom-left"},"\u2199\ufe0f")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"center",valign:"bottom"})}},l.a.createElement("span",{role:"img","aria-label":"bottom-center"},"\u2b07\ufe0f")),l.a.createElement("button",{className:"arrow-button",onClick:function(){return r({align:"right",valign:"bottom"})}},l.a.createElement("span",{role:"img","aria-label":"bottom-right"},"\u2198\ufe0f"))),l.a.createElement(h,null,l.a.createElement(s,{align:n.align,valign:n.valign},l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"240px",justifyContent:"center",transition:"width 200ms, height 200ms",width:"320px"}},"Hello, world!"))),l.a.createElement("h2",null,"Safe Mode Example"),l.a.createElement("p",null,"If elements are resized too quickly it can result in non-user-impacting errors. Where this could become a problem is if you're using a frontend error tracking service it could create a lot of noise."),l.a.createElement("p",null,"To help mitigate, there's a ",l.a.createElement("code",null,"safeMode")," prop that introduces a small amount of user-visible latency but in an attempt to reduce these errors."),l.a.createElement("p",null,"See"," ",l.a.createElement("a",{href:"https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded"},"this StackOverflow thread")," ","for more detail."),l.a.createElement(h,null,l.a.createElement(s,{safeMode:!0},l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!"))),l.a.createElement("h2",null,"Window Scaling Example"),l.a.createElement("p",null,"A typical use case is having content scale to fill the current window, for example when displaying a slide as part of a slide show."),l.a.createElement("p",null,"The box below should scale to match the window size. Try resizing your window (or rotating your device) and see how the inner content scales to fit."),l.a.createElement("div",{style:{border:"1px dotted rgba(0, 0, 0, 0.2)",height:"calc(100vh - 2em)",width:"100%"}},l.a.createElement(s,null,l.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#ffffdd",display:"flex",height:"240px",justifyContent:"center",width:"320px"}},"Hello, world!"))))};i.a.render(l.a.createElement(d,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(13)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.15010adf.chunk.js.map