const usuarios = [
  { email: "admin@gmail.com", password: "1234", rol: "admin" },
  { email: "user@gmail.com", password: "1234", rol: "usuario" }
];

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const usuario = usuarios.find(
    u => u.email === email && u.password === password
  );

  if (!usuario) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Correo o contraseña incorrectos",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Bienvenido",
    text: "Inicio de sesión exitoso",
    timer: 2000,
    showConfirmButton: false,
  });

  setTimeout(() => {
    if (usuario.rol === "admin") {
      window.location.href = "../html/homeAdmin.html";
    } else {
      window.location.href = "../html/home.html";
    }
  }, 2000);
}
function irRegistro() {
  window.location.href = "../html/registrarse.html";
}