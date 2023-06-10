// Suma recursiva
var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n){
    if(n <= 0){
        return 0;

    }else{
        return n + sumaRecursiva(n -1 );
    }
}

// La suma en iterativo 
function sumaIterativa(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  var res = sumaIterativa(3);
  console.log(res);

// Recursivo buscando el factorial

  var res = factorialRecursivo(3);
  console.log(res);
  
  function factorialRecursivo(n) {
      if (n === 0) {
          return 1;
      } else {
          return n * factorialRecursivo(n - 1);
      }
  }

//Factorial iterativo
  function factorialIterativa(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  var res = sumaIterativa(5);
  console.log(res);

  //Fibonacci Recursivo

  function Fibonacci(n){
    if(n <= 0){
        return 0;
    }else if (n ===1 ){
        return 1;
    }else{
        return Fibonacci(n - 1 ) + Fibonacci (n - 2)
    }
  }

  var res = Fibonacci(10);
  console.log(res);

  // Fibonacci Iterativo
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
  
  var res = fibonacciIterativo(10);
  console.log(res);
  
