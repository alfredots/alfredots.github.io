(this["webpackJsonpqr-code-reader"]=this["webpackJsonpqr-code-reader"]||[]).push([[0],{145:function(e,t,a){e.exports=a(251)},150:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),c=a.n(o),s=(a(150),a(43)),i=a(285),l=a(274),u=a(275),d=a(276),m=function(){return r.a.createElement(l.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(d.a,{variant:"h6"},"Leitor de QR Codes")))},p=a(14),f=a.n(p),g=a(38),h=a(23),v=a(278),b=a(286),E=a(277),w=a(135),x=a(61);function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{name:e,link:t,data:a,imgUrl:n,process:r,timestamp:(new Date).getTime()}}function y(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=a,n.readAsDataURL(e)}))}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(f.a.mark((function e(t){var a,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={maxSizeMB:1,maxWidthOrHeight:1024,useWebWorker:!0},e.next=4,Object(w.a)(t,a);case 4:return n=e.sent,(r=new Image).src=URL.createObjectURL(n),e.next=9,y(n);case 9:return o=e.sent,e.abrupt("return",k(t.name,"",o,r));case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new x.BrowserQRCodeReader,e.prev=1,e.next=4,a.decodeFromImageUrl(t.imgUrl.src);case 4:return e.next=6,e.sent.text;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.abrupt("return","N\xe3o detectado");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var N=a(136);function D(e){var t,a=[],n=Object(g.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.process&&a.push({link:r.link,nome:r.name,data:r.timestamp})}}catch(o){n.e(o)}finally{n.f()}return a}function R(e){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(N.json2csv)(t,(function(e,t){console.log(t);var a=document.createElement("a");a.setAttribute("href","data:text/csv;charset=UTF-8,"+encodeURIComponent(t));var n=new Date,r=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear(),s=String(n.getHours()),i=String(n.getMinutes()),l=String(n.getSeconds());n=r+"-"+o+"-"+c+"-"+s+":"+i+":"+l,a.setAttribute("download","relatorio-".concat(n,".csv")),document.body.appendChild(a),a.click()}))}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=a(137),I=a.n(F),P=a(138);function U(e,t,a){var n,r=new I.a,o=Object(g.a)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;if(c.process===a){var s=c.data,i=s.indexOf(",");-1!==i&&(s=s.substring(i+1,s.length)),r.file(c.name,s,{base64:!0})}}}catch(l){o.e(l)}finally{o.f()}r.generateAsync({type:"blob"}).then((function(t){console.log(t);var a=new Date,n=String(a.getDate()).padStart(2,"0"),r=String(a.getMonth()+1).padStart(2,"0"),o=a.getFullYear(),c=String(a.getHours()),s=String(a.getMinutes()),i=String(a.getSeconds());a=n+"-"+r+"-"+o+"-"+c+":"+s+":"+i,Object(P.saveAs)(t,"".concat(e,"-").concat(a,".zip"))}))}var z=Object(n.createContext)(),A=Object(E.a)({root:{height:"20%"}});function L(e){return r.a.createElement(v.a,{item:!0,xs:3,container:!0,justify:"center",alignItems:"center"},e)}function q(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=10)n=e.slice(t,t+10),r.push(n);return r}var M=function(e){var t=e.data,a=A(),o=Object(n.useContext)(z),c=o.setData,i=o.setProgress,l=o.setStatus,u=Object(n.useState)(!0),d=Object(s.a)(u,2),m=d[0],p=d[1],E=function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,r,o,s,u,d,m,h,v,b;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files.length>0&&t.target.files.length<=60)){e.next=55;break}a=t.target.files,console.log(a),n=[],r=q(Array.from(a)),o=0,s=Object(g.a)(r),e.prev=7,s.s();case 9:if((u=s.n()).done){e.next=43;break}d=u.value,console.log("iniciando array"),m=Object(g.a)(d),e.prev=13,m.s();case 15:if((h=m.n()).done){e.next=32;break}return v=h.value,console.log("convertendo arquivo..."),e.next=20,j(v);case 20:return b=e.sent,console.log("detectando qr code..."),e.next=24,S(b);case 24:b.link=e.sent,"N\xe3o detectado"!==b.link&&(b.process=!0),console.log("salvando dado..."),n.push(b),o++,i(o/a.length*100);case 30:e.next=15;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(13),m.e(e.t0);case 37:return e.prev=37,m.f(),e.finish(37);case 40:console.log("finalizando array...");case 41:e.next=9;break;case 43:e.next=48;break;case 45:e.prev=45,e.t1=e.catch(7),s.e(e.t1);case 48:return e.prev=48,s.f(),e.finish(48);case 51:c(n),p(!1),e.next=56;break;case 55:t.target.files.length>=60?l("Erro - ultrapassou m\xe1ximo de fotos"):l("Erro - nenhuma foto informada");case 56:case"end":return e.stop()}}),e,null,[[7,45,48,51],[13,34,37,40]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.length>0?R(D(t)):console.log("data vazio")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.length>0?U("fotos-nao-detectadas",t,!1):console.log("data vazio")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.length>0?U("fotos-detectadas",t,!0):console.log("data vazio")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{container:!0,className:a.root},L(r.a.createElement(b.a,{variant:"contained",color:"primary",component:"label"},"Buscar imagens",r.a.createElement("input",{id:"file-input",type:"file",hidden:!0,multiple:!0,onChange:function(e){return E(e)}}))),L(r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:m,onClick:function(e){return k(e)}},"Fotos detectadas")),L(r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:m,onClick:function(e){return x(e)}},"Fotos n\xe3o detectadas")),L(r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:m,onClick:function(e){return w(e)}},"Baixar relat\xf3rio")))},W=a(288),H=Object(E.a)((function(e){return{root:{width:"100%",height:"8%",marginLeft:e.spacing(2),marginBottom:e.spacing(2)},text:{width:"35rem"}}}));var Q=function(e){var t=e.progress,a=e.status,n=H();return r.a.createElement(v.a,{className:n.root,container:!0,justify:"center",alignItems:"center",xs:6},r.a.createElement(v.a,{item:!0,xs:10},r.a.createElement(d.a,{className:n.text},function(e){return"inicio"===e?"Progresso da detec\xe7\xe3o do QR code":"detectando links"===e?"Detectando links...":"Erro - nenhuma foto informada"===e?e+". Por favor indique as  imagens desejadas.":"Erro - ultrapassou m\xe1ximo de fotos"===e?e+". Por favor informe no m\xe1ximo 60 fotos.":"Finalizado processo detec\xe7\xe3o"}(a))),r.a.createElement(v.a,{item:!0,xs:10},r.a.createElement(W.a,{variant:"determinate",value:t})))},J=a(280),T=a(284),Y=a(283),X=a(279),$=a(281),G=a(282),K=a(252),V=Object(E.a)({paper:{width:"90%",height:"55vh"},table:{width:"100%",overflowX:"hidden",tableLayout:"fixed"},tableCell:{wordBreak:"break-all"}}),Z=function(e){var t=e.data,a=V();return r.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(X.a,{component:K.a,className:a.paper,elevation:3},r.a.createElement(J.a,{className:a.table,"aria-label":"simple table"},r.a.createElement($.a,null,r.a.createElement(G.a,null,r.a.createElement(Y.a,{className:a.tableCell},"Id"),r.a.createElement(Y.a,{className:a.tableCell},"Nome do Arquivo"),r.a.createElement(Y.a,{align:"center"},"Link encontrado"),r.a.createElement(Y.a,{align:"center"},"Processado"))),r.a.createElement(T.a,null,t.map((function(e,t){return r.a.createElement(G.a,{key:e.name},r.a.createElement(Y.a,{component:"th",scope:"row",className:a.tableCell},t+1),r.a.createElement(Y.a,{component:"th",scope:"row",className:a.tableCell},e.name),r.a.createElement(Y.a,{align:"center",className:a.tableCell},e.link),r.a.createElement(Y.a,{align:"center",className:a.tableCell},e.process?"detectado":"n\xe3o detectado"))}))))))};var _=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(1),l=Object(s.a)(c,2),u=l[0],d=l[1],p=Object(n.useState)("inicio"),f=Object(s.a)(p,2),g=f[0],h=f[1];return r.a.createElement(i.a,{width:"100vw",height:"100vh",style:{backgroundColor:"#EEEEEE"}},r.a.createElement(z.Provider,{value:{setData:o,setProgress:d,setStatus:h}},r.a.createElement(m,null),r.a.createElement(M,{data:a}),r.a.createElement(Q,{progress:u,status:g}),r.a.createElement(Z,{data:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.43133230.chunk.js.map