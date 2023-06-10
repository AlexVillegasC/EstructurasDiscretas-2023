
// Código dado por el profe, Suma recursiva
var res = sumaRecursiva (3);
console.log(res);
 
    function sumaRecursiva(n){  

        if(n <= 0){
            return 0
        } 
        else {
            return n + sumaRecursiva (n-1);

        }
    }



// Suma Iterativa
    function sumaIterativa(arr) {
  let suma = 0;
  let i = 0;
  
  while (i < arr.length) {
    suma += arr[i];
    i++;
  }
  
  return suma;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const resultado = sumaIterativa(numeros);
console.log(resultado); // Output: 15



//Primer código en forma iretativa
function sumaIterativa(n) {
  let suma = 0;
  
  for (let i = n; i > 0; i--) {
    suma += i;
  }
  
  return suma;
}

const res = sumaIterativa(3);
console.log(res);



//Codigo Fibonacci 

var res = fibonacci(3);
console.log(res)

    function fibonacci(n){

        if (n <= 0){
            return 0;

        }
        else if (n === 1){
            return 1;

        }
        else{   
            return fibonacci (n -1) + fibonacci (n - 2);

        }
    }

    //Fibonacci pero iterativo 
    function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fibNMinus1 = 1;
    let fibNMinus2 = 0;
    let fibN = 0;
    
    for (let i = 2; i <= n; i++) {
      fibN = fibNMinus1 + fibNMinus2;
      fibNMinus2 = fibNMinus1;
      fibNMinus1 = fibN;
    }
    
    return fibN;
  }
}

const res = fibonacci(3);
console.log(res);