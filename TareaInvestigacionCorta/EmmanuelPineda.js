/*function sumaIterativa(n){
    let suma = 0;
    while (n > 0){
        suma += n;
        n --;
    }
    
    return suma;
    }
    
    var res = sumaIterativa(3);
    console.log(res);   // resultado es igual a 6 */







/*function fibonacciInteractivo(n)
{
    let fib = [0,1];

    for(let i = 2; i <= n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
} */

function fibionacciIterativo(n) {
    if (n <= 0){
        return 0;
    } else if (n=== 1){
        return 1;
    } else { 
        let fibPrev = 0;
        let fibCurr = 1;
        let fibNext = 0;

        for (let i = 2; i<= n; i++){
            fibNext = fibPrev + fibCurr;
            fibPrev = fibCurr;
            fibCurr = fibNext;

        }

        return fibNext;
    }
}

var res = fibionacciIterativo(3);
console.log(res); //el resultado es igual a 2