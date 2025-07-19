// Esperar al DOM cargado
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll para enlaces internos
  const enlaces = document.querySelectorAll('a[href^="#"]');

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", e => {
      e.preventDefault();
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Scrollspy: resaltar enlace del nav según la sección activa
  const secciones = document.querySelectorAll("section");
  const opciones = {
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      const id = entrada.target.getAttribute("id");
      const enlace = document.querySelector(`nav a[href="#${id}"]`);

      if (entrada.isIntersecting && enlace) {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("activo"));
        enlace.classList.add("activo");
      }
    });
  }, opciones);

  secciones.forEach(seccion => observer.observe(seccion));

  // Lógica opcional para menú móvil (si lo implementas en el futuro)
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("abierto");
    });
  }
});
