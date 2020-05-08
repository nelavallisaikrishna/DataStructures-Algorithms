var names = ["saikrishna", "harika", "suguna"]


console.log(names.sort(-1))

var a = [1,2,3];
var b = [1,4,5];

console.log("datsta ===================", a.slice(1,2))


// Remove Duplicates from array
let a = [1,2,5,2,1,8]
let b = [];
let len = a.length;
for (let i of a){
    console.log(i)
    if (b.indexOf(i) === -1){
        b.push(i)
    }
}

obj = {};

for(let i of a){
    obj[i] = true
}

let b = Object.keys(obj)

console.log(b)



// Reverse the string

let a ="saikrishna"
 let reverseLen = a.length-1
let newTr = ""

for (var i = reverseLen; i >= 0; i--){
    newTr += a[i]
}
console.log(newTr)



// Reverse array

function reverseArray (arr) {
    var newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        newArr[i] = arr[j];
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));


// Sorting Array

function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            console.log("========================================", array[i-1], array[i])
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
                console.log("end -----------------",  array)
            }
        }
    }
    console.log("final data --------------------", array)
    return array;
}

var numbers = [12, 500, 15, 1, 14, 3, 0];
bubbleSort(numbers);
console.log(numbers);

// Sorting numbers
var numbers = [12, 500, 15, 1, 14, 3, 0];

sorting(numbers);

function sorting(a) {
    let done = false;
    while (!done){
        done =true
        for(let i=1; i < a.length ; i++){
            if (a[i-1] > a[i]){
                console.log("looping -------------------------", a[i-1], a[i])
                done =false
                let temp;
                temp = a[i]
                a[i] = a[i-1]
                a[i-1] = temp
            }
        }
    }



    console.log("ending ----------------------",  a)
}


// Find Element

var names = ["sai", "harika", "suguna", "chalapathi"];

for (let i in names){
    var index;
    if("suguna" === names[i]) {
        index = i ;
      console.log(index)

    }
}





