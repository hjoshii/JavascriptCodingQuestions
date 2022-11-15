function occurrenceOfGivenCharacter(char){

   let str ="kamal"
   let countOccurrence = 0

   for(let item of str){
       if(item ===char){
       countOccurrence++
       }
    
   }

   console.log(countOccurrence)
}


occurrenceOfGivenCharacter("l")