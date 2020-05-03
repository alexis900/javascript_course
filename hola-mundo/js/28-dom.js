'use strict'

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

// Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola class2";
console.log(caja);

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento!";

var valor;
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == "string") {
        console.log(todosLosDivs[valor]);
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miSeccion").append(parrafo);
    }
}

// Conseguir elementos por su clase css

var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");
divAmarillos[0].style.background = "yellow";
var div;
for(div in divRojos){
    if (divRojos[div].className == "rojo") {
        divRojos[div].style.background = "red";
    }
}


// Query selector
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);