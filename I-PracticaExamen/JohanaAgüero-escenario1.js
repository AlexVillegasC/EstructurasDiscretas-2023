function linearSearch(arr, target) {
    for (let i in arr) {
      if (arr[i] === target) return i
    }
    return -1
  }

console.log(linearSearch([1,3,6,8], 8)); 