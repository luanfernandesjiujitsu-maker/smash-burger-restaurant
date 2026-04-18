/**
 * ============================================================
 * SITE CONFIG — Change this object to rebrand for any business
 * ============================================================
 */
const SITE_CONFIG = {
  brand: {
    name: "SMASH & CO",
    tagline: "Apaixonados desde 1987",
    description: "Hambúrgueres smash artesanais feitos com amor, fogo e obsessão.",
    phone: "+55 (11) 99999-9999",
    email: "ola@smashandco.com.br",
    address: "Rua das Chamas, 42 - Bela Vista, São Paulo - SP",
    hours: "Seg–Dom: 11h – 23h",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      tiktok: "#"
    }
  },
  currency: "R$",
  currencySymbol: "R$",
  // Delivery threshold for free delivery
  freeDeliveryThreshold: 80,
  deliveryFee: 4.99,
  taxRate: 0.08,
};

/**
 * ============================================================
 * MENU DATA — Swap content for any food business
 * ============================================================
 */
const MENU_DATA = {
  categories: [
    { id: "burgers",  label: "Burgers",    icon: "🍔" },
    { id: "combos",   label: "Combos",     icon: "" },
    { id: "sides",    label: "Acompanhamentos",      icon: "" },
    { id: "drinks",   label: "Bebidas",     icon: "" },
    { id: "desserts", label: "Sobremesas",   icon: "" },
  ],
  items: [
    {
      id: 1,
      name: "O Smash Clássico",
      category: "burgers",
      price: 14.99,
      description: "Duplo disco smash, queijo americano, picles, mostarda & ketchup em pão brioche tostado.",
      tags: ["maisvendido"],
      badges: ["hot"],
      rating: 4.9,
      reviews: 342,
      img: "assets/img/burger-classic.jpg",
      imgPlaceholder: "🍔",
      options: ["Simples", "Duplo", "Triplo"],
    },
    {
      id: 2,
      name: "Bacon Inferno",
      category: "burgers",
      price: 17.99,
      description: "Bacon crocante, queijo ghost pepper, jalapeño caramelizado, maionese chipotle. Não é para os fracos de coração.",
      tags: ["picante"],
      badges: ["picante", "hot"],
      rating: 4.8,
      reviews: 218,
      img: "assets/img/burger-inferno.jpg",
      imgPlaceholder: "",
      options: ["Simples", "Duplo"],
    },
    {
      id: 3,
      name: "Trufa Royale",
      category: "burgers",
      price: 22.99,
      oldPrice: 26.99,
      description: "Carne wagyu, cheddar envelhecido, maionese de trufa negra, rúcula e cebola caramelizada em pão de gergelim.",
      tags: ["premium", "novo"],
      badges: ["novo"],
      rating: 4.9,
      reviews: 89,
      img: "assets/img/burger-truffle.jpg",
      imgPlaceholder: "",
      options: ["Simples", "Duplo"],
    },
    {
      id: 4,
      name: "Smash da Horta",
      category: "burgers",
      price: 13.99,
      description: "Disco smash vegetal, queijo vegano, abacate, tomate, alface e molho vegano da casa.",
      tags: ["vegano"],
      badges: ["veg"],
      rating: 4.7,
      reviews: 156,
      img: "assets/img/burger-garden.jpg",
      imgPlaceholder: "",
      options: ["Simples", "Duplo"],
    },
    {
      id: 5,
      name: "Defumado BBQ",
      category: "burgers",
      price: 18.99,
      description: "Brisket cozido lentamente, fitas de cebola crocante, cheddar defumado e molho BBQ da casa.",
      tags: ["maisvendido"],
      badges: ["hot"],
      rating: 4.8,
      reviews: 274,
      img: "assets/img/burger-bbq.jpg",
      imgPlaceholder: "",
      options: ["Simples", "Duplo"],
    },
    {
      id: 6,
      name: "Cogumelo Suíço",
      category: "burgers",
      price: 15.99,
      description: "Cogumelos selvagens salteados, queijo suíço, aioli de alho e espinafre baby em pão pretzel.",
      tags: [],
      badges: [],
      rating: 4.6,
      reviews: 112,
      img: "assets/img/burger-mushroom.jpg",
      imgPlaceholder: "",
      options: ["Simples", "Duplo"],
    },
    // COMBOS
    {
      id: 7,
      name: "Combo Clássico",
      category: "combos",
      price: 19.99,
      oldPrice: 23.99,
      description: "O Smash Clássico + Batata Grande + Bebida à escolha.",
      tags: ["valor"],
      badges: ["novo"],
      rating: 4.9,
      reviews: 421,
      img: "assets/img/combo-classic.jpg",
      imgPlaceholder: "🍔",
    },
    {
      id: 8,
      name: "Combo Inferno",
      category: "combos",
      price: 23.99,
      oldPrice: 27.99,
      description: "Bacon Inferno + Batata com Chili e Queijo + Bebida Grande.",
      tags: ["picante", "valor"],
      badges: ["picante"],
      rating: 4.8,
      reviews: 187,
      img: "assets/img/combo-inferno.jpg",
      imgPlaceholder: "",
    },
    // SIDES
    {
      id: 9,
      name: "Batata Trufada",
      category: "sides",
      price: 7.99,
      description: "Batata palito crocante com azeite de trufa, parmesão e ervas frescas.",
      tags: ["premium"],
      badges: [],
      rating: 4.9,
      reviews: 503,
      img: "assets/img/sides-truffle-fries.jpg",
      imgPlaceholder: "",
    },
    {
      id: 10,
      name: "Anéis de Cebola",
      category: "sides",
      price: 6.99,
      description: "Anéis de cebola empanados na cerveja, dourados e crocantes, com molho defumado.",
      tags: [],
      badges: [],
      rating: 4.7,
      reviews: 289,
      img: "assets/img/sides-onion-rings.jpg",
      imgPlaceholder: "",
    },
    {
      id: 11,
      name: "Coleslaw Especial",
      category: "sides",
      price: 5.99,
      description: "Repolho e couve com molho ranch de jalapeño.",
      tags: ["vegano"],
      badges: ["veg"],
      rating: 4.5,
      reviews: 98,
      img: "assets/img/sides-slaw.jpg",
      imgPlaceholder: "",
    },
    // DRINKS
    {
      id: 12,
      name: "Limonada Artesanal",
      category: "drinks",
      price: 4.99,
      description: "Limonada espremida na hora: morango, manga ou clássica.",
      tags: [],
      badges: [],
      rating: 4.8,
      reviews: 211,
      img: "assets/img/drink-lemonade.jpg",
      imgPlaceholder: "",
    },
    {
      id: 13,
      name: "Milkshake Cremoso",
      category: "drinks",
      price: 7.99,
      description: "Milkshake batido na hora: baunilha, chocolate, morango ou caramelo salgado.",
      tags: ["maisvendido"],
      badges: ["hot"],
      rating: 4.9,
      reviews: 378,
      img: "assets/img/drink-shake.jpg",
      imgPlaceholder: "",
    },
    // DESSERTS
    {
      id: 14,
      name: "Sundae Cookie Dough",
      category: "desserts",
      price: 8.99,
      description: "Brownie de cookie quente, sorvete de baunilha, fio de caramelo e farofa de Oreo.",
      tags: ["novo"],
      badges: ["novo"],
      rating: 4.9,
      reviews: 134,
      img: "assets/img/dessert-sundae.jpg",
      imgPlaceholder: "",
    },
  ],
};

