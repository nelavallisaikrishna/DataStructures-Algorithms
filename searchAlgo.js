// Binery search


let array = [4,8,10,8,3,9,14,18,0,6,2,9,19];
let sortedArray = array.sort(function (a,b) {
return a -b
});

function binerySearch(arr, value) {
    console.log(arr)
    var high = arr.length -1
    var low = 0
    var mid = 0

    while(high >= low){
        mid = high+low/2
        if (arr[mid] === value){
            return arr[mid]
        }
        else if(value > arr[mid] ){
            low = mid+1
        }else{
            high = mid-1
        }

    }
}

// function binarySearch(arr,value) {
//     var h = arr.length-1
//     var l = 0;
//     var m = 0;
//     for(let i=0; i <arr.length; i++){
//         m = h+l/2
//         if(arr[m] === value){
//             return arr[m]
//         }else if(value > arr[m]){
//             l = m+1
//         }else{
//             h = m-1
//         }
//     }
//
// }


let binaryResult = binarySearch(sortedArray, 9);
console.log("binaryResult ----------------", binaryResult);





// Linear search


let array2 = [4,8,10,8,3,9,14,18,0,6,2,9,19];
let linearResult = linearSearch(array2, 9);
console.log("linearResult ----------------", linearResult);

function  linearSearch(arr, value) {
console.log(arr, value)
    for (let i=0; i < arr.length ; i++){
        console.log(arr[i], value)

        if(arr[i] === value){
            return i;
            i = arr.length
        }
    }
    return -1

}