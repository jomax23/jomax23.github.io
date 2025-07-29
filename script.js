function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
  
}

const textos = {
  escribirHabilidades: "HABILIDADES",
  escribirTrabajos: "TRABAJOS",
  escribirProyectos: "PROYECTOS"
};

const velocidad = 75; // tiempo entre letras (ms)
const esperaAntesDeBorrar = 3000; // 3 segundos
const esperaAntesDeRepetir = 500; // 0.5 segundos

let estado = "escribiendo"; // estados: escribiendo, esperando, borrando, esperandoRepetir
let startTime = null;

function loopAnimacion(timestamp) {
  if (!startTime) startTime = timestamp;
  const progreso = timestamp - startTime;

  if (estado === "escribiendo" && progreso >= velocidad) {
    for (let id in textos) {
      const span = document.getElementById(id);
      const texto = textos[id];
      if (span.textContent.length < texto.length) {
        span.textContent += texto.charAt(span.textContent.length);
      }
    }

    const terminado = Object.entries(textos).every(
      ([id, texto]) => document.getElementById(id).textContent.length === texto.length
    );

    if (terminado) {
      estado = "esperando";
      startTime = timestamp;
    } else {
      startTime = timestamp;
    }
  }

  else if (estado === "esperando" && progreso >= esperaAntesDeBorrar) {
    estado = "borrando";
    startTime = timestamp;
  }

  else if (estado === "borrando" && progreso >= velocidad) {
    for (let id in textos) {
      const span = document.getElementById(id);
      if (span.textContent.length > 0) {
        span.textContent = span.textContent.slice(0, -1);
      }
    }

    const vaciado = Object.values(textos).every(
      (_, i) => {
        const id = Object.keys(textos)[i];
        return document.getElementById(id).textContent.length === 0;
      }
    );

    if (vaciado) {
      estado = "esperandoRepetir";
      startTime = timestamp;
    } else {
      startTime = timestamp;
    }
  }

  else if (estado === "esperandoRepetir" && progreso >= esperaAntesDeRepetir) {
    estado = "escribiendo";
    startTime = timestamp;
  }

  requestAnimationFrame(loopAnimacion);
}

window.onload = () => {
  requestAnimationFrame(loopAnimacion);
};
