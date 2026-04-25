// =============================================
// Promo24 — SEO & Analytics
// =============================================

// ===== Yandex.Metrica =====
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(let j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

ym(0, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});

// ===== SEO: Title & Description per page =====
const seoData = {
  'ru': {
    home: { title: 'Promo24 — поставка промышленного оборудования от 7 дней', desc: 'Оригинальное промышленное оборудование Siemens, Fanuc, ABB, Beckhoff. Поставка от 7 дней из Китая в Россию и СНГ.' },
    brands: { title: 'Promo24 — производители Siemens, Fanuc, ABB, Beckhoff', desc: 'Оригинальные компоненты Siemens, Fanuc, ABB, Beckhoff, Allen-Bradley, OKUMA, Lenze. Широкий ассортимент в наличии.' },
    industries: { title: 'Promo24 — отрасли: автоматизация, нефтегаз, пищевая промышленность', desc: 'Промышленное оборудование для автоматизации производства, нефтегазовой отрасли, пищевой промышленности и системных интеграторов.' },
    deliveries: { title: 'Promo24 — выполненные поставки', desc: 'Примеры выполненных поставок промышленного оборудования. Документы с конфиденциальной информацией обработаны.' },
    warranty: { title: 'Promo24 — гарантия 12 месяцев', desc: 'Гарантия на новое оборудование 12 месяцев, на восстановленное 3 месяца. Условия возврата и обмена.' },
    contacts: { title: 'Promo24 — контакты', desc: 'Свяжитесь с Promo24: WhatsApp, Telegram. Поставка промышленного оборудования от 7 дней.' }
  },
  'kk': {
    home: { title: 'Promo24 — 7 күннен бастап жеткізумен өнеркәсіптік жабдықтар' },
    brands: { title: 'Promo24 — өндірушілер Siemens, Fanuc, ABB, Beckhoff' },
    industries: { title: 'Promo24 — салалар: автоматтандыру, мұнай-газ, тамақ өнеркәсібі' },
    deliveries: { title: 'Promo24 — орындалған жеткізулер' },
    warranty: { title: 'Promo24 — 12 ай кепілдік' },
    contacts: { title: 'Promo24 — байланыс' }
  },
  'uz': {
    home: { title: 'Promo24 — 7 kundan boshlab yetkazib berish bilan sanoat uskunalari' },
    brands: { title: 'Promo24 — ishlab chiqaruvchilar Siemens, Fanuc, ABB, Beckhoff' },
    industries: { title: 'Promo24 — sohalar: avtomatlashtirish, neft-gaz, oziq-ovqat sanoati' },
    deliveries: { title: 'Promo24 — bajarilgan yetkazib berishlar' },
    warranty: { title: 'Promo24 — 12 oy kafolat' },
    contacts: { title: 'Promo24 — aloqa' }
  },
  'en': {
    home: { title: 'Promo24 — Industrial Equipment Delivery from 7 Days', desc: 'Original Siemens, Fanuc, ABB, Beckhoff industrial equipment. Delivery from 7 days from China to Russia and CIS.' },
    brands: { title: 'Promo24 — Brands: Siemens, Fanuc, ABB, Beckhoff', desc: 'Original components from Siemens, Fanuc, ABB, Beckhoff, Allen-Bradley, OKUMA, Lenze. Wide range in stock.' },
    industries: { title: 'Promo24 — Industries: Automation, Oil & Gas, Food Processing', desc: 'Industrial equipment for manufacturing automation, oil & gas, food processing, and system integrators.' },
    deliveries: { title: 'Promo24 — Completed Deliveries', desc: 'Examples of completed industrial equipment deliveries. Confidential information redacted.' },
    warranty: { title: 'Promo24 — 12-Month Warranty', desc: '12-month warranty on new equipment, 3 months on refurbished. Return and exchange terms.' },
    contacts: { title: 'Promo24 — Contact Us', desc: 'Contact Promo24: WhatsApp, Telegram. Industrial equipment delivery from 7 days.' }
  }
};

// Update SEO meta when language switches
function updateSEO() {
  // Get current page from body data attribute
  const page = document.body.dataset.page || 'home';
  const seo = seoData[currentLang];
  if (seo && seo[page]) {
    document.title = seo[page].title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && seo[page].desc) {
      descMeta.content = seo[page].desc;
    }
  }
}

// Override switchLang to also update SEO
const originalSwitchLang = window.switchLang;
window.switchLang = function(lang) {
  if (typeof originalSwitchLang === 'function') {
    originalSwitchLang(lang);
  }
  updateSEO();
};

// Add Structured Data (JSON-LD) for rich search results
document.addEventListener('DOMContentLoaded', () => {
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Promo24",
    "description": "Поставка промышленного оборудования от 7 дней",
    "url": "https://promo24.su",
    "logo": "https://promo24.su/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-153-5965-7695",
      "contactType": "sales",
      "availableLanguage": ["Russian", "Kazakh", "Uzbek"]
    },
    "sameAs": [
      "https://wa.me/8615359657695",
      "https://t.me/+8615359657695"
    ]
  });
  document.head.appendChild(ld);
  
  // Initial SEO update
  updateSEO();
});
