function linearsearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}

let myArray = [2, 11, 3, 1, 7, 6, 5, 8, 10, 9];
console.log("El indice está en la posición: " + linearsearch(myArray, 10));
