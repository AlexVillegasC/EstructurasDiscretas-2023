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
  //funcion para añadir un paciente y priorizar en la cola al de mayor emergencia
    AñadirPaciente(Patient) {
      if (Patient.emergency) {
        this.queue.unshift(Patient);
      } else {
        this.queue.push(Patient);
      }
    }
  //Funcion para eliminar al primero de la cola y retornar al siguiente paciente
    SacarPaciente() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.queue.shift(); 
    }
  // Funcion que retorna el numero de pacientes en cola
    Contador() {
      return this.queue.length; 
    }
  // funcion para borrar la lista de pacientes al final del dia
    BorrarLista() {
      this.queue = []; 
    }
  // funcion que retorna un valor nulo cuando no hay pacientes en cola
    isEmpty() {
      return this.queue.length === 0; 
    }

    
  }
  // inicializacion de la clase
  let patientQueue = new PatientQueue();
  
  // Utilizacion del metodo para añadir de pacientes
  patientQueue.AñadirPaciente(new Patient("Johel", 20));
  patientQueue.AñadirPaciente(new Patient("Axel", 19, true));
  patientQueue.AñadirPaciente(new Patient("Aaron", 21));
  patientQueue.AñadirPaciente(new Patient("Ashley", 19));
  patientQueue.AñadirPaciente(new Patient("sofia", 18, true));


// declaracion de del metodo para Eliminar pacientes
  const PatientNext = patientQueue.SacarPaciente();
  console.log(PatientNext);
  

//Declaracion del metodo de conteo de pacientes en cola
  const TotalPatient = patientQueue.Contador();
  console.log(TotalPatient); 
  

// Declaracion para el metodo de borrar la lista
  patientQueue.BorrarLista();

// Delcaracion del metodo para un valor nullo al tener la lista borrada
  const isEmpty = patientQueue.isEmpty();
  console.log(isEmpty)