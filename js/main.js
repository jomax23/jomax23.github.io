// ===== Año del footer =====
document.getElementById('year').textContent = new Date().getFullYear();

const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;

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
let ticking = false;
function onScroll() {
  header.classList.toggle('scrolled', scrollY > 20);
  let current = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navAnchors.forEach(a => a.classList.toggle('active', a.hash === '#' + current));
  ticking = false;
}
addEventListener('scroll', () => {
  if (document.body.classList.contains('modal-open')) return;
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

// ===== Menú móvil =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
function closeMenu() {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.textContent = '☰';
}
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.textContent = open ? '✕' : '☰';
});
navAnchors.forEach(a => a.addEventListener('click', closeMenu));

// ===== Texto que se escribe solo (CAMBIAR las palabras si quieres) =====
const words = ['Arte digital', 'Modelado 3D', 'Edición de vídeo', 'Producción sonora', 'Game Design'];
const typed = document.getElementById('typed');
let w = 0, c = 0, deleting = false;
(function type() {
  const word = words[w];
  // Espacio invisible cuando está vacío: la línea nunca pierde su altura
  typed.textContent = word.slice(0, c) || '\u200B';
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
  // Reserva el ancho del número final para que la caja no cambie de tamaño
  el.style.minWidth = (String(target).length + 1) + 'ch';
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
  cards.forEach(card => {
    const hide = f !== 'all' && card.dataset.category !== f;
    card.classList.toggle('hide', hide);
    if (!hide) card.classList.add('visible');
  });
}));

// ===== Ventana de detalle (lee los data-* de cada tarjeta) =====
const modal = document.getElementById('modal');
const mImg = document.getElementById('modalImg');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mTools = document.getElementById('modalTools');
const mLink = document.getElementById('modalLink');
let savedScroll = 0;

cards.forEach(card => {
  card.tabIndex = 0;
  card.addEventListener('click', () => openModal(card));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(card); });
});

function lockScroll() {
  savedScroll = scrollY;
  document.body.style.top = -savedScroll + 'px';
  document.body.classList.add('modal-open');
}
function unlockScroll() {
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  root.style.scrollBehavior = 'auto';           // vuelve al sitio sin animación
  scrollTo(0, savedScroll);
  root.style.scrollBehavior = '';
}

function openModal(card) {
  const img = card.querySelector('img');
  mImg.src = img.currentSrc || img.src;
  mImg.alt = img.alt;
  mTitle.textContent = card.dataset.title;
  mDesc.textContent = card.dataset.desc;
  mTools.textContent = card.dataset.tools;
  mLink.style.display = card.dataset.link ? 'inline-flex' : 'none';
  mLink.href = card.dataset.link || '#';
  modal.querySelector('.modal__body').scrollTop = 0;
  lockScroll();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  unlockScroll();
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMenu(); } });

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

// ===== Solo en ordenador: brillo del cursor + inclinación 3D de tarjetas =====
if (canHover) {
  const glow = document.querySelector('.cursor-glow');
  addEventListener('pointermove', e => {
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
  }, { passive: true });

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
