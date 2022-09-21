/* let productos = [
    { id: 1, nombre: "Paco Rabanne Invictus", precio: 107, imagen: "./images/invictus.jpg", link: "./pages/perfume_1.html" },
    { id: 2, nombre: "Ralph Lauren Ralph's Club", precio: 608, imagen: "./images/ralphsclub.jpg", link: "./pages/perfume_2.html" },
    { id: 3, nombre: "Carolina Herrera 212 Vip", precio: 504, imagen: "./images/212black.jpg", link: "./pages/perfume_3.html" },
    { id: 4, nombre: "Antonio Banderas The Icon", precio: 812, imagen: "./images/theicon.jpg", link: "./pages/perfume_4.html" },
    { id: 5, nombre: "Giorgio Armani", precio: 376, imagen: "./images/giorgioarmani.jpg", link: "./pages/perfume_5.html" },
    { id: 6, nombre: "Azzaro Chrome", precio: 725, imagen: "./images/azzaro.jpg", link: "./pages/perfume_6.html" },
    { id: 7, nombre: "Ralph Lauren Polo Red", precio: 907, imagen: "./images/polored.jpg", link: "./pages/perfume_7.html" },
    { id: 8, nombre: "Polo Blue Edt", precio: 264, imagen: "./images/poloblue.jpg", link: "./pages/perfume_8.html" },
    { id: 9, nombre: "Polo Deep Blue Parfum", precio: 478, imagen: "./images/polodeepblue.jpg", link: "./pages/perfume_9.html" },
] */

/* localStorage.setItem("productos", JSON.stringify(productos)); */

//BUSCADOR
/* let perfume = document.getElementById("perfume");
let nombre = prompt("Ingrese el nombre de un PERFUME");
let producto = productos.find(perfume => perfume.nombre === nombre);
perfume.innerHTML = `<div class="card__header" >
                     <a href="${producto.link}"> <img src="${producto.imagen}" alt="${producto.nombre}" /></a>
                     </div>
                     <a href="${producto.link}"><h3 class="card__title">${producto.nombre}</h3></a>
                     <p class="card__price">${producto.precio}</p>`;  */

//MOSTRAR PRODUCTOS
const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("perfume")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card__header" >
                            <a href="${producto.link}"> <img src="${producto.imagen}" alt="${producto.nombre}" /></a>
                            </div>
                            <a href="${producto.link}"><h3 class="card__title">${producto.nombre}</h3></a>
                            <p class="card__price">${producto.precio}</p>
                            <button id=boton${producto.id}>Comprar</button>`

        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById( `boton${producto.id}` )

        boton.addEventListener('click', ()=> {
            carritoIndex(producto.id)
            alert(`Se agrego el PERFUME ${producto.nombre}`)
        })

    })
}

mostrarProductos(productos)

//CARRITO
const carritoDeCompras = []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito")

    const renderProductosCarrito = ()=> {
        let producto = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" >Eliminar</i></button>`;

        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()
}

const eliminar = (productoId) => {
    const producto = carritoDeCompras.find((producto) => producto.Id === productoId)
    const indice = carrito.indexOf(producto)
    carritoDeCompras.splice(indice, 1)
}

function cambiarPrecio(nombre, precio){
    let array = JSON.parse(localStorage.getItem('productos'));
  
    const producto = array.find(producto => producto.nombre === nombre);
    producto.precio = precio;
  
    localStorage.setItem("productos", JSON.stringify(array));
}

cambiarPrecio("Paco Rabanne Invictus", 666);