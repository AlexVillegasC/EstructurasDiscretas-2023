
//
// * Complejidad Temporal -> O( )
// * Complejidad Espacial -> O( )
function linearSearch(arreglo, Clave){
for (let indice = 0; indice < arreglo.lengh; indice++){
    if (arreglo[indice] === clave){
        return indice;
    }
}
 return -1;
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log("El indice está en la posicion:" + linearSearch(myArrayt, 2)); 