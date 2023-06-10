//sumaRecursiva

//var res = sumaRecursiva(3);
//console.log(res);

//function sumaRecursiva(n) {
  //  if(n <= 0) {
    //    return 0;
   // } else {
     //   return n + sumaRecursiva(n - 1);
    //}
//}

//SumaIterativa
//var res = sumaIterativa(3);
//console.log(res);

//function sumaIterativa(n) {
  //  var suma = 0;
    //for (var i = 1; i <= n; i++) {
      //  suma += i;
    //}
   // return suma;
//}

//factorialRecursivo
//var res = factorialRecursivo(3);
//console.log(res);

//function factorialRecursivo(n) {
  //  if(n === 0) {
    //    return 1;
    //} else {
      //  return n * factorialRecursivo(N - 1);
    //}
//}


//factorialIterativo
//var res = factorialIterativo(3);
//console.log(res);

//function factorialIterativo(n) {
  //  var factorial = 1;
    //for (var i = 1; i <= n; i++) {
      //  factorial *= i;
    //}
    //return factorial;
//}


//fibonaccRecursivo
var res = fibonacci(3);
console.log(res);

function fibonacci(n) {
    if(n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) +  fibonacci(n - 2);
    }
}

//fibonaccIterativo
let fib = [1,2]

for(let i = 2; i <= n; i++)
{
    fib [i] = fib[-1] + fib[i-2];
}
return fib[n];