'use strict'
/**
 * 
 * Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
 * PLUS: Si los numeros no son un numero o son menos son menores o iguales a cero, nos lo vuelva a pedir
 */

do {
    var primer = prompt("Escribe el primer número", 0);
    var segundo = prompt("Escribe el segundo número", 0);
} while (primer <= 0 || segundo <= 0 || isNaN(primero) || isNaN(segundo));
console.log(primer, segundo);
if (primer == segundo) {
    alert("Los números son iguales");
} else if(primer > segundo){
    alert("El primer número es mayor");
} else if(segundo > primer){
    alert("El segundo número es mayor");
} else {
    alert("Introduce números correctos");
}