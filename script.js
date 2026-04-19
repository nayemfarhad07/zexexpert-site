document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});

const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.dataset.done === 'true') return;
    el.dataset.done = 'true';
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();
    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * ease);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(update);
  });
}, { threshold: 0.35 });
counters.forEach((c) => observer.observe(c));

document.getElementById('exploreBtn')?.addEventListener('click', () => {
  const target = document.getElementById('services');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('contactBtn')?.addEventListener('click', () => {
  window.open('https://t.me/fensat', '_blank');
});

document.querySelectorAll('.glow-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const glow = card.querySelector('.glow-spot');
    if (!glow) return;
    const rect = card.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top = (e.clientY - rect.top) + 'px';
  });
});
