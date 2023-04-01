/**
 *Complejidad temporal o(1). 
 * complejidad espacial o(n).
 * ggg
 */
//Recursos

function factorial(n){

if(n=== 0 || n=== 1){
    return 1;

}else{
    return n* factorial(n-1);
}

}