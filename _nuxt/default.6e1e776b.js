import{l as T,o as h,b as w,a as k,e as i,t as f,F as z,q as K,r as b,j as R,w as E,s as A,u,h as g,v as _,K as N,x as j,y as S,z as I,S as M,A as F,B as O,T as D,R as H,C as L,D as P,E as V}from"./entry.f5165f4c.js";function $(e){return e!==null&&typeof e=="object"}function B(e,a,t=".",n){if(!$(a))return B(e,{},t,n);const s=Object.assign({},a);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const c=e[r];c!=null&&(n&&n(s,r,c,t)||(Array.isArray(c)&&Array.isArray(s[r])?s[r]=[...c,...s[r]]:$(c)&&$(s[r])?s[r]=B(c,s[r],(t?`${t}.`:"")+r.toString(),n):s[r]=c))}return s}function q(e){return(...a)=>a.reduce((t,n)=>B(t,n,"",e),{})}const U=q(),G={},J={id:"background",class:"fixed left-0 right-0 bottom-0 top-[-100px] pb-[100px] translate-y-[100px] -z-10",style:{background:"radial-gradient(ellipse at center, #08192a 19%, black 100%)"}};function Q(e,a){return h(),w("div",J)}const W=T(G,[["render",Q]]),X={class:"flex relative"},Y=["id"],Z=["for"],ee={class:"absolute top-2.5 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-[white]"},te={class:"absolute top-2.5 right-0 pointer-events-none text-sm w-1/2 text-center text-white peer-checked:text-primary"},ne={class:"switch"},oe={class:"slider"},ae={class:"absolute top-2.5 z-10 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-[white]"},se={class:"absolute top-2.5 z-10 right-0 pointer-events-none text-sm w-1/2 text-center text-primary"},re=k({__name:"ToggleButton",props:{label:String,on:String,off:String},setup(e){return(a,t)=>(h(),w(z,null,[i("div",X,[i("input",{onClick:t[0]||(t[0]=n=>a.$emit("switch")),class:"w-0 h-0 invisible peer",type:"checkbox",id:e.label},null,8,Y),i("label",{for:e.label,class:"relative block cursor-pointer w-20 h-10 rounded-full bg-primary after:content-[''] after:absolute after:top-5px after:left-5px after:w-7.5 after:h-7.5 after:bg-white after:rounded-full after:duration-300 active:after:w-11 peer-checked:after:left-full peer-checked:after:-ml-5px peer-checked:after:-translate-x-full"},null,8,Z),i("span",ee,f(e.on),1),i("span",te,f(e.off),1)]),i("label",ne,[i("input",{type:"checkbox",onClick:t[1]||(t[1]=n=>a.$emit("switch")),class:"peer"}),i("span",oe,[i("span",ae,f(e.on),1),i("span",se,f(e.off),1)])])],64))}});const ie={class:"w-full h-15 text-white fixed z-10 mx-auto bg-black"},le={class:"flex gap-5 flex-col md:flex-row items-center md:justify-between py-24 md:py-0"},ce=["disabled"],ue=["disabled"],de=["disabled"],fe=["disabled"],me={class:"flex gap-3 flex-col md:flex-row mb-24 md:mb-0"},pe=k({__name:"Navbar",setup(e){const{locale:a}=K(),t=b({amount:100,size:{min:1,max:5,giant:7},duration:{min:2,max:15}}),n=b(),s=b(),r=b(),c=b(),d=b(!1),m=b(!1);R(()=>{C(),n.value=document.getElementById("about"),s.value=document.getElementById("skills"),r.value=document.getElementById("portfolio"),c.value=document.getElementById("contacts")});const x=(l,o)=>l+Math.random()*(o-l),C=()=>{setTimeout(()=>{document.querySelectorAll(".star").forEach(l=>{l.remove()});for(let l=0;l<t.value.amount;l++){const o=document.createElement("span");o.classList.add("star");const p=Math.round(Math.random()*10)===0?t.value.size.giant:x(t.value.size.min,t.value.size.max);o.style.width=p+"px",o.style.height=p+"px",o.style.position="absolute",o.style.left=x(0,100)+"%",o.style.top=x(0,100)+"%",o.style.background="radial-gradient(ellipse at center,#9370db 2%,#053f76 100%)",o.style.borderRadius="100%",o.style.boxShadow="0 0 "+p+"px "+p/2+"px #043668",o.style.transform="translate3d(0, 0, 200px)",o.style.animation=Math.round(Math.random()*5)===0?"move linear infinite":"shine infinite alternate",o.style.animationDuration=x(t.value.duration.min,t.value.duration.max)+"s",document.getElementById("background").append(o)}},150)},y=l=>{m.value=!1,d.value=!0,l>50?(window.scrollBy(0,50),setTimeout(()=>{y(l-50)},20)):l<-50?(window.scrollBy(0,-50),setTimeout(()=>{y(l+50)},20)):(window.scrollBy(0,l),d.value=!1)};return E(m,()=>{m.value?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),(l,o)=>{const p=re;return h(),w("header",ie,[i("div",{onClick:o[0]||(o[0]=v=>m.value=!u(m)),class:"md:hidden fixed z-20 right-5 top-5 py-2.5 w-7.5"},[i("div",{class:A(["w-7.5 h-1 duration-1000 before:duration-500 after:duration-500 before:absolute before:w-7.5 before:h-1 before:bg-white before:left-0 after:content-[''] after:absolute after:w-7.5 after:h-1 after:bg-white after:left-0",u(m)?"bg-transparent transition-none  before:top-1/2  before:bottom-auto  before:ranslate-y-1/2 before:-rotate-45 after:top-1/2  after:bottom-auto  after:ranslate-y-1/2 after:rotate-45":"bg-white before:top-0 after:bottom-0"])},null,2)]),i("div",{class:A(["text-4xl md:text-2xl max-w-6xl h-screen relative max-md:overflow-auto md:h-15 mx-auto flex flex-col md:flex-row items-center justify-between md:px-15 bg-[inherit]",u(m)?"top-0 duration-500 md:duration-0 ":"top-[calc(-100vh-500px)] duration-500 md:duration-0 md:top-0"])},[i("nav",le,[i("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[1]||(o[1]=v=>y(u(n).getBoundingClientRect().y-60))},f(l.$t("navbar.links.about")),9,ce),i("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[2]||(o[2]=v=>y(u(s).getBoundingClientRect().y))},f(l.$t("navbar.links.skills")),9,ue),i("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[3]||(o[3]=v=>y(u(r).getBoundingClientRect().y))},f(l.$t("navbar.links.portfolio")),9,de),i("button",{class:"link hover:text-[#4b0082]",disabled:u(d),onClick:o[4]||(o[4]=v=>y(u(c).getBoundingClientRect().y))},f(l.$t("navbar.links.contacts")),9,fe)]),i("div",me,[g(p,{onSwitch:o[5]||(o[5]=v=>(u(t).amount?u(t).amount=0:u(t).amount=100,C())),label:"star",on:"ON",off:"OFF"}),g(p,{onSwitch:o[6]||(o[6]=v=>u(a)==="en"?a.value="uk":a.value="en"),label:"locale",on:"EN",off:"UA"})])],2)])}}});const be=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),ye=(e,a)=>{const t=e.route.matched.find(s=>{var r;return((r=s.components)==null?void 0:r.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&be(e.route,t));return typeof n=="function"?n(e.route):n},ve=(e,a)=>({default:()=>e?_(N,e===!0?{}:e,a):a}),ge=k({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const t=j();return()=>_(H,{name:e.name,route:e.route,...a},{default:n=>{if(!n.Component)return;const s=ye(n,e.pageKey),r=t.deferHydration(),c=!!(e.transition??n.route.meta.pageTransition??S),d=c&&xe([e.transition,n.route.meta.pageTransition,S,{onAfterLeave:()=>{t.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return I(D,c&&d,ve(e.keepalive??n.route.meta.keepalive??O,_(M,{onPending:()=>t.callHook("page:start",n.Component),onResolve:()=>{F(()=>t.callHook("page:finish",n.Component).finally(r))}},{default:()=>_(he,{key:s,routeProps:n,pageKey:s,hasTransition:c})}))).default()}})}});function _e(e){return Array.isArray(e)?e:e?[e]:[]}function xe(e){const a=e.map(t=>({...t,onAfterLeave:_e(t.onAfterLeave)}));return U(...a)}const he=k({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,t=e.routeProps.route,n={};for(const s in e.routeProps.route)n[s]=L(()=>a===e.pageKey?e.routeProps.route[s]:t[s]);return P("_route",V(n)),()=>_(e.routeProps.Component)}}),we={},ke={class:"min-h-full"},$e={class:"md:pt-15"};function Be(e,a){const t=W,n=pe,s=ge;return h(),w("div",ke,[g(t),g(n),i("main",$e,[g(s)])])}const Ae=T(we,[["render",Be]]);export{Ae as default};
