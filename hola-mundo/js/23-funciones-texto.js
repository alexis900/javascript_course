'use strict'

// Transformación de cadenas de texto

var numero = 444;
var texto1 = "   Bienvenido al curso de JS   ";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud
var nombre = "Alejandro Martín Pérez";
console.log(nombre.length);

// Concatenar - Unir textos

//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

var busqueda = texto1.match("curso");
console.log(busqueda);

busqueda = texto1.substr(14,5);
console.log(busqueda);

busqueda = texto1.charAt(15);
console.log(busqueda);

busqueda = texto1.startsWith("Bie");
console.log(busqueda);

busqueda = texto1.includes("al");
console.log(busqueda);

busqueda = texto1.replace("JS", "PHP");
console.log(busqueda);

busqueda = texto1.slice(14,22);
console.log(busqueda);

busqueda = texto1.split(" ");
console.log(busqueda);

busqueda = texto1.trim();
console.log(busqueda);