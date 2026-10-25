/* مولّد إعلان «سماء» (الأحمر والأسود): ستوري 1080×1900 ومنشور 4:5 (1080×1350) */
(function(){
  function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
  var P={
    engine:{n:"محرك",p:"M7 8h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM8 8V5h6v3M3 11v4M17 11h3M20 10v6"},
    cyl:{n:"أسطوانات",p:circ(6,12,2.4)+circ(12,12,2.4)+circ(18,12,2.4)+circ(9,18,2.4)+circ(15,6,2.4)},
    seat:{n:"مقاعد",p:"M7 3c-1 4 0 8 2 11h8l2 5H9a3 3 0 0 1-3-3L5 5zM13 14v6"},
    roof:{n:"فتحة سقف",p:"M3 15h18M5 15l2-6h10l2 6M8 9l1-4h6l1 4"},
    wheel:{n:"جنوط",p:circ(12,12,8.5)+circ(12,12,2.5)+"M12 3.5v6M12 14.5v6M3.5 12h6M14.5 12h6"},
    screen:{n:"شاشة",p:"M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 21h6M12 17v4"},
    camera:{n:"كاميرا",p:"M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"+circ(12,13,3.5)+"M8 7l1.5-3h5L16 7"},
    fuel:{n:"وقود",p:"M6 20V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14M4 20h13M15 9h2l2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3"},
    gear:{n:"ناقل حركة",p:circ(12,12,3)+"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"},
    shield:{n:"ضمان",p:"M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-4"},
    bolt:{n:"قوة",p:"M13 3L5 14h6l-1 7 8-11h-6z"},
    cal:{n:"موديل",p:"M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM4 10h16M9 3v4M15 3v4"},
    key:{n:"دخول ذكي",p:circ(8,12,4)+"M12 12h9M18 12v3M21 12v2"},
    ac:{n:"مكيف",p:"M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"},
    awd:{n:"دفع رباعي",p:"M5 6h4v4H5zM15 6h4v4h-4zM5 14h4v4H5zM15 14h4v4h-4zM9 8h6M9 16h6M7 10v4M17 10v4"},
    sensor:{n:"حساسات",p:"M4 16c2-3 4-3 6 0M4 12c4-5 8-5 12 0M3 8c6-7 12-7 18 0M12 19v2"},
    charge:{n:"شاحن لاسلكي",p:"M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM13 8l-3 4h4l-3 4"},
    cool:{n:"مقاعد مبردة",p:"M12 3v18M5 7l14 10M19 7L5 17M9 4l3 2 3-2M9 20l3-2 3 2"},
    sound:{n:"نظام صوت",p:"M4 9h4l5-4v14l-5-4H4zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"},
    cruise:{n:"تثبيت سرعة",p:"M4 17a8 8 0 1 1 16 0M12 17l4-6M7 17h.01M17 17h.01M12 9v.01"},
    led:{n:"إضاءة LED",p:"M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"},
    abs:{n:"أمان / وسائد",p:circ(12,12,8.5)+"M12 7v6M12 16v.01"},
    leather:{n:"مقصورة فاخرة",p:"M4 18V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9M4 14h16M7 18v2M17 18v2"},
    park:{n:"ركن ذاتي",p:"M6 3h6a4 4 0 0 1 0 8H6zM6 3v18M17 15l3 3-3 3M20 18h-6"},
    star:{n:"نجمة",p:"M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9z"},
    phone:{n:"جوال",p:"M21 16.5v3a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L9 10.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"},
    pin:{p:"M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"+circ(12,10,2.5)},
    truck:{p:"M2 6h12v10H2zM14 9h4l3 3v4h-7"+circ(6,18.5,1.8)+circ(17,18.5,1.8)}
  };
  var SNAP="M12 3c3 0 5 2 5 5v2c.6.2 1.6.4 2.2.6.5.2.5.8 0 1-.8.3-1.6.5-1.9.7.8 1.7 2 2.6 3.2 3 .4.1.4.6 0 .8-1 .5-2 .6-2.6.8-.2.5-.5 1.1-1.3 1.1-.9 0-1.6-.7-3.6-.7s-2.7.7-3.6.7c-.8 0-1.1-.6-1.3-1.1-.6-.2-1.6-.3-2.6-.8-.4-.2-.4-.7 0-.8 1.2-.4 2.4-1.3 3.2-3-.3-.2-1.1-.4-1.9-.7-.5-.2-.5-.8 0-1 .6-.2 1.6-.4 2.2-.6V8c0-3 2-5 5-5z";
  var SHIELD_FILL="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z";
  var ICONS=Object.keys(P).filter(function(k){return P[k].n}).map(function(k){return {k:k,n:P[k].n}});

  /* يطلّع خانات المواصفات تلقائيًا من مواصفات السيارة */
  function tilesFrom(specs,colors){
    var L=[];(specs||[]).forEach(function(r){if(typeof r==="string")L.push(["",r]);else if(r.h)return;else L.push([r[0],r[1]])});
    var all=L.map(function(a){return a[0]+" "+a[1]}).join(" | "),T=[],m;
    var cc=/(\d{3,4})\s*(?:سي سي|cc)/i.exec(all),lt=/(\d\.\d)\s*لتر/.exec(all);
    if(cc)T.push({i:"engine",t:cc[1]+" سي سي",s:"سعة المحرك"});else if(lt)T.push({i:"engine",t:Math.round(parseFloat(lt[1])*1000)+" سي سي",s:"سعة المحرك"});
    if((m=/(\d)\s*-?\s*[أا]سطوانات|(\d)\s*سلندر/.exec(all)))T.push({i:"cyl",t:(m[1]||m[2])+" سلندر",s:"المحرك"});
    var hy=/هايبرد/.test(all);
    if(/جلد/.test(all))T.push({i:"seat",t:"مقاعد جلد",s:"الداخلية"});else if(/قماش/.test(all))T.push({i:"seat",t:"مقاعد قماش",s:"الداخلية"});
    if(/فتحة سقف|سقف بانورام/.test(all))T.push({i:"roof",t:"فتحة سقف",s:/بانورام/.test(all)?"بانورامي":""});
    var wl=L.filter(function(a){return /جنوط|زيق/.test(a[0]+a[1])})[0],wm=wl&&/(\d{2})\s*بوصة/.exec(wl[0]+" "+wl[1]);
    if(wl)T.push({i:"wheel",t:"جنوط",s:wm?wm[1]+" بوصة":"ألمنيوم"});
    var sc=/شاشة/.test(all),cm=/كاميرا/.test(all);
    if(sc)T.push({i:"screen",t:"شاشة",s:cm?"وكاميرا":""});else if(cm)T.push({i:"camera",t:"كاميرا",s:"خلفية"});
    [[/دفع رباعي|4WD|AWD/i,"awd","دفع رباعي",""],[/حساسات/,"sensor","حساسات",""],[/شاحن لاسلكي|شحن لاسلكي/,"charge","شاحن لاسلكي",""],[/مبرد|تبريد المقاعد/,"cool","مقاعد مبردة",""],[/نظام صوت|سماعات|JBL|Mark Levinson|بوز|Bose/i,"sound","نظام صوتي",""],[/تثبيت سرعة|كروز/,"cruise","تثبيت سرعة",""],[/LED|ليد|زينون/i,"led","إضاءة LED",""],[/دخول ذكي|تشغيل بدون مفتاح|بصمة/,"key","دخول ذكي",""],[/ركن ذاتي/,"park","ركن ذاتي",""]].forEach(function(q){if(T.length<8&&q[0].test(all))T.push({i:q[1],t:q[2],s:q[3]})});
    if(hy&&T.length<8)T.push({i:"fuel",t:"هايبرد",s:"اقتصادي"});
    return T.slice(0,8)}

  function lat(s){return !/[\u0600-\u06ff]/.test(s)}
  var F='Cairo, Tahoma, "Segoe UI", Arial, sans-serif';
  function ld(u){return new Promise(function(ok){if(!u)return ok(null);var i=new Image();i.crossOrigin="anonymous";i.onload=function(){ok(i)};i.onerror=function(){ok(null)};i.src=u})}
  function rrp(x,X,Y,W,H,R){x.beginPath();x.moveTo(X+R,Y);x.arcTo(X+W,Y,X+W,Y+H,R);x.arcTo(X+W,Y+H,X,Y+H,R);x.arcTo(X,Y+H,X,Y,R);x.arcTo(X,Y,X+W,Y,R);x.closePath()}
  function rr(x,c,X,Y,W,H,R){rrp(x,X,Y,W,H,R);x.fillStyle=c;x.fill()}
  function cover(x,im,X,Y,W,H,fx,fy,z){var s=Math.max(W/im.width,H/im.height)*(z||1),w=im.width*s,h=im.height*s;x.save();x.beginPath();x.rect(X,Y,W,H);x.clip();x.drawImage(im,X-(w-W)*(fx==null?.5:fx),Y-(h-H)*(fy==null?.5:fy),w,h);x.restore()}
  function icon(x,key,cx,cy,size,color,lw,fill){var d=typeof key==="string"&&P[key]?P[key].p:key;if(!d)return;var p=new Path2D(d),s=size/24;x.save();x.translate(cx-size/2,cy-size/2);x.scale(s,s);if(fill){x.fillStyle=color;x.fill(p)}else{x.strokeStyle=color;x.lineWidth=lw||1.8;x.lineCap="round";x.lineJoin="round";x.stroke(p)}x.restore()}
  function txt(x,s,X,Y,font,color,align,maxW){s=String(s==null?"":s);if(!s)return 0;x.font=font;var f=font;
    if(maxW){var sz=+(/(\d+)px/.exec(font)||[0,30])[1];while(x.measureText(s).width>maxW&&sz>14){sz-=2;f=font.replace(/\d+px/,sz+"px");x.font=f}}
    x.direction=lat(s)?"ltr":"rtl";x.textAlign=align;x.fillStyle=color;x.textBaseline="alphabetic";x.fillText(s,X,Y);return x.measureText(s).width}

  function make(o,fmt){
    var story=fmt!=="post",W=1080,H=story?1900:1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;var x=cv.getContext("2d");
    var fonts=["900 40px Cairo","700 30px Cairo","500 24px Cairo"].map(function(f){return document.fonts&&document.fonts.load?document.fonts.load(f,"عربي ABC 123").catch(function(){}):0});
    return Promise.all(fonts.concat([ld(o.img),ld("logo-full.png")])).then(function(r){
      var im=r[3],lg=r[4],A=story?1:.78;
      x.fillStyle="#0b0c0f";x.fillRect(0,0,W,H);
      /* الترويسة */
      var hh=story?180:150;x.fillStyle="#fff";x.fillRect(0,0,W,hh);x.fillStyle="#d11a1a";x.fillRect(0,hh,W,story?8:7);
      if(lg){var lh=hh-24,lw=lh*lg.width/lg.height;if(lw>W-80){lw=W-80;lh=lw*lg.height/lg.width}x.drawImage(lg,(W-lw)/2,(hh-lh)/2,lw,lh)}
      /* الصورة */
      var pY=story?188:292,pH=story?760:500;
      if(im){var zm=o.zoom||1,fx=o.fx==null?.5:o.fx,fy=o.fy==null?(story?.5:.7):o.fy;
        if(o.fit==="contain"){cover(x,im,0,pY,W,pH,.5,.5);x.fillStyle="rgba(11,12,15,.78)";x.fillRect(0,pY,W,pH);var cs=Math.min(W/im.width,pH/im.height)*zm,cw=im.width*cs,ch=im.height*cs;x.save();x.beginPath();x.rect(0,pY,W,pH);x.clip();x.drawImage(im,(W-cw)*fx,pY+(pH-ch)*fy,cw,ch);x.restore()}
        else cover(x,im,0,pY,W,pH,fx,fy,zm)}else{x.fillStyle="#1B3550";x.fillRect(0,pY,W,pH)}
      var g=x.createLinearGradient(0,story?pY+pH*.55:pY+pH-60,0,pY+pH);g.addColorStop(0,"rgba(11,12,15,0)");g.addColorStop(1,"rgba(11,12,15,1)");x.fillStyle=g;x.fillRect(0,story?pY+pH*.55:pY+pH-60,W,story?pH*.45:60);
      /* الشارة والدفع */
      var by=story?225:320,bf=(story?38:34)+"px Cairo,"+F.slice(6);
      if(o.badge){x.font="800 "+(story?38:34)+"px "+F;var bw=x.measureText(o.badge).width+(story?60:52),bh=story?64:56;rr(x,"#d11a1a",40,by,bw,bh,16);txt(x,o.badge,40+bw/2,by+bh*.72,"800 "+(story?38:34)+"px "+F,"#fff","center")}
      if(o.pay){x.font="700 "+(story?34:32)+"px "+F;var pw=x.measureText(o.pay).width+52,ph=story?64:56;rr(x,"rgba(0,0,0,.62)",W-40-pw,by,pw,ph,16);rrp(x,W-40-pw,by,pw,ph,16);x.strokeStyle="rgba(255,255,255,.35)";x.lineWidth=2;x.stroke();txt(x,o.pay,W-40-pw/2,by+ph*.72,"700 "+(story?34:32)+"px "+F,"#fff","center")}
      /* العنوان */
      var yr=String(o.y||""),R=W-50;
      if(story){
        var yw=0;if(yr){x.font="900 84px "+F;yw=x.measureText(yr).width+68;rr(x,"#fff",50,846,yw,112,24);txt(x,yr,50+yw/2,930,"900 84px "+F,"#111","center")}
        txt(x,o.brand,R,838,"700 44px "+F,"#ff5a5a","right");
        txt(x,o.model,R,950,"900 128px "+F,"#fff","right",W-100-yw-30);
        if(o.color)txt(x,"اللون: ",R-0,1004,"500 36px "+F,"#ccc","right");
        if(o.color){x.font="500 36px "+F;var lw0=x.measureText("اللون: ").width;txt(x,o.color,R-lw0,1004,"800 36px "+F,"#fff","right")}
      }else{
        if(yr){x.font="900 60px "+F;var yw2=x.measureText(yr).width+60;rr(x,"#fff",40,207,yw2,76,20);txt(x,yr,40+yw2/2,267,"900 60px "+F,"#111","center")}
        txt(x,o.brand,W-40,200,"700 32px "+F,"#ff5a5a","right");
        txt(x,o.model,W-40,268,"900 84px "+F,"#fff","right",W-80-(yr?260:0));
        if(o.color){x.font="500 30px "+F;var cw=x.measureText("اللون: "+o.color).width+28;rr(x,"rgba(11,12,15,.8)",30,752,cw,44,12);var lw1=x.measureText("اللون: ").width;txt(x,"اللون: ",30+cw-14,784,"500 30px "+F,"#ccc","right");txt(x,o.color,30+cw-14-lw1,784,"800 30px "+F,"#fff","right")}
      }
      /* خانات المواصفات */
      var tl=(o.tiles||[]).filter(function(t){return t&&(t.t||t.s)}).slice(0,story?8:6);
      var tl0=0,ty=story?1030:812,cols=story?4:6,gap=story?16:10,mx=story?30:20,tw=(W-mx*2-gap*(cols-1))/cols,th=story?205:148,ey=ty;
      var nB=(o.bank?(story?92:80)+(story?15:12):0)+((o.addr||o.ship)?(story?80:68)+14:0)+((o.owner||o.phone||o.snap)?(story?160:166):0),yB=H-30-nB,nr=Math.ceil(tl.length/cols)||0;
      if(nr){var rh=nr*th+(nr-1)*gap,av=yB-ty-(story?22:18);if(av>rh)ty+=Math.floor((av-rh)/2)}
      if(story&&tl.length&&tl.length<=4)cols=Math.max(tl.length,1),tw=(W-mx*2-gap*(cols-1))/cols;
      tl.forEach(function(t,i){var c=i%cols,rw=Math.floor(i/cols),X=W-mx-tw-c*(tw+gap),Y=ty+rw*(th+gap);ey=Y+th;
        var gg=x.createLinearGradient(0,Y,0,Y+th);gg.addColorStop(0,"#1b1d22");gg.addColorStop(1,"#121317");rrp(x,X,Y,tw,th,story?26:20);x.fillStyle=gg;x.fill();x.strokeStyle="#2a2d34";x.lineWidth=2;x.stroke();
        var is=story?80:56;if(t.i&&P[t.i])icon(x,t.i,X+tw/2,Y+(story?58:46),is,"#ff5a5a",story?1.7:1.9);else if(t.i){x.font=(story?64:46)+"px sans-serif";x.direction="ltr";x.textAlign="center";x.textBaseline="alphabetic";x.fillStyle="#fff";x.fillText(t.i,X+tw/2,Y+(story?78:60))}
        txt(x,t.t,X+tw/2,Y+(story?138:104),"800 "+(story?31:25)+"px "+F,"#fff","center",tw-14);
        if(t.s)txt(x,t.s,X+tw/2,Y+(story?176:131),"500 "+(story?24:20)+"px "+F,"#9aa0aa","center",tw-14)});
      var y=yB;
      /* شريط التمويل */
      var bh2=story?92:80;
      if(o.bank){rr(x,"#fff",30,y,W-60,bh2,bh2/2);x.font="800 "+(story?36:32)+"px "+F;var bwid=Math.min(x.measureText(o.bank).width,W-220),icw=story?54:46,tot=bwid+icw+16,sx=W/2+tot/2;
        icon(x,SHIELD_FILL,sx-icw/2,y+bh2/2,icw,"#d11a1a",0,true);txt(x,"✓",sx-icw/2,y+bh2/2+(story?12:10),"900 "+(story?30:26)+"px "+F,"#fff","center");
        txt(x,o.bank,sx-icw-16,y+bh2*.66,"800 "+(story?36:32)+"px "+F,"#111","right",W-220);y+=bh2+(story?15:12)}
      /* العنوان والشحن */
      var ah=story?80:68,parts=[];if(o.addr)parts.push(["pin",o.addr]);if(o.ship)parts.push(["truck",o.ship]);
      if(parts.length){rrp(x,30,y,W-60,ah,ah/2);x.strokeStyle="#3a3d45";x.lineWidth=2;x.stroke();var pw2=(W-60)/parts.length;
        parts.forEach(function(p,i){var cx0=W-30-pw2*i-pw2/2,fs=story?30:27;x.font="700 "+fs+"px "+F;var w1=Math.min(x.measureText(p[1]).width,pw2-100),ic=story?40:34,tt=w1+ic+10,rx=cx0+tt/2;
          icon(x,p[0],rx-ic/2,y+ah/2,ic,"#ff5a5a",1.8);txt(x,p[1],rx-ic-10,y+ah*.66,"700 "+fs+"px "+F,"#fff","right",pw2-100);
          if(i>0){x.beginPath();x.moveTo(W-30-pw2*i,y+10);x.lineTo(W-30-pw2*i,y+ah-10);x.strokeStyle="#3a3d45";x.stroke()}});y+=ah+(story?14:14)}
      /* بيانات صاحب المعرض */
      if(o.owner||o.phone||o.snap){var oh=Math.min(story?160:166,H-y-(story?30:30));if(oh<110)oh=110;var og=x.createLinearGradient(30,0,W-30,0);og.addColorStop(0,"#d11a1a");og.addColorStop(1,"#8f0f0f");rrp(x,30,y,W-60,oh,story?34:30);x.fillStyle=og;x.fill();
        if(o.owner){txt(x,"للحجز والاستفسار",W-66,y+oh*.33,"500 "+(story?26:24)+"px "+F,"rgba(255,255,255,.9)","right");txt(x,o.owner,W-66,y+oh*.72,"800 "+(story?42:40)+"px "+F,"#fff","right",W*.55)}
        var rows=[];if(o.phone)rows.push(["phone",o.phone,false]);if(o.snap)rows.push(["",o.snap,true]);
        rows.forEach(function(rw,i){var cy=rows.length===1?y+oh/2:y+oh*(i?.7:.32),fs=story?34:34;x.font="800 "+fs+"px "+F;var w=x.measureText(rw[1]).width;
          txt(x,rw[1],66+30+8,cy+12,"800 "+fs+"px "+F,"#fff","left");
          var ix=66+10+w+30+28;ix=66+8+w+44;
          if(rw[2])icon(x,SNAP,66+w+60,cy,32,"#fff",0,true);else icon(x,"phone",66+w+60,cy,32,"#fff",1.8)})}
      return new Promise(function(ok){cv.toBlob(function(b){ok(b)},"image/jpeg",.92)})})}
  window.SAMA_AD2={make:make,ICONS:ICONS,tilesFrom:tilesFrom,PATHS:function(k){return P[k]&&P[k].p}};
})();
