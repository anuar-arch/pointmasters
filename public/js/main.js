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
   TORNEOS
========================= */

function renderTorneos() {
  const contenedor = document.getElementById("torneosContainer");
  if (!contenedor) return;

  let html = "";

  torneos.forEach(t => {
    html += `
      <div class="torneo-card">
        <img src="${t.flyer}" class="torneo-img">
      </div>
    `;
  });

  contenedor.innerHTML = html;
}

/* =========================
   PAGOS
========================= */

function renderPagos() {
  const contenedor = document.getElementById("datosPago");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="pagos-card">
      <p><strong>Banco:</strong> ${pagos.banco}</p>
      <p><strong>Titular:</strong> ${pagos.titular}</p>
      <p><strong>CLABE:</strong> 
        <span id="clabeTexto">${pagos.clabe}</span>
      </p>

      <div style="margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        
        <button onclick="copiarClabe()" class="btn-secondary">
          Copiar CLABE
        </button>

        <a 
          href="https://wa.me/${pagos.whatsapp}?text=Hola,%20envío%20mi%20comprobante%20de%20pago"
          target="_blank"
          class="btn-primary">
          Enviar comprobante
        </a>

      </div>
    </div>
  `;
}

/* =========================
   COPY CLABE
========================= */

function copiarClabe() {
  const texto = document.getElementById("clabeTexto");
  if (!texto) return;

  navigator.clipboard.writeText(texto.innerText);
  alert("CLABE copiada");
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {
  renderTorneos();
  renderPagos();
});