import{j as e,r as L,a as I}from"./react-9de083a1.js";import{c as N}from"./react-dom-e432025b.js";import{y as c}from"./@faker-js-a7768622.js";import{u as d,a as v,P as C}from"./react-redux-a4dd3e3b.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-a192e302.js";import{N as h,u as R,a as F,b as g}from"./react-router-62f1dd9f.js";import{C as O,a as B,A as E,r as W,b as A,T as u,c as m,B as f,F as P,G as l,d as j,e as D,I as G,f as T,g as U,h as q,i as J,j as y}from"./@mui-58e0e0b3.js";import{c as z,a as M}from"./@reduxjs-a988f2ad.js";import{B as _}from"./react-router-dom-e3dbf3ed.js";import"./@babel-1aac1c3c.js";import"./scheduler-765c72db.js";import"./use-sync-external-store-307f1685.js";import"./@remix-run-ca7b21aa.js";import"./clsx-1229b3e0.js";import"./@emotion-7ba16ede.js";import"./stylis-581c9ed0.js";import"./react-transition-group-ad93c6ca.js";import"./immer-b106be54.js";import"./redux-60fca142.js";import"./redux-thunk-ef899f4c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const x=[];function $(){return{userId:c.datatype.uuid(),username:c.internet.userName(),email:c.internet.email(),avatar:c.image.avatar(),password:c.internet.password(),birthdate:c.date.birthdate().toString(),registeredAt:c.date.past().toString()}}Array.from({length:25}).forEach(()=>{x.push($())});const H=({children:t})=>d(n=>n.user.isLogged)?e.jsx(h,{to:"/user",replace:!0}):t,K=({children:t})=>d(n=>n.user.isLogged)?t:e.jsx(h,{to:"/login"}),Q=({userId:t="No ID",userName:o="No Name",avatar:n,email:a="No Email",birthdate:r="No Birthdate",registeredAt:s="No Registered"})=>e.jsxs(O,{sx:{maxWidth:445},children:[e.jsx(B,{avatar:e.jsx(E,{sx:{bgcolor:W[500],width:56,height:56},"aria-label":"recipe",children:e.jsx("img",{src:n||"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",alt:"Avatar"})}),title:o,subheader:a}),e.jsx(A,{children:e.jsxs(u,{variant:"body2",color:"text.secondary",children:["Id de usuario: ",t,e.jsx("br",{}),"Fecha de nacimiento: ",r,e.jsx("br",{}),"Fecha de registro: ",s]})})]}),V=()=>{const{userId:t,username:o,avatar:n,email:a,birthdate:r,registeredAt:s}=d(i=>i.user.userInfo);return e.jsx(e.Fragment,{children:e.jsx(m,{maxWidth:"sm",sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pt:25},children:e.jsx(Q,{userId:t,userName:o,avatar:n,email:a,birthdate:r,registeredAt:s})})})},X=()=>{const t=localStorage.getItem("authenticated")||JSON.stringify({isLogged:!1,userInfo:null});return JSON.parse(t)},S=z({name:"user",initialState:X,reducers:{userLogin:(t,o)=>{t.userInfo=o.payload,t.isLogged=!0},userLogout:t=>{t.userInfo=null,t.isLogged=!1}}}),{userLogin:Y,userLogout:Z}=S.actions,k=S.reducer,ee=()=>{const t=R(),o=v(),n=({email:r,password:s})=>{const i=x.find(({email:p})=>p===r);return(i==null?void 0:i.password)===s?(o(Y(i)),!0):!1},a=r=>{r.preventDefault();const s=new FormData(r.currentTarget),i={email:s.get("email"),password:s.get("password")};s.forEach(function(p,w){i[w]=p}),n(i)?t("/user"):alert("Usuario o contraseña incorrectos")};return e.jsx(e.Fragment,{children:e.jsx(m,{maxWidth:"sm",sx:{paddingtop:"2rem",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",height:"100vh"},children:e.jsx(f,{component:"form",onSubmit:a,border:1,borderColor:"primary.main",borderRadius:8,padding:1,children:e.jsx(f,{borderColor:"primary.main",children:e.jsx(P,{children:e.jsxs(l,{container:!0,spacing:3,padding:5,children:[e.jsx(l,{item:!0,xs:12,children:e.jsx("h2",{children:"Login"})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(j,{id:"email",name:"email",label:"E-mail",variant:"outlined",fullWidth:!0,required:!0})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(j,{id:"password",name:"password",label:"Password",variant:"outlined",type:"password",fullWidth:!0,required:!0})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(D,{type:"submit",variant:"contained",color:"primary",children:"Log in"})})]})})})})})})},te=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{})}),re=()=>{const t=v();return e.jsx(e.Fragment,{children:e.jsx(G,{size:"large",edge:"end",color:"inherit","aria-label":"menu",sx:{mt:1,mr:2},title:"Logout",onClick:()=>{t(Z())},children:e.jsx(u,{children:e.jsx(T,{})})})})},se=({children:t})=>{const o=d(n=>n.user.isLogged);return e.jsxs(e.Fragment,{children:[e.jsx(U,{position:"static",sx:{boxShadow:0,position:"fixed",mt:0,p:0,zIndex:2},children:e.jsxs(q,{maxWidth:"xl",sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(m,{maxWidth:"xl",children:e.jsxs(J,{disableGutters:!0,children:[e.jsx(y,{sx:{display:{xs:"none",md:"flex"},mr:1}}),e.jsx(u,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),e.jsx(y,{sx:{display:{xs:"flex",md:"none"},mr:1}}),e.jsx(u,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"})]})}),e.jsx(m,{maxWidth:"xs",sx:{display:"flex",justifyContent:"flex-end"},children:o?e.jsx(re,{}):null})]})}),t]})},oe=()=>{const t=d(o=>o.user);return L.useEffect(()=>{t.isLogged?localStorage.setItem("authenticated",JSON.stringify(t)):localStorage.removeItem("authenticated")},[t]),e.jsx(se,{children:e.jsxs(F,{children:[e.jsx(g,{path:"*",element:e.jsx(h,{to:"/login"})}),e.jsx(g,{path:"/login",element:e.jsx(H,{children:e.jsx(te,{})})}),e.jsx(g,{path:"/user",element:e.jsx(K,{children:e.jsx(V,{})})})]})})},ne=()=>(L.useEffect(()=>{x.length>0&&console.log(x)},[]),e.jsx(oe,{}));const ie=M({reducer:{user:k}}),b=document.getElementById("root");b&&N.createRoot(b).render(e.jsx(I.StrictMode,{children:e.jsx(C,{store:ie,children:e.jsx(_,{children:e.jsx(ne,{})})})}));