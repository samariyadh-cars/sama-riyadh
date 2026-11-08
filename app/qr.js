/* مولّد باركود QR بسيط (نص UTF-8، تصحيح خطأ M، الإصدارات 1–20) — بدون أي مكتبة خارجية */
(function(g){
  var ECC_M=[0,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26];
  var BLK_M=[0,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16];
  function rawModules(v){var r=(16*v+128)*v+64;if(v>=2){var n=Math.floor(v/7)+2;r-=(25*n-10)*n-55;if(v>=7)r-=36}return r}
  function alignPos(v){if(v===1)return [];var n=Math.floor(v/7)+2,step=(v===32)?26:Math.ceil((v*4+4)/(n*2-2))*2,res=[6];for(var p=v*4+10;res.length<n;p-=step)res.splice(1,0,p);return res}
  /* Reed-Solomon في GF(256) */
  function mul(x,y){var z=0;for(var i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z&255}
  function rsDiv(deg){var r=[];for(var i=0;i<deg-1;i++)r.push(0);r.push(1);var root=1;for(var i=0;i<deg;i++){for(var j=0;j<r.length;j++){r[j]=mul(r[j],root);if(j+1<r.length)r[j]^=r[j+1]}root=mul(root,2)}return r}
  function rsRem(data,div){var r=div.map(function(){return 0});data.forEach(function(b){var f=b^r.shift();r.push(0);div.forEach(function(c,i){r[i]^=mul(c,f)})});return r}
  function utf8(s){return Array.prototype.slice.call(unescape(encodeURIComponent(s))).map(function(c){return c.charCodeAt(0)})}
  function make(text){
    var bytes=utf8(text),v,cap,dataCw;
    for(v=1;v<=20;v++){dataCw=Math.floor(rawModules(v)/8)-ECC_M[v]*BLK_M[v];var need=4+(v<10?8:16)+bytes.length*8;if(need<=dataCw*8)break}
    if(v>20)throw new Error("النص طويل");
    var bits=[];function put(val,len){for(var i=len-1;i>=0;i--)bits.push((val>>>i)&1)}
    put(4,4);put(bytes.length,v<10?8:16);bytes.forEach(function(b){put(b,8)});
    cap=dataCw*8;put(0,Math.min(4,cap-bits.length));put(0,(8-bits.length%8)%8);
    for(var pad=0xEC;bits.length<cap;pad^=0xEC^0x11)put(pad,8);
    var cw=[];for(var i=0;i<bits.length;i+=8){var b=0;for(var j=0;j<8;j++)b=(b<<1)|bits[i+j];cw.push(b)}
    /* تقسيم إلى كتل وإضافة التصحيح */
    var nb=BLK_M[v],ecLen=ECC_M[v],raw=Math.floor(rawModules(v)/8),nShort=nb-raw%nb,shortLen=Math.floor(raw/nb),div=rsDiv(ecLen),blocks=[],k=0;
    for(var i=0;i<nb;i++){var dat=cw.slice(k,k+shortLen-ecLen+(i<nShort?0:1));k+=dat.length;var ec=rsRem(dat,div);if(i<nShort)dat.push(0);blocks.push(dat.concat(ec))}
    var all=[];for(var i=0;i<blocks[0].length;i++)blocks.forEach(function(bl,j){if(i!==shortLen-ecLen||j>=nShort)all.push(bl[i])});
    /* المصفوفة */
    var size=v*4+17,M=[],F=[];for(var y=0;y<size;y++){M.push(new Array(size).fill(false));F.push(new Array(size).fill(false))}
    function set(x,y,d){M[y][x]=d;F[y][x]=true}
    for(var i=0;i<size;i++){set(6,i,i%2===0);set(i,6,i%2===0)}
    function finder(x,y){for(var dy=-4;dy<=4;dy++)for(var dx=-4;dx<=4;dx++){var d=Math.max(Math.abs(dx),Math.abs(dy)),xx=x+dx,yy=y+dy;if(xx>=0&&xx<size&&yy>=0&&yy<size)set(xx,yy,d!==2&&d!==4)}}
    finder(3,3);finder(size-4,3);finder(3,size-4);
    var ap=alignPos(v);ap.forEach(function(a,i){ap.forEach(function(b,j){if((i===0&&j===0)||(i===0&&j===ap.length-1)||(i===ap.length-1&&j===0))return;for(var dy=-2;dy<=2;dy++)for(var dx=-2;dx<=2;dx++)set(a+dx,b+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)})});
    function drawFormat(mask){var data=(0<<3)|mask,rem=data;for(var i=0;i<10;i++)rem=(rem<<1)^((rem>>>9)*0x537);var bt=((data<<10)|rem)^0x5412,b=function(i){return ((bt>>>i)&1)!==0};
      for(var i=0;i<=5;i++)set(8,i,b(i));set(8,7,b(6));set(8,8,b(7));set(7,8,b(8));for(var i=9;i<15;i++)set(14-i,8,b(i));
      for(var i=0;i<8;i++)set(size-1-i,8,b(i));for(var i=8;i<15;i++)set(8,size-15+i,b(i));set(8,size-8,true)}
    drawFormat(0);
    if(v>=7){var rem=v;for(var i=0;i<12;i++)rem=(rem<<1)^((rem>>>11)*0x1F25);var bt=(v<<12)|rem;for(var i=0;i<18;i++){var bit=((bt>>>i)&1)!==0,a=size-11+i%3,b=Math.floor(i/3);set(a,b,bit);set(b,a,bit)}}
    /* وضع البيانات */
    var idx=0;for(var right=size-1;right>=1;right-=2){if(right===6)right=5;for(var vert=0;vert<size;vert++)for(var j=0;j<2;j++){var x=right-j,up=((right+1)&2)===0,y=up?size-1-vert:vert;if(!F[y][x]&&idx<all.length*8){M[y][x]=((all[idx>>>3]>>>(7-(idx&7)))&1)!==0;idx++}}}
    function applyMask(m){for(var y=0;y<size;y++)for(var x=0;x<size;x++){if(F[y][x])continue;var inv;switch(m){case 0:inv=(x+y)%2===0;break;case 1:inv=y%2===0;break;case 2:inv=x%3===0;break;case 3:inv=(x+y)%3===0;break;case 4:inv=(Math.floor(x/3)+Math.floor(y/2))%2===0;break;case 5:inv=x*y%2+x*y%3===0;break;case 6:inv=(x*y%2+x*y%3)%2===0;break;default:inv=((x+y)%2+x*y%3)%2===0}if(inv)M[y][x]=!M[y][x]}}
    function penalty(){var p=0,dark=0;for(var y=0;y<size;y++){for(var x=0;x<size;x++){if(M[y][x])dark++;if(x<size-1&&y<size-1&&M[y][x]===M[y][x+1]&&M[y][x]===M[y+1][x]&&M[y][x]===M[y+1][x+1])p+=3}}
      for(var t=0;t<2;t++)for(var a=0;a<size;a++){var run=1;for(var b=1;b<size;b++){var c=t?M[b][a]:M[a][b],pc=t?M[b-1][a]:M[a][b-1];if(c===pc){run++;if(run===5)p+=3;else if(run>5)p++}else run=1}}
      p+=Math.floor(Math.abs(dark*20-size*size*10)/(size*size))*10;return p}
    var best=0,bestP=1e9;for(var m=0;m<8;m++){applyMask(m);drawFormat(m);var pp=penalty();if(pp<bestP){bestP=pp;best=m}applyMask(m)}
    applyMask(best);drawFormat(best);return M}
  /* يرسم الباركود كـ SVG */
  function svg(text,fg,bg){var M=make(text),n=M.length,q=4,d="";for(var y=0;y<n;y++)for(var x=0;x<n;x++)if(M[y][x])d+="M"+(x+q)+" "+(y+q)+"h1v1h-1z";
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+(n+2*q)+" "+(n+2*q)+'" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="'+(bg||"#fff")+'"/><path fill="'+(fg||"#000")+'" d="'+d+'"/></svg>'}
  g.SAMA_QR={make:make,svg:svg};
})(window);
