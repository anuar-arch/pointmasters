const torneos = [
  { flyer: "/media/flyer3ra.jpg" },
  { flyer: "/media/flyer4ta.jpg" }
];

const pagos = {
  banco: "MULTIVA",
  titular: "POINT MASTERS",
  clabe: "PENDIENTE",
  whatsapp: "5215568016634"
};

function renderTorneos() {
  const contenedor = document.getElementById("torneosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = torneos.map(t => `
    <div class="torneo-card">
      <img src="${t.flyer}" class="torneo-img">
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

document.addEventListener("DOMContentLoaded", () => {

  renderTorneos();
  renderPagos();

  // HERO ANIMATION
  const hero = document.querySelector(".hero-content");
  if (hero) {
    setTimeout(() => {
      hero.classList.add("hero-visible");
    }, 200);
  }

  // FADE SECTIONS
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