(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(t,e,n){t.exports={layoutContainer:"Layout_layoutContainer__2kHhw"}},36:function(t,e,n){},37:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),o=n.n(a),c=n(16),s=n.n(c),r=n(14),d=(n(36),n(37),n(26)),l=n.n(d),u=n(2),h=n(13),j=n(9),p=n(30),b=n(8),v=n.n(b),m=n(20),g=n.n(m),_=n(28);var f=n(7),O=n.n(f),w=n.p+"static/media/Logo.51a11abb.svg",x=n.p+"static/media/Back.c5b7553a.svg",y=n.p+"static/media/Burger.a1c872b7.svg";var N=function(){var t,e=Object(a.useState)(!1),n=Object(j.a)(e,2),o=n[0],c=n[1],s=function(){c(!o)};return t=o?O.a.shown:O.a.hidden,Object(i.jsxs)("div",{className:"".concat(O.a.outerContainer),style:o?null:{backgroundColor:"transparent",width:0},children:[Object(i.jsx)("img",{src:y,className:"".concat(O.a.menuBtn),onClick:function(){return s()},style:o?{opacity:0,zIndex:90,visibility:"hidden"}:null}),Object(i.jsxs)("div",{className:"".concat(O.a.navBar),style:o?null:{width:0},children:[Object(i.jsxs)("div",{className:"".concat(O.a.topBar," ").concat(t),children:[Object(i.jsx)("img",{src:w,className:O.a.logo}),Object(i.jsx)("img",{src:x,className:O.a.arrow,onClick:function(){return s()}})]}),Object(i.jsxs)("div",{className:"".concat(O.a.linkContainer," ").concat(t),children:[Object(i.jsx)(r.b,{className:O.a.navLinks,to:"/",children:"OCR"}),Object(i.jsx)(r.b,{className:O.a.navLinks,to:"/projects",children:"About"})]})]})]})},C=n.p+"static/media/Camera.9e4dfe6e.svg",B=n.p+"static/media/Crop.1c15a4de.svg",k=n.p+"static/media/Upload.ae110f01.svg",H={audio:!1,video:{facingMode:"environment"}};var z=function(t){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),o=n[0],c=n[1],s=Object(a.useState)(!1),r=Object(j.a)(s,2),d=r[0],l=r[1],u=Object(a.useState)({size:{width:.3*window.innerWidth,height:.15*window.innerHeight},position:{x:window.innerWidth/2-.3*window.innerWidth/2,y:window.innerHeight/2-.15*window.innerHeight/2}}),b=Object(j.a)(u,2),m=b[0],f=b[1],O=Object(a.useState)(""),w=Object(j.a)(O,2),x=w[0],y=w[1],z=Object(a.useRef)(null),U=function(t){var e=Object(a.useState)(null),n=Object(j.a)(e,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(_.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(t);case 3:n=e.sent,o(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(i)return function(){i.getTracks().forEach((function(t){t.stop()}))};!function(){e.apply(this,arguments)}()}),[i,t]),i}(H);U&&z.current&&!z.current.srcObject&&(z.current.srcObject=U);var S=function(t){fetch("/api/v1/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(t){return t.json()})).then((function(t){console.log(t),c(!0),y(t.text)})).catch((function(t){console.log(t),y("Offline")}))};return Object(i.jsxs)("div",{className:v.a.outer,children:[Object(i.jsx)(p.a,{style:d?null:{opacity:0,visibility:"hidden"},className:v.a.cropTool,size:m.size,position:m.position,onDragStop:function(t,e){f((function(t){return e.x+m.size.width<window.innerWidth&&e.y+m.size.height<window.innerHeight&&e.y>0&&e.x>0?Object(h.a)(Object(h.a)({},t),{},{position:{x:e.x,y:e.y}}):Object(h.a)({},t)}))},onResizeStop:function(t,e,n,i,a){f((function(t){var e=parseFloat(n.style.width.substring(0,n.style.width.length-2)),i=parseFloat(n.style.height.substring(0,n.style.height.length-2));return a.x+e<window.innerWidth&&a.y+i<window.innerHeight&&a.x>0&&a.y>0?{size:{width:e,height:i},position:Object(h.a)({},a)}:Object(h.a)({},t)}))}}),Object(i.jsxs)("div",{className:v.a.homeContainer,children:[Object(i.jsx)(N,{}),Object(i.jsxs)("div",{className:v.a.popUp,style:o?null:{opacity:0,visibility:"hidden"},children:[Object(i.jsx)("p",{children:x}),Object(i.jsx)("span",{className:v.a.dismissBtn,onClick:function(){c(!1),setTimeout((function(){y("")}),500)},children:"Dismiss"})]}),Object(i.jsx)("video",{ref:z,className:v.a.video,onCanPlay:function(){z.current.play()},autoPlay:!0,playsInline:!0,muted:!0}),Object(i.jsxs)("div",{className:v.a.controls,children:[Object(i.jsx)("input",{type:"file",id:"fileUpload",onChange:function(t){var e;(e=t.target.files[0],new Promise((function(t,n){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(t){return n(t)}}))).then((function(t){S(t)})).catch((function(t){return Error(t)}))}}),Object(i.jsx)("img",{src:B,className:v.a.cropBtn,onClick:function(){l(!d)}}),Object(i.jsx)("img",{src:C,className:v.a.captureBtn,onClick:function(){if("string"==typeof m.size.width){var t={position:Object(h.a)({},m.position),size:{width:m.size.width.substring(0,m.size.width.length-2),height:m.size.height.substring(0,m.size.height.length-2)}};f(t)}var e=document.createElement("canvas");e.width=z.current.videoWidth,e.height=z.current.videoHeight;var n=z.current.getBoundingClientRect(),i=(n.width-window.innerWidth)/2,a=e.width*((m.position.x+i)/n.width),o=e.height*(m.position.y/window.innerHeight),c=e.width*(m.size.width/n.width),s=e.height*(m.size.height/window.innerHeight);e.getContext("2d").drawImage(z.current,a,o,c,s,0,0,c,s),e=function(t,e,n,i,a){var o=document.createElement("canvas");return o.width=i,o.height=a,o.getContext("2d").drawImage(t,e,n,i,a,0,0,i,a),o}(e,0,0,c,s),S(e.toDataURL("img/png"))}}),Object(i.jsx)("label",{htmlFor:"fileUpload",children:Object(i.jsx)("img",{src:k,className:v.a.uploadBtn})})]})]})]})};var U=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"About"})})};var S=function(t){return Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/",component:z,exact:!0}),Object(i.jsx)(u.a,{path:"/about",component:U,exact:!0})]})};var F=function(){return Object(i.jsx)("div",{className:l.a.layoutContainer,children:Object(i.jsx)(S,{})})};var L=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(F,{})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),o(t),c(t)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(L,{})})}),document.getElementById("root")),P()},7:function(t,e,n){t.exports={outerContainer:"Nav_outerContainer__2goGU",navBar:"Nav_navBar__36UZ-",linkContainer:"Nav_linkContainer__1s9fF",navLinks:"Nav_navLinks__3lV-1",topBar:"Nav_topBar__2hXqO",logo:"Nav_logo__2mKNX",arrow:"Nav_arrow__vUGtI",menuBtn:"Nav_menuBtn__lRe3B",shown:"Nav_shown__31KHX",hidden:"Nav_hidden__3ukuu"}},8:function(t,e,n){t.exports={homeContainer:"Home_homeContainer__RSXdU",outer:"Home_outer__h3vQ2",cropTool:"Home_cropTool__2ga3K",video:"Home_video__gbnFX",canvas:"Home_canvas__2pzzp",controls:"Home_controls__33h60",cropBtn:"Home_cropBtn__k1RTP",uploadBtn:"Home_uploadBtn__ObQiv",captureBtn:"Home_captureBtn__vXbSD",popUp:"Home_popUp__19Q1p",hidePopUp:"Home_hidePopUp__1raIU",dismissBtn:"Home_dismissBtn__24SPy"}}},[[48,1,2]]]);
//# sourceMappingURL=main.6ede00f8.chunk.js.map