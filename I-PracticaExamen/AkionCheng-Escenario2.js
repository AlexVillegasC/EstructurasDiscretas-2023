const globos = [34, 12, 45, 25, 18, 9];

//const globos = [15, 2, 1, 100, 76, 50]; //Prueba secundaria para asegurar el codigo

function bubbleSort(array) {
    
    const length = array.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
  }
  console.log(bubbleSort(globos))
