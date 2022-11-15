//Input:  [12 11 -13 -5 6 -7 5 -3 -6]
//Output: [-13 -5 -7 -3 -6 12 11 6 5]

let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6]

let positiveArr = []
let negativeArr = []
let mainArr = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        positiveArr.push(arr[i])
    }
    else{
        negativeArr.push(arr[i])
    }
}

mainArr = [...negativeArr, ...positiveArr]
console.log(mainArr)