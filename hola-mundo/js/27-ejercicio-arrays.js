'use strict'
/*
1. Pida 6 numeros por pantalla
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/
function mostrarArray(elementos, texto = ""){
    //Mostrar en el cuerpo de la página
    document.write("<h1>Contenido del array " + texto +"</h1>");
    document.write("<ul>");
    for (let elemento in elementos) {
        document.write("<li>" + elementos[elemento] + "</li>");
    }
    document.write("</ul>")
}
var numeros = new Array(6);
for(var i = 0; i < numeros.length;i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
}

mostrarArray(numeros);

// Mostrar array por consola
console.log(numeros);

// Ordenar y mostrar

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "revertido");

// Contar elementos

document.write("<h1>El array tiene " + numeros.length + " elementos</h1>");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero"));

var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1) {
    document.write("<h1>ENCONTRADO</h1>");
} else {
    document.write("<h1>NO ENCONTRADO</h1>");
}
document.write("<h1>Posición de la busqueda " + posicion);
