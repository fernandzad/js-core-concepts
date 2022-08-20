
// ------ ECMAScript CLASSES (Syntax Sugar) ------
class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() { // This method is defined in prototype
        console.log('Hago sonidos porque estoy vivo');
    }

    saludar() { // This method is defined in prototype
        console.log(`Hola, soy un ${this.nombre}`);
    }
}
const animal = new Animal('Gato', 'Hembra');

class Perro extends Animal {
    raza = '';
    constructor(nombre, genero, tamanio) {
        // super manda a llamar al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar() {
        console.log('Guau guau!');
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }

    // Metodos estaticos
    static info() {
        console.log('Yo soy un perro y soy el mejor amigo del hombre.');
    }
}
const perro = new Perro('Scooby', 'Macho', 'Grande');
// Perro.info();

module.exports = {
    animal,
    perro
};
