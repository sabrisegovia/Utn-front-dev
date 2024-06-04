/* Clase 13: introducción a JS*/

console.log("Hola, mundo")

//Variables
 /** Global-viejo*/
var fruta = "Manzana"
console.log(fruta)

/** Puntual-nueva versión*/
let nombre = "Sabrina"
let apellido = "Segovia"
let edad = 21; //numérico
let tenerMascotas = true; //boleana (true-false)
console.log(nombre, apellido, edad, tenerMascotas)

//Operaciones básicas

let numeroA = 5
let numeroB = 4
let resultadoSuma = numeroA + numeroB

console.log(numeroA * numeroB)
console.log(resultadoSuma)

/** Nombre + apellido*/

const ESPACIO = " ";
let nombreCompleto = nombre + ESPACIO + apellido

console.log(nombreCompleto);

/**
//prompt 

let entrada = prompt("Ingrese su nombre")
let salida = "¡Hola, " + entrada + "!";
alert(salida);

let entradaConcatenada = prompt("Ingrese su apellido")
let salidaConcatenada = "¡Excelente, " + entrada + ESPACIO + entradaConcatenada + ", sigamos!"
alert(salidaConcatenada)

//parseInt > trabajar con números enteros
//parseFloat > números decimales
let numero = parseInt(prompt("Ingrese su número"))
const numeroC = 5;

let salidaNumero = numero + numeroC;
alert(salidaNumero)
*/


//Arrays
//unidimensionales

let numeros = [1, 2, 3, 4, 5, 6];
let colores = ["rojo", "amarillo", "azul"];

console.log(numeros)
console.log(colores[0])

//multidimensionales
let frutas = ["banana", "mandarina", "maracuyá", "pera", "frambuesa"]

console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);

//objeto usado como array asociativo

let producto = {
    nombre: "squier jazz bass",
    precio: 650,
    color: "vintage white"
}

console.log(producto["nombre"]);
console.log(producto.precio);
console.log(producto.color);
