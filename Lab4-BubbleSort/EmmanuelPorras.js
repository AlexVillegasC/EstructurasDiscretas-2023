//Test
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  function sortGrades(calificaciones) {
    bubbleSort(calificaciones);
  }
  
  const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
  sortGrades(calificaciones);
  console.log(calificaciones); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
  
  const cincoMasAltas = calificaciones.slice(0, 5);
  console.log("Las cinco calificaciones más altas son: " + cincoMasAltas.join(", "));
  