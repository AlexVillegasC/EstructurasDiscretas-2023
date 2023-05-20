// Definición de la clase SalaEmergencias
class SalaEmergencias {
    constructor() {
      this.pacientes = []; // Array para almacenar los pacientes en la cola
    }
  
    // Registro de un nuevo paciente en la cola
    registrarPaciente(paciente, esEmergenciaCritica = false) {
      if (esEmergenciaCritica) {
        this.pacientes.unshift(paciente); // Agregar al frente de la cola en caso de emergencia crítica
      } else {
        this.pacientes.push(paciente); // Agregar al final de la cola por defecto
      }
    }
  
    // Atención del siguiente paciente
    atenderPaciente() {
      if (this.pacientes.length === 0) {
        return null; // No hay pacientes en la cola
      }
  
      return this.pacientes.shift(); // Remover y retornar al paciente del frente de la cola (FIFO)
    }
  
    // Conteo de pacientes en la cola
    contarPacientes() {
      return this.pacientes.length;
    }
  }
  
  // Ejemplo de uso
  const salaEmergencias = new SalaEmergencias();
  
  salaEmergencias.registrarPaciente("Juan");
  salaEmergencias.registrarPaciente("María");
  salaEmergencias.registrarPaciente("Pedro", true);
  
  console.log("Número de pacientes en la sala de emergencias:", salaEmergencias.contarPacientes());
  
  const pacienteAtendido = salaEmergencias.atenderPaciente();
  console.log("Paciente atendido:", pacienteAtendido);
  
  console.log("Número de pacientes en la sala de emergencias después de la atención:", salaEmergencias.contarPacientes());
  