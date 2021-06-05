//Question: Find first and last positions of an element in a sorted array?

//Example: Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}    
//x = 5
//Output : First Occurrence = 2
//Last Occurrence = 5

function firstLastPositionFromArray(arr) {

    let firstPosition = -1
    let lastPosition = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5 && firstPosition === -1) {
            firstPosition = i
        }
        else {
            if (arr[i] === 5) {
                lastPosition = i
            }
        }
    }
    console.log("first index position of the value : ", firstPosition)
    console.log("first index position of the value : ", lastPosition)
}

firstLastPositionFromArray([2, 5, 1, 3, 6, 5, 5, 5, 3, 3, 9])


