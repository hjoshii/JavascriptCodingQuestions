//find comman smallest element from multiple array

function findCommanSmallestElement(){
	let arr1 = [1,3,6,8]
	let arr2 = [3,4,5,6,9]
	let arr3 = [1,2,3,6,8]
  
	let i=0, j=0, k=0
  
  while(i<arr1.length && j<arr2.length && k<arr3.length){
  		
      if(arr1[i] === arr2[j] && arr2[j] === arr2[k]){
      		console.log(arr1[i])
          i++
          j++
          k++
      }
      
      else if(arr1[i] < arr2[j]){
      		i++
      }
       else if(arr2[j] < arr3[k]){
      		j++
      }
      else{
      	k++
      }
  }
  
}

findCommanSmallestElement();