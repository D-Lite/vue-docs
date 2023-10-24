import{am as T,an as L,ao as M,ap as N,aq as U,ar as G,ah as V,a as I,aa as m,ai as $,K as j,d as O,aj as H,c as k,u as P,ak as R,al as W}from"./entry.d1b4d9a8.js";import{l as d,e as z,A as B,o as F,k as Y,_ as b,a1 as y,a5 as n,B as r,y as t,aV as K,H as X}from"./components-chunk.c8041ec8.js";import{_ as q,a as D}from"./SponsorButton.server.vue.cd88b3dc.js";import{b as x}from"./site-config.380e1c43.js";function J(e){var o;const a=N(e);return(o=a==null?void 0:a.$el)!=null?o:a}const Q=T?window:void 0;function Z(...e){let o,a,s,u;if(L(e[0])||Array.isArray(e[0])?([a,s,u]=e,o=Q):[o,a,s,u]=e,!o)return M;Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]);const f=[],p=()=>{f.forEach(l=>l()),f.length=0},v=(l,i,c,h)=>(l.addEventListener(i,c,h),()=>l.removeEventListener(i,c,h)),_=z(()=>[J(o),N(u)],([l,i])=>{p(),l&&f.push(...a.flatMap(c=>s.map(h=>v(l,c,h,i))))},{immediate:!0,flush:"post"}),g=()=>{_(),p()};return U(g),g}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";C[w]=C[w]||{};var E;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(E||(E={}));var ee=Object.defineProperty,S=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,A=(e,o,a)=>o in e?ee(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,te=(e,o)=>{for(var a in o||(o={}))ae.call(o,a)&&A(e,a,o[a]);if(S)for(var a of S(o))oe.call(o,a)&&A(e,a,o[a]);return e};const re={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};te({linear:G},re);function ne({window:e=Q}={}){if(!e)return{x:d(0),y:d(0)};const o=d(e.scrollX),a=d(e.scrollY);return Z(e,"scroll",()=>{o.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:a}}const se=B({__name:"TheNavbar",setup(e){const o=K,{colorMode:a,toggleColorMode:s}=V(),u=d(void 0),{y:f}=ne(),p=d(0);F(()=>{var _;p.value=((_=u.value)==null?void 0:_.$el.getBoundingClientRect().height)??0});const v=Y(()=>f.value>p.value?"sm":void 0);return(_,g)=>{const l=D,i=R,c=W;return b(),y(t(k).header,{ref_key:"headerRef",ref:u,"box-shadow":t(v),transition:"box-shadow 0.2s, background-color 0.2s",pos:"sticky",top:"0","z-index":"3",left:"0",right:"0",width:"full","backdrop-filter":"saturate(120%) blur(5px)","border-bottom":"1px solid","border-color":t(P)("blackAlpha.600","whiteAlpha.300").value},{default:n(()=>[r(t(k).nav,{height:"4.5rem",mx:"auto","max-w":"8xl"},{default:n(()=>[r(t(I),{w:"100%",h:"100%",px:"6",align:"center",justify:"space-between"},{default:n(()=>[r(t(I),{align:"center"},{default:n(()=>[r(t(m),{as:t(o),to:"/","aria-label":"Chakra UI Vue, Back to homepage"},{default:n(()=>[r(l)]),_:1},8,["as"])]),_:1}),r(t(I),{justify:"flex-end",w:"100%","max-w":"1100px",align:"center"},{default:n(()=>[r(t($)),r(t(j),{spacing:"5",display:{base:"none",md:"flex"}},{default:n(()=>[r(t(m),{"is-external":"","aria-label":"Go to Chakra UI GitHub page",href:t(x).repo.url},{default:n(()=>[r(t(O),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"github"},null,8,["_hover"])]),_:1},8,["href"]),r(t(m),{"is-external":"","aria-label":"Go to Chakra UI Discord page",href:t(x).discord},{default:n(()=>[r(t(O),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"discord"},null,8,["_hover"])]),_:1},8,["href"]),r(t(m),{"is-external":"","aria-label":"Go to Chakra UI YouTube channel",href:t(x).youtube},{default:n(()=>[r(t(O),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"youtube"},null,8,["_hover"])]),_:1},8,["href"])]),_:1}),r(t(H),{size:"md","font-size":"lg","aria-label":"Switch color mode",variant:"ghost",type:"button",color:"current",ml:{base:"0",md:"3"},onClick:t(s)},{default:n(()=>[t(a)==="light"?(b(),y(i,{key:0})):(b(),y(c,{key:1}))]),_:1},8,["onClick"]),r(q,{ml:"5"})]),_:1})]),_:1})]),_:1})]),_:1},8,["box-shadow","border-color"])}}}),de=B({__name:"home",setup(e){const o=P("gray.700","whiteAlpha.900");return(a,s)=>(b(),y(t(k).div,{color:t(o),"min-h":["auto","auto","100vh"],w:"100%"},{default:n(()=>[r(se),X(a.$slots,"default")]),_:3},8,["color"]))}});export{de as default};
