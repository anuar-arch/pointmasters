/* =====================================
   CONFIGURACIÓN EDITABLE – POINT MASTERS
   ===================================== */

/* ===== TORNEOS ACTIVOS ===== */

const torneos = [
  {
    flyer: "/media/flyer3ra.jpg"
  },
  {
    flyer: "/media/flyer4ta.jpg"
  }
];


/* ===== DATOS BANCARIOS ===== */

const pagos = {
  banco: "MULTIVA",
  titular: "POINT MASTERS",
  clabe: "PENDIENTE",
  whatsapp: "5215568016634"
};


/* =====================================
   RENDER TORNEOS
   ===================================== */

function renderTorneos() {
  const contenedor = document.getElementById("torneosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = torneos.map(t => `
    <div class="torneo-card">
      <img src="${t.flyer}" class="torneo-img">
    </div>
  `).join("");
}


/* =====================================
   RENDER PAGOS
   ===================================== */

function renderPagos() {
  const contenedor = document.getElementById("datosPago");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="pagos-card">
      <p><strong>Banco:</strong> ${pagos.banco}</p>
      <p><strong>Titular:</strong> ${pagos.titular}</p>
      <p><strong>CLABE:</strong> ${pagos.clabe}</p>

      <div style="margin-top:15px;">
        <button onclick="copiarClabe()" class="btn-primary">
          Copiar CLABE
        </button>
      </div>

      <div style="margin-top:15px;">
        <a href="https://wa.me/${pagos.whatsapp}" target="_blank" class="btn-secondary">
          Enviar comprobante por WhatsApp
        </a>
      </div>
    </div>
  `;
}

function copiarClabe() {
  navigator.clipboard.writeText(pagos.clabe);
  alert("CLABE copiada");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTorneos();
  renderPagos();
});