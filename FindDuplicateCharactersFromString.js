function removeDuplicate(str){
    let obj ={}
    let duplicateCharacters=""
    for (const item of str) {
      obj[item] = (obj[item]| 0) +1
    }

    for (const item in obj) {
     if(obj[item]>1){
        duplicateCharacters += item
     }
    }
    
    console.log(duplicateCharacters)
}

removeDuplicate("kuldeepp")