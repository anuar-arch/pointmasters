/* =========================
   DATA
========================= */

const torneos = [
  { flyer: "/media/flyer3ra.jpg" },
  { flyer: "/media/flyer4ta.jpg" }
];

const resultados = [
  { imagen: "/media/resultado1.jpg" },
  { imagen: "/media/resultado2.jpg" }
];

const pagos = {
  banco: "MULTIVA",
  titular: "POINT MASTERS",
  clabe: "PENDIENTE",
  whatsapp: "5215568016634"
};

/* =========================
   RENDER FUNCTIONS
========================= */

function renderTorneos() {
  const contenedor = document.getElementById("torneosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = torneos.map(t => `
    <div class="torneo-card">
      <img src="${t.flyer}" class="torneo-img">
    </div>
  `).join("");
}

function renderResultados() {
  const contenedor = document.getElementById("resultadosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = resultados.map(r => `
    <div class="resultado-card">
      <img src="${r.imagen}" class="resultado-img">
    </div>
  `).join("");
}

function renderPagos() {
  const contenedor = document.getElementById("datosPago");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="pagos-card">
      <p><strong>Banco:</strong> ${pagos.banco}</p>
      <p><strong>Titular:</strong> ${pagos.titular}</p>
      <p><strong>CLABE:</strong> ${pagos.clabe}</p>
    </div>
  `;
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderTorneos();
  renderResultados();
  renderPagos();

  // HERO ENTRY
  const hero = document.querySelector(".hero-animate");
  const title = document.querySelector(".hero-mask");

  if (hero) {
    setTimeout(() => hero.classList.add("show"), 200);
  }

  if (title) {
    setTimeout(() => title.classList.add("activate-mask"), 800);
  }

  // FADE ON SCROLL
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-section").forEach(section => {
    observer.observe(section);
  });

});