//Ejemplo 1 Recursiva, pasar a iterativa:

var res = sumaRecursiva(3);
console.log(res);
function sumaRecursiva(n) {
    if(n < = 0){
        return 0;
    } else {
        return n + sumaRecursiva(n - 1);
    }
}


var res = sumaIterativa(3);
console.log(res);

function sumaIterativa(n) {
    var resultado = 0;
    for (var i = n; i >= 0; i--) {
        resultado += i;
    }
    return resultado;
}


//Ejemplo 2 funcion iterativa:
var res = factorialRecursivo(3);
console.log(res);

function factorialRecursivo(n){
    if (n  === 0){
        return 1;
    } else{
        return n * factorialRecursivo(n - 1); 
    }
}


function factorialIterativo(n) {
    let resultado = 1;
    
    for (let i = n; i >= 1; i--) {
      resultado *= i;
    }
    
    return resultado;
  }
  
  var res = factorialIterativo(3);
  console.log(res);
  

//Ejemplo 3

var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
    if (n < 0){
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci( n - 2);
    }
}



var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
    if (n < 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        var a = 1;
        var b = 1;
        var resultado = 0;
        for (var i = 3; i <= n; i++) {
            resultado = a + b;
            a = b;
            b = resultado;
        }
        return resultado;
    }
}
