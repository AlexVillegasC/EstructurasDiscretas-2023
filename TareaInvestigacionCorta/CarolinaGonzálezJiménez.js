var res = sumaRecursiva(3);
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
  return resultado;
}




function fibonacci(n) { 
 if (n <=0) { 
    return 0;
 } else if (n == 1) {
    return 1;
 } else { 
    return fibonacci (n - 1) + fibonacci(n - 2);
 }

}

var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
    if (n < 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        var prev1 = 0;
        var prev2 = 1;
        var current;

        for (var i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }

        return current;
    }
} 