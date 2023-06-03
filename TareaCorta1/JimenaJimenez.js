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

    // Agrega elementos

    enqueue(paciente) {

      if (paciente.emergencia) {
        this.queue.unshift(paciente);
      } else {
        this.queue.push(paciente);
      }
      
    }

    //Elimina Elementos

    dequeue() {

      if (this.queue.length === 0) {
        return null;
      }
      return this.queue.shift();

    }
  

    //Mostrar el elemento al frente de la cola
     front()
    {

      if(this.isEmpty()){
        return "No hay elementos en la cola"
      }

      return this.queue[0]

    }
    

    //Conteo en la cola
    count() {

      return this.queue.length;
    }


    //Limpieza de la Cola
    clear() {
      this.queue = [];
    }


  }



  let pacienteQueue = new PacienteQueue();

  //Añadiendo pacientes a la colas
  pacienteQueue.enqueue(new Paciente("Luis", 25));
  pacienteQueue.enqueue(new Paciente("Sofia", 4));
  pacienteQueue.enqueue(new Paciente("Emmanuel", 35, true));
  pacienteQueue.enqueue(new Paciente("Aron", 13));
  pacienteQueue.enqueue(new Paciente("Bernado", 44));


  console.log("Número de pacientes al incio:", pacienteQueue.count());

  let NextAtention = pacienteQueue.dequeue();
  console.log("Paciente atendido:", NextAtention);

  console.log("Número de pacientes en cola después de la atención:", pacienteQueue.count());

  pacienteQueue.clear();
  console.log("Número de pacientes después de atender:", pacienteQueue.count());