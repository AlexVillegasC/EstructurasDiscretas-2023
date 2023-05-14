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
  
    enqueue(patient) {
      if (patient.emergency) {
        this.queue.unshift(patient);
      } else {
        this.queue.push(patient);
      }
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    count() {
      return this.queue.length;
    }
  
    clean() {
      this.queue = [];
    }
  }
  
  // Creando una nueva cola de pacientes
  let patientQueue = new PatientQueue();
  
  // Añadiendo pacientes a la cola
  patientQueue.enqueue(new Patient("Juan", 30));
  patientQueue.enqueue(new Patient("María", 25));
  patientQueue.enqueue(new Patient("Pedro", 40));
  patientQueue.enqueue(new Patient("Luis", 50, true));
  
  // Atendiendo pacientes en orden de llegada
  console.log(patientQueue.dequeue().name); // Juan
  console.log(patientQueue.dequeue().name); // María
  
  // Agregando paciente crítico al frente de la cola
  patientQueue.enqueue(new Patient("Ana", 35, true));
  
  // Atendiendo pacientes en orden de llegada, incluyendo al paciente crítico primero
  console.log(patientQueue.dequeue().name); // Ana
  console.log(patientQueue.dequeue().name); // Pedro
  
  // Viendo cuántos pacientes quedan en la cola
  console.log(patientQueue.count()); // 0
  
  // Limpiando la cola al final del día
  patientQueue.clean();
  