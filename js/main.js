// =============================================
// Promo24 — Главный скрипт
// =============================================

// Mobile menu toggle
function toggleMobileMenu() {
const navLinks = document.getElementById('navLinks');
navLinks.classList.toggle('open');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', () => {
const navLinks = document.getElementById('navLinks');
if (navLinks) {
navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('open');
});
});
}
});

// Scroll header effect
window.addEventListener('scroll', () => {
const header = document.getElementById('header');
if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const windowHeight = window.innerHeight;
const revealPoint = 100;

reveals.forEach(el => {
const revealTop = el.getBoundingClientRect().top;
if (revealTop < windowHeight - revealPoint) {
el.classList.add('visible');
}
});
}

// Initial check on load + throttle scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
scrollTimeout = requestAnimationFrame(revealOnScroll);
});

document.addEventListener('DOMContentLoaded', () => {
// Small delay to let layout settle
setTimeout(revealOnScroll, 200);
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const href = this.getAttribute('href');
if (href === '#') return;
e.preventDefault();
const target = document.querySelector(href);
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});

// ===== Contact Form Handler =====
function handleContactFormSubmit(e) {
e.preventDefault();

const form = e.target;
const formData = new FormData(form);
const data = Object.fromEntries(formData);

// Format message for Telegram
const message = `🔔 Новая заявка с Promo24\n\n` +
`👤 Имя: ${data.name || 'не указано'}\n` +
`🏢 Компания: ${data.company || 'не указана'}\n` +
`📞 Телефон: ${data.phone || 'не указан'}\n` +
`✉️ Email: ${data.email || 'не указан'}\n` +
`📝 Запрос: ${data.message || 'не указан'}`;

// Send to Telegram (you'll configure the bot token later)
const botToken = ''; // Configure later
const chatId = ''; // Configure later

if (botToken && chatId) {
fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
chat_id: chatId,
text: message,
parse_mode: 'HTML'
})
}).catch(err => console.log('Telegram not configured yet:', err));
}

// Reset form and show success modal
form.reset();
showFormModal();
}

function showFormModal() {
const modal = document.getElementById('formSuccessModal');
if (modal) {
modal.classList.add('active');
document.body.style.overflow = 'hidden';
}
}

function closeFormModal() {
const modal = document.getElementById('formSuccessModal');
if (modal) {
modal.classList.remove('active');
document.body.style.overflow = '';
}
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('formSuccessModal');
if (modal) {
modal.addEventListener('click', function(e) {
if (e.target === this) {
closeFormModal();
}
});
}
});

// ===== Page Content Rerender Function =====
// Called when language switches
function renderPageContent() {
// This function is called by i18n.js after language switch
// It re-renders dynamic content like brand cards, industry cards, etc.

const currentPage = document.body.dataset.page;

if (currentPage === 'brands') {
renderBrands();
} else if (currentPage === 'industries') {
renderIndustries();
} else if (currentPage === 'warranty') {
renderWarranty();
} else if (currentPage === 'deliveries') {
renderDeliveries();
}
}

// ===== Brands Rendering =====
function renderBrands() {
const container = document.getElementById('brandsContainer');
if (!container) return;

const brands = translations.brands[currentLang].brands;

container.innerHTML = brands.map(brand => {
  // Map brand name to data-brand attribute for color styling
  const brandKey = brand.name.toLowerCase().replace(/[^a-z0-9-]/g, '');
  return `
<div class="brand-card reveal-scale" data-brand="${brandKey}">
<h3>${brand.name}</h3>
<div class="brand-tag">${brand.tag}</div>
</div>
`;
}).join('');

// Update extra brands
const extraContainer = document.getElementById('brandsExtra');
if (extraContainer) {
const extra = translations.brands[currentLang].extra;
extraContainer.innerHTML = extra.map(name => `<span>${name}</span>`).join('');
}

// Trigger scroll reveal for newly added elements
setTimeout(revealOnScroll, 50);
}

// ===== Industries Rendering =====
function renderIndustries() {
const container = document.getElementById('industriesContainer');
if (!container) return;

const industries = translations.industries[currentLang].list;

container.innerHTML = industries.map(item => `
<div class="industry-card reveal">
<div class="industry-icon">${item.icon}</div>
<div>
<h3>${item.title}</h3>
<p>${item.desc}</p>
</div>
</div>
`).join('');
  setTimeout(revealOnScroll, 50);
}

