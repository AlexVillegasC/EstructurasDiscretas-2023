//Ejemplo 1 O(Log N)
//function LogFunc(n)
//{
  //  if(n <= 1) return "Done";

    //n = Math.floor(n / 2);
    //return LogFunc(n);
//}

//var resultado = LogFunc(8);
//console.log(resultado);



// ejemplo 2 O(Log N)

let arregloOrdenado = ['a','b','c','d','e','f','g','h','i','j','k'];
 let elementoBuscado = 'j';
 let resultado = busquedaBinaria(arregloOrdenado, elementoBuscado);

    if (resultado !== null){
        console.log("El número" + elementoBuscado + " se encuentra en la posicion " + resultado);

    }
    else{
        console.log("El número "+ elementoBuscado + " no se encuentra en la lista ");

    }

    function busquedaBinaria( arregloOrdenado, elementoBuscado){
        let inicio=0;
        let fin = arregloOrdenado.length - 1;

        while (inicio <= fin){
            var medio = Math.floor((inicio + fin)/ 2);

            if (arregloOrdenado[medio] === elementoBuscado) {
                return medio;
            }

            if (arregloOrdenado [medio] < elementoBuscado) {
                inicio = medio + 1;

            }
            else{
                fin = medio -1;
            }

        }
        return null;
    }