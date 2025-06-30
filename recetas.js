const recetasPorEdad = {
  grupo1: [
    ["Mini sándwiches de jamón y queso", "Un sándwich suave...", "img/recetas/minisandwichesquesojamon.jpg", "sandwichjamonqueso.html"],
    ["Bolitas de arroz con pollo", "Pequeñas bolitas de arroz...", "img/recetas/bolitasarroz.jpg", "bolitaarroz.html"],
    ["Tortillitas mini de verduras", "Tortillas horneadas...", "img/recetas/Tortilla.jpg", "tortilladeverduras.html"],
    ["Panqueques de avena y plátano", "Panqueques saludables...", "img/recetas/pancake.jpg", "panqueques.html"],
    ["Nuggets de pescado al horno", "Crujientes por fuera...", "img/recetas/nuggetspescado.jpg", "nuggetspescado.html"],
    ["Mini empanadas integrales", "Empanadas horneadas...", "img/recetas/empanadaintegral.jpg", "empanadaintegral.html"]
  ],
  grupo2: [
    ["Burrito de pollo con palta", "Un burrito nutritivo...", "img/recetas/burritopollopalta.jpg", "burritopollopalta.html"],
    ["Ensalada fría de pasta integral", "Una ensalada fresca...", "img/recetas/ensalada.jpg", "pastaintegral.html"],
    ["Mini hamburguesa casera", "Una hamburguesa pequeña...", "img/recetas/minihamburguesas.jpg", "minihamburguesa.html"],
    ["Wrap de huevo y queso", "Un wrap suave...", "img/recetas/wrappollo.jpg", "wraphuevoqueso.html"],
    ["Tiritas de pollo crocante", "Crujientes tiritas...", "img/recetas/tiraspollo.jpg", "tirasdepollo.html"],
    ["Galletas + yogur con frutas", "Galletas de avena...", "img/recetas/galletasyogurt.jpg", "galletasyogurt.html"]
  ],
  grupo3: [
    ["Sándwich de pavo y vegetales", "Un sándwich integral...", "img/recetas/sandwichvegetalpavo.jpg", "sandwichvegetalpavo.html"],
    ["Bowl de quinoa con pollo", "Un bowl nutritivo...", "img/recetas/quinoaconpollo.jpg", "quinoaconpollo.html"],
    ["Mini pizza saludable", "Una pizza casera...", "img/recetas/pizzasaludable.jpg", "pizzasaludable.html"],
    ["Taco suave de carne", "Un taco de tortilla...", "img/recetas/tacocarne.jpg", "tacocarne.html"],
    ["Fideos con pesto y huevo", "Fideos con pesto...", "img/recetas/fideospestohuevo.jpg", "fideospestohuevo.html"],
    ["Ensalada de frutas", "Una mezcla refrescante...", "img/recetas/ensaladadefrutas.jpg", "ensaladadefrutas.html"]
  ]
};

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let grupo = "";
  if (edad >= 3 && edad <= 5) grupo = "grupo1";
  else if (edad >= 6 && edad <= 8) grupo = "grupo2";
  else if (edad >= 9 && edad <= 11) grupo = "grupo3";

  if (!grupo) {
    resultado.innerHTML = "<p>No hay recetas disponibles para esta edad.</p>";
    return;
  }

  resultado.innerHTML = `<h2>Hola ${nombre}, estas recetas son ideales para niños de ${edad} años:</h2><div class="receta-galeria">`;
  recetasPorEdad[grupo].forEach(([titulo, descripcion, imagen, enlace]) => {
    resultado.innerHTML += `
      <div class="card">
        <img src="${imagen}" alt="${titulo}">
        <div class="card-content">
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
          <a href="${enlace}">Leer receta ></a>
        </div>
      </div>
    `;
  });
  resultado.innerHTML += "</div>";
});
