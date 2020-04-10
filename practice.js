'use strict'

var array = [5,9,3,12,64,85,99,2,7,13,0,14,18,20,30,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log(sortedArrayMergeSort);


var binaryResult = binarySearch(sortedArrayMergeSort, 13)
console.log("data ----------------", binaryResult)

function bubbleSorting(arr) {
    var done = false;
    while (!done){
        done =true;
        for(let i= 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp;
                temp = arr[i+1]
                arr[i+1]=arr[i]
                arr[i] = temp
                done = false;
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
    return merge(mergeSort(l), mergeSort(r))
}


function merge(l,r) {
    var result = [];
    while (l.length && r.length){
        if(l[0] < r[0]){
            result.push(l.shift())
        }else{
            result.push(r.shift())

        }

    }
    return [...result, ...l,...r]
}



function binarySearch(arr, value) {
    var high = arr.length-1;
    var low = 0;
    var mid = 0;
    while(high >= low){
        mid = high+low/2
        if(arr[mid] === value){
            return arr[mid]
        } else if(value < arr[mid]){
            high = mid -1
        }else{
            low = mid+1
        }
    }
    return -1
}













