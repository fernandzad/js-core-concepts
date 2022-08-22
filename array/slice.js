
/**
 * SLICE es un metodo que permite 'cortar' una fraccion del arreglo original
 * slice NO MODIFICA el array original
 * 
 * param1: El índice desde donde comenzara a tomar la 'rebanada' del array
 * param2: El índice hasta donde tomara elementos, sin incluir el mismo
 * 
 * returns: Un array nuevo que contiene todos los elementos que cortamos del array original
 * 
 */
const array = [1,2,3,4,5,6,7];
const slicedArray = array2.slice(0, 2);

// Result
slicedArray // [1, 2] toma los elementos desde la posicion 0 hasta la 2 (sin incluir la 2)
array // [1,2,3,4,5,6,7] no se modifica