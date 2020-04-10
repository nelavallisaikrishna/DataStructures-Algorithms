'use strict'

var array = [5,9,3,12,64,85,99,2,7,13,0,14,18,20,30,1];
var sortedArray = sorting(array);
console.log(sortedArray);
var findElementFromBubble = bubleSearch(sortedArray, 5)
console.log(findElementFromBubble)

var findElementFromLinear = linearSearch([5,9,3,12,64,85,99,2,7,13,0,14,18,20,30,1], 5)
console.log(findElementFromLinear)




function linearSearch(arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }

}

function bubleSearch(arr, value) {
    var high = arr.length
    var low = 0;
    var mid = 0;
    while(high >= low){
        for(let i=0; i < arr.length; i++){
            if(value === arr[i]){
                return i
            }else if(value > arr[i]){
                low = mid+1
            }else{
                high = mid-1
            }
        }

    }
}

 function sorting(arr) {
    var done = false;
    while (!done){
        done = true
        for(let i=0; i < arr.length; i++){
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
};


var randomArray = [1,2,3,4,5,6,7,8,9]


function twoSum(arr, value) {
    var obj = {};
    var finalArr = [];
    for(let i=0; i < arr.length; i++){
        if(obj[arr[i]]){
            finalArr.push([obj[arr[i]], arr[i]])
        }else{
            obj[value-arr[i]] = arr[i]
        }
    }
    return finalArr
}

let result = twoSum(randomArray, 11)

console.log("data two sum --------------------------", result)



let name = "harika"
function reverseString(str) {
    str = str.split('')
    var str1= []
    for(let i=0; i < str.length; i++){
            str1[i] = str[str.length-1-i]
    }
    return str1.join('')

}
let reverseValue = reverseString(name)
console.log(reverseValue)









