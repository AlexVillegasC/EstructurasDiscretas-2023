const disfraces = [15, 40, 55, 82, 16, 32, 97];
const objetivoprincipal = 55;
const indice = linearSearch(disfraces, objetivoprincipal);

function linearSearch(disfraces, objetivoprincipal) {
    for (let i =0;i<disfraces.length; i++) {
        if (disfraces[i]===objetivoprincipal) {
            return i;
        }
       }
       return -1;
    }
    if(indice!== -1) {
        console.log(`el invitado con el disfraz numero ${objetivoprincipal} se encuentra en el indice ${indice} de la lista`);
    }else{
        console.log(`el invitado con el disfraz numero ${objetivoprincipal} no se encontro en la lista`);
    }
    // el invitado con el disfraz numero 55 se encuentra en el indice 2 de la lista
