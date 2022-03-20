import{j as s,a as e,_ as c,r as g,m,R as h,b as p,c as u,B as f}from"./vendor.69303933.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};b();var x="/assets/bg.f7c109d6.png";const A=({project:t})=>(console.log(t),s("div",{className:"cursor-default w-60 h-30 rounded overflow-hidden shadow-lg transition delay-150 hover:shadow-md hover:scale-105",children:[e("img",{className:"",src:x,alt:"Sunset in the mountains"}),s("div",{className:"px-6 py-4",children:[e("div",{className:"font-bold text-sm mb-2",children:t.name}),s("div",{className:"text-gray-700 text-xs",children:[t.description,"    "]})]})]}));A.propTypes={};function w({projects:t}){return console.log({projects:t}),e("div",{className:"grid grid-cols-3 grid-flow-row gap-x-4 gap-y-6",children:t||t.length>0?t.map((o,n)=>e(A,{project:o},n)):null})}const v=({projects:t})=>s("div",{className:"flex flex-col space-x-4 my-2 mx-auto",children:[e("div",{className:"text-2xl  font-bold text-bg-slate-800 ",children:"Projects"}),e("div",{className:"border my-2"}),e(w,{projects:t})]});var y="data:image/png;base64,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",B="data:image/png;base64,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",C="data:image/png;base64,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",Q="/assets/react.7db586ff.png",D="/assets/python.63d96164.gif",I="/assets/javascript.417d22aa.gif",U="data:image/png;base64,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";const N=({name:t})=>(console.log(t),e("img",{src:t==="matlab"?y:t==="mongodb"?B:t==="nodejs"?C:t==="react"?Q:t==="python"?D:t==="javascript"?I:U,className:"w-20 h-20 transition delay-200 cursor-pointer hover:scale-105 items-center"})),l=({name:t,paddingCircle:o})=>e(c,{interval:3e3,navButtonsProps:{style:{color:"white",fontSize:"20px",padding:"4px"}},navButtonsWrapperProps:{style:{height:"120px",backgroundColor:"transparent"}},indicatorIconButtonProps:{style:{padding:"2px"}},indicatorContainerProps:{style:{marginTop:"10px"}},children:t.map((n,i)=>e("div",{className:" flex flex-row justify-center ",children:e("div",{className:`bg-gray-50 hover:bg-white rounded-full p-${o}`,children:e(N,{name:n},i)})},i))}),k=()=>e("div",{className:" h-[90.5vh] bg-gray-100",children:s("div",{className:"h-full flex flex-row space-x-6 mx-6",children:[e("div",{className:"bg-white bg-opacity-90 bg-cover rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:drop-shadow-md overflow-y-auto",children:e(v,{projects:[{name:"Handwritten Alphanumeric  Recognition",description:"CNN based approach to identify handwritten alpha0numeric characters"},{name:"Contest Tracker Website",description:"A website to track contests from various websites and allowing user to link their gooogle calendar with it"},{name:"Contest Tracker Website",description:"A website to track contests from various websites and allowing user to link their gooogle calendar with it"},{name:"Contest Tracker Website",description:"A website to track contests from various websites and allowing user to link their gooogle calendar with it"},{name:"Contest Tracker Website",description:"A website to track contests from various websites and allowing user to link their gooogle calendar with it"},{name:"Contest Tracker Website",description:"A website to track contests from various websites and allowing user to link their gooogle calendar with it"}]})}),s("div",{className:"flex flex-col  justify-center  w-2/12",children:[s("div",{className:"bg-slate-100 py-2 space-y-2 bg-opacity-90 rounded-lg drop-shadow-lg  my-10  text-black  hover:drop-shadow-md transition delay-150 hover:scale-105 flex flex-col  justify-around",children:[e("div",{className:"ml-2  text-lg font-semibold",children:"Programming"}),e(l,{name:["cplusplus","python","javascript"],paddingCircle:5})]}),s("div",{className:"bg-slate-100 py-2 space-y-2 bg-opacity-90 rounded-lg drop-shadow-lg  my-10  text-black  hover:drop-shadow-md transition delay-150 hover:scale-105 flex flex-col  justify-around",children:[e("div",{className:"ml-2  text-lg font-semibold",children:"Development"}),e(l,{name:["mongodb","matlab","nodejs","react"],paddingCircle:4})]})]})]})}),E=()=>e("div",{className:"md:hidden",id:"mobile-menu",children:s("div",{ref,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e("a",{href:"#",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Dashboard"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Team"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Projects"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Calendar"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Reports"})]})});function P(){const[t,o]=g.exports.useState(!1);return e("div",{children:s("nav",{className:"bg-gray-800",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s("div",{className:"flex items-center justify-between h-16",children:[s("div",{className:"flex items-center",children:[e("div",{className:"flex-shrink-0 cursor-default",children:"Neelanshu Garg"}),e("div",{className:"hidden md:block",children:s("div",{className:"ml-10 flex items-baseline space-x-4",children:[e("a",{href:"#",className:" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Dashboard"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Team"}),e("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Projects"})]})})]}),e("div",{className:"-mr-2 flex md:hidden",children:s("button",{onClick:()=>o(!t),type:"button",className:"bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[e("span",{className:"sr-only",children:"Open main menu"}),t?e("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):e("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),e(m,{show:t,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:n=>e(E,{})})]})})}const M=()=>e("div",{className:"h-screen bg-blue-100  text-white flex flex-col hover:text-indigo-100 ",children:s("div",{className:"mx-8 rounded-lg drop-shadow-md h-full ",children:[e(P,{}),e(h,{children:e(p,{path:"/",element:e(k,{})})})]})});u.render(e(f,{children:e(M,{})}),document.getElementById("root"));
