// ====== НАСТРОЙКИ САЙТА (заполнить после деплоя) ======
window.SITE_CONFIG = {
  // Адрес Cloudflare Worker, который пересылает заявки в Telegram (см. README-запуск.md)
  // Пример: "https://aura-lead.ВАШ-АККАУНТ.workers.dev"
  LEAD_ENDPOINT: "/api/lead",

  // Meta Pixel ID (из Events Manager). Пусто = пиксель не подключается.
  PIXEL_ID: "1517884383500468",

  // Доказательства: фото офиса, склада, бейджа Aura, договора дилера, гарантийного талона.
  // Положите файлы в assets/img/proof/ и впишите их сюда. Пока массив пуст, блок на сайте скрыт.
  // Пример: { src: "assets/img/proof/office.jpg", uz: "Bizning ofis", ru: "Наш офис" }
  PROOF: [
    { video: "assets/proof/office.mp4", poster: "assets/proof/office-poster.jpg", uz: "Bizning ofis", ru: "Наш офис" }
  ],

  // Язык по умолчанию: "uz" или "ru"
  DEFAULT_LANG: "uz"
};
