// إشعارات الطلبات الجديدة لصاحب المعرض. تشتغل كل 5 دقايق تقريباً من GitHub Actions.
// الإعداد كله في السرّ PUSH_CFG (ينحط من التطبيق: الإدارة ← 🔔 إشعارات الطلبات).
// السجل علني (المستودع عام)، فما نطبع أي اسم أو رقم — بس أعداد.
import fs from "node:fs";
import webpush from "web-push";

const STATE = "push-state.json";
const KEY = "AIzaSyAXF0CKuXOk2Pm8aqB_bfYe4K1ouiUtquE";
const FS = "https://firestore.googleapis.com/v1/projects/samariyadh-cars/databases/(default)/documents";

let cfg = null;
try { cfg = JSON.parse(process.env.PUSH_CFG || "null"); } catch { cfg = null; }
if (!cfg || !cfg.sub || !cfg.vpriv || !cfg.rt) { console.log("not configured yet"); process.exit(0); }

let st = { seen: [], cfgAt: 0 };
try { st = Object.assign(st, JSON.parse(fs.readFileSync(STATE, "utf8"))); } catch {}

webpush.setVapidDetails("https://samariyadh-cars.github.io/sama-riyadh/", cfg.vpub, cfg.vpriv);
async function send(p) {
  try { await webpush.sendNotification(cfg.sub, JSON.stringify(p), { TTL: 6 * 3600, urgency: "high" }); console.log("push sent"); return true; }
  catch (e) { console.log("push failed", e.statusCode || e.message); return false; }
}

const test = process.env.TEST === "1";
const fresh = st.cfgAt !== cfg.at; // تفعيل جديد: لا ترسل الطلبات القديمة كلها، بس سجّلها
if (test) await send({ t: "✅ الإشعارات شغّالة", b: "بيوصلك إشعار هنا مع كل طلب جديد من التطبيق أو الموقع", n: 0 });

const tr = await fetch("https://securetoken.googleapis.com/v1/token?key=" + KEY, {
  method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "grant_type=refresh_token&refresh_token=" + encodeURIComponent(cfg.rt),
}).then(r => r.json()).catch(() => ({}));
if (!tr.id_token) { console.log("auth failed"); process.exit(0); }

const q = await fetch(FS + ":runQuery", {
  method: "POST", headers: { Authorization: "Bearer " + tr.id_token, "Content-Type": "application/json" },
  body: JSON.stringify({ structuredQuery: {
    from: [{ collectionId: "leads" }],
    where: { fieldFilter: { field: { fieldPath: "kind" }, op: "EQUAL", value: { stringValue: "lead" } } },
    select: { fields: ["name", "car", "pay", "src", "t"].map(f => ({ fieldPath: f })) },
    limit: 500,
  } }),
}).then(r => r.json()).catch(() => null);
if (!Array.isArray(q)) { console.log("query failed"); process.exit(0); }

const val = v => v ? (v.stringValue ?? v.integerValue ?? v.doubleValue ?? "") : "";
const rows = q.filter(x => x.document).map(x => {
  const f = x.document.fields || {};
  return { id: x.document.name.split("/").pop(), name: val(f.name), car: val(f.car), pay: val(f.pay), src: val(f.src), t: +val(f.t) || 0 };
});
const ids = rows.map(r => r.id);
const fresh_ = rows.filter(r => !st.seen.includes(r.id)).sort((a, b) => b.t - a.t);
console.log("pending", rows.length, "new", fresh_.length, fresh ? "(first run after setup)" : "");

if (fresh_.length && !fresh) {
  const a = fresh_[0];
  const kind = /ينتظر وصول/.test(a.src) ? "ينتظر وصول" : /غير موجودة/.test(a.src) ? "يطلب سيارة" : a.pay || "طلب";
  const line = [a.name || "عميل", a.car, kind && "(" + kind + ")"].filter(Boolean).join(" — ");
  await send({
    t: fresh_.length > 1 ? "🔔 " + fresh_.length + " طلبات جديدة" : "🔔 طلب جديد",
    b: (fresh_.length > 1 ? "آخرها: " : "") + line,
    n: rows.length,
  });
}
fs.writeFileSync(STATE, JSON.stringify({ seen: ids, cfgAt: cfg.at }));
