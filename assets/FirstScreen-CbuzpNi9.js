import{u as j,r as h,j as t,B as b}from"./index-DjikwnvF.js";import{m as k}from"./motion-SMW3bwaK.js";const A=()=>{const d=j(),[v,u]=h.useState(!1),x=h.useRef(null);h.useEffect(()=>{const e=x.current,s=e.getContext("2d");class w{constructor({positionX:n,positionY:o},{vx:l,vy:r},c){this.x=n,this.y=o,this.radius=c,this.velocityX=l,this.velocityY=r}Draw(){s.beginPath(),s.arc(this.x,this.y,this.radius,0,2*Math.PI),s.lineWidth=1,s.strokeStyle="white",s.stroke()}Update(){this.Draw(),this.x+=this.velocityX,this.y-=this.velocityY,this.y<-this.radius&&(this.y=e.height+this.radius,this.x=Math.random()*e.width,this.velocityX=(Math.random()-.5)*2,this.velocityY=(Math.random()-.5)*2)}}const m=[];for(let i=0;i<30;i++){const n=Math.random()*e.width,o=Math.random()*e.height,l=(Math.random()-.5)*2,r=Math.random()*2+1,c=9,g=new w({positionX:n,positionY:o},{vx:l,vy:r},c);m.push(g)}const f=()=>{requestAnimationFrame(f),s.clearRect(0,0,e.width,e.height),m.forEach(i=>i.Update())};f();const a=()=>{e.width=window.innerWidth,e.height=window.innerHeight/2.2};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const y=()=>{u(!0),setTimeout(()=>d("/levels"),500)},p=()=>{u(!0),setTimeout(()=>d("/about"),500)};return t.jsxs(k.div,{initial:{x:0},animate:{x:v?-1e3:0},transition:{duration:3},className:"absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col justify-center items-center",children:[t.jsx("canvas",{ref:x,className:"absolute top-0 opacity-80 blur-effect"}),t.jsx("h2",{className:"block text-4xl font-bold text-gradient font-inknut capitalize z-10 ",children:"Brain Mindset"}),t.jsxs("div",{className:" w-full relative top-36  text-white space-y-10 text-2xl font-inknut",children:[t.jsxs("span",{children:[t.jsx("b",{className:"text-white text-2xl font-inknut  capitalize block",children:"Let`s play!"}),t.jsx("b",{className:"text-xl block",children:"play now and level up"})]}),t.jsxs("div",{className:"flex-col flex justify-center items-center gap-y-5",children:[t.jsx(b,{text:"Play now",onClick:y,className:"bg-violet-600"}),t.jsx(b,{text:"About us",onClick:p,className:"bg-tr"})]})]})]})};export{A as default};
