function enviarFormulario(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (!nombre || !correo) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Completa los campos obligatorios",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Solicitud enviada 🐶",
    text: "Nos pondremos en contacto contigo",
    timer: 2000,
    showConfirmButton: false,
  });

  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
}
function irHome() {
  window.location.href = "../html/home.html";
}