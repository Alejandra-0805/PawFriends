const data = JSON.parse(localStorage.getItem("solicitudSeleccionada"));

document.getElementById("imgPerro").src = data.imagen;
document.getElementById("nombrePerro").textContent = data.perro;
document.getElementById("nombrePersona").textContent = data.nombre;

function resolver(estado) {

  let texto = estado === "aceptada" ? "aceptar" : "rechazar";
  let color = estado === "aceptada" ? "#4FA37E" : "red";

  Swal.fire({
    title: `¿Seguro que deseas ${texto} esta solicitud?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: color,
    cancelButtonColor: "#999",
    confirmButtonText: `Sí, ${texto}`,
    cancelButtonText: "Cancelar"
  }).then((result) => {

    if (result.isConfirmed) {

      let solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];

      solicitudes = solicitudes.map(s => {
        if (s.nombre === data.nombre && s.perro === data.perro) {
          s.estado = estado;
        }
        return s;
      });

      localStorage.setItem("solicitudes", JSON.stringify(solicitudes));

      Swal.fire({
        icon: "success",
        title: "Actualizado",
        text: `La solicitud fue ${estado}`,
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.href = "../html/solicitudAdopcion.html";
      }, 2000);
    }
  });
}
function irSolicitudes() {
  window.location.href = "../html/solicitudAdopcion.html";
}