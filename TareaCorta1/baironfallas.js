class Paciente {
  constructor(nombre, edad, emergencia = false) {
    this.nombre = nombre;
    this.edad = edad;
    this.emergencia = emergencia;
  }
}

class ColaPacientes {
  constructor() {
    this.cola = [];
  }

  // Agregar paciente a la cola
  agregar(paciente) {
    if (paciente.emergencia) {
      this.cola.unshift(paciente);
    } else {
      this.cola.push(paciente);
    }
  }

  // Eliminar un paciente de la cola
  eliminar() {
    if (this.estaVacia()) {
      return "Cola vacía";
    }
    return this.cola.shift();
  }

  // Mostrar el paciente al frente de la cola
  frente() {
    if (this.estaVacia()) {
      return "No hay elementos en la cola";
    }
    return this.cola[0];
  }

  // Mostrar elementos en la cola
  mostrarCola() {
    let elementosEnCola = "";
    for (let i = 0; i < this.cola.length; i++) {
      elementosEnCola += this.cola[i].nombre + ", ";
    }
    return elementosEnCola.slice(0, -2);
  }

  // Mostrar el número de pacientes en la cola
  contar() {
    return this.cola.length;
  }

  // Verificar si la cola está vacía
  estaVacia() {
    return this.cola.length === 0;
  }

  // Limpiar la cola
  limpiar() {
    this.cola = [];
  }
}

// Crear una nueva cola de pacientes
let colaPacientes = new ColaPacientes();

// Registrar pacientes en la cola
colaPacientes.agregar(new Paciente("Juan", 30));
colaPacientes.agregar(new Paciente("Messi", 10));
colaPacientes.agregar(new Paciente("Cristiano", 7, true));

console.log("Pacientes en la cola: " + colaPacientes.mostrarCola());

// Atender pacientes de la cola
console.log("Paciente al frente de la cola: " + colaPacientes.frente().nombre);
console.log("Atendiendo paciente: " + colaPacientes.eliminar().nombre);
console.log("Atendiendo paciente: " + colaPacientes.eliminar().nombre);

// Mostrar el número de pacientes restantes en la cola
console.log("Número de pacientes restantes en la cola: " + colaPacientes.contar());

// Limpiar la cola
colaPacientes.limpiar();
console.log("Número de pacientes restantes en la cola después de limpiarla: " + colaPacientes.contar());
