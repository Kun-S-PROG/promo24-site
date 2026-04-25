// =============================================
// Promo24 — Мультиязычность (Multi-language)
// Russian (ru) / Kazakh (kk) / Uzbek (uz)
// =============================================

const translations = {
  // ===== Navigation =====
  nav: {
    ru: {
      home: 'Главная',
      brands: 'Бренды',
      industries: 'Отрасли',
      deliveries: 'Поставки',
      warranty: 'Гарантия',
      contacts: 'Контакты',
      getOffer: 'Получить предложение'
    },
    kk: {
      home: 'Басты бет',
      brands: 'Брендтер',
      industries: 'Салалар',
      deliveries: 'Жеткізулер',
      warranty: 'Кепілдік',
      contacts: 'Байланыс',
      getOffer: 'Ұсыныс алу'
    },
    uz: {
      home: 'Bosh sahifa',
      brands: 'Brendlar',
      industries: 'Sohalar',
      deliveries: 'Yetkazib berish',
      warranty: 'Kafolat',
      contacts: 'Aloqa',
      getOffer: 'Taklif olish'
    },
    en: {
      home: 'Home',
      brands: 'Brands',
      industries: 'Industries',
      deliveries: 'Deliveries',
      warranty: 'Warranty',
      contacts: 'Contacts',
      getOffer: 'Get a Quote'
    }
  },

  // ===== Home Page =====
  home: {
    ru: {
      heroTitle: 'ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ С ДОСТАВКОЙ ОТ 7 ДНЕЙ',
      heroSubtitle: 'Оригинальные компоненты Siemens, Fanuc, ABB, Beckhoff и других брендов. Новое и восстановленное оборудование с гарантией.',
      heroBtn: 'Получить предложение',
      featuresTitle: 'ПОЧЕМУ ВЫБИРАЮТ PROMO24',
      feature1Title: '100+ позиций в наличии',
      feature1Desc: 'Широкий ассортимент оригинальных компонентов ведущих брендов',
      feature2Title: 'Оригинальная продукция',
      feature2Desc: 'Только сертифицированное оборудование от производителей',
      feature3Title: 'Срочная поставка от 7 дней',
      feature3Desc: 'Быстрая доставка из Китая в Россию и страны СНГ',
      feature4Title: 'Гарантия до 12 месяцев',
      feature4Desc: 'На новое оборудование — 12 мес., на восстановленное — 3 мес.',
      brandsTitle: 'ПРОИЗВОДИТЕЛИ',
      ctaTitle: 'Готовы получить предложение?',
      ctaDesc: 'Оставьте заявку — мы ответим в течение 1 часа',
      ctaBtn: 'Связаться с нами'
    },
    kk: {
      heroTitle: '7 КҮННЕН БАСТАП ЖЕТКІЗУМЕН ӨНДІРІСТІК ЖАБДЫҚТАР',
      heroSubtitle: 'Siemens, Fanuc, ABB, Beckhoff және басқа брендтердің түпнұсқа компоненттері. Кепілдікпен жаңа және қалпына келтірілген жабдықтар.',
      heroBtn: 'Ұсыныс алу',
      featuresTitle: 'PROMO24 НЕГЕ ТАҢДАЙДЫ',
      feature1Title: 'Қоймада 100+ позиция',
      feature1Desc: 'Жетекші брендтердің түпнұсқа компоненттерінің кең ассортименті',
      feature2Title: 'Түпнұсқа өнімдер',
      feature2Desc: 'Тек өндірушілерден сертификатталған жабдық',
      feature3Title: '7 күннен бастап жедел жеткізу',
      feature3Desc: 'Қытайдан Ресейге және ТМД елдеріне жылдам жеткізу',
      feature4Title: '12 айға дейін кепілдік',
      feature4Desc: 'Жаңа жабдыққа 12 ай, қалпына келтірілгенге 3 ай',
      brandsTitle: 'ӨНДІРУШІЛЕР',
      ctaTitle: 'Ұсыныс алуға дайынсыз ба?',
      ctaDesc: 'Өтініш қалдырыңыз — біз 1 сағат ішінде жауап береміз',
      ctaBtn: 'Бізбен хабарласыңыз'
    },
    uz: {
      heroTitle: '7 KUNDAN BOSHLAB YETKAZIB BERISH BILAN SANOAT USKUNALARI',
      heroSubtitle: "Siemens, Fanuc, ABB, Beckhoff va boshqa brendlarning original komponentlari. Kafolat bilan yangi va tiklangan uskunalar.",
      heroBtn: 'Taklif olish',
      featuresTitle: 'NEGA PROMO24 TANLANADI',
      feature1Title: 'Omborda 100+ pozitsiya',
      feature1Desc: "Yetakchi brendlarning original komponentlarining keng assortimenti",
      feature2Title: 'Original mahsulotlar',
      feature2Desc: 'Faqat ishlab chiqaruvchilardan sertifikatlangan uskunalar',
      feature3Title: '7 kundan boshlab shoshilinch yetkazib berish',
      feature3Desc: "Xitoydan Rossiya va MDH mamlakatlariga tezkor yetkazib berish",
      feature4Title: "12 oygacha kafolat",
      feature4Desc: "Yangi uskunalarga 12 oy, tiklanganlarga 3 oy",
      brandsTitle: 'ISHLAB CHIQARUVCHILAR',
      ctaTitle: 'Taklif olishga tayyormisiz?',
      ctaDesc: "Ariza qoldiring — biz 1 soat ichida javob beramiz",
      ctaBtn: 'Biz bilan bog\'laning'
    }
  },

  // ===== Brands Page =====
  brands: {
    ru: {
      title: 'ПРОИЗВОДИТЕЛИ',
      subtitle: 'Мы работаем с ведущими мировыми производителями промышленного оборудования',
      extraTitle: 'Также работаем с:',
      brands: [
        { name: 'Siemens', tag: 'ПЛК, HMI, преобразователи частоты, сервоприводы' },
        { name: 'Fanuc', tag: 'CNC-контроллеры, сервоприводы, шпиндели' },
        { name: 'ABB', tag: 'Преобразователи частоты, двигатели, ПЛК' },
        { name: 'Beckhoff', tag: 'Промышленные ПК, терминалы ввода/вывода' },
        { name: 'Allen-Bradley', tag: 'ПЛК, преобразователи частоты' },
        { name: 'OKUMA', tag: 'Запасные части для станков' },
        { name: 'Lenze', tag: 'Приводная техника' }
      ],
      extra: ['Schneider Electric', 'Omron', 'Danfoss', 'Phoenix Contact']
    },
    kk: {
      title: 'ӨНДІРУШІЛЕР',
      subtitle: 'Біз жетекші әлемдік өндірістік жабдық өндірушілерімен жұмыс істейміз',
      extraTitle: 'Сондай-ақ мыналармен жұмыс істейміз:',
      brands: [
        { name: 'Siemens', tag: 'ПЛК, HMI, жиілік түрлендіргіштері, серво жетектер' },
        { name: 'Fanuc', tag: 'CNC-контроллерлер, серво жетектер, шпиндельдер' },
        { name: 'ABB', tag: 'Жиілік түрлендіргіштері, қозғалтқыштар, ПЛК' },
        { name: 'Beckhoff', tag: 'Өнеркәсіптік ПК, кіріс/шығыс терминалдары' },
        { name: 'Allen-Bradley', tag: 'ПЛК, жиілік түрлендіргіштері' },
        { name: 'OKUMA', tag: 'Станоктарға арналған қосалқы бөлшектер' },
        { name: 'Lenze', tag: 'Жетек техникасы' }
      ],
      extra: ['Schneider Electric', 'Omron', 'Danfoss', 'Phoenix Contact']
    },
    uz: {
      title: 'ISHLAB CHIQARUVCHILAR',
      subtitle: "Biz jahonning yetakchi sanoat uskunalari ishlab chiqaruvchilari bilan ishlaymiz",
      extraTitle: 'Shuningdek, bilan ishlaymiz:',
      brands: [
        { name: 'Siemens', tag: "PLK, HMI, chastota o'zgartirgichlari, servo qo'zg'aysanlar" },
        { name: 'Fanuc', tag: 'CNC kontrollerlar, servo qo\'zg\'aysanlar, shpindellar' },
        { name: 'ABB', tag: "Chastota o'zgartirgichlari, motorlar, PLK" },
        { name: 'Beckhoff', tag: 'Sanoat PK, kiritish/chiqarish terminallari' },
        { name: 'Allen-Bradley', tag: "PLK, chastota o'zgartirgichlari" },
        { name: 'OKUMA', tag: 'Dastgohlar uchun ehtiyot qismlar' },
        { name: 'Lenze', tag: "Qo'zg'aysan texnikasi" }
      ],
      extra: ['Schneider Electric', 'Omron', 'Danfoss', 'Phoenix Contact']
    }
  },

  // ===== Industries Page =====
  industries: {
    ru: {
      title: 'ОТРАСЛИ',
      subtitle: 'Мы поставляем оборудование для ключевых отраслей промышленности',
      list: [
        {
          icon: '🏭',
          title: 'Автоматизация производства',
          desc: 'Комплексные решения для автоматизации производственных линий любой сложности. Контроллеры, системы управления, датчики и исполнительные механизмы.'
        },
        {
          icon: '🔧',
          title: 'Интеграторы систем',
          desc: 'Оборудование для системных интеграторов: промышленные ПК, модули ввода/вывода, сетевое оборудование, панели оператора.'
        },
        {
          icon: '🛢️',
          title: 'Нефтегазовая отрасль',
          desc: 'Надёжные компоненты для нефтегазового сектора. Преобразователи частоты, двигатели, контроллеры для сложных условий эксплуатации.'
        },
        {
          icon: '🍞',
          title: 'Пищевая промышленность',
          desc: 'Специализированное оборудование для пищевой промышленности. Приводная техника, системы управления технологическими процессами.'
        }
      ]
    },
    kk: {
      title: 'САЛАЛАР',
      subtitle: 'Біз өнеркәсіптің негізгі салаларына жабдықтар жеткіземіз',
      list: [
        {
          icon: '🏭',
          title: 'Өндірісті автоматтандыру',
          desc: 'Кез келген күрделіліктегі өндірістік желілерді автоматтандыруға арналған кешенді шешімдер. Контроллерлер, басқару жүйелері, датчиктер және атқарушы механизмдер.'
        },
        {
          icon: '🔧',
          title: 'Жүйелік интеграторлар',
          desc: 'Жүйелік интеграторларға арналған жабдық: өнеркәсіптік ПК, кіріс/шығыс модульдері, желілік жабдық, оператор панельдері.'
        },
        {
          icon: '🛢️',
          title: 'Мұнай-газ саласы',
          desc: 'Мұнай-газ секторына арналған сенімді компоненттер. Күрделі жұмыс жағдайларына арналған жиілік түрлендіргіштері, қозғалтқыштар, контроллерлер.'
        },
        {
          icon: '🍞',
          title: 'Тамақ өнеркәсібі',
          desc: 'Тамақ өнеркәсібіне арналған мамандандырылған жабдық. Жетек техникасы, технологиялық процестерді басқару жүйелері.'
        }
      ]
    },
    uz: {
      title: 'SOHALAR',
      subtitle: "Biz sanoatning asosiy tarmoqlari uchun uskunalar yetkazib beramiz",
      list: [
        {
          icon: '🏭',
          title: 'Ishlab chiqarishni avtomatlashtirish',
          desc: "Har qanday murakkablikdagi ishlab chiqarish liniyalarini avtomatlashtirish uchun kompleks yechimlar. Kontrollerlar, boshqaruv tizimlari, sensorlar va ijro mexanizmlari."
        },
        {
          icon: '🔧',
          title: 'Tizim integratorlari',
          desc: "Tizim integratorlari uchun uskunalar: sanoat PK, kiritish/chiqarish modullari, tarmoq uskunalari, operator panellari."
        },
        {
          icon: '🛢️',
          title: 'Neft-gaz sohasi',
          desc: "Neft-gaz sektori uchun ishonchli komponentlar. Murakkab ish sharoitlari uchun chastota o'zgartirgichlari, motorlar, kontrollerlar."
        },
        {
          icon: '🍞',
          title: 'Oziq-ovqat sanoati',
          desc: "Oziq-ovqat sanoati uchun ixtisoslashtirilgan uskunalar. Qo'zg'aysan texnikasi, texnologik jarayonlarni boshqarish tizimlari."
        }
      ]
  ,
    en: {
      title: 'INDUSTRIES',
      subtitle: 'We supply equipment for key industrial sectors',
      list: [
        {
          icon: '🏭',
          title: 'Manufacturing Automation',
          desc: 'Comprehensive automation solutions for production lines of any complexity. Controllers, control systems, sensors, and actuators.'
        },
        {
          icon: '🔧',
          title: 'System Integrators',
          desc: 'Equipment for system integrators: industrial PCs, I/O modules, networking equipment, operator panels.'
        },
        {
          icon: '🛢️',
          title: 'Oil & Gas Industry',
          desc: 'Reliable components for the oil & gas sector. Frequency drives, motors, controllers for demanding operating conditions.'
        },
        {
          icon: '🍞',
          title: 'Food Industry',
          desc: 'Specialized equipment for the food industry. Drive technology, process control systems.'
        }
      ]
    }
  },

  // ===== Deliveries Page =====
  deliveries: {
    ru: {
      title: 'ВЫПОЛНЕННЫЕ ПОСТАВКИ',
      subtitle: 'Ниже представлены примеры поставок за 2023-2025 гг. Информация о клиентах удалена.',
      tableHeader: {
        model: 'Модель оборудования',
        qty: 'Количество',
        destination: 'Страна назначения'
      },
      rows: []
    },
    kk: {
      title: 'ОРЫНДАЛҒАН ЖЕТКІЗУЛЕР',
      subtitle: 'Төменде 2023-2025 жж. жеткізу мысалдары келтірілген. Клиенттер туралы ақпарат жойылды.',
      tableHeader: {
        model: 'Жабдық үлгісі',
        qty: 'Саны',
        destination: 'Баратын елі'
      },
      rows: []
    },
    uz: {
      title: 'BAJARILGAN YETKAZIB BERISHLAR',
      subtitle: "Quyida 2023-2025 yillardagi yetkazib berish namunalari keltirilgan. Mijozlar haqidagi ma'lumotlar o'chirildi.",
      tableHeader: {
        model: 'Uskuna modeli',
        qty: 'Miqdori',
        destination: 'Boradigan mamlakati'
      },
      rows: []
    }
  },

  // ===== Warranty Page =====
  warranty: {
    ru: {
      title: 'ГАРАНТИЯ И УСЛОВИЯ',
      subtitle: 'Мы гарантируем качество всей поставляемой продукции',
      cards: [
        { icon: '🆕', value: '12', label: 'месяцев', desc: 'на новое оборудование' },
        { icon: '🔄', value: '3', label: 'месяца', desc: 'на восстановленное оборудование' },
        { icon: '🚚', value: '7', label: 'дней', desc: 'срочная поставка' }
      ],
      notice: 'Мы не оказываем услуги по монтажу и ремонту на объекте',
      detailsTitle: 'Условия возврата и обмена',
      details: [
        'Срок возврата/обмена: 14–25 дней с момента получения',
        'При браке по вине производителя — бесплатная замена или возврат за наш счет',
        'При повреждении по вине покупателя — возврат за счет клиента',
        'Товар должен быть в оригинальной упаковке и комплектации'
      ]
    },
    kk: {
      title: 'КЕПІЛДІК ЖӘНЕ ШАРТТАР',
      subtitle: 'Біз барлық жеткізілетін өнімнің сапасына кепілдік береміз',
      cards: [
        { icon: '🆕', value: '12', label: 'ай', desc: 'жаңа жабдыққа' },
        { icon: '🔄', value: '3', label: 'ай', desc: 'қалпына келтірілген жабдыққа' },
        { icon: '🚚', value: '7', label: 'күн', desc: 'жедел жеткізу' }
      ],
      notice: 'Біз нысанда монтаж және жөндеу қызметтерін көрсетпейміз',
      detailsTitle: 'Қайтару және айырбастау шарттары',
      details: [
        'Қайтару/айырбастау мерзімі: алған сәттен бастап 14–25 күн',
        'Өндірушінің кінәсі бойынша ақау болған жағдайда — біздің есептен тегін ауыстыру немесе қайтару',
        'Сатып алушының кінәсінен зақымдалған жағдайда — клиент есебінен қайтару',
        'Тауар түпнұсқа қаптамасында және жинақта болуы керек'
      ]
    },
    uz: {
      title: 'KAFOLAT VA SHARTLAR',
      subtitle: "Biz barcha yetkazib beriladigan mahsulot sifatiga kafolat beramiz",
      cards: [
        { icon: '🆕', value: '12', label: 'oy', desc: 'yangi uskunalarga' },
        { icon: '🔄', value: '3', label: 'oy', desc: 'tiklangan uskunalarga' },
        { icon: '🚚', value: '7', label: 'kun', desc: 'shoshilinch yetkazib berish' }
      ],
      notice: "Biz ob'ektda montaj va ta'mirlash xizmatlarini ko'rsatmaymiz",
      detailsTitle: 'Qaytarish va almashtirish shartlari',
      details: [
        'Qaytarish/almashtirish muddati: olingan kundan boshlab 14–25 kun',
        "Ishlab chiqaruvchi aybi bilan nuqson bo'lsa — bizning hisobimizdan bepul almashtirish yoki qaytarish",
        "Xaridor aybi bilan shikastlangan bo'lsa — mijoz hisobidan qaytarish",
        'Tovar original o\'ramda va to\'plamda bo\'lishi kerak'
      ]
    }
  },

  // ===== Contact Page =====
  contact: {
    ru: {
      title: 'КОНТАКТЫ',
      subtitle: 'Свяжитесь с нами удобным способом',
      formTitle: 'Оставьте заявку',
      formFields: {
        name: 'Имя',
        company: 'Компания',
        phone: 'Телефон',
        email: 'Email',
        message: 'Опишите вашу потребность',
        submit: 'Отправить заявку'
      },
      formResponse: 'Спасибо! Мы свяжемся с вами в течение 1 часа.',
      modalTitle: 'Заявка отправлена!',
      modalText: 'Спасибо! Мы свяжемся с вами в ближайшее время. Наш менеджер ответит на все вопросы и подготовит коммерческое предложение.',
      modalBtn: 'Хорошо',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram'
    },
    kk: {
      title: 'БАЙЛАНЫС',
      subtitle: 'Бізбен ыңғайлы тәсілмен байланысыңыз',
      formTitle: 'Өтініш қалдырыңыз',
      formFields: {
        name: 'Аты',
        company: 'Компания',
        phone: 'Телефон',
        email: 'Email',
        message: 'Қажеттілігіңізді сипаттаңыз',
        submit: 'Өтініш жіберу'
      },
      formResponse: 'Рахмет! Біз сізбен 1 сағат ішінде байланысамыз.',
      modalTitle: 'Өтініш жіберілді!',
      modalText: 'Рахмет! Біз сізбен жақын арада байланысамыз. Біздің менеджер барлық сұрақтарыңызға жауап береді және коммерциялық ұсыныс дайындайды.',
      modalBtn: 'Жақсы',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram'
    },
    uz: {
      title: 'ALOQA',
      subtitle: "Biz bilan qulay usulda bog'laning",
      formTitle: "Ariza qoldiring",
      formFields: {
        name: 'Ism',
        company: 'Kompaniya',
        phone: 'Telefon',
        email: 'Email',
        message: "Ehtiyojingizni tavsiflang",
        submit: 'Arizani yuborish'
      },
      formResponse: "Rahmat! Biz siz bilan 1 soat ichida bog'lanamiz.",
      modalTitle: "Ariza yuborildi!",
      modalText: "Rahmat! Biz siz bilan tez orada bog'lanamiz. Menejerimiz barcha savollaringizga javob beradi va tijorat taklifini tayyorlaydi.",
      modalBtn: 'Yaxshi',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram'
    }
  },

  // ===== Cookie Consent =====
  cookie: {
    ru: {
      text: 'Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с нашей ',
      privacy: 'политикой конфиденциальности',
      accept: 'Принять',
      decline: 'Отклонить'
    },
    kk: {
      text: 'Сайт жұмысын жақсарту үшін cookie файлдарын қолданамыз. Сайтты пайдалануды жалғастыра отырып, сіз біздің ',
      privacy: 'құпиялылық саясатымен',
      accept: 'Қабылдау',
      decline: 'Қабылдамау'
    },
    uz: {
      text: 'Biz sayt ishini yaxshilash uchun cookie fayllaridan foydalanamiz. Saytdan foydalanishni davom ettirib, siz bizning ',
      privacy: 'maxfiylik siyosatimizga',
      accept: 'Qabul qilish',
      decline: 'Rad etish'
    }
  },

  // ===== Footer =====
  footer: {
    ru: {
      tagline: 'Надёжный поставщик промышленного оборудования в Россию и страны СНГ с доставкой от 7 дней.',
      catalog: 'Каталог',
      info: 'Информация',
      rights: '© 2025 Promo24. Все права защищены.'
    },
    kk: {
      tagline: '7 күннен бастап жеткізумен Ресейге және ТМД елдеріне өнеркәсіптік жабдықтардың сенімді жеткізушісі.',
      catalog: 'Каталог',
      info: 'Ақпарат',
      rights: '© 2025 Promo24. Барлық құқықтар қорғалған.'
    },
    uz: {
      tagline: "7 kundan boshlab yetkazib berish bilan Rossiya va MDH mamlakatlariga sanoat uskunalarining ishonchli yetkazib beruvchisi.",
      catalog: 'Katalog',
      info: "Ma'lumot",
      rights: '© 2025 Promo24. Barcha huquqlar himoyalangan.'
    },
    en: {
      tagline: 'Reliable supplier of industrial equipment to Russia and CIS countries with delivery from 7 days.',
      catalog: 'Catalog',
      info: 'Information',
      rights: '© 2025 Promo24. All rights reserved.'
    }
  }
};

// ===== Current Language & Utilities =====
let currentLang = 'ru';

function t(key) {
  const keys = key.split('.');
  let obj = translations;
  for (const k of keys) {
    if (obj && obj[k] !== undefined) {
      obj = obj[k];
    } else {
      return key;
    }
  }
  return obj && typeof obj === 'object' ? obj[currentLang] : (obj || key);
}

function switchLang(lang) {
  currentLang = lang;
  
  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang || btn.dataset.lang === lang);
  });
  
  // Find all elements with data-i18n attribute and update them
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = t(key);
    if (translated) {
      el.textContent = translated;
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translated = t(key);
    if (translated) {
      el.placeholder = translated;
    }
  });
  
  // Update page title
  const pageTitle = document.querySelector('title');
  if (pageTitle) {
    const titleKey = pageTitle.dataset.i18n;
    if (titleKey) {
      pageTitle.textContent = t(titleKey);
    }
  }
  
  // Re-render dynamic content
  if (typeof renderPageContent === 'function') {
    renderPageContent();
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  switchLang('ru');
});
