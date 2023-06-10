//recursiva

var res = sumaRecursiva(3);
console.log(res);

function sumaRecursiva(n){

    if (n <= 0){

        return 0;
        
     } else {
        

        return n + sumaRecursiva(n - 1 );

       
    }
}

// funcion iterativa

function sumaIterativa(n) {

    let restultado = 0 ;

    for (let i = n ; i >= 1; i--){

        restultado += i ;
    }
    return restultado ;
}

const res = suma(3);
console.log(res);

//Ejemplo 2

function factorialIterativo(n) {
    let resultado = 1;
  
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  const res = factorialIterativo(5);
  console.log(res);


  // fibonaccio
  var res = fibonacci (3);
  console.log(res);

  function fibonacci (n){

    if (n <= 0 ){

        return 0;

        } else if (n === 1){

            return 1;
        }else {


            return fibonacci (n - 1 ) + fibonacci (n - 2);
        }
  }


    // fibonaccio iterativa 
  function fibonacciIterati(n) {
  let fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

const res = fibonacciIterati(3);
console.log(res);
