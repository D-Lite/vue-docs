import{ag as M,c as u,l as w,ah as R,a as v,ai as G,K as T,aa as k,d as m,aj as z,ak as H,al as L,u as U}from"./entry.d1b4d9a8.js";import{_ as A,a as O}from"./SponsorButton.server.vue.cd88b3dc.js";import{b as x}from"./site-config.380e1c43.js";import{A as g,k as B,_ as s,a1 as _,a5 as e,B as t,y as a,H as j,aV as F,ap as Q,aR as X,a_ as $,a$ as I,b0 as Y,b1 as J,a6 as K,b2 as W,b3 as Z,b4 as q,b5 as aa,$ as f,b6 as P,F as y,J as S,a0 as N,a3 as C,l as V,o as ta,D as ea,a4 as oa}from"./components-chunk.c8041ec8.js";const D=g({__name:"doc-link",props:{navItemPath:null},setup(l){const o=l,r=M(),i=B(()=>r.path===o.navItemPath);return(c,p)=>{const n=F;return s(),_(a(u).li,null,{default:e(()=>[t(n,{prefetch:"",to:o.navItemPath},{default:e(()=>[t(a(u).a,{"aria-current":a(i)?"page":void 0,"text-style":"sidebarLink",sx:{color:"currentColor",position:"relative","&:after":{content:"''",position:"absolute",width:"100%",transform:"scaleX(0)",height:"1px",top:"85%",left:0,backgroundColor:"currentColor",transformOrigin:"bottom right",transition:"transform .4s cubic-bezier(.86, 0, .07, 1)"},"&:hover::after":{transform:"scaleX(1)",transformOrigin:"bottom left"}},_hover:{textDecoration:"none"}},{default:e(()=>[j(c.$slots,"default")]),_:3},8,["aria-current","sx"])]),_:3},8,["to"])]),_:3})}}}),na=async l=>{const{content:o}=Q().public;typeof(l==null?void 0:l.params)!="function"&&(l=X(l));const r=l.params(),i=o.experimental.stripQueryParameters?$(`/navigation/${`${I(r)}.${o.integrity}`}/${Y(r)}.json`):$(`/navigation/${I(r)}.${o.integrity}.json`);if(J())return(await K(()=>import("./client-db.a2499660.js"),["./client-db.a2499660.js","./components-chunk.c8041ec8.js","./components-chunk.e63e49c6.css","./entry.d1b4d9a8.js","./entry.b8dfdb0b.css"],import.meta.url).then(n=>n.generateNavigation))(r);const c=await $fetch(i,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:W(r),previewToken:Z().getPreviewToken()}});if(typeof c=="string"&&c.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return c},ra=g({__name:"sidebar",async setup(l){let o,r;const{data:i}=([o,r]=q(()=>aa("navigation",()=>na())),o=await o,r(),o);return(c,p)=>(s(),_(a(w),{as:"ul",spacing:"0","list-style-type":"none","font-size":"sm"},{default:e(()=>[a(i)?(s(!0),f(y,{key:0},P(a(i),(n,b)=>{var d;return s(),f("li",{key:`path:${b}`},[n?(s(),f(y,{key:0},[t(D,{"nav-item-path":n._path},{default:e(()=>[S(N(n==null?void 0:n.title),1)]),_:2},1032,["nav-item-path"]),(d=n==null?void 0:n.children)!=null&&d.length?(s(),_(a(w),{key:0,as:"ul",spacing:"0","list-style-type":"none"},{default:e(()=>[(s(!0),f(y,null,P(n.children.filter(h=>h._path!==n._path),h=>(s(),_(D,{key:`path:${h._path}`,"nav-item-path":h._path,pl:"4"},{default:e(()=>[S(N(h.title),1)]),_:2},1032,["nav-item-path"]))),128))]),_:2},1024)):C("",!0)],64)):C("",!0)])}),128)):C("",!0)]),_:1}))}}),sa=g({__name:"top-navigation",setup(l){const{colorMode:o,toggleColorMode:r}=R(),i=V(void 0),c=V(0);return ta(()=>{var p;c.value=((p=i.value)==null?void 0:p.$el.getBoundingClientRect().height)??0}),(p,n)=>{const b=O,d=ea("router-link"),h=H,E=L;return s(),_(a(u).header,{ref_key:"headerRef",ref:i,transition:"box-shadow 0.2s, background-color 0.2s",pos:"sticky",top:"0","z-index":"overlay",left:"0",right:"0",width:"full","backdrop-filter":"saturate(120%) blur(5px)","border-bottom":"1px solid","border-color":"emerald.500","border-bottom-color":"emerald.500"},{default:e(()=>[t(a(u).nav,{height:"4.5rem",mx:"auto","max-w":"8xl"},{default:e(()=>[t(a(v),{w:"100%",h:"100%",px:"6",align:"center",justify:"space-between"},{default:e(()=>[t(a(v),{align:"center"},{default:e(()=>[t(d,{to:"/"},{default:e(()=>[t(a(u).a,{display:"block","aria-label":"Chakra UI Vue, Back to homepage"},{default:e(()=>[t(b)]),_:1})]),_:1})]),_:1}),t(a(v),{justify:"flex-end",w:"100%","max-w":"1100px",align:"center",color:"gray.400"},{default:e(()=>[t(a(G)),t(a(T),{spacing:"5",display:{base:"none",md:"flex"},"align-items":"center"},{default:e(()=>[t(a(k),{"is-external":"","aria-label":"Go to Chakra UI GitHub page",href:a(x).repo.url},{default:e(()=>[t(a(m),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"github"},null,8,["_hover"])]),_:1},8,["href"]),t(a(k),{"is-external":"","aria-label":"Go to Chakra UI Discord page",href:a(x).discord},{default:e(()=>[t(a(m),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"discord"},null,8,["_hover"])]),_:1},8,["href"]),t(a(k),{"is-external":"","aria-label":"Go to Chakra UI YouTube channel",href:a(x).youtube},{default:e(()=>[t(a(m),{display:"block",transition:"color 0.2s",w:"5",h:"5",_hover:{color:"gray.600"},name:"youtube"},null,8,["_hover"])]),_:1},8,["href"]),t(a(z),{"aria-label":"Switch color mode",variant:"ghost",size:"sm",type:"button",onClick:a(r)},{default:e(()=>[a(o)==="light"?(s(),_(h,{key:0})):(s(),_(E,{key:1}))]),_:1},8,["onClick"]),t(A,{ml:"5"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)}}}),la=oa("p",null,"Edit this page on GitHub",-1),_a=g({__name:"default",setup(l){const o=U("gray.700","white");return(r,i)=>{const c=m,p=T;return s(),_(a(u).div,{"min-h":["auto","auto","100vh"],w:"100%",color:a(o)},{default:e(()=>[t(sa),t(a(u).div,{"max-w":"8xl",mx:"auto",d:"flex"},{default:e(()=>[t(a(u).div,{display:{base:"none",lg:"block"},position:"fixed","z-index":"30",bottom:"0",top:"6rem",left:"max(0px, calc(50% - 45rem))",right:"auto",width:"19.5rem",pb:"10",px:"8","overflow-y":"auto","overscroll-behavior":"contain"},{default:e(()=>[t(ra)]),_:1}),t(a(u).main,{pl:{base:4,lg:"19.5rem"},pt:"4",pb:"24",pr:{base:4,xl:16},class:"chakra-prose"},{default:e(()=>[t(a(u).div,{mr:{xl:"15.5rem"},pl:{base:2,lg:"1rem"}},{default:e(()=>[j(r.$slots,"default"),t(p,{"align-items":"center",mt:"6"},{default:e(()=>[t(c,{name:"info"}),la]),_:1})]),_:3},8,["mr"])]),_:3},8,["pl"])]),_:3})]),_:3},8,["color"])}}});export{_a as default};