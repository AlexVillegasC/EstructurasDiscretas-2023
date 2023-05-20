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
      if (this.queue.length === 0) {
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
  }
  
 
  let pacienteQueue = new PacienteQueue();
  
  
  pacienteQueue.enqueue(new Paciente("Sofia", 19, true)); 
  pacienteQueue.enqueue(new Paciente("Jimena", 23));
  pacienteQueue.enqueue(new Paciente("Luis", 22));
  pacienteQueue.enqueue(new Paciente("Olga", 53));
  pacienteQueue.enqueue(new Paciente("Maria", 10));

console.log("Numero de pacientes al inicio:", pacienteQueue.count());
  
  let nextPaciente = pacienteQueue.dequeue();
  console.log("Paciente atendido:", nextPaciente);
  
 
  let pacienteCount = pacienteQueue.count();
  console.log("Cantidad de pacientes:", pacienteCount);
  
 
  pacienteQueue.clear();
  pacienteCount = pacienteQueue.count();
  console.log("Cantidad de pacientes en la cola después de atenderlos:", pacienteCount);
  