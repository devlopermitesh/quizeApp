import{u as y,r as f,j as t}from"./index-CmIqT1Au.js";import{B as m}from"./Button-_sHZRvLP.js";const g=()=>{const h=y(),d=f.useRef(null);return f.useEffect(()=>{const e=d.current,s=e.getContext("2d");class v{constructor({positionX:n,positionY:o},{vx:l,vy:r},c){this.x=n,this.y=o,this.radius=c,this.velocityX=l,this.velocityY=r}Draw(){s.beginPath(),s.arc(this.x,this.y,this.radius,0,2*Math.PI),s.lineWidth=1,s.strokeStyle="white",s.stroke()}Update(){this.Draw(),this.x+=this.velocityX,this.y-=this.velocityY,this.y<-this.radius&&(this.y=e.height+this.radius,this.x=Math.random()*e.width,this.velocityX=(Math.random()-.5)*2,this.velocityY=(Math.random()-.5)*2)}}const x=[];for(let i=0;i<30;i++){const n=Math.random()*e.width,o=Math.random()*e.height,l=(Math.random()-.5)*2,r=Math.random()*2+1,c=9,b=new v({positionX:n,positionY:o},{vx:l,vy:r},c);x.push(b)}const u=()=>{requestAnimationFrame(u),s.clearRect(0,0,e.width,e.height),x.forEach(i=>i.Update())};u();const a=()=>{e.width=window.innerWidth,e.height=window.innerHeight/2.2};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),t.jsxs("div",{className:"absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col justify-center items-center",children:[t.jsx("canvas",{ref:d,className:"absolute top-0 opacity-80 blur-effect"}),t.jsx("h2",{className:"block text-4xl font-bold text-gradient font-inknut capitalize z-10 ",children:"Brain Mindset"}),t.jsxs("div",{className:" w-full relative top-36  text-white space-y-10 text-2xl font-inknut",children:[t.jsxs("span",{children:[t.jsx("b",{className:"text-white text-2xl font-inknut  capitalize block",children:"Let`s play!"}),t.jsx("b",{className:"text-xl block",children:"play now and level up"})]}),t.jsxs("div",{className:"flex-col flex justify-center items-center gap-y-5",children:[t.jsx(m,{text:"Play now",onClick:()=>h("/levels"),className:"bg-violet-600"}),t.jsx(m,{text:"About us",onClick:()=>h("/about"),className:"bg-tr"})]})]})]})};export{g as default};
