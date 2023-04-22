# Clasificación de calificaciones de estudiantes

Imagina que eres profesor en una escuela y has realizado un examen para tus estudiantes. Después de calificar sus exámenes, deseas clasificar las calificaciones de mayor a menor para tener una mejor idea del rendimiento de la clase.

Utiliza el algoritmo Bubble Sort para ordenar las calificaciones de los estudiantes y determinar las cinco calificaciones más altas.

## Instrucciones

1. Escribe una función llamada `sortGrades` que toma un arreglo de calificaciones como argumento y lo ordena de mayor a menor utilizando el algoritmo Bubble Sort.

```javascript
function sortGrades(calificaciones) {
  let n = calificaciones.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (calificaciones[j] < calificaciones[j+1]) {
        let temp = calificaciones[j];
        calificaciones[j] = calificaciones[j+1];
        calificaciones[j+1] = temp;
      }
    }
  }
}
```

2. Modifica la función bubbleSort proporcionada anteriormente para ordenar las calificaciones de mayor a menor.

```javascript
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
```

3. Crea un arreglo de calificaciones de ejemplo y utilízalo para probar la función sortGrades.

```javascript
const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
sortGrades(calificaciones);
console.log(calificaciones); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
```

4. Imprime las cinco calificaciones más altas en la consola.

```javascript
console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);
```

El output será: Las cinco calificaciones más altas son: 10,9,9,8,8
¡Espero que esto te haya sido de ayuda! Si tienes alguna pregunta, no dudes en preguntar.