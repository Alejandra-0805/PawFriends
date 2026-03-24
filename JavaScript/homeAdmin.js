const perros = [
  { estado: "disponible" },
  { estado: "disponible" },
  { estado: "adoptado" },
  { estado: "disponible" }
];

const solicitudes = [
  { estado: "revision" },
  { estado: "aceptada" },
  { estado: "rechazada" },
  { estado: "revision" }
];

const totalPerros = perros.filter(p => p.estado === "disponible").length;
const totalSolicitudes = solicitudes.length;
const totalAdoptados = perros.filter(p => p.estado === "adoptado").length;

document.getElementById("totalPerros").textContent = totalPerros;
document.getElementById("totalSolicitudes").textContent = totalSolicitudes;
document.getElementById("totalAdoptados").textContent = totalAdoptados;


function irSolicitud() {
  window.location.href = "../html/solicitudAdopcion.html";
}

function irAdopciones() {
  window.location.href = "../html/adopcionAdmin.html";
}
function irAceptadas() {
  window.location.href = "../html/solicitudAceptadas.html";
}