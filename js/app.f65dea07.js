(function(){"use strict";var t={2286:function(t,e,r){var i=r(5471),n=r(1052),o=r.n(n),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],s=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"code",label:"Code",width:"150"}}),e("el-table-column",{attrs:{prop:"type",label:"Type",width:"100"}}),e("el-table-column",{attrs:{prop:"category",label:"Category",width:"100"}}),e("el-table-column",{attrs:{prop:"number",label:"Number",width:"100"}}),e("el-table-column",{attrs:{prop:"startTime",label:"Start Time",width:"180"}}),e("el-table-column",{attrs:{prop:"duration",label:"Duration",width:"120"}}),e("el-table-column",{attrs:{prop:"endTime",label:"End Time",width:"180"}}),e("el-table-column",{attrs:{prop:"price",label:"Price",width:"120"}}),e("el-table-column",{attrs:{label:"Action",width:"150"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",{staticClass:"grab-single",on:{click:function(e){return t.openDialog(r.row)}}},[t._v("แข่งขันรับงาน")])]}}])})],1),e("el-dialog",{attrs:{title:"ยืนยันตัวตน",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.initTurnstile,close:t.destroyTurnstile}},[e("p",[e("strong",[t._v("Code:")]),t._v(" "+t._s(t.selectedRow.code))]),e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.selectedRow.type))]),e("p",[e("strong",[t._v("Category:")]),t._v(" "+t._s(t.selectedRow.category))]),e("p",[e("strong",[t._v("Number:")]),t._v(" "+t._s(t.selectedRow.number))]),e("p",[e("strong",[t._v("Start Time:")]),t._v(" "+t._s(t.selectedRow.startTime))]),e("p",[e("strong",[t._v("Duration:")]),t._v(" "+t._s(t.selectedRow.duration))]),e("p",[e("strong",[t._v("End Time:")]),t._v(" "+t._s(t.selectedRow.endTime))]),e("p",[e("strong",[t._v("Price:")]),t._v(" "+t._s(t.selectedRow.price))]),e("div",{attrs:{id:"turnstile-container"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.closeDialog}},[t._v("ยกเลิก")]),e("el-button",{attrs:{type:"primary",disabled:!t.isCaptchaSolved},on:{click:t.submitTurnstile}},[t._v("ยืนยัน")])],1)])],1)},d=[],u={data(){return{tableData:[{code:"EA1-LAK",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"},{code:"EA1-AYUU",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"},{code:"AYUU-NO3",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"}],dialogVisible:!1,selectedRow:{},turnstileWidgetId:null,isCaptchaSolved:!1}},methods:{openDialog(t){this.selectedRow=t,this.dialogVisible=!0},initTurnstile(){const t=document.createElement("script");t.src="https://challenges.cloudflare.com/turnstile/v0/api.js",t.async=!0,t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.turnstile&&(this.turnstileWidgetId=window.turnstile.render("#turnstile-container",{sitekey:"0x4AAAAAAA7SN9BgICU6k8R5",callback:t=>{this.isCaptchaSolved=!0}}))}},destroyTurnstile(){this.turnstileWidgetId&&window.turnstile&&(window.turnstile.remove(this.turnstileWidgetId),this.turnstileWidgetId=null,this.isCaptchaSolved=!1)},closeDialog(){this.dialogVisible=!1},submitTurnstile(){if(window.turnstile){const t=window.turnstile.getResponse(this.turnstileWidgetId);t?(alert(`Turnstile Token: ${t}`),this.dialogVisible=!1):alert("Please complete the Turnstile challenge.")}}}},c=u,p=r(1656),b=(0,p.A)(c,s,d,!1,null,"60f1c86a",null),m=(b.exports,{name:"App"}),v=m,h=(0,p.A)(v,l,a,!1,null,null,null),g=h.exports,f=r(5220),w=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"code",label:"Code",width:"150"}}),e("el-table-column",{attrs:{prop:"type",label:"Type",width:"100"}}),e("el-table-column",{attrs:{prop:"category",label:"Category",width:"100"}}),e("el-table-column",{attrs:{prop:"number",label:"Number",width:"100"}}),e("el-table-column",{attrs:{prop:"startTime",label:"Start Time",width:"180"}}),e("el-table-column",{attrs:{prop:"duration",label:"Duration",width:"120"}}),e("el-table-column",{attrs:{prop:"endTime",label:"End Time",width:"180"}}),e("el-table-column",{attrs:{prop:"price",label:"Price",width:"120"}}),e("el-table-column",{attrs:{label:"Action",width:"150"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",{staticClass:"grab-single",on:{click:function(e){return t.openDialog(r.row)}}},[t._v("แข่งขันรับงาน")])]}}])})],1),e("el-dialog",{attrs:{title:"ยืนยันตัวตน",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.initTurnstile,close:t.destroyTurnstile}},[e("p",[e("strong",[t._v("Code:")]),t._v(" "+t._s(t.selectedRow.code))]),e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.selectedRow.type))]),e("p",[e("strong",[t._v("Category:")]),t._v(" "+t._s(t.selectedRow.category))]),e("p",[e("strong",[t._v("Number:")]),t._v(" "+t._s(t.selectedRow.number))]),e("p",[e("strong",[t._v("Start Time:")]),t._v(" "+t._s(t.selectedRow.startTime))]),e("p",[e("strong",[t._v("Duration:")]),t._v(" "+t._s(t.selectedRow.duration))]),e("p",[e("strong",[t._v("End Time:")]),t._v(" "+t._s(t.selectedRow.endTime))]),e("p",[e("strong",[t._v("Price:")]),t._v(" "+t._s(t.selectedRow.price))]),e("div",{attrs:{id:"turnstile-container"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.closeDialog}},[t._v("ยกเลิก")]),e("el-button",{attrs:{type:"primary",disabled:!t.isCaptchaSolved},on:{click:t.submitTurnstile}},[t._v("ยืนยัน")])],1)])],1)},_=[],y={data(){return{tableData:[{code:"EA1-LAK",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"},{code:"EA1-AYUU",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"},{code:"AYUU-NO3",type:"C",category:"4W",number:"226",startTime:"10-02-2025 12:30",duration:"0h 26m",endTime:"10-02-2025 13:30",price:"2395"}],dialogVisible:!1,selectedRow:{},turnstileWidgetId:null,isCaptchaSolved:!1}},methods:{openDialog(t){this.selectedRow=t,this.dialogVisible=!0},initTurnstile(){const t=document.createElement("script");t.src="https://challenges.cloudflare.com/turnstile/v0/api.js",t.async=!0,t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.turnstile&&(this.turnstileWidgetId=window.turnstile.render("#turnstile-container",{sitekey:"0x4AAAAAAA7SN9BgICU6k8R5",callback:t=>{this.isCaptchaSolved=!0}}))}},destroyTurnstile(){this.turnstileWidgetId&&window.turnstile&&(window.turnstile.remove(this.turnstileWidgetId),this.turnstileWidgetId=null,this.isCaptchaSolved=!1)},closeDialog(){this.dialogVisible=!1},async submitTurnstile(){if(window.turnstile){const e=window.turnstile.getResponse(this.turnstileWidgetId);if(!e)return void alert("Please complete the Turnstile challenge.");try{const t=await fetch("https://your-server-url/verify-captcha",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,rowData:this.selectedRow})}),r=await t.json();r.success?this.$router.push({name:"Details",params:{rowData:this.selectedRow}}):alert("CAPTCHA verification failed. Please try again.")}catch(t){console.error("Error verifying CAPTCHA:",t),alert("An error occurred while verifying CAPTCHA. Please try again.")}}}}},T=y,C=(0,p.A)(T,w,_,!1,null,"df21f694",null),A=C.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("รายละเอียดงาน")]),e("p",[e("strong",[t._v("Code:")]),t._v(" "+t._s(t.rowData.code))]),e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.rowData.type))]),e("p",[e("strong",[t._v("Category:")]),t._v(" "+t._s(t.rowData.category))]),e("p",[e("strong",[t._v("Number:")]),t._v(" "+t._s(t.rowData.number))]),e("p",[e("strong",[t._v("Start Time:")]),t._v(" "+t._s(t.rowData.startTime))]),e("p",[e("strong",[t._v("Duration:")]),t._v(" "+t._s(t.rowData.duration))]),e("p",[e("strong",[t._v("End Time:")]),t._v(" "+t._s(t.rowData.endTime))]),e("p",[e("strong",[t._v("Price:")]),t._v(" "+t._s(t.rowData.price))]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/")}}},[t._v("กลับ")])],1)},R=[],S={props:{rowData:{type:Object,required:!0}}},k=S,O=(0,p.A)(k,D,R,!1,null,"b0c6ac9e",null),W=O.exports;i["default"].use(f["default"]);new f["default"]({mode:"history",routes:[{path:"/",name:"Home",component:A},{path:"/details",name:"Details",component:W,props:!0}]});i["default"].use(o()),new i["default"]({render:function(t){return t(g)}}).$mount("#app")}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i](o,o.exports,r),o.loaded=!0,o.exports}r.m=t,function(){r.amdO={}}(),function(){var t=[];r.O=function(e,i,n,o){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],o=t[u][2];for(var a=!0,s=0;s<i.length;s++)(!1&o||l>=o)&&Object.keys(r.O).every((function(t){return r.O[t](i[s])}))?i.splice(s--,1):(a=!1,o<l&&(l=o));if(a){t.splice(u--,1);var d=n();void 0!==d&&(e=d)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,l=i[0],a=i[1],s=i[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(s)var u=s(r)}for(e&&e(i);d<l.length;d++)o=l[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},i=self["webpackChunkweb_bot"]=self["webpackChunkweb_bot"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[504],(function(){return r(2286)}));i=r.O(i)})();
//# sourceMappingURL=app.f65dea07.js.map