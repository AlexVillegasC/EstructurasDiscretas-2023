const libros = [
<<<<<<< HEAD
  {id: 105, titulo: "El principito"},
  {id: 210, titulo: "Cien años de soledad"},
  {id: 304, titulo: "Don Quijote de la Mancha"},
  {id: 457, titulo: "1984"},
  {id: 501, titulo: "Un mundo feliz"},
  // ...
];

function buscarLibroPorId(libros, idSolicitado) {
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id === idSolicitado) {
      return libros[i].titulo;
    }
  }
  return "Lo siento, el libro solicitado no está disponible en la tienda.";
}

// Ejemplo de uso
const idBuscado = 457;
const resultado = buscarLibroPorId(libros, idBuscado);
console.log(resultado);  // Salida: "1984"
=======
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
  ];
  
  function buscarLibroPorId(libros, idSolicitado) {
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id === idSolicitado) {
        return libros[i].titulo;
      }
    }
    return "Lo siento, el libro solicitado no está disponible en la tienda.";
  }
  
  // Ejemplo de uso
  const idBuscado = 457;
  const resultado = buscarLibroPorId(libros, idBuscado);
  console.log(resultado);  // Salida: "1984"
  
>>>>>>> fa4d43b49a9034e1af020e7d81db0523ee7120b3
