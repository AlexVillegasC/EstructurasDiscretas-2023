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