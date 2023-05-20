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
- `emergencia`: Un valor booleano que indica si el paciente tiene una emergencia crítica.


```javascript
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
}

// Creando una nueva cola de pacientes
let patientQueue = new PatientQueue();

// Añadiendo pacientes a la cola
patientQueue.enqueue(new Patient("Juan", 30));

```

Debes implementar esta lógica en JavaScript utilizando una clase `PacienteQueue` que se comporte igual que la clase `Queue` que se proporcionó anteriormente. Asegúrate de que tu implementación de comentar bien el código y que se cumplan los requisitos del sistema.
