# El Rincón del Libro

La tienda "El Rincón del Libro" vende libros usados y ha acumulado una gran cantidad de títulos a lo largo de los años.

En la tienda, los libros se almacenan en una estantería en orden aleatorio.

Cada libro tiene un identificador único (ID) y un título. Los empleados de la tienda tienen la tarea de buscar libros específicos para los clientes que los soliciten.

Dado que la tienda no tiene un sistema informático avanzado para llevar un registro de los libros, se les pide al Software Engineer de la empresa que diseñe una solución para encontrar un libro solicitado por un cliente.

La tarea consiste en encontrar el libro con el ID específico dentro de una lista de libros.

## Lista de libros

Aquí se encuentra la lista de libros que se encuentran en la tienda:

```javascript
const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
];