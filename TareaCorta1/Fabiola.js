class Patient {
    constructor(name, age, emergency = false) {
      this.name = name;
      this.age = age;
      this.emergency = emergency;
    }
  }
  
  class PatientQueue {
    constructor() {
      this.queue = [];
    }
  
    // Agregar paciente a la cola
    enqueue(patient) {
      if (patient.emergency) {
        this.queue.unshift(patient);
      } else {
        this.queue.push(patient);
      }
    }
  
    // Eliminar el siguiente paciente de la cola y devolverlo
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.queue.shift();
    }
  
    // Mostrar el paciente al frente de la cola
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.queue[0];
    }
  
    // Mostrar elementos en la cola
    printQueue() {
      let elementsInQueue = "";
      for (let i = 0; i < this.queue.length; i++) {
        elementsInQueue += this.queue[i].name + ", ";
      }
      return elementsInQueue.slice(0, -2);
    }
  
    // Mostrar el número de pacientes en la cola
    count() {
      return this.queue.length;
    }
  
    // Verificar si la cola está vacía
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Limpiar cola
    clear() {
      this.queue = [];
    }
  }
  
  // Creando una nueva cola de pacientes
  let patientQueue = new PatientQueue();
  
  // Registrando pacientes en la cola
  patientQueue.enqueue(new Patient("Juan", 30));
  patientQueue.enqueue(new Patient("Pedro", 25));
  patientQueue.enqueue(new Patient("María", 40, true));
  
  // Atendiendo pacientes de la cola
  console.log("Paciente al frente de la cola: " + patientQueue.front().name);
  console.log("Atendiendo paciente: " + patientQueue.dequeue().name);
  console.log("Atendiendo paciente: " + patientQueue.dequeue().name);
  
  // Mostrando el número de pacientes restantes en la cola
  console.log("Número de pacientes restantes en la cola: " + patientQueue.count());
  
  //   // Limpiando la cola
  //   patientQueue.clear();
  //   console.log("Número de pacientes restantes en la cola después de limpiarla: " + patientQueue.count());
  
