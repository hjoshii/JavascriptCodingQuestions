//Question 1: Check if a string is a rotated palindrome or not

function checkStringRotatePalindrom(str, str2){
  
  let tempStr = str+str;
  console.log(tempStr)
  
  console.log(tempStr.includes(str2)) 

}


checkStringRotatePalindrom("kamal", "alkam")

//example after two time add str = kamalkamal
//now if you rotate kam from left then you can see alkam in str


