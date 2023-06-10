//Suma recursiva
var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n){

    if(n <=0){
        return 0;
    }else{
        return n + sumaRecursiva(n-1);
    }
}

//Suma iterativa

function sumaIterativa(n) {
    let sum = 0;

    for (let i = n; i > 0; i--) {
      sum += i;
    }

    return sum;
  }

  var res = sumaIterativa(3);
  console.log(res);

//factorial recursivo

var res = factorialRecursivo(3);
console.log(res);

function factorialRecursivo(n){

    if(n === 0){
        return 1;
    }else{
        return n * factorialRecursivo(n-1);
    }
}

//Factorial iterativo

function factorialIterativo(n) {
    let mult = 1;

    for (let i = n; i > 1; i--) {
      mult *= i;
    }

    return mult;
  }

  var res = factorialIterativo(3);
  console.log(res);

//fibonacci

var res = fibonacci(10);
console.log(res);

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

//fibonacci iterativo

var res = fibonacci(10);
console.log(res);

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    let fibPrev = 0;
    let fibCurrent = 1;
    
    for (let i = 2; i <= n; i++) {
      let temp = fibCurrent;
      fibCurrent = fibPrev + fibCurrent;
      fibPrev = temp;
    }
    
    return fibCurrent;
  }
}

