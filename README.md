# 🍔 Smash & Co — Restaurant Website Template

A complete, scalable, mobile-first restaurant website built with clean HTML, CSS, and vanilla JavaScript. Fully rebrandable for any food business.

---

## 📁 Folder Structure

```
burger-restaurant/
│
├── index.html              ← Home page
├── menu.html               ← Menu page
├── product.html            ← Product detail (dynamic via ?id=N)
├── about.html              ← About / Our Story
├── contact.html            ← Contact + form
├── cart.html               ← Cart / Order flow
│
├── css/
│   ├── tokens.css          ← Design tokens (colors, fonts, spacing)
│   ├── global.css          ← Reset, base styles, utilities
│   ├── navbar.css          ← Navbar component styles
│   └── components.css      ← All page/component styles
│
├── js/
│   └── app.js              ← Data layer, cart, renderers, utilities
│
├── components/
│   ├── navbar.html         ← Navbar HTML (reference/include)
│   └── footer.html         ← Footer HTML (reference/include)
│
├── pages/
│   ├── menu.html           ← Alternate menu path
│   ├── about.html          ← Full about page
│   ├── contact.html        ← Full contact page
│   └── cart.html           ← Full cart page
│
└── assets/
    └── img/                ← Place product and brand images here
```

---

## 🚀 Quick Start

1. Open `index.html` in a browser — no build step required.
2. For local development with live reload:
   ```bash
   npx serve .
   # or
   python3 -m http.server 3000
   ```

---

## 🎨 Rebranding for Another Business

### Step 1 — Update Design Tokens (`css/tokens.css`)
Change the color palette, fonts, and spacing to match your brand:
```css
:root {
  --color-primary: #C8330A;    /* Change to your brand color */
  --color-accent:  #F5A623;    /* Change to your accent color */
  --font-display:  'Playfair Display', serif;   /* Change font */
  --font-body:     'DM Sans', sans-serif;
}
```

**Pizza restaurant?** Try `--color-primary: #B5341B; --color-accent: #E8B84B;`  
**Sushi restaurant?** Try `--color-primary: #1A5276; --color-accent: #F0C040;`  
**Coffee shop?** Try `--color-primary: #4A2C2A; --color-accent: #D4A76A;`

### Step 2 — Update Business Config (`js/app.js`)
```javascript
const SITE_CONFIG = {
  brand: {
    name: "YOUR BRAND",          // ← Change this
    tagline: "Your tagline",     // ← Change this
    phone: "+1 (555) 000-0000",  // ← Change this
    email: "you@domain.com",     // ← Change this
    address: "123 Your Street",  // ← Change this
    hours: "Mon–Sun: 10am – 10pm"
  },
  currency: "$",
  freeDeliveryThreshold: 40,
  deliveryFee: 3.99,
  taxRate: 0.08,
};
```

### Step 3 — Replace Menu Data (`js/app.js`)
Update the `MENU_DATA` object:
```javascript
const MENU_DATA = {
  categories: [
    { id: "pizza",   label: "Pizzas",  icon: "🍕" },
    { id: "pasta",   label: "Pastas",  icon: "🍝" },
    { id: "drinks",  label: "Drinks",  icon: "🥤" },
    // Add as many as you need
  ],
  items: [
    {
      id: 1,
      name: "Margherita",
      category: "pizza",
      price: 12.99,
      description: "Classic tomato, fresh mozzarella, basil.",
      badges: ["hot"],           // Options: "hot", "new", "veg", "spicy"
      imgPlaceholder: "🍕",      // Emoji placeholder (replace with real img)
      img: "assets/img/pizza-margherita.jpg",
      options: ["Small", "Medium", "Large"],
    },
    // ...
  ]
};
```

### Step 4 — Replace Placeholder Emojis with Real Images
In each menu item, set `img` to a real image path. In `renderProductCard()`:
```javascript
// Find this line in app.js renderProductCard():
const imgContent = `<div style="font-size:80px...>${item.imgPlaceholder}</div>`

