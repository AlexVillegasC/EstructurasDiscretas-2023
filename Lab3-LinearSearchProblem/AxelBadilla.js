const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
];

function linearSearch(titulo, ID) {
    for (let titulo = 0; titulo < ID.lenght; titulo++) {
        if (arreglo[titulo] === ID) {
            return titulo;
        }
    }
    return titulo;
}

let myArray = [105,210,304,457,501];
console.log("El libro es: "+linearSearch(myArray, 304));

// function buscarLibroPorId(libros, idSolicitado) {
//     for () {
//         if () {
//             // Retornar el Nombre del Libro.
//         }
//     }
//     // Retornar un Mensaje que dice: "Lo siento, el libro solicitado no está disponible en la tienda.";
// }