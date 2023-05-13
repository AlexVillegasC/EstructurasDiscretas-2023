// Para completar seguir el tutorial: https://www.youtube.com/watch?v=1VrO66bctCU

class Queue 
{
    constructor(){
        this.items = [];        
    }

    // Agrega un elemento a la cola
    enqueue(element)
    {        
        
    }

    // Elimina elementos de la cola.
    dequeue()
    {
        
    }

    // Mostrar el elemento al frente de la cola
    front()
    {

    }

    // Mostrar elements en la cola
    printQueue()
    {

    }

    // Muestra si la cola está vacía o no
    isEmpty(){

    }

    // Limpiar la cola.
    clear()
    {

    }
}

// Crear una nueva cola.
let queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log(queue.printQueue()); // 1 2 3
console.log(queue.front()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2