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

const resultadosLink = "https://1drv.ms/x/c/983d63ddcfada96f/IQCiUEC4Bt1iSKl_7rl4SXwzAY3YIa1OTOhGa-Jb1BS1CZY";

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
   RESULTADOS (BOTÓN + MODAL)
========================= */

function renderResultados() {
  const contenedor = document.getElementById("resultadosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div style="
      max-width:900px;
      margin:auto;
      text-align:center;
      padding:40px;
      border-radius:16px;
      background:rgba(8,20,35,0.95);
      color:white;
      box-shadow:0 20px 40px rgba(0,0,0,0.4);
    ">
      <h3 style="margin-bottom:10px">
        Resultados en Tiempo Real
      </h3>

      <p style="opacity:0.8;margin-bottom:25px">
        Consulta la tabla actualizada del torneo
      </p>

      <button onclick="abrirResultados()" style="
        background:#1db954;
        padding:12px 28px;
        border-radius:30px;
        color:white;
        border:none;
        font-weight:600;
        cursor:pointer;
      ">
        Ver Resultados en Vivo
      </button>
    </div>
  `;
}

/* =========================
   MODAL RESULTADOS
========================= */

function abrirResultados() {
  const modal = document.createElement("div");

  modal.innerHTML = `
    <div id="modalResultados" style="
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.85);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:9999;
      padding:40px;
    ">

      <div style="
        position:relative;
        width:95%;
        max-width:1100px;
        height:80%;
        background:white;
        border-radius:12px;
        overflow:hidden;
      ">

        <button onclick="cerrarResultados()" style="
          position:absolute;
          top:10px;
          right:15px;
          background:#111;
          color:white;
          border:none;
          border-radius:50%;
          width:35px;
          height:35px;
          cursor:pointer;
          font-size:18px;
        ">×</button>

        <iframe 
          src="${resultadosLink}"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:none">
        </iframe>

      </div>

    </div>
  `;

  document.body.appendChild(modal);
}

function cerrarResultados() {
  const modal = document.getElementById("modalResultados");
  if (modal) modal.remove();
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {
  renderTorneos();
  renderPagos();
  renderResultados();
});