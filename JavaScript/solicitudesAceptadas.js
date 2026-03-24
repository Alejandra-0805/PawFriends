const solicitudes = [
  {
    nombre: "Wilbert Molina",
    perro: "Max",
    imagen: "https://images.dog.ceo/breeds/pembroke/n02113023_321.jpg",
    estado: "revision",
    fecha: "13/03/2025"
  },
  {
    nombre: "Alejandra Clemente",
    perro: "Lulu",
    imagen: "https://images.dog.ceo/breeds/pomeranian/n02112018_5093.jpg",
    estado: "aceptada",
    fecha: "01/03/2025"
  },
  {
    nombre: "Ninive Pérez",
    perro: "Doggy",
    imagen: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
    estado: "rechazada",
    fecha: "20/03/2025"
  },
  {
    nombre: "Alexis Rojas",
    perro: "Tommy",
    imagen: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4175.jpg",
    estado: "aceptada",
    fecha: "12/12/2024"
  }
];

const aceptadas = solicitudes.filter(s => s.estado === "aceptada");


aceptadas.sort((a, b) => {
  const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
  const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
  return fechaB - fechaA;
});

const tabla = document.getElementById("tablaBody");

aceptadas.forEach(s => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${s.nombre}</td>

    <td>
      <div class="perro">
        <img src="${s.imagen}">
        ${s.perro}
      </div>
    </td>

    <td>
      <span class="estado">Aceptada</span>
    </td>

    <td>${s.fecha}</td>
  `;

  tabla.appendChild(fila);
});

function irHome() {
  window.location.href = "../html/homeAdmin.html";
}