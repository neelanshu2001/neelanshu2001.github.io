import{j as e,a as i,r as u,A as h,C as f,T as m,M as p,b as x,c,B as v,d as g,R as y,e as b}from"./vendor.d2b81484.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};w();const N=()=>e("div",{className:"bg-blue-100 h-[90.5vh] text-white flex flex-col hover:text-indigo-100  ",children:i("div",{className:"h-full flex flex-row justify-around space-x-4 mx-4",children:[e("div",{className:"bg-white rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:shadow-sm",children:"HEllo"}),e("div",{className:"bg-white rounded-lg drop-shadow-lg my-10 w-2/12 text-black flex flex-col hover:shadow-sm",children:"HEllo"})]})}),d=["Products","Pricing","Blog"],O=()=>{const[s,l]=u.exports.useState(null),n=()=>{l(null)};return e(h,{position:"static",className:"opacity-90",children:e(f,{maxWidth:"xl",children:i(m,{disableGutters:!0,children:[e("div",{className:"text-2xl flex items-center transition ease-in-out delay-150 scale-95 font-bold hover:scale-100 cursor-default   drop-shadow-lg hover:drop-shadow-sm hover:text-blue-200 ",children:"Neelanshu Garg"}),e("div",{className:"flex flex-grow",children:e(p,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(s),onClose:n,sx:{display:{xs:"block",md:"none"}},children:d.map(t=>e(x,{onClick:n,children:e(c,{textAlign:"center",children:t})},t))})}),e(c,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"LOGO"}),e(v,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:d.map(t=>e(g,{onClick:n,sx:{my:2,color:"white",display:"block"},children:t},t))})]})})})};function M(){return u.exports.useState(0),i("div",{className:"h-screen ",children:[e(O,{}),e(N,{})]})}y.render(e(b.StrictMode,{children:e(M,{})}),document.getElementById("root"));
