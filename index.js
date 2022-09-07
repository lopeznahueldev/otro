let productos = [
    { id: 1, nombre: "Paco Rabanne Invictus", precio: 107 },
    { id: 2, nombre: "Ralph Lauren Ralph's Club", precio: 608 },
    { id: 3, nombre: "Carolina Herrera 212 Vip", precio: 504 },
    { id: 4, nombre: "Antonio Banderas The Icon", precio: 812 },
    { id: 5, nombre: "Giorgio Armani", precio: 376 },
    { id: 6, nombre: "Azzaro Chrome", precio: 725 },
    { id: 7, nombre: "Ralph Lauren Polo Red", precio: 907 },
    { id: 8, nombre: "Polo Blue Edt", precio: 264 },
    { id: 9, nombre: "Polo Deep Blue Parfum", precio: 478 },
]

let filtro = prompt("Desea buscar un PERFUME por nombre o precio?");

if (filtro === "precio") {
    let precio = parseInt(prompt("Ingrese el precio de un PERFUME"));
    let producto = productos.find(perfume => perfume.precio === precio);

let mensaje = `Nombre: ${producto.nombre}.
Precio: ${producto.precio}.`;
alert(mensaje);

}else if(filtro === "nombre"){
    let nombre = prompt("Ingrese el nombre de un PERFUME");
    let producto = productos.find(perfume => perfume.nombre === nombre);

let mensaje = `Nombre: ${producto.nombre}.
Precio: ${producto.precio}.`;
alert(mensaje);
}