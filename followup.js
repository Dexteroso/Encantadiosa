const numberInput = document.getElementById('contactnumber');
const contactButton = document.getElementById('ContactButton');
const messageContent = document.getElementById('message');

numberInput.addEventListener('input', updateWhatsAppLink);
messageContent.addEventListener('input', updateWhatsAppLink);

contactButton.addEventListener('click', () => {
  // pequeño delay para no romper la navegación a WhatsApp
  setTimeout(() => {
    numberInput.value = '';
    messageContent.value = '';
    contactButton.href = '#';
  }, 100);
});

function updateWhatsAppLink() {
  const cleanedNumber = numberInput.value.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(messageContent.value);

  contactButton.href =
    `https://api.whatsapp.com/send/?phone=52${cleanedNumber}&text=${encodedMessage}&app_absent=0`;
}

// const saludar = nombre => `Hola ${nombre}`;
// console.log(saludar("Angel"));

class Persona{
  constructor(nombre,edad,comida){
    this.nombre = nombre;
    this.edad = edad;
    this.comida = comida;
  }

  saludar(){
    return `Hola, soy ${this.nombre}, tengo ${this.edad}, y me gusta comer ${this.comida}`;
  }
}

const persona1 = new Persona("Angel",46,"tocino");
const persona2 = new Persona("Angel",46,"pizza");
document.getElementById("message").value = persona1.saludar();

// Bloque 1
let a = 5;
let b = 3;

function resultado (a, b) {
return a-b;
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

let Precio = 100;
let IVA =  0.16;

function calcularIVA (Precio, IVA) {
  return Precio * IVA;
}

console.log(`Bloque 5 en formato function = ${calcularIVA(Precio,IVA)}`);

const calcularIVA2 = Precio => Precio * 0.16;
const calcularPrecioTotal = Precio => Precio + calcularIVA2(Precio);
console.log(`Bloque 5 en formato arrow = ${calcularPrecioTotal(Precio)}`);

// Bloque 6 

let Precio2= 100;
let IVA2 = 0.16;
let DESCUENTO = 20;

function descuento(Precio2) {
  return Precio2 - DESCUENTO;
}

function descuentoFinal(Precio2) {
  return (Precio2 - DESCUENTO) + ((Precio2 - DESCUENTO) * IVA2)
}

console.log(`Bloque 6 "descuento(Precio)" = ${descuento(Precio2)}`);
console.log(`Bloque 6 "descuentoFinal(Precio) = ${descuentoFinal(Precio2)}`);

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
