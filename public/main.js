/* =========================================================
   Eagle AI Labs, main.js
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
    this.particles = Array.from({ length: 55 }, () => ({
      x:  Math.random() * this.W,
      y:  Math.random() * this.H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r:  0.6 + Math.random() * 1.2,
      op: 0.08 + Math.random() * 0.22,
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
      const alpha = 0.026 + Math.sin(o.phase) * 0.01;
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
        if (ed < 110 * 110) {
          const lineAlpha = (1 - Math.sqrt(ed) / 110) * 0.07;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(20, 100, 215, ${lineAlpha})`;
          ctx.lineWidth = 0.5;
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

/* ── Neural / data-flow SVG, motion is CSS-only (no random neon pulses) ── */
function initNeuralFlow() {}

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

/* ── Oracle Brain Animation ── */
function initOracleBrain() {
  const canvas = document.getElementById('oracle-brain-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 130;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const points = [];

  for (let i = 0; i < N; i++) {
    const y   = 1 - (i / (N - 1)) * 2;
    const r   = Math.sqrt(1 - y * y);
    const th  = golden * i;
    points.push({
      x: Math.cos(th) * r, y, z: Math.sin(th) * r,
      firing: false, fireTime: 0,
      nextFire: Math.random() * 2000,
    });
  }

  const conns = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dz = points[i].z - points[j].z;
      const d  = Math.sqrt(dx*dx + dy*dy + dz*dz);
      if (d < 0.48) conns.push([i, j, d]);
    }
  }

  let rotY = 0, rotX = 0.25, last = 0;

  function project(p, rx, ry) {
    const cy = Math.cos(ry), sy = Math.sin(ry);
    const x1 = p.x * cy - p.z * sy;
    const z1 = p.x * sy + p.z * cy;
    const cx = Math.cos(rx), sx = Math.sin(rx);
    const y1 = p.y * cx - z1 * sx;
    const z2 = p.y * sx + z1 * cx;
    const W = canvas.width, H = canvas.height;
    const R = Math.min(W, H) * 0.3;
    const fov = 2.8, s = fov / (fov + z2 + 1);
    return { x: W/2 + x1*R*s, y: H/2 + y1*R*s, z: z2, s };
  }

  function frame(ts) {
    requestAnimationFrame(frame);
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const dt = ts - last; last = ts;
    rotY += 0.0025;
    rotX  = 0.25 + Math.sin(ts * 0.00012) * 0.08;

    points.forEach((p, i) => {
      if (!p.firing && ts > p.nextFire) {
        p.firing   = true;
        p.fireTime = ts;
        p.nextFire = ts + 1200 + Math.random() * 2500;
      }
      if (p.firing && ts - p.fireTime > 700) p.firing = false;
    });

    const proj = points.map(p => project(p, rotX, rotY));

    conns.forEach(([i, j, d]) => {
      const a = proj[i], b = proj[j];
      const bright = ((a.z + b.z) / 2 + 1) * 0.5;
      const firing = points[i].firing || points[j].firing;
      const base   = (0.48 - d) * 0.55 * bright;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      if (firing) {
        ctx.strokeStyle = `rgba(20,120,220,${Math.min(base * 2.2, 0.38)})`;
        ctx.lineWidth   = 0.75;
      } else {
        ctx.strokeStyle = `rgba(20,85,200,${base * 0.45})`;
        ctx.lineWidth   = 0.35;
      }
      ctx.stroke();
    });

    proj.forEach((p, i) => {
      const pt  = points[i];
      const fp  = pt.firing ? Math.min((ts - pt.fireTime) / 700, 1) : 0;
      const pulse = Math.sin(fp * Math.PI);
      const r   = (1.5 + pulse * 2.2) * p.s;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(r, 0.5), 0, Math.PI * 2);
      if (pt.firing) {
        ctx.shadowColor = 'rgba(20,85,230,0.5)';
        ctx.shadowBlur  = 4 * pulse;
        ctx.fillStyle   = `rgba(20,120,220,${0.22 + pulse * 0.35})`;
      } else {
        ctx.shadowBlur  = 0;
        ctx.fillStyle   = `rgba(20,75,200,${0.12 + ((p.z+1)*0.5) * 0.32})`;
      }
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  requestAnimationFrame(frame);
}

/* ── Platform section: candle-chart background drift on scroll (hero-style depth) ── */
function initPlatformBgParallax() {
  const section = document.getElementById('platform');
  const img = section && section.querySelector('.platform-bg-img');
  if (!section || !img) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    /* Normalized progress through viewport: 0 when below, 1 when above */
    const span = rect.height + vh;
    const t = (vh - rect.top) / span;
    const clamped = Math.max(0, Math.min(1, t));
    /* Subtle vertical drift, image moves slower than the section (parallax) */
    const px = (clamped - 0.5) * 32;
    img.style.transform = `translate3d(-50%, calc(-50% + ${px.toFixed(2)}px), 0)`;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

/* ── Chart Card Parallax + Autonomous Drift ── */
function initChartParallax() {
  const card = document.querySelector('.chart-card');
  if (!card) return;

  card.style.transition = 'none';

  let tRY = -6, tRX = 2, tTY = 0;
  let cRY = -6, cRX = 2, cTY = 0;
  let hovering = false;
  let mRY = -6, mRX = 2;

  const hero = card.closest('section') || document.body;

  hero.addEventListener('mousemove', e => {
    const r  = hero.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
    const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    mRY = -3 + dx * 10;
    mRX =  1 - dy * 6;
    hovering = true;
  });

  hero.addEventListener('mouseleave', () => { hovering = false; });

  function frame(ts) {
    requestAnimationFrame(frame);
    const t = ts * 0.001;
    if (hovering) {
      tRY = mRY; tRX = mRX; tTY = 0;
    } else {
      tRY = -6 + Math.sin(t * 0.38) * 2.2;
      tRX =  2 + Math.sin(t * 0.27 + 1.2) * 1.8;
      tTY =      Math.sin(t * 0.45 + 0.5) * 7;
    }
    const spd = hovering ? 0.12 : 0.025;
    cRY += (tRY - cRY) * spd;
    cRX += (tRX - cRX) * spd;
    cTY += (tTY - cTY) * spd;
    card.style.transform =
      `perspective(1000px) rotateY(${cRY.toFixed(3)}deg) rotateX(${cRX.toFixed(3)}deg) translateY(${cTY.toFixed(3)}px)`;
  }
  requestAnimationFrame(frame);
}

/* ── Init everything ── */
function initAll() {
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
  initOracleBrain();
  initChartParallax();
  initPlatformBgParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
