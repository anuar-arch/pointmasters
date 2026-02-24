/* =========================
   DATA
========================= */

const torneos = [
  { flyer: "/media/flyer3ra.jpg" },
  { flyer: "/media/flyer4ta.jpg" }
];

const resultados = [
  // Aquí luego podremos agregar imágenes dinámicamente
  // { imagen: "/media/resultado1.jpg" }
];

const pagos = {
  banco: "MULTIVA",
  titular: "POINT MASTERS",
  clabe: "PENDIENTE",
  whatsapp: "5215568016634"
};

/* =========================
   RENDER TORNEOS
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

/* =========================
   RENDER RESULTADOS
========================= */

function renderResultados() {
  const contenedor = document.getElementById("resultadosContainer");
  if (!contenedor) return;

  if (resultados.length === 0) {
    contenedor.innerHTML = "";
    return;
  }

  contenedor.innerHTML = resultados.map(r => `
    <div class="resultado-card">
      <img src="${r.imagen}" class="resultado-img">
    </div>
  `).join("");
}

/* =========================
   RENDER PAGOS
========================= */

function renderPagos() {
  const contenedor = document.getElementById("datosPago");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="pagos-card">
      <p><strong>Banco:</strong> ${pagos.banco}</p>
      <p><strong>Titular:</strong> ${pagos.titular}</p>
      <p><strong>CLABE:</strong> <span id="clabeTexto">${pagos.clabe}</span></p>

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
  const texto = document.getElementById("clabeTexto").innerText;
  navigator.clipboard.writeText(texto);
  alert("CLABE copiada");
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderTorneos();
  renderResultados();
  renderPagos();

});