"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[505],{505:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(942),r=n(413),o=n(439),a=n(791),i=n(184);var l=function(e){var t=e.text,n=e.icone;return(0,i.jsxs)("div",{style:{color:"white",display:"flex",alignItems:"center",marginBottom:"0.3rem"},children:[(0,i.jsx)("p",{className:"textContact",style:{marginRight:"0.4rem",fontWeight:"bold"},children:t}),(0,i.jsx)("img",{style:{width:"1.5rem",position:"relative",zIndex:5},src:"/portfolio/images/"+n})]})},c=n(441);function m(){var e=(0,a.useRef)(),t=(0,a.useRef)(),n=(0,a.useRef)(),m=(0,a.useRef)(),d=(0,c.YD)({triggerOnce:!1,threshold:.5}),p=(0,o.Z)(d,2),u=p[0],f=p[1],x=(0,a.useState)({nom:"",prenom:"",objet:"",message:""}),h=(0,o.Z)(x,2),g=h[0],j=h[1],v=function(e){var t=e.target.id;j((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,s.Z)({},t,e.target.value))}))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{ref:u,id:"sectionContact",children:[(0,i.jsx)("div",{ref:m,className:"blocSuccess",children:(0,i.jsx)("p",{children:"Votre message a bien \xe9tait envoyer"})}),(0,i.jsx)("div",{className:"blocGaucheContact",children:(0,i.jsxs)("form",{ref:e,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{id:"nom",onChange:v,className:"inputContact",value:g.nom,type:"text",placeholder:"Nom"}),(0,i.jsx)("input",{id:"prenom",onChange:v,className:"inputContact",value:g.prenom,type:"text",placeholder:"Prenom"})]}),(0,i.jsx)("input",{id:"objet",onChange:v,type:"text",className:"inputContact inputContactObjet",value:g.objet,placeholder:"Objet"}),(0,i.jsx)("textarea",{id:"message",onChange:v,value:g.message,placeholder:"Votre message ..."}),(0,i.jsxs)("button",{className:"btnForm",type:"submit",onClick:function(e){e.preventDefault(),Object.entries(g).forEach((function(e){var t=(0,o.Z)(e,2),n=t[0],s=t[1],r=document.querySelector("#"+n);""==s?r.style.border="1px solid #dd2d4a":"message"==n?r.style.border="1px solid white":(r.style.border="none",r.style.borderBottom="1px solid white")})),Object.values(g).every((function(e){return""!==e}))&&(n.current.style.display="flex",t.current.style.display="none",fetch("http://www.guillaume.com/portfolio/public/mail.php?nom="+g.nom+"&prenom="+g.prenom+"&objet="+g.objet+"&message="+g.message).then((function(e){e.text().then((function(e){"success"==e?(n.current.style.display="none",t.current.style.display="block",m.current.textContent="Votre message \xe0 bien \xe9tait envoyer",m.current.animate([{transform:"translateY(0px)",offset:.2},{transform:"translateY(-40px)",offset:.3},{transform:"translateY(-40px)",offset:.8},{transform:"translateY(100px)",offset:1}],{duration:5e3})):(n.current.style.display="none",t.current.style.display="block",m.current.textContent="Une erreur est survenue",m.current.animate([{transform:"translateY(0px)",offset:.2},{transform:"translateY(-40px)",offset:.3},{transform:"translateY(-40px)",offset:.8},{transform:"translateY(100px)",offset:1}],{duration:5e3}))}))})))},children:[(0,i.jsx)("span",{ref:t,children:"Envoyer"}),(0,i.jsxs)("div",{ref:n,className:"blocRond",style:{gap:"2px"},children:[(0,i.jsx)("div",{className:"rond"}),(0,i.jsx)("div",{className:"rond"}),(0,i.jsx)("div",{className:"rond"})]})]})]})}),(0,i.jsxs)("div",{className:"blocInfoMob",children:[(0,i.jsx)(l,{text:"guillaume.cazes21@gmail.com",icone:"enveloppe.png"}),(0,i.jsx)(l,{text:"06 89 76 62 44",icone:"phone.png"})]}),(0,i.jsx)("div",{className:"blocDroitContact",children:(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"white",fontSize:"5vw"},children:[(0,i.jsx)("p",{className:"contactMe",style:{margin:0},children:"Contactez"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"0.6rem"},children:[(0,i.jsx)("div",{style:{backgroundColor:"white",width:"16.5vw",height:"0.3rem",marginRight:"0.7rem",marginTop:"0.5vw"}}),(0,i.jsx)("span",{className:"contactMe",children:"Moi"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"end",marginTop:"1rem"},children:[(0,i.jsx)(l,{text:"guillaume.cazes21@gmail.com",icone:"enveloppe.webp"}),(0,i.jsx)(l,{text:"06 89 76 62 44",icone:"phone.webp"})]})]})}),(0,i.jsx)("img",{src:"/portfolio/images/moonMin.webp",className:"moonMan ".concat(f?"starVisible":"starHidden")})]})})}}}]);
//# sourceMappingURL=505.4a7cec5d.chunk.js.map