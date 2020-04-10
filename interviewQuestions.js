'use strict'
var array = [1,2,3,5,6,7]

let twoSum =(array, value) => {
    var obj = {}
    var finalArr = [];
    for(let i=0; i < array.length; i++){
        if(obj[array[i]]){
            finalArr.push([obj[array[i]], array[i]])
        }else{
            obj[value - array[i]] = array[i]
        }

    }
    return finalArr;

}



console.log("final result ----------------------------------------------",twoSum(array,8));



