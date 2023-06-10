function linearSearch(arr, numeroDisfraz){
    for(let i in arr){
        if(arr[i] === numeroDisfraz)
    
        return i
    }
    return -1
    }
    
    console.log(linearSearch([13, 9, 55, 18, 20, 14], 18))