
const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
];

function buscarLibroPorId(id) {
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id === id) {
        return libros[i];
      }
    }
    return null; // si no se encuentra el libro, la función devuelve null
  }

  
  const libroBuscado = buscarLibroPorId(304);
console.log(libroBuscado); // {id: 304, titulo: "Don Quijote de la Mancha"}



