function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}

firstNonRepeatingCharacter("kakmal")



function firstNonRepeatingCharacter(str) {
    let obj = {}
    for(key of str){
        obj[key] = (obj[key] || 0) +1
    }

    for(key in obj){
        if(obj[key] === 1){
            return key
        }
    }
  
}

console.log(firstNonRepeatingCharacter("kackmal"))