console.log("MAIN CARGADO");

/* =========================
   DATA
========================= */

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

document.addEventListener("DOMContentLoaded", function () {
  renderTorneos();
  renderPagos();
});