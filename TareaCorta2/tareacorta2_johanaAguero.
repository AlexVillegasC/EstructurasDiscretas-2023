//Ejemplo1
function logFunc(n, count = 0)
{
    if(n <= 1) return count;

    n = Math.floor(n / 2);
    return logFunc(n, count + 1);
    }

    var resultado = logFunc(8);
    console.log(resultado);

//Ejemplo 2 0(Log N)
let arregloOrdenado = ['a','b','c','d','f','g','h','i','j','k'];
let elementoBusqueda = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementoBusqueda);

if (resultado !== null){
    console.log(" El número"  + elementoBusqueda + " se encuentra en la pu")
}else{
    console.log("El numero " + elementoBusqueda + " no se encuentra en la ")
}


//Ejemplo 3
function busquedaBinaria(arregloOrdenado, elementoBusqueda) {
    let inicio = 0;
    let fin = arregloOrdenado.lengt - 1;

    while (inicio <= fin) {
        let medio = Math.floot((inicio + fin) / 2); 

        if (arregloOrdenado[medio] === elementoBusqueda){
            return medio;
        }
        if (arregloOrdenado[medio] < elementoBusqueda) {
            inicio = medio + 1;
        } else { 
                    fin = medio - 1;
        }  
    }

    return null;
}
