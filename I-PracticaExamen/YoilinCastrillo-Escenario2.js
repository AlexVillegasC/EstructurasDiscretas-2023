//Funcion bubbleSort
function bubbleSort(tamGlobos) {
    const n = tamGlobos.length;
    //dos bucles for anidados para comparar los elementos del array
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (tamGlobos[j] > tamGlobos[j + 1]) {
          // Proceso de intercambio de los elementos
          let temp = tamGlobos[j];
          tamGlobos[j] = tamGlobos[j + 1];
          tamGlobos[j + 1] = temp;
        }
      }
    }
    return tamGlobos;
  }
  // Uso del programa
  const tamGlobos = [34, 12, 45, 25, 18, 9, 48];
  console.log(bubbleSort(tamGlobos));