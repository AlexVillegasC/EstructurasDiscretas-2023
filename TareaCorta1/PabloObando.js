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
        if(this.isEmpty()){
        return "Underflow";
        }

        return this.items.shift();
    }

    // Mostrar el elemento al frente de la cola
    front()
    {
        if(this.isEmpty()){
        return "No elements in Queue";
        }

         return this.items[0];
    }

    // Mostrar elements en la cola
    printQueue()
    {
      let elementsInQueue = "";
      for(let i = 0; i < this.items.length; i++)
      {
        elementsInQueue += this.items[i] + "";
      }
      return elementsInQueue
    }

    // Muestra si la cola está vacía o no
    isEmpty(){
         return this.items.length ==0;
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

queue.enqueue("7");
queue.enqueue("8");
queue.enqueue("9");

console.log(queue.printQueue()); //  7 8 9
console.log(queue.front()); //  7
console.log(queue.dequeue()); // 7
console.log(queue.front()); // 8