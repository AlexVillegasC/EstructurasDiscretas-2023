const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
];

 function buscarLibroPorId(libros, idSolicitado) { 
     for ( indice = 0 ; indice < libros.length; indice++) {
        if (libros[indice].id === idSolicitado) {
            return libros[indice].titulo;
        }
     }
     return "no encontrado";
    
    }
    console.log(buscarLibroPorId(libros, 210));