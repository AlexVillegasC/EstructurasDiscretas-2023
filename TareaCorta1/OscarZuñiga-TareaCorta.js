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
  
    // Registro de Pacientes
    enqueue(patient) {
      if (patient.emergency) {
        this.queue.unshift(patient); // Añade al frente de la cola en caso de emergencia crítica
      } else {
        this.queue.push(patient); // Añade al final de la cola para pacientes regulares
      }
    }
  
    // Atención de Pacientes
    dequeue() {
      if (this.queue.length === 0) {
        return null; // Retorna null si no hay pacientes en la cola
      }
      return this.queue.shift(); // Remueve y retorna el paciente al frente de la cola
    }
  
    // Conteo de Pacientes
    count() {
      return this.queue.length; // Retorna la cantidad de pacientes en la cola
    }
  
    // Limpieza de la Cola
    clear() {
      this.queue = []; // Elimina todos los pacientes de la cola
    }
  }
  
  // Ejemplo de uso
  let patientQueue = new PatientQueue();
  
  patientQueue.enqueue(new Patient("Juan", 30));
  patientQueue.enqueue(new Patient("María", 45));
  patientQueue.enqueue(new Patient("Pedro", 50, true));
  
  console.log(patientQueue.count()); // Resultado: 3
  
  let nextPatient = patientQueue.dequeue();
  console.log(nextPatient); // Resultado: Patient { name: "Pedro", age: 50, emergency: true }
  
  console.log(patientQueue.count()); // Resultado: 2
  
  patientQueue.clear();
  console.log(patientQueue.count()); // Resultado: 0
  
  