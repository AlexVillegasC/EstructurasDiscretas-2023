// Definición de la clase Paciente
class Paciente {
  constructor(nombre, edad, emergencia) {
    this.nombre = nombre;
    this.edad = edad;
    this.emergencia = emergencia;
  }
}

// Definición de la clase ColaDePacientes
class ColaDePacientes {
  constructor() {
    this.pacientes = [];
  }

  // Registrar un nuevo paciente en la cola
  registrarPaciente(nombre, edad, emergencia = false) {
    const nuevoPaciente = new Paciente(nombre, edad, emergencia);
    if (emergencia) {
      this.pacientes.unshift(nuevoPaciente); // Agregar al inicio de la cola
    } else {
      this.pacientes.push(nuevoPaciente); // Agregar al final de la cola
    }
  }

  // Atender al siguiente paciente
  atenderSiguientePaciente() {
    if (this.pacientes.length === 0) {
      return null; // No hay pacientes en la cola
    }
    return this.pacientes.shift(); // Remover y retornar el primer paciente de la cola
  }

  // Obtener el número de pacientes en la cola
  obtenerConteoDePacientes() {
    return this.pacientes.length;
  }

  // Limpiar la cola de pacientes
  limpiarCola() {
    this.pacientes = [];
  }
}

// Ejemplo de uso
const cola = new ColaDePacientes();

// Registrar nuevos pacientes
cola.registrarPaciente("Miguel", 30);
cola.registrarPaciente("Julio", 45);
cola.registrarPaciente("Ana", 50, true); // Paciente de emergencia

// Obtener el número de pacientes en la cola
console.log("Conteo de pacientes:", cola.obtenerConteoDePacientes()); // Output: 3

// Atender al siguiente paciente
const siguientePaciente = cola.atenderSiguientePaciente();
console.log("Paciente atendido:", siguientePaciente.nombre); // Output: "Juan"

// Limpiar la cola
cola.limpiarCola();
console.log("Conteo de pacientes:", cola.obtenerConteoDePacientes()); // Output: 0
