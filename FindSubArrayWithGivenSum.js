// Program Name: Find Sub Array with Given Sum
// input : [1 2 3 7 5] sum = 12
// output : 1,3

function getSubArray(arr, sum){
   let cur_sum = 0
   let start = 0

   for(let i = 0; i< arr.length;i++){
       while(cur_sum > sum && start < i){
           cur_sum = cur_sum - arr[start]
           start++
       }

       if(cur_sum === sum){
           console.log(start , i-1)
           return true
       }
       
       if(i< arr.length){
           cur_sum += arr[i]
       }
   }
}

getSubArray([1,2,3,7,5], 12)