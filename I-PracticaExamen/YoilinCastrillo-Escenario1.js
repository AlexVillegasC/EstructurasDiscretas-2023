function linearSearch(disfraces, objetivo) {
    for (let i = 0; i < disfraces.length; i++) {
      if (disfraces[i] === objetivo) {
        return i;
      }
    }
    return -1;
  }
  
  const invitados = [23, 5, 47, 18, 32, 10];
  const objetivo = 47;
  const indice = linearSearch(invitados, objetivo);
  
  console.log(indice); // Salida: 3