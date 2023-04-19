const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
  ];
  
  function buscarLibro(idBuscado, libros) {
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id === idBuscado) {
        return libros[i];
      }
    }
    return "El libro no está disponible en la tienda";
  }
  
  // Ejemplo de uso
  const libroBuscado = buscarLibro(304, libros);
  console.log(libroBuscado.titulo); // {id: 457, titulo: "1984"}
