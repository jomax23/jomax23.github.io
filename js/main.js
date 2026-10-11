// ===== Año del footer =====
document.getElementById('year').textContent = new Date().getFullYear();

const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;

// =====================================================================
// ===== TRADUCCIONES (CAMBIAR aquí cualquier texto de la web) =====
// =====================================================================
const I18N = {
  es: {
    'meta.title': 'José María Martínez de la Casa | Game Artist & Diseñador de Videojuegos',
    'meta.desc': 'Portfolio de José María Martínez de la Casa Álvarez, diseñador y desarrollador de videojuegos. Arte digital, modelado 3D, edición de vídeo y sonido.',
    'skip': 'Saltar al contenido',

    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.path': 'Trayectoria',
    'nav.contact': 'Contacto',

    'aria.lang': 'Cambiar idioma',
    'aria.theme': 'Cambiar tema',
    'aria.menu': 'Abrir menú',
    'aria.menuClose': 'Cerrar menú',
    'aria.down': 'Bajar',
    'aria.close': 'Cerrar',

    'hero.badge': 'Disponible para prácticas',
    'hero.hello': 'Hola, soy',
    'hero.role': 'Diseñador y Desarrollador de Videojuegos',
    'hero.desc': 'Estudiante de último curso en la Universitat Jaume I, en búsqueda de una oportunidad laboral en el sector creativo. Busco seguir desarrollándome como diseñador, aportar mis conocimientos en arte 2D, modelado 3D, edición de vídeo y producción sonora, y demostrar mis habilidades trabajando en proyectos profesionales.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV ↓',
    'hero.photoAlt': 'Foto de José María Martínez de la Casa',
    'typed': ['Arte digital', 'Modelado 3D', 'Edición de vídeo', 'Producción sonora', 'Game Design'],
    'marquee': 'Arte digital ✦ Modelado 3D ✦ Edición de vídeo ✦ Producción sonora ✦ Game Design ✦ ',

    'about.eyebrow': '01 · Sobre mí',
    'about.title': 'Apasionado por el arte y el diseño',
    'about.p1': 'Desde pequeño me ha gustado dibujar, pintar y hacer manualidades. Conforme conocía más sobre informática fui aprendiendo técnicas y estilos que me llevaron a querer dedicarme al <strong>arte digital</strong>.',
    'about.p2': 'Además del diseño, me encanta editar fotos y vídeos, modelar en 3D y componer música. Me considero responsable, trabajador y con muchas ganas de aprender en un equipo real.',
    'about.spec': '<span>Especialización</span>Arte, edición de imagen/vídeo y sonido',
    'about.edu': '<span>Educación</span>Grado en DDV · Universitat Jaume I',
    'about.lang': '<span>Idiomas</span>Español, Valenciano, Inglés',
    'about.loc': 'Ubicación',

    'stats.projects': 'Proyectos completados',
    'stats.tools': 'Herramientas dominadas',
    'stats.years': 'Años formándome',

    'projects.eyebrow': '02 · Proyectos',
    'projects.title': 'Trabajos seleccionados',
    'projects.hint': 'Haz clic en cualquier proyecto para ver los detalles.',
    'filter.all': 'Todos',
    'filter.3d': 'Modelos 3D',
    'filter.2d': 'Ilustración / Fondos',
    'filter.game': 'Videojuegos',

    'card.2d': 'Ilustración 2D',
    'card.3d': 'Modelo 3D',
    'card.mark': 'Mark Minimalista',
    'card.sully': 'Sully Minimalista',
    'card.sword': 'Espada de Tanjiro',
    'card.room': 'Modelo 3D de habitación',
    'card.cologne': 'Bote de colonia',
    'card.hat': 'Sombrero de Luffy',
    'card.ben': 'Ben Lobo',
    'card.ben2': 'Ben Lobo II',
    'card.lowpoly': 'Objetos Low Poly para Videojuegos',
    'card.gameAssets': 'Modelado 3D · Game Assets',

    'skills.eyebrow': '03 · Habilidades',
    'skills.title': 'Herramientas con las que trabajo',
    'skills.g1': '🎨 Diseño y 3D',
    'skills.g2': '🖼 Imagen',
    'skills.g3': '🎬 Vídeo y sonido',
    'skills.g4': '🤝 Soft skills',
    'lvl.adv': 'Avanzado',
    'lvl.int': 'Intermedio',
    'lvl.basic': 'Básico',
    'soft.team': 'Trabajo en equipo',
    'soft.resp': 'Responsabilidad',
    'soft.learn': 'Aprendizaje rápido',
    'soft.comm': 'Comunicación',
    'soft.time': 'Gestión del tiempo',

    'path.eyebrow': '04 · Trayectoria',
    'path.title': 'Formación y experiencia',
    't.pro': 'Experiencia profesional',
    't1.date': '2021 — Actualidad',
    't1.title': 'Grado en Diseño y Desarrollo de Videojuegos',
    't1.desc': 'Formación especializada en el desarrollo de videojuegos, con interés en arte 2D, modelado 3D, diseño visual, edición y creación de contenido digital.',
    't2.date': 'Varios años - Actualidad',
    't2.title': 'Creador de contenido digital',
    't2.place': 'Proyectos personales · Online',
    't2.desc': 'Creación de contenido de entretenimiento y arte digital, incluyendo directos, AMVs, ilustraciones, edición de imágenes y diseño de pósters.',
    't3.title': 'Diseñador de logos',
    't3.place': 'Proyecto para cuenta de preparación de oposiciones',
    't3.desc': 'Diseño de identidad visual y creación de logos adaptados a las necesidades del proyecto.',
    't4.date': '11 años',
    't4.title': 'Músico profesional',
    't4.desc': 'Experiencia musical profesional durante 11 años, desarrollando disciplina, trabajo en equipo y experiencia en producción e interpretación sonora.',
    't5.title': 'Animador de eventos',
    't5.desc': 'Participación en animación y producción de eventos, trabajando directamente con público y equipos de organización.',

    'contact.eyebrow': '05 · Contacto',
    'contact.title': '¿Trabajamos juntos?',
    'contact.desc': 'Busco una oportunidad para crecer como diseñador, aportar mis habilidades y formar parte de un equipo creativo. Si estás interesado en mi perfil, no dudes en contactarme.',
    'contact.mail': 'Correo',
    'contact.phone': 'Teléfono',

    'form.label': '¡Escríbeme!',
    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.msg': 'Mensaje',
    'form.send': 'Enviar mensaje',
    'form.sending': 'Enviando...',
    'form.ok': '¡Gracias! Te responderé pronto.',
    'form.error': 'Error al enviar. Escríbeme por correo.',
    'form.netError': 'Error de conexión. Escríbeme por correo.',

    'footer.top': 'Volver arriba ↑',
    'modal.link': 'Ver proyecto ↗'
  },

  en: {
    'meta.title': 'José María Martínez de la Casa | Game Artist & Video Game Designer',
    'meta.desc': 'Portfolio of José María Martínez de la Casa Álvarez, video game designer and developer. Digital art, 3D modeling, video editing and sound.',
    'skip': 'Skip to content',

    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.path': 'Background',
    'nav.contact': 'Contact',

    'aria.lang': 'Change language',
    'aria.theme': 'Toggle theme',
    'aria.menu': 'Open menu',
    'aria.menuClose': 'Close menu',
    'aria.down': 'Scroll down',
    'aria.close': 'Close',

    'hero.badge': 'Available for internships',
    'hero.hello': "Hi, I'm",
    'hero.role': 'Video Game Designer & Developer',
    'hero.desc': "Final-year student at Universitat Jaume I, looking for a job opportunity in the creative industry. I want to keep growing as a designer, bring my skills in 2D art, 3D modeling, video editing and sound production, and prove what I can do on professional projects.",
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV ↓',
    'hero.photoAlt': 'Photo of José María Martínez de la Casa',
    'typed': ['Digital art', '3D modeling', 'Video editing', 'Sound production', 'Game Design'],
    'marquee': 'Digital art ✦ 3D modeling ✦ Video editing ✦ Sound production ✦ Game Design ✦ ',

    'about.eyebrow': '01 · About me',
    'about.title': 'Passionate about art and design',
    'about.p1': "I've loved drawing, painting and making crafts ever since I was a kid. As I learned more about computers, I picked up techniques and styles that made me want to work in <strong>digital art</strong>.",
    'about.p2': "Besides design, I love editing photos and videos, 3D modeling and composing music. I'm responsible, hardworking and eager to learn as part of a real team.",
    'about.spec': '<span>Specialization</span>Art, image/video editing and sound',
    'about.edu': '<span>Education</span>BSc in Video Game Design & Development · Universitat Jaume I',
    'about.lang': '<span>Languages</span>Spanish, Valencian, English',
    'about.loc': 'Location',

    'stats.projects': 'Completed projects',
    'stats.tools': 'Tools mastered',
    'stats.years': 'Years of training',

    'projects.eyebrow': '02 · Projects',
    'projects.title': 'Selected work',
    'projects.hint': 'Click any project to see the details.',
    'filter.all': 'All',
    'filter.3d': '3D Models',
    'filter.2d': 'Illustration / Wallpapers',
    'filter.game': 'Video games',

    'card.2d': '2D Illustration',
    'card.3d': '3D Model',
    'card.mark': 'Minimalist Mark',
    'card.sully': 'Minimalist Sully',
    'card.sword': "Tanjiro's Sword",
    'card.room': '3D Room Model',
    'card.cologne': 'Cologne Bottle',
    'card.hat': "Luffy's Hat",
    'card.ben': 'Ben Wolf',
    'card.ben2': 'Ben Wolf II',
    'card.lowpoly': 'Low Poly Game Objects',
    'card.gameAssets': '3D Modeling · Game Assets',

    'skills.eyebrow': '03 · Skills',
    'skills.title': 'Tools I work with',
    'skills.g1': '🎨 Design & 3D',
    'skills.g2': '🖼 Image',
    'skills.g3': '🎬 Video & sound',
    'skills.g4': '🤝 Soft skills',
    'lvl.adv': 'Advanced',
    'lvl.int': 'Intermediate',
    'lvl.basic': 'Basic',
    'soft.team': 'Teamwork',
    'soft.resp': 'Responsibility',
    'soft.learn': 'Fast learner',
    'soft.comm': 'Communication',
    'soft.time': 'Time management',

    'path.eyebrow': '04 · Background',
    'path.title': 'Education & experience',
    't.pro': 'Professional experience',
    't1.date': '2021 — Present',
    't1.title': 'BSc in Video Game Design & Development',
    't1.desc': 'Specialized training in video game development, with a focus on 2D art, 3D modeling, visual design, editing and digital content creation.',
    't2.date': 'Several years - Present',
    't2.title': 'Digital content creator',
    't2.place': 'Personal projects · Online',
    't2.desc': 'Creating entertainment content and digital art, including livestreams, AMVs, illustrations, photo editing and poster design.',
    't3.title': 'Logo designer',
    't3.place': 'Project for a civil service exam prep account',
    't3.desc': 'Visual identity design and logo creation tailored to the needs of the project.',
    't4.date': '11 years',
    't4.title': 'Professional musician',
    't4.desc': '11 years of professional musical experience, building discipline, teamwork and experience in sound production and performance.',
    't5.title': 'Event entertainer',
    't5.desc': 'Took part in event entertainment and production, working directly with audiences and organizing teams.',

    'contact.eyebrow': '05 · Contact',
    'contact.title': 'Shall we work together?',
    'contact.desc': "I'm looking for an opportunity to grow as a designer, contribute my skills and be part of a creative team. If you're interested in my profile, feel free to get in touch.",
    'contact.mail': 'Email',
    'contact.phone': 'Phone',

    'form.label': 'Write to me!',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.msg': 'Message',
    'form.send': 'Send message',
    'form.sending': 'Sending...',
    'form.ok': "Thanks! I'll get back to you soon.",
    'form.error': 'Something went wrong. Please email me instead.',
    'form.netError': 'Connection error. Please email me instead.',

    'footer.top': 'Back to top ↑',
    'modal.link': 'View project ↗'
  }
};

