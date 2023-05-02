const disfraz = [10, 15, 20, 25, 30, 55, 88, 14];
  const objetivo = 55;
  const indice = linearSearch(disfraz, objetivo);


  function linearSearch(disfraz, objetivo) {
    for (let i = 0; i < disfraz.length; i++) {
      if (disfraz[i] === objetivo) {
        return i; // retornar índice del invitado encontrado
      }
    }
    return -1; // invitado no encontrado
  }

  if (indice !== -1) {
    console.log(`El invitado con el disfraz número ${objetivo} se encuentra en el índice ${indice} de la lista`);
  } else {
    console.log(`El invitado con el disfraz número ${objetivo} no se encontró en la lista.`);
  }


  ///El invitado con el disfraz número 55 se encuentra en el índice 5 de la lista///