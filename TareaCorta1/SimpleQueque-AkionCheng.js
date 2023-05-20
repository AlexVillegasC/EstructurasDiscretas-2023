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
            if(this.isEmpty())
                return "underflow";
        return this.items.shift();
    }

    // Mostrar el elemento al frente de la cola
    front()
    {
        if(this.isEmpty())
        return "No elementos en la cola";
        return this.items[0];
    }

    // Mostrar elements en la cola
    printQueue()
    {
        let ElementsInQue = "";
        for(let i =0; i< this.items.length; i++){
            ElementsInQue += this.items[i]+ " ";
        }
        return ElementsInQue
    }

    // Muestra si la cola está vacía o no
    isEmpty(){
        return this.items.length == 0;
    }

    // Limpiar la cola.
    clear()
    {
        this.items = [];
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