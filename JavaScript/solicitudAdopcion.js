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
    estado: "revision",
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
  },
  {
    nombre: "Enrique Castro",
    perro: "Shira",
    imagen: "https://images.dog.ceo/breeds/pembroke/n02113023_321.jpg",
    estado: "revision",
    fecha: "01/02/2025"
  }
];

const tabla = document.getElementById("tablaBody");

solicitudes.sort((a, b) => {
  const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
  const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
  return fechaB - fechaA; 
});

solicitudes.forEach(s => {

  let estadoTexto = "";
  let clase = "";

  if (s.estado === "revision") {
    estadoTexto = "En revisión";
    clase = "revision";
  } else if (s.estado === "aceptada") {
    estadoTexto = "Aceptada";
    clase = "aceptada";
  } else {
    estadoTexto = "Rechazada";
    clase = "rechazada";
  }

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
      <span class="estado ${clase}">
        ${estadoTexto}
      </span>
    </td>

    <td>${s.fecha}</td>
  `;

  fila.style.cursor = "pointer";

  fila.onclick = () => {
    localStorage.setItem("solicitudSeleccionada", JSON.stringify(s));
    window.location.href = "../html/revision.html";
  };

  tabla.appendChild(fila);
});

function irSolicitudes() {
  window.location.href = "../html/homeAdmin.html";
}