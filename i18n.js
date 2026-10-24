/* النسخة الإنجليزية للموقع: ترجمة الواجهة وأسماء السيارات. المواصفات التفصيلية تبقى بالعربي. */
(function(){
  var lang="ar";
  try{var q=new URLSearchParams(location.search).get("lang");if(q==="en"||q==="ar")localStorage.setItem("sama_lang",q);lang=localStorage.getItem("sama_lang")||"ar"}catch(e){var m=/[?&]lang=(en|ar)/.exec(location.search);if(m)lang=m[1]}
  window.SAMA_LANG=lang;
  var SHOP_EN="Sama Riyadh Cars Showroom";

  function addToggle(){
    var h=document.querySelector("header.top .wrap");if(!h||document.getElementById("langBtn"))return;
    var b=document.createElement("button");b.id="langBtn";b.type="button";b.className="btn alt";
    b.textContent=lang==="en"?"العربية":"English";b.setAttribute("aria-label",lang==="en"?"التبديل للعربية":"Switch to English");
    b.style.cssText="padding:5px 9px;font-size:13px;margin-inline-start:6px;white-space:nowrap;flex:0 0 auto";
    b.addEventListener("click",function(){try{localStorage.setItem("sama_lang",lang==="en"?"ar":"en")}catch(e){}
      var u=location.pathname+(location.search.replace(/[?&]lang=(en|ar)/,"").replace(/^&/,"?"))+location.hash;location.href=u});
    h.appendChild(b)}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addToggle);else addToggle();
  if(lang!=="en"){window.SAMA_TM=null;window.SAMA_TR=function(s){return s};return}

  /* ---------- القواميس ---------- */
  var EX={
    "معرض":"","سماء الرياض":"Sama Riyadh","للسيارات":"Cars Showroom",
    "واتساب":"WhatsApp","معرض سماء الرياض للسيارات":SHOP_EN,
    "سيارتك الجديدة":"Your new car","تبدأ من هنا":"starts here",
    "تويوتا ولكزس موديلات 2026. كاش أو أقساط أو دفعتين، وشحن لجميع مدن المملكة.":"Toyota and Lexus 2026 models. Cash, installments, two payments, and shipping to every city in the Kingdom.",
    "تصفح السيارات":"Browse cars","موقع المعرض":"Showroom location",
    "شحن لجميع مدن المملكة":"Shipping to all cities in the Kingdom","من الرياض إلى بابك":"From Riyadh to your door",
    "كاش أو أقساط":"Cash or installments","اطلب من بطاقة السيارة":"Order from the car card",
    "سيارات جديدة":"Brand-new cars","تويوتا ولكزس":"Toyota and Lexus",
    "السيارات المتوفرة":"Available cars",
    "اضغط على السيارة لعرض تفاصيلها وألوانها وسعرها. ما لقيت اللي تبغاه؟":"Tap a car to see its details and colors. Can't find what you want?",
    "اطلبها هنا":"Request it here","الكل":"All","تويوتا":"Toyota","لكزس":"Lexus","هيونداي":"Hyundai","فورد":"Ford",
    "سيدان":"Sedan","عائلية":"Family","الترتيب":"Sort","حسب الماركة":"By brand","وصلت جديد أولاً":"New arrivals first","المتوفر أولاً":"Available first",
    "ما لقيت سيارتك؟ اطلبها":"Can't find your car? Request it",
    "اكتب لنا السيارة اللي تبغاها، ونوفرها لك ونتواصل معك على واتساب.":"Tell us which car you want and we'll source it and contact you on WhatsApp.",
    "الاسم":"Name","رقم الجوال":"Mobile number","السيارة المطلوبة":"Car you want","الفئة (اختياري)":"Trim (optional)","اللون المفضل (اختياري)":"Preferred color (optional)",
    "طريقة الدفع":"Payment method","كاش":"Cash","أقساط":"Installments","دفعتين":"Two payments","تأجير منتهي بالتمليك":"Lease-to-own","المدينة":"City",
    "أرسل الطلب عبر واتساب":"Send request via WhatsApp","نرد عليك بالتوفر والموعد المتوقع.":"We'll reply with availability and the expected date.",
    "طرق الدفع":"Payment options","اختر الطريقة اللي تناسبك، ونرتب لك كل شي من المعرض.":"Choose what suits you and we'll arrange everything from the showroom.",
    "تدفع كامل المبلغ وتستلم سيارتك بأسرع وقت.":"Pay the full amount and get your car as soon as possible.",
    "تقسيط":"Installments","دفعة أولى ومدة تصل إلى 5 سنوات، والموافقة حسب جهة التمويل.":"A down payment and a term of up to 5 years, subject to the financing company's approval.",
    "تدفع جزء الآن والباقي على دفعة ثانية متفق عليها.":"Pay part now and the rest in an agreed second payment.",
    "قسط شهري مريح، وتتملك السيارة بنهاية العقد.":"A comfortable monthly payment, and you own the car at the end of the contract.",
    "نشحن لجميع مدن المملكة":"We ship to all cities in the Kingdom","— من المعرض في الرياض إلى باب بيتك.":"— from the showroom in Riyadh to your doorstep.",
    "اسأل عن الشحن لمدينتك":"Ask about shipping to your city","اطلب تقسيط":"Request installments",
    "عبّي بياناتك ونرسل لك القسط على واتساب.":"Fill in your details and we'll send you the installment on WhatsApp.",
    "السيارة":"Car","الدفعة الأولى":"Down payment","بدون دفعة":"No down payment","مدة التقسيط":"Installment term",
    "سنة":"1 year","سنتان":"2 years","3 سنوات":"3 years","4 سنوات":"4 years","5 سنوات":"5 years","جهة العمل":"Employer",
    "حكومي":"Government","عسكري":"Military","قطاع خاص":"Private sector","متقاعد":"Retired","أعمال حرة":"Self-employed",
    "الراتب الشهري (ريال)":"Monthly salary (SAR)","أرسل طلب التقسيط عبر واتساب":"Send installment request via WhatsApp",
    "نراجع بياناتك ونرد عليك بالقسط على واتساب.":"We'll review your details and reply with the installment on WhatsApp.",
    "ليش معرض سماء الرياض":"Why Sama Riyadh","أربع أشياء تهمك لما تشتري سيارتك.":"Four things that matter when you buy a car.",
    "🚗 سيارات جديدة":"🚗 Brand-new cars","سيارات جديدة بموديلات حديثة، وتقدر تشوف الصور والمواصفات كاملة قبل لا تتواصل.":"New cars with recent models. See the photos and full specs before you get in touch.",
    "💳 دفع على كيفك":"💳 Pay your way","كاش، أقساط، دفعتين، أو تأجير منتهي بالتمليك، ونرتّب لك الأنسب.":"Cash, installments, two payments, or lease-to-own, and we'll arrange what suits you best.",
    "🏦 تمويل من عدة جهات":"🏦 Financing from several providers","نتعامل مع أكثر من جهة تمويل، ونساعدك في تجهيز الأوراق للحصول على أفضل خيار.":"We work with more than one financing provider and help you prepare the paperwork to get the best option.",
    "🚚 نشحن لباب بيتك":"🚚 We ship to your door","سواء كنت في الرياض أو أي مدينة ثانية في المملكة، نوصل لك السيارة.":"Whether you're in Riyadh or any other city in the Kingdom, we deliver your car.",
    "زرنا في المعرض":"Visit us at the showroom","حياك في المعرض، وإذا كنت خارج الرياض نشحن سيارتك لين باب بيتك.":"You're welcome at the showroom, and if you're outside Riyadh we ship your car to your door.",
    "العنوان":"Address","الرياض، الشفاء، حي المروءة، شارع جبريل بن جميل، مقابل شيخ المعارض":"Riyadh, Al-Shifa, Al-Murouah District, Jibril bin Jameel Street, opposite Sheikh Al-Maarid",
    "ساعات العمل":"Working hours","من 9 صباحًا إلى 1 ظهرًا":"9:00 AM to 1:00 PM","ومن 4 عصرًا إلى 9 مساءً":"and 4:00 PM to 9:00 PM",
    "تواصل معنا":"Contact us","أو راسلنا على واتساب":"or message us on WhatsApp","افتح موقع المعرض في خرائط قوقل":"Open the showroom in Google Maps",
    "اختر اللون المطلوب (حسب التوفر)":"Choose the color you want (subject to availability)",
    "للفئات والمواصفات التفصيلية تواصل معنا على واتساب.":"For trims and detailed specs, contact us on WhatsApp.",
    "⇄ قارن فئات هذا الموديل":"⇄ Compare trims of this model","⇄ قارن مع سيارة ثانية":"⇄ Compare with another car",
    "شارك هذي السيارة":"Share this car","🖼 بطاقة صورة للمشاركة":"🖼 Shareable image card","جاري التجهيز…":"Preparing…","تم نسخ الرابط":"Link copied",
    "تبي نخبرك إذا وصلت سيارة مشابهة؟":"Want us to tell you when a similar car arrives?","أخبرني":"Notify me",
    "نستخدم رقمك للتواصل معك بخصوص هذي السيارة فقط.":"We use your number only to contact you about this car.",
    "اكتب رقم جوالك صحيح.":"Please enter a valid mobile number.","تم، بنتواصل معك أول ما تتوفر سيارة مشابهة.":"Done, we'll contact you as soon as a similar car is available.",
    "اطلب كاش":"Order with cash","مقارنة الفئات":"Compare trims","اختر الفئات اللي تبي تقارنها (من 2 إلى 4).":"Choose the trims you want to compare (2 to 4).",
    "اختر أي سيارتين من القائمتين تحت.":"Pick any two cars from the lists below.","مقارنة بين سيارتين":"Comparing two cars",
    "السيارة الأولى":"First car","السيارة الثانية":"Second car","أظهر الفروقات فقط":"Show differences only",
    "© معرض سماء الرياض للسيارات":"© "+SHOP_EN,"📞 اتصل الحين":"📞 Call now","اطلب عبر واتساب":"Order via WhatsApp","اتصل بالمعرض":"Call the showroom","🔍 اضغط للتكبير":"🔍 Tap to zoom","دخول المعرض":"Showroom login",
    "ابحث عن سيارة، مثال: برادو TXL2":"Search for a car, e.g. Prado TXL2","ابحث عن سيارة":"Search for a car","مثال: لكزس LX600":"e.g. Lexus LX600",
    "مثال: فل كامل":"e.g. Fully loaded","مثال: أبيض":"e.g. White","مثال: جدة":"e.g. Jeddah","رقم جوالك 05xxxxxxxx":"Your mobile 05xxxxxxxx",
    "موقع المعرض على الخريطة":"Showroom on the map","عرض الصورة":"Image viewer","إغلاق":"Close","السابقة":"Previous","التالية":"Next",
    "الصورة السابقة":"Previous photo","الصورة التالية":"Next photo","لكزس IS350 بيضاء في معرض سماء الرياض":"White Lexus IS350 at Sama Riyadh showroom",
    "ما لقينا سيارة بهذي المواصفات.":"We couldn't find a car matching that.","اطلب سيارتك وتواصل معك":"Request your car and we'll contact you",
    "تقسيط ":"Installments ","السعر عند الطلب":"Price on request","تم البيع":"Sold","تم البيع، اسأل عن مشابهة":"Sold, ask about a similar one",
    "اسأل عن مشابهة":"Ask about a similar one","اطلب هذي الفئة":"Order this trim","الألوان المتوفرة":"Available colors",
    "وصلت جديد":"New arrival","عرض خاص":"Special offer","كمية محدودة":"Limited quantity","متوفرة الحين":"Available now",
    "المواصفات التفصيلية لهذي الفئات تتوفر عبر واتساب.":"Detailed specs for these trims are available on WhatsApp.",
    "ما فيه فروقات بين الفئات المختارة في المواصفات المدخلة.":"No differences between the selected trims in the specs entered.",
    "مواصفات":"Specifications","المواصفات":"Specifications",
    "أبيض":"White","أسود":"Black","فضي":"Silver","رمادي":"Gray","أزرق":"Blue","أحمر":"Red","بني":"Brown","ذهبي":"Gold","بيج":"Beige","تيتانيوم":"Titanium",
    "أزرق غامق":"Dark blue","كحلي":"Navy","برونزي":"Bronze","رصاصي فاتح":"Light gray","أخضر":"Green","جملي":"Camel"
  };
  /* كلمات مفردة (أسماء السيارات والألوان والأنواع) */
  var W={
    "تويوتا":"Toyota","لكزس":"Lexus","هيونداي":"Hyundai","فورد":"Ford",
    "كامري":"Camry","كورولا":"Corolla","يارس":"Yaris","برادو":"Prado","لاندكروزر":"Land Cruiser","راف فور":"RAV4","فورتشنر":"Fortuner",
    "رايز":"Raize","كراون":"Crown","فيلوز":"Veloz","اكسنت":"Accent","تورس":"Taurus","أوربان":"Urban Cruiser","جراندي":"Grande",
    "برستيج":"Prestige","بريميوم":"Premium","بلس":"Plus","أدفنشر":"Adventure","ادفنشر":"Adventure","لوميير":"Lumiere","ليميتد":"Limited","رادار":"Radar","ستاندر":"Standard","مطور":"Upgraded",
    "بنزين":"Petrol","ديزل":"Diesel","هايبرد":"Hybrid","سيدان":"Sedan","عائلية":"Family",
    "أبيض":"White","أسود":"Black","فضي":"Silver","رمادي":"Gray","أزرق":"Blue","أحمر":"Red","بني":"Brown","ذهبي":"Gold","بيج":"Beige","تيتانيوم":"Titanium",
    "غامق":"Dark","كحلي":"Navy","برونزي":"Bronze","رصاصي":"Gray","فاتح":"Light","أخضر":"Green","جملي":"Camel","داخلية":"interior","سوداء":"black",
    "ر.س":"SAR","ريال":"SAR","سنة":"years","موديل":"Model","جديدة":"New"
  };
  var ARAB=/[؀-ۿ]/;
  var WK=Object.keys(W).sort(function(a,b){return b.length-a.length});
  var WR=WK.map(function(k){return [new RegExp("(?<![\\u0600-\\u06FF])"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\u0600-\\u06FF])","g"),W[k]]});
  function words(s){
    s=s.replace(/^(.+?) بمقصورة (.+)$/,"$1 with $2 interior");
    WR.forEach(function(r){s=s.replace(r[0],r[1])});
    return s}
  var PAT=[
    [/^عدد السيارات: (\d+)$/,function(m){return "Cars: "+m[1]}],
    [/^جديدة، موديل (\S+) • (.+)$/,function(m){return "New, model "+m[1]+" • "+tr(m[2])}],
    [/^تبدأ من (.+) ر\.س$/,function(m){return "From "+m[1]+" SAR"}],
    [/^👁 شافها (\d+) شخص آخر ٧ أيام$/,function(m){return "👁 "+m[1]+" people viewed this in the last 7 days"}],
    [/^كل فئات (.+)$/,function(m){return "All "+tr(m[1])+" trims"}],
    [/^مقارنة فئات (.+)$/,function(m){return "Comparing "+tr(m[1])+" trims"}],
    [/^(\d+) ألوان$/,function(m){return m[1]+" colors"}],
    [/^صورة (\d+)$/,function(m){return "Photo "+m[1]}],
    [/^تفاصيل (.+)$/,function(m){return tr(m[1])+" details"}],
    [/^جاري رفع .*$/,function(){return "Uploading…"}]
  ];
  function tr(s){
    if(s==null)return s;var t=String(s);if(!ARAB.test(t))return t;
    var k=t.trim(),pre=t.slice(0,t.indexOf(k)),post=t.slice(t.indexOf(k)+k.length);
    if(Object.prototype.hasOwnProperty.call(EX,k))return pre+EX[k]+post;
    if(Object.prototype.hasOwnProperty.call(EX,t))return EX[t];
    for(var i=0;i<PAT.length;i++){var m=PAT[i][0].exec(k);if(m)return pre+PAT[i][1](m)+post}
    var w=words(k);if(!ARAB.test(w))return pre+w+post;
    return t}
  window.SAMA_TR=tr;

  /* ---------- رسائل واتساب بالإنجليزي ---------- */
  var KEYS={"الاسم":"Name","الجوال":"Phone","الدفعة الأولى":"Down payment","المدة":"Term","جهة العمل":"Employer","الراتب الشهري":"Monthly salary","السيارة":"Car","الفئة":"Trim","اللون":"Color","طريقة الدفع":"Payment","المدينة":"City","الألوان":"Colors"};
  function carBoth(n){var e=tr(n);return e!==n&&e?e+" ("+n+")":n}
  function valEn(k,v){
    if(k==="المدة")return v.replace(/(\d+) سنة/,"$1 years");
    if(k==="الراتب الشهري")return v.replace("ر.س","SAR");
    if(k==="اللون")return tr(v);
    return tr(v)}
  window.SAMA_TM=function(msg){
    try{
      var L=String(msg).split("\n"),f=L[0],o=[],m;
      if((m=/^السلام عليكم، أرغب بطلب (.+?) موديل (\S+)(?: لون (.+?))? (بالدفع كاش|بالتقسيط) من (.+)$/.exec(f))){
        o.push("Hello, I would like to order "+carBoth(m[1])+", model "+m[2]+(m[3]?", color "+tr(m[3]):"")+" — "+(m[4]==="بالتقسيط"?"by installments":"cash")+" — from "+SHOP_EN)}
      else if((m=/^السلام عليكم، أبغى أطلب سيارة غير موجودة في الموقع من (.+)$/.exec(f)))o.push("Hello, I'd like to request a car that isn't on the website, from "+SHOP_EN);
      else if((m=/^السلام عليكم، أبغى سيارة مشابهة لـ (.+?) من (.+)$/.exec(f)))o.push("Hello, I'm looking for a car similar to "+carBoth(m[1])+", from "+SHOP_EN);
      else return msg;
      for(var i=1;i<L.length;i++){var mm=/^([^:]+): (.*)$/.exec(L[i]);if(mm&&KEYS[mm[1]]){var v=valEn(mm[1],mm[2]);if(mm[1]==="السيارة"&&!/^طريقة/.test(mm[1]))v=carBoth(mm[2]);o.push(KEYS[mm[1]]+": "+v)}else o.push(L[i])}
      return o.join("\n")}catch(e){return msg}};

  /* ---------- ترجمة الصفحة ---------- */
  var de=document.documentElement;de.lang="en";de.dir="ltr";
  var ATTRS=["placeholder","aria-label","alt","title"];
  function doNode(n){
    if(n.nodeType===3){var v=n.nodeValue;if(ARAB.test(v)){var r=tr(v);if(r!==v)n.nodeValue=r}return}
    if(n.nodeType!==1)return;
    var tg=n.tagName;if(tg==="SCRIPT"||tg==="STYLE"||tg==="SVG"||tg==="svg")return;
    ATTRS.forEach(function(a){if(n.hasAttribute&&n.hasAttribute(a)){var v=n.getAttribute(a);if(ARAB.test(v)){var r=tr(v);if(r!==v)n.setAttribute(a,r)}}});
    if(tg==="OPTION"||tg==="BUTTON"||true){for(var c=n.firstChild;c;c=c.nextSibling)doNode(c)}}
  function run(){doNode(document.body);if(ARAB.test(document.title))document.title=tr(document.title)}
  var busy=false,mo=new MutationObserver(function(ms){if(busy)return;busy=true;try{ms.forEach(function(m){
      if(m.type==="characterData")doNode(m.target);
      else if(m.type==="attributes")doNode(m.target);
      else m.addedNodes.forEach(doNode)})}finally{busy=false}});
  function start(){run();mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS})}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
  /* العنوان والوصف */
  document.title=document.title;
})();
