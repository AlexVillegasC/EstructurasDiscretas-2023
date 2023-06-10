let arregloOrdenado = ['a','b','c','d','e','f','g','h','i','j','k'];
let elementoBuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

if (resultado !== null){
    console.log("El numero " + elementoBuscado + " se encuentra en la");
} else{
    console.log("El numero "+ elementoBuscado + "no se encuentra");
}

function busquedaBinaria(arregloOrdenado, elementoBuscado){
    let inicio = 0;
    let fin= arregloOrdenado.length - 1;
    
    while (inicio <= fin){
        let medio = Math.floor((inicio + fin) / 2 );

        if (arregloOrdenado[medio] === elementoBuscado){
            return medio;
        }

        if (arregloOrdenado[medio] < elementoBuscado){
            inicio = medio + 1;
        }
        else{
            fin = medio - 1;
        }
    }
    return null;
}