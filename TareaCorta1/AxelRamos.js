const readline = require('readline');

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
    this.queue.push(patient);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("No hay pacientes en la cola.");
      return null;
    }

    return this.queue.shift();
  }

  count() {
    return this.queue.length;
  }

  clearQueue() {
    this.queue = [];
    console.log("La cola ha sido limpiada.");
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  // Función para registrar manualmente a un nuevo paciente
  registerPatient() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Ingrese el nombre del paciente: ", (name) => {
      rl.question("Ingrese la edad del paciente: ", (age) => {
        rl.question("¿Es una emergencia crítica? (s/n): ", (answer) => {
          const emergency = (answer.toLowerCase() === 's');
          const newPatient = new Patient(name, age, emergency);
          this.enqueue(newPatient);

          console.log("El paciente ha sido registrado en la cola.");

          rl.close();
        });
      });
    });
  }

  // Función para atender manualmente al siguiente paciente
  attendNextPatient() {
    if (this.isEmpty()) {
      console.log("No hay pacientes en la cola.");
      return null;
    }

    const patient = this.dequeue();
    console.log("Paciente atendido:", patient);
    return patient;
  }

  // Función para contar el número de pacientes en la cola
  showPatientCount() {
    const count = this.count();
    console.log("Número de pacientes en la cola:", count);
    return count;
  }
}

// Función para mostrar el menú y realizar las opciones seleccionadas
function showMenu(patientQueue) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("\n===== Menú =====");
  console.log("1. Registrar un nuevo paciente");
  console.log("2. Atender al siguiente paciente");
  console.log("3. Contar el número de pacientes en la cola");
  console.log("4. Limpiar la cola");
  console.log("5. Salir\n");

  rl.question("Seleccione una opción: ", (option) => {
    switch (option) {
      case '1':
        patientQueue.registerPatient();
        break;
      case '2':
        patientQueue.attendNextPatient();
        break;
      case '3':
        patientQueue.showPatientCount();
        break;
      case '4':
        patientQueue.clearQueue();
        break;
      case '5':
        rl.close();
        return;
      default:
        console.log("Opción inválida. Por favor, seleccione una opción válida.");
    }

    showMenu(patientQueue);
  });
}

// Ejemplo de uso:

let patientQueue = new PatientQueue();
showMenu(patientQueue);
patientQueue.registerPatient();

patientQueue.attendNextPatient();

patientQueue.showPatientCount();

patientQueue.clearQueue();