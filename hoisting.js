/**
 * El hoisting (elevacion) es la forma en la que JS eleva la declaracion de una variable
 * Las declaraciones que son con 'var' se elevan al scope de la funcion donde fueron declaradas
 * Ej. 1
 */

// El hoisting aqui moveria la declaracion tal:
console.log(nombre);
var nombre = 'Adrian';
/**
 * var nombre; // Aqui es undefined
 * console.log(nombre);
 * nombre = 'Adrian'; // Hasta aqui la inicializa
 */

// Otro ejemplo
contarDulces(['sneakers', 'tutsi', 'carlos V']);
function contarDulces(dulces) {
    // var index; //undefined
    // var dulce; //undefined
    // Las dos variables superiores tienen un scope de funcion 'contarDulces'
    for (var index = 0; index < dulces.length; ++i) {
        var dulce = dulces[index];
        
    }
    console.log(dulce); // carlos V
    console.log(index); // 3
}

// El Hoisting tambien aplica para las funciones (excepto las arrow functions)
// Por eso podemos usar funciones antes de declararlas
saludar();
function saludar() {
    console.log('Hola Mundo!');
}
/**
 * CADA VEZ QUE SE EJECUTA UNA FUNCION EN JS
 * SE CREA UN NUEVO CONTEXTO DE EJECUCION
 * CON UN NUEVO ENTORNO LEXICO (LEXICAL ENVIRONMENT)
 */