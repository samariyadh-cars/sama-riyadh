/* تطبيق سماء الرياض: الصور من الذاكرة أولاً، والبيانات والصفحات من الشبكة أولاً */
var V="sama-app-v1",IMG=/\.(jpg|jpeg|png|webp|gif)$/i;
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf("sama-app-")===0&&x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);if(u.origin!==location.origin)return;
  if(IMG.test(u.pathname)){
    e.respondWith(caches.open(V).then(function(c){return c.match(r).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok)c.put(r,res.clone());return res})})}));
    return;
  }
  e.respondWith(fetch(r).then(function(res){if(res.ok&&u.pathname.indexOf("/app/")>=0){var cp=res.clone();caches.open(V).then(function(c){c.put(r,cp)})}return res}).catch(function(){return caches.match(r,{ignoreSearch:true})}));
});