// Claves cuyo texto lleva HTML dentro (<strong>, <span>...)
const HTML_KEYS = new Set(['about.p1', 'about.spec', 'about.edu', 'about.lang']);

let lang = localStorage.getItem('lang') ||
  (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
if (localStorage.getItem('lang')) lang = localStorage.getItem('lang');

const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N.es[key] ?? key;

const langBtn = document.getElementById('langToggle');
const form = document.querySelector('.form');
const metaDesc = document.querySelector('meta[name="description"]');

// ===== Banderas del botón de idioma =====
const FLAGS = {
  es: `<svg viewBox="0 0 750 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
         <rect width="750" height="500" fill="#AA151B"/>
         <rect y="125" width="750" height="250" fill="#F1BF00"/>
       </svg>`,
  en: `<svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
         <clipPath id="ukClip"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath>
         <path d="M0,0v30h60v-30z" fill="#012169"/>
         <path d="M0,0 60,30M60,0 0,30" stroke="#fff" stroke-width="6"/>
         <path d="M0,0 60,30M60,0 0,30" clip-path="url(#ukClip)" stroke="#C8102E" stroke-width="4"/>
         <path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/>
         <path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/>
       </svg>`
};


function applyLang(newLang) {
  lang = newLang;
  localStorage.setItem('lang', lang);
  root.lang = lang;
  document.title = t('meta.title');
  if (metaDesc) metaDesc.content = t('meta.desc');

  // Textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (HTML_KEYS.has(key)) el.innerHTML = t(key);
    else el.textContent = t(key);
  });
  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  // alt de imágenes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t(el.dataset.i18nAlt);
  });

  // Etiqueta "¡Escríbeme!" del formulario (CSS la lee de data-label)
  form.dataset.label = t('form.label');

  // Muestra la bandera del idioma actual
  langBtn.innerHTML = FLAGS[lang];
  langBtn.title = t('aria.lang');

  // aria del menú según esté abierto o cerrado
  burger.setAttribute('aria-label',
    navLinks.classList.contains('open') ? t('aria.menuClose') : t('aria.menu'));

  // Reinicia el texto que se escribe solo con las nuevas palabras
  w = 0; c = 0; deleting = false;

  // Si la ventana de un proyecto está abierta, se traduce también
  if (currentCard) fillModal(currentCard);
}

