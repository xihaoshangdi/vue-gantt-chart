(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={index:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-gantt-chart/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"0b86":function(t,e,n){"use strict";n("f7f0")},1530:function(t,e,n){"use strict";n("9e1d")},"18a0":function(t,e,n){"use strict";n("75b1")},"18fa":function(t,e,n){"use strict";n("bdd2")},"1a3c":function(t,e,n){"use strict";n("962b")},"234c":function(t,e,n){"use strict";n("9abc")},"4e91":function(t,e,n){"use strict";n("fc36")},"542a":function(t,e,n){},6042:function(t,e,n){},"75b1":function(t,e,n){},"7c3e":function(t,e,n){"use strict";n("ec44")},"8e55":function(t,e,n){},9257:function(t,e,n){"use strict";n("8e55")},"962b":function(t,e,n){},"9abc":function(t,e,n){},"9e1d":function(t,e,n){},ab9d:function(t,e,n){"use strict";n("6042")},bdd2:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"container",style:{width:t.ChartWidth+"%"}},[n("GanttChart",{attrs:{"gantt-data":t.GanttData,"gantt-current-time":t.GanttCurrentTime,"first-line-stick":t.firstLineStick,"time-section":t.GanttTime,"chart-max-height":t.ChartHeight,"float-view-render-fn":t.floatRender},nativeOn:{rightClick:function(e){return t.handleRightClick(e)}},scopedSlots:t._u([{key:"side-box",fn:function(t){var e=t.item;return[n("SideComponent",{attrs:{"side-info":e}})]}},{key:"container-box",fn:function(t){var e=t.item;return[n("ContentComponent",{attrs:{"content-info":e}})]}}])})],1),n("div",{staticClass:"operate__area"},[t._m(0),n("div",{staticClass:"operate"},[n("div",[t._v("首行是否粘性:"),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.firstLineStick,callback:function(e){t.firstLineStick=e},expression:"firstLineStick"}})],1),n("div",[t._v("调节甘特图宽度:"),n("el-slider",{model:{value:t.ChartWidth,callback:function(e){t.ChartWidth=e},expression:"ChartWidth"}})],1),n("div",[t._v("调节甘特图内容高度:"),n("el-slider",{attrs:{min:0,max:600},model:{value:t.ChartHeight,callback:function(e){t.ChartHeight=e},expression:"ChartHeight"}})],1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drag-wrapper",attrs:{id:"buffer__area"}},[n("span",[t._v("可拖拽区域:")])])}],o=(n("99af"),n("159b"),n("5a0c")),s=n.n(o),c=(n("7db0"),n("a630"),n("caad"),n("d3b7"),n("2532"),n("3ca3"),n("10d1"),n("ddb0"),n("d4ec")),l=n("bee2"),u=n("5364"),d=n("9bd1"),f=new WeakMap,h=new WeakMap,p=new WeakMap,m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Object(c["a"])(this,t),f.set(this,{writable:!0,value:void 0}),h.set(this,{writable:!0,value:void 0}),p.set(this,{writable:!0,value:void 0}),!e)return null;Object(d["a"])(this,f,e),this.init(n)}return Object(l["a"])(t,[{key:"init",value:function(t){var e=this;Object(u["a"])(this,f).addEventListener("dragstart",(function(n){Object(d["a"])(e,p,n.target),Object(d["a"])(e,h,n.target.cloneNode(!0));var a=new Image;a.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E",n.dataTransfer.setDragImage(a,0,0),Object(u["a"])(e,h).style.position="absolute",Object(u["a"])(e,h).style.left="0",Object(u["a"])(e,h).style.top="0",Object(u["a"])(e,h).style.pointerEvents="none",Object(u["a"])(e,h).style.transform="translate3d(".concat(n.clientX,"px,").concat(n.clientY,"px,0)"),document.body.appendChild(Object(u["a"])(e,h)),t&&n.stopPropagation()}),t),Object(u["a"])(this,f).addEventListener("drag",(function(n){Object(u["a"])(e,h).style.transform="translate3d(".concat(n.clientX,"px,").concat(n.clientY,"px,0)"),Object(u["a"])(e,p).style.display="none",t&&n.stopPropagation()}),t),Object(u["a"])(this,f).addEventListener("dragover",(function(e){var n=e.path,a=Array.from(n).find((function(t){return t.classList&&Array.from(t.classList).includes("drag-wrapper")}));a&&e.preventDefault(),t&&e.stopPropagation()}),t),Object(u["a"])(this,f).addEventListener("drop",(function(n){var a=n.path,r=Array.from(a).find((function(t){return t.classList&&Array.from(t.classList).includes("drag-wrapper")}));r&&(Object(u["a"])(e,p).parentNode.removeChild(Object(u["a"])(e,p)),r.appendChild(Object(u["a"])(e,p))),t&&n.stopPropagation()}),t),Object(u["a"])(this,f).addEventListener("dragend",(function(n){document.body.removeChild(Object(u["a"])(e,h)),Object(d["a"])(e,h,null),Object(u["a"])(e,p).style.display="block",t&&n.stopPropagation()}),t)}}]),t}(),v=m,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideInfo"},[n("span",[t._v(t._s(t.sideInfo.currentAirport))]),n("span",[t._v(t._s(t.sideInfo.number))]),n("span",[t._v(t._s(t.sideInfo.model))])])},b=[],y={name:"SideComponent",props:{sideInfo:{type:Object,default:function(){}}}},_=y,C=(n("18fa"),n("2877")),k=Object(C["a"])(_,g,b,!1,null,"29e1c31e",null),w=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentInfo"},[n("span",[t._v(t._s(t.contentInfo.workType))]),n("span",[t._v(t._s(t.contentInfo.startAirport)+"-"+t._s(t.contentInfo.endAirport))])])},x=[],O={name:"ContentComponent",props:{contentInfo:{type:Object,default:function(){}}}},j=O,D=(n("e3a1"),Object(C["a"])(j,S,x,!1,null,"b7c1e4c2",null)),E=D.exports,M=function(t){for(var e=["塔尔萨国际机场","达拉斯/沃思堡国际机场","Coffeyville市立機場","奥黑尔国际机场","丹佛国际机场","休士頓喬治布希洲際機場","沙努特Martin Johnson機場","兰伯特-圣路易国际机场","北京机场","天津机场"],n=["石油服务","航空探矿","航拍航测","外吊挂作业","电力作业","管道巡线","引港作业","农林牧副渔生产","气象/资源保护","航空护林","航空播种","航空化学处理","伐木运送","空中放牧","鱼群跟踪","秸秆焚烧侦查","执法飞行","城市消防","夜视镜培训","公务飞行","医疗救援","海事巡查","VIP运输","旅游观光","休闲娱乐","新闻采集和播报","空中摄影","飞行培训","私人飞行"],a=["A300","A310","A318","A319","A320-200"],r=[],i=0;i<t;i++)r.push({id:i,currentAirport:e[Math.floor(Math.random()*e.length)],number:"".concat(H(),"-").concat(T()),model:a[Math.floor(Math.random()*a.length)],childArray:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.floor(3),a=[],r=0;r<t;r++){var i=s()(new Date).add(Math.floor(65*Math.random()),"hour").format("YYYY/MM/DD HH:mm"),o=s()(i).add(15*Math.random(),"hour").format("YYYY/MM/DD HH:mm");a.push({id:r,startAirport:e[Math.floor(Math.random()*e.length)],endAirport:e[Math.floor(Math.random()*e.length)],workType:n[Math.floor(Math.random()*n.length)],start:i,end:o})}return a}()});return r[0].currentAirport="未分配",r[0].number="",r[0].model="",r};function H(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e="",n=0;n<t;n++)e+=Math.floor(10*Math.random());return e}function T(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n="",a=0;a<t;a++)n+=e[Math.floor(26*Math.random())];return n}var L={components:{ContentComponent:E,SideComponent:w},data:function(){return{GanttTime:[s()().format("YYYY/MM/DD"),s()().add(3,"day").format("YYYY/MM/DD")],GanttData:M(50),GanttCurrentTime:(new Date).getTime(),floatRender:function(t){return"<div>".concat(t.startAirport,"</div><div>").concat(t.workType,"</div><div>").concat(t.endAirport,"</div>")},marker:null,firstLineStick:!0,ChartWidth:80,ChartHeight:600}},mounted:function(){var t=this;this.marker=setInterval((function(){t.GanttCurrentTime+=1e5}),1e3),new v(document,!0);var e=document.querySelector("#buffer__area"),n={childList:!0,attributes:!1,subtree:!0},a={},r=new MutationObserver((function(t){t.forEach((function(t){if(t.addedNodes.length){var e=t.addedNodes[0];a[e.id]=e.style.left,e.style.position="relative",e.style.left="5px"}if(t.removedNodes.length){var n=t.removedNodes[0];n.style.left=a[n.id],n.style.position="absolute"}}))}));r.observe(e,n)},beforeDestroy:function(){clearInterval(this.marker)},methods:{handleRightClick:function(t){console.log("event",t);var e=t.detail;this.$notify.info({title:"消息",dangerouslyUseHTMLString:!0,message:"\n                <div>\n                <strong>起飞机场</strong>:  ".concat(e.startAirport,"\n                </div>\n                <div>\n                <strong>任务类型</strong>:  ").concat(e.workType,"</div>\n                <div>\n                <strong>降落机场</strong>:  ").concat(e.endAirport,"\n                </div>")})}}},A=L,$=(n("18a0"),Object(C["a"])(A,r,i,!1,null,"427f4d3f",null)),B=$.exports,Y=(n("d81d"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt__layout",on:{contextmenu:function(t){t.preventDefault()}}},[n("chart-header",{directives:[{name:"show",rawName:"v-show",value:t.showHeader,expression:"showHeader"}],attrs:{"header-data":t.headerData}}),t.ganttData.length?[n("div",{staticClass:"gantt__area",style:t.areaStyleObj,on:{handleFloatView:t.handleFloatView}},[n("chart-side",{attrs:{"gantt-data":t.chartData,"first-line-stick":t.firstLineStick},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._t("side-box",null,{item:n})]}}],null,!0)}),n("chart-container",{attrs:{id:"gantt-container","spend-time":t.spendTime,"gantt-data":t.chartData,"first-line-stick":t.firstLineStick},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._t("container-box",null,{item:n})]}}],null,!0)})],1)]:[n("div",{staticClass:"gantt__area--error"},[t._v("暂无数据")])]],2)}),I=[],J=(n("4de4"),n("a9e3"),n("3835")),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__side"},[t._l(t.headerData,(function(e){return[n("div",{key:e,style:t.headerSideHeight},[n("div",[t._v(t._s(e))])])]}))],2),n("div",{staticClass:"header__container"},[n("div",{staticClass:"header__container__day",style:t.headerContainerWidth},[t._l(t.day,(function(e,a){return[n("div",{key:a},[t._v(t._s(e))])]}))],2),n("div",{staticClass:"header__container__hours",style:t.headerContainerWidth},[t._l(t.hour,(function(e,a){return[n("div",{key:a,staticClass:"header__container__hour"},[t._v(" "+t._s(e)+" ")])]}))],2)])])},P=[],V=n("b375");s.a.extend(V);var W,q=function(t){var e=[],n=0;while(t>=1)e.push(n),n++,t--,24===n&&(n=0);return e},F=function(t,e){var n=[],a=t.startOf("day"),r=e.startOf("day");while(a.isSameOrBefore(r,"day"))n.push(a.format("YYYY-M-D")),a=a.add(1,"day");return n},G={name:"ChartHeader",inject:["baseHour","baseBlock","timeSectionDayJs"],props:{headerData:{type:Array,require:!0,default:function(){return["日期","时间"]}}},computed:{headerSideHeight:function(){return{lineHeight:"".concat(this.baseBlock,"px")}},headerContainerWidth:function(){return{width:"".concat(this.baseHour*this.hour.length,"px"),lineHeight:"".concat(this.baseBlock,"px")}},hour:function(){var t=24*this.day.length;return q(t)},day:function(){var t=this.timeSectionDayJs,e=t.start,n=t.end;return F(e,n)}}},R=G,X=(n("1530"),Object(C["a"])(R,N,P,!1,null,"545bce5c",null)),U=X.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("time-line",{attrs:{"spend-time":t.spendTime}}),n("time-mask",{attrs:{"spend-time":t.spendTime}}),n("div",{style:t.blockStyle},[t._l(t.ganttData,(function(e,a){return[n("chart-block",{key:a,class:{sticky:t.firstLineStick&&0===a},style:t.blockSelected(a),attrs:{"spend-time":t.spendTime,block:e},nativeOn:{click:function(e){return t.handleHighlight(a)}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._t("default",null,{item:n})]}}],null,!0)})]}))],2)],1)},Q=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block drag-wrapper"},[t._l(t.block.childArray,(function(e,a){return[n("div",{key:a,staticClass:"bar",style:t.occupy(e),attrs:{id:e.id,draggable:t.checkDrag(e)},on:{"!mouseenter":function(n){return t.handleFloatView(e,n)},contextmenu:function(n){return n.preventDefault(),t.rightClick(e,n)}}},[t._t("default",null,{item:e})],2)]}))],2)},z=[],tt={name:"ChartBlock",inject:["baseHour","timeSectionDayJs"],props:{block:{type:Object,default:function(){}},spendTime:{type:Number,required:!0}},methods:{occupy:function(t){var e=s()(t.end).diff(s()(t.start),"minute"),n=s()(s()(t.start)).diff(this.timeSectionDayJs.start,"minute"),a=this.spendTime/60>n?"#F56C6C":"#67C23A";return{width:this.baseHour*e/60+"px",left:n/60*this.baseHour+"px",backgroundColor:a}},checkDrag:function(t){return s()(s()(t.start)).diff(this.timeSectionDayJs.start,"hour")-this.spendTime/3600>0},rightClick:function(t,e){e.target.dispatchEvent(new CustomEvent("rightClick",{bubbles:!0,detail:t}))},handleFloatView:function(t,e){e.target.dispatchEvent(new CustomEvent("handleFloatView",{bubbles:!0,detail:{info:t}}))}}},et=tt,nt=(n("7c3e"),Object(C["a"])(et,Z,z,!1,null,"f08931cc",null)),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-box"},[n("div",{staticClass:"timeline",style:{height:t.lineHeight,left:t.linePos}},[n("div",[n("span",[t._v(t._s(t.hour.toString().padStart(2,"0"))+":")]),n("span",[t._v(t._s(t.minute.toString().padStart(2,"0"))+":")]),n("span",[t._v(t._s(t.second.toString().padStart(2,"0")))])])])])},it=[],ot={name:"TimeLine",inject:["baseHour"],props:{spendTime:{type:Number,required:!0}},data:function(){return{lineHeight:0}},computed:{hour:function(){return Math.floor(this.spendTime/3600)},minute:function(){return Math.floor(this.spendTime/60%60)},second:function(){return this.spendTime%60},linePos:function(){return this.baseHour*this.spendTime/3600+"px"}},mounted:function(){this.lineHeight=this.$parent.$el.clientHeight+"px"}},st=ot,ct=(n("ab9d"),Object(C["a"])(st,rt,it,!1,null,"06f18dc6",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mask-box"},[n("div",{staticClass:"mask",style:{height:t.maskHeight,width:t.maskWidth}})])},dt=[],ft={name:"TimeMask",inject:["baseHour"],props:{spendTime:{type:Number,required:!0}},data:function(){return{maskHeight:0}},computed:{maskWidth:function(){return this.baseHour*this.spendTime/3600+"px"}},mounted:function(){this.maskHeight=this.$parent.$el.clientHeight+"px"}},ht=ft,pt=(n("4e91"),Object(C["a"])(ht,ut,dt,!1,null,"62c61ab2",null)),mt=pt.exports,vt={name:"ChartContainer",components:{TimeMask:mt,TimeLine:lt,ChartBlock:at},inject:["baseHour","timeSectionDayJs"],props:{ganttData:{type:Array,default:function(){return[]}},spendTime:{type:Number,required:!0},firstLineStick:{type:Boolean,default:!0}},data:function(){return{activeIndex:-1,dragEvent:{dragStart:null,dragEnd:null}}},computed:{blockStyle:function(){var t=this.timeSectionDayJs,e=t.start,n=t.end;return{width:"".concat(this.baseHour*F(e,n).length*24,"px")}}},methods:{handleHighlight:function(t){this.activeIndex=t},blockSelected:function(t){return t===this.activeIndex?{backgroundColor:"rgba(0,0,0,0.1)"}:{}}}},gt=vt,bt=(n("234c"),Object(C["a"])(gt,K,Q,!1,null,"793486b2",null)),yt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side"},[t._l(t.ganttData,(function(e,a){return[n("div",{key:a,class:{sticky:t.firstLineStick&&0===a},style:t.sideHeight,on:{contextmenu:function(n){return n.preventDefault(),t.rightClick(e,n)}}},[t._t("default",null,{item:e})],2)]}))],2)},Ct=[],kt=(n("a434"),{name:"ChartSide",inject:["baseBlock"],props:{ganttData:{type:Array,default:function(){return[]}},firstLineStick:{type:Boolean,default:!0}},computed:{sideHeight:function(){return{lineHeight:"".concat(this.baseBlock,"px")}}},mounted:function(){var t=document.querySelectorAll(".side > div"),e=Array.from(t).map((function(t){var e=Math.round(190*Math.random())+10,n=Math.round(50*Math.random())+50,a=Math.round(20*Math.random())+65;return[e,n,a]}));e.sort((function(t,e){return t[0]-e[0]}));for(var n=0;n<e.length;n++)n%2!==0&&e.splice(n,0,e.pop());t.forEach((function(t,n){var a=Object(J["a"])(e[n],3),r=a[0],i=a[1],o=a[2];t.style.color="hsl(".concat(r,"deg ").concat(i,"% ").concat(o-25,"%)"),t.firstChild.style.backgroundColor="hsl(".concat(r,"deg ").concat(i,"% ").concat(o,"%)")}))},methods:{rightClick:function(t,e){e.target.dispatchEvent(new CustomEvent("rightClick",{bubbles:!0,detail:t}))}}}),wt=kt,St=(n("1a3c"),Object(C["a"])(wt,_t,Ct,!1,null,"70abe769",null)),xt=St.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.floatState,expression:"floatState"}],staticClass:"floatView",style:t.viewStyle},[n("div",{domProps:{innerHTML:t._s(t.htmlTmpl)}})])},jt=[],Dt={name:"FloatView",data:function(){return{floatState:!0,htmlTmpl:"",layerEvent:null,triggerEvent:null,viewStyle:{}}},methods:{show:function(t){var e=this;t();var n=function(){e.floatState=!e.floatState};this.triggerEvent.addEventListener("mousedown",n),this.triggerEvent.addEventListener("mouseup",n),this.triggerEvent.addEventListener("mouseleave",(function(){document.body.removeChild(e.$el),e.triggerEvent.removeEventListener("mousedown",n),e.triggerEvent.removeEventListener("mouseup",n),e.$destroy()}),{once:!0}),this.$nextTick((function(){var t,n,a=e.layerEvent.getBoundingClientRect(),r=e.triggerEvent.getBoundingClientRect(),i=e.$el.getBoundingClientRect();t=r.right+i.width>a.right?r.left-i.width-10:r.right+10;var o=(i.height-r.height)/2;n=a.bottom-r.bottom<o?r.top-i.height:r.top-a.top<o?r.bottom:r.top-o,e.viewStyle={left:"".concat(t,"px"),top:"".concat(n,"px")}}))}}},Et=Dt,Mt=(n("9257"),Object(C["a"])(Et,Ot,jt,!1,null,"ea18c8d0",null)),Ht=Mt.exports,Tt=a["default"].extend(Ht),Lt=function(){W=new Tt,document.body.appendChild(W.$mount().$el)},At=function(t){return W||Lt(),Object.assign(W,t),W.show((function(t){W=null})),W},$t=n("e418"),Bt=n.n($t);s.a.extend(Bt.a);var Yt={name:"GanttChart",components:{ChartHeader:U,ChartSide:xt,ChartContainer:yt},provide:function(){return{timeSectionDayJs:this.timeSectionDayJs,baseHour:this.baseHour,baseBlock:this.baseBlock}},props:{showHeader:{type:Boolean,default:!0},headerData:{type:Array,default:function(){return["日期","时间"]}},timeSection:{type:Array,required:!0},firstLineStick:{type:Boolean,default:!0},chartMaxHeight:{type:Number,default:500},ganttCurrentTime:{type:Number,default:(new Date).getTime()},ganttData:{type:Array,required:!0},floatViewRenderFn:{type:Function,default:function(){return function(t){return t}}}},data:function(){return{baseHour:50,baseBlock:40,floatState:!0}},computed:{areaStyleObj:function(){var t=this.ganttData.length*this.baseBlock;return{height:"".concat(t>this.chartMaxHeight?this.chartMaxHeight:t,"px")}},timeSectionDayJs:function(){var t=this.timeSection.map((function(t){return s()(t)})),e=Object(J["a"])(t,2),n=e[0],a=e[1];return n.isValid()&&a.isValid()?{start:n,end:a}:(console.log("传入的时间区间".concat(this.timeSection,"不是合法的")),{})},spendTime:function(){var t;return s()(this.ganttCurrentTime).isBetween(this.timeSectionDayJs.start,this.timeSectionDayJs.end,null,"[]")?t=s()(s()(this.ganttCurrentTime)).diff(this.timeSectionDayJs.start,"second"):(console.error("错误的时间"),t=0),t},chartData:function(){var t=this;return this.ganttData.map((function(e){return e.childArray=e.childArray.filter((function(e){return s()(e.end).isBefore(t.timeSectionDayJs.end.add(1,"day"))})),e}))}},mounted:function(){var t=this,e=document.querySelector(".gantt__layout .header__container"),n=document.querySelector(".gantt__layout .side"),a=document.querySelector(".gantt__layout .container"),r=document.querySelector(".gantt__layout"),i="";r.addEventListener("mouseenter",(function(t){var e=t.target.className;e.includes("container")&&(i="container"),e.includes("side")&&(i="side")}),!0),r.addEventListener("scroll",(function(t){"container"===i&&"container"===t.target.className&&(n.scrollTop=t.target.scrollTop,e.scrollLeft=t.target.scrollLeft),"side"===i&&(a.scrollTop=t.target.scrollTop)}),!0),r.addEventListener("mousemove",(function(e){t.floatState=0===e.buttons})),new v(a)},methods:{handleFloatView:function(t){if(this.floatState){var e=t.target,n=t.detail.info,a=document.getElementById("gantt-container"),r=this.floatViewRenderFn(n);At({layerEvent:a,triggerEvent:e,htmlTmpl:r})}}}},It=Yt,Jt=(n("0b86"),Object(C["a"])(It,Y,I,!1,null,"253e7756",null)),Nt=Jt.exports;Nt.install=function(t){t.component(Nt.name,Nt)};var Pt=Nt,Vt=[Pt],Wt=function t(e){t.installed||Vt.map((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&Wt(window.Vue);var qt={install:Wt,GanttChart:Pt},Ft=n("5c96"),Gt=n.n(Ft);n("0fae");a["default"].use(qt),a["default"].use(Gt.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(B)}}).$mount("#app")},e3a1:function(t,e,n){"use strict";n("542a")},ec44:function(t,e,n){},f7f0:function(t,e,n){},fc36:function(t,e,n){}});
//# sourceMappingURL=index.b6737c48.js.map