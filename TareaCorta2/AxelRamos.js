//ejemplo del profe O(log N)

function logFunc(n, count =0 ){

    if (n  <= 1) return count;

    n = Math.floor(n / 2);
    return logFunc(n, count + 1);
}

var resultado = logFunc(8);
console.log(resultado);



let arregloordenado =["a" , "b" ,"c" , "d" , "e" ,"f", "g", "h" ];
let elementoBuscado = "g";
let resultado = BusquedaBinaria (arregloordenado , elementoBuscado);

if (resultado !== null){

    console.log("La Letra : "  +elementoBuscado +  "  Se encontro en la pocision : " + resultado );
} else{
    console.log("La Letra : "   + elementoBuscado +  " no se encontro el en la lista" +  arregloordenado );
}

    function BusquedaBinaria(arregloordenado, elementoBuscado){
        let inicio = 0 ;
        let fin = arregloordenado.length - 1;

    while (inicio <= fin){

    
    let medio = Math.floor((inicio+ fin)/2);


    if (arregloordenado[medio]=== elementoBuscado){
    return medio;

    }
    if (arregloordenado[medio]< elementoBuscado){
       inicio = medio + 1;
        }
        else{
            fin= medio  - 1;
        }
       

}
 return null;

}