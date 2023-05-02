const calificaciones = [70, 92, 85, 28, 57, 88, 97, 56, 45, 90, 70];

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

//metodo de burbuja//
