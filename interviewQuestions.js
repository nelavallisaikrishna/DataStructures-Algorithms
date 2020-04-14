'use strict'

var array = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
var sortedArrayBubble = bubbleSorting(array);
console.log("1111111111111111111111111111111", sortedArrayBubble);

var sortedArrayMergeSort = mergeSort(array);
console.log("sortedArrayMergeSort--------------------------", sortedArrayMergeSort);

var sortedArraySelctionSort = selectionSort(array);
console.log("sortedArraySelctionSort --------------------------", sortedArraySelctionSort);

var binaryResult = binarySearch(sortedArrayMergeSort, 13)
console.log("data ----------------", binaryResult);

var addSumResults = addSum(array, 100)
console.log("addSumResults ----------------", addSumResults);
// // var array2 = [5,9,3,12,64,85,99,2,91,13,0,15,18,36,95,1];
// // var reverseArry = reverseArray(array2)
// // console.log("reverseArry ----------------", reverseArry);


function bubbleSorting(arr) {
    var done = false;
    while (!done){
        done = true
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i+1]
                arr[i+1] = arr[i]
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
    let c = Math.floor(arr.length/2)
    let l = arr.slice(0,c)
    let r = arr.slice(c)
    return merge(mergeSort(l), mergeSort(r))
}

function merge(l,r) {
    var final = [];
    while (l.length && r.length){
        if(l[0] < r[0]){
            final.push(l.shift())
        }else{
            final.push(r.shift())
        }
    }
    return [...final, ...l, ...r]

}

function selectionSort(arr) {
    for(let i=0; i < arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i ){
            var temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr

}

function binarySearch(arr,value) {
    var h = arr.length-1
    var l = 0;
    var m = 0;
    for(let i=0; i <arr.length; i++){
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
    var obj = {};
    var arr1 = []
    for(let i=0; i < arr.length; i++){
        if(obj[arr[i]]){
            arr1.push([obj[arr[i]], arr[i]])
        }else{
            obj[value- arr[i]] = arr[i]
        }
    }
    return arr1
}


function arryCopy() {
    var a = [1,2,3,4]
    var b = [];
    b = Object.assign([], a);
    b.push(5)
    console.log("b -----------------------------------------",a, b)

    var c = [...b]
    c.push(9)
    console.log("c -----------------------------------------",a, b, c)



}

arryCopy()


let threesumnoArray = (array,target)=>{
    array.sort((a,b) => a-b)
    console.log("array",array)
    var triplets = []
    for (let i=0; i<= array.length-2; i++){
        var left = i+ 1
        var right = array.length-1
        while(left < right){
            var currentSum = array[i]+array[right]+array[left]
            if(currentSum === target){
                triplets.push([array[i],array[right],array[left]])
                right--;
                left++;
            }else if(currentSum < target){
                left++
            }else {
                right--
            }
        }
    }
    return triplets
}


console.log(threesumnoArray([12,3,1,2,-6,5,-8,6],1));

let unionArra = (array1,array2)=>{
    var mapobject = {}
    for(var i=0;i<array1.length;i++){
        mapobject[array1[i]] = array1[i]
    }
    for(var j=0;j<array2.length;j++){
        mapobject[array2[j]] = array2[j]
    }

    console.log("mapobject--------",mapobject)
    return mapobject

}

console.log(Object.keys(unionArra([34,35,45,48,49], [44,55,34])))




















