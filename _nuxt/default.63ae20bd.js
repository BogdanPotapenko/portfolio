import{l as T,o as h,b as w,a as k,e as c,t as _,q as z,r as m,j as K,w as R,s as A,u,h as v,v as g,K as E,x as N,y as S,z as j,S as I,A as M,B as O,T as D,R as H,C as L,D as F,E as P}from"./entry.1ce16d97.js";function $(e){return e!==null&&typeof e=="object"}function B(e,a,t=".",n){if(!$(a))return B(e,{},t,n);const s=Object.assign({},a);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const l=e[r];l!=null&&(n&&n(s,r,l,t)||(Array.isArray(l)&&Array.isArray(s[r])?s[r]=[...l,...s[r]]:$(l)&&$(s[r])?s[r]=B(l,s[r],(t?`${t}.`:"")+r.toString(),n):s[r]=l))}return s}function V(e){return(...a)=>a.reduce((t,n)=>B(t,n,"",e),{})}const q=V(),U={},G={id:"background",class:"fixed left-0 right-0 bottom-0 top-[-100px] pb-[100px] translate-y-[100px] -z-10",style:{background:"radial-gradient(ellipse at center, #08192a 19%, black 100%)"}};function J(e,a){return h(),w("div",G)}const Q=T(U,[["render",J]]),W={class:"switch relative"},X=c("span",{class:"slider relative inline-block cursor-pointer w-20 h-10 rounded-full bg-primary after:content-[''] after:absolute after:inline-block after:top-[5px] after:w-7.5 after:h-7.5 after:bg-white after:rounded-full after:translate-x-[5px] after:duration-300 after:ease-in-out peer-checked:after:translate-x-[45px] peer-active:after:w-[45px]"},null,-1),Y={class:"absolute top-2.5 z-10 left-0 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-white"},Z={class:"absolute top-2.5 z-10 right-0 pointer-events-none text-sm w-1/2 text-center text-white peer-checked:text-primary"},ee=k({__name:"ToggleButton",props:{label:String,on:String,off:String},setup(e){return(a,t)=>(h(),w("label",W,[c("input",{type:"checkbox",onClick:t[0]||(t[0]=n=>a.$emit("switch")),class:"peer hidden"}),X,c("span",Y,_(e.on),1),c("span",Z,_(e.off),1)]))}});const te={class:"w-full h-15 text-white fixed z-10 mx-auto bg-black"},ne={class:"flex gap-5 flex-col md:flex-row items-center md:justify-between py-24 md:py-0"},oe=["disabled"],ae=["disabled"],se=["disabled"],re=["disabled"],ie={class:"flex gap-3 flex-col md:flex-row mb-24 md:mb-0"},le=k({__name:"Navbar",setup(e){const{locale:a}=z(),t=m({amount:100,size:{min:1,max:5,giant:7},duration:{min:2,max:15}}),n=m(),s=m(),r=m(),l=m(),d=m(!1),f=m(!1);K(()=>{C(),n.value=document.getElementById("about"),s.value=document.getElementById("skills"),r.value=document.getElementById("portfolio"),l.value=document.getElementById("contacts")});const x=(i,o)=>i+Math.random()*(o-i),C=()=>{setTimeout(()=>{document.querySelectorAll(".star").forEach(i=>{i.remove()});for(let i=0;i<t.value.amount;i++){const o=document.createElement("span");o.classList.add("star");const p=Math.round(Math.random()*10)===0?t.value.size.giant:x(t.value.size.min,t.value.size.max);o.style.width=p+"px",o.style.height=p+"px",o.style.position="absolute",o.style.left=x(0,100)+"%",o.style.top=x(0,100)+"%",o.style.background="radial-gradient(ellipse at center,#9370db 2%,#053f76 100%)",o.style.borderRadius="100%",o.style.boxShadow="0 0 "+p+"px "+p/2+"px #043668",o.style.transform="translate3d(0, 0, 200px)",o.style.animation=Math.round(Math.random()*5)===0?"move linear infinite":"shine infinite alternate",o.style.animationDuration=x(t.value.duration.min,t.value.duration.max)+"s",document.getElementById("background").append(o)}},150)},b=i=>{f.value=!1,d.value=!0,i>50?(window.scrollBy(0,50),setTimeout(()=>{b(i-50)},20)):i<-50?(window.scrollBy(0,-50),setTimeout(()=>{b(i+50)},20)):(window.scrollBy(0,i),d.value=!1)};return R(f,()=>{f.value?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),(i,o)=>{const p=ee;return h(),w("header",te,[c("div",{onClick:o[0]||(o[0]=y=>f.value=!u(f)),class:"md:hidden fixed z-20 right-5 top-5 py-2.5 w-7.5"},[c("div",{class:A(["w-7.5 h-1 duration-1000 before:duration-500 after:duration-500 before:absolute before:w-7.5 before:h-1 before:bg-white before:left-0 after:content-[''] after:absolute after:w-7.5 after:h-1 after:bg-white after:left-0",u(f)?"bg-transparent transition-none  before:top-1/2  before:bottom-auto  before:ranslate-y-1/2 before:-rotate-45 after:top-1/2  after:bottom-auto  after:ranslate-y-1/2 after:rotate-45":"bg-white before:top-0 after:bottom-0"])},null,2)]),c("div",{class:A(["text-4xl md:text-2xl max-w-6xl h-screen relative max-md:overflow-auto md:h-15 mx-auto flex flex-col md:flex-row items-center justify-between md:px-15 bg-[inherit]",u(f)?"top-0 duration-500 md:duration-0 ":"top-[calc(-100vh-500px)] duration-500 md:duration-0 md:top-0"])},[c("nav",ne,[c("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[1]||(o[1]=y=>b(u(n).getBoundingClientRect().y-60))},_(i.$t("navbar.links.about")),9,oe),c("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[2]||(o[2]=y=>b(u(s).getBoundingClientRect().y))},_(i.$t("navbar.links.skills")),9,ae),c("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[3]||(o[3]=y=>b(u(r).getBoundingClientRect().y))},_(i.$t("navbar.links.portfolio")),9,se),c("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[4]||(o[4]=y=>b(u(l).getBoundingClientRect().y))},_(i.$t("navbar.links.contacts")),9,re)]),c("div",ie,[v(p,{onSwitch:o[5]||(o[5]=y=>(u(t).amount?u(t).amount=0:u(t).amount=100,C())),label:"star",on:"ON",off:"OFF"}),v(p,{onSwitch:o[6]||(o[6]=y=>u(a)==="en"?a.value="uk":a.value="en"),label:"locale",on:"EN",off:"UA"})])],2)])}}});const ue=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),ce=(e,a)=>{const t=e.route.matched.find(s=>{var r;return((r=s.components)==null?void 0:r.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&ue(e.route,t));return typeof n=="function"?n(e.route):n},de=(e,a)=>({default:()=>e?g(E,e===!0?{}:e,a):a}),fe=k({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const t=N();return()=>g(H,{name:e.name,route:e.route,...a},{default:n=>{if(!n.Component)return;const s=ce(n,e.pageKey),r=t.deferHydration(),l=!!(e.transition??n.route.meta.pageTransition??S),d=l&&me([e.transition,n.route.meta.pageTransition,S,{onAfterLeave:()=>{t.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return j(D,l&&d,de(e.keepalive??n.route.meta.keepalive??O,g(I,{onPending:()=>t.callHook("page:start",n.Component),onResolve:()=>{M(()=>t.callHook("page:finish",n.Component).finally(r))}},{default:()=>g(be,{key:s,routeProps:n,pageKey:s,hasTransition:l})}))).default()}})}});function pe(e){return Array.isArray(e)?e:e?[e]:[]}function me(e){const a=e.map(t=>({...t,onAfterLeave:pe(t.onAfterLeave)}));return q(...a)}const be=k({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,t=e.routeProps.route,n={};for(const s in e.routeProps.route)n[s]=L(()=>a===e.pageKey?e.routeProps.route[s]:t[s]);return F("_route",P(n)),()=>g(e.routeProps.Component)}}),ye={},_e={class:"min-h-full"},ve={class:"md:pt-15"};function ge(e,a){const t=Q,n=le,s=fe;return h(),w("div",_e,[v(t),v(n),c("main",ve,[v(s)])])}const he=T(ye,[["render",ge]]);export{he as default};
