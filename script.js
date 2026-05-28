/* =========================================================
   PayWallet — Interactions & Animations
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('hamburger');
  const mobile = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobile.classList.toggle('open');
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobile.classList.remove('open');
  }));

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // small stagger inside a group
        const i = [...entry.target.parentElement.children].indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Number counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const formatNum = (n) => {
    if (n >= 1000) return n.toLocaleString('en-IN');
    return n.toString();
  };
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.floor(target * eased);
      el.textContent = formatNum(value);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target);
    };
    requestAnimationFrame(tick);
  };
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObs.observe(c));

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Subtle parallax on hero floating cards ---------- */
  const heroPhone = document.querySelector('.hero-phone');
  if (heroPhone) {
    const cards = heroPhone.querySelectorAll('.floating-card');
    heroPhone.addEventListener('mousemove', (e) => {
      const rect = heroPhone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      cards.forEach((c, i) => {
        const depth = (i + 1) * 8;
        c.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
    heroPhone.addEventListener('mouseleave', () => {
      cards.forEach(c => c.style.transform = '');
    });
  }

  /* ---------- Tilt effect on feature & stat cards ---------- */
  const tiltCards = document.querySelectorAll('.feature-card, .stat-card, .trust-cell, .review-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -6;
      const ry = (px - 0.5) * 6;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---------- Phone "live" wallet — randomize tiny details ---------- */
  const balanceEl = document.querySelector('.balance');
  if (balanceEl) {
    let base = 12450;
    setInterval(() => {
      base += Math.floor(Math.random() * 14 - 5);
      balanceEl.textContent = '₹' + base.toLocaleString('en-IN') + '.00';
    }, 4000);
  }

  /* ---------- Cashback amount tick ---------- */
  const cbAmount = document.querySelector('.cb-amount');
  if (cbAmount) {
    let cb = 48.50;
    setInterval(() => {
      cb += Math.random() * 0.6;
      cbAmount.textContent = '₹' + cb.toFixed(2);
    }, 5000);
  }

  /* ---------- Confetti on Download App click (subtle) ---------- */
  document.querySelectorAll('.btn-primary, .store').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  });

  function spawnConfetti(x, y) {
    const colors = ['#14b8a6', '#ff6a4d', '#a78bfa', '#38bdf8', '#fbbf24', '#34d399'];
    for (let i = 0; i < 22; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = x + 'px';
      piece.style.top = y + 'px';
      const dx = (Math.random() - 0.5) * 240;
      const dy = (Math.random() - 1) * 240;
      const rot = (Math.random() - 0.5) * 720;
      piece.style.setProperty('--dx', dx + 'px');
      piece.style.setProperty('--dy', dy + 'px');
      piece.style.setProperty('--rot', rot + 'deg');
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 1200);
    }
  }
});

/* Inject confetti CSS once */
const style = document.createElement('style');
style.textContent = `
  .confetti{
    position: fixed; width: 8px; height: 12px; border-radius: 2px;
    pointer-events: none; z-index: 9999;
    animation: confettiFly 1.1s cubic-bezier(.2,.6,.3,1) forwards;
  }
  @keyframes confettiFly {
    0% { transform: translate(-50%,-50%) rotate(0); opacity: 1; }
    100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) rotate(var(--rot)); opacity: 0; }
  }
`;
document.head.appendChild(style);
