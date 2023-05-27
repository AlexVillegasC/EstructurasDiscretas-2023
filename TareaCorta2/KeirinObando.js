//function logFunc(n, count= 0){
/* if(n<=1) return count;
 n= Math.floor(n/2);
 return logFunc(n, count + 1);
}

var resultado= logFunc(8);
console.log(resultado);
*/


let arregloOrdenado = ['a','i','b','c','d','e','f','g','h','i','j','k'];
let elementoBuscado = 'j';
let resultado = busquedaBinaria( arregloOrdenado, elementoBuscado);

if (resultado !== null){
    console.log("El letra " + elementoBuscado + " se encuentra en la posición" +  resultado);
} else{ 
    console.log("El letra" + elementoBuscado + " no se encuentra en la lista")
}

function busquedaBinaria(arregloOrdenado, elementoBuscado)
{
    let inicio = 0;
    let fin = arregloOrdenado.length -1;

    while (inicio <= fin){
        let medio = Math.floor((inicio + fin)/2);
        
        if (arregloOrdenado[medio]=== elementoBuscado){
            return medio;
        }
        if (arregloOrdenado[medio] < elementoBuscado){
            inicio = medio + 1;
        } else{
            fin = medio - 1;
        }
    }
    return null;

}
 //var arregloOrdenado = ['a','i','b','c','d','e','f','g','h','i','j','k'];
 //console.log(elementoBuscado= 'j');
//busquedaBinaria.indexOf('j');