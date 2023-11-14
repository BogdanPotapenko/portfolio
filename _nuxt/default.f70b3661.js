import{a as _,r as p,w as T,k as S,o as g,b as y,F as K,i as R,u as l,e as d,t as x,s as E,v as C,h,x as w,K as M,y as N,z as A,A as j,S as I,B as D,C as F,T as H,R as O,j as L,D as P,E as V}from"./entry.2c9758c9.js";function k(e){return e!==null&&typeof e=="object"}function B(e,a,t=".",n){if(!k(a))return B(e,{},t,n);const o=Object.assign({},a);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const i=e[r];i!=null&&(n&&n(o,r,i,t)||(Array.isArray(i)&&Array.isArray(o[r])?o[r]=[...i,...o[r]]:k(i)&&k(o[r])?o[r]=B(i,o[r],(t?`${t}.`:"")+r.toString(),n):o[r]=i))}return o}function U(e){return(...a)=>a.reduce((t,n)=>B(t,n,"",e),{})}const q=U(),G={id:"background",class:"min-h-screen fixed left-0 right-0 -top-[100px] pb-[100px] translate-y-[100px]",style:{background:"radial-gradient(ellipse at center, #08192a 10%, black 100%)"}},J=_({__name:"Background",props:{isBackground:{type:Boolean}},setup(e){const a=e,t=p({amount:100,size:{min:.5,max:1.5,giant:2},duration:{min:2,max:10}}),n=p(),o=(s,u)=>s+Math.random()*(u-s),r=()=>{setTimeout(()=>{n.value.forEach(s=>{const u=Math.round(Math.random()*10)===0?t.value.size.giant:o(t.value.size.min,t.value.size.max);s.style.width=u+"px",s.style.height=u+"px",s.style.position="absolute",s.style.left=o(0,100)+"%",s.style.top=o(0,100)+"%",s.style.background="radial-gradient(ellipse at center,#dce5ed 2%,#6c89a4 100%)",s.style.borderRadius="100%",s.style.boxShadow="0 0 "+u+"px "+u/3+"px #dce5ed",s.style.transform="translate3d(0, 0, 200px)",s.style.animation="shine infinite alternate",s.style.animationDuration=o(t.value.duration.min,t.value.duration.max)+"s",document.getElementById("background").append(s)})},0)},i=()=>{if(n.value.length>0){const s=n.value[Math.floor(o(0,t.value.amount))];s.style.animation="move linear",s.style.animationDuration=o(.5,1)+"s",setTimeout(()=>{s.style.animation="shine infinite alternate",s.style.animationDuration=o(t.value.duration.min,t.value.duration.max)+"s",i()},Math.floor(o(3,10))*1e3)}else setTimeout(()=>{i()},Math.floor(o(3,10))*1e3)};return T(()=>a.isBackground,()=>{a.isBackground?(t.value.amount=100,setTimeout(()=>{r()},100)):t.value.amount=0}),S(()=>{r(),i()}),(s,u)=>(g(),y("div",G,[(g(!0),y(K,null,R(l(t).amount,m=>(g(),y("div",{ref_for:!0,ref_key:"stars",ref:n},null,512))),256))]))}}),Q={class:"relative w-20 h-10"},W=d("span",{class:"relative inline-block cursor-pointer w-20 h-10 rounded-full bg-primary after:content-[''] after:absolute after:inline-block after:top-[5px] after:w-7.5 after:h-7.5 after:bg-white after:rounded-full after:translate-x-[5px] after:duration-300 after:ease-in-out peer-checked:after:translate-x-[45px] peer-active:after:w-[40px] peer-checked:peer-active:after:translate-x-[35px]"},null,-1),X={class:"absolute top-2.5 z-10 left-0 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-white"},Y={class:"absolute top-2.5 z-10 right-0 pointer-events-none text-sm w-1/2 text-center text-white peer-checked:text-primary"},Z=_({__name:"ToggleButton",props:{label:String,on:String,off:String},setup(e){return(a,t)=>(g(),y("label",Q,[d("input",{type:"checkbox",onClick:t[0]||(t[0]=n=>a.$emit("switch")),class:"peer hidden"}),W,d("span",X,x(e.on),1),d("span",Y,x(e.off),1)]))}}),ee={class:"w-full h-15 text-white fixed z-20 mx-auto",style:{background:"radial-gradient(ellipse at bottom, #08192a -100%, black 100%)"}},te={class:"flex gap-5 flex-col md:flex-row items-center md:justify-between py-24 md:py-0"},ne=["disabled"],oe=["disabled"],ae=["disabled"],se=["disabled"],re={class:"flex gap-3 flex-col md:flex-row mb-24 md:mb-0"},ie=_({__name:"Navbar",emits:["close"],setup(e,{emit:a}){const{locale:t}=E(),n=p(),o=p(),r=p(),i=p(),s=p(),u=p(!1),m=p(!1),z=()=>{a("close")};S(()=>{n.value=document.getElementById("about"),o.value=document.getElementById("skills"),r.value=document.getElementById("portfolio"),i.value=document.getElementById("contacts"),s.value=window.innerHeight});const v=f=>{m.value=!1,u.value=!0,f>50?(window.scrollBy(0,50),setTimeout(()=>{v(f-50)},20)):f<-50?(window.scrollBy(0,-50),setTimeout(()=>{v(f+50)},20)):(window.scrollBy(0,f),u.value=!1)};return T(m,()=>{m.value?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),(f,c)=>{const $=Z;return g(),y("header",ee,[d("div",{onClick:c[0]||(c[0]=b=>m.value=!l(m)),class:"md:hidden fixed z-30 right-5 top-5 py-2.5 w-7.5"},[d("div",{class:C(["w-7.5 h-1 duration-1000 before:duration-500 after:duration-500 before:absolute before:w-7.5 before:h-1 before:bg-white before:left-0 after:content-[''] after:absolute after:w-7.5 after:h-1 after:bg-white after:left-0",l(m)?"bg-transparent transition-none  before:top-1/2  before:bottom-auto  before:ranslate-y-1/2 before:-rotate-45 after:top-1/2  after:bottom-auto  after:ranslate-y-1/2 after:rotate-45":"bg-white before:top-0 after:bottom-0"])},null,2)]),d("div",{class:C(["text-4xl md:text-[22px] max-w-6xl h-screen relative max-md:overflow-auto md:h-15 mx-auto flex flex-col md:flex-row items-center justify-between md:px-15 max-md:bg-black",l(m)?"top-0 duration-500 md:duration-0 ":"top-[calc(-100vh-500px)] duration-500 md:duration-0 md:top-0"])},[d("nav",te,[d("button",{class:"hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]",disabled:l(u),onClick:c[1]||(c[1]=b=>v(l(n).getBoundingClientRect().y-60))},x(f.$t("navbar.links.about")),9,ne),d("button",{class:"hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]",disabled:l(u),onClick:c[2]||(c[2]=b=>v(l(o).getBoundingClientRect().y-60))},x(f.$t("navbar.links.skills")),9,oe),d("button",{class:"hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]",disabled:l(u),onClick:c[3]||(c[3]=b=>v(l(r).getBoundingClientRect().y-60))},x(f.$t("navbar.links.portfolio")),9,ae),d("button",{class:"hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]",disabled:l(u),onClick:c[4]||(c[4]=b=>v(l(i).getBoundingClientRect().bottom-l(s)))},x(f.$t("navbar.links.contacts")),9,se)]),d("div",re,[h($,{onSwitch:c[5]||(c[5]=b=>z()),label:"star",on:"ON",off:"OFF"}),h($,{onSwitch:c[6]||(c[6]=b=>l(t)==="en"?t.value="uk":t.value="en"),label:"locale",on:"EN",off:"UA"})])],2)])}}});const le=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),ue=(e,a)=>{const t=e.route.matched.find(o=>{var r;return((r=o.components)==null?void 0:r.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&le(e.route,t));return typeof n=="function"?n(e.route):n},ce=(e,a)=>({default:()=>e?w(M,e===!0?{}:e,a):a}),de=_({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const t=N();return()=>w(O,{name:e.name,route:e.route,...a},{default:n=>{if(!n.Component)return;const o=ue(n,e.pageKey),r=t.deferHydration(),i=!!(e.transition??n.route.meta.pageTransition??A),s=i&&pe([e.transition,n.route.meta.pageTransition,A,{onAfterLeave:()=>{t.callHook("page:transition:finish",n.Component)}}].filter(Boolean));return j(H,i&&s,ce(e.keepalive??n.route.meta.keepalive??F,w(I,{onPending:()=>t.callHook("page:start",n.Component),onResolve:()=>{D(()=>t.callHook("page:finish",n.Component).finally(r))}},{default:()=>w(me,{key:o,routeProps:n,pageKey:o,hasTransition:i})}))).default()}})}});function fe(e){return Array.isArray(e)?e:e?[e]:[]}function pe(e){const a=e.map(t=>({...t,onAfterLeave:fe(t.onAfterLeave)}));return q(...a)}const me=_({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,t=e.routeProps.route,n={};for(const o in e.routeProps.route)n[o]=L(()=>a===e.pageKey?e.routeProps.route[o]:t[o]);return P("_route",V(n)),()=>w(e.routeProps.Component)}}),ve={class:"min-h-full"},be={class:"md:pt-15 relative z-10"},ge=_({__name:"default",setup(e){const a=p(!0);return(t,n)=>{const o=J,r=ie,i=de;return g(),y("div",ve,[h(o,{isBackground:l(a)},null,8,["isBackground"]),h(r,{onClose:n[0]||(n[0]=s=>a.value=!l(a))}),d("main",be,[h(i)])])}}});export{ge as default};