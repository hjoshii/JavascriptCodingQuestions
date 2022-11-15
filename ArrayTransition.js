//Question: Get the Transition point of array
//Input : [0,0,0,1,1,1]  output = 3 index
//Input : [0,1,1,1,1]  output = 1 index
function getTransition(arr){
    let tp = -1;
    let low = 0;
    let high = arr.length - 1

    while(low <= high){
        let mid = (low+high)/2
        mid = parseInt(mid)
        if(arr[mid] === 1){
          tp =mid
          high = mid-1
        }
        else{
          low = mid+1
        }
    }
    return tp
}

console.log(getTransition([0,1,1,1,1]))