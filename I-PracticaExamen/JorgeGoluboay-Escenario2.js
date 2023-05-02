const antifaces = [18, 25, , 19, 35, 4]
const jega = 35;
const indice =  linearSearch(antifaces, jega);

function linearSearch(antifaces, jega) {
    for(i=0; i <antifaces.length; i++){
        if(antifaces[i] === jega){
            return i;
        }
    }
    return -1;
}
if(indice !== -1){
    console.log(`El invitado con el antifaz número ${jega} se encuentra en el índice ${indice} de la lista.`);
  } else {
    console.log(`El invitado con el antifaz número ${jega} no se encontró en la lista.`);
  }
// El invitado con el antifaz número 35 se encuentra en el índice 4 de la lista.