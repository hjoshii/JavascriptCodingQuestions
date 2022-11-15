//Sample Input

let arr = [1,2,3,4,5]
let arr1 = [3,4,5,6,7,8]
let arr2 = [3,5,6,11,12,13]

//sample output 3 and 5

function findCommanElementFromMultipleArray(arr, arr1, arr2){

    let i=0
    let j=0
    let k=0

    let n1 = arr.length
    let n2 = arr1.length
    let n3 = arr2.length

    while (i<n1 && j<n2 && k < n3) {
        
        if(arr[i] === arr1[j] && arr1[j] === arr2[k]){
            console.log("Comman value in all the array: ", arr[i])
            i++
            j++
            k++
        }

        else if(arr[i] < arr1[j]){
            i++
        }
        else if(arr1[j] < arr2[k]){
            j++
        }
        else{
            k++
        }
    }    


}

findCommanElementFromMultipleArray(arr,arr1,arr2)