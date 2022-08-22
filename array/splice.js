
/**
 * Splice es un metodo que nos permite eliminar elementos de un arreglo
 * e insertar nuevos elementos desde donde eliminó los anteriores
 * splice MODIFICA EL ARRAY ORIGINAL
 * 
 * param1: La posicion donde comenzara a eliminar elementos
 * param2: La cantidad de elementos que eliminará del arreglo
 * params: Subsecuentes elementos que insertara a partir de donde eliminó los anteriores
 * 
 * returns: un arreglo nuevo con los elementos eliminados del arreglo original
 */
const array = [1,2,3,4,5,6,7];
const splicedArray = array.splice(0, 2);

splicedArray // [1, 2] los valores removidos
array // [3, 4, 5, 6, 7] modifica el arreglo original