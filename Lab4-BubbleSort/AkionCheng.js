const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];

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
console.log(bubbleSort(calificaciones))