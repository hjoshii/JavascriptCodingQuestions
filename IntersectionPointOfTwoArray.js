function IntersectionPointOfTwoArray(arr1, arr2){
  
  let s1 = new Set([...arr1])
  let count  = 0
  for(let item of arr2){
    if(s1.has(item)){
      count++
    }
  }
  console.log(count)

}

IntersectionPointOfTwoArray([1,2,3,4,5,6], [3,4,5,6,7])