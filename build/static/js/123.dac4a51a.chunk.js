"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[123],{123:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=s(439),i=s(791),o=s(441),n=s(184);var l=function(e){var t=e.letters,s=e.visible,o=(0,i.useState)(),l=(0,r.Z)(o,2),a=l[0],c=l[1],u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];return(0,i.useEffect)((function(){var e,r=0;s&&(e=setInterval((function(){c(u[Math.floor(Math.random()*u.length)]),++r>8&&(r=0,c(t),clearInterval(e))}),30))}),[s]),(0,n.jsx)("span",{children:a})};var a=function(){var e=(0,o.YD)({threshold:.2,triggerOnce:!0}),t=(0,r.Z)(e,2),s=t[0],i=t[1];return(0,n.jsxs)("div",{id:"titreProjet",ref:s,style:{color:"white"},children:[(0,n.jsx)(l,{letters:"p",visible:i}),(0,n.jsx)(l,{letters:"r",visible:i}),(0,n.jsx)(l,{letters:"o",visible:i}),(0,n.jsx)(l,{letters:"j",visible:i}),(0,n.jsx)(l,{letters:"e",visible:i}),(0,n.jsx)(l,{letters:"t",visible:i}),(0,n.jsx)(l,{letters:"s ",visible:i}),(0,n.jsx)(l,{letters:"|",visible:i}),(0,n.jsx)(l,{letters:"|",visible:i}),(0,n.jsx)(l,{letters:" w",visible:i}),(0,n.jsx)(l,{letters:"o",visible:i}),(0,n.jsx)(l,{letters:"r",visible:i}),(0,n.jsx)(l,{letters:"k",visible:i}),(0,n.jsx)(l,{letters:"s",visible:i})]})};var c=function(e){var t=e.mots;return(0,n.jsx)("div",{className:"techno",children:t})};var u=function(e){var t=e.titreProjet,s=e.sousTitre,r=e.motsTechno,o=(e.dive,e.id),l=(e.blocProjet,e.lien),a=e.setImg,u=(0,i.useCallback)((function(e){window.innerWidth>=1280&&(a(o),console.log(o))}),[o,a]);return(0,n.jsxs)("a",{href:l,target:"_blank",rel:"noopener noreferrer",onMouseEnter:u,style:{color:"white",textDecoration:"none"},children:[(0,n.jsxs)("div",{className:"projets",children:[(0,n.jsxs)("div",{className:"sousTitreProjet",children:[(0,n.jsx)("p",{children:t}),(0,n.jsx)("span",{children:s})]}),(0,n.jsx)("div",{className:"sousTitreProjet2",children:r.map((function(e,t){return(0,n.jsx)(c,{mots:e},e+"-"+t)}))})]}),(0,n.jsx)("div",{className:"hoverProject",style:{width:"100%",height:"0.05rem",transform:"scaleX(1)"}})]})},p=[{titreProjet:"Facebook",sousTitre:"Impl\xe9mentation de 10 fonctionnalit\xe9s de Facebook.",motsTechno:["php","react"],image:"/portfolio/images/facebookCreatifMin.webp",lien:"https://github.com/prototypecaz/failbook"},{titreProjet:"Acces Heure",sousTitre:"Cr\xe9ation d'une plateforme web pour la comptabilisation des heures travaill\xe9es dans une soci\xe9t\xe9.",motsTechno:["javascript","php","html","css"],image:"/portfolio/images/accesHeureMin.webp",lien:"https://github.com/prototypecaz/AccesHeure"},{titreProjet:"Travaux",sousTitre:"Cr\xe9ation d'une plateforme web pour connecter les utilisateurs aux artisans locaux \xe0 proximit\xe9.",motsTechno:["javascript","php","html","css"],image:"/portfolio/images/travauxMin.webp",lien:"https://github.com/prototypecaz/Artisan"},{titreProjet:"Riva",sousTitre:"Site E-commerce pour des vetements.",motsTechno:["javascript"],image:"/portfolio/images/rivaMin.webp",lien:"https://github.com/prototypecaz/Riva"}];var m=function(e){var t=(0,i.useRef)(),s=(0,i.useRef)(null),o=(0,i.useState)(),l=(0,r.Z)(o,2),c=(l[0],l[1]),m=(0,i.useState)(0),v=(0,r.Z)(m,2),h=v[0],j=v[1],d=(0,i.useState)(!1),f=(0,r.Z)(d,2),x=f[0],b=f[1];return(0,i.useEffect)((function(){s.current&&b(!0)}),[]),console.log(h),(0,n.jsxs)("div",{id:"sectionProjets",children:[(0,n.jsx)(a,{}),(0,n.jsxs)("div",{id:"blocProjets",ref:s,style:{position:"relative"},onMouseEnter:function(e){t.current.style.display="block";var r=s.current.getBoundingClientRect(),i=e.clientX-r.left,o=e.clientY-r.top;t.current.style.transform="translate(".concat(i,"px, ").concat(o,"px)")},onMouseLeave:function(e){t.current.style.display="none"},onMouseMove:function(e){requestAnimationFrame((function(){if(t.current&&s.current){var r=s.current.getBoundingClientRect(),i=e.clientX-r.left,o=e.clientY-r.top;t.current.style.transform="translate(".concat(i,"px, ").concat(o,"px)")}console.log("teste")}))},children:[x&&p.map((function(e,r){return(0,n.jsx)(u,{id:r,blocProjet:s.current,setIndex:c,setImg:j,dive:t,titreProjet:e.titreProjet,sousTitre:e.sousTitre,motsTechno:e.motsTechno,image:e.image,lien:e.lien},r)})),(0,n.jsx)("div",{ref:t,className:"teste",children:(0,n.jsx)("img",{className:"imageProjet",style:{borderRadius:"0.5rem",width:"22rem",height:"12rem"},src:p[h].image})})]})]})}}}]);
//# sourceMappingURL=123.dac4a51a.chunk.js.map