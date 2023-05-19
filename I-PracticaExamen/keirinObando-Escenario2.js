function bubbleSort(arr) {
    var i, k;
    var len = arr.length;
    var isSwapped = false;
    for (i = 0; i < len; i++) {
        isSwapped = false;
        for (k = 0; k < len; k++) {
            if (arr[k] > arr[k + 1]) {
                var temp = arr[k]
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    console.log(arr)
} 
var arr = [8,11,37,65,82,98,5,17,38,70,62];
bubbleSort(arr)