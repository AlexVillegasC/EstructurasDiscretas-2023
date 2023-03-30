// Lab 1 - Determinar la complejidad espacio/ tiempo de:

function SumarNumerosDesdeCero(n) //La complejidad espacio/tiempo es O(n)
{
    let counter = 0;
    for(let i = 0; i <= n; i++)
    {
        counter = counter + i;
    }

    return counter;
}

console.log(SumarNumerosDesdeCero(100));
///////////////////////////////////////////////////////////////


function SumaGaussiana(n) //La complejidad espacio/tiempo es O(1)
{ 
    return (n * (n + 1)) / 2;
}

console.log(SumaGaussiana(100));

