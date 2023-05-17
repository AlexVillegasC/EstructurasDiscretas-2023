function linearSearch(disguiseNumbers, targetNumber) {
    for(let indice = 0; indice < disguiseNumbers.length; indice++){
        if(disguiseNumbers[indice] === targetNumber){
            return indice;
        }
    }
    return -1; 
  }

const disfraces = [23, 5, 47, 18, 32, 10];
const targetNumber = 18;
const indice = linearSearch(disfraces, targetNumber);
//console.log("El indice está en la posicion " + indice ); 