

const readline = require('readline');

let listaLibros = [
    { id: 1, titulo: "El Gran Gatsby" },
    { id: 2, titulo: "Matar a un ruiseñor" },
    { id: 3, titulo: "Cien años de soledad" },
    { id: 4, titulo: "1984" },
    { id: 5, titulo: "Don Quijote de la Mancha" }
];

function buscarLibroPorId(lista, idBuscado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idBuscado) {
            return lista[i].titulo;
        }
    }
    return "El libro con ID " + idBuscado + " no se encuentra en la tienda.";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número del libro que desea buscar: ", function(idBuscado) {
    let tituloLibro = buscarLibroPorId(listaLibros, parseInt(idBuscado));
    console.log(tituloLibro);
    rl.close();
});




