const invitados = [23, 8, 47, 16, 30, 14];


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const invitadoTarget = 14; 

const index = linearSearch(invitados, invitadoTarget);
console.log(index);