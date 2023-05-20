# Tarea Corta 1: Problema al manejar la lista de Pacientes para la Sala de Emergencias

## Introducción

Has sido contratado para el equipo de desarrollo de un importante hospital, tu tarea es diseñar e implementar un sistema de administración de pacientes para la sala de emergencias. Se debe atender a los pacientes en el orden en el que llegan, de acuerdo al protocolo FIFO (First In, First Out). Sin embargo, en casos de emergencia crítica, se debe tener la capacidad de añadir un paciente al frente de la cola.

## Objetivo

Diseñar e implementar un sistema que maneje esta lógica utilizando una estructura de cola para representar la fila de pacientes.

## Requisitos del Sistema

1. **Registro de Pacientes:** Debe haber una función para registrar a un nuevo paciente en la cola. El paciente debe ser añadido al final de la cola, a menos que se especifique que se trata de una emergencia crítica.
2. **Atención de Pacientes:** Debe haber una función para atender al siguiente paciente. Esta función debe remover y retornar el paciente que está al frente de la cola.
3. **Conteo de Pacientes:** Debe haber una función para ver cuántos pacientes están actualmente en la cola.
4. **Limpieza de la Cola:** Debe haber una función para eliminar todos los pacientes de la cola al final del día.

## Detalles Adicionales

Cada paciente puede ser representado como un objeto con las siguientes propiedades:
- `nombre`: El nombre del paciente.
- `edad`: La edad del paciente.
- `emergencia`: Un valor booleano que indica si el paciente tiene una emergencia crítica.class Patient {
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
  
    //agregar paciente a la cola
    enqueue(person) {
      if (person.emergency) {
        this.queue.unshift(person);
      } else {
        this.queue.push(person);
      }
    }
  
    //Elimina un paciente de la cola
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
    }
    return this.queue.shift();
  }

  //Mostrar el paciente al frente de la cola
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.queue[0];
  }

  //Mostrar elementos en la cola
  printQueue() {
    let elementsInQueue = "";
    for (let i = 0; i < this.queue.length; i++) {
      elementsInQueue += this.queue[i].name + ", ";
    }
    return elementsInQueue.slice(0, -2);
  }

  // Mostrar el número de pacientes en la cola
  count() {
    return this.queue.length;
  }

  //Motrar si la cola está vacía
  isEmpty() {
    return this.queue.length == 0;
}

//Limpiar cola
clear() {
  this.queue = [];
}
}

// Creando una nueva cola de pacientes
let patientQueue = new PatientQueue();

// Registrando pacientes en la cola
patientQueue.enqueue(new Patient("Juan", 30));
patientQueue.enqueue(new Patient("Alex", 25));
patientQueue.enqueue(new Patient("Diego", 40, true));

console.log("Pacientes en la cola: "+patientQueue.printQueue());

// Atendiendo pacientes de la cola
console.log("Paciente al frente de la cola: " + patientQueue.front().name);
console.log("Atendiendo paciente: " + patientQueue.dequeue().name);
console.log("Atendiendo paciente: " + patientQueue.dequeue().name);

// Mostrando el número de pacientes restantes en la cola
console.log("Número de pacientes restantes en la cola: " + patientQueue.count());

// Limpiando la cola
patientQueue.clear();
console.log("Número de pacientes restantes en la cola después de limpiarla: " + patientQueue.count());  