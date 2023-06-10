var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n) {
    if(n <=0){
        return 0;
    }else{
        return n + sumaRecursiva(n - 1)
    }
}

/***********************************************************************************/

function sumaIterativa(n){
    let suma = 0;
    while (n > 0){
        suma += n;
        n --;
    }
    
    return suma;
    }
    
    var res = sumaIterativa(6);
    console.log(res);   // resultado es igual a 21

//Funciones de Suma Recursiva a  Suma Interativa 


var res = factorialRecursivo(3)
console.log(res)

function factorialRecursivo(n){
    if (n === 0){
        return 1;
    }else {
        return n * factorialRecursivo(n - 1);
    }
}


/***********************************************************************************/

function factorialIterativo(n) {
    let resultado = 1;
  
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  let res = factorialIterativo(3);
  console.log(res);

//Funcioness de Factorial Recursiva a  Factorial Interativa 


var res = fibonacci (3);
consoloe.log(res);

function fibonacci(n) {
    if (n <= 0) {
      return 0;

    } else if (n === 1) {
     return 1;

    } else {
     return fibonacci (n - 1) + fibonacci (n - 2);

    }
}

/***********************************************************************************/

function fibonacciInterativo(n)
{
    let fib = [0,1];

    for(let i = 2; i <= n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}

//Funcioness de Fibonacci a FibonacciInterativo 