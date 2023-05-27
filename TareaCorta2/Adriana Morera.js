// function ligFunc(n, count = 0)
// {
//   if (n <= 1) return count;
//    n = Math.floor(n / 2);
//    return logFunc (n, count + 1 );
// }

// var resultado = logFunc (8);
// console.log(resultado);sDDDD

let arregloOrenado  = [ 'a', 'b', 'c', 'd', 'g', 'h', 'i', 'j', 'k '];
let elementoBusacdo = 'j';
let resultado = busquedaBinaria(arregloOrenado, elementoBusacdo);

if (resultado !== null){
   console.log ("El número " + elementoBusacdo + "se encuentre en  la posicioón " + resultado);
} else { console.log("El número " + elementoBusacdo + " no se encuentra en la lista " + arregloOrenado);

}

function busquedaBinaria (arregloOrdenado, elementoBuscado){
 let inicio  = 0 
 let fin = arregloOrdenado.length - 1; 
  while (inicio <= fin){

let medio = Math.floor((inicio + fin)/ 2 );
                   
if (arregloOrdenado[medio] === elementoBuscado){
return medio;
}
if (arregloOrdenado[medio]  < elementoBuscado){
inicio = medio + 1;
}  else {
fin = medio - 1;
}
                   
                   
 }
return null;
                   
 }