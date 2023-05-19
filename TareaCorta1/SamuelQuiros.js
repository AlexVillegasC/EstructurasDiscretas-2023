class Paciente {
    constructor(nombre, edad, emergencia = false) {
      this.nombre = nombre;
      this.edad = edad;
      this.emergencia = emergencia;
    }
  }
  
  class PacienteQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(paciente) {
      if (paciente.emergencia) {
        this.queue.unshift(paciente);
      } else {
        this.queue.push(paciente);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.queue.shift(); 
    }
  
    count() {
      return this.queue.length; 
    }
  
    clear() {
      this.queue = []; 
    }
  
    isEmpty() {
      return this.queue.length === 0; 
    }
  }
  
  let pacienteQueue = new PacienteQueue();
  
  pacienteQueue.enqueue(new Paciente("Juan", 30));
  pacienteQueue.enqueue(new Paciente("María", 45, true));
  
  const SiguientePaciente = pacienteQueue.dequeue();
  console.log(SiguientePaciente);
  
  const TotalPacientes = pacienteQueue.count();
  console.log(TotalPacientes); 
  
  pacienteQueue.clear();
  const isEmpty = pacienteQueue.isEmpty();
  console.log(isEmpty); 