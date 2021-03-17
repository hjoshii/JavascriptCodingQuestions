function SumOfPairs(arr, sum){
    let sortedArr = arr.sort();
    console.log(sortedArr)
    let low = 0
    let high = arr.length -1
    while(low<high){
        if(sortedArr[low] + sortedArr[high] == sum){
            console.log("hello", sortedArr[low], sortedArr[high])
        }
        if(sortedArr[low] + sortedArr[high] > sum){
            high--
        }
        else
        {
            low++
        }
    }
}

SumOfPairs([2, 3, 4, -2, 6, 8, 9, 11], 6)
