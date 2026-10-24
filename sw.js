/* يخدم الموقع بسرعة: الصور من الذاكرة أولًا، والصفحات والبيانات من الشبكة أولًا */
var V="sama-v1",IMG=/\.(jpg|jpeg|png|webp|gif)$/i;
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);if(u.origin!==location.origin)return;
  if(/ops\.html$/.test(u.pathname)||/[?&]t=/.test(u.search))return;
  if(IMG.test(u.pathname)){e.respondWith(caches.open(V).then(function(c){return c.match(r).then(function(m){return m||fetch(r).then(function(n){if(n.ok)c.put(r,n.clone());return n})})}));return}
  e.respondWith(fetch(r).then(function(n){if(n.ok){var cp=n.clone();caches.open(V).then(function(c){c.put(r,cp)})}return n}).catch(function(){return caches.match(r)}))});
