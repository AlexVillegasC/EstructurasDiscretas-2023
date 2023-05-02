const pulsera = [8, 13, , 15, 10, 3]
const adventh = 10;
const indice =  linearSearch(pulseras, adventh);

function linearSearch(pulseras, adventh) {
    for(i=0; i <pulseras.length; i++){
        if(pulseras[i] === adventh){
            return i;
        }
    }
    return -1;
}
if(indice !== -1){
    console.log(`El invitado con la pulsera número ${adventh} se encuentra en el índice ${indice} de la lista.`);
  } else {
    console.log(`El invitado con la pulsera número ${adventh} no se encontró en la lista.`);
  }
// El invitado con el disfraz número 10 se encuentra en el índice 4 de la lista.