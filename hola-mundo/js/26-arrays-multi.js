'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];
console.log(peliculas.sort());
console.log(peliculas.reverse());
var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][0]);
/*var elemento = "";
do  {
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
} while (elemento != "ACABAR");
peliculas.pop;*/

var indice = peliculas.indexOf('Gran torino');
if (indice > -1) {
    peliculas.splice(indice, 1);
}

var text = peliculas.join();
console.log(text);

var cadena = "texto1, texto2, texto3";
var cadena_a = cadena.split(", ");

console.log(cadena_a);