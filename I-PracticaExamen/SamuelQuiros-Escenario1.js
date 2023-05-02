function linearSearch(arr, numeroDisfraz) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === numeroDisfraz) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(linearSearch([23, 5, 47, 18, 32, 10], 10));