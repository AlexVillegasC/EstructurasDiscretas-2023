function SortGrades(calificaciones) {
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < calificaciones.length - 1; i++) {
        if (calificaciones[i] < calificaciones[i + 1]) {
          [calificaciones[i], calificaciones[i + 1]] = [calificaciones[i + 1], calificaciones[i]];
          swapped = true;
        }
      }
    } while (swapped);
  
    return calificaciones;
  }
  
  const calificaciones = [96, 58, 100, 65, 72, 73, 50, 71, 83];
  SortGrades(calificaciones);
  console.log(calificaciones);
console.log("Mejores 5 calificaciones:", sortedGrades.slice(0, 5));