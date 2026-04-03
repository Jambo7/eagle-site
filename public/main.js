/* =========================================================
   Eagle AI Labs — main.js
   Canvas energy field · Scroll reveals · Counter animation
   ========================================================= */

/* ── Energy Background Canvas ── */
class EnergyField {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.orbs = [];
    this.particles = [];
    this.mouse = { x: -9999, y: -9999 };
    this.raf = null;
    this.tick = 0;

    this.resize();
    this.buildOrbs();
    this.buildParticles();
    this.bindEvents();
    this.loop();
  }

  resize() {
    this.W = this.canvas.width  = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }

  buildOrbs() {
    // 5 large, slow-drifting energy blobs
    const seeds = [
      { nx: 0.12, ny: 0.22, r: 380, s: 0.18, p: 0.0 },
      { nx: 0.85, ny: 0.12, r: 420, s: 0.14, p: 1.1 },
      { nx: 0.50, ny: 0.72, r: 310, s: 0.22, p: 2.2 },
      { nx: 0.18, ny: 0.80, r: 260, s: 0.28, p: 0.7 },
      { nx: 0.88, ny: 0.58, r: 290, s: 0.16, p: 3.5 },
    ];
    this.orbs = seeds.map(s => ({
      x:  s.nx * this.W,
      y:  s.ny * this.H,
      r:  s.r,
      vx: (Math.random() - 0.5) * s.s,
      vy: (Math.random() - 0.5) * s.s,
      phase: s.p,
      pulseSpeed: 0.004 + Math.random() * 0.003,
    }));
  }

  buildParticles() {
    this.particles = Array.from({ length: 75 }, () => ({
      x:  Math.random() * this.W,
      y:  Math.random() * this.H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  0.8 + Math.random() * 1.6,
      op: 0.15 + Math.random() * 0.5,
    }));
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      // Re-clamp orb positions proportionally
      const scaleX = this.W / (this.W || 1);
      const scaleY = this.H / (this.H || 1);
      this.orbs.forEach(o => {
        o.x = Math.min(Math.max(o.x * scaleX, 0), this.W);
        o.y = Math.min(Math.max(o.y * scaleY, 0), this.H);
      });
    });

    window.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
    });
  }

  drawOrbs() {
    const ctx = this.ctx;
    this.orbs.forEach(o => {
      // Drift
      o.x += o.vx;
      o.y += o.vy;
      // Soft bounce
      if (o.x < -o.r * 0.4) o.vx =  Math.abs(o.vx);
      if (o.x >  this.W + o.r * 0.4) o.vx = -Math.abs(o.vx);
      if (o.y < -o.r * 0.4) o.vy =  Math.abs(o.vy);
      if (o.y >  this.H + o.r * 0.4) o.vy = -Math.abs(o.vy);

      // Pulse
      o.phase += o.pulseSpeed;
      const pulse = 1 + Math.sin(o.phase) * 0.13;
      const alpha = 0.038 + Math.sin(o.phase) * 0.016;
      const radius = o.r * pulse;

      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, radius);
      // Centre: bright cyan tint, edge: deep blue fading to transparent
      g.addColorStop(0,    `rgba(20, 230, 250, ${alpha * 1.6})`);
      g.addColorStop(0.25, `rgba(20, 130, 240, ${alpha * 1.1})`);
      g.addColorStop(0.55, `rgba(20,  70, 200, ${alpha * 0.55})`);
      g.addColorStop(1,    `rgba(2,    8,  18, 0)`);

      ctx.beginPath();
      ctx.arc(o.x, o.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
  }

  drawParticles() {
    const ctx = this.ctx;
    const mx = this.mouse.x;
    const my = this.mouse.y;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Gentle mouse repulsion
      const dx = p.x - mx;
      const dy = p.y - my;
      const d2 = dx * dx + dy * dy;
      if (d2 < 160 * 160 && d2 > 0) {
        const d = Math.sqrt(d2);
        const f = ((160 - d) / 160) * 0.025;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }

      // Speed cap
      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > 1.0) { p.vx /= spd; p.vy /= spd; }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap-around
      if (p.x < 0)       p.x = this.W;
      if (p.x > this.W)  p.x = 0;
      if (p.y < 0)       p.y = this.H;
      if (p.y > this.H)  p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20, 195, 240, ${p.op})`;
      ctx.fill();

      // Connections to nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const q = this.particles[j];
        const ex = p.x - q.x;
        const ey = p.y - q.y;
        const ed = ex * ex + ey * ey;
        if (ed < 130 * 130) {
          const lineAlpha = (1 - Math.sqrt(ed) / 130) * 0.14;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(20, 100, 215, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.tick++;
    this.drawOrbs();
    this.drawParticles();
    this.raf = requestAnimationFrame(() => this.loop());
  }
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

/* ── Counter Animation ── */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);

      const el       = entry.target;
      const target   = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals ?? '0', 10);
      const dur      = 1800;
      const start    = performance.now();

      const tick = (now) => {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / dur, 1);
        // Ease-out cubic
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = target * eased;
        el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });

  els.forEach(el => io.observe(el));
}

/* ── Navbar scroll class ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile nav toggle ── */
function initMobileNav() {
  const burger    = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when a link is clicked
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Confidence bar delayed fill ── */
function initConfBar() {
  const bar = document.querySelector('.cc-fill');
  if (!bar) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bar.style.animation = 'fillBar 1.4s 0.3s cubic-bezier(0.4,0,0.2,1) both';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  io.observe(bar);
}

/* ── Animated scan line restarter ── */
function initScanLine() {
  const line = document.querySelector('.scan-line');
  if (!line) return;
  // The CSS animation already handles this; nothing extra needed.
}

/* ── Signal row stagger animation ── */
function initSignalRows() {
  const rows = document.querySelectorAll('.ps-row');
  rows.forEach((row, i) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-8px)';
    row.style.transition = `opacity 0.4s ${i * 0.07}s ease, transform 0.4s ${i * 0.07}s ease`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rows.forEach(row => {
          row.style.opacity = '1';
          row.style.transform = 'translateX(0)';
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const pui = document.querySelector('.pui-signals');
  if (pui) io.observe(pui);
}

/* ── Neural SVG data-flow animation ── */
function initNeuralFlow() {
  const svg = document.querySelector('.neural-svg');
  if (!svg) return;

  // Pulse random nodes over time
  const nodes = svg.querySelectorAll('circle');
  if (!nodes.length) return;

  function pulseNode() {
    const idx = Math.floor(Math.random() * nodes.length);
    const node = nodes[idx];
    const origFill = node.getAttribute('fill');
    node.style.transition = 'fill 0.3s ease, filter 0.3s ease';
    node.style.fill = 'rgba(20, 253, 253, 0.35)';
    node.style.filter = 'drop-shadow(0 0 6px rgba(20,253,253,0.6))';
    setTimeout(() => {
      node.style.fill = origFill;
      node.style.filter = '';
    }, 500);
    setTimeout(pulseNode, 600 + Math.random() * 800);
  }
  setTimeout(pulseNode, 1500);
}

/* ── Active chart timeframe tab ── */
function initChartTabs() {
  const tabs = document.querySelectorAll('.chart-tfs span');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tfa'));
      tab.classList.add('tfa');
    });
  });
}

/* ── Smooth anchor scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── Init everything ── */
document.addEventListener('DOMContentLoaded', () => {
  // Canvas background
  const canvas = document.getElementById('bg-canvas');
  if (canvas) new EnergyField(canvas);

  initNavbar();
  initMobileNav();
  initReveal();
  initCounters();
  initConfBar();
  initScanLine();
  initSignalRows();
  initNeuralFlow();
  initChartTabs();
  initSmoothScroll();
});
