function irHome() {
  window.location.href = "../html/home.html";
}

function editar() {
  const nueva = prompt("Escribe tu motivo:");
  if (nueva) {
    document.getElementById("descripcion").textContent = nueva;
  }
}

function cambiarFoto() {
  document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function(e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById("avatar").src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});