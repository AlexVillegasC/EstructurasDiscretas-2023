class Patient {
    constructor(nombre, edad, emergencia = false) {
      this.nombre= nombre;
      this.edad= edad;
      this.emergencia = emergencia;
    }
  }
  
  class PatientQueue {
    constructor() {
      this.queue = [];
    }
  
    // Registro de Pacientes
    enqueue(paciente) {
      if (paciente.emergencia) {
        // Si es una emergencia crítica, añadir al frente de la cola
        this.queue.unshift(paciente);
      } else {
        // De lo contrario, añadir al final de la cola
        this.queue.push(paciente);
      }
    }
  
    // Atención de Pacientes
    dequeue() {
      if (this.queue.length === 0) {
        // Si no hay pacientes en la cola, retornar null
        return null;
      }
      // Remover y retornar el paciente al frente de la cola (FIFO)
      return this.queue.shift();
    }
  
    // Conteo de Pacientes
    count() {
      return this.queue.length;
    }
  
    // Limpieza de la Cola
    clear() {
      // Vaciar la cola eliminando todos los pacientes
      this.queue = [];
    }
  }
  
  // Creando una nueva cola de pacientes
  let patientQueue = new PatientQueue();
  
  // Añadiendo pacientes a la cola
  patientQueue.enqueue(new Patient("Juan", 30));
  