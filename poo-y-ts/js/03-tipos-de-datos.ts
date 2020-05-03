type alfanumerico = string | number

//String
let cadena: alfanumerico = "Hola Mundo!";
// Number
let numero: number = 12;
// Booleano
let verdadero_falso: boolean = true;
// Any
let cualquiera: any = "Hola";
// Arrays
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes)


// Let vs var

var numero1 = 10
var numero2 = 12

if (numero1 == 10) {
    let numero1 = 44
    var numero2 = 55

    console.log(numero1, numero2)
}

console.log(numero1, numero2)