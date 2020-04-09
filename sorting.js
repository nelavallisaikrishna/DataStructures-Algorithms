//Bubble Sort

var array = [5,7,6,1,2,9,8,3,4];

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