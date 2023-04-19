const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
];

function BuscarLibro(libros, IdLibro) {
    for (let buscador = 0; buscador < libros.length; buscador++) {
      if (libros[buscador].id == IdLibro) {
        return libros[buscador].titulo;
      }
    }
    return "Lo sentimos pero el libro no fue encontrado.";
  }
  
  console.log(BuscarLibro(libros, 501));