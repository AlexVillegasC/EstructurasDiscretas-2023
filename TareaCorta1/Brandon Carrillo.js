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

  // Agrega un paciente a la cola
  addPatient(patient) {  
    if (patient.emergency === true) {
      this.queue.unshift(patient);
    } else {
      this.queue.push(patient);  
    }    
  }

  // Elimina el paciente atendido
  deletePatient() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.queue.shift();  
  }

  // Mostrar el primer paciente de la cola 
  showFirstPatient() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.queue[0];
  }

  // Mostrar el numero de pacientes en la cola
  printListPatients() {
    let elementsInQueue = "";
    for (let i = 0; i < this.queue.length; i++) {
      elementsInQueue += this.queue[i].name + " ";
    }
    return elementsInQueue;
  }

  // Muestra si la cola está vacía o no
  isEmpty() {
    return this.queue.length == 0;
  }

  // Limpia la cola de pacientes al final del dia. 
  clearListPatients() 
  {
    this.queue = [];
    return "Se limpio exitosamente la Lista"
  }
}

// Creando una nueva cola de pacientes
let patientQueue = new PatientQueue();

// Muestra si la cola esta vacia o no
console.log(patientQueue.isEmpty());

// Añadiendo pacientes a la cola
patientQueue.addPatient(new Patient("Juan", 30));
patientQueue.addPatient(new Patient("Maria", 40));
patientQueue.addPatient(new Patient("Carlos", 60));
patientQueue.addPatient(new Patient("Sofia", 10, emergency = true));
patientQueue.addPatient(new Patient("Hermer Enrique", 20));

// Mostrar la lista de pacientes
console.log(patientQueue.printListPatients()); //Debe mostrar primero a Sofia porque esta en emergencia

// Contar cuantos Pacientes hay en la lista
console.log("La lista tiene " + patientQueue.queue.length + " pacientes "); //Debe haber 5 elementos en la lista

// Remueve y retorna el paciente que esta de primero en la cola 
console.log(patientQueue.deletePatient()); // Debe mostrar a Sofia y removerla

// Muestra el nuevo primero elemento de la lista 
console.log(patientQueue.showFirstPatient()); // Debe mostrar a Juan porque seria el nuevo primer elemento

// Elimina la cola de pacientes al final del dia
console.log(patientQueue.clearListPatients()); // Debe decir que la Lista se limpio exitosamennte :)
