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
       return this.items[0];
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