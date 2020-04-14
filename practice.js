let array = [5,2,8,99,1,95,30,40,60,85,70,98];
let bubbleSortedArray = bubbleSort(array)
console.log("bubble sorted array ----------------------------", bubbleSortedArray)


let mergeSortedArray = mergeSort(array)
console.log("mergeSortedArray sorted array ----------------------------", mergeSortedArray)


let selectionSortedArray = selectionSort(array)
console.log("selection sorted array ----------------------------", selectionSortedArray)


let binarySearchValue = binerySearch(selectionSortedArray, 40)
console.log("binary value ------------------------", binarySearchValue)



function bubbleSort(array) {
    var done = false;
    while (!done){
        done =true;
        for(let i=0; i < array.length; i++){
            if(array[i] > array[i+1]){
                var temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                done = false
            }
        }
    }
    return array
}


function mergeSort(arr) {
    if(arr.length === 1){
        return arr
    }

    let c = Math.floor(arr.length/2)
    let l = arr.slice(0,c)
    let r = arr.slice(c)
    return  merge(mergeSort(l),mergeSort(r))

}

function merge(l,r) {
    var newArr = [];
    while (l.length&&r.length){
        if(l[0] < r[0]){
            newArr.push(l.shift())
        }else{
            newArr.push(r.shift())
        }
    }
    return [...newArr, ...l,...r]

}


function selectionSort(arr) {
    for(let i=0; i < array.length; i++){
        var minIdx = i;
        for(let j=i+1; j < array.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        if(minIdx !== i){
            var temp = arr[minIdx]
            arr[minIdx] = arr[i]
            arr[i] = temp
        }
    }
    return arr

}


function binerySearch(arr,value) {
    var h = arr.length-1
    var l = 0;
    var m = 0;
    for(let i=0; i < array.length; i++){
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


function  twoSum(arr, value) {
    var obj = {};
    var newArr = [];
    for(let i=0; i < array.length; i++){
        if(obj[arr[i]]){
            newArr.push([obj[arr[i]], arr[i]])
        }else{
            obj[value- arr[i]]= arr[i]
        }

    }
    return newArr
}

let twoSumResult = twoSum(array, 100)
console.log("two sum result ---------------------", twoSumResult)

function threeSum(arr, value) {
    arr.sort((a,b) => (a-b));
    console.log("arr -----------------------",arr)
    var tripleArray = []
    for(let i=0; i < array.length-2; i++){
        var left = 0;
        var right = arr.length-1
        while (left <= right){
            var presentSum = arr[i]+arr[left]+arr[right]
            if(presentSum === value){
                tripleArray.push([arr[i], arr[left], arr[right]])
                left++;
                right--
            }else if(presentSum > value){
                right--;
            }else{
                left++
            }
        }

    }
    return tripleArray

}

let tripleSumResult = threeSum(array, 98)
console.log("tripleSumResult result ---------------------", tripleSumResult)


// for(let i=0; i < array.length; i++){
//
// }