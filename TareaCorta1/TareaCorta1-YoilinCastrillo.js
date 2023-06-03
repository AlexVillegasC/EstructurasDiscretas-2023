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
pacienteQueue.pacienteQueue(new Paciente("Carlos", 21));
pacienteQueue.pacienteQueue(new Paciente("Yoilin", 23));
pacienteQueue.pacienteQueue(new Paciente("Angelica", 38));
pacienteQueue.pacienteQueue(new Paciente("Deiler", 12));
pacienteQueue.pacienteQueue(new Paciente("Douglas", 26));

// Imprimiendo la cola de pacientes
console.log("Cola de pacientes:", pacienteQueue.queue);