var res =sumaRecursividad(3);//
console.log(res);


function sumaRecursiva(n){
     if (n<0){
        return 0;
     } else {
        return n + sumaRecursiva(n-1);
     }
}

////////////////////////////////////////////////////////////
function SumarNumerosDesdeCero(n)
{
    let counter = 0;
    for(let i = 0; i <= n; i++)
    {
        counter = counter + i;
    }

    return counter;
}

console.log(SumarNumerosDesdeCero(100));

function SumaGaussiana(n) {
    return (n * (n + 1)) / 2;
}

console.log(SumaGaussiana(100));

function SumaGaussiana(n) // es O(1)
{ 
    return (n * (n + 1)) / 2;
}

console.log(SumaGaussiana(100));

//////////////////////////////////////////////////////////////
var res = factorialRecusivo(3);
console.log(res);

function factorialRecusivo(n){
    if (n ==0){
       return 1;
      } else {
return n * factorialRecusivo(n-1);
      }
}
//////////////////////////////////////////////////////////////////
function factorialIterativo(n) {
let resultado = 1;
                   
for (let i = 1; i <= n; i++) {
  resultado *= i;
}
                   
return resultado;
}
                 
var res = factorialIterativo(3);
console.log(res);
//////////////////////////////////////////////////////////////////
var res = fibonacci(3);
console.log(res);

function fibonacci(n){
    if (n<= 9) {
     return 0;
    } else if (n ===1){
     return 1;
    } else{
       return fibonacci (n-1) + fibonacci (n -2);

    }
}

///////////////////////////////////////
function fibonacciIterativo(n) {
if (n <= 0) {
  return 0;
} else if (n === 1) {
  return 1;
} else {
  let fiboPrev = 0;
  let fiboCurr = 1;
  let fiboNext;
                 
  for (let i = 2; i <= n; i++) {
    fiboNext = fiboPrev + fiboCurr;
    fiboPrev = fiboCurr;
    fiboCurr = fiboNext;
  }

  return fiboCurr;
}
}
                 
var res = fibonacciIterativo(9);
console.log(res);
/////////////////////