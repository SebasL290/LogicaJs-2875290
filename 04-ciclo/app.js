//ciclos y arrays


/*
let materias = ['matematicas', 'sociales', 'español', 'fisica']

console.log( `Materia 1: ${materias[2]} y despues ${materias[0]} `)

console.log( materias[4] );
materias[4] = 'deporte';
console.log(materias)
console.log( `el  array materias tiene ${materias.length} elementos`)

materias[materias.length] = 'pintura'
materias[materias.length] = 'ciencias'
materias.push('musica')
materias.push('programacion')
materias.pop()

console.log(materias)
*/

//primera practica: imprimir en una lista numerada todos los elementos de un array 'peliculas' con ayuda del ciclo for

/*
let peliculas = ['harry potter 1', 'harry potter 2', 'harry potter 3', 'harry potter 4', 'harry potter 5', 
'harry potter 6', 'harry potter 7', 'harry potter 8'];

for(let i = 0; i < peliculas.length; i++){
     console.log(  `${i+1}. ${peliculas [i]}` )
    
}
*/

//realizar un programa que le pida al artista o bandas musicales al usuario con ayuda del ciclo while, cuando el usuario escriba "salir" se debe imprimir la lista de artistas que el usuario ingreso. cada  artista añadido se debe guardar en un array 

let artistas = [];
let inputUsuario  = prompt('dime un artista o salir para cerrar')

while(inputUsuario != 'salir'){
    artistas.push(inputUsuario)
    inputUsuario  = prompt('dime un artista')
}

for(let i=0; i<artistas.length; i++){
    console.log(  `${i+1}. ${artistas [i]}` )
}