langBtn.addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));

// ===== Tema claro/oscuro (se guarda en el navegador) =====
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') ||
  (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(savedTheme);
themeBtn.addEventListener('click', () =>
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
function setTheme(th) {
  root.dataset.theme = th;
  themeBtn.textContent = th === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', th);
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
  burger.setAttribute('aria-label', t('aria.menu'));
  burger.textContent = '☰';
}
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? t('aria.menuClose') : t('aria.menu'));
  burger.textContent = open ? '✕' : '☰';
});
navAnchors.forEach(a => a.addEventListener('click', closeMenu));

// ===== Texto que se escribe solo (las palabras están en I18N → 'typed') =====
const typed = document.getElementById('typed');
let w = 0, c = 0, deleting = false;
(function type() {
  const words = t('typed');
  const word = words[w % words.length];
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
  el.style.minWidth = (String(target).length + 1) + 'ch';
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n;
    if (n === target) clearInterval(timer);
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
let currentCard = null;

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
  root.style.scrollBehavior = 'auto';
  scrollTo(0, savedScroll);
  root.style.scrollBehavior = '';
}

// Rellena la ventana en el idioma actual (usa data-title-en / data-desc-en si existen)
function fillModal(card) {
  const d = card.dataset;
  const img = card.querySelector('img');
  mImg.src = img.currentSrc || img.src;
  mImg.alt = img.alt;
  mTitle.textContent = (lang === 'en' && d.titleEn) ? d.titleEn : d.title;
  mDesc.textContent = (lang === 'en' && d.descEn) ? d.descEn : d.desc;
  mTools.textContent = d.tools;
  mLink.style.display = d.link ? 'inline-flex' : 'none';
  mLink.href = d.link || '#';
}

function openModal(card) {
  currentCard = card;
  fillModal(card);
  modal.querySelector('.modal__body').scrollTop = 0;
  lockScroll();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  if (!modal.classList.contains('open')) return;
  currentCard = null;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  unlockScroll();
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMenu(); } });

// ===== Envío del formulario sin recargar la página (Formspree) =====
const status = document.getElementById('formStatus');
form.addEventListener('submit', async e => {
  e.preventDefault();
  status.textContent = t('form.sending');
  try {
    const res = await fetch(form.action, {
      method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
    });
    status.textContent = res.ok ? t('form.ok') : t('form.error');
    if (res.ok) form.reset();
  } catch {
    status.textContent = t('form.netError');
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

// ===== Aplica el idioma al cargar (al final, cuando todo existe) =====
applyLang(lang);
