/**
 *Complejidad temporal o(n) 
 * complejidad espacial o( 1)
 * 
 */
//Recursos

function factorial(n){

if(n=== 0 || n=== 1){
    return 1;

}else{
    return n* factorial(n-1);
}

}