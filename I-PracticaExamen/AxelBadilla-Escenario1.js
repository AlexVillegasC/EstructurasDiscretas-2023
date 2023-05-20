const disfraces = [23, 11, 18, 21, 14, 45];
const númeroBuscado = 11;
const indice = linearSearch(disfraces, númeroBuscado);

function linearSearch(disfraces, númeroBuscado){
    for (let i = 0; i < disfraces.length; i++){
        if (disfraces[i] === númeroBuscado){
            return i;
        }
    }
    return -1;
}

if (indice !== -1){
    console.log(`El invitado con el disfraz número ${númeroBuscado} se encuentra en el indice ${indice} de la lista.`);
  }  else {
        console.log(`El invitado con el disfraz solicitado" ${númeroBuscado} no se encontró en la lista.`);
    }
    // El invitado con el disfraz número 11 se encontró en el indice 1 de la lista.
