/* ejemplo 1 o(log N)
function logFunc(n, count = 0)
{
    if(n <= 1) return count;

    n = Math.floor(n / 2);
    return logFunc(n, count +1);
}

var resultado = logFunc(8);
console.log(resultado);
*/

// otro ejemplo 2 o(log N)
let arregloOrdenado = ['a','b','c','d','f','g','h','i','j','k'];
let elementoBuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

if ( resultado !==null) {
    console.log("el numero  " +    elementoBuscado   + "  se encuentra en la posicion  " + resultado);
} else {
    console.log("el numero   " + elementoBuscado + "no se encunetra en la lista");
}


function busquedaBinaria(arregloOrdenado, elementoBuscado){
    let inicio = 0;
    let fin = arregloOrdenado.length -1;
    while(inicio<= fin){
        var medio = Math.floor((inicio+fin)/2);
        if(arregloOrdenado[medio] === elementoBuscado){
            return medio;
        }
        if(arregloOrdenado[medio] < elementoBuscado){
            inicio = medio +1;
        }else{
            fin = medio -1;
        }
    }
    return null;
}











