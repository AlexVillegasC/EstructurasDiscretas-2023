// Funcion RECURSIVA 

var res = sumaRecursiva(3); 
console.log(res);

function sumaRecursiva(n){
    if (n<= 0) {
        return 0;
    } else {
        return n + sumaRecursiva (n - 1); 
    }
}


//Funcion ITERATIVA

var res = sumaIterativa(3);
console.log(res);

function sumaIterativa(n) {
  let suma = 0;
  for (let i = n; i > 0; i--) {
    suma += i;
  }
  return suma;
}


//***************************************************************************************

// Funcion RECURSIVA


var res = factorialRecursivo(3); 
console.log(res);

function factorialRecursivo(n){
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursivo (n - 1); 
    }
}


// Funcion ITERATIVA

var res = factorialIterativo(3);
console.log(res);

function factorialIterativo(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}


//***************************************************************************************


// Funcion RECURSIVA 

var res = fibonaci(3);
console.log(res);

function fibonaci (n){
    if (n <= 0){
        return 0; 
    } else if (n === 1) {
        return 1;
    } else {
        return fibonaci (n - 1) + fibonaci (n - 2);
    }

}

// Funcion Iterativa 

function fibonaciIterativo(n) {
    if (n <= 0) {
      return 0;
    }
  
    let fib = [0,1];
  
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
  }
  
  var res = fibonaciIterativo(3);
  console.log(res);
  
