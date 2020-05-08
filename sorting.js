//Bubble Sort

var array = [5, 7, 6, 1, 2, 9, 8, 3, 4];

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
function mergeSort(arr) {
    console.log("array ---------------------", arr)
    if(arr.length === 1){
        return arr
    }
    let center = Math.floor(arr.length/2)
    let l = arr.slice(0,center)
    let r = arr.slice(center)
    return merge(mergeSort(l), mergeSort(r))
}


function merge(l,r){
    console.log("merge ---------------------", l.length, r.length)
    var result = []
     while (l.length && r.length){
        if(l[0] < r[0]){
            result.push(l.shift())
        }
        else{
            result.push(r.shift())
        }
     }
     return [...result, ...l, ...r]
}

console.log(mergeSort(array));


/*Selection Sort*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lesIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lesIndex]) {
                lesIndex = j
            }
        }
        if (lesIndex !== i) {
            let temp = arr[lesIndex];
            arr[lesIndex] = arr[i]
            arr[i] = temp

        }
    }
    return arr

}

let selectionSortResult = selectionSort(array)
console.log("result -----------------", selectionSortResult)




function quickSort(items, min, max) {
    var index;
    if (items.length > 1) {
        index = partition(items, min, max);
        if (min < index - 1) {
            quickSort(items, min, index - 1);
        }
        if (index < max) {
            quickSort(items, index, max);
        }
    }
    return items;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


// first call
var result = quickSort(array, 0, array.length - 1);
console.log("quick sort ----------------", result);


insersionSort = (array)=>{
    for(var i=1;i<array.length;i++){

        console.log("array",array)
        var j =i;
        console.log("array[j]",array[j])
        console.log("array[j-1]",array[j-1])
        while (j > 0 && (array[j] < array[j-1])){
            swap(j,j-1,array)
            j--
        }
    }
    return array
}

swap =(i,j,arr)=>{
    console.log("swap startIndex",i)
    console.log("swap smallestIndex",j)
    console.log("swap array",arr)
    temp = arr[j]
    arr[j] =arr[i]
    arr[i]=temp
}

console.log("insersionSort",insersionSort([8,4,5,7,9,6,2,1,3]))