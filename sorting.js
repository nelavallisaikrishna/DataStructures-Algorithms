//Bubble Sort

var array = [5,7,6,1,2,9,8,3,4];

function  bubbleSorting(array) {
    var done = false;
    while(!done){
        done = true;
        for (let i=0 ;  i < array.length; i++){
            if(array[i] > array[i + 1]){
                let temp;
                temp = array[i+1];
                array[i+1] = array[i]
                array[i] = temp
                done = false
            }
        }
    }
    return array
}


let bubbleSortResult = bubbleSorting(array)

console.log("result -----------------", bubbleSortResult)






/*Merge Sort*/


//
// function mergeSort(arr) {
//     console.log("array ---------------------", arr)
//     if(arr.length === 1){
//         return arr
//     }
//     let center = Math.floor(arr.length/2)
//     let l = arr.slice(0,center)
//     let r = arr.slice(center)
//     return merge(mergeSort(l), mergeSort(r))
// }
//
//
// function merge(l,r){
//     console.log("merge ---------------------", l.length, r.length)
//     var result = []
//      while (l.length && r.length){
//         if(l[0] < r[0]){
//             result.push(l.shift())
//         }
//         else{
//             result.push(r.shift())
//         }
//      }
//      return [...result, ...l, ...r]
// }
//
// console.log(mergeSort(array));


// madule.exports= {bubbleSorting, mergeSort}