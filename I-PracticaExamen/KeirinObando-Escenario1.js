function linearSearch(arr, numeroDisfraz){
  for(let i in arr){
      if(arr[i] === numeroDisfraz)
  
      return i
  }
  return -1
  }
  
  console.log(linearSearch([30,87,67,54,17,09,26,51,29,65], 30))