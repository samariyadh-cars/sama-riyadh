/* تحريك القوائم الأفقية على اللابتوب: أسهم + عجلة الماوس + سحب بالماوس. لا يعمل على الجوال/اللمس */
(function(){
  try{if(!window.matchMedia||!matchMedia("(hover:hover) and (pointer:fine)").matches)return}catch(e){return}
  var SEL=".chips,.track,.himgs,.rvs,.simr,.nth,#models,.fr,#chips,[data-hs]";
  var css=document.createElement("style");
  css.textContent=".hs-b{position:absolute;z-index:6;width:32px;height:32px;margin-top:-16px;border-radius:50%;border:1px solid rgba(0,0,0,.18);background:rgba(255,255,255,.92);color:#222;font:700 16px/30px Arial,sans-serif;padding:0;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.18);opacity:.9;display:none}.hs-b:hover{opacity:1;background:#fff}.hs-on{cursor:grab}.hs-drag{cursor:grabbing!important;user-select:none}.hs-drag *{pointer-events:none}";
  document.head.appendChild(css);
  var UPD=[];
  function rtl(el){return getComputedStyle(el).direction==="rtl"}
  function room(el){var max=el.scrollWidth-el.clientWidth,sl=el.scrollLeft,r=rtl(el);
    if(max<=2)return {l:false,r:false};
    return r?{l:sl>-max+1,r:sl<-1}:{l:sl>1,r:sl<max-1}}
  function enhance(el){
    if(el._hs)return;el._hs=1;var host=el.parentElement;if(!host)return;
    if(getComputedStyle(host).position==="static")host.style.position="relative";
    var bl=document.createElement("button"),br=document.createElement("button");
    bl.type=br.type="button";bl.className=br.className="hs-b";bl.textContent="◀";br.textContent="▶";bl.setAttribute("aria-label","يسار");br.setAttribute("aria-label","يمين");
    host.appendChild(bl);host.appendChild(br);
    function place(){var t=el.offsetTop+el.offsetHeight/2,L=el.offsetLeft,R=el.offsetLeft+el.offsetWidth;
      bl.style.top=br.style.top=t+"px";bl.style.left=(L+6)+"px";br.style.left=(R-38)+"px"}
    function upd(){var r=room(el);place();bl.style.display=r.l?"block":"none";br.style.display=r.r?"block":"none"}
    function go(d){el.scrollBy({left:d*Math.max(120,el.clientWidth*.7),behavior:"smooth"})}
    bl.onclick=function(e){e.stopPropagation();go(-1)};br.onclick=function(e){e.stopPropagation();go(1)};
    el.addEventListener("scroll",upd,{passive:true});
    el.addEventListener("wheel",function(e){var r=room(el);if(!(r.l||r.r))return;if(Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;
      var d=(e.deltaY>0?1:-1)*(rtl(el)?-1:1);if((d<0&&!r.l)||(d>0&&!r.r))return;e.preventDefault();el.scrollBy({left:d*Math.max(60,Math.abs(e.deltaY)),behavior:"auto"})},{passive:false});
    var dn=false,sx=0,sl0=0,moved=false,snap="";
    el.addEventListener("mousedown",function(e){if(e.button!==0)return;var r=room(el);if(!(r.l||r.r))return;dn=true;moved=false;sx=e.clientX;sl0=el.scrollLeft});
    window.addEventListener("mousemove",function(e){if(!dn)return;var dx=e.clientX-sx;if(!moved&&Math.abs(dx)>5){moved=true;snap=el.style.scrollSnapType;el.style.scrollSnapType="none";el.classList.add("hs-drag")}
      if(moved){el.scrollLeft=sl0-dx;e.preventDefault()}});
    window.addEventListener("mouseup",function(){if(!dn)return;dn=false;if(moved){el.classList.remove("hs-drag");el.style.scrollSnapType=snap;setTimeout(function(){moved=false},0)}});
    el.addEventListener("click",function(e){if(moved){e.stopPropagation();e.preventDefault()}},true);
    el.addEventListener("dragstart",function(e){e.preventDefault()});
    el.classList.add("hs-on");
    if(window.ResizeObserver)new ResizeObserver(upd).observe(el);
    upd.el=el;UPD.push(upd);upd();setTimeout(upd,400);setTimeout(upd,1500)}
  var tm=0;function scan(){tm=0;document.querySelectorAll(SEL).forEach(enhance);UPD=UPD.filter(function(f){return f.el.isConnected});UPD.forEach(function(f){try{f()}catch(e){}})}
  function later(){if(!tm)tm=setTimeout(scan,150)}
  new MutationObserver(later).observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener("resize",later);scan();
})();
