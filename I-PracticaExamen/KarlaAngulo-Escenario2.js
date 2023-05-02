function bubbleSort(balloonSizes) {
    const n = balloonSizes.length;  
        
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (balloonSizes[j] > balloonSizes[j+1]) {
              let temp = balloonSizes[j];
              balloonSizes[j] = balloonSizes[j+1];
              balloonSizes[j+1] = temp;
            }
          }
        }
        
        return balloonSizes;
      }
    
    const balloonSizes = [34, 12, 45, 25, 18, 9];
    console.log(bubbleSort(balloonSizes));