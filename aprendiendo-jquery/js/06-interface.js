'use strict'
$(document).ready(function(){

    // Mover elemento por la página
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccionar y ordenar los elementos
    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log('ha cambiado la lista');
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log('Has soltado algo dentro del area');
        }
    });

    //Efectos

    $('#mostrar').click(function(){
        $('.caja-efectos').toggle("shake", 4000);
    });

    // Tooltip

    $(document).tooltip();

    // Dialog
    $('#lanzar-popup').click(function(){
        $('#popup').dialog();
    });

    // Calendario
    $('#calendario').datepicker();

    //Tabs

    $('#pestanas').tabs();
});