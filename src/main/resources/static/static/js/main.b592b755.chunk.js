(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(t,e,n){t.exports={layoutContainer:"Layout_layoutContainer__2kHhw"}},30:function(t,e,n){t.exports={aboutContainer:"About_aboutContainer__-IT84"}},37:function(t,e,n){},38:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),o=n.n(a),c=n(16),s=n.n(c),r=n(14),d=(n(37),n(38),n(26)),l=n.n(d),h=n(2),u=n(13),g=n(9),p=n(31),j=n(8),b=n.n(j),v=n(20),m=n.n(v),w=n(28);var f=n(7),_=n.n(f),O=n.p+"static/media/Logo.51a11abb.svg",x=n.p+"static/media/Back.c5b7553a.svg",y=n.p+"static/media/Burger.a1c872b7.svg";var C=function(){var t,e=Object(a.useState)(!1),n=Object(g.a)(e,2),o=n[0],c=n[1],s=function(){c(!o)};return t=o?_.a.shown:_.a.hidden,Object(i.jsxs)("div",{className:"".concat(_.a.outerContainer),style:o?null:{backgroundColor:"transparent",width:0},children:[Object(i.jsx)("img",{src:y,className:"".concat(_.a.menuBtn," myHighlight"),onClick:function(){return s()},style:o?{opacity:0,zIndex:90,visibility:"hidden"}:null}),Object(i.jsxs)("div",{className:"".concat(_.a.navBar),style:o?null:{width:0},children:[Object(i.jsxs)("div",{className:"".concat(_.a.topBar," ").concat(t),children:[Object(i.jsx)("img",{src:O,className:_.a.logo}),Object(i.jsx)("img",{src:x,className:"".concat(_.a.arrow," myHighlight"),onClick:function(){return s()}})]}),Object(i.jsxs)("div",{className:"".concat(_.a.linkContainer," ").concat(t),children:[Object(i.jsx)(r.b,{exact:!0,className:"".concat(_.a.navLinks," myHighlight"),to:"/",activeStyle:{backgroundColor:"#3d3d3dc0"},children:"OCR"}),Object(i.jsx)(r.b,{exact:!0,className:"".concat(_.a.navLinks," myHighlight"),to:"/about",activeStyle:{backgroundColor:"#3d3d3dc0"},children:"About"})]})]})]})},H=n.p+"static/media/Camera.9e4dfe6e.svg",N=n.p+"static/media/Crop.1c15a4de.svg",B=n.p+"static/media/Upload.ae110f01.svg",k={audio:!1,video:{facingMode:"environment"}};var z=function(){var t=Object(a.useState)(!1),e=Object(g.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(!0),s=Object(g.a)(c,2),r=s[0],d=s[1],l=Object(a.useState)({size:{width:.3*window.innerWidth,height:.15*window.innerHeight},position:{x:window.innerWidth/2-.3*window.innerWidth/2,y:window.innerHeight/2-.15*window.innerHeight/2}}),h=Object(g.a)(l,2),j=h[0],v=h[1],f=Object(a.useState)(""),_=Object(g.a)(f,2),O=_[0],x=_[1],y=Object(a.useRef)(null),z=function(t){var e=Object(a.useState)(null),n=Object(g.a)(e,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(t);case 3:n=e.sent,o(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(i)return function(){i.getTracks().forEach((function(t){t.stop()}))};!function(){e.apply(this,arguments)}()}),[i,t]),i}(k);z&&y.current&&!y.current.srcObject&&(y.current.srcObject=z),Object(a.useEffect)((function(){var t=function(){var t={size:{width:.3*window.innerWidth,height:.15*window.innerHeight},position:{x:window.innerWidth/2-.3*window.innerWidth/2,y:window.innerHeight/2-.15*window.innerHeight/2}};v(t)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var U=function(t){fetch("/api/v1/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(t){return t.json()})).then((function(t){console.log(t),o(!0),x(t.text)})).catch((function(t){console.log(t),x("Offline")}))};return Object(i.jsxs)("div",{className:b.a.outer,children:[Object(i.jsx)(p.a,{style:r?null:{opacity:0,visibility:"hidden"},className:b.a.cropTool,size:j.size,position:j.position,onDragStop:function(t,e){v((function(t){return e.x+j.size.width<window.innerWidth&&e.y+j.size.height<window.innerHeight&&e.y>0&&e.x>0?Object(u.a)(Object(u.a)({},t),{},{position:{x:e.x,y:e.y}}):Object(u.a)({},t)}))},onResizeStop:function(t,e,n,i,a){v((function(t){var e=parseFloat(n.style.width.substring(0,n.style.width.length-2)),i=parseFloat(n.style.height.substring(0,n.style.height.length-2));return a.x+e<window.innerWidth&&a.y+i<window.innerHeight&&a.x>0&&a.y>0?{size:{width:e,height:i},position:Object(u.a)({},a)}:Object(u.a)({},t)}))}}),Object(i.jsxs)("div",{className:b.a.homeContainer,children:[Object(i.jsx)(C,{}),Object(i.jsxs)("div",{className:b.a.popUp,style:n?null:{opacity:0,visibility:"hidden"},children:[Object(i.jsx)("p",{children:O}),Object(i.jsx)("span",{className:"".concat(b.a.dismissBtn," noHighlights"),onClick:function(){o(!1),setTimeout((function(){x("")}),500)},children:"Dismiss"})]}),Object(i.jsx)("video",{ref:y,className:b.a.video,onCanPlay:function(){y.current.play()},autoPlay:!0,playsInline:!0,muted:!0}),Object(i.jsxs)("div",{className:b.a.controls,children:[Object(i.jsx)("input",{type:"file",id:"fileUpload",onChange:function(t){var e;(e=t.target.files[0],new Promise((function(t,n){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(t){return n(t)}}))).then((function(t){U(t)})).catch((function(t){return Error(t)}))}}),Object(i.jsx)("img",{src:N,className:"".concat(b.a.cropBtn," noHighlights"),onClick:function(){d(!r)}}),Object(i.jsx)("img",{src:H,className:"".concat(b.a.captureBtn," myHighlight"),onClick:function(){var t=document.createElement("canvas");if(t.width=y.current.videoWidth,t.height=y.current.videoHeight,r){if("string"==typeof j.size.width){var e={position:Object(u.a)({},j.position),size:{width:j.size.width.substring(0,j.size.width.length-2),height:j.size.height.substring(0,j.size.height.length-2)}};v(e)}var n=y.current.getBoundingClientRect(),i=(n.width-window.innerWidth)/2,a=t.width*((j.position.x+i)/n.width),o=t.height*(j.position.y/window.innerHeight),c=t.width*(j.size.width/n.width),s=t.height*(j.size.height/window.innerHeight);t.getContext("2d").drawImage(y.current,a,o,c,s,0,0,c,s),t=function(t,e,n,i,a){var o=document.createElement("canvas");return o.width=i,o.height=a,o.getContext("2d").drawImage(t,e,n,i,a,0,0,i,a),o}(t,0,0,c,s),U(t.toDataURL("img/png"))}else t.getContext("2d").drawImage(y.current,0,0),U(t.toDataURL("img/png"))}}),Object(i.jsx)("label",{htmlFor:"fileUpload",className:"noHighlights",children:Object(i.jsx)("img",{src:B,className:"".concat(b.a.uploadBtn," noHighlights")})})]})]})]})},U=n(30),S=n.n(U);var R=function(){return Object(i.jsxs)("div",{className:S.a.aboutContainer,children:[Object(i.jsx)(C,{}),Object(i.jsx)("p",{children:"Optical Character Recognition PWA(Progressive Web Application). Built Using SpringBoot, TesseractOCR(Tess4J) and React."})]})};var L=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h.a,{exact:!0,path:"/",component:z}),Object(i.jsx)(h.a,{exact:!0,path:"/about",component:R})]})};var T=function(){return Object(i.jsx)("div",{className:l.a.layoutContainer,children:Object(i.jsx)(L,{})})};var P=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(T,{})})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),o(t),c(t)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(P,{})})}),document.getElementById("root")),W()},7:function(t,e,n){t.exports={outerContainer:"Nav_outerContainer__2goGU",navBar:"Nav_navBar__36UZ-",linkContainer:"Nav_linkContainer__1s9fF",navLinks:"Nav_navLinks__3lV-1",topBar:"Nav_topBar__2hXqO",logo:"Nav_logo__2mKNX",arrow:"Nav_arrow__vUGtI",menuBtn:"Nav_menuBtn__lRe3B",shown:"Nav_shown__31KHX",hidden:"Nav_hidden__3ukuu"}},8:function(t,e,n){t.exports={homeContainer:"Home_homeContainer__RSXdU",outer:"Home_outer__h3vQ2",cropTool:"Home_cropTool__2ga3K",video:"Home_video__gbnFX",canvas:"Home_canvas__2pzzp",controls:"Home_controls__33h60",cropBtn:"Home_cropBtn__k1RTP",uploadBtn:"Home_uploadBtn__ObQiv",captureBtn:"Home_captureBtn__vXbSD",popUp:"Home_popUp__19Q1p",hidePopUp:"Home_hidePopUp__1raIU",dismissBtn:"Home_dismissBtn__24SPy"}}},[[49,1,2]]]);
//# sourceMappingURL=main.b592b755.chunk.js.map