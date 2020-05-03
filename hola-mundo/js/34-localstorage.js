'use strict'

// LocalStorage

// Comprobar disponibilidad de LocalStorage
if (typeof(Storage) !== 'undefined') {
    console.log('Localstorage disponible');
} else {
    console.log('Localstorage no disponible');
}

// Guardar datos

localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));

// Guardar objeto

var usuario = {
    nombre: "Alejandro",
    email: "amartinpe@gmail.com",
    web: "martinalejandro.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(userjs.web + " - " + userjs.nombre);

localStorage.clear();