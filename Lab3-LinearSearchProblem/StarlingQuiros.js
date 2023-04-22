let listaLibros = [
    { id: 1, titulo: "El gran Gatsby" },
    { id: 2, titulo: "Cien años de soledad" },
    { id: 3, titulo: "Matar a un ruiseñor" },
    //...
  ];
  
  let libroBuscado = buscarLibroPorId(listaLibros,2 ); 
  console.log(libroBuscado); 

  function buscarLibroPorId(listaLibros, idBuscado) {
    for (let i = 0; i < listaLibros.length; i++) {
      if (listaLibros[i].id === idBuscado) {
        return listaLibros[i];
      }
    }
    return "No se encontro el libro"; 
  }