'use strict'

$(document).ready(function(){

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    

    // Posts

    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tristique eleifend. Nunc et ipsum vitae nunc dignissim auctor.Sed eget enim sit amet odio consectetur porttitor.Suspendisse justo dui, porttitor et ex sed, varius auctor nibh.Nulla mi tortor, sagittis eu purus pellentesque, ultricies ornare urna.Mauris faucibus ante pellentesque dolor vestibulum iaculis.Pellentesque lobortis metus a rhoncus ultricies.Praesent ullamcorper tellus at felis posuere, ut commodo sapien aliquam.Vestibulum eget commodo est.Vivamus ligula lorem, sollicitudin at ante sed, tristique vestibulum leo.Maecenas eget bibendum ante, nec efficitur nisi.Sed eu purus a velit lacinia aliquam ac a lectus.Duis lobortis felis ut venenatis condimentum.Fusce aliquam nulla augue, non scelerisque justo tristique quis.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tristique eleifend. Nunc et ipsum vitae nunc dignissim auctor.Sed eget enim sit amet odio consectetur porttitor.Suspendisse justo dui, porttitor et ex sed, varius auctor nibh.Nulla mi tortor, sagittis eu purus pellentesque, ultricies ornare urna.Mauris faucibus ante pellentesque dolor vestibulum iaculis.Pellentesque lobortis metus a rhoncus ultricies.Praesent ullamcorper tellus at felis posuere, ut commodo sapien aliquam.Vestibulum eget commodo est.Vivamus ligula lorem, sollicitudin at ante sed, tristique vestibulum leo.Maecenas eget bibendum ante, nec efficitur nisi.Sed eu purus a velit lacinia aliquam ac a lectus.Duis lobortis felis ut venenatis condimentum.Fusce aliquam nulla augue, non scelerisque justo tristique quis.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tristique eleifend. Nunc et ipsum vitae nunc dignissim auctor.Sed eget enim sit amet odio consectetur porttitor.Suspendisse justo dui, porttitor et ex sed, varius auctor nibh.Nulla mi tortor, sagittis eu purus pellentesque, ultricies ornare urna.Mauris faucibus ante pellentesque dolor vestibulum iaculis.Pellentesque lobortis metus a rhoncus ultricies.Praesent ullamcorper tellus at felis posuere, ut commodo sapien aliquam.Vestibulum eget commodo est.Vivamus ligula lorem, sollicitudin at ante sed, tristique vestibulum leo.Maecenas eget bibendum ante, nec efficitur nisi.Sed eu purus a velit lacinia aliquam ac a lectus.Duis lobortis felis ut venenatis condimentum.Fusce aliquam nulla augue, non scelerisque justo tristique quis.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tristique eleifend. Nunc et ipsum vitae nunc dignissim auctor.Sed eget enim sit amet odio consectetur porttitor.Suspendisse justo dui, porttitor et ex sed, varius auctor nibh.Nulla mi tortor, sagittis eu purus pellentesque, ultricies ornare urna.Mauris faucibus ante pellentesque dolor vestibulum iaculis.Pellentesque lobortis metus a rhoncus ultricies.Praesent ullamcorper tellus at felis posuere, ut commodo sapien aliquam.Vestibulum eget commodo est.Vivamus ligula lorem, sollicitudin at ante sed, tristique vestibulum leo.Maecenas eget bibendum ante, nec efficitur nisi.Sed eu purus a velit lacinia aliquam ac a lectus.Duis lobortis felis ut venenatis condimentum.Fusce aliquam nulla augue, non scelerisque justo tristique quis.'
        },
    ]

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
            <a href="#" class="button-more">Leer más</a>
            </article>
       `
       $('#posts').append(post);
    });

    }

    // Selector de tema
    var theme = $("#theme")
    setThemeColor(theme, 'green')
    setThemeColor(theme, 'red')
    setThemeColor(theme, 'blue')
    getThemeColor(theme)

    //Scroll
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    //Login falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name)
    })

    var form_name = localStorage.getItem('form_name')
    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $('#about p')
        about_parrafo.html('<br><strong>Bienvenido, '+ form_name +'</strong><br>')
        about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>')
    }

    $('#logout').click(function() {
        localStorage.clear()
        location.reload()
    })

    // Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }


    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format('HH:mm:ss');
            $('#reloj').html(reloj);
        },1000)
    }

    // Validación
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy',
        })
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        })
    }
});

function setThemeColor(theme, color){
    $("#to-" + color).click(function () {
        var css = "css/" + color + ".css"
        theme.attr("href", css)
        localStorage.setItem('theme_color', color)
    })
}

function getThemeColor(theme){
    var themeItem = localStorage.getItem('theme_color')
    var css = "css/" + themeItem + ".css"
    if (themeItem == null || themeItem == "undefined") {
        theme.attr("href", "css/green.css")
    } else {
        theme.attr("href", css)
    }
}