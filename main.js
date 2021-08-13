class Producto {
	constructor(marca, modelo, socket, precio, stock) {
		this.marca = marca;
		this.modelo = modelo;
		this.socket = socket;
		this.precio = precio;
		this.stock = stock;
	}

	Carrito(producto) {
		let carrito = [];
		carrito.push(producto);
		console.log(carrito);
	}
	Vender(producto) {
		if (this.stock > 0) {
			this.stock -= 1;
		} else {
			console.log(`No hay stock. Stock: ${this.stock}`);
		}
	}
}

const producto1 = new Producto('Intel', 'i3', '1151', 30000, 3);

const producto2 = new Producto('Intel', 'i5', '1150', 50000, 4);

const producto3 = new Producto('Intel', 'i7', '1200', 50000, 2);

const producto4 = new Producto('AMD', 'Ryzen 3', 'FM4', 30000, 6);

const producto5 = new Producto('AMD', 'Ryzen 5', 'FM4', 50000, 5);

const producto6 = new Producto('AMD', 'Ryzen 7', 'FM4', 50000, 4);

const producto7 = new Producto('Gigabyte', 'B350', '1200', 13000, 7);

const producto8 = new Producto('Asus', 'B450', '1150', 11000, 3);

const producto9 = new Producto('MSI', 'B550', 'FM4', 12500, 6);

const producto10 = new Producto('Asus', 'B350', 'FM4', 12500, 2);

producto1.Carrito(producto1);
producto1.Vender(producto1);

