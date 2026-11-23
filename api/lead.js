// Vercel Serverless Function: принимает заявку с сайта и шлёт её в Telegram-группу.
// Секреты задаются в Vercel → Project → Settings → Environment Variables (в коде их нет):
//   BOT_TOKEN  — токен бота от @BotFather            (обязательно)
//   CHAT_ID    — id группы, например -1001234567890  (обязательно)
//   THREAD_ID  — id темы в группе с Topics            (необязательно)
//   PIXEL_ID, CAPI_TOKEN — Meta Conversions API       (необязательно)
//   TEST_EVENT_CODE      — тестовый код Meta, только на время проверки
const crypto = require("crypto");

const REGION = { city: "Toshkent shahri", oblast: "Toshkent viloyati" };
const esc = (s) => String(s == null ? "" : s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const sha = (v) => crypto.createHash("sha256").update(String(v)).digest("hex");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function sendTelegram(text) {
  const body = { chat_id: process.env.CHAT_ID, text, parse_mode: "HTML", disable_web_page_preview: true };
  if (process.env.THREAD_ID) body.message_thread_id = Number(process.env.THREAD_ID);
  let last = "";
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      });
      if (r.ok) return true;
      last = await r.text();
    } catch (e) { last = String(e); }
    await sleep(400 * (i + 1));
  }
  console.error("Telegram error:", last.replace(process.env.BOT_TOKEN || "-", "***"));
  return false;
}

// TEST_EVENT_CODE (необязательно) — код из Events Manager → «Тестовые события».
// Пока он задан, события видны только во вкладке тестов. После проверки удалите переменную.
async function sendCapi(d, ip, ua) {
  if (!process.env.PIXEL_ID || !process.env.CAPI_TOKEN) {
    console.warn("CAPI skipped: PIXEL_ID / CAPI_TOKEN не заданы в Vercel");
    return;
  }
  if (!d.event_id) console.warn("CAPI: нет event_id от сайта — дедупликация с пикселем не сработает");

  const user = {
    ph: [sha(d.phone.replace(/\D/g, ""))],
    country: [sha("uz")],
    external_id: [sha(d.phone.replace(/\D/g, ""))],
  };
  if (d.name && d.name !== "—") user.fn = [sha(d.name.trim().toLowerCase())];
  if (ip) user.client_ip_address = ip;
  if (ua) user.client_user_agent = String(ua).slice(0, 500);
  if (d.fbp) user.fbp = String(d.fbp);
  // _fbc нет в cookie, но человек пришёл по рекламе с fbclid — собираем fbc сами
  const fbclid = d.utm && d.utm.fbclid;
  if (d.fbc) user.fbc = String(d.fbc);
  else if (fbclid) user.fbc = `fb.1.${Date.now()}.${String(fbclid).slice(0, 500)}`;

  const event = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_source_url: d.page,
    user_data: user,
  };
  if (d.event_id) event.event_id = String(d.event_id);

  const payload = { data: [event] };
  if (process.env.TEST_EVENT_CODE) payload.test_event_code = process.env.TEST_EVENT_CODE;

  try {
    const r = await fetch(`https://graph.facebook.com/v23.0/${process.env.PIXEL_ID}/events?access_token=${process.env.CAPI_TOKEN}`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const txt = (await r.text()).replace(process.env.CAPI_TOKEN, "***");
    if (!r.ok) console.error("CAPI HTTP", r.status, txt);
    else console.log("CAPI ok", event.event_id || "-", txt);
  } catch (e) { console.error("CAPI error", String(e)); }
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) return res.status(500).json({ ok: false, error: "not configured" });

  let d = req.body;
  if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { d = null; } }
  if (!d || typeof d !== "object") return res.status(400).json({ ok: false, error: "bad body" });

  if (d.website) return res.status(200).json({ ok: true }); // honeypot: ботам молча «успех»

  // Шаг 2 формы: необязательные уточнения к уже принятой заявке
  if (d.type === "extra") {
    const ph = String(d.phone || "").replace(/\D/g, "");
    if (!/^998\d{9}$/.test(ph)) return res.status(422).json({ ok: false, error: "invalid" });
    const hasHome = Array.isArray(d.home) && d.home.length;
    if (!d.district && !d.time && !hasHome) return res.status(200).json({ ok: true });
    const rows = ["➕ <b>Уточнения к заявке</b>", `📞 +${ph}`];
    if (REGION[d.region]) rows.push(`📍 ${REGION[d.region]}${d.district ? ", " + esc(String(d.district).slice(0, 60)) : ""}`);
    if (hasHome) rows.push(`🏠 Дома: ${esc(d.home.slice(0, 6).join(", ").slice(0, 200))}`);
    if (d.time) rows.push(`⏰ Удобно звонить: ${esc(String(d.time).slice(0, 40))}`);
    await sendTelegram(rows.join("\n"));
    return res.status(200).json({ ok: true });
  }

  const name = String(d.name || "").trim().slice(0, 60);
  const digits = String(d.phone || "").replace(/\D/g, "");
  if ((name && name.length < 2) || !/^998\d{9}$/.test(digits) || !REGION[d.region]) return res.status(422).json({ ok: false, error: "invalid" });
  d.name = name || "—"; d.phone = "+" + digits;

  const utm = d.utm && typeof d.utm === "object" ? d.utm : {};
  const utmLine = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .filter((k) => utm[k]).map((k) => `${k.replace("utm_", "")}: ${esc(String(utm[k]).slice(0, 80))}`).join(" | ");
  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" });

  const lines = [
    "🔥 <b>Новая заявка — Isroil Roboclean Pro</b>",
    "",
    `👤 <b>Имя:</b> ${esc(d.name)}`,
    `📞 <b>Телефон:</b> ${esc(d.phone)}`,
    `📍 <b>Регион:</b> ${REGION[d.region]}${d.district ? ", " + esc(String(d.district).slice(0, 60)) : ""}`,
  ];
  if (Array.isArray(d.home) && d.home.length) lines.push(`🏠 <b>Дома:</b> ${esc(d.home.slice(0, 6).join(", ").slice(0, 200))}`);
  if (d.time) lines.push(`⏰ <b>Удобно звонить:</b> ${esc(String(d.time).slice(0, 40))}`);
  lines.push("", `🌐 Язык: ${d.lang === "ru" ? "RU" : "UZ"} · Кнопка: ${esc(String(d.source || "-").slice(0, 30))}`);
  if (utmLine) lines.push(`📣 ${utmLine}`);
  lines.push(`🕒 ${time}`);

  const ok = await sendTelegram(lines.join("\n"));
  if (!ok) return res.status(502).json({ ok: false, error: "telegram" });

  await sendCapi(d, (req.headers["x-forwarded-for"] || "").split(",")[0].trim(), d.ua || req.headers["user-agent"]);
  return res.status(200).json({ ok: true });
};
