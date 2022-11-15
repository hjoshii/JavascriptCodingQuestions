//check square in another array

function checkSquare(){
    let arr1 = [1,2,4,2]
    let arr2 = [1,4,4,16]
    let obj1 ={}
    let obj2 = {}

    for(let i =0 ; i< arr1.length;i++){
        obj1[arr1[i]] =  ( obj1[arr1[i]] || 0 ) +1
        obj2[arr2[i]] =  ( obj2[arr2[i]] || 0 ) +1
    }
    
    for(let item in  obj1){
        if(!obj2[item*item]){
            return false
        }
        
        if(obj1[item] != obj2[item*item] ){
            return false
        }
    }
    
    return true
    }
    
console.log(checkSquare())