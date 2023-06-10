//Pasar este codigo Suma Recursiva a Iterativo.

// var res = sumaRecursiva(3);
// console.log(res);

// function sumaRecursiva(n){
//     if(n <= 0){
//         return 0;

//     } else {
//         return n + sumaRecursiva(n - 1);
//     }
// }


//Version Iterativo de Suma Recursiva:

 function calcularSumaIterativa(n) {
     var resultado = sumaIterativa(n);
     console.log("El Resultado Suma Iterativa es " + resultado);
 }

 function sumaIterativa(n) {
     if (n <= 0) {
         return 0;
     } else {
        return n + sumaIterativa(n - 1);
     }
 }

 var n = 3;
 calcularSumaIterativa(n);












// Pasar codigo Factorial Recursivo en funcion Iterativo.

// var res = factorialRecurcivo(3)
// console.log(res);

// function factorialRecurcivo(n){
//     if(n == 0){
//         return 1;
//     } else {
//         return n * factorialRecurcivo(n - 1);

//     }
// }



// Codigo Factorial Recursivo en version Iterativo:

 function calcularFactorialIterativo(n){
     var resultado = factorialIterativo(n);
     console.log("El Resultado Factorial Iterativo es " + resultado);
 }

 function factorialIterativo(n){
     if(n == 0){
         return 1;
     } else{
         return n * factorialIterativo(n - 1);
     }
 }
 var n = 3;
 calcularFactorialIterativo(n);














// Pasar Codigo a funcion Iterativo

// var res = fibonacci(3);
// console.log(res);

// function fibonacci(n){
//     if(n <=0){
//         return 0;
//     } else if (n == 1){
//         return 1;
//     }else{
//         return fibonacci( n - 1) + fibonacci(n - 2);
//     }
// }


//Codigo de Fibonacci en Version Iterativo:

function calcularFibonacci(n){
    var resultado = fibonacci(n);
    console.log("El Resultado fibonacci Iterativa es " + resultado)
}

function fibonacci(n){
    if(n <= 0){
        return 0;
    }else if (n == 1){
        return 1;
    } else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var n = 3;
calcularFibonacci(n);