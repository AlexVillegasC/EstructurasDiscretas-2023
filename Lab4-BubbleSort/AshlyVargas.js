function SortGrades(arr) {
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  Grades = [88, 97, 85, 83, 72, 60, 90, 79, 80];
  const sortedArray = SortGrades(Grades);
  console.log("Mejores 4 calificaciones:", sortedArray.slice(0, 4));
  