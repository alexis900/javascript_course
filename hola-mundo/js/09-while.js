'use strict'
// Bucle While
var year = 2018;
while (year != 1991) {
    //Ejecuta esto
    console.log("Estamos en el año: " + year);
    if (year == 2000) {
        break;
    }
    year--;
}

// Do while
var years = 20;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years = 20;
} while (years != 20);