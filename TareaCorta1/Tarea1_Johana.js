class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }
}

class Patient {
  constructor(nombre, edad, emergencia) {
    this.nombre = nombre;
    this.edad = edad;
    this.emergencia = emergencia;
  }
}

class HospitalQueue {
  constructor() {
    this.queue = new Queue();
  }

  registrarPaciente(nombre, edad, emergencia = false) {
    const paciente = new Patient(nombre, edad, emergencia);
    this.queue.enqueue(paciente);
  }

  atenderPaciente() {
    if (this.queue.isEmpty()) {
      return null;
    }
    return this.queue.dequeue();
  }

  contarPacientes() {
    return this.queue.size();
  }

  limpiarCola() {
    this.queue.clear();
  }
}

// Ejemplo de uso:
const hospital = new HospitalQueue();
hospital.registrarPaciente('Miguel', 35);
hospital.registrarPaciente('Alicia', 42, true);
hospital.registrarPaciente('Carlos', 28);
console.log(hospital.contarPacientes()); // Output: 3

const paciente1 = hospital.atenderPaciente();
console.log(paciente1); // Output: { nombre: 'Juan', edad: 35, emergencia: false }

console.log(hospital.contarPacientes()); // Output: 2

hospital.limpiarCola();
console.log(hospital.contarPacientes()); // Output: 0
