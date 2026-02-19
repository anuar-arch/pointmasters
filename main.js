/* ===============================
   CONFIGURACIÓN DINÁMICA
=============================== */

let config = {
  formsLink: "",
  banco: "MULTIVA",
  titular: "",
  clabe: "",
  excelEmbed: "",
  torneos: []
};

/* ===============================
   CARGAR DESDE LOCAL STORAGE
=============================== */

function cargarConfig() {
  const data = localStorage.getItem("pm_config");
  if (data) config = JSON.parse(data);
}

/* ===============================
   RENDER TORNEOS
=============================== */

function renderTorneos() {
  const cont = document.getElementById("torneosContainer");
  cont.innerHTML = "";

  config.torneos.forEach(t => {
    cont.innerHTML += `
      <div style="margin:20px auto; max-width:500px;">
        <img src="${t.flyer}" style="width:100%; border-radius:12px;">
        <h3>${t.categoria}</h3>
        <p>${t.fecha}</p>
      </div>
    `;
  });
}

/* ===============================
   RENDER PAGOS
=============================== */

function renderPagos() {
  const cont = document.getElementById("datosPago");

  cont.innerHTML = `
    <p><strong>Banco:</strong> ${config.banco}</p>
    <p><strong>Titular:</strong> ${config.titular}</p>
    <p><strong>CLABE:</strong> <span id="clabeTexto">${config.clabe}</span></p>
  `;
}

/* ===============================
   RENDER RESULTADOS
=============================== */

function renderResultados() {
  if (!config.excelEmbed) return;

  const cont = document.getElementById("resultadosContainer");

  cont.innerHTML = `
    <iframe src="${config.excelEmbed}" 
      width="100%" 
      height="500" 
      frameborder="0">
    </iframe>
  `;
}

/* ===============================
   COPIAR CLABE
=============================== */

function copiarCLABE() {
  const texto = document.getElementById("clabeTexto").innerText;
  navigator.clipboard.writeText(texto);
  alert("CLABE copiada");
}

/* ===============================
   INICIAR
=============================== */

cargarConfig();

document.getElementById("linkInscripcion").href = config.formsLink;

renderTorneos();
renderPagos();
renderResultados();
