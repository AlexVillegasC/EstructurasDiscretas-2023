var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n) {
    if(n <= 0) {
        return 0;
    } else {
        return n + sumaRecursiva(n - 1);
    }
}


function sumaIterativa(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) { 
      suma += arr[i];
    }
    return suma;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = sumaIterativa(numeros);
console.log(resultado);



var res = factorialRecursivo(3);
console.log(res);

function factorialRecursivo(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}


var res = factorialIterativo(3);
console.log(res);

function factorialIterativo(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
} 


var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


// Fibonacci Iterativo
var res = fibonacciIterativo(10);
  console.log(res);

function fibonacciIterativo(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let fibPrevPrev = 0;
      let fibPrev = 1;
      let fibCurrent;
  
      for (let i = 2; i <= n; i++) {
        fibCurrent = fibPrev + fibPrevPrev;
        fibPrevPrev = fibPrev;
        fibPrev = fibCurrent;
      }
  
      return fibCurrent;
    }
  }
  