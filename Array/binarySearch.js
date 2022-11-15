//Binary Search with Sorted Array
function binarySearch(arr, value){
    debugger
    let min = 0
    let max = arr.length -1
    
    while(min<=max){
        let midIndex = Math.floor((min+max) /2)
        if(arr[midIndex] < value ){
            min = midIndex +1
        }
        else if(arr[midIndex] > value){
            max = midIndex - 1
        }
        else{
            return midIndex
        }
    }
    return -1
    }
    
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7))