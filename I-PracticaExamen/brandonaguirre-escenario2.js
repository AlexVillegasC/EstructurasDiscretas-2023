

//escenario2
function bubleSort(arr) {
    var len = arr.length; 
    for (var i = 0; i < len; i++) {
     for (var j = 0; j < len - i - 1;j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
     }
    } 
    return arr;
  }
  
  var arr= [94, 56, 90, 13, 22, 61];
  var sortedArr = bubleSort(arr);
  console.log(sortedArr);
  //la lista se ordena de forma ascendente