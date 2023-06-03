class Patient {
    constructor(name, age, emergency = false) {
      this.name = name;
      this.age = age;
      this.emergency = emergency;
    }
  }
  
  class PatientQueue extends Queue {
    constructor() { 
      this.items = [];
    }
  //Agrega un elemebto a la cola;
    enqueue(patient) {
      if (patient.emergency) {
        this.items.unshift(patient);
      } else {
        this.items.push(patient);
      }
    }
  
    // Elimina elementos de la cola.
    dequeue(){
        if(this.isempty())
        return "underflow";
        
    return this.items.shift();
    
    }
// Muestra el frente de la cola
    front() {
      if (this.isEmpty()) {
        return "There are not patients";
      }
      return this.items[0];
    }

    // Mostrar elements en la cola
    printQueue(){
        let patientsinQueue = " ";
     for(let i = 0;i<this.items.length; i++)
    { 
        patientsinQueue += this.items[i] + "  ";
        return patientsinQueue;
    }
    }

    // Muestra si la cola está vacía o no
    isEmpty(){
      return this.isEmpty.items;
    }

    // Limpiar la cola.
    clear(){
    this.items = [];
    }
  

}
  
  // Creando una nueva cola de pacientes
  let patientQueue = new PatientQueue();
  
  console.log(patientQueue.isEmpty()); // true
  
  patientQueue.enqueue(new Patient("Yobanni", 51, true));
  patientQueue.enqueue(new Patient("Hugo", 32));
  patientQueue.enqueue(new Patient("Marta", 67, true));
  
  patientQueue.printQueue(); // Debería mostrar los pacientes en la cola
  console.log(patientQueue.front()); // Debería mostrar el paciente Yobanni
  console.log(patientQueue.dequeue()); // Debería mostrar el paciente Yobanni
  console.log(patientQueue.front()); // Debería mostrar el paciente Hugo
  