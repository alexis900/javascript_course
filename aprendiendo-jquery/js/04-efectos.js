'use strict'

$(document).ready(function(){
    var caja = $('#caja');
    $('#mostrar').hide();
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        caja.slideDown('slow');
    });

    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        caja.slideUp('slow', function(){
            console.log('cartel ocultado');
        });
        
    });

    $('#todoenuno').click(function(){
        caja.slideToggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '100px'
            }
            , 'slow')
            .animate({
                borderRadius: '50px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                marginLeft: '0px',
                borderRadius: '0px'
            }, 'slow')
            .animate({
                marginTop: '0px',
                borderRadius: '100px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '100px'
            }, 'slow');
    });
});