/**
 * Linear Search:
 * Complejidad Temporal -> o(n).
 * 
 * Complejidad Espacial 0(1).
 */
const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
];

// function buscarLibroPorId(libros, idSolicitado) {
//     for () {
//         if () {
//             // Retornar el Nombre del Libro.
//         }
//     }
//     // Retornar un Mensaje que dice: "Lo siento, el libro solicitado no está disponible en la tienda.";
// }

// Ejemplo de uso
const idBuscado = 457;
const resultado = buscarLibroPorId(libros, idBuscado);
console.log(resultado);  // Salida: "1984"