/* تطبيق سماء الرياض: الصور من الذاكرة أولاً، والبيانات والصفحات من الشبكة أولاً */
var V="sama-app-v2",IMG=/\.(jpg|jpeg|png|webp|gif)$/i;
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf("sama-app-")===0&&x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);if(u.origin!==location.origin)return;
  if(IMG.test(u.pathname)){
    e.respondWith(caches.open(V).then(function(c){return c.match(r).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok)c.put(r,res.clone());return res})})}));
    return;
  }
  e.respondWith(fetch(r,{cache:"no-cache"}).then(function(res){if(res.ok&&u.pathname.indexOf("/app/")>=0){var cp=res.clone();caches.open(V).then(function(c){c.put(r,cp)})}return res}).catch(function(){return caches.match(r,{ignoreSearch:true})}));
});
/* إشعارات الطلبات الجديدة (لصاحب المعرض): إشعار + رقم على أيقونة التطبيق */
self.addEventListener("push",function(e){var d={};try{d=e.data?e.data.json():{}}catch(x){d={b:e.data?e.data.text():""}}
  var n=+d.n||0,jobs=[self.registration.showNotification(d.t||"🔔 طلب جديد",{body:d.b||"",icon:"../icon-192.png",badge:"../icon-192.png",tag:"sama-lead",renotify:true,data:{u:d.u||"./?ops=1"}})];
  if(self.navigator&&self.navigator.setAppBadge){jobs.push((n>0?self.navigator.setAppBadge(n):self.navigator.clearAppBadge()).catch(function(){}))}
  e.waitUntil(Promise.all(jobs))});
self.addEventListener("notificationclick",function(e){e.notification.close();var u=new URL((e.notification.data&&e.notification.data.u)||"./?ops=1",self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(cs){for(var i=0;i<cs.length;i++){if("navigate" in cs[i]){return cs[i].focus().then(function(c){return c.navigate(u)}).catch(function(){return self.clients.openWindow(u)})}}return self.clients.openWindow(u)}))});
