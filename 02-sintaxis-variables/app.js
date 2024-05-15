//console.log('Hola mundo');

/* Declarar variables con var, let, const */

var fruta = 'manzana'; //se puede redeclarar y sobreescribir o reasignar
var fruta = 'pera';
fruta = 'piña';

let pais = 'perú'; //no se puede redeclarar pero si se sobreescribe o reasigna
//let pais = 'perú'; //no es válido
pais = 'francia';

const comida = 'helado'; // no se redeclara ni se sobreescribe o reasigna
// const comida = 'helado'; //no es válido
//comida = 'helado'; //no es válido

console.log(comida) //???


/* Formas correctas de declarar variables */
let nombre = 'pepe';
let nombreMascota = 'pedro';
let nombre_perro = 'bethoveen';
const $caja = 'cosas';
let dia1 = 'lunes';
let edad = 15
let estatura = 1.78;
let disponible = false;

/* Formas incorrectas de declarar variables */
//ctrl + } : comentario de una sola línea

// let 1dia = 'domingo';
// let dia uno = 'domingo';
// let dia-uno = 'domingo';



/* Datos booleanos */

//let entra = confirm('¿Quieres entrar?'); //Puede dar true o false

/* Operadores matemáticos */

console.log( 7*8 ); // Resultado 56

let num1 = 4;
let num2 = 6;

console.log(num1 + num2); // Resultado 10

/* El + tiene dos funciones en javascript: sumar y concatenar (unir) */
let num3 = 4;
let num4 = "6";

/* typeof me dice el tipo de dato de una variable */
let resultado = num3 + num4; // Resultado 46
console.log(resultado); //46
console.log(typeof resultado); //string
console.log('La suma de 4 + "6" es ' + resultado + ' por que no puedes sumar un número con un string');

//Crear una variable (let) que se llame "texto" y va a guardar el resultado de 
//3+"2"+5+"ocho"
//al final imprima el resultado en la consola


// Ejemplo de incremento 
let vidas = 5;

vidas++ //suma uno al valor de vidas 
vidas++ // (7)
vidas-- // Resta un valor de vidas (6)
vidas-- // (5) 

console.log('vidas: ' + vidas) 

let puntuacion = 0; 

puntuacion += 3, // Le suma y le asigna el valor especificado a la variable. 3 se usma a 0 
puntuacion += 5; // Puntuacion vale 8
puntuacion -= 3; // Le resta y le asigna el valor especificado a la variable. 3 se resta a 8

console.log('puntuación:  ' + vidas) 

// Operadores logicos 

let altura = >170;
let velocidad = >30;

//&& (y) : ambas condiciones tiene que ser verdaderas 



Boolean( altura === 169 && velocidad=== 36 ) // 