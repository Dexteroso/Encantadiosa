// Bloque 1
let a = 5;
let b = 3;

function resultado(a, b) {
  return a - b;
}

console.log(`Bloque 1 = ${resultado(a, b)}`);

// Bloque 2
let numero = 4

const esPar = numero => numero % 2 === 0 ? "Es Par" : "Es Impar";
console.log(`Bloque 2 = ${esPar(numero)}`);

// Bloque 3
let nombre = "Angel";

const saludo = nombre => `Hola ${nombre}`;
console.log(`Bloque 3 = ${saludo(nombre)}`);

// Bloque 4 imprime "8" es decir el parámetro x = 4 y la función multiplica x * 2 entonces 4 *2 = 8.
const duplicar = x => x * 2;
console.log(`Bloque 4 = ${duplicar(4)}`);

// Bloque 5 en formato de función y formato arrow

let precio = 100;
const IVA =  0.16;

function calcularIVA (precio) {
  return precio * IVA;
}

console.log(`Bloque 5 en formato function = ${calcularIVA(precio)}`);

const calcularIVA2 = precio => precio * IVA;
const calcularPrecioTotal = precio => precio + calcularIVA2(precio);
console.log(`Bloque 5 en formato arrow = ${calcularPrecioTotal(precio)}`);

// Bloque 6 

let newPrecio = 100;
const newIVA = 0.16;
let descuentoMonto = 20;

function descuentoFinal(newPrecio, descuentoMonto) {
    const precioConDescuento = newPrecio - descuentoMonto;
  return precioConDescuento + (precioConDescuento * newIVA);
}
console.log(`Bloque 6 "descuentoFinal(Precio)" = ${descuentoFinal(newPrecio, descuentoMonto)}`);


// Exámen
class Persona2 {
  constructor (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  resumenPersona() {
    return `"Nombre: ${this.nombre} | Edad: ${this.edad}"`;
  }
}

const persona3 = new Persona2("Angel",45);
console.log(persona3.resumenPersona());
