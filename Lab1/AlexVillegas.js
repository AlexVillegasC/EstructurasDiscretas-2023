// Lab 1 - Determinar la complejidad espacio/ tiempo de:  HOla Lab2

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

















// S =  1 +  2  + 3      + ... +(n-1) + n
// S =  n + (n-1) + (n-2) + ... +2  + 1
// ----------------------------------
// 2S = (n+1) + (n+1) + (n+1) ...

// 2s = n(n+1)