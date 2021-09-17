/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
;!function(b){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],b):b("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(ac){function H(a){return !a||void 0!==a.allowPageScroll||void 0===a.swipe&&void 0===a.swipeStatus||(a.allowPageScroll=V),void 0!==a.click&&void 0===a.tap&&(a.tap=a.click),a||(a={}),a=ac.extend({},ac.fn.swipe.defaults,a),this.each(function(){var b=ac(this),c=b.data(P);c||(c=new M(this,a),b.data(P,c))})}function M(bS,aw){function bD(ak){if(!(bN()||ac(ak.target).closest(aw.excludedElements,bx).length>0)){var aj=ak.originalEvent?ak.originalEvent:ak;if(!aj.pointerType||"mouse"!=aj.pointerType||0!=aw.fallbackToMouseEvents){var al,ai=aj.touches,am=ai?ai[0]:aj;return b=ab,ai?e=ai.length:aw.preventDefaultEvents!==!1&&ak.preventDefault(),bi=0,bz=null,bV=null,bF=null,bm=0,bW=0,bo=0,z=1,a0=0,q=bn(),j(),bg(0,am),!ai||e===aw.fingers||aw.fingers===Z||bq()?(h=ay(),2==e&&(bg(1,ai[1]),bW=bo=ax(by[0].start,by[1].start)),(aw.swipeStatus||aw.pinchStatus)&&(al=o(aj,b))):al=!1,al===!1?(b=Q,o(aj,b),al):(aw.hold&&(bj=setTimeout(ac.proxy(function(){bx.trigger("hold",[aj.target]),aw.hold&&(al=aw.hold.call(bx,aj,aj.target))},this),aw.longTapThreshold)),bb(!0),null)}}}function bT(am){var aj=am.originalEvent?am.originalEvent:am;if(b!==aa&&b!==Q&&!bd()){var an,ai=aj.touches,ao=ai?ai[0]:aj,al=bH(ao);if(bU=ay(),ai&&(e=ai.length),aw.hold&&clearTimeout(bj),b=X,2==e&&(0==bW?(bg(1,ai[1]),bW=bo=ax(by[0].start,by[1].start)):(bH(ai[1]),bo=ax(by[0].end,by[1].end),bF=az(by[0].end,by[1].end)),z=n(bW,bo),a0=Math.abs(bW-bo)),e===aw.fingers||aw.fingers===Z||!ai||bq()){if(bz=bC(al.start,al.end),bV=bC(al.last,al.end),be(am,bV),bi=bw(al.start,al.end),bm=bB(),bG(bz,bi),an=o(aj,b),!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var ap=!0;if(aw.triggerOnTouchLeave){var ak=bp(this);ap=C(al.end,ak)}!aw.triggerOnTouchEnd&&ap?b=bM(X):aw.triggerOnTouchLeave&&!ap&&(b=bM(aa)),b!=Q&&b!=aa||o(aj,b)}}else{b=Q,o(aj,b)}an===!1&&(b=Q,o(aj,b))}}function r(ak){var aj=ak.originalEvent?ak.originalEvent:ak,ai=aj.touches;if(ai){if(ai.length&&!bd()){return A(aj),!0}if(ai.length&&bd()){return !0}}return bd()&&(e=y),bU=ay(),bm=bB(),l()||!bc()?(b=Q,o(aj,b)):aw.triggerOnTouchEnd||aw.triggerOnTouchEnd===!1&&b===X?(aw.preventDefaultEvents!==!1&&ak.cancelable!==!1&&ak.preventDefault(),b=aa,o(aj,b)):!aw.triggerOnTouchEnd&&bQ()?(b=aa,bK(aj,b,R)):b===X&&(b=Q,o(aj,b)),bb(!1),null}function bO(){e=0,bU=0,h=0,bW=0,bo=0,z=1,j(),bb(!1)}function s(aj){var ai=aj.originalEvent?aj.originalEvent:aj;aw.triggerOnTouchLeave&&(b=bM(aa),o(ai,b))}function bE(){bx.unbind(t,bD),bx.unbind(bL,bO),bx.unbind(B,bT),bx.unbind(g,r),i&&bx.unbind(i,s),bb(!1)}function bM(ai){var aj=ai,ak=v(),al=bc(),am=l();return !ak||am?aj=Q:!al||ai!=X||aw.triggerOnTouchEnd&&!aw.triggerOnTouchLeave?!al&&ai==aa&&aw.triggerOnTouchLeave&&(aj=Q):aj=aa,aj}function o(aj,al){var ak,ai=aj.touches;return(u()||f())&&(ak=bK(aj,al,W)),(m()||bq())&&ak!==!1&&(ak=bK(aj,al,K)),bJ()&&ak!==!1?ak=bK(aj,al,Y):ba()&&ak!==!1?ak=bK(aj,al,ag):bh()&&ak!==!1&&(ak=bK(aj,al,R)),al===Q&&bO(aj),al===aa&&(ai?ai.length||bO(aj):bO(aj)),ak}function bK(ai,al,aj){var ak;if(aj==W){if(bx.trigger("swipeStatus",[al,bz||null,bi||0,bm||0,e,by,bV]),aw.swipeStatus&&(ak=aw.swipeStatus.call(bx,ai,al,bz||null,bi||0,bm||0,e,by,bV),ak===!1)){return !1}if(al==aa&&br()){if(clearTimeout(bs),clearTimeout(bj),bx.trigger("swipe",[bz,bi,bm,e,by,bV]),aw.swipe&&(ak=aw.swipe.call(bx,ai,bz,bi,bm,e,by,bV),ak===!1)){return !1}switch(bz){case S:bx.trigger("swipeLeft",[bz,bi,bm,e,by,bV]),aw.swipeLeft&&(ak=aw.swipeLeft.call(bx,ai,bz,bi,bm,e,by,bV));break;case T:bx.trigger("swipeRight",[bz,bi,bm,e,by,bV]),aw.swipeRight&&(ak=aw.swipeRight.call(bx,ai,bz,bi,bm,e,by,bV));break;case ad:bx.trigger("swipeUp",[bz,bi,bm,e,by,bV]),aw.swipeUp&&(ak=aw.swipeUp.call(bx,ai,bz,bi,bm,e,by,bV));break;case G:bx.trigger("swipeDown",[bz,bi,bm,e,by,bV]),aw.swipeDown&&(ak=aw.swipeDown.call(bx,ai,bz,bi,bm,e,by,bV))}}}if(aj==K){if(bx.trigger("pinchStatus",[al,bF||null,a0||0,bm||0,e,z,by]),aw.pinchStatus&&(ak=aw.pinchStatus.call(bx,ai,al,bF||null,a0||0,bm||0,e,z,by),ak===!1)){return !1}if(al==aa&&bP()){switch(bF){case af:bx.trigger("pinchIn",[bF||null,a0||0,bm||0,e,z,by]),aw.pinchIn&&(ak=aw.pinchIn.call(bx,ai,bF||null,a0||0,bm||0,e,z,by));break;case E:bx.trigger("pinchOut",[bF||null,a0||0,bm||0,e,z,by]),aw.pinchOut&&(ak=aw.pinchOut.call(bx,ai,bF||null,a0||0,bm||0,e,z,by))}}}return aj==R?al!==Q&&al!==aa||(clearTimeout(bs),clearTimeout(bj),c()&&!w()?(p=ay(),bs=setTimeout(ac.proxy(function(){p=null,bx.trigger("tap",[ai.target]),aw.tap&&(ak=aw.tap.call(bx,ai,ai.target))},this),aw.doubleTapThreshold)):(p=null,bx.trigger("tap",[ai.target]),aw.tap&&(ak=aw.tap.call(bx,ai,ai.target)))):aj==Y?al!==Q&&al!==aa||(clearTimeout(bs),clearTimeout(bj),p=null,bx.trigger("doubletap",[ai.target]),aw.doubleTap&&(ak=aw.doubleTap.call(bx,ai,ai.target))):aj==ag&&(al!==Q&&al!==aa||(clearTimeout(bs),p=null,bx.trigger("longtap",[ai.target]),aw.longTap&&(ak=aw.longTap.call(bx,ai,ai.target)))),ak}function bc(){var ai=!0;return null!==aw.threshold&&(ai=bi>=aw.threshold),ai}function l(){var ai=!1;return null!==aw.cancelThreshold&&null!==bz&&(ai=bv(bz)-bi>=aw.cancelThreshold),ai}function bk(){return null===aw.pinchThreshold||a0>=aw.pinchThreshold}function v(){var ai;return ai=!aw.maxTimeThreshold||!(bm>=aw.maxTimeThreshold)}function be(ak,aj){if(aw.preventDefaultEvents!==!1){if(aw.allowPageScroll===V){ak.preventDefault()}else{var ai=aw.allowPageScroll===L;switch(aj){case S:(aw.swipeLeft&&ai||!ai&&aw.allowPageScroll!=O)&&ak.preventDefault();break;case T:(aw.swipeRight&&ai||!ai&&aw.allowPageScroll!=O)&&ak.preventDefault();break;case ad:(aw.swipeUp&&ai||!ai&&aw.allowPageScroll!=J)&&ak.preventDefault();break;case G:(aw.swipeDown&&ai||!ai&&aw.allowPageScroll!=J)&&ak.preventDefault();break;case V:}}}}function bP(){var aj=bA(),ak=d(),ai=bk();return aj&&ak&&ai}function bq(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function m(){return !(!bP()||!bq())}function br(){var ak=v(),ai=bc(),al=bA(),an=d(),am=l(),aj=!am&&an&&al&&ai&&ak;return aj}function f(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function u(){return !(!br()||!f())}function bA(){return e===aw.fingers||aw.fingers===Z||!ah}function d(){return 0!==by[0].end.x}function bQ(){return !!aw.tap}function c(){return !!aw.doubleTap}function bt(){return !!aw.longTap}function k(){if(null==p){return !1}var ai=ay();return c()&&ai-p<=aw.doubleTapThreshold}function w(){return k()}function D(){return(1===e||!ah)&&(isNaN(bi)||bi<aw.threshold)}function a(){return bm>aw.longTapThreshold&&bi<N}function bh(){return !(!D()||!bQ())}function bJ(){return !(!k()||!c())}function ba(){return !(!a()||!bt())}function A(ai){bR=ay(),y=ai.touches.length+1}function j(){bR=0,y=0}function bd(){var aj=!1;if(bR){var ai=ay()-bR;ai<=aw.fingerReleaseThreshold&&(aj=!0)}return aj}function bN(){return !(bx.data(P+"_intouch")!==!0)}function bb(ai){bx&&(ai===!0?(bx.bind(B,bT),bx.bind(g,r),i&&bx.bind(i,s)):(bx.unbind(B,bT,!1),bx.unbind(g,r,!1),i&&bx.unbind(i,s,!1)),bx.data(P+"_intouch",ai===!0))}function bg(ai,ak){var aj={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return aj.start.x=aj.last.x=aj.end.x=ak.pageX||ak.clientX,aj.start.y=aj.last.y=aj.end.y=ak.pageY||ak.clientY,by[ai]=aj,aj}function bH(ak){var ai=void 0!==ak.identifier?ak.identifier:0,aj=bl(ai);return null===aj&&(aj=bg(ai,ak)),aj.last.x=aj.end.x,aj.last.y=aj.end.y,aj.end.x=ak.pageX||ak.clientX,aj.end.y=ak.pageY||ak.clientY,aj}function bl(ai){return by[ai]||null}function bG(aj,ai){aj!=V&&(ai=Math.max(ai,bv(aj)),q[aj].distance=ai)}function bv(ai){if(q[ai]){return q[ai].distance}}function bn(){var ai={};return ai[S]=av(S),ai[T]=av(T),ai[ad]=av(ad),ai[G]=av(G),ai}function av(ai){return{direction:ai,distance:0}}function bB(){return bU-h}function ax(ai,aj){var ak=Math.abs(ai.x-aj.x),al=Math.abs(ai.y-aj.y);return Math.round(Math.sqrt(ak*ak+al*al))}function n(ak,aj){var ai=aj/ak*1;return ai.toFixed(2)}function az(){return z<1?E:af}function bw(ai,aj){return Math.round(Math.sqrt(Math.pow(aj.x-ai.x,2)+Math.pow(aj.y-ai.y,2)))}function bI(ak,am){var an=ak.x-am.x,ai=am.y-ak.y,al=Math.atan2(ai,an),aj=Math.round(180*al/Math.PI);return aj<0&&(aj=360-Math.abs(aj)),aj}function bC(aj,ak){if(bu(aj,ak)){return V}var ai=bI(aj,ak);return ai<=45&&ai>=0?S:ai<=360&&ai>=315?S:ai>=135&&ai<=225?T:ai>45&&ai<135?G:ad}function ay(){var ai=new Date;return ai.getTime()}function bp(ak){ak=ac(ak);var ai=ak.offset(),aj={left:ai.left,right:ai.left+ak.outerWidth(),top:ai.top,bottom:ai.top+ak.outerHeight()};return aj}function C(aj,ai){return aj.x>ai.left&&aj.x<ai.right&&aj.y>ai.top&&aj.y<ai.bottom}function bu(aj,ai){return aj.x==ai.x&&aj.y==ai.y}var aw=ac.extend({},aw),x=ah||ae||!aw.fallbackToMouseEvents,t=x?ae?I?"MSPointerDown":"pointerdown":"touchstart":"mousedown",B=x?ae?I?"MSPointerMove":"pointermove":"touchmove":"mousemove",g=x?ae?I?"MSPointerUp":"pointerup":"touchend":"mouseup",i=x?ae?"mouseleave":null:"mouseleave",bL=ae?I?"MSPointerCancel":"pointercancel":"touchcancel",bi=0,bz=null,bV=null,bm=0,bW=0,bo=0,z=1,a0=0,bF=0,q=null,bx=ac(bS),b="start",e=0,by={},h=0,bU=0,bR=0,y=0,p=0,bs=null,bj=null;try{bx.bind(t,bD),bx.bind(bL,bO)}catch(bf){ac.error("events not supported "+t+","+bL+" on jQuery.swipe")}this.enable=function(){return this.disable(),bx.bind(t,bD),bx.bind(bL,bO),bx},this.disable=function(){return bE(),bx},this.destroy=function(){bE(),bx.data(P,null),bx=null},this.option=function(ai,aj){if("object"==typeof ai){aw=ac.extend(aw,ai)}else{if(void 0!==aw[ai]){if(void 0===aj){return aw[ai]}aw[ai]=aj}else{if(!ai){return aw}ac.error("Option "+ai+" does not exist on jQuery.swipe.options")}}return null}}var F="1.6.18",S="left",T="right",ad="up",G="down",af="in",E="out",V="none",L="auto",W="swipe",K="pinch",R="tap",Y="doubletap",ag="longtap",O="horizontal",J="vertical",Z="all",N=10,ab="start",X="move",aa="end",Q="cancel",ah="ontouchstart" in window,I=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!ah,ae=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!ah,P="TouchSwipe",U={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};ac.fn.swipe=function(a){var b=ac(this),c=b.data(P);if(c&&"string"==typeof a){if(c[a]){return c[a].apply(c,Array.prototype.slice.call(arguments,1))}ac.error("Method "+a+" does not exist on jQuery.swipe")}else{if(c&&"object"==typeof a){c.option.apply(c,arguments)}else{if(!(c||"object"!=typeof a&&a)){return H.apply(this,arguments)}}}return b},ac.fn.swipe.version=F,ac.fn.swipe.defaults=U,ac.fn.swipe.phases={PHASE_START:ab,PHASE_MOVE:X,PHASE_END:aa,PHASE_CANCEL:Q},ac.fn.swipe.directions={LEFT:S,RIGHT:T,UP:ad,DOWN:G,IN:af,OUT:E},ac.fn.swipe.pageScroll={NONE:V,HORIZONTAL:O,VERTICAL:J,AUTO:L},ac.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:Z}});