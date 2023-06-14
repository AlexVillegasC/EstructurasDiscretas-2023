/*
function logFunc(n, count = 0)
{
if (n <= 1) return count; 
n = Math.floor (n / 2);
return logFunc(n , count +1);

}

var resultado = logFunc(8);
console.leg(resultado);
*/

let arregloOrdenado  = [ 'a', 'b', 'c', 'd', 'g', 'h ', 'i', 'j', 'k'];
let elementobuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementobuscado);

if (resultado !== null){
   console.log ("El número " + elementobuscado + " se encuentra en  la posición " + resultado);
} else {
     console.log("El número " + elementobuscado + " no se encuentra en la lista" + arregloOrdenado);
}

function busquedaBinaria(arregloOrdenado, elementobuscado) {
    let inicio = 0;
    let fin = arregloOrdenado.length - 1;

    while(inicio <= fin ){
        let medio = Math.floor((inicio + fin) / 2);

        if(arregloOrdenado[medio] === elementobuscado){
        return medio;
     }   

        if(arregloOrdenado[medio] < elementobuscado){
     inicio = medio + 1;
        } else {
     fin = medio - 1;
        }

    }
    return null;
}