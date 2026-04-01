const mascotas = [
  {
    nombre: "Max",
    imagen: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    edad: "2 años",
    sexo: "Macho",
    peso: "15kg",
    energia: "Alta",
    descripcion: "Max es un perrito muy juguetón que fue rescatado hace dos meses y busca un hogar"
  },
  {
    nombre: "Luna",
    imagen: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
    edad: "1 año",
    sexo: "Hembra",
    peso: "10kg",
    energia: "Media",
    descripcion: "Luna es muy tranquila y cariñosa, perfecta para familias"
  },
  {
    nombre: "Rocky",
    imagen: "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg",
    edad: "3 años",
    sexo: "Macho",
    peso: "20kg",
    energia: "Alta",
    descripcion: "Rocky es activo y le encanta correr y jugar"
  }
];

const container = document.getElementById("cardsContainer");

mascotas.forEach((mascota, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${mascota.imagen}">
    
    <div class="card-info">
      <p>${mascota.nombre}</p>
      <span>♡</span>
    </div>

    <div class="card-buttons">
      <button onclick="verPerfil(${index})">Ver más</button>
      <button onclick="irsolicitud(${index})">Adóptame</button>
    </div>
  `;

  container.appendChild(card);
});
function irHome() {
  window.location.href = "../html/home.html";
}
function verPerfil(index) {
  localStorage.setItem("mascotaSeleccionada", JSON.stringify(mascotas[index]));
  window.location.href = "../html/perfilPerro.html";
}
function irsolicitud() {
  window.location.href = "../html/solicitud.html";
}
function irContactanos() {
  const correo = "alejandraclemente48@gmail.com";
  const asunto = "Contacto PawFriends";
  const mensaje = "Hola, quiero información sobre adopciones.";

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${correo}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
  window.location.href = "../html/home.html";
}
function irAdopcion() {
  window.location.href = "../html/adopcion.html";
}
function irPerfil() {
  window.location.href = "../html/perfilUsuario.html";
}