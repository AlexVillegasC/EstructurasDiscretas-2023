class Paciente {
  constructor(nombre, edad, emergencia = false) {
    this.nombre = nombre;
    this.edad = edad;
    this.emergencia = emergencia;
  }
}

class PacienteQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(paciente) {
    if (this.isEmpty()) {
      this.queue.push(paciente);
    } else {
      let inserted = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (paciente.emergencia && !this.queue[i].emergencia) {
          this.queue.splice(i, 0, paciente);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.queue.push(paciente);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  count() {
    return this.queue.length + 1;
  }

  clear() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  listPaciente(){
    console.log("Pacientes en cola:");
    this.queue.map((paciente) => {
      console.log(paciente);
    })
  }

}

let pacienteQueue = new PacienteQueue();

pacienteQueue.enqueue(new Paciente("Jerry", 30, false));
pacienteQueue.enqueue(new Paciente("Marta", 45, true));
pacienteQueue.enqueue(new Paciente("Jasmin", 18, true));

const siguientePaciente = pacienteQueue.dequeue();
console.log(`Se ha atendido a: ${siguientePaciente.nombre}`);

const totalPacientes = pacienteQueue.count();
console.log(`Total de pacientes: ${totalPacientes}`);

pacienteQueue.enqueue(new Paciente("Andres", 20, false));
pacienteQueue.listPaciente();
pacienteQueue.isEmpty() ? 
    console.log("No hay pacientes en espera") : 
    console.log(`Pacientes por atender: ${pacienteQueue.count()}`);

pacienteQueue.clear();
pacienteQueue.isEmpty() ? console.log("No hay pacientes en espera") : console.log("Pacientes en espera");

