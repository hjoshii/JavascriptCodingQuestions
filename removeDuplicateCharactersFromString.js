function removeDuplicate(){
    let newStr = new Set()
    for (const item of str) {
      newStr.add(item)
    }
    let arr = [...newStr].join("")
    console.log(arr)
}

removeDuplicate("mohit")