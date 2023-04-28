/**
 * Complejidad Temporal ->O(1)* 
 * Complejidad Espacial ->O(n)* 
 */
function linearSearch(arreglo, clave) {
    for(let indice= 0; indice < arreglo.length; indice++){
    if (arreglo[indice] === clave){
    return indice;
    }
return -1;
    }
}
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log("El indice esta en la posición: "+linearSearch(myArray, 1));
