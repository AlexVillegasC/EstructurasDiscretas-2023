function bblSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            if (arr[j] > arr[j + 1]) {
  
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
  
    console.log(arr);
}
  
var arr = [333, 77, 55, 36, 9, 4, 50, 455];
  
bblSort(arr);