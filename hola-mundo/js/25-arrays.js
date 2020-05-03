'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Alejandro Martín";
var nombres = ["Alejandro Martín", "Alex Malmagro", "Biel Carreras", "Yampi", 52, true];
//                    0                  1                2             3      4    5
var lenguaje = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

console.log(nombres[5]);
console.log(nombres.length);

/*var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length-1) {
    alert("Introduce el numero correcto menor que " + nombres.length);
} else {
    alert("El nombre seleccionado es " + nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
/*
for(var i = 0;i < lenguajes.length;i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}*/

for(let lenguajes in lenguaje){
    document.write("<li>" + lenguaje[lenguajes] + "</li>");
}

/*lenguajes.forEach((elemento, indice)=>{
    //console.log(arr);
    document.write("<li>" + indice + " - " + elemento + "</li>");
});*/
document.write("</ul>");

// Busquedas
var precios = [10, 20, 50, 80, 12];
var b = precios.some(precio => precio <= 9);
var busqueda = lenguaje.find(lenguaje=>  lenguaje == "PHP");
var busquedaIndex = lenguaje.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda);
console.log(busquedaIndex);
console.log(b);