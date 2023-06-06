class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(nombreProducto, precioProducto) {
        this.productos.push({ id: this.generarId(), nombre: nombreProducto, precio: precioProducto })
        console.info("Agregaste un producto exitosamente!");
    }

    eliminarProducto() {
        this.productos = this.productos.filter(item => item.id != id);
        console.error("Eliminaste un producto exitosamente!");
    }

    totalProductos() {
        return this.productos.length;
    }

    sumaTotal() {
        let total = 0;

        this.productos.forEach(item => {
            total += item.precio;
        })
        return total;
    }

    generarId() {
        let max = 0;

        this.productos.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    listarProductos() {
        let contenido = "Productos agregados: \n\n";

        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n`
        });

        return contenido;
    }

}


// Agregamos productos
let nombre = "";
let precio = 0;
const carrito = new Carrito();

while (nombre.toLocaleUpperCase() != "SALIR") {
    nombre = prompt("ingrese nombre producto: \n\n(Escriba SALIR para finalizar la carga)");
    if (nombre.toLocaleUpperCase() == "SALIR") {
        break;
    }
    precio = parseFloat(prompt("ingrese precio producto:"));
    carrito.agregarProducto(nombre, precio);

}

let id;

// Eliminamos productos
if (carrito.totalProductos() > 0) {


    while (id != 0) {
        id = parseInt(prompt(carrito.listarProductos() + "ingrese id producto a eliminar (0 para salir)"));

        if (id > 0) {
            carrito.eliminarProducto(id);
        }

        if (carrito.totalProductos() == 0) {
            break;
        }

    }
    // infromo productos agregados
    alert(`${carrito.listarProductos()}\n\nTotal a pagar: $${carrito.sumaTotal()}`);
} else {
    alert("no se encontraron productos agregados en el carrito!");
}

alert("Gracias por comprar!");