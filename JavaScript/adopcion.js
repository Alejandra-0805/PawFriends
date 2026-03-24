const mascotas = [
  {
    nombre: "Max",
    imagen: "https://images.dog.ceo/breeds/pembroke/n02113023_321.jpg"
  },
  {
    nombre: "Luna",
    imagen: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg"
  },
  {
    nombre: "Nube",
    imagen: "https://images.dog.ceo/breeds/pomeranian/n02112018_5093.jpg"
  },
  {
    nombre: "Rocky",
    imagen: "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg"
  },
  {
    nombre: "Toby",
    imagen: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2260.jpg"
  },
  {
    nombre: "Bella",
    imagen: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4175.jpg"
  },
  {
    nombre: "Simba",
    imagen: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"
  },
  {
    nombre: "Milo",
    imagen: "https://images.dog.ceo/breeds/labrador/n02099712_5645.jpg"
  },
  {
    nombre: "Coco",
    imagen: "https://images.dog.ceo/breeds/poodle-miniature/n02113799_1007.jpg"
  },
  {
    nombre: "Zeus",
    imagen: "https://images.dog.ceo/breeds/doberman/n02107142_4180.jpg"
  },
  {
    nombre: "Lola",
    imagen: "https://images.dog.ceo/breeds/chihuahua/n02085620_5673.jpg"
  },
  {
    nombre: "Bruno",
    imagen: "https://images.dog.ceo/breeds/boxer/n02108089_1339.jpg"
  }
];

const container = document.getElementById("cardsContainer");

mascotas.forEach((mascota, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${mascota.imagen}" alt="${mascota.nombre}">
    
    <div class="card-info">
      <p>${mascota.nombre}</p>
      <span>♡</span>
    </div>

    <div class="card-buttons">
      <button onclick="verPerfil(${index})">Ver más</button>
      <button onclick="irSolicitud()">Adóptame</button>
    </div>
  `;

  container.appendChild(card);
});

function verPerfil(index) {
  localStorage.setItem("mascotaSeleccionada", JSON.stringify(mascotas[index]));
  window.location.href = "../html/perfilPerro.html";
}
function irSolicitud() {
  window.location.href = "../html/solicitud.html";
}
function irHome() {
  window.location.href = "../html/home.html";
}