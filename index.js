let productos = [
    { id: 1, nombre: "Paco Rabanne Invictus", precio: 107, imagen: "./images/invictus.jpg", link: "./pages/perfume_1.html" },
    { id: 2, nombre: "Ralph Lauren Ralph's Club", precio: 608, imagen: "./images/ralphsclub.jpg", link: "./pages/perfume_2.html" },
    { id: 3, nombre: "Carolina Herrera 212 Vip", precio: 504, imagen: "./images/212black.jpg", link: "./pages/perfume_3.html" },
    { id: 4, nombre: "Antonio Banderas The Icon", precio: 812, imagen: "./images/theicon.jpg", link: "./pages/perfume_4.html" },
    { id: 5, nombre: "Giorgio Armani", precio: 376, imagen: "./images/giorgioarmani.jpg", link: "./pages/perfume_5.html" },
    { id: 6, nombre: "Azzaro Chrome", precio: 725, imagen: "./images/azzaro.jpg", link: "./pages/perfume_6.html" },
    { id: 7, nombre: "Ralph Lauren Polo Red", precio: 907, imagen: "./images/polored.jpg", link: "./pages/perfume_7.html" },
    { id: 8, nombre: "Polo Blue Edt", precio: 264, imagen: "./images/poloblue.jpg", link: "./pages/perfume_8.html" },
    { id: 9, nombre: "Polo Deep Blue Parfum", precio: 478, imagen: "./images/polodeepblue.jpg", link: "./pages/perfume_9.html" },
]

let perfume = document.getElementById("perfume");
let nombre = prompt("Ingrese el nombre de un PERFUME");
let producto = productos.find(perfume => perfume.nombre === nombre);
perfume.innerHTML = `<div class="card__header" >
                     <a href="${producto.link}"> <img src="${producto.imagen}" alt="${producto.nombre}" /></a>
                     </div>
                     <a href="${producto.link}"><h3 class="card__title">${producto.nombre}</h3></a>
                     <p class="card__price">${producto.precio}</p>`; 