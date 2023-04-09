/**
 * complejidad temporal 
 * complejidad espacial
 */
function linearsearch(arreglo, clave){
    for (let indice = 0; indice < arreglo.length; indice++){
        if (arreglo[indice] === clave) {
            return indice;
        }
    }
}
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log("el indice esta en la posicion: "+linearsearch(myArray, 2));