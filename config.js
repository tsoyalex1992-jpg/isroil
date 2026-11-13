// ====== НАСТРОЙКИ САЙТА (заполнить после деплоя) ======
window.SITE_CONFIG = {
  // Адрес Cloudflare Worker, который пересылает заявки в Telegram (см. README-запуск.md)
  // Пример: "https://aura-lead.ВАШ-АККАУНТ.workers.dev"
  LEAD_ENDPOINT: "/api/lead",

  // Meta Pixel ID (из Events Manager). Пусто = пиксель не подключается.
  PIXEL_ID: "1517884383500468",

  // Язык по умолчанию: "uz" или "ru"
  DEFAULT_LANG: "uz"
};