/**
 * ============================================================
 * TESTIMONIALS DATA
 * ============================================================
 */
const TESTIMONIALS = [
  {
    id: 1,
    text: "O melhor burger da cidade, sem discussão. O Trufa Royale mudou minha vida. Volto toda semana.",
    author: "Lucas T.",
    meta: "Cliente Verificado · São Paulo",
    rating: 5,
    avatar: "assets/img/avatar-1.jpg",
  },
  {
    id: 2,
    text: "O Bacon Inferno é simplesmente insano. Picância perfeita, crocância perfeita, tudo perfeito.",
    author: "Sofia R.",
    meta: "Food Blogger · @sofiaeats",
    rating: 5,
    avatar: "assets/img/avatar-2.jpg",
  },
  {
    id: 3,
    text: "Sou vegana e estava cética, mas o Smash da Horta é incrível de verdade. Trouxe meus amigos carnívoros e eles pediram também.",
    author: "Priya K.",
    meta: "Cliente Verificada · Pinheiros",
    rating: 5,
    avatar: "assets/img/avatar-3.jpg",
  },
];

/**
 * ============================================================
 * CART STATE MANAGER
 * ============================================================
 */
const Cart = (() => {
  let items = JSON.parse(localStorage.getItem("smash_cart") || "[]");

  const save = () => localStorage.setItem("smash_cart", JSON.stringify(items));
  const broadcast = () => document.dispatchEvent(new CustomEvent("cart:updated", { detail: { items, total: getTotal() } }));

  const add = (item) => {
    const existing = items.find(i => i.id === item.id && i.option === item.option);
    if (existing) {
      existing.qty += item.qty || 1;
    } else {
      items.push({ ...item, qty: item.qty || 1 });
    }
    save(); broadcast();
  };

  const remove = (id, option) => {
    items = items.filter(i => !(i.id === id && i.option === option));
    save(); broadcast();
  };

  const updateQty = (id, option, qty) => {
    if (qty <= 0) return remove(id, option);
    const item = items.find(i => i.id === id && i.option === option);
    if (item) { item.qty = qty; save(); broadcast(); }
  };

  const getTotal = () => items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const getCount = () => items.reduce((sum, i) => sum + i.qty, 0);
  const getItems = () => [...items];
  const clear = () => { items = []; save(); broadcast(); };

  return { add, remove, updateQty, getTotal, getCount, getItems, clear };
})();

