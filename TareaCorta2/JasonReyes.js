//Ejemplo log(N)
/*function logFunc(n, count = 0){
    if(n <= 1) return count;

    n = Math.floor(n/2);
    return logFunc(n, count + 1);

    var resultado = logFunc(8);
    console.log(resultado);
}*/

//Ejemplo 2. Log(N)

/*let arregloOrdenado = ["a","b","c","d","f","g","h","i","j","k"];
let elemento = "j";




function busquedaBinaria(arregloOrdenado, elementoBuscado){
let inicio = 0;
let fin = arregloOrdenado.length - 1;

while (inicio <= fin){
    let medio = Math.floor((inicio + fin)/2);


      if(arregloOrdenado[medio] === elementoBuscado){
    return medio
    }

          if(arregloOrdenado[medio] < elementoBuscado){
            inicio = medio + 1;
            } else{
                fin = medio - 1;
            }


} return null;

if(resultado !== null){
    console.log("La letra"+ elementoBuscado + "se encuentra en la posicion:" + inicio)
}else{
    console.log("La letra"+ elementoBuscado + "no se encuentra en la lista:")
}

}*/

let arregloOrdenado = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k"];
let elemento = "j";

let resultado = busquedaBinaria(arregloOrdenado, elemento);

if (resultado !== null) {
  console.log("La letra " + elemento + " se encuentra en la posición: " + resultado);
} else {
  console.log("La letra " + elemento + " no se encuentra en la lista.");
}


function busquedaBinaria(arregloOrdenado, elementoBuscado) {
  let inicio = 0;
  let fin = arregloOrdenado.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

        if (arregloOrdenado[medio] === elementoBuscado) {
         return medio;

            } else if (arregloOrdenado[medio] < elementoBuscado) {
             inicio = medio + 1;
              } else {
               fin = medio - 1;
              }
  }
  return null;
}


