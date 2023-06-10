// Subir este código a un Repositorio de su propia Autoria.
// Grabar un video educativo donde 
    //   Se explica linea por linea.
    //   Se usa el Debugger como herramienta principal.
    
// Compartir el video por un link (Youtube, Drive, etc).





// Explicar que son Variables (var, let, const,...)

// Explicar que son Conditional Structures. (If, Else If, Else, Switch)

// Explicar que son Loop Structures. (For, While, Do While)

// Explicar con claridad cada paso del siguiente algoritmo.

let altura = 5;
let arbol = '';

for(let i = 0; i < altura; i++) {
    // Genera espacios en blanco para el lado izquierdo del árbol
    let espacios = ' '.repeat(altura - i - 1);

    // Genera las ramas del árbol usando asteriscos
    let ramas = '*'.repeat(2 * i + 1);

    // Añade esta fila del árbol a la cadena de texto
    arbol += espacios + ramas + '\n';
}

// Genera el tronco del árbol
let tronco = ' '.repeat(altura - 1) + '|';

// Añade el tronco al árbol
arbol += tronco;

console.log(arbol);


// Explicar que hace el siguiente algoritmo.
function renombrar() {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

renombrar();


// Ejemplo de código utilizando if, else if y else.
let numero = 42;

if(numero > 0) {
    console.log("El numero es positivo");
} else if(numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}



//Ejemplo de código utilizando switch.
let dia = 2;
let diaSemana;

switch (dia) {
  case 1:
    diaSemana = "Lunes";
    break;
  case 2:
    diaSemana = "Martes";
    break;
  case 3:
    diaSemana = "Miércoles";
    break;
  case 4:
    diaSemana = "Jueves";
    break;
  case 5:
    diaSemana = "Viernes";
    break;
  case 6:
    diaSemana = "Sábado";
    break;
  case 7:
    diaSemana = "Domingo";
    break;
  default:
    diaSemana = "Día inválido";
    break;
}

console.log("El día seleccionado es: " + diaSemana);



//Ejemplo de código utilizando while.
console.log("Bucle 'while':");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


