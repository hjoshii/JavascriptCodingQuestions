function reverseStringUsingRecursion(str){
  
  if(str.length ===1){
    return str
  }
  
  return reverseStringUsingRecursion(str.slice(1)) + str[0]
  
}

console.log(reverseStringUsingRecursion("kamal"))