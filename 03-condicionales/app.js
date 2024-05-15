let edad = prompt('edad').toLowerCase();
let nombre = prompt('nombre').toLowerCase();

if( nombre === 'Mario' || nombre === 'Carlos' && edad >= 18){
    console.log('entra VIP')
}else if (edad <= '18'){
    console.log('no puede ingresar')
}else if( edad >= '18'){
    console.log('puede ingresar')
}else{
    console.log('no se que hacer')
}



