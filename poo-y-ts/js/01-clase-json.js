'use strict'

var bicicleta = {
    color:'rojo',
    modelo:'BMX',
    frenos: 'Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color
    }
}
bicicleta.cambiaColor('verde')
console.log(bicicleta)

