const disfraces = [10, 23, 5, 8, 12, 23, 17];
const objetivo = 17;
const indice = linearSearch(disfraces, objetivo);

function linearSearch(disfraces, objetivo) {
    for (let i = 0; i < disfraces.length; i++) {
      if (disfraces[i] === objetivo) {
        return i;
      }
    }
    return -1;
  }
 
  if (indice !== -1) {
    console.log(`El invitado con el disfraz número ${objetivo} se encuentra en el índice ${indice} de la lista.`);
  } else {
    console.log(`El invitado con el disfraz número ${objetivo} no se encontró en la lista.`);
  }
// El invitado con el disfraz número 17 se encuentra en el índice 6 de la lista.