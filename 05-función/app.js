
// Funciones 
//Función que salude al usuario

/* let nombreUsuario = prompt('dime tu nombre')

//Declaración de una función 
function saludar ( nombre = 'desconocido' ){
    console.log('Función ejecutada...')
    return `Bienvenido ${nombre}`
    console.log('Esto nunca se va a ver')
}
//llamado de una función 
console.log(  saludar ( nombreUsuario )  ) */

//Hacer una función que multiplique dos números. La función debe retornar solamente el resultado de la operación. Llamar a la función "multiplicar"

/*let n1 = prompt('numero 1');
let n2 = prompt('numero 2');
function multiplicar(num1,num2){
    return num1 * num2
}
console.log( `El resultado es: ${ multiplicar(n1,n2) }` )*/

//Crear una función que le diga cuanto debe ahorrar al mes según sus ingresos. Que la función se llame "calcularAhorro"

// Pedir al usuario que ingrese sus ingresos mensuales

let ingresosMensuales = prompt('Por favor, ingrese sus ingresos mensuales:');

// Convertir la entrada a un número
ingresosMensuales = Number(ingresosMensuales);

// Definir la función calcularAhorro
function calcularAhorro(ingresos) {
    // Calcular el 10% de los ingresos mensuales
    let porcentajeAhorro = 0.10;
    let ahorroMensual = ingresos * porcentajeAhorro;
    return ahorroMensual;
}

// Llamar a la función calcularAhorro y almacenar el resultado
let ahorro = calcularAhorro(ingresosMensuales);

// Mostrar el resultado en la consola
console.log('Debes ahorrar: ' + ahorro + ' al mes.');