import{N as g,f as _,g as b,j as i,e as f,u as r}from"./vendor.57be17a3.js";const P=(s,a)=>{if(s.install=n=>{for(const o of[s,...Object.values(a!=null?a:{})])n.component(o.name,o)},a)for(const[n,o]of Object.entries(a))s[n]=o;return s},G=s=>(s.install=g,s),$=Symbol(),v=_();function m(s,a=void 0){const n=b()?i($,v):v;return s?f(()=>{var o,c;return(c=(o=n.value)==null?void 0:o[s])!=null?c:a}):n}const C="el",N="is-",u=(s,a,n,o,c)=>{let l=`${s}-${a}`;return n&&(l+=`-${n}`),o&&(l+=`__${o}`),c&&(l+=`--${c}`),l},K=s=>{const a=m("namespace"),n=f(()=>a.value||C);return{namespace:n,b:(t="")=>u(r(n),s,t,"",""),e:t=>t?u(r(n),s,"",t,""):"",m:t=>t?u(r(n),s,"","",t):"",be:(t,e)=>t&&e?u(r(n),s,t,e,""):"",em:(t,e)=>t&&e?u(r(n),s,"",t,e):"",bm:(t,e)=>t&&e?u(r(n),s,t,"",e):"",bem:(t,e,p)=>t&&e&&p?u(r(n),s,t,e,p):"",is:(t,...e)=>{const p=e.length>=1?e[0]:!0;return t&&p?`${N}${t}`:""}}};var d=(s,a)=>{const n=s.__vccOpts||s;for(const[o,c]of a)n[o]=c;return n};export{d as _,K as a,G as b,m as u,P as w};
