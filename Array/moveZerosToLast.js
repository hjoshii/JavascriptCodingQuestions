//Move Zeros to last
//input [2,5,0,10,0,20] output [2,5,10,20,0,0]
function moveZerosToLast(arr) {
    let c = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        [arr[i], arr[c]] = [arr[c], arr[i]]
        c++
      }
    }
    console.log(arr)
  }
  moveZerosToLast([2, 5, 0, 10, 0, 20])
  
  