const calificaciones = [98, 20, 34, 50, 75, 95, 70, 13, 40, 65];

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
console.log("Las calificaciones más altas son:");
for (let i = 0; i < 5; i++) {
  console.log(calificaciones[i]);
}
