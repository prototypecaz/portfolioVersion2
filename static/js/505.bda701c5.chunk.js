"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[505],{505:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=n(942),r=n(413),o=n(439),a=n(791),i=n(184);var l=function(e){var t=e.text,n=e.icone;return(0,i.jsxs)("div",{style:{color:"white",display:"flex",alignItems:"center",marginBottom:"0.3rem"},children:[(0,i.jsx)("p",{className:"textContact",style:{marginRight:"0.4rem",fontWeight:"bold"},children:t}),(0,i.jsx)("img",{style:{width:"1.5rem",position:"relative",zIndex:5},src:"/images/"+n})]})};function c(){var e=(0,a.useRef)(),t=(0,a.useRef)(),n=(0,a.useRef)(),c=(0,a.useRef)(),d=(0,a.useState)({nom:"",prenom:"",objet:"",message:""}),m=(0,o.Z)(d,2),p=m[0],u=m[1],x=function(e){var t=e.target.id;u((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,s.Z)({},t,e.target.value))}))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{id:"sectionContact",children:[(0,i.jsx)("div",{ref:c,className:"blocSuccess",children:(0,i.jsx)("p",{children:"Votre message a bien \xe9tait envoyer"})}),(0,i.jsx)("div",{className:"blocGaucheContact",children:(0,i.jsxs)("form",{ref:e,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{id:"nom",onChange:x,className:"inputContact",value:p.nom,type:"text",placeholder:"Nom"}),(0,i.jsx)("input",{id:"prenom",onChange:x,className:"inputContact",value:p.prenom,type:"text",placeholder:"Prenom"})]}),(0,i.jsx)("input",{id:"objet",onChange:x,type:"text",className:"inputContact inputContactObjet",value:p.objet,placeholder:"Objet"}),(0,i.jsx)("textarea",{id:"message",onChange:x,value:p.message,placeholder:"Votre message ..."}),(0,i.jsxs)("button",{className:"btnForm",type:"submit",onClick:function(e){e.preventDefault(),Object.entries(p).forEach((function(e){var t=(0,o.Z)(e,2),n=t[0],s=t[1],r=document.querySelector("#"+n);""==s?r.style.border="1px solid #dd2d4a":"message"==n?r.style.border="1px solid white":(r.style.border="none",r.style.borderBottom="1px solid white")})),Object.values(p).every((function(e){return""!==e}))&&(n.current.style.display="flex",t.current.style.display="none",fetch("https://www.portfoliogc.fr/mail.php?nom="+p.nom+"&prenom="+p.prenom+"&objet="+p.objet+"&message="+p.message).then((function(e){e.text().then((function(e){"success"==e?(n.current.style.display="none",t.current.style.display="block",c.current.textContent="Votre message \xe0 bien \xe9tait envoyer",c.current.animate([{transform:"translateY(0px)",offset:.2},{transform:"translateY(-40px)",offset:.3},{transform:"translateY(-40px)",offset:.8},{transform:"translateY(100px)",offset:1}],{duration:5e3})):(n.current.style.display="none",t.current.style.display="block",c.current.textContent="Une erreur est survenue",c.current.animate([{transform:"translateY(0px)",offset:.2},{transform:"translateY(-40px)",offset:.3},{transform:"translateY(-40px)",offset:.8},{transform:"translateY(100px)",offset:1}],{duration:5e3}))}))})))},children:[(0,i.jsx)("span",{ref:t,children:"Envoyer"}),(0,i.jsxs)("div",{ref:n,className:"blocRond",style:{gap:"2px"},children:[(0,i.jsx)("div",{className:"rond"}),(0,i.jsx)("div",{className:"rond"}),(0,i.jsx)("div",{className:"rond"})]})]})]})}),(0,i.jsxs)("div",{className:"blocInfoMob",children:[(0,i.jsx)(l,{text:"guillaume.cazes21@gmail.com",icone:"enveloppe.png"}),(0,i.jsx)(l,{text:"06 89 76 62 44",icone:"phone.png"})]}),(0,i.jsx)("div",{className:"blocDroitContact",children:(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"white",fontSize:"5vw"},children:[(0,i.jsx)("p",{className:"contactMe",style:{margin:0},children:"Contactez"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"0.6rem"},children:[(0,i.jsx)("div",{style:{backgroundColor:"white",width:"16.5vw",height:"0.3rem",marginRight:"0.7rem",marginTop:"0.5vw"}}),(0,i.jsx)("span",{className:"contactMe",children:"Moi"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"end",marginTop:"1rem"},children:[(0,i.jsx)(l,{text:"guillaume.cazes21@gmail.com",icone:"enveloppe.webp"}),(0,i.jsx)(l,{text:"06 89 76 62 44",icone:"phone.webp"})]})]})})]})})}}}]);
//# sourceMappingURL=505.bda701c5.chunk.js.map