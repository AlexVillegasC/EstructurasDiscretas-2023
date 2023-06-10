/*
function logFunc(n, count = 0)
{
if (n <= 1) return count; 
n = Math.floor (n / 2);
return logFunc(n , count +1); hola....

}

var resultado = logFunc(8);
console.leg(resultado);

*/
let arregloOrdenado  = [ 'a', 'b', 'c', 'd', 'g', 'h', 'i', 'j', 'k '];
let elementoBuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

if (resultado !== null){
   console.log ("El número " + elementoBuscado + " se encuentre en la posición " + resultado);
} else {
     console.log("El número " + elementoBuscado + " no se encuentra en la lista " + arregloOrdenado);
}

function busquedaBinaria (arregloOrdenado, elementoBuscado){
let inicio  = 0;
let fin = arregloOrdenado.length - 1; 
 while (inicio <= fin){
 let medio = Math.floor((inicio + fin)/ 2 );

 if (arregloOrdenado[medio] === elementoBuscado){
    return medio;
 }
 if (arregloOrdenado[medio] < elementoBuscado){
    inicio = medio + 1 ;
 }  else {
    fin = medio - 1;
 }


 }
return null;

}