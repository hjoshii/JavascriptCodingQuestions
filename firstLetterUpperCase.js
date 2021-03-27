let data = "kamal pal is there"
let dataArr = data.split(" ")
let mergeString =""

for(let item of dataArr){
    mergeString += item[0].toUpperCase() + item.slice(1)
}

console.log(mergeString)

//Input : kamal pal is there
//output : KamalPalIsThere

