 var count = 0;

      for (let i = 1; i <= 10; i++) {
          if (i % 2 === 0) {
              count++;
          }
      }
  
  
  
  
  console.log("cantidad numeros pares: " + count );

  var res = factorialRecursivo(3);
  console.log(res);
  function factorialRecursivo(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorialRecursivo(n-1);
    }
  }