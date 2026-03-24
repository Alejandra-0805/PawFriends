document.addEventListener("DOMContentLoaded", () => {

  const inputFile = document.getElementById("inputFile");
  const galeria = document.getElementById("galeria");

  let fotos = [];

  window.validarNumero = function(input) {
    if (input.value < 0) input.value = "";
    input.value = input.value.replace(/[^0-9.]/g, "");
  };

  inputFile.addEventListener("change", (e) => {
    const archivos = e.target.files;

    for (let file of archivos) {
      if (!file.type.startsWith("image/")) continue;

      const reader = new FileReader();

      reader.onload = (event) => {
        fotos.push(event.target.result);
        renderGaleria();
      };

      reader.readAsDataURL(file);
    }
  });

  function renderGaleria() {
    galeria.innerHTML = "";

    fotos.forEach((src, index) => {
      const cont = document.createElement("div");
      cont.style.position = "relative";

      const img = document.createElement("img");
      img.src = src;
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";

      const btnEliminar = document.createElement("span");
      btnEliminar.innerHTML = "✖";
      btnEliminar.style.position = "absolute";
      btnEliminar.style.top = "5px";
      btnEliminar.style.right = "5px";
      btnEliminar.style.background = "red";
      btnEliminar.style.color = "white";
      btnEliminar.style.borderRadius = "50%";
      btnEliminar.style.padding = "2px 6px";
      btnEliminar.style.cursor = "pointer";

      btnEliminar.onclick = () => {
        fotos.splice(index, 1);
        renderGaleria();
      };

      cont.appendChild(img);
      cont.appendChild(btnEliminar);
      galeria.appendChild(cont);
    });
  }

  window.guardar = function () {
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;

    if (!nombre || edad <= 0 || peso <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Datos inválidos. Verifica nombre, edad y peso.",
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Guardado",
      text: "Mascota registrada correctamente 🐶",
      timer: 2000,
      showConfirmButton: false
    });
  };

  window.cancelar = function () {
    Swal.fire({
      icon: "warning",
      title: "Cancelado",
      text: "Se canceló la operación",
      timer: 2000,
      showConfirmButton: false
    });
  };

});
function irHome() {
  window.location.href = "../html/homeAdmin.html";
}