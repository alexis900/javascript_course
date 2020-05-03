'use strict'

window.addEventListener('load', function(){

    // Timers
    function intervalo(){
        var tiempo = setInterval(() => {
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px"
            } else {
                encabezado.style.fontSize = "50px"
            }
            console.log("Set interval ejecutando");
        }, 5000);
        return tiempo;
    }
    var tiempo = intervalo();
    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click", () => {
        this.alert("Has parado el intervalo en bucle");
        this.clearInterval(tiempo);
    })

    var start = this.document.querySelector("#start");
    start.addEventListener("click", () => {
        this.alert("Has iniciado el intervalo en bucle");
        intervalo();
    })

});