// ===== Warranty Rendering =====
function renderWarranty() {
  const container = document.getElementById('warrantyCards');
  if (!container) return;
  
  const cards = translations.warranty[currentLang].cards;
  
  container.innerHTML = cards.map((card, idx) => `
    <div class="warranty-card reveal-scale ${idx === 2 ? 'featured' : ''}">
      <div class="warranty-icon">${card.icon}</div>
      <h3>${card.value} <span>${card.label}</span></h3>
      <p>${card.desc}</p>
    </div>
  `).join('');
  
  const detailsContainer = document.getElementById('warrantyDetails');
  if (detailsContainer) {
    const details = translations.warranty[currentLang].details;
    detailsContainer.innerHTML = details.map(text => `
      <li><span class="check">✓</span> ${text}</li>
    `).join('');
  }
  setTimeout(revealOnScroll, 50);
}

    // ===== Deliveries Rendering =====
    function renderDeliveries() {
    const container = document.getElementById('deliveriesTable');
    if (!container) return;

    const header = translations.deliveries[currentLang].tableHeader;
    const rows = translations.deliveries[currentLang].rows;

    // Update table header
    const headerEls = container.querySelectorAll('thead th');
    if (headerEls.length >= 3) {
    headerEls[0].textContent = header.model;
    headerEls[1].textContent = header.qty;
    headerEls[2].textContent = header.destination;
    }
    }

    // ===== Micro-interactions =====
    // Ripple effect on buttons
    document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    });
    });
    });

    // Intersection Observer for staggered card animations
    document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .industry-card, .warranty-card, .brand-card');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
    setTimeout(() => {
    entry.target.style.opacity = '1';
    entry.target.style.transform = 'translateY(0)';
    }, i * 100);
    observer.unobserve(entry.target);
    }
    });
    }, { threshold: 0.1 });

    cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
    });
    });

    // Smooth scroll for anchor links
    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    });
    });
    });

    // ===== Navbar hide/show on scroll direction =====
    document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    // Also handle the scrolled class for shadow
    function updateHeader() {
    const scrollY = window.scrollY;

    // Add scrolled class for shadow after a small scroll
    if (scrollY > 50) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    // At top, always show the navbar
    header.classList.remove('hidden');
    lastScrollY = scrollY;
    ticking = false;
    return;
    }

    // Scroll direction detection
    const scrollDown = scrollY > lastScrollY;
    const threshold = 10; // minimum scroll distance to trigger

    if (Math.abs(scrollY - lastScrollY) >= threshold) {
    if (scrollDown) {
    header.classList.add('hidden');
    } else {
    header.classList.remove('hidden');
    }
    lastScrollY = scrollY;
    }

    ticking = false;
    }

    window.addEventListener('scroll', () => {
    if (!ticking) {
    requestAnimationFrame(updateHeader);
    ticking = true;
    }
    });
    });

    // ===== Back to Top Button =====
    document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
    btn.classList.add('visible');
    } else {
    btn.classList.remove('visible');
    }
    }, { passive: true });

    // Scroll to top on click
    btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    });

    // ===== Cookie Consent Banner =====
    document.addEventListener('DOMContentLoaded', () => {
    // Check if already consented
    if (localStorage.getItem('cookieConsent')) return;

    // Get current language cookie text
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
    const c = translations.cookie[lang] || translations.cookie.ru;

    // Build banner HTML
    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.innerHTML =
    '<div class="cookie-text">' +
    c.text +
    '<a href="/privacy/" target="_blank">' + c.privacy + '</a>' +
    '.</div>' +
    '<div class="cookie-actions">' +
    '<button class="cookie-btn cookie-btn-accept">' + c.accept + '</button>' +
    '<button class="cookie-btn cookie-btn-decline">' + c.decline + '</button>' +
    '</div>';

    document.body.appendChild(banner);

    // Show with slight delay for page load
    requestAnimationFrame(() => {
    requestAnimationFrame(() => {
    banner.classList.add('visible');
    });
    });

    // Accept
    banner.querySelector('.cookie-btn-accept').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
    });

    // Decline
    banner.querySelector('.cookie-btn-decline').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
    });

    // Listen for language switches — update text dynamically
    document.addEventListener('languageChanged', () => {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
    const c = translations.cookie[lang] || translations.cookie.ru;
    const textEl = banner.querySelector('.cookie-text');
    if (textEl) {
    textEl.innerHTML = c.text + '<a href="/privacy/" target="_blank">' + c.privacy + '</a>.';
    }
    const acceptBtn = banner.querySelector('.cookie-btn-accept');
    const declineBtn = banner.querySelector('.cookie-btn-decline');
    if (acceptBtn) acceptBtn.textContent = c.accept;
    if (declineBtn) declineBtn.textContent = c.decline;
    });
    });
