/* Ejmplo 1 O(Log N)
function LogFunc(n, count = 0) 
{
    if(n <= 1) return count;

    n = Math.floor(n / 2);
    return LogFunc(n, count + 1);
}

var resultado = LogFunc(1000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(resultado);
*/
let arregloOrdenado = ["a","b","c","d","e","f","j","h","i"];
let elementoBuscado = "j";
let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

if(resultado !== null){
    console.log("El numero " + elementoBuscado + "se encuentra en la posición  " + resultado);
}else{
    console.log("El número " + elementoBuscado + "no se encuentra en la lista " );
}
 
function busquedaBinaria(arregloOrdenado, elementoBuscado){
    let inicio = 0;
    let fin = arregloOrdenado.length - 1;

    while (inicio <= fin){
        var medio = Math.floor((inicio + fin ) / 2);
        
        if (arregloOrdenado[medio] === elementoBuscado){
            return medio;
        }

        if(arregloOrdenado[medio] < elementoBuscado){
            inicio = medio + 1;
        }else{
            fin = medio - 1;
        }
    }
    return null;
}

