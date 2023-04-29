/**bb
*Complejidad Temporal -> O(1)
*Complejidad Espacial -> o(n)
*/
// Recursiva
function factorial (n) {
if (n === 0 || n === 1) {
return 1;
}else {
return n * factorial (n - 1);
}
}
