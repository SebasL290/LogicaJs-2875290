
/*const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');



//crear el evento
miBtn.addEventListener( 'click', function (){
    pantalla.style.color = 'blueviolet'; //cambia el color
    miBtn.style.color = 'green';
    pantalla.innerText = "Ejecutando script 🤑   "; // Cambiar el texto dentro de la etiqueta
    miBtn.innerText =  "🤑"


})
*/

const numero = document.getElementById("número");
const incremento = document.getElementById("boton1");
const decremento = document.getElementById("boton2");


let i = 0;

incremento.addEventListener("click", function(){
    if(parseFloat(numero.innerHTML)<20){
        i++;
        numero.innerHTML = i;
    }
});

decremento.addEventListener("click", function()
{
    if(parseFloat(numero.innerHTML)>0)
    {
        i--;
        numero.innerHTML = i;
    }
});

