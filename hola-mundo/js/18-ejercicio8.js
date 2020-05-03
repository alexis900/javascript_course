'use strict'
/*
Calculador:
- Pida dos numero por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la página, en una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}
var resultado = "Suma: " + (numero1 + numero2) + "<br/>"+
                "Resta: " + (numero1 - numero2) + "<br/>"+
                "Multiplicación: " + (numero1 * numero2) + "<br/>"+
                "División: " + (numero1 / numero2) + "<br/>";

var resultadoCMD = "Suma: " + (numero1 + numero2) + "\n" +
    "Resta: " + (numero1 - numero2) + "\n" +
    "Multiplicación: " + (numero1 * numero2) + "\n" +
    "División: " + (numero1 / numero2) + "\n";

console.log(resultadoCMD);
alert(resultadoCMD);
document.write(resultado);