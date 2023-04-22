const disfraces = [8, 20, , 15, 30, 3]
const objdf = 30;
const indice =  linearSearch(disfraces, objdf);

function linearSearch(disfraces, objdf) {
    for(i=0; i <disfraces.length; i++){
        if(disfraces[i] === objdf){
            return i;
        }
    }
    return -1;
}
if(indice !== -1){
    console.log(`El invitado con el disfraz número ${objdf} se encuentra en el índice ${indice} de la lista.`);
  } else {
    console.log(`El invitado con el disfraz número ${objdf} no se encontró en la lista.`);
  }
// El invitado con el disfraz número 30 se encuentra en el índice 3 de la lista.
