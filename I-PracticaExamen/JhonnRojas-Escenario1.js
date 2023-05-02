const disfraces = [10, 5, 34, 12, 56, 26]
const objdf = 5;
const indice = linearSearch(disfraces, objdf); 

function linearSearch(disfraces, objdf){
  for (let i =0;i < disfraces.length; i++) {
    if(disfraces[i] ===objdf){
     return i;   
    }
  }
  return -1;  
}   

if (indice!==-1){
    console.log (`el invitado con el disfraz número ${objdf} se encuentra en el índice${indice} de la lista.`);
}else{
 console.log (`El invitado con el disfraz número ${objdf} no se encontró en la lista.`);
}
// el invitado con el disfraz número 5 se encuentra en el índice 4 de la lista