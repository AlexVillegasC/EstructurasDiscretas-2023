// var res = sumaRecursiva(3);
// console.log(res);

// function sumaRecursiva(n){
//     if(n <=0){
//         return 0;
//     } else {
//     return n + sumaRecursiva(n-1);
//     } 
// }

function sumaIterativa(n) {
    let suma = 0;
    for (let i = n; i >= 1; i--) {
      suma += i;
    }
    return suma;
  }
  
  var res = sumaIterativa(3);
  console.log(res);
  
// var res = factorialRecursivo(3);
// console.log(res);

// function factorialRecursivo(n) {
//     if(n===0){
//         return 1;
//     } else {
//         return n * factorialRecursivo(n-1);
//     }
// }

function factorialIterativo(n){
    let fact=1;
    for(let i = 1; i <= n ; i++ ){
        fact *= i;
    }
    return fact
}

var res = factorialIterativo(3);
console.log(res);
                                                       
// var res = fibonacci(3);
// console.log(res);                                         

// function fibonacci(n){                                    
//     if(n <= 0){                                            
//       return 0;                                        
//     } else if (n === 1){                                 
//          return 1;                                        
//     } else {                                               
//         return fibonacci(n - 1) + fibonacci(n - 2);                                                           // }
//      }
// }  
       
function fibonacciIterativo(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let fibMin2 = 0;
    let fibMin1 = 1;
    let fib;
  
    for (let i = 2; i <= n; i++) {
      fib = fibMin1 + fibMin2;
      fibMin2 = fibMin1;
      fibMin1 = fib;
    }
  
    return fib;
  }
  
  var res = fibonacciIterativo(3);
  console.log(res);
      
       
    
        
                                                                   




  