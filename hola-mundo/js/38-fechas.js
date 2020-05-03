'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora = `
    El año es: ${year}
    El año es: ${mes}
    El año es: ${dia}
    El año es: ${hora}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*100));