function bubbleSort(balloonSizes) {
    let n = balloonSizes.length;
    
    for(let i = 0; i < n - 1; i++) {
      for(let j = 0; j < n - i - 1; j++) {
        if(balloonSizes[j] > balloonSizes[j+1]) {
          let temp = balloonSizes[j];
          balloonSizes[j] = balloonSizes[j+1];
          balloonSizes[j+1] = temp;
        }
      }
    }
    
    return balloonSizes;
  }
  
  // Ejemplo de uso
  let balloonSizes = [40, 15, 90, 34, 50, 19];
  let sortedBalloonSizes = bubbleSort(balloonSizes);
  console.log(sortedBalloonSizes);
  // Salida esperada: [9, 12, 18, 25, 34, 45]
  