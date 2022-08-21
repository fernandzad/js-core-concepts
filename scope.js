/**
 * El Scope es lo que le da significado a las variables.
 * Determina el conjunto de variables que podemos acceder
 * desde una linea de codigo
 * 
 * Js tiene un scope lexico: el scope de cada variable se determina
 * leyendo el codigo, es decir, sin tener que ejecutarlo
 */

/**
 * Contexto: El valor que tiene la variable this en algun momento de ejecucion.
 * Cual es el objeto que esta ejecutando la funcion.
 * 
 * Scope
 * Contexto/Entorno de Ejecución:
 * 1. Scope Global: variables globales pueden ser accedidas desde cualquier
 *    lugar de nuestro programa
 *    Las variables globales estaran en memoria durante toda la ejecucion
 *    del programa
 * 2. Scope Local: variables locales pueden ser accededidas desde una parte
 *    de nuestro programa
 * 2a. Scope de Funcion
 * 2b. Scope de Bloque 
 */

// Scope Global
var global = 'Mi variable';

function myFunction() {
  // Scope de Bloque
  var local = 'Mi variable local';
  
  if (true) {
    var bloque1 = 'Variable accesible en toda la funcion, debido a hoisting';
    const bloque2 = 'Varibale accesible unicamente en este bloque if';
  }
}

/**
 * Si intentamos usar una variable que no fue declarada, Js
 * intentara crear dicha variable como Global. Para evitar
 * este comportamiento podemos usar el modo estricto 
 * 'use strict' para en vez de eso, recibir un error 
 */