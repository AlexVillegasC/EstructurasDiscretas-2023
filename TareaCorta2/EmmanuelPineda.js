//Ejemplo 1 O(Log N)
/*function logFunc(n, count = 0)
{
    if(n <= 1) return count;

    n = Math.floor(n / 2);
    return logFunc(n, count + 1);
}

var resultado = logFunc(8);
console.log(resultado);
*/

//La funcion logFunc tiene argumentos de N y count
//La primera linea logFunc representa si N es menor o igual a 1, de ser asi devuelve el valor actual de count
//Si N es mayor que 1 se ejecuta mediante Math.floor para obtener la mitad entera del numero





// Ejemplo 2 O(Log N)
let arregloOrdenado = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k'];
let elementoBuscado = 'j';
let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

if (resultado !== null) {
    console.log("La letra " + elementoBuscado + " se encuentra en la posicion" + resultado)
} else {
    console.log("La letra " + elementoBuscado + " no se encuentra en  la posicion" + arregloOrdenado)
}



function busquedaBinaria(arregloOrdenado, elementoBuscado) {
    let inicio = 0;
    let fin = arregloOrdenado.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (arregloOrdenado[medio] === elementoBuscado) {
            return medio;
        }

        if (arregloOrdenado[medio] < elementoBuscado) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return null;
}