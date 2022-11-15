function checkDigitInString(str){
  
  for (var i = 0; i < str.length; i++) {
    if(isNaN(str[i])){
      return false
    }
  }
  return true
}

console.log(checkDigitInString("1234"))
console.log(checkDigitInString("12ka"))