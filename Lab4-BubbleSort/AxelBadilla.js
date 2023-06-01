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
  
  Grades = [35, 64, 89, 45, 27, 78, 99, 91, 88];
  const sortedArray = SortGrades(Grades);
  console.log("Mejores 5 calificaciones:", sortedArray.slice(0, 5));
  