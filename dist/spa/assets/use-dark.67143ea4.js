import{r as g,q as z,o as d,E as v,k as m,n as k,h as y,g as w,m as b,c as R}from"./index.cbc02dc7.js";import{c as O}from"./vm.c42c2ab1.js";function x(){const n=g(!z.value);return n.value===!1&&d(()=>{n.value=!0}),n}const p=typeof ResizeObserver!="undefined",h=p===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var L=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:u}){let r=null,t,o={width:-1,height:-1};function s(e){e===!0||n.debounce===0||n.debounce==="0"?a():r===null&&(r=setTimeout(a,n.debounce))}function a(){if(clearTimeout(r),r=null,t){const{offsetWidth:e,offsetHeight:i}=t;(e!==o.width||i!==o.height)&&(o={width:e,height:i},u("resize",o))}}const{proxy:l}=w();if(p===!0){let e;return d(()=>{v(()=>{t=l.$el.parentNode,t&&(e=new ResizeObserver(s),e.observe(t),a())})}),m(()=>{clearTimeout(r),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),k}else{let c=function(){clearTimeout(r),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,b.passive),i=void 0)},f=function(){c(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,b.passive),a())};const e=x();let i;return d(()=>{v(()=>{t=l.$el,t&&f()})}),m(c),l.trigger=s,()=>{if(e.value===!0)return y("object",{style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:f})}}}});const T={dark:{type:Boolean,default:null}};function C(n,u){return R(()=>n.dark===null?u.dark.isActive:n.dark)}export{L as Q,C as a,T as u};
