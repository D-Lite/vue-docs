import{_ as d,a1 as m,aM as f,aN as E,y as s,af as n,a6 as o}from"./components-chunk.c8041ec8.js";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=a?n(()=>o(()=>import("./error-404.3fb29cb7.js"),["./error-404.3fb29cb7.js","./components-chunk.c8041ec8.js","./components-chunk.e63e49c6.css","./error-404.610ec657.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.ab7ab2c0.js"),["./error-500.ab7ab2c0.js","./components-chunk.c8041ec8.js","./components-chunk.e63e49c6.css","./error-500.3e4fd7cb.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(d(),m(s(_),f(E({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=g;export{x as default};