const invitados = [23, 5, 47, 18, 32, 10];
//const invitados =[75, 9, 24,80,15,100,25] // Prueba para asegurar el funcionamineto del codigo


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const invitadoTarget = 18; // Variable que sera el objetivo en el array para buscar su posicion
//const invitadoTarget= 25 // objetivo a buscar para la segunda prueba

const index = linearSearch(invitados, invitadoTarget);
console.log(index); 