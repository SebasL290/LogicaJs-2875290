//Ejercicio del botón
/* 1.Variables */
const miInput = document.getElementById("boton");

/* 2.Funciones */
function cambiarValue() {
    console.log(miInput.value)
    miInput.value = 'Lanzamiento exitoso!'
}

/* 3.Eventos */
miInput.addEventListener('click', cambiarValue)

//Ejercicio del cuadro de colores

/* 1.Variables */
const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll('.btnColores');

console.log(cajaColor)
console.log(botonesColores)

/* 2.Funciones */
function pintarCaja(e) {
    console.log(e.target.getAttribute('data-color'))
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}

/* 3.Eventos */
botonesColores[0].addEventListener('click', pintarCaja);
botonesColores[1].addEventListener('click', pintarCaja);
botonesColores[2].addEventListener('click', pintarCaja);
botonesColores[3].addEventListener('click', pintarCaja);

// Mover circulo 
// 1 variables 
const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
let e = 0;


// funciones

function mover() {
    if (e == 0) {

        pelota.style.marginLeft = '1080px';
        pelota.style.backgroundColor = 'blue';
        pelota.style.transitionDuration = '.10s';
        e = 1;
    } 
    else {

        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = 'blue';
        pelota.style.transitionDuration = '.10s';
        e = 0;
    }
}

    // evento
    btnMover.addEventListener('click', mover)
