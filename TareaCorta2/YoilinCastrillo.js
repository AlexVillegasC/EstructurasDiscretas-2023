// Ejemplo 1 O(Log N)
function logFunc (n, count = 0)
{
  if (n <= 1) return count;

    n = Math.floor(n/2);
    return logFunc(n, count + 1);

}
var resultado = logFunc(8);
console.log(resultado);