(function () {
  "use strict";
  var CFG = window.SITE_CONFIG || {};

  /* ---------- Русский перевод (узбекский текст берётся прямо из HTML) ---------- */
  var RU = {
    meta_title: "Isroil Roboclean Pro — бесплатная демонстрация | Ташкент",
    dl_h: "Мы — официальный дилер компании Aura",
    dl_p: "Получаем аппараты напрямую от компании, поэтому цены на уровне самой компании — самые выгодные.",
    dl1_h: "3 года", dl1_p: "полная гарантия", dl2_h: "10 лет", dl2_p: "обслуживание", dl3_h: "Официально", dl3_p: "от дилера, оригинальный аппарат",
    rv_h: "Что говорят клиенты",
    call_or: "Или позвоните сейчас:", call_lbl: "Позвоните менеджеру:", call_urgent: "Если срочно, позвоните:",
    pill_call: "Позвонить", pill_call2: "Позвоню сам", x_h: "Чтобы менеджер подготовился (необязательно)", x_send: "Отправить", x_ok: "Спасибо! Менеджер учтёт ваши ответы и скоро свяжется с вами.", f_r1: "Без обязательств", f_r2: "Без спама", f_r3: "Бесплатно",
    ft_dealer: "Официальный дилер компании Aura · Ташкент",
    cta_short: "Узнать цену", cta_main: "Узнать цену", skip: "Перейти к содержимому",
    hero_badge: "Ташкент и Ташкентская область · Бесплатная демонстрация",
    hero_h1: "Пылесос, который очищает воздух через воду — бесплатно покажем в работе",
    hero_sub: "Roboclean Pro: водяной фильтр, сепаратор и HEPA в одном аппарате. Пыль остаётся не в мешке, а в воде.",
    hero_b1: "Очистка воздуха через воду", hero_b2: "Помогает уменьшить пыль и аллергены в доме", hero_b3: "Ионизация воздуха во время работы*",
    hero_note: "Бесплатно · Без обязательств · Менеджер скоро перезвонит",
    chip1: "Водяной фильтр", chip3: "Ионизация*",
    tr1: "Полная гарантия 3 года", tr2: "Ташкент и область", tr3: "Покупать не обязательно", tr4: "Обслуживание 10 лет",
    pr_h: "Вы убираете пыль или просто перемещаете её?",
    pr_lead: "Обычный пылесос собирает крупный мусор, но самые мелкие частицы — пыль, пыльца, споры плесени — могут вернуться в воздух.",
    pr1_h: "Мелкая пыль возвращается в воздух", pr1_p: "Вы закончили уборку, а пыль продолжает висеть в комнате.",
    pr2_h: "Мешок и контейнер — склад пыли", pr2_p: "При опустошении пыль снова поднимается в воздух, а внутри накапливаются пыль и микробы.",
    pr3_h: "Мощность падает", pr3_p: "По мере заполнения мешка сила всасывания обычного пылесоса снижается.",
    pr_answer: "Пусть ребёнок спокойно играет на ковре — пыль оседает в воде, а не в воздухе.",
    pr_answer2: "Пусть те, кто чувствителен к пыли, чувствуют себя дома легко, а вы — спокойно.",
    vd_h: "Убедитесь своими глазами",
    vd_lead: "Реальные тесты, без монтажа и спецэффектов. На демонстрации покажем такой же тест у вас.",
    v3_h: "Тест с дымом и пылью", v3_p: "Как очищается воздух в стеклянном боксе",
    v1_h: "Шерсть и мусор на ковре", v1_p: "Глубокая уборка в деле",
    v2_h: "Пылесос Roboclean Pro", v2_p: "Устройство и возможности аппарата",
    hw_h: "Как это работает", hw_lead: "Три шага — и воздух в комнате чище.",
    hw1_h: "Пыль засасывается", hw1_p: "Аппарат затягивает пыль вместе с потоком воздуха.",
    hw2_h: "Сепаратор + вода", hw2_p: "Быстро вращающийся сепаратор направляет пыль в воду — пыль остаётся в воде.",
    hw3_h: "HEPA и чистый воздух", hw3_p: "Воздух, прошедший через HEPA-фильтр, возвращается в комнату.",
    hw_extra: "Дополнительно: ионизация воздуха* во время работы и возможность добавить в воду эфирное масло для приятного аромата.",
    bn_h: "Почему именно Roboclean Pro",
    bn1_h: "Водяной фильтр", bn1_p: "Ни мешка, ни контейнера для пыли. После уборки просто выливаете воду — пыль не летает в воздухе.",
    bn2_h: "Сепаратор + HEPA", bn2_p: "Помогает задерживать пыльцу, споры плесени, бактерии и жирную пыль.",
    bn3_h: "Постоянная сила всасывания", bn3_p: "Мощность не падает по мере заполнения мешка — мешка просто нет.",
    bn4_h: "Ионизация воздуха*", bn4_p: "Во время работы ионизирует воздух — в комнате ощущается лёгкость и свежесть.",
    bn5_h: "Ароматный воздух", bn5_p: "Добавьте в воду эфирное масло — и дом наполнится приятным запахом.",
    bn6_h: "Всё в одном аппарате", bn6_p: "Ковры, мягкая мебель, матрасы, подушки, игрушки, гладкие полы и сбор жидкостей.",
    foot_star: "* По данным производителя.",
    cm_h: "Обычный пылесос и Roboclean Pro", cm_c1: "Обычный пылесос",
    cm_r1: "Где остаётся пыль", cm_a1: "В мешке или контейнере", cm_b1: "В воде",
    cm_r2: "Мелкая пыль", cm_a2: "Может вернуться в воздух", cm_b2: "Задерживается сепаратором и HEPA",
    cm_r3: "Сила всасывания", cm_a3: "Падает по мере заполнения", cm_b3: "Постоянная",
    cm_r4: "Очистка", cm_a4: "Опустошение пыльного мешка", cm_b4: "Слить воду",
    cm_r5: "Ионизация и аромат", cm_a5: "Нет", cm_b5: "Есть*",
    fw_h: "Для кого",
    fw1_h: "Семьи с маленькими детьми", fw1_p: "Ребёнок играет на полу — важно, чтобы пол и ковёр были чистыми.",
    fw2_h: "Семьи, чувствительные к пыли", fw2_p: "Помогает уменьшить в доме пыль и пыльцу.",
    fw3_h: "Владельцы питомцев", fw3_p: "Шерсть и запах — глубокая очистка ковров и мебели.",
    fw4_h: "Ковры и мягкая мебель", fw4_p: "Для ковров, диванов, матрасов и подушек.",
    fw5_h: "Пыльные районы", fw5_p: "Для тех, кто живёт рядом со стройкой или дорогой.",
    dm_h: "Как проходит демонстрация",
    dm1_h: "Оставляете номер", dm1_p: "Указываете телефон и район — 15 секунд.",
    dm2_h: "Менеджер перезванивает", dm2_p: "Согласует с вами удобное время и адрес.",
    dm3_h: "Специалист показывает аппарат", dm3_p: "Вы своими глазами видите тесты и получаете ответы на вопросы.",
    dm4_h: "Решение за вами", dm4_p: "Покупать не обязательно. Демонстрация бесплатная.",
    fq_h: "Частые вопросы",
    q1: "Демонстрация правда бесплатная?", a1: "Да, полностью бесплатно и без каких-либо обязательств.",
    q2: "Сколько это стоит?", a2: "Менеджер перезвонит, объяснит цену и условия оплаты и согласует удобное время, чтобы вы увидели аппарат вживую.",
    q3: "Сколько длится демонстрация?", a3: "Обычно около 20–30 минут.",
    q4: "В каких районах вы работаете?", a4: "В городе Ташкенте и Ташкентской области.",
    q5: "Сложно ухаживать?", a5: "После уборки достаточно вылить воду и сполоснуть ёмкость.",
    q6: "Есть гарантия?", a6: "Да: полная гарантия 3 года и обслуживание в течение 10 лет.",
    q7: "Он лечит аллергию?", a7: "Нет, пылесос не является лекарством. Он помогает уменьшить пыль и аллергены в доме. По вопросам здоровья обращайтесь к врачу.",
    fn_h: "Увидьте разницу сами — демонстрация бесплатная",
    fn_p: "Оставьте номер: менеджер перезвонит и согласует удобное время.",
    legal: "Отправленные данные используются только для связи с вами.",
    f_title: "Узнайте цену и условия",
    f_sub: "Оставьте номер — менеджер перезвонит и объяснит цену и условия. Это 15 секунд.",
    f_name: "Ваше имя <i>(необязательно)</i>", f_name_ph: "Например, Дилноза", f_err_name: "Введите имя (минимум 2 буквы)",
    f_phone: "Ваш номер телефона", f_err_phone: "Введите номер полностью: 9 цифр, например 90 123 45 67",
    f_region: "Где вы живёте?", f_city: "г. Ташкент", f_obl: "Ташкентская область", f_err_region: "Выберите город или область",
    f_district: "Район / город",
    f_home: "Что есть у вас дома?",
    f_h1: "Маленькие дети", f_h2: "Чувствительность к пыли", f_h3: "Домашние животные", f_h4: "Ковры, мягкая мебель",
    f_time: "Когда удобно позвонить?",
    f_send: "Пусть менеджер перезвонит", f_err_send: "Заявка не отправлена. Проверьте интернет и попробуйте ещё раз.",
    f_consent: "Нажимая «Пусть менеджер перезвонит», вы соглашаетесь на обработку ваших данных.",
    t_h: "Спасибо!", t_p: "Заявка принята. Менеджер скоро свяжется с вами.", t_close: "Закрыть"
  };

  var DISTRICTS = {
    city: [
      ["Bektemir", "Бектемир"], ["Chilonzor", "Чиланзар"], ["Mirobod", "Миробод"], ["Mirzo Ulug‘bek", "Мирзо-Улугбек"],
      ["Olmazor", "Алмазар"], ["Sergeli", "Сергели"], ["Shayxontohur", "Шайхантахур"], ["Uchtepa", "Учтепа"],
      ["Yakkasaroy", "Яккасарай"], ["Yashnobod", "Яшнабад"], ["Yunusobod", "Юнусабад"], ["Yangihayot", "Янгихаёт"]
    ],
    oblast: [
      ["Chirchiq", "Чирчик"], ["Yangiyo‘l", "Янгиюль"], ["Nurafshon", "Нурафшон"], ["Olmaliq", "Алмалык"], ["Angren", "Ангрен"],
      ["Bekobod", "Бекабад"], ["Ohangaron", "Ахангаран"], ["Zangiota", "Зангиата"], ["Qibray", "Кибрай"], ["Toshkent tumani", "Ташкентский район"],
      ["Piskent", "Пскент"], ["Parkent", "Паркент"], ["Chinoz", "Чиназ"], ["Oqqo‘rg‘on", "Аккурган"], ["Bo‘stonliq", "Бостанлык"],
      ["Bo‘ka", "Бука"], ["Quyi Chirchiq", "Куйичирчик"], ["O‘rtachirchiq", "Уртачирчик"], ["Yuqori Chirchiq", "Юкоричирчик"]
    ]
  };
  /* Русский перевод: позиционирование «продаём менеджера» */
  Object.assign(RU, {
    meta_title: "Isroil Roboclean Pro — официальный дилер Aura | Ташкент",
    hero_badge: "Официальный дилер Aura · Ташкент и область",
    hero_h1: "Roboclean везде одинаковый. А я — на связи 3 года.",
    hero_sub: "Цена у всех дилеров одна — разница в том, у кого вы покупаете. Купив у меня, вы 3 года звоните прямо мне, в любое время.",
    hero_b1: "7 лет с Roboclean — знаю аппарат изнутри",
    hero_b2: "Демонстрация вечером и в выходные",
    hero_b3: "Рассрочка без процентов (0%) на 8, 16 или 24 месяца",
    hero_note: "Демонстрация бесплатная, без обязательств · Удобное время выбираете вы",
    cta_short: "Оставить номер", cta_main: "Оставьте номер",
    tr1: "7 лет — с Roboclean", tr2: "3 года — личный сервис", tr3: "0% — 8 / 16 / 24 мес.", tr4: "Демонстрация — каждый день",
    ab_h: "Здравствуйте, я Исроил",
    ab_p: "Уже 7 лет работаю в официальном дилере Aura Roboclean. Аппарат везде одинаковый — разница в том, у кого вы покупаете.",
    ab1: "3 года вы звоните напрямую мне, в любое время — это не колл-центр, а я сам",
    ab2: "Демонстрация в удобное для вас время: вечером и в выходные",
    ab3: "Посмотрите: понравится — купите, нет — нет",
    q3_h: "Прежде чем выбрать дилера, задайте 3 вопроса",
    q3_lead: "Roboclean везде одинаковый. А вот ответы на вопросы — нет. Спросите и у других дилеров.",
    qa1_q: "Если аппарат сломается или возникнет вопрос — кому звонить?", qa1_a: "Мне. Все 3 года, в любое время.",
    qa2_q: "Когда будет демонстрация?", qa2_a: "В удобное вам время — даже в воскресенье.",
    qa3_q: "Есть ли проценты при рассрочке?", qa3_a: "Нет. На 8, 16 или 24 месяца — без процентов (0%).",
    dl_h: "Аппарат у всех дилеров один. Цена тоже.",
    dl_p: "Цену устанавливает компания Aura, и она одинакова у всех официальных дилеров. Поэтому разница — в том, у кого вы покупаете: кто будет помогать вам все 3 года.",
    dl1_h: "7 лет", dl1_p: "с Roboclean", dl2_h: "3 года", dl2_p: "личный сервис", dl3_h: "0%", dl3_p: "8 / 16 / 24 мес.",
    dm_h: "Как проходит демонстрация",
    dm1_h: "Вы оставляете номер", dm1_p: "Указываете телефон и район — 15 секунд.",
    dm2_h: "Я сам перезваниваю", dm2_p: "Согласуем удобное время: в будни, вечером или в выходной.",
    dm3_h: "Приезжаю к вам домой", dm3_p: "Показываю аппарат на вашем ковре — всё увидите своими глазами.",
    dm4_h: "Решение — за вами", dm4_p: "Понравится — купите, нет — нет. Демонстрация бесплатная.",
    vd_lead: "Реальные тесты, без монтажа и спецэффектов. На демонстрации покажу такой же тест у вас дома.",
    q1: "Демонстрация правда бесплатная?", q3: "Сколько длится демонстрация?",
    a2: "Цену устанавливает компания Aura, она одинакова у всех официальных дилеров. Сначала вы увидите аппарат у себя дома, потом вместе обсудим цену и условия оплаты.",
    a6: "Да: полная гарантия 3 года, обслуживание 10 лет. И все 3 года можно звонить напрямую мне, в любое время.",
    q8: "Есть ли рассрочка?", a8: "Да: на 8, 16 или 24 месяца без процентов (0%). Условия объясню на демонстрации.",
    q9: "Когда и где проходит демонстрация?", a9: "В удобное вам время: в будни, вечером или в выходной. Приезжаю к вам домой по Ташкенту и Ташкентской области.",
    f_title: "Оставьте номер",
    f_sub: "Я сам перезвоню, и мы согласуем удобное время демонстрации. Бесплатно и без обязательств.",
    f_send: "Пусть Исроил перезвонит",
    f_consent: "Нажимая «Пусть Исроил перезвонит», вы соглашаетесь на обработку ваших данных.",
    t_p: "Спасибо! С 11:00 до 19:00 я сам вам перезвоню. Если срочно — напишите в Telegram или позвоните.",
    x_h: "Чтобы я приехал подготовленным (необязательно)",
    f_t1: "Будни — днём", f_t2: "Будни — вечером", f_t3: "Выходные"
  });
  /* Русский перевод: «менеджер Aura, цена и рассрочка по телефону» */
  Object.assign(RU, {
    meta_title: "Isroil Roboclean Pro — менеджер компании Aura | Ташкент",
    hero_badge: "Менеджер компании Aura · Ташкент",
    hero_h1: "Roboclean везде одинаковый. А я на связи 3 года.",
    hero_sub: "Я Исроил, менеджер компании Aura. Отдаю аппарат по цене компании, без наценки: 3 года гарантии и сервиса, рассрочка 0%.",
    hero_b1: "Цену называю сам: цена компании, без наценки",
    hero_b2: "3 года гарантии, ремонта и сервиса: звоните напрямую мне",
    hero_b3: "Рассрочка без процентов на 8, 16 или 24 месяца",
    hero_note: "Менеджер перезвонит и назовёт цену и условия рассрочки. Без обязательств.",
    cta_main: "Узнать цену и рассрочку", cta_short: "Узнать цену",
    tr1: "Менеджер компании Aura", tr2: "Цена компании, без наценки", tr3: "3 года гарантии и сервиса", tr4: "Рассрочка 0% · 8/16/24 мес.",
    ab_h: "Здравствуйте, я Исроил",
    ab_p: "Я менеджер компании Aura, 7 лет работаю с Roboclean. Аппарат оригинальный, цена установлена самой компанией.",
    ab1: "Цену и условия рассрочки называю сам, по телефону",
    ab2: "3 года по гарантии, ремонту и любым вопросам звоните напрямую мне",
    ab3: "Если захотите, покажу аппарат у вас дома, на вашем ковре",
    pf_h: "Наш офис",
    pf_lead: "Посмотрите наш офис на видео.",
    q3_h: "Перед покупкой Roboclean проверьте 3 вещи",
    q3_lead: "Roboclean продают разные продавцы по разным ценам. Оригинальный аппарат и сервис отличают три вопроса.",
    qa1_q: "Аппарат оригинальный, есть гарантийный документ?", qa1_a: "Да. Аппарат от компании Aura, с полной гарантией 3 года.",
    qa2_q: "Если сломается или появится вопрос, кому звонить?", qa2_a: "Мне. Ремонт и сервис 3 года, в любое время.",
    qa3_q: "Есть ли наценка на цену?", qa3_a: "Нет. Цена установлена самой компанией. Рассрочка на 8, 16 или 24 месяца без процентов (0%).",
    dl_h: "Цена такая же, как в компании",
    dl_p: "Я менеджер компании Aura. Аппарат отдаётся по цене компании, без наценки. Цену и условия рассрочки называю по телефону.",
    dl1_h: "3 года", dl1_p: "гарантия и ремонт", dl2_h: "10 лет", dl2_p: "сервис", dl3_h: "0%", dl3_p: "8 / 16 / 24 мес.",
    dm_h: "Что будет после того, как вы оставите номер",
    dm1_h: "Вы оставляете номер", dm1_p: "Указываете телефон и район: 15 секунд.",
    dm2_h: "Я сам перезваниваю", dm2_p: "Называю цену, условия рассрочки и гарантии. Отвечаю на ваши вопросы.",
    dm3_h: "Если хотите, демонстрация", dm3_p: "Покажу аппарат у вас дома, на вашем ковре. В удобное время, в выходной тоже.",
    dm4_h: "Решение за вами", dm4_p: "Понравится, купите, нет, не купите. Демонстрация бесплатная.",
    q10: "Как понять, что аппарат оригинальный?", a10: "Аппарат приходит от компании Aura, с гарантийным документом на 3 года. Документы компании покажу по телефону и при встрече.",
    a2: "Цену менеджер называет по телефону. Она установлена самой компанией, без наценки. Условия рассрочки объясняет в том же разговоре.",
    f_title: "Узнайте цену и условия",
    f_sub: "Оставьте номер. Я сам перезвоню и назову цену, условия рассрочки и гарантии.",
    f_send: "Узнать цену",
    f_consent: "Нажимая «Узнать цену», вы соглашаетесь на обработку ваших данных.",
    t_p: "Спасибо! С 11:00 до 19:00 я сам перезвоню и назову цену и условия. Если срочно, напишите в Telegram или позвоните.",
    bn4_h: "Результат у вас перед глазами", bn4_p: "После уборки посмотрите на воду в ёмкости: пыль остаётся в ней.",
    hw_extra: "Дополнительно: добавьте в воду эфирное масло, и в комнате появится приятный запах.",
    cm_r5: "Приятный аромат", cm_b5: "Есть",
    ft_dealer: "Менеджер компании Aura · Ташкент"
  });
  /* Русский перевод: заголовок «не переплачивайте», кнопка «консультация», без упоминаний цены по телефону */
  Object.assign(RU, {
    hero_h1: "Не переплачивайте за Roboclean",
    hero_sub: "Я Исроил, менеджер компании Aura. Аппарат вы получаете напрямую от компании, цена без наценки. 3 года гарантии и ремонта тоже со мной.",
    hero_b1: "Цена установлена самой компанией, наценки нет",
    hero_b3: "Рассрочка без процентов на 8, 16 или 24 месяца",
    hero_note: "Исроил сам перезвонит. Бесплатно и без обязательств.",
    cta_main: "Получить бесплатную консультацию", cta_short: "Консультация",
    tr2: "Цена без наценки", tr4: "Рассрочка без процентов",
    ab1: "Аппарат вы получаете напрямую от компании, наценка к цене не добавляется",
    qa3_a: "Нет. Цена установлена самой компанией. Рассрочка на 8, 16 или 24 месяца без процентов (0%).",
    dl_p: "Я менеджер компании Aura. Аппарат отдаётся по цене компании, без наценки.",
    dm2_p: "Объясняю условия гарантии и сервиса, рассказываю о вариантах оплаты. Отвечаю на ваши вопросы.",
    a2: "Цена установлена самой компанией, наценка не добавляется. Точную цену называю по телефону сам.",
    q8: "Есть ли рассрочка?", a8: "Да: на 8, 16 или 24 месяца без процентов (0%). Условия объясню по телефону.",
    f_title: "Получите бесплатную консультацию",
    f_sub: "Оставьте номер. Я сам перезвоню и отвечу на ваши вопросы.",
    f_send: "Получить консультацию",
    f_consent: "Нажимая «Получить консультацию», вы соглашаетесь на обработку ваших данных.",
    t_p: "Спасибо! С 11:00 до 19:00 я сам перезвоню. Если срочно, напишите в Telegram или позвоните."
  });
  /* Русский перевод: кнопка «Узнать цену», пункт про гарантию и сервис */
  Object.assign(RU, {
    hero_b2: "3 года гарантии, 10 лет сервиса",
    ab2: "3 года гарантии, 10 лет сервиса", a6: "Да: полная гарантия 3 года и сервис 10 лет.",
    tr3: "3 года гарантии, 10 лет сервиса",
    cta_main: "Узнать цену", cta_short: "Узнать цену",
    hero_note: "Исроил сам перезвонит и назовёт цену. Бесплатно и без обязательств.",
    f_title: "Узнайте цену",
    f_sub: "Оставьте номер. Я сам перезвоню, назову цену и отвечу на ваши вопросы.",
    f_send: "Узнать цену",
    f_consent: "Нажимая «Узнать цену», вы соглашаетесь на обработку ваших данных.",
    t_p: "Спасибо! С 11:00 до 19:00 я сам перезвоню и назову цену. Если срочно, напишите в Telegram или позвоните."
  });
  /* Русский перевод: блок «Что изменится у вас дома» (эмоциональные выгоды) */
  Object.assign(RU, {
    bn_h: "Что изменится у вас дома",
    bn1_h: "Дома меньше пыли", bn1_p: "Пыль остаётся не в мешке, а в воде. После уборки в комнате лёгкий и чистый воздух.",
    bn2_h: "Меньше аллергенов", bn2_p: "Помогает удерживать пыльцу, споры плесени и мелкую пыль. Спокойный выбор для семьи, чувствительной к пыли.",
    bn3_h: "Дети играют на чистом ковре", bn3_p: "Ковёр, диван, матрас: дети проводят там весь день. Глубокая уборка сохраняет их место чистым.",
    bn4_h: "Аппарат премиум-класса", bn4_p: "Достойная вашего дома техника. Рассчитана на долгие годы службы.",
    bn5_h: "Приятный запах", bn5_p: "Добавьте в воду эфирное масло: после уборки в доме остаётся приятный аромат.",
    bn6_h: "Премиальный сервис", bn6_p: "3 года гарантии и ремонта, 10 лет сервиса. Аппарат будет с вами долгие годы."
  });





  var PLACEHOLDER = { uz: "Tanlang", ru: "Выберите" };

  var lang = "uz";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- i18n ---------- */
  var UZ = {}, UZ_PH = {};
  $$("[data-i18n]").forEach(function (el) { var k = el.dataset.i18n; if (!(k in UZ)) UZ[k] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach(function (el) { UZ_PH[el.dataset.i18nPh] = el.getAttribute("placeholder"); });
  var UZ_TITLE = document.title;

  function setLang(l) {
    lang = l === "ru" ? "ru" : "uz";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) {
      var k = el.dataset.i18n;
      var v = lang === "ru" ? RU[k] : UZ[k];
      if (v != null) el.innerHTML = v;
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var k = el.dataset.i18nPh;
      var v = lang === "ru" ? RU[k] : UZ_PH[k];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.title = lang === "ru" ? RU.meta_title : UZ_TITLE;
    $$(".lang__b").forEach(function (b) { var on = b.dataset.lang === lang; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on); });
    $$(".vid video").forEach(function (v) { var c = v.parentNode.querySelector("figcaption b"); if (c) v.setAttribute("aria-label", c.textContent); });
    $("#m-close").setAttribute("aria-label", lang === "ru" ? "Закрыть" : "Yopish");
    $$("[data-call][aria-label]").forEach(function (a) { a.setAttribute("aria-label", lang === "ru" ? "Позвонить менеджеру" : "Menejerga qo‘ng‘iroq qilish"); });
    fillDistricts();
    renderReviews();
    renderProof();
    try { localStorage.setItem("aura_lang", lang); } catch (e) {}
  }

  /* ---------- Доказательства: фото офиса, склада, бейджа (из config.js → PROOF) ---------- */
  function renderProof() {
    var sec = $("#proof"), grid = $("#proofgrid"); if (!sec || !grid) return;
    var list = (CFG.PROOF || []).filter(function (p) { return p && (p.src || p.video); });
    if (!list.length) { sec.hidden = true; return; }
    grid.innerHTML = "";
    grid.classList.toggle("is-single", list.length === 1);
    list.forEach(function (p) {
      var f = document.createElement("figure"), c = document.createElement("figcaption");
      var cap = (lang === "ru" ? (p.ru || p.uz) : (p.uz || p.ru)) || "";
      var m;
      if (p.video) {
        m = document.createElement("video"); m.src = p.video; m.controls = true; m.playsInline = true; m.preload = "none";
        if (p.poster) m.poster = p.poster; m.setAttribute("aria-label", cap);
        m.addEventListener("play", function () { $$("video").forEach(function (o) { if (o !== m) o.pause(); }); });
      } else {
        m = document.createElement("img"); m.src = p.src; m.loading = "lazy"; m.alt = cap;
      }
      c.textContent = cap;
      f.appendChild(m); if (cap) f.appendChild(c); grid.appendChild(f);
    });
    sec.hidden = false;
  }

  /* ---------- Лента отзывов (только реальные; образцы — по ?demo=1) ---------- */
  function renderReviews() {
    var sec = $("#reviews"), rib = $("#ribbon"); if (!sec || !rib) return;
    var demo = new URLSearchParams(location.search).get("demo") === "1";
    var list = (window.REVIEWS || []).slice(), isDemo = false;
    if (!list.length && demo) { list = (window.REVIEWS_DEMO || []).slice(); isDemo = true; }
    if (!list.length) { sec.hidden = true; return; }
    function card(r) {
      var d = document.createElement("figure"); d.className = "rv";
      var tag = isDemo ? '<span class="rv__tag">' + (lang === "ru" ? "ОБРАЗЕЦ" : "NAMUNA") + "</span>" : "";
      var txt = lang === "ru" ? (r.ru || r.uz) : (r.uz || r.ru);
      var nm = String(r.name || "?");
      d.innerHTML = tag + "<p></p><figcaption class=\"rv__who\"><span class=\"rv__av\"></span><div><b></b><span></span></div></figcaption>";
      d.querySelector("p").textContent = txt;
      d.querySelector(".rv__av").textContent = nm.charAt(0).toUpperCase();
      d.querySelector("b").textContent = nm;
      d.querySelector(".rv__who span:last-child").textContent = r.city || "";
      return d;
    }
    rib.innerHTML = "";
    var rows = list.length > 3 ? 2 : 1, per = Math.ceil(list.length / rows);
    for (var i = 0; i < rows; i++) {
      var part = list.slice(i * per, (i + 1) * per); if (!part.length) part = list;
      while (part.length < 5) part = part.concat(part);           // чтобы лента не «пустела»
      var row = document.createElement("div"); row.className = "ribbon__row" + (i ? " ribbon__row--b" : "");
      row.style.setProperty("--dur", Math.max(30, part.length * 8) + "s");
      part.concat(part).forEach(function (r, k) { var c = card(r); if (k >= part.length) c.setAttribute("aria-hidden", "true"); row.appendChild(c); });
      rib.appendChild(row);
    }
    sec.hidden = false;
  }
  $$(".lang__b").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  var saved = null;
  try { saved = localStorage.getItem("aura_lang"); } catch (e) {}
  var urlLang = new URLSearchParams(location.search).get("lang");
  var start = urlLang || saved || CFG.DEFAULT_LANG || "uz";
  document.documentElement.classList.add("js");
  var modal, form, thanks, sticky, extra;// объявлены до первого setLang
  setLang(start);
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- UTM / источник ---------- */
  var track = {};
  (function () {
    var p = new URLSearchParams(location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach(function (k) {
      if (p.get(k)) track[k] = p.get(k);
    });
    try {
      if (Object.keys(track).length) sessionStorage.setItem("aura_utm", JSON.stringify(track));
      else track = JSON.parse(sessionStorage.getItem("aura_utm") || "{}");
    } catch (e) {}
  })();
  function cookie(n) { var m = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)")); return m ? decodeURIComponent(m[1]) : ""; }

  /* ---------- Meta Pixel ---------- */
  function fbq() { if (window.fbq) window.fbq.apply(null, arguments); }
  if (CFG.PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", CFG.PIXEL_ID); fbq("track", "PageView");
  }

  /* ---------- Модальное окно ---------- */
  modal = $("#modal"); extra = $("#extra-form"); form = $("#lead-form"); thanks = $("#thanks"); sticky = $("#sticky");
  fillDistricts();
  function openModal(src) {
    form.hidden = false; thanks.hidden = true; $("#f-error").hidden = true;
    form.dataset.src = src || "";
    if (!modal.open) modal.showModal();
    document.body.classList.add("lock");
    setTimeout(function () { form.elements.phone.focus({ preventScroll: true }); }, 60);
    fbq("trackCustom", "OpenForm");
  }
  function closeModal() { if (modal.open) modal.close(); }
  modal.addEventListener("close", function () { document.body.classList.remove("lock"); });
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  $("#m-close").addEventListener("click", closeModal);
  $("#t-close").addEventListener("click", closeModal);
  $$(".js-open").forEach(function (b, i) {
    b.addEventListener("click", function () {
      var sec = b.closest("section,header,.sticky");
      openModal(sec ? (sec.className.split(" ")[0] || sec.tagName.toLowerCase()) : "page");
    });
  });

  /* Липкая кнопка на мобильном */
  var topBar = $("#top"), waterBar = $("#water");
  function stick() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    sticky.classList.toggle("is-on", y > window.innerHeight * 0.85 && !modal.open);
    topBar.classList.toggle("is-solid", y > 40);
    waterBar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
  }
  window.addEventListener("scroll", stick, { passive: true }); stick();
  modal.addEventListener("close", stick);

  /* ---------- Hero: пыль втягивается в пылесос и оседает в воде ---------- */
  (function dust() {
    var box = $("#heroMedia"), cv = $("#dust");
    if (!box || !cv || !cv.getContext) return;
    var ctx = cv.getContext("2d");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var IW = 1200, IH = 1600;
    // точки на фото (доли изображения)
    var INTAKE = [0.55, 0.575], VENT = [0.55, 0.43], TANK = { x0: 0.45, x1: 0.65, y0: 0.635, y1: 0.675 };
    var W = 0, H = 0, dpr = 1, geo = {}, parts = [], running = false, vis = true, last = 0;

    function pt(u, v) { return [geo.ox + u * geo.w, geo.oy + v * geo.h]; }
    function resize() {
      var r = box.getBoundingClientRect(); if (!r.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var s = Math.max(W / IW, H / IH);
      geo = { w: IW * s, h: IH * s, ox: (W - IW * s) / 2, oy: (H - IH * s) / 2, s: s };
      var n = Math.max(26, Math.min(64, Math.round(W * H / 14000)));
      while (parts.length < n) parts.push(newDust(true));
      parts.length = n;
    }
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function newDust(anywhere) {
      return { k: "dust", x: rnd(0, W), y: anywhere ? rnd(H * 0.08, H * 0.62) : rnd(H * 0.05, H * 0.4), vx: rnd(-.12, .12), vy: rnd(-.05, .1),
        r: rnd(1.6, 3.8), a: rnd(.6, 1), ph: rnd(0, 6.28), wait: rnd(1.5, 7) * (anywhere ? Math.random() : 1), pull: 0 };
    }
    function toBubble(p) {
      var q = pt(rnd(TANK.x0, TANK.x1), rnd(TANK.y0, TANK.y1));
      p.k = "bub"; p.x = q[0]; p.y = q[1]; p.vx = rnd(-.1, .1); p.vy = rnd(-.35, -.15); p.r = rnd(1.5, 3); p.a = .9; p.life = 0;
    }
    function step(p, dt) {
      if (p.k === "dust") {
        p.wait -= dt;
        if (p.wait > 0) {                       // дрейф по воздуху
          p.ph += dt * 1.2;
          p.x += (p.vx + Math.sin(p.ph) * .12) * dt * 60; p.y += (p.vy + Math.cos(p.ph * .8) * .08) * dt * 60;
          if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        } else {                                // втягивается в аппарат
          var t = pt(INTAKE[0], INTAKE[1]), dx = t[0] - p.x, dy = t[1] - p.y, d = Math.hypot(dx, dy) || 1;
          p.pull = Math.min(1, p.pull + dt * 0.9);
          var sp = (1.2 + p.pull * 5) * dt * 60;
          p.x += dx / d * sp + (-dy / d) * Math.sin(p.ph + d * .05) * .8; p.y += dy / d * sp + (dx / d) * Math.sin(p.ph + d * .05) * .8;
          p.r *= 1 - dt * .25;
          if (d < 9 * Math.max(geo.s * 1.2, .5) + 4) toBubble(p);
        }
      } else if (p.k === "bub") {
        p.life += dt; p.x += p.vx * dt * 60; p.y += p.vy * dt * 60; p.a -= dt * .55;
        if (p.a <= 0) { Object.assign(p, newDust(false)); }
      } else if (p.k === "spark") {
        p.life += dt; p.x += p.vx * dt * 60; p.y += p.vy * dt * 60; p.a -= dt * .45;
        if (p.a <= 0) { var v = pt(VENT[0] + rnd(-.05, .05), VENT[1]); p.k = "spark"; p.x = v[0]; p.y = v[1]; p.vx = rnd(-.25, .25); p.vy = rnd(-.7, -.35); p.a = 1; p.r = rnd(1.2, 2.4); }
      }
    }
    function draw(p) {
      ctx.globalAlpha = Math.max(0, Math.min(1, p.a));
      if (p.k === "dust") { ctx.fillStyle = "#FBE4D5"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill(); }
      else if (p.k === "bub") { ctx.strokeStyle = "#8BEAE2"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.stroke(); }
      else { ctx.fillStyle = "#FFC9AB"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill(); }
    }
    function frame(ts) {
      if (!running) return;
      var dt = Math.min(.05, (ts - last) / 1000 || .016); last = ts;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) { step(parts[i], dt); draw(parts[i]); }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    function start() { if (running || reduce || !vis || document.hidden) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
    function stop() { running = false; }
    function init() {
      resize();
      // чистый воздух из верхнего отверстия
      var v = pt(VENT[0], VENT[1]);
      for (var i = 0; i < 7; i++) parts.push({ k: "spark", x: v[0] + rnd(-12, 12), y: v[1] - rnd(0, 80), vx: rnd(-.25, .25), vy: rnd(-.7, -.35), r: rnd(1.2, 2.4), a: rnd(.1, 1), life: 0 });
      if (reduce) { ctx.clearRect(0, 0, W, H); parts.slice(0, 20).forEach(function (p) { if (p.k === "dust") draw(p); }); }
      start();
    }
    var img = box.querySelector("img");
    if (img.complete) init(); else img.addEventListener("load", init);
    window.addEventListener("resize", function () { var had = running; resize(); if (reduce) { ctx.clearRect(0, 0, W, H); } if (had) start(); });
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { vis = e[0].isIntersecting; vis ? start() : stop(); }).observe(box);
  })();

  /* Схема: анимировать только когда видна */
  (function () {
    var fig = $("#diagram"); if (!fig || !("IntersectionObserver" in window)) return;
    var svg = fig.querySelector("svg"); svg.style.animationPlayState = "paused";
    var els = $$("[class^=d-] , [class^=d-] circle, [class^=d-] path", fig);
    function setState(s) { els.forEach(function (e) { e.style.animationPlayState = s; }); }
    setState("paused");
    new IntersectionObserver(function (e) { setState(e[0].isIntersecting ? "running" : "paused"); }, { threshold: .2 }).observe(fig);
  })();

  /* Клики «позвонить» → событие Contact в Meta */
  $$("[data-call],[data-tg]").forEach(function (a) { a.addEventListener("click", function () { fbq("track", "Contact"); }); });

  /* Одно видео за раз */
  $$("video").forEach(function (v) {
    v.addEventListener("play", function () { $$("video").forEach(function (o) { if (o !== v) o.pause(); }); });
  });

  /* ---------- Форма ---------- */
  var phone = form.elements.phone;
  phone.addEventListener("input", function () {
    var d = phone.value.replace(/\D/g, "");
    if (d.indexOf("998") === 0 && d.length > 9) d = d.slice(3);
    d = d.slice(0, 9);
    var o = d.slice(0, 2);
    if (d.length > 2) o += " " + d.slice(2, 5);
    if (d.length > 5) o += " " + d.slice(5, 7);
    if (d.length > 7) o += " " + d.slice(7, 9);
    phone.value = o;
  });

  var leadRegion = "", leadPhone = "", leadSrc = "";
  function fillDistricts() {
    if (!extra) return;
    var wrap = $("#district-wrap"), sel = extra.elements.district;
    if (!leadRegion) { wrap.hidden = true; return; }
    var cur = sel.value;
    sel.innerHTML = "";
    var o0 = document.createElement("option"); o0.value = ""; o0.textContent = "— " + PLACEHOLDER[lang] + " —"; sel.appendChild(o0);
    DISTRICTS[leadRegion].forEach(function (d) {
      var o = document.createElement("option"); o.value = d[0]; o.textContent = d[lang === "ru" ? 1 : 0]; sel.appendChild(o);
    });
    sel.value = cur; wrap.hidden = false;
  }
  $$("input[name=region]", form).forEach(function (r) { r.addEventListener("change", function () { mark(r.closest(".fld"), true); }); });

  function mark(fld, ok) {
    if (!fld) return;
    fld.classList.toggle("bad", !ok);
    var inp = fld.querySelector("input:not([type=radio]),select"); if (inp) inp.setAttribute("aria-invalid", !ok);
  }
  function validate() {
    var ok = true, f = form.elements;
    var phOk = phone.value.replace(/\D/g, "").length === 9; mark(phone.closest(".fld"), phOk); ok = ok && phOk;
    var rOk = !!f.region.value; mark($$("input[name=region]", form)[0].closest(".fld"), rOk); ok = ok && rOk;
    if (!ok) { var b = $(".fld.bad input, .fld.bad select", form); if (b) b.focus(); }
    return ok;
  }
  phone.addEventListener("input", function () { mark(phone.closest(".fld"), true); });

  function uuid() { return "e" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }

  function send(payload, ok, bad) {
    if (!CFG.LEAD_ENDPOINT) {
      console.warn("[demo] LEAD_ENDPOINT не задан в config.js — данные не отправлены.", payload);
      return setTimeout(ok, 400);
    }
    var ctl = new AbortController(), to = setTimeout(function () { ctl.abort(); }, 12000);
    fetch(CFG.LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: ctl.signal })
      .then(function (r) { clearTimeout(to); return r.ok ? ok() : bad(); })
      .catch(function () { clearTimeout(to); bad(); });
  }
  function base() {
    return { lang: lang, source: leadSrc, page: location.origin + location.pathname, fbp: cookie("_fbp"), fbc: cookie("_fbc"), utm: track, ua: navigator.userAgent };
  }

  /* Шаг 1: телефон + регион (имя необязательно) */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;
    var f = form.elements, btn = $("#f-submit"), err = $("#f-error");
    err.hidden = true;
    leadSrc = form.dataset.src || "";
    var eventId = uuid();
    var payload = base();
    payload.name = f.name.value.trim();
    payload.phone = "+998" + phone.value.replace(/\D/g, "");
    payload.region = f.region.value;
    payload.website = f.website.value;
    payload.event_id = eventId;
    btn.disabled = true; btn.style.opacity = ".7";

    send(payload, function () {
      leadRegion = payload.region; leadPhone = payload.phone;
      fbq("track", "Lead", {}, { eventID: eventId });
      $("#t-p").innerHTML = (lang === "ru" ? RU.t_p : UZ.t_p);
      extra.hidden = false; extra.reset(); fillDistricts();
      form.hidden = true; thanks.hidden = false; form.reset();
      btn.disabled = false; btn.style.opacity = "";
    }, function () { err.hidden = false; btn.disabled = false; btn.style.opacity = ""; });
  });

  /* Шаг 2: необязательные уточнения (заявка уже отправлена) */
  extra.addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = $("#x-submit"), f = extra.elements;
    var payload = base();
    payload.type = "extra"; payload.phone = leadPhone; payload.region = leadRegion;
    payload.district = f.district.value;
    payload.home = $$("input[name=home]:checked", extra).map(function (c) { return c.value; });
    payload.time = (extra.querySelector("input[name=time]:checked") || {}).value || "";
    btn.disabled = true;
    var finish = function () {
      btn.disabled = false; extra.hidden = true;
      $("#t-p").innerHTML = (lang === "ru" ? RU.x_ok : UZ.x_ok);
    };
    send(payload, finish, finish);
  });

  /* ---------- Анимации: появление блоков при прокрутке ---------- */
  (function reveal() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    var groups = [
      [".sec h2, .sec .sec__lead, .dealer h2, .dealer p, .answer, .answer2, .extra, .foot, .reviews .wrap", ""],
      [".rows li, .who li, .flow li, .line li, .bento .t, .dealer__list li, details, .cmp__r", ""],
      [".how__fig", "r--s"], [".demo__pic", "r--l"], [".facts__in, .cmp, .center", ""]
    ];
    var seen = new Set(), els = [];
    groups.forEach(function (g) {
      $$(g[0]).forEach(function (el) {
        if (seen.has(el) || el.closest(".hero")) return; seen.add(el);
        var i = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.classList.add("r"); if (g[1]) el.classList.add(g[1]);
        el.style.setProperty("--rd", (Math.min(i, 5) * 0.09) + "s");
        els.push(el);
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; io.unobserve(el); el.classList.add("in");
        setTimeout(function () { el.classList.remove("r", "in", "r--o", "r--s", "r--l"); el.style.removeProperty("--rd"); }, 1600);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  })();
})();
