/* يبني صفحة صغيرة لكل سيارة في c/<رمز>.html فيها صورة السيارة واسمها وسعرها
   عشان الرابط يطلع بمعاينة في الواتساب وسناب، وتفتح السيارة في الموقع.
   يشتغل تلقائياً بعد كل تعديل على data.json أو app.js (GitHub Actions). */
const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,".."),SITE="https://samariyadh-cars.github.io/sama-riyadh/",VAT=0.15;
const src=fs.readFileSync(path.join(ROOT,"app.js"),"utf8");
const i=src.indexOf("var cars=["),j=src.indexOf("\n];",i);
const cars=new Function("T","L","Y","return "+src.slice(i+9,j+3).replace(/;\s*$/,""))("تويوتا","لكزس","2026");
let D={};try{D=JSON.parse(fs.readFileSync(path.join(ROOT,"data.json"),"utf8"))}catch(e){}
(D.extra||[]).forEach(x=>cars.push(Object.assign({},x)));
const ov=D.ov||{};
function slug(k){let h=2166136261;for(const ch of Buffer.from(k,"utf8")){h^=ch;h=Math.imul(h,16777619)>>>0}return h.toString(36)}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function money(n){return Math.round(n).toLocaleString("en-US")}
const out=path.join(ROOT,"c");fs.mkdirSync(out,{recursive:true});
const keep=new Set();let n=0;
cars.forEach(c=>{
  const key=c.b+" "+c.n,o=ov[key]||{};
  const nm=c.nm||o.nm||c.n,bn=c.bn||o.bn||c.b,y=String(o.y||c.y||"2026");
  const pm=c.pm||o.pm,status=c.status||o.status||"";
  if(status==="hidden"||o.arch||c.arch)return;
  const colors=(o.colors&&o.colors.length?o.colors:c.colors)||[];
  const base=+(o.price||c.price)||0,cp=Object.assign({},c.cprice||{},o.cprice||{});
  const ps=colors.map(x=>+cp[x]>0?+cp[x]:base).filter(v=>v>0),min=ps.length?Math.min(...ps):base,varies=ps.some(v=>v!==ps[0]);
  const ci=Object.assign({},c.cimgs||{},o.cimgs||{});
  let img=(o.imgs&&o.imgs[0])||(c.imgs&&c.imgs[0])||"";if(!img){for(const k of colors){if(ci[k]&&ci[k][0]){img=ci[k][0];break}}}
  const abs=img?(/^https?:/.test(img)?img:SITE+img.replace(/\.webp$/,".jpg")):SITE+"og.jpg";
  const title=bn+" "+nm+" "+y+(status==="sold"?" — تم البيع":pm==="hide"||!min?"":(varies?" — يبدأ من ":" — ")+money(min*(1+VAT))+" ر.س");
  const desc="جديدة زيرو · وكالة سعودية · كاش وأقساط"+(colors.length?" · الألوان: "+colors.slice(0,5).join("، "):"")+" — معرض سماء الرياض للسيارات";
  const s=slug(key),target=SITE+"#car="+encodeURIComponent(key);keep.add(s+".html");
  const html='<!doctype html>\n<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
   '<title>'+esc(title)+'</title><meta name="description" content="'+esc(desc)+'">'+
   '<meta property="og:type" content="product"><meta property="og:locale" content="ar_SA"><meta property="og:site_name" content="معرض سماء الرياض للسيارات">'+
   '<meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(desc)+'"><meta property="og:image" content="'+esc(abs)+'"><meta property="og:url" content="'+SITE+'c/'+s+'.html">'+
   '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+esc(title)+'"><meta name="twitter:image" content="'+esc(abs)+'">'+
   '<link rel="canonical" href="'+esc(target)+'"><meta http-equiv="refresh" content="0;url='+esc(target)+'">'+
   '<script>location.replace('+JSON.stringify(target)+')</script></head><body style="font-family:Tahoma,sans-serif;text-align:center;padding:40px">'+
   '<p><a href="'+esc(target)+'">'+esc(title)+'</a></p></body></html>\n';
  const f=path.join(out,s+".html");if(!fs.existsSync(f)||fs.readFileSync(f,"utf8")!==html){fs.writeFileSync(f,html);n++}
});
fs.readdirSync(out).forEach(f=>{if(/\.html$/.test(f)&&!keep.has(f)){fs.unlinkSync(path.join(out,f));n++}});
console.log("car pages changed:",n,"total:",keep.size);
