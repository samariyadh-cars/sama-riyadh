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
  const s=slug(key),target=SITE+"#car="+encodeURIComponent(key),self=SITE+"c/"+s+".html";keep.add(s+".html");
  const sp=(D.specs&&D.specs[key])||o.specs||c.specs||[],find=re=>{const r=sp.find(x=>Array.isArray(x)&&re.test(x[0]));return r?String(r[1]):""};
  const facts=[];const eng=find(/المحرك/),pw=find(/القوة/),gb=find(/ناقل/),ec=find(/استهلاك|كفاءة/);
  if(eng)facts.push(["المحرك",eng]);if(pw)facts.push(["القوة",pw]);if(gb)facts.push(["ناقل الحركة",gb]);if(ec)facts.push(["استهلاك الوقود",ec]);
  const priceTxt=status==="sold"?"تم البيع":pm==="hide"||!min?"السعر عند التواصل":(varies?"يبدأ من ":"")+money(min*(1+VAT))+" ر.س";
  const wa="https://wa.me/966554378456?text="+encodeURIComponent("السلام عليكم، أسأل عن "+bn+" "+nm+" "+y+" من معرض سماء الرياض للسيارات");
  const ld={"@context":"https://schema.org","@type":"Car","name":bn+" "+nm+" "+y,"brand":{"@type":"Brand","name":bn},"modelDate":y,"vehicleModelDate":y,"itemCondition":"https://schema.org/NewCondition","image":abs,"url":self,"color":colors.join("، "),
    "offers":(pm!=="hide"&&min&&status!=="sold")?{"@type":"Offer","priceCurrency":"SAR","price":Math.round(min*(1+VAT)),"availability":"https://schema.org/InStock","seller":{"@type":"AutoDealer","name":"معرض سماء الرياض للسيارات","telephone":"+966554378456","address":{"@type":"PostalAddress","addressLocality":"الرياض","addressCountry":"SA"}}}:undefined};
  const robots=D.set&&D.set.seo?"index,follow":"noindex,nofollow";
  const html='<!doctype html>\n<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="'+robots+'">'+
   '<title>'+esc(title)+' | معرض سماء الرياض للسيارات</title><meta name="description" content="'+esc(desc)+'"><link rel="canonical" href="'+self+'">'+
   '<meta property="og:type" content="product"><meta property="og:locale" content="ar_SA"><meta property="og:site_name" content="معرض سماء الرياض للسيارات">'+
   '<meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(desc)+'"><meta property="og:image" content="'+esc(abs)+'"><meta property="og:url" content="'+self+'">'+
   '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+esc(title)+'"><meta name="twitter:image" content="'+esc(abs)+'">'+
   '<script type="application/ld+json">'+JSON.stringify(ld).replace(/</g,"\\u003c")+'</script>'+
   '<style>body{margin:0;background:#EAF2F9;color:#0E2238;font-family:Tajawal,Tahoma,Arial,sans-serif}header{background:#0E2238;color:#fff;padding:12px 16px;border-bottom:3px solid #B8902F;display:flex;align-items:center;gap:10px}header img{width:40px;height:40px;background:#fff;border-radius:10px;padding:3px}main{max-width:640px;margin:0 auto;padding:16px}.ph{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:16px;background:#dde6ef;display:block}h1{font-size:24px;margin:14px 0 4px}.pr{font-size:22px;font-weight:800;color:#B21F2D}.pr small{font-size:13px;color:#52667A;font-weight:400}.box{background:#fff;border:1px solid #CFDDEA;border-radius:14px;padding:12px 14px;margin-top:12px}table{width:100%;border-collapse:collapse;font-size:15px}td{padding:7px 0;border-bottom:1px solid #EEF2F6}td:first-child{color:#52667A;width:40%}.acts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}.b{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:12px;font-weight:700;text-decoration:none;color:#fff;background:#1E73BE}.b.w{background:#128C4A}footer{text-align:center;color:#52667A;font-size:13px;padding:20px}</style></head><body>'+
   '<header><img src="../logo.png" alt=""><div><b>معرض سماء الرياض للسيارات</b><div style="font-size:12px;opacity:.75">الرياض – معارض الشفاء</div></div></header><main>'+
   '<img class="ph" src="'+esc(abs)+'" alt="'+esc(bn+" "+nm+" "+y)+'">'+
   '<h1>'+esc(bn+" "+nm+" "+y)+'</h1><div class="pr">'+esc(priceTxt)+(/ر\.س/.test(priceTxt)?' <small>شامل الضريبة</small>':'')+'</div>'+
   '<div class="box"><table>'+facts.map(f=>'<tr><td>'+esc(f[0])+'</td><td>'+esc(f[1])+'</td></tr>').join("")+(colors.length?'<tr><td>الألوان</td><td>'+esc(colors.join("، "))+'</td></tr>':'')+'<tr><td>الحالة</td><td>جديدة زيرو · وكالة سعودية</td></tr><tr><td>طرق الشراء</td><td>كاش · أقساط · دفعتين</td></tr></table></div>'+
   '<div class="acts"><a class="b" href="'+esc(target)+'">الصور والتفاصيل</a><a class="b w" href="'+esc(wa)+'">اسأل بالواتساب</a></div>'+
   '</main><footer>معرض سماء الرياض للسيارات · 0554378456 · <a href="../privacy.html" style="color:inherit">سياسة الخصوصية</a></footer></body></html>\n';
  const f=path.join(out,s+".html");if(!fs.existsSync(f)||fs.readFileSync(f,"utf8")!==html){fs.writeFileSync(f,html);n++}
});
fs.readdirSync(out).forEach(f=>{if(/\.html$/.test(f)&&!keep.has(f)){fs.unlinkSync(path.join(out,f));n++}});
const sm='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>'+SITE+'</loc></url>\n'+[...keep].sort().map(f=>'<url><loc>'+SITE+'c/'+f+'</loc></url>').join("\n")+'\n</urlset>\n';
const smf=path.join(ROOT,"sitemap.xml");if(!fs.existsSync(smf)||fs.readFileSync(smf,"utf8")!==sm){fs.writeFileSync(smf,sm);n++}
console.log("car pages changed:",n,"total:",keep.size);
