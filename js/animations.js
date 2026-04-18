/**
 * ============================================================
 * ANIMATIONS MODULE — js/animations.js
 * Advanced micro-interactions and visual effects.
 * Include AFTER app.js on pages where you want the full effect.
 * ============================================================
 */

/**
 * Magnetic button effect
 * Buttons subtly follow the cursor on hover.
 */
function initMagneticButtons() {
  document.querySelectorAll(".btn--primary, .btn--accent").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/**
 * Parallax hero effect
 * The hero background shifts subtly as the user scrolls.
 */
function initHeroParallax() {
  const heroBg = document.querySelector(".hero__bg");
  const heroVisual = document.querySelector(".hero__visual");
  if (!heroBg) return;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (heroBg) heroBg.style.transform = `translateY(${y * 0.3}px)`;
    if (heroVisual) heroVisual.style.transform = `translateY(calc(-50% + ${y * 0.15}px))`;
  }, { passive: true });
}

/**
 * Cursor glow effect
 * A soft coloured glow follows the cursor across the page.
 */
function initCursorGlow() {
  const glow = document.createElement("div");
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,51,10,0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    will-change: left, top;
  `;
  document.body.appendChild(glow);

  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top  = e.clientY + "px";
  }, { passive: true });
}

/**
 * Number counter animation
 * Animates stat numbers counting up on scroll into view.
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll(".hero__stat-number");

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ""));
    const suffix = el.dataset.suffix || el.textContent.replace(/[0-9.]/g, "");
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
      if (current >= target) clearInterval(timer);
    }, duration / steps);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => {
    // Cache original text as data attribute
    el.dataset.target = parseFloat(el.textContent.replace(/[^0-9.]/g, ""));
    el.dataset.suffix = el.textContent.replace(/[0-9.]/g, "").replace("em", "em");
    observer.observe(el);
  });
}

/**
 * Staggered card entrance
 * Adds cascade delay to grid children automatically.
 */
function initGridStagger() {
  document.querySelectorAll(".grid").forEach(grid => {
    const children = grid.querySelectorAll(".reveal");
    children.forEach((child, i) => {
      if (!child.classList.contains("reveal-delay-1") &&
          !child.classList.contains("reveal-delay-2") &&
          !child.classList.contains("reveal-delay-3")) {
        child.style.transitionDelay = `${(i % 4) * 100}ms`;
      }
    });
  });
}

/**
 * Smooth page transitions
 * Fades out on navigate, fades in on load.
 */
function initPageTransitions() {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease";

  window.addEventListener("load", () => {
    document.body.style.opacity = "1";
  });

  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") ||
        href.startsWith("tel:") || href.startsWith("http")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.style.opacity = "0";
      setTimeout(() => { window.location.href = href; }, 400);
    });
  });
}

/**
 * Product card tilt effect
 * Cards tilt in 3D on hover for a tactile premium feel.
 */
function initCardTilt() {
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
      card.style.transition = "transform 0.1s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform 0.4s cubic-bezier(0.16,1,0.3,1)";
    });
  });
}

/**
 * Scroll progress bar
 * Thin progress line at top of page showing scroll depth.
 */
function initScrollProgress() {
  const bar = document.createElement("div");
  bar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrolled / max) * 100}%`;
  }, { passive: true });
}

// ============================================================
// AUTO-INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initCursorGlow();
  initScrollProgress();
  initPageTransitions();
  initHeroParallax();
  initGridStagger();

  // Heavier effects — only on non-touch devices
  if (!window.matchMedia("(hover: none)").matches) {
    initMagneticButtons();
    initCardTilt();
  }

  // Counter animation with small delay so reveal fires first
  setTimeout(initCounterAnimation, 300);
});
