//Longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(str){
    let start = 0
    let end = 0
    let maxLength = 0
    
    let charSet = new Set()
    while(end< str.length){
        if(!charSet.has(str[end])){
            charSet.add(str[end])
            end++
            maxLength = Math.max(maxLength , charSet.size)
        }
        else{
            charSet.delete(str[start])
            start++
        }
    }
    console.log(charSet)
    return maxLength
}

console.log(longestSubstringWithoutRepeatingCharacters("abbc"))