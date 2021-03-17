function findMaxAndSecondMaximumValue(arr){
    let maxValue = 0
    let secondMaxValue = 0

    for (const item of arr) {
      if(item>maxValue){
          maxValue = item
      }
    }

     for (const item of arr) {
      if(item> secondMaxValue && item < maxValue){
          secondMaxValue = item
      }
    }
   
    
    console.log("Max value of array is:", maxValue)
    console.log("Second max value of array is:", secondMaxValue)
}

secondMaximumValue([5,3,4,2,1])