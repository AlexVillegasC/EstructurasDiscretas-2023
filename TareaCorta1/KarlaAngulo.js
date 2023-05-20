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
  
    //Registro
    enqueue(patient) {
      if (patient.emergency) {// Inserta al frente de la cola si es emergencia
        this.queue.unshift(patient);
      } else {
        this.queue.push(patient);// Inserta al final de la cola al no cumplirse que sea emergencia
      }
    }
  
    //Atención
    dequeue() {
      if (this.queue.length === 0) {
        return "Esta vacia"; // Si la cola está vacía
      }
      return this.queue.shift(); //Remueve y retorna el paciente que está al frente de la cola
    }
  
    //Conteo
    count() {
      return this.queue.length;
    }
  
    //Limpieza de la Cola
    clear() {
      this.queue = [];
    }
  }

  let patientQueue = new PatientQueue();
  
  //Añadiendo pacientes a la cola
  patientQueue.enqueue(new Patient("Juan", 30));
  patientQueue.enqueue(new Patient("Karina", 42));
  patientQueue.enqueue(new Patient("Camilo", 65, true));
  patientQueue.enqueue(new Patient("Zoe", 22));
  
  console.log("Número de pacientes al incio:", patientQueue.count());

  let NextAttention = patientQueue.dequeue();
  console.log("Paciente atendido:", NextAttention.name);
  
  console.log("Número de pacientes en cola después de la atención:", patientQueue.count());

  patientQueue.clear();
  console.log("Número de pacientes después de la limpieza:", patientQueue.count());