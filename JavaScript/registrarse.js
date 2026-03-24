function registrar() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!nombre || !correo || !pass || !confirm) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos.",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  if (pass !== confirm) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Las contraseñas no coinciden",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Cuenta creada ",
    text: "Redirigiendo al login...",
    timer: 2000,
    showConfirmButton: false,
  });

  setTimeout(() => {
    window.location.href = "../html/login.html";
  }, 2000);
}