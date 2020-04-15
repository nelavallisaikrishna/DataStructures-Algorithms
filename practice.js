'use strict'

var array = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log("sortedArrayMergeSort--------------------------", sortedArrayMergeSort);
//
var sortedArraySelctionSort = selectionSort(array);
console.log("sortedArraySelctionSort --------------------------", sortedArraySelctionSort);
//
var binaryResult = binarySearch(array, 13)
console.log("data ----------------", binaryResult);
//
// var addSumResults = addSum(array, 100)
// console.log("addSumResults ----------------", addSumResults);
// // var array2 = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
// // var reverseArry = reverseArray(array2)


function bubbleSorting(arr) {
    var done =false;
    while(!done){
        done = true;
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i];
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
    var c = Math.floor(arr.length/2)
    var l = arr.slice(0,c)
    var r = arr.slice(c)
    return merge(mergeSort(l), mergeSort(r))
}

function merge(l,r) {
    var finalArr = [];
    while (l.length && r.length){
        if(l[0]< r[0]){
            finalArr.push(l.shift())
        }else{
            finalArr.push(r.shift())
        }
    }
    return [...finalArr,...l,...r]
}

function selectionSort(arr) {
    for(let i=0; i<array.length; i++){
        var minIdx = i
        for(let j=1+1; j<array.length; j++){
            if(arr[minIdx] > arr[j]){
                minIdx = j
            }

        }
        if(i !== minIdx){
           var temp = arr[i]
            arr[i] =  arr[minIdx]
            arr[minIdx] = temp
        }
    }
    return arr

}


function binarySearch(arr, val) {
    arr.sort((a,b) => (a-b));
    console.log("arr -----------------------------", arr)
    var h = arr.length-1;
    var l = 0;
    var m = 0;
    for(let i=0; i<arr.length; i++){
        m = h+l/2;
        if(arr[m] === val){
            return arr[m]
        }else if(val > arr[m]){
            l = m+1
        }else{
            h = m-1
        }

    }

}

function sumThree(arr, value) {
    arr.sort((a,b) => (a-b));
    var finalRes = []
    for(let i=0; i<array.length-2; i++){
        var left = i+1
        var right = arr.length-1
        while (left < right){
            var currentValue = arr[i]+arr[left]+arr[right]
            if(currentValue === value){
                finalRes.push([arr[i],arr[left],arr[right]])
                left++;
                right--;
            }else if( currentValue > value){
                right--
            }else{
                left++
            }

        }

    }
    return finalRes;




}

console.log(sumThree([12,3,1,2,-6,5,-8,6],-1));



//
// for(let i=0; i<array.length; i++){
//
// }