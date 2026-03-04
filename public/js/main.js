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
   RESULTADOS EN TIEMPO REAL
========================= */

function renderResultados() {
  const contenedor = document.getElementById("resultadosContainer");
  if (!contenedor) return;

  const linkResultados = "https://1drv.ms/x/c/983d63ddcfada96f/IQCiUEC4Bt1iSKl_7rl4SXwzAY3YIa1OTOhGa-Jb1BS1CZY";

  contenedor.innerHTML = `
    <div style="
      width:100%;
      max-width:1000px;
      margin:auto;
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 20px 40px rgba(0,0,0,0.4);
    ">
      <iframe 
        src="${linkResultados}"
        width="100%"
        height="600"
        frameborder="0"
        style="border:0;background:white">
      </iframe>
    </div>
  `;
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {
  renderTorneos();
  renderPagos();
  renderResultados();
});