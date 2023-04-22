# La fiesta de disfraces

En una fiesta de disfraces, cada invitado lleva un número en su disfraz. El objetivo es encontrar al invitado que lleva un disfraz con un número específico utilizando LinearSearch en JavaScript.

Se te proporciona una lista de números enteros que representan los números de los disfraces de los invitados en la fiesta. Tu tarea es implementar una función en JavaScript que utilice el algoritmo de LinearSearch para encontrar al invitado con el número de disfraz objetivo. Si el invitado es encontrado, la función debe retornar el índice del invitado en la lista; de lo contrario, debe retornar -1.

## Ejemplo

Invitados: `[23, 5, 47, 18, 32, 10]`
Número de disfraz objetivo: `18`

La función debe retornar: `3` (ya que el invitado con el número de disfraz 18 está en el índice 3 de la lista)

## Esqueleto de la función

```javascript
function linearSearch(disguiseNumbers, targetNumber) {
  // Implementa el algoritmo de LinearSearch aquí
}
```

Prueba tu función con diferentes listas de números y números de disfraces objetivo para asegurarte de que funcione correctamente

## Instrucciones

1. Implementa la función `linearSearch` en JavaScript utilizando el algoritmo de LinearSearch.
2. Asegúrate de que la función retorne el índice correcto si el número de disfraz objetivo es encontrado en la lista de disfraces, y `-1` si no se encuentra.
3. Prueba tu función con varios casos de prueba para garantizar que funcione correctamente.

## Sugerencias

- Recuerda que el algoritmo de LinearSearch recorre la lista de manera secuencial, comparando cada elemento con el número de disfraz objetivo.
- Utiliza un bucle `for` o `while` para iterar sobre la lista de números de disfraces.