/**
 * ============================================================
 * COMPONENT RENDERERS
 * ============================================================
 */

/**
 * Render a product card HTML string
 * @param {Object} item - Menu item data
 * @returns {string} HTML string
 */
function renderProductCard(item) {
  const badgeMap = {
    hot:   { cls: "badge--hot",   label: "🔥 Popular" },
    new:   { cls: "badge--new",   label: "✦ Novo" },
    veg:   { cls: "badge--veg",   label: "🌿 Vegano" },
    spicy: { cls: "badge--spicy", label: "🌶️ Picante" },
  };

  const badges = (item.badges || [])
    .map(b => badgeMap[b] ? `<span class="badge ${badgeMap[b].cls}">${badgeMap[b].label}</span>` : '')
    .join('');

  const oldPrice = item.oldPrice
    ? `<span class="product-card__price-old">${SITE_CONFIG.currencySymbol}${item.oldPrice.toFixed(2)}</span>`
    : '';

  const imgContent = `
    <div class="product-card__img-wrap">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;background:var(--color-bg-3);">
        ${item.imgPlaceholder || '🍔'}
      </div>
      <div class="product-card__badges">${badges}</div>
      <button class="product-card__quick-add" onclick="handleQuickAdd(event, ${item.id})" title="Adicionar ao carrinho">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
    </div>
  `;

  return `
    <article class="product-card reveal" onclick="navigateTo('product.html?id=${item.id}')">
      ${imgContent}
      <div class="product-card__body">
        <h3 class="product-card__name">${item.name}</h3>
        <p class="product-card__desc">${item.desc || item.description}</p>
        <div class="product-card__footer">
          <div>
            <span class="product-card__price">${SITE_CONFIG.currencySymbol}${item.price.toFixed(2)}</span>
            ${oldPrice}
          </div>
          <button class="btn btn--primary btn--sm" onclick="handleQuickAdd(event, ${item.id})">
            Adicionar
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render a testimonial card
 * @param {Object} t - Testimonial data
 * @returns {string} HTML string
 */
function renderTestimonialCard(t) {
  const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
  return `
    <div class="testimonial-card reveal">
      <div class="testimonial-card__stars">${stars}</div>
      <p class="testimonial-card__text">${t.text}</p>
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar" style="display:flex;align-items:center;justify-content:center;font-size:24px;background:var(--color-surface);">
          U
        </div>
        <div>
          <div class="testimonial-card__name">${t.author}</div>
          <div class="testimonial-card__meta">${t.meta}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * ============================================================
 * UTILITY FUNCTIONS
 * ============================================================
 */

/**
 * Navigate to a page (simple SPA-like routing helper)
 */
function navigateTo(url) {
  window.location.href = url;
}

/**
 * Handle quick-add to cart (without opening detail page)
 */
function handleQuickAdd(e, itemId) {
  e.stopPropagation();
  const item = MENU_DATA.items.find(i => i.id === itemId);
  if (!item) return;
  Cart.add({
    id: item.id,
    name: item.name,
    price: item.price,
    option: item.options ? item.options[0] : "Regular",
    imgPlaceholder: item.imgPlaceholder,
  });
  showToast(`${item.name} adicionado ao carrinho!`);
}

/**
 * Toast notification
 */
function showToast(message, type = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "!"}</span>
    ${message}
  `;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: var(--color-surface);
    border: 1px solid var(--color-border-hover);
    color: var(--color-text);
    padding: 14px 20px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    z-index: 9999;
    animation: fadeSlideUp 0.3s cubic-bezier(0.16,1,0.3,1);
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/**
 * Scroll reveal observer
 */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/**
 * ============================================================
 * NAVBAR COMPONENT INIT
 * ============================================================
 */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".navbar__menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  const cartBtn = document.querySelector(".navbar__cart");
  const cartCount = document.querySelector(".navbar__cart-count");

  if (!navbar) return;

  // Scroll effect
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.remove("navbar--transparent");
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
      navbar.classList.add("navbar--transparent");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar__link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile toggle
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });
  }

  // Cart count
  const updateCartUI = ({ detail }) => {
    const count = Cart.getCount();
    if (cartCount) {
      cartCount.textContent = count;
      cartCount.classList.toggle("has-items", count > 0);
    }
  };
  document.addEventListener("cart:updated", updateCartUI);
  // Trigger initial render
  document.dispatchEvent(new CustomEvent("cart:updated"));

  // Cart button → navigate to cart
  if (cartBtn) {
    cartBtn.addEventListener("click", () => navigateTo("cart.html"));
  }
}

/**
 * ============================================================
 * COUNTDOWN TIMER
 * ============================================================
 */
function initCountdown(targetId, hours = 2) {
  const el = document.getElementById(targetId);
  if (!el) return;

  let total = hours * 3600;
  const tick = () => {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;

    const pad = n => String(n).padStart(2, "0");
    el.innerHTML = `
      <div class="promo-timer-unit"><div class="promo-timer-unit__num">${pad(h)}</div><div class="promo-timer-unit__label">Hrs</div></div>
      <div class="promo-timer-unit"><div class="promo-timer-unit__num">${pad(m)}</div><div class="promo-timer-unit__label">Min</div></div>
      <div class="promo-timer-unit"><div class="promo-timer-unit__num">${pad(s)}</div><div class="promo-timer-unit__label">Sec</div></div>
    `;
    if (total > 0) { total--; setTimeout(tick, 1000); }
  };
  tick();
}

// ============================================================
// INIT ON DOM READY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initReveal();
});
