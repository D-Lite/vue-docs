import{c as i,e as d}from"./entry.d1b4d9a8.js";import{A as n,B as a,C as p,H as u,J as l,f as c}from"./components-chunk.c8041ec8.js";function s(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!c(e)}const x=n({name:"CodeContainer",setup(e,{attrs:t,slots:o}){return()=>a(i.div,p({p:"3",pt:"5",rounded:"8px",my:"8",bg:"#011627",color:"#eee"},t),s(o)?o:{default:()=>[o]})}}),b=n({name:"CopyButton",setup(e,{attrs:t,slots:o}){return()=>{let r;return a(d,p({size:"sm",position:"absolute",textTransform:"uppercase",colorScheme:"emerald",fontSize:"xs",height:"24px",top:0,zIndex:"1",right:"1.25em"},t),s(r=u(o,"default"))?r:{default:()=>[r]})}}}),g=n({name:"EditableNotice",setup(e,{attrs:t}){return()=>a(i.div,p({position:"absolute",width:"full",top:"-1.25em",left:"0",roundedTop:"8px",bg:"#011627",py:"2",zIndex:"0",letterSpacing:"wide",color:"gray.400",fontSize:"xs",fontWeight:"semibold",textAlign:"center",textTransform:"uppercase",pointerEvents:"none"},t),{default:()=>[l("Editable Example")]})}});export{x as CodeContainer,b as CopyButton,g as EditableNotice};