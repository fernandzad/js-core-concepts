// ------ CONSTRUCTOR FUNCTION CLASSES ------
function Persona(nombre, edad) { // This is a constructor function
    this.nombre = nombre;
    this.edad = edad;
}
// if we need to avoid to generate a method each time we define a object
// we use protptype
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre}!`);
}

Persona.prototype.decirEdad = function() {
    console.log(`Hola, tengo ${this.edad} anios`);
}
const persona = new Persona('Adrian', 27);


// ------ HERENCIA PROTOTIPICA ------
function Programador(nombre, edad, isGraduated) {
    this.super = Persona;
    this.super(nombre, edad); // es como llamar al constructor de la clase padre
    this.isGraduated = isGraduated;
}
// Programador is inheriting from Persona
Programador.prototype = new Persona();
Programador.prototype.constructor = Programador;

const programador = new Programador('Adrian', 27, false);

Programador.prototype.saludar = function() {
    console.log(`Hola soy un programador y me llamo ${this}`);
}
Programador.prototype.programar = function() {
    console.log(`Ya comence a programar!`);
}

module.exports = {
    persona,
    programador
}