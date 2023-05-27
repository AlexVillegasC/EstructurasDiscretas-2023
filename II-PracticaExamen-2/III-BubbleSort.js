// Subir este código a un Repositorio de su propia Autoria.
// Grabar un video educativo donde 
    //   Se explica linea por linea.
    //   Se usa el Debugger como herramienta principal.
// Compartir el video por un link (Youtube, Drive, etc).





// Explicar con claridad cada paso.
const notas = [26.67, 33.33, 46.67, 53.33, 46.67, 53.33, 40.00, 66.67, 66.67, 60.00, 26.67, 66.67, 100.00, 100.00, 13.33, 13.33, 46.67, 53.33, 40.00, 33.33, 33.33, 13.33, 100.00, 100.00, 73.33, 26.66666667, 20.00, 0.00, 13.33, 26.67, 53.33, 46.67, 66.67, 33.33, 26.67, ];
console.log(notas.sort());

const notasOrdenadas = bubbleSort(notas);

console.log(notasOrdenadas);

function bubbleSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}

// Explicar luego, como se puede dar un pequeña optimización al Bubble Sort.