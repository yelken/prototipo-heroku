!function(t){var i,e=t(document),r=t("head"),n=null,o=[],a=0,s="id",d="px",l="JColResizer",c="JCLRFlex",h=parseInt,f=Math,p=navigator.userAgent.indexOf("Trident/4.0")>0;try{i=sessionStorage}catch(g){}r.append("<style type='text/css'>  .JColResizer{/*table-layout:fixed;*/} .JColResizer td, .JColResizer th{overflow:hidden;/*padding-left:0!important; padding-right:0!important;*/}  .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black;\t} .JCLRFlex{width:auto!important;}</style>");var u=function(i,e){var r=t(i);if(r.opt=e,r.opt.disable)return w(r);var n=r.id=r.attr(s)||l+a++;r.p=r.opt.postbackSafe,!r.is("table")||o[n]&&!r.opt.partialRefresh||(r.addClass(l).attr(s,n).before('<div class="JCLRgrips"/>'),r.g=[],r.c=[],r.w=r.width(),r.gc=r.prev(),r.f=r.opt.fixed,e.marginLeft&&r.gc.css("marginLeft",e.marginLeft),e.marginRight&&r.gc.css("marginRight",e.marginRight),r.cs=h(p?i.cellSpacing||i.currentStyle.borderSpacing:r.css("border-spacing"))||2,r.b=h(p?i.border||i.currentStyle.borderLeftWidth:r.css("border-left-width"))||1,o[n]=r,v(r))},w=function(t){var i=t.attr(s),t=o[i];t&&t.is("table")&&(t.removeClass(l+" "+c).gc.remove(),delete o[i])},v=function(e){var r=e.find(">thead>tr>th,>thead>tr>td");r.length||(r=e.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td")),r=r.filter(":visible"),e.cg=e.find("col"),e.ln=r.length,e.p&&i&&i[e.id]&&m(e,r),r.each(function(i){var r=t(this),n=t(e.gc.append('<div class="JCLRgrip"></div>')[0].lastChild);n.append(e.opt.gripInnerHtml).append('<div class="'+l+'"></div>'),i==e.ln-1&&(n.addClass("JCLRLastGrip"),e.f&&n.html("")),n.bind("touchstart mousedown",y),n.t=e,n.i=i,n.c=r,r.w=r.width(),e.g.push(n),e.c.push(r),r.width(r.w).removeAttr("width"),n.data(l,{i:i,t:e.attr(s),last:i==e.ln-1})}),e.cg.removeAttr("width"),b(e),e.find("td, th").not(r).not("table th, table td").each(function(){t(this).removeAttr("width")}),e.f||e.removeAttr("width").addClass(c)},m=function(t,e){var r,n,o=0,a=0,s=[];if(e){if(t.cg.removeAttr("width"),t.opt.flush)return void(i[t.id]="");for(r=i[t.id].split(";"),n=r[t.ln+1],!t.f&&n&&t.width(n);a<t.ln;a++)s.push(100*r[a]/r[t.ln]+"%"),e.eq(a).css("width",s[a]);for(a=0;a<t.ln;a++)t.cg.eq(a).css("width",s[a])}else{for(i[t.id]="";a<t.c.length;a++)r=t.c[a].width(),i[t.id]+=r+";",o+=r;i[t.id]+=o,t.f||(i[t.id]+=";"+t.width())}},b=function(t){t.gc.width(t.w);for(var i=0;i<t.ln;i++){var e=t.c[i];t.g[i].css({left:e.offset().left-t.offset().left+e.outerWidth(!1)+t.cs/2+d,height:t.opt.headerOnly?t.c[0].outerHeight(!0):t.outerHeight(!0)})}},C=function(t,i,e){var r=n.x-n.l,o=t.c[i],a=t.c[i+1],s=o.w+r,l=a.w-r;o.width(s+d),t.cg.eq(i).width(s+d),t.f&&(a.width(l+d),t.cg.eq(i+1).width(l+d)),e&&(o.w=s,a.w=t.f?l:a.w)},R=function(i){var e=t.map(i.c,function(t){return t.width()});i.width(i.width()).removeClass(c),t.each(i.c,function(t,i){i.width(e[t]).w=e[t]}),i.addClass(c)},x=function(t){if(n){var i=n.t,e=t.originalEvent.touches,r=e?e[0].pageX:t.pageX,o=r-n.ox+n.l,a=i.opt.minWidth,s=n.i,l=1.5*i.cs+a+i.b,c=s==i.ln-1,h=s?i.g[s-1].position().left+i.cs+a:l,p=i.f?s==i.ln-1?i.w-l:i.g[s+1].position().left-i.cs-a:1/0;if(o=f.max(h,f.min(p,o)),n.x=o,n.css("left",o+d),c){var g=i.c[n.i];n.w=g.w+o-n.l}if(i.opt.liveDrag){c?(g.width(n.w),i.w=i.width()):C(i,s),b(i);var u=i.opt.onDrag;u&&(t.currentTarget=i[0],u(t))}return!1}},L=function(r){if(e.unbind("touchend."+l+" mouseup."+l).unbind("touchmove."+l+" mousemove."+l),t("head :last-child").remove(),n){n.removeClass(n.t.opt.draggingClass);var o=n.t,a=o.opt.onResize,s=n.i,d=s==o.ln-1,c=o.g[s].c;d?(c.width(n.w),c.w=n.w):C(o,s,!0),o.f||R(o),b(o),a&&(r.currentTarget=o[0],a(r)),o.p&&i&&m(o),n=null}},y=function(i){var a=t(this).data(l),s=o[a.t],d=s.g[a.i],c=i.originalEvent.touches;if(d.ox=c?c[0].pageX:i.pageX,d.l=d.position().left,e.bind("touchmove."+l+" mousemove."+l,x).bind("touchend."+l+" mouseup."+l,L),r.append("<style type='text/css'>*{cursor:"+s.opt.dragCursor+"!important}</style>"),d.addClass(s.opt.draggingClass),n=d,s.c[a.i].l)for(var h,f=0;f<s.ln;f++)h=s.c[f],h.l=!1,h.w=h.width();return!1},J=function(){for(i in o){var t,i=o[i],e=0;if(i.removeClass(l),i.f&&i.w!=i.width()){for(i.w=i.width(),t=0;t<i.ln;t++)e+=i.c[t].w;for(t=0;t<i.ln;t++)i.c[t].css("width",f.round(1e3*i.c[t].w/e)/10+"%").l=!0}b(i.addClass(l))}};t(window).bind("resize."+l,J),t.fn.extend({colResizable:function(i){var e={draggingClass:"JCLRgripDrag",gripInnerHtml:"",liveDrag:!1,fixed:!0,minWidth:15,headerOnly:!1,hoverCursor:"e-resize",dragCursor:"e-resize",postbackSafe:!1,flush:!1,marginLeft:null,marginRight:null,disable:!1,partialRefresh:!1,onDrag:null,onResize:null},i=t.extend(e,i);return this.each(function(){u(this,i)})}})}(jQuery);