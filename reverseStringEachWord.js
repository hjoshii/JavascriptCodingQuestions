function reverseStringEachWord(str){
    let reverseStr =[]
    let reverseValue =""
    for(let i = 0;i<= str.length-1;i++){
        if(str[i] != " "){
         reverseStr.push(str[i])
        }
        else
        {
            while(reverseStr.length >0){
                reverseValue = reverseValue +  reverseStr.pop()
            }
            reverseValue = reverseValue + " "
            
        }
        
    }

    console.log(reverseValue)
}


reverseStringEachWord("Welcome to this Javascript Guide!")

//Input : Welcome to this Javascript Guide!
//Output : emocleW ot siht tpircsavaJ 