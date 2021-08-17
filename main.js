/* 
>>Objetivos generales:
Codificar la funcionalidad inicial del simulador. 
Identificar el flujo de trabajo del script 
en términos de captura de entradas ingresadas por el usuario, 
procesamiento esencial del simulador y notificación de resultados en forma de salida.
>>Objetivos específicos:
Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones 
(suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, 
la cual puede hacerse por alert() o console.log().
 */

//#region Variables y Clase Producto

let carrito = [];
let subtotal = 0;
let precio_final = 0;
const impuesto = 1.65;

class Producto {
	constructor(marca, modelo, socket, precio, stock) {
		this.marca = marca;
		this.modelo = modelo;
		this.socket = socket;
		this.precio = precio;
		this.stock = stock;
	}

	Carrito() {
		carrito.push(this);
	}
}
//#endregion

//#region Creacion de Objetos

//------------Chips----------
// -----------Intel----------
const prod_0 = new Producto('Intel', 'i3', '1151', 30000, 3);
const prod_1 = new Producto('Intel', 'i7', '1200', 50000, 2);
// ------------AMD------------
const prod_2 = new Producto('AMD', 'Ryzen 3', 'FM4', 30000, 6);
const prod_3 = new Producto('AMD', 'Ryzen 7', 'FM4', 50000, 4);

// --------Motherboards------
// -----------Intel----------
const prod_4 = new Producto('Gigabyte', 'B350', '1200', 13000, 7);
const prod_5 = new Producto('Asus', 'B450', '1151', 11000, 3);
// ------------AMD------------
const prod_6 = new Producto('MSI', 'B550', 'FM4', 12500, 6);
const prod_7 = new Producto('Asus', 'B350', 'FM4', 12500, 4);

//#endregion Productos

//#region Llamado a funciones y/o metodos

//Se agregan productos al carrito
prod_0.Carrito();
prod_4.Carrito();
prod_5.Carrito();
prod_6.Carrito();

largoCarrito(carrito);
console.log(carrito);

if (checkCompatible(carrito)) {
	precio_final = calcIVA(suma(carrito), impuesto);
	console.log(`El precio final +IVA es $${precio_final}`);
	ordenarCarrito();
	console.log(carrito);
} else {
	console.log(`Tenes incompatibilidades con tus productos en el carrito.`);
}

//#endregion

//#region Funciones
function suma(array) {
	for (let productos of array) {
		subtotal += productos['precio'];
	}
	return subtotal;
}

function calcIVA(subtotal, impuesto) {
	console.log(`Subtotal: $${subtotal}`);
	return subtotal * impuesto;
}

function checkCompatible(array) {
	let socket = array[0]['socket'];
	let marca = array[0]['marca'];
	let modelo = array[0]['modelo'];
	let i = 0;
	let compatible = true;
	console.log(
		`Referencia 1er producto: ${marca} ${modelo} Socket: ${socket}`
	);
	for (let productos of array) {
		if (socket != productos['socket']) {
			compatible = false;
			i++;
			console.log(
				`Index ${i + 1}: ${productos['marca']} ${
					productos['modelo']
				}, Socket: ${productos['socket']}`
			);
			console.log(
				`${marca} ${modelo} Socket ${socket} no es compatible con ${productos['socket']}`
			);
		}
	}

	return compatible;
}

function largoCarrito(array) {
	let i = array.length;
	console.log(`Tu carrito tiene ${i} Productos.`);
}

function ordenarCarrito() {
	carrito.sort(function (a, b) {
		console.log('Ordenando el carrito');
		return a.precio - b.precio;
	});
}

//#endregion
