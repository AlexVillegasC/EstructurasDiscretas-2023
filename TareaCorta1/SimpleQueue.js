// Para completar seguir el tutorial: https://www.youtube.com/watch?v=1VrO66bctCU

class Queue 
{
    constructor(){
        this.items = [];        
    }

    // Agrega un elemento a la cola
    enqueue(element)
    {        
        this.items.push(element);
    }

    // Elimina elementos de la cola.
    dequeue()
    {
        return this.items.shift();
    }

    // Mostrar el elemento al frente de la cola
    front()
    {
        if(this.isEmpty()){
            return "No elements in Queues"
        }
        return this.items[0];
    } 

    // Mostrar elements en la cola
    printQueue()
    {
        let elementsInQueue = "";
        for(let i = 0; i < this.items.length; i++)
    {
        elementsInQueue += this.items[i] + " ";
    }
        return this.items.length == 0;
    }
        
    // Muestra si la cola está vacía o no
    isEmpty(){
            return this.items.length == 0;
    }

    // Limpiar la cola.
    clear()
    {
            this.ite =[];
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