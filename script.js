function calcularPrecio (precioPrenda, cantidadPrenda, porcentajeDescuento, costoEnvio) {
    let descuento = (precioPrenda * porcentajeDescuento) / 100;
    let precioConDescuento = precioPrenda - descuento;
    return (precioConDescuento * cantidadPrenda) + costoEnvio;
}

const envio = 300;

let articulo = parseFloat(prompt("Ingrese el precio de la prenda que compraras:"));
let cantidad = parseInt(prompt("Cuantas prendas queres comprar?:"));
let descuento = parseInt(prompt("Cupon de descuento:")) 


let precioFinal = calcularPrecio(articulo, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Gracias por su compra!");