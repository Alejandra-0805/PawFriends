const mascota = JSON.parse(localStorage.getItem("mascotaSeleccionada"));

if (mascota) {
  document.querySelector(".main-img").src = mascota.imagen;

  document.getElementById("nombre").textContent = "Nombre: " + mascota.nombre;
  document.getElementById("sexo").textContent = "♂ " + mascota.sexo;
  document.getElementById("edad").textContent = "🎂 " + mascota.edad;
  document.getElementById("peso").textContent = "⚖️ " + mascota.peso;
  document.getElementById("energia").textContent = "⚡ " + mascota.energia;

  document.getElementById("descripcion").textContent = mascota.descripcion;
}

document.querySelector(".btn-adoptar").addEventListener("click", () => {
  window.location.href = "../html/solicitud.html";
});

document.querySelector(".fav").addEventListener("click", () => {
  document.querySelector(".fav").textContent = "❤️ Agregado a favoritos";
});