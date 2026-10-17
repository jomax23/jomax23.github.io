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

    'hero.badge': 'Disponible para oportunidades profesionales',
    'hero.hello': 'Hola, soy',
    'hero.role': 'Diseñador y Desarrollador de Videojuegos',
    'hero.desc': 'Diseñador y desarrollador de videojuegos con formación en la Universitat Jaume I y experiencia en proyectos de desarrollo con Unity, diseño visual y creación de contenido digital. Mi trabajo abarca el arte 2D, el modelado 3D, la edición de vídeo y la producción sonora. Combino creatividad y conocimientos técnicos para desarrollar proyectos visuales y multimedia, con un enfoque orientado a la calidad y a los objetivos de cada proyecto.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV ↓',
    'hero.photoAlt': 'Foto de José María Martínez de la Casa',
    'typed': ['Arte digital', 'Modelado 3D', 'Edición de vídeo', 'Producción sonora', 'Diseño de videojuegos'],
    'marquee': 'Arte digital ✦ Modelado 3D ✦ Edición de vídeo ✦ Producción sonora ✦ Game Design ✦ ',

    'about.eyebrow': '01 · Sobre mí',
    'about.title': 'Diseño, creatividad y tecnología',
    'about.p1': 'Mi trabajo combina <strong>diseño visual</strong>, <strong>arte digital</strong> y <strong>herramientas de creación multimedia</strong>. Mi formación en Diseño y Desarrollo de Videojuegos me ha permitido desarrollar competencias en arte 2D, modelado 3D y creación de contenidos digitales, aplicables tanto al desarrollo de videojuegos como a otros proyectos creativos.',
    'about.p2': 'También cuento con experiencia en edición de imagen y vídeo, producción sonora, creación musical y diseño de logotipos. Me caracterizo por la responsabilidad, la capacidad de adaptación y la atención al detalle, cualidades que aplico en cada proyecto para conseguir resultados de calidad.',
    'about.spec': '<span>Especialización</span>Arte digital, modelado 3D, edición audiovisual y producción sonora',
    'about.edu': '<span>Educación</span>Grado en Diseño y Desarrollo de Videojuegos · Universitat Jaume I',
    'about.lang': '<span>Idiomas</span>Español, Valenciano, Inglés',
    'about.loc': 'Ubicación',

    'stats.projects': 'Proyectos completados',
    'stats.tools': 'Herramientas de trabajo',
    'stats.years': 'Años de formación',

    'projects.eyebrow': '02 · Proyectos',
    'projects.title': 'Trabajos seleccionados',
    'projects.hint': 'Una selección de proyectos de diseño, arte digital y modelado 3D que refleja mis competencias técnicas y creativas. Haz clic en cualquier proyecto para ver los detalles.',
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
    'skills.title': 'Herramientas y competencias',
    'skills.g1': '🎨 Diseño y 3D',
    'skills.g2': '📸 Imagen',
    'skills.g3': '🎬 Vídeo y sonido',
    'skills.g4': '🤝 Habilidades',
    'lvl.adv': 'Avanzado',
    'lvl.int': 'Intermedio',
    'lvl.basic': 'Básico',
    'soft.team': 'Trabajo en equipo',
    'soft.resp': 'Responsabilidad',
    'soft.learn': 'Capacidad de adaptación',
    'soft.comm': 'Comunicación',
    'soft.time': 'Gestión del tiempo',

    'path.eyebrow': '04 · Trayectoria',
    'path.title': 'Formación y experiencia profesional',
    't.pro': 'Experiencia profesional',
    't1.date': '2021 — Actualidad',
    't1.title': 'Grado en Diseño y Desarrollo de Videojuegos',
    't1.desc': 'Formación especializada en desarrollo de videojuegos, diseño visual, arte 2D, modelado 3D y creación de contenido digital.',
    't2.date': 'Varios años - Actualidad',
    't2.title': 'Creador de contenido digital',
    't2.place': 'Proyectos personales · Online',
    't2.desc': 'Creación y edición de contenido audiovisual y artístico para plataformas digitales, incluyendo directos, AMV, ilustraciones, edición de imágenes y diseño de pósteres.',
    't3.title': 'Diseño de logotipos',
    't3.place': 'Proyecto para cliente',
    't3.desc': 'Diseño de logotipos e identidad visual para un proyecto relacionado con la preparación de oposiciones, adaptando las propuestas gráficas a sus necesidades y objetivos de comunicación.',
    't4.date': '11 años',
    't4.title': 'Músico profesional',
    't4.desc': 'Doce años de experiencia como músico profesional, desarrollando competencias de interpretación musical, disciplina, coordinación y trabajo en equipo.',
    't5.title': 'Animación de eventos',
    't5.desc': 'Participación en actividades de animación y entretenimiento en eventos, contribuyendo al desarrollo de las actividades y a la atención del público.',

    'contact.eyebrow': '05 · Contacto',
    'contact.title': '¿Hablamos de tu próximo proyecto?',
    'contact.desc': 'Estoy abierto a colaborar en proyectos de diseño, desarrollo de videojuegos y creación de contenido digital en los que pueda aportar mis conocimientos técnicos y creativos. Si buscas un perfil multidisciplinar para tu equipo o proyecto, puedes ponerte en contacto conmigo.',
    'contact.mail': 'Correo',
    'contact.phone': 'Teléfono',

    'form.label': '¡Escríbeme!',
    'form.name': 'Nombre',
    'form.email': 'Correo electrónico',
    'form.msg': 'Mensaje',
    'form.send': 'Enviar mensaje',
    'form.sending': 'Enviando...',
    'form.ok': 'Gracias por contactar conmigo. Te responderé lo antes posible.',
    'form.error': 'Error al enviar. Escríbeme por correo.',
    'form.netError': 'No se ha podido enviar el mensaje. Puedes contactar conmigo directamente por correo electrónico.',

    'footer.top': 'Volver arriba ↑',
    'modal.link': 'Ver proyecto ↗'
  },

  en: {
    'meta.title': 'José María Martínez de la Casa | Game Artist & Video Game Designer',
    'meta.desc': 'Portfolio of José María Martínez de la Casa Álvarez, video game designer and developer. Digital art, 3D modeling, video editing and sound production.',
    'skip': 'Skip to content',

    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.path': 'Experience',
    'nav.contact': 'Contact',

    'aria.lang': 'Change language',
    'aria.theme': 'Change theme',
    'aria.menu': 'Open menu',
    'aria.menuClose': 'Close menu',
    'aria.down': 'Scroll down',
    'aria.close': 'Close',

    'hero.badge': 'Open to professional opportunities',
    'hero.hello': "Hi, I'm",
    'hero.role': 'Video Game Designer & Developer',
    'hero.desc': 'Video game designer and developer with an academic background from Universitat Jaume I and experience in Unity development, visual design and digital content creation. My work covers 2D art, 3D modeling, video editing and sound production. I combine creativity and technical skills to develop visual and multimedia projects, focusing on quality and project objectives.',
    'hero.ctaProjects': 'View Projects',
    'hero.ctaCv': 'Download CV ↓',
    'hero.photoAlt': 'Photo of José María Martínez de la Casa',
    'typed': ['Digital Art', '3D Modeling', 'Video Editing', 'Sound Production', 'Game Design'],
    'marquee': 'Digital Art ✦ 3D Modeling ✦ Video Editing ✦ Sound Production ✦ Game Design ✦ ',

    'about.eyebrow': '01 · About Me',
    'about.title': 'Design, Creativity & Technology',
    'about.p1': 'My work combines <strong>visual design</strong>, <strong>digital art</strong> and <strong>multimedia creation tools</strong>. My degree in Video Game Design and Development has helped me develop skills in 2D art, 3D modeling and digital content creation, applicable to both video game development and other creative projects.',
    'about.p2': 'I also have experience in image and video editing, sound production, music creation and logo design. I am known for my sense of responsibility, adaptability and attention to detail, qualities I bring to every project to achieve high-quality results.',
    'about.spec': '<span>Specialization</span>Digital art, 3D modeling, audiovisual editing and sound production',
    'about.edu': '<span>Education</span>Degree in Video Game Design and Development · Universitat Jaume I',
    'about.lang': '<span>Languages</span>Spanish, Valencian and English',
    'about.loc': 'Location',

    'stats.projects': 'Completed projects',
    'stats.tools': 'Work tools',
    'stats.years': 'Years of education',

    'projects.eyebrow': '02 · Projects',
    'projects.title': 'Selected Projects',
    'projects.hint': 'A selection of design, digital art and 3D modeling projects showcasing my technical and creative skills. Click on any project to view the details.',
    'filter.all': 'All',
    'filter.3d': '3D Models',
    'filter.2d': 'Illustrations / Wallpapers',
    'filter.game': 'Video Games',

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
    'card.lowpoly': 'Low-Poly Game Assets',
    'card.gameAssets': '3D Modeling · Game Assets',

    'skills.eyebrow': '03 · Skills',
    'skills.title': 'Tools & Skills',
    'skills.g1': '🎨 Design & 3D',
    'skills.g2': '📸 Image',
    'skills.g3': '🎬 Video & Sound',
    'skills.g4': '🤝 Professional Skills',
    'lvl.adv': 'Advanced',
    'lvl.int': 'Intermediate',
    'lvl.basic': 'Beginner',
    'soft.team': 'Teamwork',
    'soft.resp': 'Responsibility',
    'soft.learn': 'Adaptability',
    'soft.comm': 'Communication',
    'soft.time': 'Time Management',

    'path.eyebrow': '04 · Experience',
    'path.title': 'Education & Professional Experience',
    't.pro': 'Professional Experience',
    't1.date': '2021 — Present',
    't1.title': 'Degree in Video Game Design and Development',
    't1.desc': 'Specialized education in video game development, visual design, 2D art, 3D modeling and digital content creation.',
    't2.date': 'Several years — Present',
    't2.title': 'Digital Content Creator',
    't2.place': 'Personal Projects · Online',
    't2.desc': 'Creation and editing of audiovisual and artistic content for digital platforms, including livestreams, AMVs, illustrations, image editing and poster design.',
    't3.title': 'Logo Design',
    't3.place': 'Client Project',
    't3.desc': 'Logo and visual identity design for a project related to civil service exam preparation, tailoring graphic proposals to its needs and communication objectives.',
    't4.date': '12 years',
    't4.title': 'Professional Musician',
    't4.desc': 'Twelve years of professional music experience, developing musical performance, discipline, coordination and teamwork skills.',
    't5.title': 'Event Entertainment',
    't5.desc': 'Participation in event entertainment activities, helping deliver activities and engage with audiences.',

    'contact.eyebrow': '05 · Contact',
    'contact.title': "Let's Talk About Your Next Project",
    'contact.desc': 'I am open to collaborating on design, video game development and digital content creation projects where I can contribute my technical and creative skills. If you are looking for a multidisciplinary professional for your team or project, feel free to get in touch.',
    'contact.mail': 'Email',
    'contact.phone': 'Phone',

    'form.label': 'Get in Touch!',
    'form.name': 'Name',
    'form.email': 'Email Address',
    'form.msg': 'Message',
    'form.send': 'Send Message',
    'form.sending': 'Sending...',
    'form.ok': 'Thank you for getting in touch. I will reply as soon as possible.',
    'form.error': 'Failed to send the message. Please contact me by email.',
    'form.netError': 'The message could not be sent. You can contact me directly by email.',

    'footer.top': 'Back to Top ↑',
    'modal.link': 'View Project ↗'
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
