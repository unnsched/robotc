(this["webpackJsonprobotc-js"]=this["webpackJsonprobotc-js"]||[]).push([[0],{78:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(59),o=n.n(i),c=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},s=n(6),u=n.p+"static/media/EV3Robot.41fe37f4.png",l=[u],d={},h=d,b=n(1),A=a.a.createContext(null);function j(e){var t=e.children,n=a.a.useState(null),r=Object(s.a)(n,2),i={current:r[0],load:r[1]};return Object(b.jsx)(A.Provider,{value:i,children:t})}function g(){return a.a.useContext(A)}var f=n(8),p=n(9),v=n(38),x=n(47),m=n(53),O=n(64),y=n(19),S=n(16);n(78);function w(e){var t=e.projectName,n=e.isRunning,r=e.isPaused,a=e.onRunToggle,i=e.onPauseToggle,o=e.onBackgroundUpload,c=e.onStartMove,s=e.onSave;return Object(b.jsx)(m.a,{id:"project-view-header",bg:"light",style:{height:42},children:Object(b.jsxs)(O.a,{fluid:!0,children:[Object(b.jsx)(m.a.Brand,{children:Object(b.jsx)("b",{children:"RobotC Simulator"})}),Object(b.jsx)("span",{style:{marginRight:-64},children:t}),Object(b.jsxs)("div",{style:{align:"right",marginLeft:8},children:[Object(b.jsxs)(y.a,{variant:"outline-info",size:"sm",onClick:s,children:[Object(b.jsx)(S.d,{size:16})," ","Save"]}),Object(b.jsx)("span",{style:{marginRight:8}}),Object(b.jsxs)(y.a,{variant:"outline-secondary",size:"sm",onClick:c,children:[Object(b.jsx)(S.f,{size:16})," ","Move start point"]})," ",Object(b.jsxs)(y.a,{variant:"outline-primary",size:"sm",onClick:o,children:[Object(b.jsx)(S.i,{size:16})," ","Upload background"]}),Object(b.jsx)("span",{style:{marginRight:8}}),Object(b.jsxs)(y.a,{variant:(r?"":"outline-")+"warning",size:"sm",disabled:!n,onClick:i,children:[r?Object(b.jsx)(S.h,{size:16}):Object(b.jsx)(S.a,{size:16})," ",r?"Resume":"Pause"]})," ",Object(b.jsxs)(y.a,{variant:"outline-"+(n?"danger":"success"),size:"sm",onClick:a,children:[n?Object(b.jsx)(S.j,{size:16}):Object(b.jsx)(S.g,{size:16})," ",n?"Stop":"Start"]})]})]})})}var k=n(65),R=n.n(k);n(86),n(87);function E(e){var t=e.id,n=e.className,r=e.style,a=e.lang,i=e.value,o=e.onChange;return Object(b.jsx)(R.a,{name:t,className:n,style:r,onChange:o,value:i,mode:a,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0})}var C=n(66);function I(e){var t=e.variables;return Object(b.jsxs)(C.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Variable"}),Object(b.jsx)("th",{children:"Value"})]})}),Object(b.jsx)("tbody",{children:t.filter((function(e){return!!e.type})).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.type}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.value})]},e.name)}))})]})}var M=n(10),P=Math.PI/180;function L(e,t){return{x:e,y:t}}function V(e,t){return{x:e.x+t.x,y:e.y+t.y}}function T(e){return{x:e.x,y:e.y}}var B=1e3;function D(e){var t=e>>16;return t===(e>>8&255)&&t===(255&e)}function Q(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lightblue",a=e.robot.angle+t,i=e.robot.loc.x+e.robot.sprite.size.width/2,o=e.robot.loc.y+e.robot.sprite.size.height/2,c=i-30*Math.cos(a*P),s=o-30*Math.sin(a*P),u=Math.round(c),l=Math.round(s),d=u,h=l,b=d-B*Math.cos((a+n)*P),A=h-B*Math.sin((a+n)*P),j=Math.abs(b-d),g=Math.abs(A-h),f=d<b?1:-1,p=h<A?1:-1,v=j-g;d!==b||h!==A;){if(d<0||d>=e.canvas.element.width||h<0||h>=e.canvas.element.height)return 255;var x=e.getPixel(d,h,r);if(16777215!==x&&!D(x))break;var m=2*v;m>-g&&(v-=g,d+=f),m<j&&(v+=j,h+=p)}var O=Math.sqrt((u-d)*(u-d)+(l-h)*(l-h));return Math.min(255,Math.round(255*O/500))}var z={none:{name:"None",query:function(){return 0}},light:{name:"Light",query:function(e,t){for(var n=e.robot.loc.x+e.robot.sprite.size.width/2,r=e.robot.loc.y+e.robot.sprite.size.height/2,a=n+t.offset.x*Math.cos((e.robot.angle+t.angle)*P),i=r+t.offset.y*Math.sin((e.robot.angle+t.angle)*P),o=Math.round(a),c=Math.round(i),s=0,u=-1;u<=2;u++)for(var l=-1;l<=2;l++)s+=e.getPixel(o+u,c+l,"orange")/16777215;return s/=49,Math.round(255*s)}},sonar:{name:"Sonar",query:function(e,t,n){return Q(e,t.angle,n)}},ultrasonic:{name:"Ultrasonic",query:function(e,t){for(var n=[],r=-3;r<=3;r++)n.push(Q(e,t.angle,r,"grey"));return Math.round(n.reduce((function(e,t){return e+t}),0)/7)}}},U=n(26),N=function(){function e(t,n){Object(f.a)(this,e),this.size=n,this.image=t}return Object(p.a)(e,[{key:"draw",value:function(e,t,n){n?this._drawA(e,t,n):this._draw(e,t)}},{key:"_drawA",value:function(e,t,n){var r=n*P,a=this.size.width/2,i=this.size.height/2,o=t.x+a,c=t.y+i;e.translate(o,c),e.rotate(r),this._draw(e,L(-a,-i)),e.rotate(-r),e.translate(-o,-c)}},{key:"_draw",value:function(e,t){e.drawImage(this.image,0,0,this.image.width,this.image.height,t.x,t.y,this.size.width,this.size.height)}}]),e}(),G=function(){function e(t,n,r,a){Object(f.a)(this,e),this.sprite=new N(h[t],n),this.loc=r,this.angle=a}return Object(p.a)(e,[{key:"draw",value:function(e){this.sprite.draw(e,this.loc,this.angle)}},{key:"addPoint",value:function(e){this.loc=V(this.loc,e)}},{key:"center",get:function(){return[this.loc.x/2,this.loc.y/2]}}]),e}(),F=function(){function e(t,n){Object(f.a)(this,e),this.canvas=t,this.background=n;var r={width:50,height:50};this.spawnPoint=V(L.apply(void 0,Object(U.a)(t.center)),L(-r.width/2,-r.height/2)),this.spawnAngle=0,this.robot=new G(u,r,T(this.spawnPoint),this.spawnAngle)}return Object(p.a)(e,[{key:"_paintBackground",value:function(){this.background&&this.canvas.context.drawImage(this.background,0,0)}},{key:"moveRobot",value:function(t,n,r){var a=.05*t*r,i=.05*n*r;if(t!==n){var o;if(0===n)o=a/(e.ROBOT_WHEEL_DISTANCE+e.ROBOT_WHEEL_DISTANCE)/P;else{var c=t/n;o=i/(e.ROBOT_WHEEL_DISTANCE*(c+1)/(c-1)-e.ROBOT_WHEEL_DISTANCE)/P}for(this.robot.angle+=o;this.robot.angle>360;)this.robot.angle-=360;for(;this.robot.angle<0;)this.robot.angle+=360}var s=a*Math.cos(this.robot.angle*P),u=i*Math.sin(this.robot.angle*P);return this.robot.addPoint(L(s,u)),[s,u]}},{key:"repaint",value:function(){this.canvas.clear(),this._paintBackground(),this.robot.draw(this.canvas.context),this._raw=this.canvas.raw()}},{key:"reset",value:function(){this.robot.loc=T(this.spawnPoint),this.robot.angle=this.spawnAngle}},{key:"raw",get:function(){return this._raw}},{key:"getPixel",value:function(e,t,n){null!=n&&(this.canvas.context.globalAlpha=.2,this.canvas.context.fillStyle=n,this.canvas.context.fillRect(e,t,2,2),this.canvas.context.globalAlpha=1);var r=4*(t*this.raw.width+e),a=this.raw.data;return 256*a[r]*256+256*a[r+1]+a[r+2]}}]),e}();F.ROBOT_WHEEL_DISTANCE=20;var W=function(){function e(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(f.a)(this,e),this.element=t,this.context=t.getContext("2d",{willReadFrequently:n})}return Object(p.a)(e,[{key:"size",get:function(){return[this.element.width,this.element.height]}},{key:"center",get:function(){return[this.element.width/2,this.element.height/2]}},{key:"raw",value:function(){return this.context.getImageData(0,0,this.element.width,this.element.height)}},{key:"clear",value:function(){this.context.clearRect(0,0,this.element.width,this.element.height)}}]),e}();n(88);function K(e){var t=e.children,n=e.onClick;return Object(b.jsx)("span",{className:"circular-icon-btn",onClick:n,children:t})}n(89);function Z(e){var t=e.onChange,n=g(),r=a.a.useState(n.current.robot.angle),i=Object(s.a)(r,2),o=i[0],c=i[1];return Object(b.jsx)("div",{id:"robot-angle-conf",children:Object(b.jsxs)(M.a.Group,{className:"mb-1",children:[Object(b.jsxs)(M.a.Label,{children:[Object(b.jsx)("b",{children:"Robot Angle"})," (",o,"\xb0):"]}),Object(b.jsx)(M.a.Range,{value:o,onChange:function(e){n.current.robot.angle=parseInt(e.target.value),c(e.target.value),t()},min:0,max:360,size:"sm"})]})})}function _(e){var t=e.index,n=e.data,r=e.onChange,i=a.a.useState(t),o=Object(s.a)(i,2),c=o[0],u=o[1],l=a.a.useState(n.angle),d=Object(s.a)(l,2),h=d[0],A=d[1],j=a.a.useState(n.offset),g=Object(s.a)(j,2),f=g[0],p=g[1];c!==t&&(u(t),A(n.angle),p(n.offset));return Object(b.jsxs)("div",{id:"robot-angle-conf",children:[Object(b.jsxs)(M.a.Group,{className:"mb-1",children:[Object(b.jsxs)(M.a.Label,{children:[Object(b.jsxs)("b",{children:["Sensor ",t+1," - "]}),"Angle (",h,"\xb0):"]}),Object(b.jsx)(M.a.Range,{value:h,onChange:function(e){n.angle=parseInt(e.target.value),A(e.target.value),r()},min:0,max:360,size:"sm"})]}),"light"===n.type?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(M.a.Group,{className:"mb-1",children:[Object(b.jsxs)(M.a.Label,{children:[Object(b.jsxs)("b",{children:["Sensor ",t+1," - "]}),"Offset X (",f.x,"):"]}),Object(b.jsx)(M.a.Range,{value:f.x,onChange:function(e){n.offset.x=parseInt(e.target.value),p({x:parseInt(e.target.value),y:f.y}),r()},min:0,max:100,size:"sm"})]}),Object(b.jsxs)(M.a.Group,{className:"mb-1",children:[Object(b.jsxs)(M.a.Label,{children:[Object(b.jsxs)("b",{children:["Sensor ",t+1," - "]}),"Offset Y (",f.y,"):"]}),Object(b.jsx)(M.a.Range,{value:f.y,onChange:function(e){n.offset.y=parseInt(e.target.value),p({x:f.x,y:parseInt(e.target.value)}),r()},min:0,max:100,size:"sm"})]})]}):null]})}function q(e){var t=e.index,n=e.onChange,r=g(),i=a.a.useState(r.current.sensors[t].type),o=Object(s.a)(i,2),c=o[0],u=o[1];return Object(b.jsx)(M.a.Select,{value:c,onChange:function(e){r.current.sensors[t].type=e.target.value,u(e.target.value),n()},size:"sm",children:Object.keys(z).map((function(e){return Object(b.jsx)("option",{value:e,children:z[e].name},e)}))})}function H(e){var t=e.onUpdate,n=g(),r=a.a.useRef(null),i=a.a.useState(null),o=Object(s.a)(i,2),c=o[0],u=o[1],l=a.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;null!=e&&(e.robot.angle=n.current.robot.angle,e.repaint(),Object.values(n.current.sensors).forEach((function(t){z[t.type].query(e,t)})))}),[n,c]);a.a.useEffect((function(){var e=new F(new W(r.current),null);u(e),l(e)}),[]);var d=a.a.useState(-1),h=Object(s.a)(d,2),A=h[0],j=h[1];return Object(b.jsxs)("div",{id:"project-robot-conf",children:[Object(b.jsx)("div",{id:"project-robot-preview",children:Object(b.jsx)("canvas",{width:275,height:275,ref:r})}),Object(b.jsx)("br",{}),-1!==A?Object(b.jsx)(_,{index:A,onChange:l,data:n.current.sensors[A]}):Object(b.jsx)(Z,{onChange:function(){l(),t()}}),Object(b.jsxs)("div",{id:"project-sensors-picker",children:[Object(b.jsx)(K,{onClick:function(){return j(-1)},children:Object(b.jsx)(S.e,{size:16})}),Object(b.jsx)("b",{children:"Robot Angle"}),Object.keys(n.current.sensors).map((function(e,t){return Object(b.jsxs)(M.a.Group,{className:"mb-1",children:[Object(b.jsxs)(M.a.Label,{children:[Object(b.jsx)(K,{onClick:function(){return j(t)},children:Object(b.jsx)(S.e,{size:16})}),Object(b.jsxs)("b",{children:["Sensor ",t+1]})]}),Object(b.jsx)(q,{index:t,onChange:l})]},t)}))]}),Object(b.jsx)("div",{style:{height:2}})]})}var Y=n(52),J=n(67),X=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"readString",value:function(e){var t=e.target.map((function(e){return String.fromCharCode(e.v)})).join("");return t.substring(0,t.length-1)}},{key:"getVarVal",value:function(e){return e.v}},{key:"getArrayVarVal",value:function(e,t){return e.v.target[t].v}},{key:"getGlobalVarVal",value:function(t,n){return e.getVarVal(t.scope[0].variables[n])}},{key:"getGlobalArrayVarVal",value:function(t,n,r){return e.getArrayVarVal(t.scope[0].variables[n],r)}},{key:"setVarVal",value:function(e,t){e.v=t}},{key:"setArrayVarVal",value:function(e,t,n){e.v.target[t].v=n}},{key:"setGlobalVarVal",value:function(t,n,r){e.setVarVal(t.scope[0].variables[n],r)}},{key:"setGlobalArrayVarVal",value:function(t,n,r,a){e.setArrayVarVal(t.scope[0].variables[n],r,a)}},{key:"defGlobalArrayVar",value:function(e,t,n,r,a){e.scope[0].variables[t]={t:e.arrayPointerType(n,r),v:{target:Array(r).fill(a).map((function(t){return e.val(n,t,!0)})),position:0},left:!0}}}]),e}();function $(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((function(e,t){return e.replace(/%s|%d/,t)}),e)}var ee="motor",te="SensorValue",ne="nMotorEncoder",re=["#define task void","#define motorA 0","#define motorB 1","#define motorC 2","#define motorD 3","#define S1 0","#define S2 1","#define S3 2","#define S4 3"];["int ".concat(ee,"[4] = { 0 };"),"int ".concat(te,"[4] = { 0 };"),"unsigned long ".concat(ne,"[4] = { 0 };")].join("\n");var ae="global",ie=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),oe=function(){var e={};return re.forEach((function(t){var n=t.split(" ");e[n[1]]={type:"simple",replacement:[{type:"Seperator",val:n[2],space:""}]}})),e}();window.JSCPP.includes.robotc={injectMacros:function(e){e.macros=Object.assign(e.macros,oe)},load:function(e){X.defGlobalArrayVar(e,ee,e.intTypeLiteral,4,0),X.defGlobalArrayVar(e,te,e.intTypeLiteral,4,0),X.defGlobalArrayVar(e,ne,e.longTypeLiteral,4,0),e.regFunc((function(e,t){return ie.play()}),ae,"playSound",[],e.voidTypeLiteral),e.regFunc((function(e,t,n){return window._interpreterSleepMs=n.v}),ae,"wait1Msec",[e.intTypeLiteral],e.voidTypeLiteral),e.regFunc((function(e,t,n){return window._interpreterSleepMs=n.v/10}),ae,"wait10Msec",[e.intTypeLiteral],e.voidTypeLiteral),e.regFunc((function(e,t,n,r){for(var a=arguments.length,i=new Array(a>4?a-4:0),o=4;o<a;o++)i[o-4]=arguments[o];window._rbtWriteOut("> ".concat($.apply(void 0,[X.readString(r.v)].concat(Object(U.a)(i.map((function(e){return e.v})))))))}),ae,"displayTextLine",[e.intTypeLiteral,e.normalPointerType(e.charTypeLiteral),"?"],e.voidTypeLiteral)}};window._interpreterSleepMs=0;var ce=function(){function e(t){var n=this;Object(f.a)(this,e),this.handler=null,this._debugger=null,this._isInterrupted=!1,this._tick=function(){var e=Object(J.a)(Object(Y.a)().mark((function e(t){var r;return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._isInterrupted){e.next=4;break}return t.onStop(),n._terminate(),e.abrupt("return");case 4:if(t.isPaused()){e.next=24;break}if(!(window._interpreterSleepMs<=0)){e.next=22;break}return e.prev=6,e.next=9,n._debugger.continue();case 9:r=e.sent,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(6),n.handler.onError(e.t0),r=!0;case 16:if(!r&&void 0!==r&&!n._isInterrupted){e.next=20;break}return t.onStop(),n._terminate(),e.abrupt("return");case 20:e.next=23;break;case 22:window._interpreterSleepMs-=10;case 23:t.onTickProc(n._debugger.rt);case 24:setTimeout((function(){return n._tick(t)}),0);case 25:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}(),this.handler=t}return Object(p.a)(e,[{key:"start",value:function(e){var t=this,n={stdio:{write:this.handler.printString},debug:!0,prepareEnvironment:this.handler.prepareEnvironment};try{this._debugger=window.JSCPP.run(e,"",n)}catch(r){return this.handler.onError(r),void this._terminate()}this.handler.onInitialization(this._debugger.rt),this._tick({onInitialization:this.handler.onInitialization,onTickProc:function(e){return t.handler.onTickProc(e,t._debugger.variable())},isPaused:this.handler.isPaused,onStop:this.handler.onStop,onError:this.handler.onError})}},{key:"_terminate",value:function(){this._debugger=null,this.stop()}},{key:"stop",value:function(){if(!this._debugger)return this._isInterrupted=!1,void(window._interpreterSleepMs=0);this._isInterrupted=!0}},{key:"isRunning",get:function(){return!!this._debugger}}]),e}(),se=function(){function e(t){var n=this;Object(f.a)(this,e),this.handler=null,this.interpreter=null,this.isPaused=!1,this.querySensors=function(e,t,n){Object.values(n.sensors).forEach((function(n,r){X.setGlobalArrayVarVal(e,te,r,z[n.type].query(t,n))}))},this.addMotorEncoderVal=function(e,t,n){var r=X.getGlobalArrayVarVal(e,ne,t);X.setGlobalArrayVarVal(e,ne,t,r+Math.abs(n))},this.prepareEnvironment=function(e,t){window.JSCPP.includes.robotc.injectMacros(t),window.JSCPP.includes.robotc.load(e)},this.onInitialization=function(e){console.log(e),n.handler.getScene((function(t,r){return n.querySensors(e,t,r)})),n.handler.onStart()},this.onTickProc=function(e,t){n.handler.getScene((function(t,r){var a=X.getGlobalArrayVarVal(e,ee,1),i=X.getGlobalArrayVarVal(e,ee,2),o=t.moveRobot(a,i,1);o[0]&&n.addMotorEncoderVal(e,1,Math.ceil(o[0]+1)),o[1]&&n.addMotorEncoderVal(e,2,Math.ceil(o[1]+1)),t.repaint(),n.querySensors(e,t,r)})),n.handler.updateVariables(t)},this.handler=t,this.interpreter=new ce({onInitialization:this.onInitialization,onTickProc:this.onTickProc,isPaused:function(){return n.isPaused},onStop:this.handler.onStop,onError:this.handler.onError,printString:this.handler.printString,prepareEnvironment:this.prepareEnvironment})}return Object(p.a)(e,[{key:"execute",value:function(e){this.interpreter.start(e)}},{key:"abort",value:function(){this.interpreter.stop()}}]),e}(),ue=(n(90),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={isRunning:!1,isPaused:!1,projectName:"",code:"",variables:[],output:""},r.onRunToggle=function(){r.state.isRunning?r.robot.abort():(r.scene.reset(),r.robot.execute(r.state.code))},r.onPauseToggle=function(){r.robot.isPaused=!r.robot.isPaused,r.setState({isPaused:!r.state.isPaused})},r.onBackgroundUpload=function(){var e=document.createElement("input");e.type="file",e.accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*",e.onchange=function(t){var n=new Image;n.onload=function(){r.scene.background=n,r.scene.repaint()},n.onerror=function(){return alert("Failed to upload background image")},n.src=URL.createObjectURL(e.files[0])},e.click()},r.handleStop=function(){return r.setState({isRunning:!1,isPaused:!1})},r.handleCodeUpdate=function(e){return r.setState({code:e})},r.updateRobotSpawn=function(){r.scene.spawnPoint=r.context.current.robot.startPoint,r.scene.spawnAngle=r.context.current.robot.angle},r.handleRobotSpawnUpdate=function(){r.updateRobotSpawn(),r.scene.reset(),r.scene.repaint()},r.handleSaveRequest=function(){r.context.current.code=r.state.code,r.scene.background&&(r.context.current.background=function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.height=e.naturalHeight,t.width=e.naturalWidth,n.drawImage(e,0,0),t.toDataURL()}(r.scene.background));var e=document.createElement("a");e.download=r.context.current.name+".json",e.href="data:application/json;charset=utf-8;,"+encodeURIComponent(JSON.stringify(r.context.current)),e.target="_blank",e.style.display="none",document.body.appendChild(e),e.click(),e.remove()},r.handleStartPointMove=function(){r.canvasRef.current.style.boxShadow="0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .6)";r.canvasRef.current.addEventListener("mousedown",(function e(t){var n=r.canvasRef.current.getBoundingClientRect(),a=t.clientX-n.left,i=t.clientY-n.top,o=a*r.canvasRef.current.width/n.width,c=i*r.canvasRef.current.height/n.height;r.context.current.robot.startPoint=V(L(o,c),L(-r.scene.robot.sprite.size.width/2,-r.scene.robot.sprite.size.height/2)),r.handleRobotSpawnUpdate(),r.canvasRef.current.style.boxShadow=null,r.canvasRef.current.removeEventListener("mousedown",e)}))},r.robot=new se({onStart:function(){return r.setState({isRunning:!0})},onStop:r.handleStop,onError:function(e){r.handleStop(),window._rbtWriteOut(e)},updateVariables:function(e){return r.setState({variables:e})},printString:function(e){return r.state.output+"\n"+e},getScene:function(e){return e(r.scene,r.context.current)}}),window._rbtWriteOut=function(e){return r.setState({output:r.state.output+"\n"+e})},r.canvasRef=a.a.createRef(),r.outputRef=a.a.createRef(),r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.setState({projectName:this.context.current.name,code:this.context.current.code}),!this.scene){if(this.scene=new F(new W(this.canvasRef.current),null),this.handleRobotSpawnUpdate(),this.context.current.background){var t=new Image;t.onload=function(){e.scene.background=t,e.scene.repaint()},t.src=this.context.current.background}this.setState({output:"### Upload background image with size maximum of ".concat(this.canvasRef.current.width,"x").concat(this.canvasRef.current.height," pixels")})}}},{key:"componentDidUpdate",value:function(e,t,n){this.outputRef.current.scrollTop=this.outputRef.current.scrollHeight}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"project-root",children:[Object(b.jsx)(w,{projectName:this.state.projectName,isRunning:this.state.isRunning,onRunToggle:this.onRunToggle,isPaused:this.state.isPaused,onPauseToggle:this.onPauseToggle,onBackgroundUpload:this.onBackgroundUpload,onStartMove:this.handleStartPointMove,onSave:this.handleSaveRequest}),Object(b.jsxs)("div",{id:"project-view",children:[Object(b.jsx)(E,{id:"code-view",className:"project-block",value:this.state.code,onChange:this.handleCodeUpdate,lang:"c_cpp",style:{flex:4}}),Object(b.jsxs)("div",{id:"result-view",style:{flex:7},children:[Object(b.jsx)("canvas",{width:700,height:600,ref:this.canvasRef,className:"project-block"}),Object(b.jsx)("textarea",{value:this.state.output,disabled:!0,ref:this.outputRef,className:"project-block"})]}),Object(b.jsx)("div",{id:"debug-view",className:"project-block",style:{flex:3},children:this.state.isRunning?Object(b.jsx)(I,{variables:this.state.variables}):Object(b.jsx)(H,{onUpdate:this.handleRobotSpawnUpdate})})]})]})}}]),n}(a.a.Component));ue.contextType=A;var le=n(29);n(91);function de(e){var t=e.variant,n=e.size,r=e.onClick,a=e.icon,i=e.subtitle,o=e.children;return Object(b.jsxs)(y.a,{className:"icon-button",variant:t,size:n,onClick:r,children:[a,Object(b.jsxs)("div",{className:"icon-button-wrapper",children:[o,Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"icon-button-subtitle",children:i})]})]})}n(92);function he(){var e=g(),t=a.a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=function(){return i(!1)},c=a.a.useState("My Project"),u=Object(s.a)(c,2),l=u[0],d=u[1],h=function(){return e.load({name:l,robot:{startPoint:{x:50,y:50},angle:0},sensors:[{type:"none",angle:180,offset:{x:50,y:50}},{type:"light",angle:0,offset:{x:50,y:50}},{type:"ultrasonic",angle:90,offset:{x:50,y:50}},{type:"none",angle:270,offset:{x:50,y:50}}],code:'\n// todo: fix #define\n\nint SPEED = 10;\nfloat K = 0.05f;\nint COLOR_THRESHOLD = 50;\nint DIST_THRESHOLD = 128;\nint CIRCLE_DIST = 3800;\n\nint main()\n{\n    int last_dist = 255, items = 0;\n\n    nMotorEncoder[motorB] = 0;\n\n    bool is_black;\n    while (1)\n    {\n        is_black = SensorValue[S2] > COLOR_THRESHOLD;\n        motor[is_black ? motorB : motorC] = SPEED + (K * SensorValue[S2]);\n        motor[is_black ? motorC : motorB] = SPEED - (K * SensorValue[S2]);\n        \n        wait1Msec(10);\n        \n        if ((last_dist - SensorValue[S3]) > DIST_THRESHOLD)\n        {\n            items++;\n            displayTextLine(1, "Detected new item +=%d | Total: %d", 1, items);\n            playSound();\n        }\n        \n        last_dist = SensorValue[S3];\n        \n        if (nMotorEncoder[motorB] > CIRCLE_DIST)\n        {\n            displayTextLine(1, "Done. Items: %d", items);\n            break;\n        }\n    }\n    \n    return 0;\n}\n        ',background:null}),o(),!1};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(de,{variant:"outline-success",size:"lg",icon:Object(b.jsx)(S.b,{size:24}),subtitle:"Create a new project and edit it in RobotC Simulator",onClick:function(){return i(!0)},children:"New project"}),Object(b.jsx)(le.a,{show:r,onHide:o,backdrop:"static",centered:!0,children:Object(b.jsxs)(M.a,{onSubmit:h,children:[Object(b.jsx)(le.a.Header,{children:Object(b.jsx)(le.a.Title,{children:"Project name:"})}),Object(b.jsx)(le.a.Body,{children:Object(b.jsx)(M.a.Control,{type:"text",value:l,onChange:function(e){return function(e){return d(e.target.value)}(e)},autoFocus:!0})}),Object(b.jsxs)(le.a.Footer,{children:[Object(b.jsx)(y.a,{variant:"secondary",onClick:o,children:"Cancel"}),Object(b.jsx)(y.a,{variant:"primary",type:"submit",onClick:h,children:"Create"})]})]})})]})}function be(){var e=g();return Object(b.jsxs)("div",{id:"hub",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"RobotC Simulator"})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"hub-actions",children:[Object(b.jsx)(he,{}),Object(b.jsx)(de,{variant:"outline-primary",size:"lg",icon:Object(b.jsx)(S.c,{size:24}),subtitle:"Load and edit an existing project in RobotC Simulator",onClick:function(){var t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=function(n){var r=t.files[0],a=new FileReader;a.readAsText(r,"UTF-8"),a.onload=function(t){e.load(JSON.parse(t.target.result))},a.onerror=function(e){alert("Failed to read project"),console.log("Failed to import project",e)}},t.click()},children:"Open project"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"(c) Michael Krylov., 2022"})]})}n(93);var Ae=n(69);n(94);function je(){return Object(b.jsxs)("div",{id:"preloader-wrapper",children:[Object(b.jsx)(Ae.a,{animation:"border",role:"status",variant:"primary",style:{width:100,height:100}}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"RobotC Simulator"})]})}function ge(){return g().current?Object(b.jsx)(ue,{}):Object(b.jsx)(be,{})}var fe=function(){var e,t=a.a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1];return e=function(){return i(!0)},l.forEach((function(t){var n=new Image;n.src=t,n.onload=function(){d[t]=n,Object.keys(d).length===l.length&&e()}})),r?Object(b.jsx)(j,{children:Object(b.jsx)(ge,{})}):Object(b.jsx)(je,{})};n(95);o.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(fe,{})})),c()}},[[96,1,2]]]);
//# sourceMappingURL=main.12c03db7.chunk.js.map