// Vercel Serverless Function: принимает заявку с сайта и шлёт её в Telegram-группу.
// Секреты задаются в Vercel → Project → Settings → Environment Variables (в коде их нет):
//   BOT_TOKEN  — токен бота от @BotFather            (обязательно)
//   CHAT_ID    — id группы, например -1001234567890  (обязательно)
//   THREAD_ID  — id темы в группе с Topics            (необязательно)
//   PIXEL_ID, CAPI_TOKEN — Meta Conversions API       (необязательно)
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

async function sendCapi(d, ip, ua) {
  if (!process.env.PIXEL_ID || !process.env.CAPI_TOKEN) return;
  const user = { ph: [sha(d.phone.replace(/\D/g, ""))], fn: [sha(d.name.toLowerCase())], country: [sha("uz")] };
  if (ip) user.client_ip_address = ip;
  if (ua) user.client_user_agent = ua;
  if (d.fbp) user.fbp = d.fbp;
  if (d.fbc) user.fbc = d.fbc;
  try {
    await fetch(`https://graph.facebook.com/v19.0/${process.env.PIXEL_ID}/events?access_token=${process.env.CAPI_TOKEN}`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [{ event_name: "Lead", event_time: Math.floor(Date.now() / 1000), event_id: d.event_id, action_source: "website", event_source_url: d.page, user_data: user }] }),
    });
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

  const name = String(d.name || "").trim().slice(0, 60);
  const digits = String(d.phone || "").replace(/\D/g, "");
  if (name.length < 2 || !/^998\d{9}$/.test(digits) || !REGION[d.region]) return res.status(422).json({ ok: false, error: "invalid" });
  d.name = name; d.phone = "+" + digits;

  const utm = d.utm && typeof d.utm === "object" ? d.utm : {};
  const utmLine = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .filter((k) => utm[k]).map((k) => `${k.replace("utm_", "")}: ${esc(String(utm[k]).slice(0, 80))}`).join(" | ");
  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" });

  const lines = [
    "🔥 <b>Новая заявка — Isroil Roboclean Pro</b>",
    "",
    `👤 <b>Имя:</b> ${esc(name)}`,
    `📞 <b>Телефон:</b> ${esc(d.phone)}`,
    `📍 <b>Регион:</b> ${REGION[d.region]}${d.district ? ", " + esc(String(d.district).slice(0, 60)) : ""}`,
  ];
  if (Array.isArray(d.home) && d.home.length) lines.push(`🏠 <b>Дома:</b> ${esc(d.home.slice(0, 6).join(", ").slice(0, 200))}`);
  if (d.time) lines.push(`⏰ <b>Удобно звонить:</b> ${esc(String(d.time).slice(0, 20))}`);
  lines.push("", `🌐 Язык: ${d.lang === "ru" ? "RU" : "UZ"} · Кнопка: ${esc(String(d.source || "-").slice(0, 30))}`);
  if (utmLine) lines.push(`📣 ${utmLine}`);
  lines.push(`🕒 ${time}`);

  const ok = await sendTelegram(lines.join("\n"));
  if (!ok) return res.status(502).json({ ok: false, error: "telegram" });

  await sendCapi(d, (req.headers["x-forwarded-for"] || "").split(",")[0].trim(), d.ua);
  return res.status(200).json({ ok: true });
};
