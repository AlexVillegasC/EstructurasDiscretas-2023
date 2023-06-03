class Paciente {

    constructor (nombre, edad, emergencia = false) 
    {
        this.nombre = nombre;
        this.edad = edad;
        this.emergencia = emergencia;
    }
}

class PacienteQueue {
    constructor() 
    {
      this.queue = [];
    }

    // REGISTRO DE PACIENTES
    pacienteQueue(Paciente) 
    {
       this.queue.push(Paciente);
    }

    // ATENCION DE CLIENTES

    /* Opcional
    dequeue()
    {
      return this.items.shift();
    }
    */

    front () 
    {
      if(this.isEmpty()) {
        return "No hay pacientes en lista"
      }

      return this.queue[0];
    }


    // CONTEO DE PACIENTES
    isEmpty ()
    {
       return this.items.length == 0;
    }

    // LIMPIEZA DE LISTA DE PACIENTES
    clear()
    {
        this.items = [];
    }
  }

  // Creando una nueva cola de pacientes
let pacienteQueue = new PacienteQueue();

// Añadiendo pacientes a la cola
pacienteQueue.pacienteQueue(new Paciente("Emmanuel", 21));
pacienteQueue.pacienteQueue(new Paciente("Sofia", 23));
pacienteQueue.pacienteQueue(new Paciente("Jimena", 38));
pacienteQueue.pacienteQueue(new Paciente("Luis", 12));
pacienteQueue.pacienteQueue(new Paciente("Alberto", 26));

// Imprimiendo la cola de pacientes
console.log("Cola de pacientes:", pacienteQueue.queue);