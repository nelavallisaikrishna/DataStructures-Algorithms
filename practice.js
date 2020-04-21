'use strict'

var array = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log("sortedArrayMergeSort--------------------------", sortedArrayMergeSort);

// //
var sortedArraySelctionSort = selectionSort(array);
console.log("sortedArraySelctionSort --------------------------", sortedArraySelctionSort);
// //
var binaryResult = binarySearch(array, 13)
console.log("data ----------------", binaryResult);
//
var addSumResults = addSum(array, 100)
console.log("addSumResults ----------------", addSumResults);
var threeSum = threeSum(array, 100)
console.log("threeSum ----------------", threeSum);
// // var array2 = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
// // var reverseArry = reverseArray(array2)

function bubbleSorting(arr) {
    var done = false;
    while (!done){
        done =true
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                done = false
            }
        }

    }
    return arr

}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr
    }
    var mid = Math.floor(arr.length/2)
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))


}

function merge(left, right) {
    var finalRes = [];
    while (left.length&&right.length){
        if(left[0] > right[0]){
            finalRes.push(right.shift())
        }else {
            finalRes.push(left.shift())
        }
    }
    return[...finalRes,...right,...left]
}

function selectionSort(arr) {
    for(let i=0; i< arr.length; i++){
        var minIndex =  i
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            var temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr

}

function binarySearch(arr, value) {
    arr.sort((a,b) => (a-b))
    console.log(arr)
    var h = arr.length-1
    var l = 0 ;
    var m = 0;
    while (h >= l){
        m = h+l/2
        if(arr[m] === value){
            return arr[m]
        }else if(value > arr[m]){
            l = m+1
        }else{
            h = m-1
        }
    }
}

function addSum(arr, value) {
    var obj = {}
    var newArr = []
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            newArr.push([obj[arr[i]], arr[i]])
        }else{
            obj[value-arr[i]] = arr[i]
        }
    }
    return newArr

}

function threeSum(arr, value) {
    arr.sort((a,b) => (a-b))
    var newArr = []
    for(let i = 0; i < arr.length-2; i++){
        var right = arr.length-1
        var left = i+1
        while(left < right){
            var currentValue = arr[i]+arr[left]+arr[right]
            if(currentValue === value){
                newArr.push([arr[i],arr[left],arr[right]])
                left++;
                right--
            }else if(currentValue > value){
                right--
            }else{
                left++
            }
        }
    }
    return newArr

}



//
// for(let i=0; i<arr.length; i++){
//
// }