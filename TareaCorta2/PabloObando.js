//Ejemplo 1 0(Log N)

// function logFunc(n, count = 0);
// {
//      if(n <= 1)return count;

//      n = Math.floor(n / 2);
//      return logFunc(n, count + 1);

// }

// var resultado = logFunc(8);
// console.log(resultado);







//Ejemplo 2 O(Log N)
let arregloOrdenado = ['a','b','c','d','e','f','g','h','i','j','k']
let elementobuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementobuscado);

if(resultado !== null)
{
    console.log("La letra " + elementobuscado + " se encuentra en la posicion  " + resultado );
}else{
    console.log("La letra "+ elementobuscado + "no se encuentra en la posicion  ");
}

function busquedaBinaria(arregloOrdenado, elementobuscado){
    let inicio = 0;
    let fin = arregloOrdenado.length - 1;

    while(inicio <= fin){
        let medio = Math.floor((inicio + fin) / 2);

        if(arregloOrdenado[medio] === elementobuscado){
            return medio;
        }

        if(arregloOrdenado[medio] < elementobuscado){
            inicio = medio + 1;
        }else{
            fin = medio -1;
        }
    }

    return null;
}





