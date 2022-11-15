function checkStringAnagram(str1, str2){
    if(str1.length !== str2.length){
      return false
    }
    let obj = {}
    for(let i=0; i<str1.length;i++){
     obj[str1[i]] = (obj[str1[i]] || 0) +1
    }
    for(let item of str2){
      if(!obj[item]){
        return false
      }
      obj[item] = obj[item]-1
    }
    return true
}

console.log(checkStringAnagram("hello", "lleho")? "Anagram String": "String is not Anagram")