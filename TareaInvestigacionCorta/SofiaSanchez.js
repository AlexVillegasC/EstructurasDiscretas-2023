//Ejemplo 1 Recursivo

var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n) {
    if(n <= 0) {
        return 0;
    } else {
        return n + sumaRecursiva(n - 1);
    }
}


//Ejemplo 2 Recursivo
var res = factorialRecursivo(3);
console.log(res);

function factorialRecursivo(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    } 
}

//Ejemplo 3 Recursivo

var res = fibonacci(3);
console.log(res);

function fibonacci(n){
    if( n <= 0 ){
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci (n - 2);
    }
}


//Interativo ejemplo 1
function sumaIterativa(n){
    let suma = 0;
    while (n > 0){
        suma += n;
        n --;
    }
    
    return suma;
    }
    
    var res = sumaIterativa(3);
    console.log(res);   


//Interativo ejemplo 2

function factorialIterativo(n) {
    let resultado = 1;
  
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  let res = factorialIterativo(3);
  console.log(res);
  

  //Interativo ejemplo 3

  function fibonacciInteractivo(n)
{
    let fib = [0,1];

    for(let i = 2; i <= n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}