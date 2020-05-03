'use strict'

// Eventos del ratón
window.addEventListener('load', () => {
    function cambiarColor() {
        console.log("Me has dado click");
        var bg = boton.style.backgroundColor;


        if (bg == "green") {
            boton.style.backgroundColor = "red";
        } else {
            boton.style.backgroundColor = "green";
        }

        return true;
    }

    // Click
    var boton = document.querySelector("#boton");
    boton.addEventListener('click', ()=>{
        cambiarColor();
        this.style.border = "10px solid black"
    });
    boton.addEventListener('mouseover', function () {
        boton.style.backgroundColor = "yellow";
    });

    boton.addEventListener('mouseout', function () {
        boton.style.backgroundColor = "#ccc";
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("[focus] Estás dentro del input");
    });
    // Blur
    input.addEventListener('blur', function () {
        console.log("[blur] Estás fuera del input");
    });
    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log("Pulsando este tecla ", String.fromCharCode(event.keyCode));
    });
    // Keypress
    input.addEventListener('keypress', function (event) {
        console.log("Tecla presionada ", String.fromCharCode(event.keyCode));
    });
    input.addE

    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log("Tecla soltada ", String.fromCharCode(event.keyCode));
    });
    }
);

