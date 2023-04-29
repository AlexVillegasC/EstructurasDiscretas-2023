const calificaciones = [89, 54, 49, 20, 18, 90, 5, 80, 33, 100];

// Ordenar las calificaciones utilizando el algoritmo Bubble Sort
for (let i = 0; i < calificaciones.length - 1; i++) {
  for (let j = 0; j < calificaciones.length - i - 1; j++) {
    if (calificaciones[j] < calificaciones[j + 1]) {
      // Intercambiar las calificaciones
      const temp = calificaciones[j];
      calificaciones[j] = calificaciones[j + 1];
      calificaciones[j + 1] = temp;
    }
  }
}

// Mostrar las cinco calificaciones más altas
console.log("Las Notas más altas son:");
for (let i = 0; i < 5; i++) {
  console.log(calificaciones[i]);
}
