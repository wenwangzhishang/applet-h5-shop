(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bdaf64a"],{"133c":function(t,i,s){"use strict";var e=s("1803"),a=s.n(e);a.a},1803:function(t,i,s){},"47d8":function(t,i,s){"use strict";var e=s("6f68"),a=s.n(e);a.a},"6f68":function(t,i,s){},d9a1:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"slide"},[s("van-swipe",{staticClass:"swiper",on:{change:t.toggleswiper}},t._l(t.imgsurl,function(i,e){return s("van-swipe-item",{key:e,staticClass:"swiper-item"},[s("a",{staticClass:"slide-url",on:{click:function(i){t.showslide(e)}}},[s("img",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:i}})])])}),1),s("p",{staticClass:"padding"},[s("span",{staticClass:"currentslide"},[t._v(t._s(t.currentnum))]),t._v("/"),s("span",{staticClass:"totalslide"},[t._v(t._s(t.imgsurl.length))])])],1)},a=[],o=s("fade"),n={data:function(){return{currentnum:1}},props:{imgsurl:Array},methods:{toggleswiper:function(t){this.currentnum=t+1},showslide:function(t){Object(o["b"])({images:this.imgsurl,startPosition:t})}}},r=n,c=(s("47d8"),s("048f")),d=Object(c["a"])(r,e,a,!1,null,null,null);d.options.__file="activeSlide.vue";i["a"]=d.exports},e984:function(t,i,s){t.exports=s.p+"img/share_tips.c0050942.png"},f27e:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"haggle_detail active_detail"},[e("navbar",{attrs:{text:t.eventinfo.title}}),e("scroller",[e("div",{staticClass:"active_img"},[e("activeSlide",{attrs:{imgsurl:t.imgsurl}})],1),t.cd.endtime>t.cd.nowtime&&t.cd.nowtime>t.cd.starttime?e("div",{staticClass:"active_time"},[t._v("剩余时间:"+t._s(t.cd.day)+"天"+t._s(t.cd.hour)+"小时"+t._s(t.cd.min)+"分钟"+t._s(t.cd.sec)+"秒")]):t.cd.nowtime>t.cd.endtime?e("div",{staticClass:"active_time active_timeout"},[t._v("活动已结束")]):e("div",{staticClass:"active_time active_not_begin"},[t._v("活动未开始")]),e("div",{staticClass:"flex good_detail"},[e("p",{staticClass:"red active_price"},[e("span",{staticClass:"price-icon"},[t._v("¥"+t._s(t.saleprice))])]),e("p",{staticClass:"cost_price"},[t.saleprice==t.eventinfo.min_price?e("small",{staticClass:"lowest_price"},[t._v("已砍到最低价，请立即出手，手慢无")]):e("small",{staticClass:"tag"},[t._v("已砍掉¥"+t._s(t.decprice))]),e("br"),t.saleprice!=t.eventinfo.market_price?e("del",{staticClass:"market_price"},[e("span",{staticClass:"prize-icon"},[t._v("¥")]),t._v("原价"+t._s(t.eventinfo.market_price))]):t._e()]),e("p",{staticClass:"good_name"},[t._v(t._s(t.goods.title))]),e("router-link",{staticClass:"red",attrs:{to:"/haggle/instruction/"+t.eventinfo.id}},[t._v("活动说明"),e("i",{staticClass:"iconfont icon-warning1 f12 f-ml-base"})])],1),e("div",{staticClass:"haggle_top"},[e("h3",{staticClass:"top_title"},[t._v("砍价排行榜 "),t.count>=3?e("router-link",{staticClass:"more_haggle_top",attrs:{to:"/haggle/top/"+t.order.id+"/"+t.order.haggle_id}},[t._v("查看更多")]):t._e(),e("i",{staticClass:"iconfont icon-more"})],1),0==t.lists.length?e("small",{staticClass:"top_text"},[t._v("木有排行榜，请先找人帮砍砍")]):e("div",{staticClass:"top_imformation"},t._l(t.lists,function(i,s){return e("div",{key:s,staticClass:"inline"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:i.headimgurl}})]),e("div",{staticClass:"haggle_content"},[e("span",[t._v(t._s(i.content))])])])}),0)]),""!=t.goods.goods_param?e("div",{staticClass:"switch-card"},[e("div",{staticClass:"switch-card__hd",on:{click:t.toggleArrow}},[e("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),e("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir})]),e("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goods.goods_param,function(i,s){return e("div",{key:s,staticClass:"switch-card__item"},[e("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(i.title))]),e("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(i.param_value))])])}),0)]):t._e(),e("div",{staticClass:"detail_estimate"},[e("van-tabs",{attrs:{swipeable:""}},[e("van-tab",{staticClass:"van_tab detail",attrs:{title:"商品详情"}},[e("div",{staticClass:"detail"},[e("div",{domProps:{innerHTML:t._s(t.content)}})])]),e("van-tab",{staticClass:"van_tab estimate",attrs:{title:"评价"}},[e("div",{staticClass:"m-flex"},[e("div",{staticClass:"m-flex-img"},[e("img",{staticClass:"null_img",attrs:{src:s("fa95")}})]),e("small",[t._v("暂无相关评价")])])])],1)],1)]),t.order_id>0&&t.order.order_id>0?e("div",{staticClass:"bottom-btn"},[e("a",{staticClass:"view_my_order",on:{click:t.viewmyorder}},[t._v("查看我的订单")])]):t.order_id>0&&t.order.order_id<=0?e("div",{staticClass:"bottom-btn"},[e("a",{staticClass:"collage_now",on:{click:t.collagenow}},[t._v("立即出手")]),e("button",{staticClass:"help_collage",on:{click:t.find_help}},[t._v("找人帮砍")])]):e("div",{staticClass:"bottom-btn"},[e("a",{staticClass:"join_now",on:{click:t.join_now}},[t._v("立即参与")])]),e("van-toast",{attrs:{id:"van-toast"}}),e("transition",{attrs:{name:"fade"}},[t.show1?e("div",{staticClass:"dialog",on:{click:function(i){t.show1=!1}}},[e("div",{staticClass:"share_tips"},[e("img",{attrs:{src:s("e984")}})])]):t._e()])],1)},a=[],o=(s("8383"),s("d9a1")),n=s("9d8d"),r=s("fade"),c=s("ed08"),d={data:function(){return{cd:{day:0,hour:0,min:0,sec:0,starttime:0,endtime:0,nowtime:0},userdata:[],decprice:0,eventinfo:{},imgsurl:[],lists:[],content:"",goods:[],mid:0,order:{},count:"",saleprice:0,arrowDir:"bottom",show:!1,show1:!1,order_id:0}},components:{activeSlide:o["a"],navbar:n["a"]},methods:{countdown:function(){var t=this,i=this.cd.endtime;this.cd.nowtime=Date.parse(new Date)/1e3;var s=i-Date.parse(new Date)/1e3,e=parseInt(s/60/60/24),a=parseInt(s/60/60%24),o=parseInt(s/60%60),n=parseInt(s%60);this.cd.day=e,this.cd.hour=a,this.cd.min=o,this.cd.sec=n,setTimeout(function(){t.countdown()},1e3)},collagenow:function(){var t=this;this.show=!0;this.goods.goods_id;if(0==this.eventinfo.stock_active)return Object(r["d"])("该活动商品已经被抢光了"),!1;Object(c["h"])(c["g"]+"haggle/api/bug_now",{haggle_id:this.eventinfo.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(i){var s=/goods_id\/(\d+)\/event_type\/(\d+)\/event_id\/(\d+)\/pbid\/(\d+)/.exec(i.url),e=s[1],a=s[2],o=s[3],n=s[4],r=t.saleprice,c={goods_id:e,event_type:a,event_id:o,pbid:n,activePrice:r,PHPSESSID:window.localStorage.getItem("PHPSESSID")};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(c)}),t.$router.push("/confirm_order/"+t.goods.goods_id)})},join_now:function(){var t=this;console.log(this.eventinfo.id),Object(c["h"])(c["g"]+"haggle/Api/join_now",{haggle_id:this.eventinfo.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(i){0==i.code?Object(r["d"])(i.msg):(t.order_id=i.order_id,t.order.order_id=0,t.show=!0)})},find_help:function(){this.show=!0,this.show1=!this.show1},viewmyorder:function(){this.$router.push("/order_detail/"+this.order.id)},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"}},created:function(){var t=this,i=this.$route.params.haggleid;this.userdata=JSON.parse(window.localStorage.getItem("userInfo")),Object(c["h"])(c["g"]+"/haggle/Api/index",{haggle_id:i,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(i){if(0==i.code&&""!=i.msg)Object(r["d"])(i.msg);else{t.decprice=i.dec_price,t.eventinfo=i.event_info,t.content=i.goods.content.replace(/\<img/gi,'<img style="width:100% !important;height:auto" '),t.goods=i.goods,t.imgsurl=i.goods.imgs_url,t.lists=i.lists,t.mid=i.mid,t.order=i.order,t.count=i.count,t.saleprice=i.sale_price,t.cd.endtime=i.event_info.end_time,t.cd.starttime=i.event_info.start_time,t.order_id=i.order_id;var s=i.share_url?i.share_url:"",e=i.nickname?i.nickname:t.userdata.nickName,a={title:t.eventinfo.title,desc:e+"请您帮砍价",link:s,imgUrl:t.eventinfo.share_cover,type:"link"};Object(c["f"])(a)}}),this.countdown()}},l=d,_=(s("133c"),s("048f")),v=Object(_["a"])(l,e,a,!1,null,"3311adab",null);v.options.__file="index.vue";i["default"]=v.exports},fa95:function(t,i,s){t.exports=s.p+"img/null.17d21c9e.png"}}]);