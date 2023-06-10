// suma recursiva
var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n){
    if (n<=0){
        return 0;
    } else{
        return n + sumaRecursiva(n-1);
    }
}

//suma iterativa
var res = sumaIterativa(3);
console.log(res);

function sumaIterativa(n) {
    var suma = 0;
    
    for (var i = 1; i <= n; i++) {
        suma += i;
    }
    
    return suma;
}

//fatorial recursivo
var res = factorialRecursivo(3);
console.log(res);
function factorialRecursivo(n){
    if (n===0){
        return 1;
    }else{
        return n * factorialRecursivo(n - 1);
    }
}
// factorial iterativo
function factorialIterativo(n) {
    let factorial = 1;
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  var res = factorialIterativo(3);
  console.log(res);

  //funcion fibonacci
  var res= fibonacci(3);
  console.log(res);

  function fibonacci(n){
    if (n<=0){
        return 0;
    } else if (n===1){
        return 1;
    }else{
        return fibonacci(n -1) + fibonacci( n - 2);
    }
  }

  // funcion fibonacci iterativa 

  function fibonacci(n) {
    var fib = [0, 1];
  
    for (var i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n];
  }
  
  var res = fibonacci(3);
  console.log(res); 