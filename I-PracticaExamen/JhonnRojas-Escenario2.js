function bubbleSort(arr){
    var len =arr.length;
    for (var i = 0; i<len; i++){
     for (var j = 0; j<len- i - 1;j++){
      if (arr[j]> arr[j + 1]){
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }  
     }   
    }
    return arr;
}

var arr=[67, 32, 89, 43, 12, 51];
var sortedArr = bubbleSort(arr);
console.log(sortedArr);
//La lista se ordena de forma ascendente