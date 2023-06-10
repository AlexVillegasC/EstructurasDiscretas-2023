//Suma Recursiva

var res = sumaRecursiva(3);
console.log(res);
function sumaRecursiva(n){
    if(n <= 0){
        return 0;

    }else{
        return n + sumaRecursiva(n -1);
    }
}

//Suma iterativa
function sumaIterativa(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
}
const numeros = [3, 5, 2, 4, 5];
const resultado = sumaIterativa(numeros);
console.log(resultado);


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


//factorial iterativo
  var res = factorialIterativo(3);
console.log(res);

function factorialIterativo(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

//fibonacci recursivo
var res= fibonacci(3);
console.log(res);
function fibonacci(n){
    if (n<=0){
        return 0;

    }else if (n === 1){
        return 1;
    }else{
        return fibonacci(n -1) + fibonacci(n - 2);
    }
}


//fibonacci iterativo
var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    var prev = 0;
    var curr = 1;
    var result;

    for (var i = 2; i <= n; i++) {
      result = prev + curr;
      prev = curr;
      curr = result;
    }

    return result;
  }
}










