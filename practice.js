'use strict'

var array = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log(sortedArrayMergeSort);


var binaryResult = binarySearch(sortedArrayMergeSort, 13)
console.log("data ----------------", binaryResult);


var addSumResults = addSum(array, 100)
console.log("addSumResults ----------------", addSumResults);
var array2 = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var reverseArry = reverseArray(array2)
console.log("reverseArry ----------------", reverseArry);



function bubbleSorting(arr) {
    var done = false
    while (!done){
        done =true;
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp;
                temp = arr[i+1]
                arr[i+1] =arr[i]
                arr[i] = temp
                done =false
            }

        }
    }
    return arr

}


function mergeSort(arr) {
    if(arr.length === 1){
        return arr
    }
    let center = Math.floor(arr.length/2)
    let l = arr.slice(0,center)
    let r = arr.slice(center)
    return merge(mergeSort(l),mergeSort(r))

}

function merge(l,r) {
        var result = []
        while(l.length && r.length){
            if(l[0] < r[0]){
                result.push(l.shift())
            }else{
                result.push(r.shift())
            }
        }
        return [...result, ...r, ...l]
}


function binarySearch(arr, value) {
    var h = arr.length-1;
    var l = 0;
    var mid = 0;
    while (h >= l){
        mid = h+l/2;
        // console.log(mid, arr[mid], value)
        if(arr[mid] === value){
            return arr[mid]
        }else if(value > arr[mid]){
            l = mid+1
        }else{
            h = mid-1
        }
    }
    return -1
}

function addSum(arr, val) {
    var obj ={};
    var final =[];
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            final.push([obj[arr[i]], arr[i]])
        }else {
            obj[val -arr[i]] = arr[i]
        }
    }
    return final

}

function reverseArray(arr) {
    var arrB = [];
    for (let i=0; i < arr.length; i++){
        arrB[i] = arr[arr.length-i-1]
    }
    return arrB

}

function removeDulicates(array) {
    var obj = {};
    for(let i of array){
        obj[i] = true;
        // console.log("000000000000000000000000000000",i)
    }
    let finalArray = Object.keys(obj)
    return (finalArray)

}
console.log(removeDulicates([1,5,2,6,5,3,2,8,9,7,8,9]))













