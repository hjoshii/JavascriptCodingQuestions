//sample input [5, -4, -2, 6, -1]

function maximumSubarraySum(arr) {
    
    let maxSum =0 
    let curSum = 0

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        curSum += element

        if(curSum > maxSum){
            maxSum = curSum
        }

        if(curSum <0){
            curSum =0 
        }
        
    }

    console.log(maxSum)

}

maximumSubarraySum([-2, -5, 6, -2, -3, 1, 5, -6])