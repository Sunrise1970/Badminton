webpackJsonp([7,6],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(81),s=n(i),u=o(248),r=n(u),a=o(261),l=n(a),c=o(77),d=n(c),T=o(262),f=o(160);s["default"].use(l["default"]),s["default"].extend({components:{App:r["default"]}});var p=new l["default"]({hashbang:!0,saveScrollPosition:!0});(0,f.setRouter)(p),(0,T.sync)(d["default"],p),p.start(r["default"],"app")},76:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.hideTip=e.showTip=e.hideLoading=e.showLoading=void 0;var i=o(156),s=n(i);e.showLoading=function(t){var e=t.dispatch;t.state;e(s.SET_LOADING,!0)},e.hideLoading=function(t){var e=t.dispatch;t.state;e(s.SET_LOADING,!1)},e.showTip=function(t,e){var o=t.dispatch;t.state;o(s.SET_TIP,e,!0)},e.hideTip=function(t){var e=t.dispatch;t.state;e(s.SET_TIP,"",!1)}},77:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(81),s=n(i),u=o(263),r=n(u),a=o(162),l=n(a),c=o(164),d=n(c),T=o(165),f=n(T),p=o(163),_=n(p);s["default"].use(r["default"]);var E=!1;e["default"]=new r["default"].Store({modules:{activity:l["default"],competiton:d["default"],userInfo:f["default"],common:_["default"]},strict:E,middlewares:E?[]:[]})},83:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_COMPETITON_LIST="GET_COMPETITON_LIST",e.SET_ATTEND_FAILURE="SET_ATTEND_FAILURE",e.GET_COMPETITON_LIST_FAILURE="GET_COMPETITON_LIST_FAILURE",e.GET_COMPETITON_INTRO="GET_COMPETITON_INTRO",e.GET_COMPETITON_INTRO_FAILURE="GET_COMPETITON_INTRO_FAILURE",e.GET_COMPETITON_MEMBER="GET_COMPETITON_MEMBER",e.GET_COMPETITON_MEMBER_FAILURE="GET_COMPETITON_MEMBER_FAILURE",e.GET_COMPETITON_AGAINST="GET_COMPETITON_AGAINST",e.GET_COMPETITON_AGAINST_FAILURE="GET_COMPETITON_AGAINST_FAILURE",e.GET_COMPETITON_USER="GET_COMPETITON_USER",e.GET_COMPETITON_USER_FAILURE="GET_COMPETITON_USER_FAILURE",e.GET_COMPETITON_TYPE="GET_COMPETITON_TYPE",e.GET_AGAINST_DETAIL="GET_AGAINST_DETAIL",e.GET_LOTTERY_ID="GET_LOTTERY_ID"},155:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.showTip=e.showLoading=void 0;var i=o(77),s=n(i),u=s["default"].state.common;e.showLoading=function(){return u.showLoading},e.showTip=function(){return u.showTip}},156:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_LOADING="SET_LOADING",e.SET_TIP="SET_TIP"},157:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_USERINFO="SET_USERINFO"},159:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(250),s=n(i),u=o(249),r=n(u),a={Toast:s["default"],Loading:r["default"]};t.exports=a},160:function(t,e,o){"use strict";function n(t){t.map({"/index":{name:"competiton list",title:"比赛列表",component:function(t){return o.e(4,function(e){var o=[e(253)];t.apply(null,o)}.bind(this))}},"/competitonDetail":{name:"competiton detail",title:"比赛详情",component:function(t){return o.e(0,function(e){var o=[e(252)];t.apply(null,o)}.bind(this))}},"/competitonAttend":{name:"competiton attend",title:"比赛报名",component:function(t){return o.e(1,function(e){var o=[e(251)];t.apply(null,o)}.bind(this))}},"/competitonAgainstDetail":{name:"competiton attend",title:"比赛对阵详情",component:function(t){return o.e(3,function(e){var o=[e(257)];t.apply(null,o)}.bind(this))}},"/competitonPrize":{name:"competiton prize",title:"比赛奖品",component:function(t){return o.e(2,function(e){var o=[e(254)];t.apply(null,o)}.bind(this))}},"/competitonRule":{name:"competiton rule",title:"比赛规则",component:function(t){return o.e(5,function(e){var o=[e(255)];t.apply(null,o)}.bind(this))}}}),t.redirect({"/":"/index"})}Object.defineProperty(e,"__esModule",{value:!0}),e.setRouter=n},161:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.getUserInfo=void 0;var i=o(157),s=n(i);e.getUserInfo=function(t){var e=t.dispatch,o=(t.state,{tel:"15622333072"});e(s.SET_USERINFO,o)}},162:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s,u=o(102),r=i(u),a=o(166),l=n(a),c={list:[],tip:""},d=(s={},(0,r["default"])(s,l.GET_ACTIVITY_LIST,function(t,e){console.log("modules-activityList:",e),t.list=e}),(0,r["default"])(s,l.GET_ACTIVITY_LIST_FAILURE,function(t){t.tip="error tip"}),s);e["default"]={state:c,mutations:d}},163:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s,u=o(102),r=i(u),a=o(156),l=n(a),c={showLoading:!1,showTip:{}},d=(s={},(0,r["default"])(s,l.SET_LOADING,function(t,e){t.showLoading=e}),(0,r["default"])(s,l.SET_TIP,function(t,e,o){t.showTip={tipShow:o,tipMsg:e}}),s);e["default"]={state:c,mutations:d}},164:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s,u=o(102),r=i(u),a=o(83),l=n(a),c={list:[],tip:"",intro:"",memberList:{},againstList:[],competitonUserList:{},competitonType:1,againstDetail:{},lotteryId:""},d=(s={},(0,r["default"])(s,l.GET_COMPETITON_LIST,function(t,e){console.log("modules-competitonList:",e),t.list=e}),(0,r["default"])(s,l.GET_COMPETITON_LIST_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.SET_ATTEND_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.GET_COMPETITON_INTRO,function(t,e){console.log("modules-competitonIntro:",e),t.intro=e}),(0,r["default"])(s,l.GET_COMPETITON_INTRO_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.GET_COMPETITON_MEMBER,function(t,e){console.log("modules-competitonMember:",e),t.memberList=e}),(0,r["default"])(s,l.GET_COMPETITON_MEMBER_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.GET_COMPETITON_AGAINST,function(t,e){console.log("modules-competitonAgainst:",e),t.againstList=e}),(0,r["default"])(s,l.GET_COMPETITON_AGAINST_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.GET_COMPETITON_USER,function(t,e){console.log("modules-competitonUser:",e),t.competitonUserList=e}),(0,r["default"])(s,l.GET_COMPETITON_USER_FAILURE,function(t){t.tip="error tip"}),(0,r["default"])(s,l.GET_COMPETITON_TYPE,function(t,e){t.competitonType=e}),(0,r["default"])(s,l.GET_AGAINST_DETAIL,function(t,e){t.againstDetail=e}),(0,r["default"])(s,l.GET_LOTTERY_ID,function(t,e){t.lotteryId=e}),s);e["default"]={state:c,mutations:d}},165:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(102),u=i(s),r=o(157),a=n(r),l={tel:""},c=(0,u["default"])({},a.SET_USERINFO,function(t,e){t.tel=e.tel});e["default"]={state:l,mutations:c}},166:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_ACTIVITY_LIST="GET_ACTIVITY_LIST",e.GET_ACTIVITY_LIST_FAILURE="GET_ACTIVITY_LIST_FAILURE"},167:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(159),s=o(77),u=n(s),r=o(161),a=o(210),l=n(a),c=o(155);e["default"]={vuex:{actions:{getUserInfo:r.getUserInfo},getters:{showLoading:c.showLoading,showTip:c.showTip}},data:function(){return{tipShow:!1,tipMsg:"",loadingState:!1}},store:u["default"],components:{Toast:i.Toast,Loading:i.Loading},computed:{loadingState:function(){return this.showLoading},tipShow:function(){return this.showTip.tipShow},tipMsg:function(){return this.showTip.tipMsg}},ready:function(){l["default"].attach(document.body),this.getUserInfo()}}},168:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:Boolean,text:{type:String,"default":"加载中..."},position:String}}},169:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(76),i=o(155);e["default"]={vuex:{actions:{hideTip:n.hideTip},getters:{showTip:i.showTip}},props:{show:{type:Boolean,"default":!1},time:{type:Number,"default":2e3},type:{type:String,"default":"success"},width:{type:String,"default":"7.6em"},text:String},data:function(){return{}},computed:{toastClass:function(){return{"toast-warn":"warn"===this.type,"toast-cancel":"cancel"===this.type,"toast-success":"success"===this.type,"toast-text":"text"===this.type}}},watch:{show:function(t){var e=this;if(t){clearTimeout(o);var o=setTimeout(function(){e.hideTip(),e.show=e.showTip.tipShow},this.time)}}},ready:function(){},attached:function(){},methods:{},components:{}}},198:function(t,e){},199:function(t,e){},200:function(t,e){},234:function(t,e){t.exports=" <div id=app> <router-view></router-view> <toast :show.sync=tipShow type=text>{{tipMsg}}</toast> <loading :show.sync=loadingState></loading> </div> "},235:function(t,e){t.exports=' <div class=loading-toast v-show=show> <div class=mask-transparent></div> <div class=loading-wrap :style="{position: position}"> <div class=loading> <div class=loading-leaf v-for="i in 12" :class="[\'loading-leaf-\' + i]"></div> </div> <p class=toast-content>{{text}}<slot></slot></p> </div> </div> '},236:function(t,e){t.exports=' <div> <div class=mask-transparent v-show=show></div> <div class="toast fade-transition" :style="{width: width}" :class=toastClass v-show=show> <p class=toast-content v-if=text v-html=text></p> <p class=toast-content v-else><slot></slot></p> </div> </div> '},248:function(t,e,o){var n,i;o(198),n=o(167),i=o(234),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},249:function(t,e,o){var n,i;o(199),n=o(168),i=o(235),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},250:function(t,e,o){var n,i;o(200),n=o(169),i=o(236),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=app.6e516eb2f1f2a3220436.js.map