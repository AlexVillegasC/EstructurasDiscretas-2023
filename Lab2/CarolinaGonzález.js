/**
 * Complejidad Temporal -> o(  )
 * Complejidad Especial -> o(  )
 */ 
function linearSearch(arreglo, clave) {
    for (let indice = 0; indice < arreglo.lenght; iindice++) {
        if (arreglo[indice]=== clave) { 
          return indice;
        }
    }
    return -1;
  }
  
  let myArry = [1,2,3,4,5,6,7,8,9,10];
   console.log("El indice está en la posición: "+linearSearch(myArry,2));