// Replace with:
const imgContent = `<img src="${item.img}" alt="${item.name}" class="product-card__img" loading="lazy"/>`
```

---

## 🗺️ Google Maps Integration

In `pages/contact.html`, replace the map placeholder with your embed:
```html
<div class="map-container" style="height:300px;padding:0;">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
    width="100%" height="100%" style="border:0;"
    allowfullscreen loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

---

## 🔍 SEO Checklist

### Per-page meta tags (in `<head>` of each page):
```html
<title>Page Name — Brand Name</title>
<meta name="description" content="160 char description with keywords"/>
<meta property="og:title"   content="Page Name"/>
<meta property="og:description" content="Page description"/>
<meta property="og:image"   content="https://yourdomain.com/assets/img/og.jpg"/>
<link rel="canonical"       href="https://yourdomain.com/page"/>
```

### Performance tips:
- Add `loading="lazy"` to all non-hero images
- Add `fetchpriority="high"` to hero image
- Use WebP format for all food photography
- Add `<link rel="preload" as="image" href="hero.webp"/>` in `<head>`
- Enable gzip/brotli compression on your server
- Use a CDN for static assets in production

### Structured Data (already on home page):
The `<script type="application/ld+json">` block on index.html tells Google your business is a Restaurant. Update the fields to match yours.

---

## 🛒 Cart System

The cart uses `localStorage` for persistence. It's a simple pub/sub pattern:
```javascript
Cart.add({ id, name, price, option, qty });
Cart.remove(id, option);
Cart.updateQty(id, option, qty);
Cart.getTotal();
Cart.getItems();
Cart.clear();

// Listen for changes:
document.addEventListener("cart:updated", ({ detail }) => {
  console.log(detail.items, detail.total);
});
```

To add a real backend, replace the `Cart.add()` calls with API requests and update the event system accordingly.

---

## 🧩 Component System

### Navbar
- **Auto-scroll effect**: Transparent → frosted glass on scroll
- **Active link**: Detects current page via `window.location.pathname`
- **Mobile drawer**: Full-screen animated slide-in
- **Cart counter**: Live badge, animated in/out

### Product Card
Generated via `renderProductCard(item)` — pass any menu item object.

### Testimonial Card
Generated via `renderTestimonialCard(t)` — pass any testimonial object.

### Promo Countdown
```javascript
initCountdown("element-id", hours); // e.g. initCountdown("promo-timer", 2)
```

### Toast Notification
```javascript
showToast("Your message here");        // success (default)
showToast("Something went wrong", "error");
```

### Scroll Reveal
Any element with class `reveal` will animate in when visible. Add `reveal-delay-N` (1–5) for staggered effect.

---

## 🔌 CMS-Ready Hints

To connect a headless CMS (Contentful, Sanity, etc.):

1. Replace `MENU_DATA` and `TESTIMONIALS` in `app.js` with async API calls
2. Add a loading state while data fetches
3. Use the same render functions — they accept plain objects

```javascript
// Example: fetch from API instead of hardcoded data
async function loadMenuData() {
  const res = await fetch("https://api.yourCMS.com/menu");
  const data = await res.json();
  // Map to same shape as MENU_DATA.items
  return data.map(item => ({
    id: item.sys.id,
    name: item.fields.name,
    price: item.fields.price,
    // ...
  }));
}
```

---

## 📸 Image Recommendations

| Use case          | Aspect ratio | Min size   | Format |
|-------------------|-------------|------------|--------|
| Product card      | 4:3         | 800×600px  | WebP   |
| Hero burger       | Free        | 1200×900px | WebP   |
| Team headshots    | 1:1         | 400×400px  | WebP   |
| OG social image   | 1.91:1      | 1200×630px | JPG    |

**Recommended free sources**: Unsplash, Pexels (search "burger", "food photography")

---

## ✅ Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

---

## 📄 License

MIT — free to use, modify, and distribute for personal and commercial projects.
