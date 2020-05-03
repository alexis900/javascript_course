// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorar
function estampar(logo: string) {
    return function(target: Function){
        target.prototype.estampacion = function():void {
            console.log('Camiseta estampada con el logo de: ' + logo)
        }
    }
}

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Métodos (funciones o acciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color
    }

    public getColor(){
        return this.color
    }
}

// Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean
    setCapucha(capucha){
        this.capucha = capucha
    }

    getCapucha() : boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta('jnsdgk', 'dnj', 'hjesdt', 'doikj', 10)
camiseta.estampacion();
console.log(camiseta)

var sudadera = new Sudadera('Rojo', 'manga larga', 'nike', 'L', 10);
sudadera.setCapucha(true)
console.log(sudadera)

