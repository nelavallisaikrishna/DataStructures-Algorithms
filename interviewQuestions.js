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
    while(h >= l){
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





function printMatrix(matrix){
    for(var i =0 ;i < matrix.length;i++){
        console.log(JSON.stringify(matrix[i]));
    }
}
function matrix(n) {
    const results = [];
    for(let i=0;i<n;i++){
        results.push([]);
    }
    let start_row = 0;
    let end_row = n -1;

    let start_col = 0;
    let end_col = n -1;
    let counter = 1;
    while(start_col <= end_col && start_row <= end_row){
        for(let i = start_col;i <= end_col;i++){
            results[start_row][i] = counter;
            counter++;
        }
        start_row++;

        for(let i = start_row;i<=end_row; i++){
            results[i][end_col] = counter;
            counter++;
        }
        end_col--;

        for(let i = end_col;i >= start_col; i--){
            results[end_row][i] = counter;
            counter++;
        }
        end_row--;

        for(let i = end_row;i >= start_row; i--){
            results[i][start_col] = counter;
            counter++;
        }
        start_col++;

    }
    setTimeout(function () {
        printMatrix(results);
    }, 1000)

    return results;
}

matrix(3)


var findduplicate=(arr) => {
    var duplicates = [];
    arr.sort((a,b) => (a-b));
    console.log(arr);
    var temp = "";
    for(let i=0; i< arr.length; i++){
        if( arr[i] !== temp){
            temp = arr[i]
        }else if(duplicates.indexOf(arr[i]) < 0){
            duplicates.push(arr[i])
        }
    }
    return duplicates


}

console.log("findduplicate----------------------------",findduplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]))



function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]
    for(let i of arr){
        min = i < min ? i : min
        max = i > max ? i : max
    }
    return [min, max]
}
console.log("findMinMax",findMinMax([5,8,9,7,15]))

let unionArra = function(array1,array2){
    for(let i of array2){
        if(array1.indexOf(i) < 0){
            array1.push(i)
        }
    }
    return array1
    // var newObj = {};
    // for(var i=0;i<array1.length;i++){
    //     newObj[array1[i]] = array1[i]
    // }
    // for(var j=0;j<array2.length;j++){
    //     newObj[array2[j]] = array2[j]
    // }
    // return Object.values(newObj);


}

console.log(unionArra([34,35,45,48,49], [44,55,34]))





function sortArray(a) {

    let i=0;
    let j=  a.length-1
    while(1){
        while(a[i] < 0 && i < j){
            i++
        }
        while(a[j] > 0 && i < j){
            j--
        }
        if(i<j){
            var temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }else{
            break
        }
    }
    return a

}


console.log("test -------------", sortArray([-5, -2, -99, -45, 6, 23, 8, 4, -30, -10]))

/*findDuplicateFrequency*/

var array = [1,2,3,4,3,2,4,6,3,4,6]
function findDuplicateFrequency(array) {
    var obj={}
    for (let i=0; i<array.length; i++){
        if(obj[array[i]]){
            console.log("...............................", obj[array[i]])
            obj[array[i]]++
        }else{
            obj[array[i]] = 1
        }

    }
    console.log("000000000000000000000000000000", obj)
}

findDuplicateFrequency(array)



/*alternate array negative and positive*/


var array = [2,-6,5,4,-7,-9,9,3,2,1,-3]

function alternateArray(array) {
    var positiveNu = 0
    var negativeNu = 0

    var negativeIndex = 1
    for (let i=0; i < array.length; i++ ){
        positiveNu = array[i]>0 ? positiveNu+1 : positiveNu;
        negativeNu = array[i]<0 ? negativeNu+1 : negativeNu
    }
    console.log("iiiiiiiiiiiiiiiiiiiiiii", positiveNu, negativeNu)
    for (let j=0; j<array.length; j++){
        if(array[j] < 0){
            let temp = array[j];
            array[j] = array[negativeIndex];
            array[negativeIndex] = temp;
            if((negativeNu > positiveNu) && (negativeIndex < (positiveNu*2-2))){
                negativeIndex += 2
            }else if(negativeNu < positiveNu){
                negativeIndex += 2
            }else{
                negativeIndex += 1
            }
        }
    }

    console.log("final --------------------------------------", array)


}
alternateArray(array)




















