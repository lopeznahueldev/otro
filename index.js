fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = `
    <div class="card__header" >
    <a href="${producto.link}"> <img src="${producto.imagen}" alt="${producto.nombre}" /></a>
    </div>
    <a href="${producto.link}"><h3 class="card__title">${producto.nombre}</h3></a>
    <p class="card__price">${producto.precio}</p>
    <button id=boton${producto.id}>Comprar</button>
    `;
    perfume.append(div);

    const boton = document.getElementById( `boton${producto.id}` )

    boton.addEventListener('click', ()=> {
      carritoIndex(producto.id)
      
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: `Se agrego el PERFUME ${producto.nombre}`
        })
  })
  });
})


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
/* const mostrarProductos = (productos) => {
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
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: `Se agrego el PERFUME ${producto.nombre}`
              })
        })

    })
} */

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

/* function cambiarPrecio(nombre, precio){
    let array = JSON.parse(localStorage.getItem('productos'));
  
    const producto = array.find(producto => producto.nombre === nombre);
    producto.precio = precio;
  
    localStorage.setItem("productos", JSON.stringify(array));
}

cambiarPrecio("Paco Rabanne Invictus", 666); */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];