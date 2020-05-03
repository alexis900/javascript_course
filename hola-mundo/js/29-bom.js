'use strict'

// BOM - Browser Object Model
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}

function redirect(url) {
    window.open(url);
}
