'use strict'

var array = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log(sortedArrayMergeSort);
//
//
var binaryResult = binarySearch(sortedArrayMergeSort, 13)
console.log("data ----------------", binaryResult);
//
//
var addSumResults = addSum(array, 100)
console.log("addSumResults ----------------", addSumResults);
// var array2 = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
// var reverseArry = reverseArray(array2)
// console.log("reverseArry ----------------", reverseArry);


function bubbleSorting(arr) {
    var done = false
    while(!done){
        done = true;
        for(let i =0 ; i < arr.length; i++){
          if(arr[i] > arr[i+1]){
              let temp;
              temp = arr[i+1]
              arr[i+1] = arr[i]
              arr[i] = temp
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
    var c = Math.floor(arr.length/2);
    var l = arr.slice(0, c);
    var r = arr.slice(c)
    return merge(mergeSort(l), mergeSort(r))

}

function merge(l, r) {
    var finalRes = []
    while(l.length && r.length){
        if(l[0] < r[0]){
            finalRes.push(l.shift())
        }else {
            finalRes.push(r.shift())

        }
    }
    return [...finalRes, ...l, ...r]

}


function binarySearch(arr, value) {
    var h = arr.length-1
    var low = 0;
    var mid = 0;

    for(let i =0; i<arr.length; i++){
        mid = h+low /2
        if(arr[mid] === value){
            return arr[mid]
        }else if(value > arr[mid]){
            low = mid+1
        }else {
            h = mid-1
        }
    }
    return -1

}

function addSum(arr, value) {
    var obj = {};
    var newarr = [];
    for (let i=0; i < arr.length; i++){
        if(obj[arr[i]]){
            newarr.push([obj[arr[i]], arr[i]])
        }else{
            obj[value - arr[i]] = arr[i]
        }
    }
    return newarr

}
















