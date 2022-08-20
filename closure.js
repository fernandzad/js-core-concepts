/**
 * CADA VEZ QUE SE EJECUTA UNA FUNCION EN JS
 * SE CREA UN NUEVO CONTEXTO DE EJECUCION
 * CON UN NUEVO ENTORNO LEXICO (LEXICAL ENVIRONMENT)
 */
/** 
 * Closure:
 * Son funciones anidadas que permiten:
 * 1. Proteger el acceso a variables dentro de una funcion
 * 2. Fungir como Fabrica de funciones
 * */ 
function crearContador() {
    let contador = 0;

    return {
        incrementar: function () { // closure
            contador += 1;
            return contador;
        },
        decrementar: function () { //closure
            contador -= 1;
            return contador;
        },
        obtenerValor: function() { //closure
            return contador;
        }
    }
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
console.log(`El valor del contador es: ${contador.decrementar()}`);

const contador2 = crearContador();
console.log(`El valor del contador es: ${contador2.obtenerValor()}`);
contador2.incrementar();
contador2.incrementar();
console.log(`El valor del contador es: ${contador2.decrementar()}`);

module.exports = contador;
