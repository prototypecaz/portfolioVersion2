"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[123],{123:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=s(439),i=s(791),n=s(441),o=s(184);var a=function(e){var t=e.letters,s=e.visible,n=(0,i.useState)(),a=(0,r.Z)(n,2),c=a[0],l=a[1],u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];return(0,i.useEffect)((function(){var e,r=0;s&&(e=setInterval((function(){l(u[Math.floor(Math.random()*u.length)]),++r>8&&(r=0,l(t),clearInterval(e))}),30))}),[s]),(0,o.jsx)("span",{children:c})};var c=function(){var e=(0,n.YD)({threshold:.2,triggerOnce:!0}),t=(0,r.Z)(e,2),s=t[0],i=t[1];return(0,o.jsxs)("div",{id:"titreProjet",ref:s,style:{color:"white"},children:[(0,o.jsx)(a,{letters:"p",visible:i}),(0,o.jsx)(a,{letters:"r",visible:i}),(0,o.jsx)(a,{letters:"o",visible:i}),(0,o.jsx)(a,{letters:"j",visible:i}),(0,o.jsx)(a,{letters:"e",visible:i}),(0,o.jsx)(a,{letters:"t",visible:i}),(0,o.jsx)(a,{letters:"s ",visible:i}),(0,o.jsx)(a,{letters:"|",visible:i}),(0,o.jsx)(a,{letters:"|",visible:i}),(0,o.jsx)(a,{letters:" w",visible:i}),(0,o.jsx)(a,{letters:"o",visible:i}),(0,o.jsx)(a,{letters:"r",visible:i}),(0,o.jsx)(a,{letters:"k",visible:i}),(0,o.jsx)(a,{letters:"s",visible:i})]})};var l=function(e){var t=e.mots;return(0,o.jsx)("div",{className:"techno",children:t})};var u=function(e){var t=e.titreProjet,s=e.sousTitre,r=e.motsTechno,n=(e.dive,e.id),a=(e.blocProjet,e.lien),c=e.setImg,u=(0,i.useCallback)((function(e){window.innerWidth>=1280&&c(n)}),[n,c]);return(0,o.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",onMouseEnter:u,style:{color:"white",textDecoration:"none"},children:[(0,o.jsxs)("div",{className:"projets",children:[(0,o.jsxs)("div",{className:"sousTitreProjet",children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("span",{children:s})]}),(0,o.jsx)("div",{className:"sousTitreProjet2",children:r.map((function(e,t){return(0,o.jsx)(l,{mots:e},e+"-"+t)}))})]}),(0,o.jsx)("div",{className:"hoverProject",style:{width:"100%",height:"0.05rem",transform:"scaleX(1)"}})]})},m=[{titreProjet:"Facebook",sousTitre:"Impl\xe9mentation de 10 fonctionnalit\xe9s de Facebook.",motsTechno:["php","react"],image:"/images/facebookCreatifMin.webp",lien:"https://github.com/prototypecaz/failbook"},{titreProjet:"Acces Heure",sousTitre:"Cr\xe9ation d'une plateforme web pour la comptabilisation des heures travaill\xe9es dans une soci\xe9t\xe9.",motsTechno:["javascript","php","html","css"],image:"/images/accesHeureMin.webp",lien:"https://github.com/prototypecaz/AccesHeure"},{titreProjet:"Travaux",sousTitre:"Cr\xe9ation d'une plateforme web pour connecter les utilisateurs aux artisans locaux \xe0 proximit\xe9.",motsTechno:["javascript","php","html","css"],image:"/images/travauxMin.webp",lien:"https://github.com/prototypecaz/Artisan"},{titreProjet:"Riva",sousTitre:"Site E-commerce pour des vetements.",motsTechno:["javascript"],image:"/images/rivaMin.webp",lien:"https://github.com/prototypecaz/Riva"}];var v=function(e){var t=(0,i.useRef)(),s=(0,i.useRef)(null),n=(0,i.useState)(),a=(0,r.Z)(n,2),l=(a[0],a[1]),v=(0,i.useState)(0),p=(0,r.Z)(v,2),h=p[0],j=p[1],d=(0,i.useState)(!1),f=(0,r.Z)(d,2),x=f[0],b=f[1];return(0,i.useEffect)((function(){s.current&&b(!0)}),[]),(0,o.jsxs)("div",{id:"sectionProjets",children:[(0,o.jsx)(c,{}),(0,o.jsxs)("div",{id:"blocProjets",ref:s,style:{position:"relative"},onMouseEnter:function(e){t.current.style.display="block";var r=s.current.getBoundingClientRect(),i=e.clientX-r.left,n=e.clientY-r.top;t.current.style.transform="translate(".concat(i,"px, ").concat(n,"px)")},onMouseLeave:function(e){t.current.style.display="none"},onMouseMove:function(e){requestAnimationFrame((function(){if(t.current&&s.current){var r=s.current.getBoundingClientRect(),i=e.clientX-r.left,n=e.clientY-r.top;t.current.style.transform="translate(".concat(i,"px, ").concat(n,"px)")}}))},children:[x&&m.map((function(e,r){return(0,o.jsx)(u,{id:r,blocProjet:s.current,setIndex:l,setImg:j,dive:t,titreProjet:e.titreProjet,sousTitre:e.sousTitre,motsTechno:e.motsTechno,image:e.image,lien:e.lien},r)})),(0,o.jsx)("div",{ref:t,className:"teste",children:(0,o.jsx)("img",{className:"imageProjet",style:{borderRadius:"0.5rem",width:"22rem",height:"12rem"},src:m[h].image})})]})]})}}}]);
//# sourceMappingURL=123.052f40db.chunk.js.map