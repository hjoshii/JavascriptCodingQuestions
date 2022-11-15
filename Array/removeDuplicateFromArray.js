function removeDuplicateFromArray(arr){
  let obj = {}
  for(item of arr){
    if(!obj[item]){
      obj[item] = item
  }
}
console.log(Object.keys(obj))



}

removeDuplicateFromArray([1,2,3,4,3,6,5,4])