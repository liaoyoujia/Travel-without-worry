(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a6a":function(t,i,a){"use strict";var e=a("4fb1"),n=a.n(e);n.a},3846:function(t,i,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"386d":function(t,i,a){"use strict";var e=a("cb7c"),n=a("83a1"),s=a("5f1b");a("214f")("search",1,function(t,i,a,o){return[function(a){var e=t(this),n=void 0==a?void 0:a[i];return void 0!==n?n.call(a,e):new RegExp(a)[i](String(e))},function(t){var i=o(a,t,this);if(i.done)return i.value;var c=e(t),r=String(this),l=c.lastIndex;n(l,0)||(c.lastIndex=0);var u=s(c,r);return n(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]})},"3aff":function(t,i,a){},"3ee4":function(t,i,a){"use strict";var e=a("54e3"),n=a.n(e);n.a},"4fb1":function(t,i,a){},52945:function(t,i,a){},"54e3":function(t,i,a){},"58de":function(t,i,a){},"6b54":function(t,i,a){"use strict";a("3846");var e=a("cb7c"),n=a("0bfb"),s=a("9e1e"),o="toString",c=/./[o],r=function(t){a("2aba")(RegExp.prototype,o,t,!0)};a("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?r(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)}):c.name!=o&&r(function(){return c.call(this)})},"6fcb":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"his-idx"},[a("div",{staticClass:"his-idx-title"},[t._v("出行历史")]),a("div",{staticClass:"his-idx-list"},t._l(8,function(i,e){return a("div",{key:e,staticClass:"his-idx-item",on:{click:function(i){return t.goDetail(e)}}},[t._m(0,!0),t._m(1,!0)])}),0)])},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("p",[t._v("徒步出行")]),a("p",[t._v("行程0公里")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("span",[t._v("2019/08/02")]),a("i",{staticClass:"iconfont iconxiangyou"})])}],s={data:function(){return{}},components:{},methods:{goDetail:function(t){this.$router.push({path:"/history/detail/".concat(t)})}}},o=s,c=(a("f327"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"619b00ca",null);i["default"]=r.exports},7370:function(t,i,a){},"7cb9":function(t,i,a){"use strict";var e=a("7370"),n=a.n(e);n.a},"810e":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"Traffic"},[a("div",{staticClass:"tra-headder"},[a("van-row",[a("van-col",{attrs:{span:"16"}},[a("van-field",{attrs:{clearable:"",label:"起点","label-width":"50",placeholder:"请输入起点"},on:{input:function(i){return t.searchPlace(i,"org")}},model:{value:t.originPlace,callback:function(i){t.originPlace=i},expression:"originPlace"}})],1),a("van-col",{attrs:{span:"8"}},[a("van-field",{attrs:{readonly:"",clickable:"",value:t.value,placeholder:"选择出行方式","input-align":"center"},on:{click:function(i){t.showPicker=!0}}})],1)],1),a("van-row",{attrs:{type:"flex",justify:"start",align:"center"}},[a("van-col",{attrs:{span:"16"}},[a("van-field",{attrs:{label:"终点","label-width":"50",placeholder:"请输入终点",clearable:""},on:{input:function(i){return t.searchPlace(i,"end")}},model:{value:t.endPlace,callback:function(i){t.endPlace=i},expression:"endPlace"}})],1),a("van-col",{staticClass:"search-type",attrs:{span:"8"},nativeOn:{click:function(i){return t.getRoadLine()}}},[t._v("搜索")])],1)],1),a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"v-popup"},[a("i",{staticClass:"iconfont iconxiangshang special",on:{click:t.cancelPopup}}),t.searchData&&t.searchData.length?a("div",{staticClass:"list-data"},t._l(t.searchData,function(i,e){return a("div",{key:e,staticClass:"list-item",on:{click:function(a){return t.choosePlace(i.name,i.type,i.location)}}},[a("p",{staticClass:"adress-name"},[t._v(t._s(i.name))]),a("p",{staticClass:"address-place"},[t._v(t._s("string"==typeof i.address&&i.address||i.district))])])}),0):t._e(),t.searchData&&t.searchData.length?t._e():a("div",{staticClass:"no-data"},[t._v("暂无信息")])]),a("div",{staticClass:"container",attrs:{id:"container"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"v-popup-show1"},[a("div",{staticClass:"v-popup-header"},[a("div",{staticClass:"fit-route"},[t._v("请选择合适路线")]),a("i",{staticClass:"iconfont iconxiangshang special",on:{click:t.cancelShow1Popup}}),a("div",{staticClass:"v-popup-sure",on:{click:t.sureChuxing}},[t._v("确定")])]),a("div",{staticClass:"pane",attrs:{id:"pane"}})])])]),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(i){t.showPicker=i},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(i){t.showPicker=!1},confirm:t.onConfirm}})],1),a("van-popup",{staticClass:"v-pop-chuxing",model:{value:t.chuxingReport,callback:function(i){t.chuxingReport=i},expression:"chuxingReport"}},[a("div",{staticClass:"chuxing"},[a("h5",[t._v("本次出行")]),t._l(t.chuxingList,function(i,e){return t.chuxingList&&t.chuxingList.length?a("div",{key:e,staticClass:"v-pop-chuxing-item"},[a("div",{staticClass:"v-pop-chuxing-item-left"},[t._v(t._s(i.name))]),a("div",{staticClass:"v-pop-chuxing-item-right"},[t._v(t._s(i.txt))])]):t._e()}),a("div",{staticClass:"v-pop-chuxing-item"},[a("div",{staticClass:"v-pop-chuxing-item-left"},[t._v("花费")]),a("div",{staticClass:"v-pop-chuxing-item-right"},[a("van-stepper",{attrs:{min:"0"},model:{value:t.huafei,callback:function(i){t.huafei=i},expression:"huafei"}})],1)]),a("div",{staticClass:"v-pop-chuxing-item"},[a("div",{staticClass:"v-pop-chuxing-item-left"},[t._v("日期")]),a("div",{staticClass:"v-pop-chuxing-item-right"},[t._v(t._s(t.currentTime))])]),a("div",{staticClass:"v-pop-chuxing-item"},[a("div",{staticClass:"v-pop-chuxing-item-left"},[t._v("备注")]),a("div",{staticClass:"v-pop-chuxing-item-right"},[a("van-field",{attrs:{maxlength:"20",placeholder:"输入行程备注,少于20字！"},model:{value:t.beizhu,callback:function(i){t.beizhu=i},expression:"beizhu"}})],1)]),a("div",{staticClass:"chuxing-save",on:{click:t.uploadData}},[t._v("确认保存")])],2)])],1)},n=[],s=(a("ac6a"),a("386d"),{name:"traffic",data:function(){return{loactionMap:null,showPicker:!1,currentTime:"",huafei:0,value:"",beizhu:"",chuxingReport:!1,originPlace:"",chuxingList:[],originPlD:[],endPlace:"",endPlD:[],driving:null,show:!1,show1:!1,columns:["公交/地铁","出租车","单车/电车","步行"],toolType:{"公交/地铁":"Transfer","出租车":"Driving","单车/电车":"Riding","步行":"Walking"},searchData:[]}},methods:{initMap:function(){this.loactionMap=new AMap.Map("container",{center:[116.397428,39.90923],resizeEnable:!0,zoom:13})},dingWeiPlugin:function(){var t=this;t.loactionMap.plugin(["AMap.Geolocation"],function(){var i=new window.AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",zoomToAccuracy:!0});t.loactionMap.addControl(i),i.getCurrentPosition(),window.AMap.event.addListener(i,"complete",function(i){t.loactionMap.setCenter(i.position)}),window.AMap.event.addListener(i,"error",function(t){console.log(t)})})},searchPlace:function(t,i){this.show=!0;var a=this;a.loactionMap.plugin("AMap.Autocomplete",function(){var e={city:"全国"},n=new window.AMap.Autocomplete(e);n.search(t,function(t,e){if(console.log(t,e,3123),"complete"!==t)return a.searchData=[],console.log(1),!1;if("OK"!==e.info)return a.searchData=[],console.log(2),!1;var n=e.tips;"org"===i?n.forEach(function(t){t.type="org"}):n.forEach(function(t){t.type="end"}),a.searchData=n})})},cancelPopup:function(){this.show=!1},cancelShow1Popup:function(){this.show1=!1},choosePlace:function(t,i,a){this.show=!1,"org"===i?(this.originPlace=t,this.originPlD=a&&[a.lng,a.lat]):(this.endPlace=t,this.endPlD=a&&[a.lng,a.lat])},onConfirm:function(t){this.value=t,this.showPicker=!1},getRoadLine:function(){var t=this;if(t.driving&&t.driving.clear(),""===t.originPlace||""===t.endPlace||0===t.originPlD.length||0===t.endPlD.length||""===t.value)return this.$toast("请将数据填写完全"),!1;t.show1=!0,this.chuxingList=[{name:"交通公交",txt:this.value},{name:"出发地",txt:this.originPlace},{name:"目的地",txt:this.endPlace}],t.loactionMap.plugin("AMap.".concat(t.toolType[t.value]),function(){t.driving=new window.AMap[t.toolType[t.value]]({map:t.loactionMap,panel:"pane",autoFitView:!0});var i=t.originPlD,a=t.endPlD;t.driving.search(i,a)})},sureChuxing:function(){this.chuxingReport=!0,this.currentTime=this.$moment().format("YYYY-MM-DD HH:mm:ss"),this.show1=!1},uploadData:function(){var t=this,i=this,a={userId:2,type:1};a.trafficType=this.value,a.date=this.currentTime,a.price=this.huafei,a.startPlace=this.originPlace,a.endPlace=this.endPlace,a.startCode=this.originPlD,a.endCode=this.endPlD,a.mask=this.beizhu,this.$axios.getRouteNew(a).then(function(a){0===a.errno?t.$toast({type:"success",message:"数据上传成功！",forbidClick:!0,onOpened:function(){i.chuxingReport=!1,i.originPlD=[],i.endPlace="",i.originPlace="",i.endPlD=[]}}):t.$toast({type:"fail",message:"数据上传失败！",forbidClick:!0,onOpened:function(){i.chuxingReport=!1,i.originPlD=[],i.endPlace="",i.originPlace="",i.endPlD=[]}}),console.log(a)})}},mounted:function(){this.initMap(),this.dingWeiPlugin()}}),o=s,c=(a("b1e2"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"938d107c",null);i["default"]=r.exports},"83a1":function(t,i){t.exports=Object.is||function(t,i){return t===i?0!==t||1/t===1/i:t!=t&&i!=i}},"8e24":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-infor"},[e("div",{staticClass:"bg"}),e("div",{staticClass:"my-user"},[e("img",{attrs:{src:a("9955"),alt:""}}),e("h4",[t._v(t._s(t.personData.name))]),e("p",[t._v("账号:"+t._s(t.personData.phone))])]),e("div",{staticClass:"my-inf"},[e("div",{staticClass:"my-inf-title"},[t._v("个人信息")]),e("div",{staticClass:"my-inf-list"},[e("div",{staticClass:"my-inf-item"},[t._v("\n        性别："+t._s(0===t.personData.sex?"女":"男")+"\n      ")]),e("div",{staticClass:"my-inf-item"},[t._v("年龄："+t._s(t.personData.age))]),e("div",{staticClass:"my-inf-item"},[t._v("家乡："+t._s(t.personData.address))]),e("div",{staticClass:"my-inf-item"},[t._v("情感状态："+t._s(t.personData.marrage))]),e("div",{staticClass:"my-inf-item"},[t._v("身份："+t._s(t.personData.identify))])]),e("div",{staticClass:"my-inf-title"},[t._v("出行里程")])]),e("div",{staticClass:"my-box",attrs:{id:"echarts"}})])},n=[],s={data:function(){return{personData:{},echartInstace:null}},props:{person:{type:Object}},watch:{person:{handler:function(t,i){this.personData=t},deep:!0,immediate:!0}},mounted:function(){this.initEachrts()},methods:{initEachrts:function(){this.echartInstace=this.$echarts.init(document.getElementById("echarts"));var t={color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#74AEE5"},{offset:1,color:"#2378F7"}],globalCoord:!1},grid:{top:10,right:20},tooltip:{},xAxis:{data:["徒步","跑步","骑行","自驾","公交","出租"]},yAxis:{},series:[{type:"bar",data:[5,20,36,10,10,20]}]};this.echartInstace.setOption(t)}}},o=s,c=(a("b280"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"cf3bbc9a",null);i["default"]=r.exports},"8e37":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"History"},[a("router-view")],1)},n=[],s=(a("0189"),{name:"history",data:function(){return{}},methods:{}}),o=s,c=a("2877"),r=Object(c["a"])(o,e,n,!1,null,"17fe5633",null);i["default"]=r.exports},9955:function(t,i,a){t.exports=a.p+"img/head.81e5441d.jpeg"},a77e:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page"},[t._v("\n  历史详情页\n")])},n=[],s={data:function(){return{}},components:{}},o=s,c=a("2877"),r=Object(c["a"])(o,e,n,!1,null,"4786f9b5",null);i["default"]=r.exports},ac6a:function(t,i,a){for(var e=a("cadf"),n=a("0d58"),s=a("2aba"),o=a("7726"),c=a("32e9"),r=a("84f2"),l=a("2b4c"),u=l("iterator"),p=l("toStringTag"),d=r.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=n(h),f=0;f<v.length;f++){var m,g=v[f],x=h[g],C=o[g],b=C&&C.prototype;if(b&&(b[u]||c(b,u,d),b[p]||c(b,p,g),r[g]=d,x))for(m in e)b[m]||s(b,m,e[m],!0)}},b1e2:function(t,i,a){"use strict";var e=a("52945"),n=a.n(e);n.a},b280:function(t,i,a){"use strict";var e=a("3aff"),n=a.n(e);n.a},b305:function(t,i,a){},b3d7:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home"},[a("router-view")],1)},n=[],s={name:"home"},o=s,c=(a("7cb9"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,null,null);i["default"]=r.exports},c5da:function(t,i,a){"use strict";var e=a("ce4b"),n=a.n(e);n.a},c7d6:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"my"},[a("router-view",{attrs:{person:t.person}})],1)},n=[],s={data:function(){return{person:{}}},mounted:function(){this.getPersonData()},methods:{getPersonData:function(){var t=this;this.$axios.getPerson({name:"廖有佳"}).then(function(i){0===i.errno?t.person=i.data[0]:t.person={address:"安徽宣城",age:23,id:1,identify:"开发者",marrage:"单身",name:"廖有佳",phone:"18792283895",sex:1}})}}},o=s,c=(a("1a6a"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"0c0c314a",null);i["default"]=r.exports},cdac:function(t,i,a){},ce4b:function(t,i,a){},d7a9:function(t,i,a){"use strict";var e=a("58de"),n=a.n(e);n.a},e94d:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-index"},[e("div",{staticClass:"my-bg"}),e("div",{staticClass:"my-user"},[e("div",{staticClass:"my-user-top"},[e("img",{attrs:{src:a("9955"),alt:""}}),e("div",[t.personData.name?e("h4",[t._v(t._s(t.personData.name))]):t._e(),t.personData.phone?e("h5",[t._v("手机："+t._s(t.personData.phone))]):t._e()])]),e("div",{staticClass:"my-user-bottom"},t._l(t.userData,function(i,a){return e("div",{key:a},[e("span",[t._v(t._s(i.num))]),e("span",[t._v(t._s(i.txt))])])}),0)]),e("div",{staticClass:"my-infor"},[e("div",{staticClass:"my-infor-title"},[t._v("我的信息")]),e("div",{staticClass:"my-infor-tool"},t._l(t.inforData,function(i,a){return e("div",{key:a,on:{click:function(a){return t.goDetail(i.id)}}},[e("i",{staticClass:"iconfont",class:i["icon"]}),e("span",[t._v(t._s(i.txt))])])}),0)]),e("div",{staticClass:"my-more"},[e("div",{staticClass:"my-more-title"},[t._v("更多功能")]),e("div",{staticClass:"my-more-tool"},t._l(t.toolData,function(i,a){return e("div",{key:a},[e("i",{staticClass:"iconfont",class:i["icon"]}),e("span",[t._v(t._s(i.txt))])])}),0)])])},n=[],s=(a("0189"),{name:"myIndex",props:{person:{type:Object}},watch:{person:{handler:function(t,i){this.personData=t},deep:!0,immediate:!0}},data:function(){return{personData:{},userData:[{txt:"好友",num:10},{txt:"关注",num:11},{txt:"粉丝",num:101},{txt:"圈子",num:2}],inforData:[{id:"xinxi",icon:"iconmessage",txt:"信息总览"},{id:"chuxing",icon:"iconwapchuxing",txt:"出行趋势"},{id:"fenxin",icon:"iconfenxi",txt:"数据分析"},{id:"chengjiu",icon:"iconchenggong",txt:"成就殿堂"}],toolData:[{icon:"iconjihua",txt:"出行计划"},{icon:"icon31haoyou",txt:"好友排名"},{icon:"iconicon--",txt:"路况分析"},{icon:"iconsannongbuzhu",txt:"交通补助"},{icon:"icontizhong",txt:"体重管理"},{icon:"iconzhoubao",txt:"周报"},{icon:"iconshishifengxianqingdan",txt:"风险管控"},{icon:"iconketangjiankong",txt:"运动课堂"},{icon:"iconai",txt:"智能硬件"},{icon:"iconhuiyuan-",txt:"心悦会员"}]}},mounted:function(){},methods:{goDetail:function(t){switch(t){case"xinxi":this.$router.push({name:"myInfor"});break;case"chuxing":break;case"fenxin":break;case"chengjiu":}}}}),o=s,c=(a("f547"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"f5b61380",null);i["default"]=r.exports},f327:function(t,i,a){"use strict";var e=a("cdac"),n=a.n(e);n.a},f547:function(t,i,a){"use strict";var e=a("b305"),n=a.n(e);n.a},f5e5:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home-index"},[a("div",{staticClass:"home-bg"}),a("van-tabs",{staticClass:"v-tab",attrs:{color:"#3390FF",background:"transparent"},model:{value:t.tabIndex,callback:function(i){t.tabIndex=i},expression:"tabIndex"}},[a("van-tab",{attrs:{title:"行走"}},[a("Tab")],1),a("van-tab",{attrs:{title:"跑步"}},[a("Tab",{attrs:{title:"跑步",num:"0.0"}})],1),a("van-tab",{attrs:{title:"骑行"}},[a("Tab",{attrs:{title:"骑行",num:"0.0"}})],1),a("van-tab",{attrs:{title:"自驾"}},[a("Tab",{attrs:{title:"自驾",num:"0.0"}})],1)],1)],1)},n=[],s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"tab1"},[a("div",{staticClass:"circle"},[a("div",{staticClass:"cirlce-cont"},[a("h4",[t._v("累计"+t._s(t.title))]),a("h2",[t._v(t._s(t.num))]),a("a",{attrs:{href:"javascript:;"}},[t._v("本月"+t._s(t.title)+t._s(t.num)+"公里>>")])])]),a("div",{staticClass:"start-step",on:{click:t.goDetail}},[t._v("开始"+t._s(t.title))])])},o=[],c={data:function(){return{}},props:{title:{type:String,default:"行走"},num:{type:String,default:"0.0"}},methods:{goDetail:function(){this.$router.push({name:"homeDetail"})}}},r=c,l=(a("3ee4"),a("2877")),u=Object(l["a"])(r,s,o,!1,null,null,null),p=u.exports,d={name:"homeIndex",data:function(){return{}},computed:{tabIndex:{get:function(){return this.$store.state.home.tabIndexs},set:function(t){this.$store.commit("setTabIndex",t)}}},components:{Tab:p}},h=d,v=(a("d7a9"),Object(l["a"])(h,e,n,!1,null,null,null));i["default"]=v.exports},f72a:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home-detail"},[a("van-notice-bar",{staticClass:"v-notice",attrs:{text:"学习之用学习之用学习之用学习之用学习之用学习之用学习之用学习之用学习之用","left-icon":"volume-o",mode:"closeable"}}),a("div",{attrs:{id:"container"}}),a("div",{staticClass:"list"},[a("div",{staticClass:"item"},[a("i",{staticClass:"iconfont icondingwei"}),a("span",[t._v(t._s(t.place))])]),a("div",{staticClass:"item",on:{click:t.toggleMap}},[a("i",{staticClass:"iconfont iconditu"}),a("span",[t._v("地图")])]),t._m(0)]),a("div",{staticClass:"dingwei",attrs:{id:"dingwei"},on:{click:t.goDing}}),a("div",{staticClass:"start-end",on:{click:t.changeStatus}},[t._v(t._s(t.walkStatus))]),a("van-popup",{attrs:{position:"top"},model:{value:t.showMap,callback:function(i){t.showMap=i},expression:"showMap"}},[a("div",{staticClass:"v-pop-map"},[a("div",{staticClass:"v-pop-map-header"},[t._v("地图颜色模式")]),a("van-radio-group",{staticClass:"pop-radio-list",model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}},t._l(t.radioChoose,function(i,e){return a("van-radio",{key:e,staticClass:"pop-radio",attrs:{name:i.color,"icon-size":"6","checked-color":"#07c160"}},[t._v(t._s(i.txt))])}),1)],1)]),a("van-popup",{class:t.pupOverlay?"v-pop-running":"v-pop-runingx",attrs:{position:"top","overlay-class":"v-pop-runCount",overlay:t.pupOverlay},model:{value:t.runCount,callback:function(i){t.runCount=i},expression:"runCount"}},[a("div",{staticClass:"v-pop-run"},[a("span",{staticClass:"v-pop-num"}),t._v(t._s(t.runData.kilo)),a("span",{staticClass:"v-pop-kio"},[t._v("公里")])]),a("div",{staticClass:"v-pop-list"},[a("div",{staticClass:"v-pop-item"},[a("div",{staticClass:"v-pop-dao"},[t._v(t._s(t.time["trueTime"]))]),a("div",{staticClass:"v-pop-time"},[t._v("总计时间")])]),a("div",{staticClass:"v-pop-item"},[a("div",{staticClass:"v-pop-dao"},[t._v(t._s(t.runData.kmh))]),a("div",{staticClass:"v-pop-time"},[t._v("平均配速(km/h)")])]),a("div",{staticClass:"v-pop-item"},[a("div",{staticClass:"v-pop-dao"},[t._v(t._s(t.runData.kem))]),a("div",{staticClass:"v-pop-time"},[t._v("消耗能量(k)")])])]),a("div",{staticClass:"v-pop-remark"},[a("van-field",{staticClass:"v-pop-filder",attrs:{maxlength:"40",clearable:"",label:"备注","label-width":"50",placeholder:"请输入行程备注,字数不得超过40字！"},model:{value:t.remarkValue,callback:function(i){t.remarkValue=i},expression:"remarkValue"}})],1)])],1)},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("i",{staticClass:"iconfont iconly_mudidi"}),a("span",[t._v("定位")])])}],s=(a("ac6a"),a("6b54"),{data:function(){return{loactionMap:null,showMap:!1,remarkValue:"",type:["行走","跑步","骑行","自驾"],radioChoice:[{}],distance:null,runData:{kilo:"0.00",kmh:"0.00",kem:"0.0"},walkStatus:"开始",pupOverlay:!0,watchID:null,time:{timeMin:0,timeSec:0,timer:null,trueTime:"00:00"},place:"未知位置",radio:"normal",tiMin:0,tiSec:0,runCount:!1,radioChoose:[{txt:"幻影黑",color:"dark"},{txt:"标准",color:"normal"},{txt:"月光银",color:"light"},{txt:"远山黛",color:"whitesmoke"},{txt:"雅士灰",color:"grey"},{txt:"马卡龙",color:"macaron"},{txt:"靛青蓝",color:"blue"},{txt:"极夜蓝",color:"darkblue"},{txt:"草色青",color:"fresh"},{txt:"涂鸦",color:"graffiti"},{txt:"酱籽",color:"wine"}],geolocationData:[[126.567402,43.923187],[126.567402,43.923129],[126.56744,43.923098],[126.56759,43.923024],[126.567794,43.923024],[126.567928,43.922912],[126.568169,43.922819],[126.568486,43.922723],[126.568598,43.922881],[126.568727,43.923074],[126.56884,43.92319],[126.569274,43.923055],[126.569564,43.92348],[126.569859,43.923944],[126.569172,43.924199]]}},components:{},computed:{trafficType:function(){return this.type[this.$store.state.home.tabIndexs]}},watch:{radio:function(t){this.changeTheme(t)}},methods:{initMap:function(){this.loactionMap=new AMap.Map("container",{center:[116.397428,39.90923],resizeEnable:!0,zoom:13})},toggleMap:function(){this.showMap=!0},mapPath:function(){var t=this,i=this.geolocationData.slice(),a=new window.AMap.Marker({map:t.loactionMap,position:i[0],icon:"https://webapi.amap.com/images/car.png",offset:new window.AMap.Pixel(-26,-13),autoRotation:!0,angle:-90}),e=(new window.AMap.Polyline({map:t.loactionMap,path:i,showDir:!0,strokeColor:"#28F",strokeWeight:6}),new window.AMap.Polyline({map:t.loactionMap,strokeColor:"red",strokeWeight:6}));a.on("moving",function(t){e.setPath(t.passedPath)}),t.loactionMap.setFitView(),a.moveAlong(i,200)},goDing:function(){this.$toast.loading({duration:0,forbidClick:!0,loadingType:"circle",message:"定位中..."})},watchMap:function(){console.log("开始了");var t=this;this.watchID=navigator.geolocation.watchPosition(function(i){var a=[i.coords.longitude,i.coords.latitude];console.log("实时定位中---");var e=t.geolocationData.length>0?t.geolocationData[t.geolocationData.length-1].toString():"",n=a.toString();e===n?console.log("定位距离过近"):window.AMap.convertFrom(a,"gps",function(i,a){if("ok"===a.info){var e=[a.locations[0].Q,a.locations[0].P];console.log(e),t.geolocationData.push(e),t.mapLoactionDistance(t.geolocationData)}else console.log("轨迹路径经纬度转换失败！！")})},function(){t.$toast.fail("实时定位出错，请尝试呢刷新")})},mapLoactionDistance:function(t){var i=[];t.forEach(function(t){var a=new window.AMap.LngLat(t[0],t[1]);i.push(a)}),this.runData.kilo=(window.AMap.GeometryUtil.distanceOfLine(i)/1e3).toFixed(2),this.distance=(window.AMap.GeometryUtil.distanceOfLine(i)/1e3).toFixed(2)},dingWeiPlugin:function(){var t=this,i=document.getElementById("dingwei");this.$toast.loading({duration:0,forbidClick:!0,loadingType:"circle",message:"加载中..."}),t.loactionMap.plugin(["AMap.Geolocation","AMap.ControlBar"],function(){var a=new window.AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonDom:i});t.loactionMap.addControl(a),a.getCurrentPosition(),window.AMap.event.addListener(a,"complete",function(i){(i.addressComponent.district||i.addressComponent.city||i.addressComponent.street)&&(t.place=i.addressComponent.district||i.addressComponent.city||i.addressComponent.street),t.$toast.clear(),t.loactionMap.setCenter(i.position)}),window.AMap.event.addListener(a,"error",function(i){t.$toast.clear(),console.log(i)}),t.loactionMap.addControl(new window.AMap.ControlBar)})},changeTheme:function(t){this.loactionMap?this.loactionMap.setMapStyle("amap://styles/".concat(t)):this.$toast.fail("发生未知错误！")},changeStatus:function(){return"开始"===this.walkStatus?(this.walkStatus="结束",this.runCount=!0,this.startinterv(),this.watchMap(),!1):"结束"===this.walkStatus?(this.clearInterv(this),this.locationOnDelete(),this.pupOverlay=!1,this.uploadData(),this.mapPath(),this.walkStatus="退出",!1):"退出"===this.walkStatus?(this.$router.push({name:"homeIndex",params:{activing:1}}),!1):void 0},uploadData:function(){var t={userId:1,type:0,trafficType:this.trafficType,date:"2018-09-13",mask:this.remarkValue,time:this.time["trueTime"],calorie:this.runData.kem,speed:this.runData.kmh,line:this.geolocationData};this.$axios.getRouteMap(t).then(function(t){0===t.errno&&console.log(t,1231231)})},locationOnDelete:function(){var t=this;navigator.geolocation.clearWatch(t.watchID),console.log("停止实时定位")},startinterv:function(){this.clearInterv(),this.time["timer"]=setInterval(this.Time,1e3,this)},clearInterv:function(){this.time["timer"]&&clearInterval(this.time["timer"])},Time:function(t){var i=t.time["timeMin"],a=t.time["timeSec"];i<10&&(i="0"+i),a<10&&(a="0"+a),t.time["trueTime"]=i+":"+a,t.time["timeSec"]++,t.time["timeSec"]>59&&(t.time["timeSec"]=0,t.time["timeMin"]++)}},mounted:function(){console.log(this.trafficType),this.initMap(),this.dingWeiPlugin()}}),o=s,c=(a("c5da"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,null,null);i["default"]=r.exports}}]);
//# sourceMappingURL=about.5415ce11.js.map