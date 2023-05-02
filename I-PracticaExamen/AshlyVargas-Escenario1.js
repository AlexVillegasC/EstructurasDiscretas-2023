function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arr = [50, 12, 35, 24, 18, 5];
  var sortedArr = bubbleSort(arr);
  console.log(sortedArr);
  //La lista se ordena de forma asecendente