// ===== Año del footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Tema claro/oscuro (se guarda en el navegador) =====
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') ||
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(savedTheme);
themeBtn.addEventListener('click', () =>
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', t);
}

// ===== Header al hacer scroll + enlace activo =====
const header = document.getElementById('header');
const navAnchors = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('main section[id]');
addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 20);
  let current = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navAnchors.forEach(a => a.classList.toggle('active', a.hash === '#' + current));
}, { passive: true });

// ===== Menú móvil =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.textContent = open ? '✕' : '☰';
});
navAnchors.forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.textContent = '☰';
}));

// ===== Texto que se escribe solo (CAMBIAR las palabras si quieres) =====
const words = ['Arte digital', 'Modelado 3D', 'Edición de vídeo', 'Producción sonora', 'Game Design'];
const typed = document.getElementById('typed');
let w = 0, c = 0, deleting = false;
(function type() {
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!deleting && c === word.length) { deleting = true; return setTimeout(type, 1600); }
  if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
  c += deleting ? -1 : 1;
  setTimeout(type, deleting ? 45 : 90);
})();

// ===== Animaciones al aparecer + contadores =====
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    e.target.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function countUp(el) {
  const target = +el.dataset.count;
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n;
    if (n === target) clearInterval(t);
  }, 30);
}

// ===== Filtro de proyectos =====
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card =>
    card.classList.toggle('hide', f !== 'all' && card.dataset.category !== f));
}));

// ===== Ventana de detalle (lee los data-* de cada tarjeta) =====
const modal = document.getElementById('modal');
const mImg = document.getElementById('modalImg');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mTools = document.getElementById('modalTools');
const mLink = document.getElementById('modalLink');

cards.forEach(card => {
  card.tabIndex = 0;
  card.addEventListener('click', () => openModal(card));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(card); });
});
function openModal(card) {
  const img = card.querySelector('img');
  mImg.src = img.src;
  mImg.alt = img.alt;
  mTitle.textContent = card.dataset.title;
  mDesc.textContent = card.dataset.desc;
  mTools.textContent = card.dataset.tools;
  mLink.style.display = card.dataset.link ? 'inline-flex' : 'none';
  mLink.href = card.dataset.link || '#';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== Envío del formulario sin recargar la página (Formspree) =====
const form = document.querySelector('.form');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async e => {
  e.preventDefault();
  status.textContent = 'Enviando...';
  try {
    const res = await fetch(form.action, {
      method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
    });
    status.textContent = res.ok ? '¡Gracias! Te responderé pronto.' : 'Error al enviar. Escríbeme por correo.';
    if (res.ok) form.reset();
  } catch {
    status.textContent = 'Error de conexión. Escríbeme por correo.';
  }
});

// ===== Brillo que sigue al cursor =====
const glow = document.querySelector('.cursor-glow');
addEventListener('pointermove', e => {
  glow.style.setProperty('--x', e.clientX + 'px');
  glow.style.setProperty('--y', e.clientY + 'px');
}, { passive: true });

// ===== Inclinación 3D de las tarjetas =====
if (matchMedia('(hover: hover)').matches) {
  cards.forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--ry', x * 10 + 'deg');
      card.style.setProperty('--rx', -y * 10 + 'deg');
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}
