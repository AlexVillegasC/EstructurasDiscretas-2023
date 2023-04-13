// Función para implementar el algoritmo Bubble Sort
function bubbleSort(arr) {
    // Variable para determinar si se realizó un intercambio durante una iteración
    let swapped;
  
    // El bucle externo se ejecutará hasta que no haya más intercambios necesarios
    do {
      // Inicializamos 'swapped' en falso al comienzo de cada iteración
      swapped = false;
  
      // Bucle interno para recorrer el arreglo desde el principio hasta el penúltimo elemento
      for (let i = 0; i < arr.length - 1; i++) {
        // Comparamos el elemento actual con el siguiente
        if (arr[i] > arr[i + 1]) {
          // Si están en el orden incorrecto, los intercambiamos y marcamos 'swapped' como verdadero
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      // Si no se realizaron intercambios durante la iteración, el arreglo ya está ordenado
    } while (swapped);
  
    // Devolvemos el arreglo ordenado
    return arr;
  }
  
  // Ejemplo de uso del algoritmo Bubble Sort
  const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Arreglo desordenado:", arrayToSort);
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Arreglo ordenado:", sortedArray);

  
/**** Problema: Clasificación de calificaciones de estudiantes **** /
Imagina que eres profesor en una escuela y has realizado un examen para tus estudiantes.
Después de calificar sus exámenes, deseas clasificar las calificaciones de mayor a menor
para tener una mejor idea del rendimiento de la clase.

Utiliza el algoritmo Bubble Sort para ordenar las calificaciones de los estudiantes y determinar las cinco calificaciones más altas.

Instrucciones:
1. Escribe una función llamada sortGrades que toma un arreglo de calificaciones como argumento y lo ordena de mayor a menor 
utilizando el algoritmo Bubble Sort.

2. Modifica la función bubbleSort proporcionada anteriormente para ordenar las calificaciones de mayor a menor.
Crea un arreglo de calificaciones de ejemplo y utilízalo para probar la función sortGrades.

3. Imprime las cinco calificaciones más altas en la consola.
*/