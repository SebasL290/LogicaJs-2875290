/*let altura = prompt('tu altura').toLowerCase();

if (altura <= 150){
    console.log('baja estatura');
}else if(altura <= 170){
    console.log('mediana estatura');
}else  {
    console.log('alta estatura')
}*/



/*let sociales = prompt('¿cual es tu puntaje en sociales del 1 al 10?')
let matematicas = prompt('¿cual es tu puntaje en sociales del 1 al 10?')
let español = prompt('¿cual es tu puntaje en sociales del 1 al 10?')

let promedio = (parseFloat(sociales) + parseFloat(matematicas) + parseFloat(español)) / 3;
console.log('el promedio de las notas es' + promedio);

if (promedio === 10){
    console.log ('promedio excelente')
} else if (promedio >= 7 && promedio <= 9.9) {
    console.log('promedio bueno')
}else {
    console.log('promedio insuficiente')
}*/


// ejercico 3 

/*let estatura = prompt("¿Cúal es tu estatura?").toLowerCase();
let velocidad = prompt("¿Cúal es tu velocidad?").toLowerCase();
let edad = prompt("¿Cúal es tu edad?").toLowerCase();
if (estatura >= 175  && velocidad >= 15 && edad >= 18){
    console.log("Puede ingrear al equipo profesional de mayores")
}else if (estatura >= 120  && velocidad >= 10 && edad >= 7){
    console.log("Puede ingresar al equipo profesional de menores")
}else{
    console.log("No puede ingresar al equipo")
}*/


// ejercicio 4
/*let total = prompt ("Ingrese el total de escritorios comprados");
let totalescritorios = (parseFloat(total)) *200;
let precioescritorio = 200;
let diez = (parseFloat(totalescritorios)) *0.1;
let veinte = (parseFloat(totalescritorios)) *0.2;
let cuarenta = (parseFloat(totalescritorios)) *0.4;
let menos5 = (parseFloat(totalescritorios)) - (parseFloat(diez));
let menos10 = (parseFloat(totalescritorios)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalescritorios)) - (parseFloat(cuarenta));
if (total >= 5 & total <10){
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + menos10)
}else if (total > 10){
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + mas10)
}else {
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + menos5)
}*/


// ejercicio 5
/*alert("Listado de frutas disponibles:\n- Manzana\n- Plátano\n- Naranja\n- Fresa\n- Piña");
let frutaelegida = prompt("Ingresa el nombre de la fruta que quieras comprar").toLowerCase();
let cantidad = prompt("Ingresa la cantidad que deseas comprar");
let valores = {
    "manzana": 1400,
    "plátano": 1000,
    "naranja": 1200,
    "fresa": 500,
    "piña": 2000,
};
let valorporunidad = valores[frutaelegida];
let total = valorporunidad * cantidad;
alert("Fruta: " + frutaelegida + "\nValor por unidad: $" + parseFloat(valorporunidad) + "\nValor total: $" + parseFloat(total));
*/