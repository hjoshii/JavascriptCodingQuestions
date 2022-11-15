function checkString(item){
			let strArr =[]
			//(((}}}
      for(let i= 0;i<item.length;i++){
      		if(item[i] ==="{" || item[i] ==="(" ){
          		strArr.push(item[i])
          }
          if(strArr.length===0){
      			return false
      		}
          
          let check;
          
          switch(item[i]){
          	case "}":
            check = strArr.pop()
            if(check ==="("){
            	return false
            }
           
           
          	case ")":
            check = strArr.pop()
            
            if(check === "{"){
            	return false
            }
          }
          
      }
      
      return (strArr.length == 0);
    
}

if (checkString("(){}")){
		document.write("Balanced String");
}
    
else
    {
    document.write("Not Balanced String");
    }

