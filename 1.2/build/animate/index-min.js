/*! kcharts - v1.2 - 2013-10-10 10:58:28 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/animate/index",function(n,e){function a(e,a,m){function u(){q||(w=+new Date,D=!0)}function f(){var n=+new Date;C=C+n-w,D=!1}m||(m={}),m=n.merge(i,m);var c,d,w,s=+new Date,l=(s+m.duration,s),v=m.duration,A=r[m.easing],g=m.frame||n.noop,F={},q=!1,R=m.duration,h=0,C=0,D=!1;for(var b in e)a[b]||0==a[b]?F[b]=null:delete e[b];c=function(){var i,r;if(r=h/v,i=A(r),n.isArray(e))for(var t=0,u=e.length;u>t;t++)F[t]=e[t]+(a[t]-e[t])*i;else for(var f in e)F[f]=e[f]+(a[f]-e[f])*i;R>h?(g.call(k,F,r),d=o(c)):(g.call(k,a,1),q=!0,m.endframe&&m.endframe.call(k,a,1)),l=+new Date,h=l-s-C};var k={stop:function(){t(d)},resume:function(){D&&(f(),c())},pause:function(){D||(u(),t(d))},isRunning:function(){return!q}};return c(),k}var i,r=e.Easing,o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,16)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||clearTimeout;return i={duration:1e3,easing:"easeNone"},a.AnimateObject=function(e,i){var r=[],o=0,t={},m={},u=e.length;n.each(e,function(n,e){var a,i=n.from,u=n.to;for(var f in i)a=o++,r[a]=[n,f,e],t[a]=i[f],m[a]=u[f]});var f=a(t,m,{easing:i.easing,duration:i.duration,frame:function(n){for(var e in n){var a=r,i=a[e][0],o=a[e][1],t=a[e][2],m=i.from;m[o]=n[e],i.frame&&i.frame(o,n[e],n,t,u)}},endframe:function(n){for(var e in n){var a=r,o=a[e][0],t=a[e][1],m=a[e][2];o.endframe&&o.endframe(t,n[e],m,n)}i.endframe&&i.endframe()}});return f},a},{requires:["anim"]});