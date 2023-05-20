// Subir este código a un Repositorio de su propia Autoria.
// Grabar un video educativo donde 
    //   Se explica linea por linea.
    //   Se usa el Debugger como herramienta principal.
// Compartir el video por un link (Youtube, Drive, etc).





// Crear una función a la que le pasamos como parametro un Array en Orden Ascendente:
// Explicar con claridad cada paso.

const array = [1, 2, 3, 4, 5];

console.log("Original array:", array);

const reversedArray = reverseArray(array);

console.log("Reversed array:", reversedArray);

function reverseArray(array) {
    return 0;
}





// Crear una función de Busqueda Lineal como la vista en clases.

// Explicar con claridad cada paso de esta función.

const libros = [
    { id: 105, titulo: "El principito" },
    { id: 210, titulo: "Cien años de soledad" },
    { id: 304, titulo: "Don Quijote de la Mancha" },
    { id: 457, titulo: "1984" },
    { id: 501, titulo: "Un mundo feliz" },
];

function BuscarLibro(libros, IdLibro) {
    for (let indice = 0; indice < libros.length; indice++) {
        if (libros[indice].id == IdLibro) {
            return libros[indice].titulo;
        }
    }
    return "Lo sentimos pero el libro no fue encontrado.";
}

console.log(BuscarLibro(libros, 501));