const calificaciones = [87, 86, 25, 38, 67, 98, 67, 26, 65, 70, 80];

// Algoritmo Bubble Sort para ordenar las calificaciones de menor a mayor
for (let i = 0; i < calificaciones.length; i++) {
  for (let j = 0; j < calificaciones.length - 1 - i; j++) {
    if (calificaciones[j] > calificaciones[j + 1]) {
      // Intercambiamos las calificaciones
      let temp = calificaciones[j];
      calificaciones[j] = calificaciones[j + 1];
      calificaciones[j + 1] = temp;
    }
  }
}

// Obtenemos las cinco calificaciones más altas
const top5 = calificaciones.slice(-5).reverse();
//ejemplo de uso
console.log("Calificaciones ordenadas: " + calificaciones);
console.log("Las cinco calificaciones más altas: " + top5);
