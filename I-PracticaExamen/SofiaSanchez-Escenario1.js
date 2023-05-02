function linearSearch(disguiseNumbers, targetNumber) {
    for (let i = 0; i < disguiseNumbers.length; i++) {
      if (disguiseNumbers[i] === targetNumber) {
        return i;
      }
    }
    return -1;
  }
  
  // Ejemplo de uso
  const invitados = [25, 7, 49, 50, 34, 12];
  const numeroDisfrazObjetivo = 50;
  console.log(linearSearch(invitados, numeroDisfrazObjetivo)); // debería imprimir 3
  