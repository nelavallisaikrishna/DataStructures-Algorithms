// 1)

// isAnagram = (stringA,stringB)=>{
//
//     characterMap = (text) =>{
//         var charmap = {}
//         for(var char of text){
//             if(charmap.hasOwnProperty(char)){
//                 charmap[char]++
//             }else {
//                 console.log("else")
//                 charmap[char]=1
//             }
//         }
//         return charmap
//     }
//
//     if(stringA.length === stringB.length){
//         var stringAMap = characterMap(stringA)
//         var stringBMap = characterMap(stringB)
//         for(var char in stringAMap){
//            if(stringAMap[char] != stringBMap[char]){
//                return false
//            }
//         }
//         return true
//     }else {
//         return false
//     }
//
// }


///////////
/*function isAnagram (str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    var sortStr1 = str1.split('').sort().join('');
    var sortStr2 = str2.split('').sort().join('');

    return (sortStr1 === sortStr2);
}

console.log(isAnagram('dog','god')); // true
console.log(isAnagram('foo','bar')); // false
console.log(isAnagram('foo','fooo')); // false*/
///////



isAnagram = (str1,str2)=>{
    if(str1.length != str2.length){
        return false
    }
    var sortstr1 = str1.split('').sort().join('')
    var sortstr2 = str2.split('').sort().join('')
    return sortstr1 == sortstr2
}

console.log("characterMap",isAnagram("map","pam"))


// 2)

///finding one missing elelmet
getMissingNo=((a, n)=>{
    var i, total;
    total = (n + 1) * (n + 2) / 2;
    for (i = 0; i < n; i++) {
        total -= a[i];
        //console.log("total",total)
    }
    return total;
})
console.log(getMissingNo([1, 2, 4, 5, 6],5))

///find multiple missing numbers
getMultipleMissNumbers = (()=>{
    var numbers = [0,1,3,4,5,7,8,10,13]; // Missing 2,6
    var missing = [];

// Find the missing array items
    for(var i=0 ; i< numbers.length ;i++){
        if((numbers[i+1] - numbers[i])>1){
            missing.push(numbers[i+1] - numbers[1])
        }
    }

console.log( missing )
})

getMultipleMissNumbers()


//////method 3///
// finding unsorted missing elements

findMissElements=()=>{
    // var arr = [9,1,5,8,7,4,3,0,10,13,15,19,16,18,25];
    var arr = [1,3,4,5,7,8,9,10,11,13,15,17,18,19,25];
    // var arrlength = Math.max(...arr)
    // console.log("temp",temp)
    var arrlength = arr[arr.length-1]
    console.log("arrlength",arrlength)
    var missing = [];
    for(var i=0;i<=arrlength;i++){
        console.log("arr.indexOf(i)",arr.indexOf(i))
        if(arr.indexOf(i)<0){
            missing.push(i)
        }
    }
    console.log( missing )
}

findMissElements()

// 3)///////////
// How to find all pairs on integer array whose sum is equal to given number
twoSum = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++){
        if (hashMap[array[i]]){
            console.log("1111",array[i])
            console.log("hashMap[array[i] 11111",hashMap[array[i]])
            results.push([hashMap[array[i]], array[i]])
            console.log("hashMap 111",hashMap[array[i]])
        }else{
            console.log("2222",array[i])
            hashMap[sum - array[i]] = array[i];
            console.log("hashMap 2222",hashMap)
        }
    }
    return results;
}

console.log(twoSum([2, 3, 2, 5, 4, 5, 5, 5, 5, 9, 6, 8, 8, 7],10));



// 4) /////////////

binarySearch=(arr,tar)=>{
    var left =0; var right = arr.length
    console.log("left",left)
    console.log("right",right)
    while (left < right){
        var mid = Math.floor((left+right)/2);
        console.log("mid",mid)
        if(tar == arr[mid]){
            return true
        }else if(tar > arr[mid]){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return false
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11],1))

// 5)////////


var cl=console.log
const JSON = require('circular-json');
class Node{
    constructor(data){
        this.data=data;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size= 0
    }

    pushMethod(data){
        let newnode = new Node(data)
        // cl("newnode",newnode)

        //specialcase if no nodes in the list
        if(!this.head){
            this.head = newnode;
            this.tail = newnode
        }else{
            // cl("this.tail",this.tail)
            newnode.prev = this.tail;
            this.tail.next = newnode;
            // cl("this.tail 11111111",this.tail)
            this.tail = newnode
            // cl("this.tail 2222",this.tail)
        }
        this.size++
    }


    insertAt(pos,data){
        let current= this.head;
        let count = 1;
        let newNode = new Node(data)
        if(pos == 0){
            // cl("here")
            // cl("current",current)
            // cl("this.head",this.head)
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }else{
            while (current) {
                current = current.next

                //  cl("current----------",current)
                if(count == pos){
                    // cl("count",count,pos)
                    // cl("coming here current",current)
                    newNode.prev = current.prev;
                    newNode.next = current;
                    current.prev.next = newNode;
                    current.prev = newNode

                }
                count++
            }
        }
        this.size++
    }

    removeNode(data){
        let current = this.head;
        while (current){
            if(current.data == data){
                if(current == this.head && current == this.tail){
                    this.head = null;
                    this.tail=null
                    return
                }else if(current == this.head){
                    this.head = this.head.next;
                    this.head.prev = null
                }else if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next = null
                }else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev
                }
            }
            current = current.next
        }
    }

    removeAtIndex(index){
        let current = this.head;
        let count=1;
        if(index == 0){
            this.head = this.head.next;
            this.head.prev = null;
        }else{
            while (current){
                current = current.next;
                if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next=null
                }else if(count == index){
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break
                }
                count++
            }
        }

    }

    reverse(){
        let current = this.head;
        let prev = null;
        while( !current == null){
            let next = current.next
            cl("next",next)
            // cl("current-----",current)
            // current.next = prev
            // current.prev = next
            // prev = current
            // current = next
        }

        cl("this.head----",JSON.stringify(this.head))
        cl("this.tail----",JSON.stringify(this.tail))
        cl("prev----",prev)
        // cl("prev----",prev)
        //
        //this.tail = this.head
        // this.head = prev
    }



}

let ll = new doublyLinkedList()
ll.pushMethod(100)
ll.pushMethod(200)
ll.pushMethod(500)
ll.insertAt(2,600)
ll.reverse()
// ll.removeAtIndex(2)
// ll.removeNode(600)
// ll.insertAt(2,400)
// ll.insertAt(0,50)
//cl(ll)
cl(JSON.stringify(ll))

// ll.pushMethod(200)

//
// const llist = JSON.stringify(JSON.parse(ll));


// cl(ll)


// 6)//////////
//How to find duplicate number on Integer array

findduplicate=(arr)=>{
    var object = {}
    var result = []

    arr.forEach(function (item) {
        //console.log("item",item)
        console.log("object 1111111",object)
        if(!object[item]){
            object[item] = 0
        }
        object[item] += 1
    })
    console.log("object 222222",object)
    for(var i in object){
        console.log("i",i)
        console.log("oblect[i]",object[i])
        if(object[i] >= 2){
            result.push(i)
        }
    }
    return result

}

// findduplicate=(arr)=>{
//     var result = []
//     for(var i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 console.log("i",arr[j])
//                 result.push(arr[j])
//             }
//         }
//     }
//     console.log("result",result)
//     return result
// }





console.log("findduplicate",findduplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]))

// 7)////////
//find min and max in array
function findMinMax(arr) {
    let min = arr[0], max = arr[0];

    for (let i = 1;i <= arr.length; i++) {
        //console.log("arr[i]",arr[i])
        let v = arr[i];
        console.log("v",v)
        min = (v < min) ? v : min;
        //console.log("min",min)
        max = (v > max) ? v : max;
        console.log("max",max)
    }

    return [min, max];
}
console.log("findMinMax",findMinMax([5,8,9,7,15]))


// 8)///////


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

// 9)   linedlist

var cl=console.log
class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}
class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

    //insert first node
    insertFirst(data){
        this.head=new Node(data, this.head)
        this.size++;
    }

    //insert last node
    insertAtLast(data){
        let node = new Node(data)
        let current;
        //if empty ,make it head
        if(this.head == null){
            this.head= data;
        }else{
            current = this.head;
            while (current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    //insert at index
    insertAtIndex(data,index){
        //index is out of range
        if(index > 0 && index > this.size){
            cl("out of index")
            return
        }
        //if first node
        if(index === 0){
            //this.head = this.insertFirst(data)
            this.head = new Node(data,this.head);
            return
        }

        let node = new Node(data)
        let prev,current;
        current = this.head;
        var count=0;
        while(count < index){
            prev = current;
            count++;
            current = current.next;
        }
        node.next = current;
        prev.next=node
        this.size++;
    }


    //get at index
    getAtIndex(index){
        let current = this.head;
        let count = 0;

        while (current.next != null){
            if(count == index){
                cl("the node is",current.data)
            }
            count++
            // cl("current",current)
            current = current.next
        }

        return null
    }

    //remove at
    removeAt(index){
        if(index > 0 && index > this.size){
            return
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if(index == 0){
            this.head = current.next;
        }else{
            while (count < index){
                cl("count",count)
                cl("index",index)
                count++;
                cl("current",current)
                previous = current;
                current = current.next
                cl("22222 current",current)
            }
            cl("4444444 previous",previous)
            cl("5555555 current",current)
            previous.next = current.next
        }
        this.size--;
    }


    //clear the list
    clearList(){
        this.head= null;
        this.size=0
    }

    //print bthe list
    printListData(){
        let current = this.head;
        // cl("111111111")
        while(current != null){
            //   cl("current data",current.data)
            current=current.next
        }
    }




}

let ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertAtLast(400)
ll.insertAtIndex(500,2)

ll.removeAt(2)
//ll.getAtIndex(10)
cl(JSON.stringify(ll))
//ll.printListData()

// 10)///////


//////reverse array

// reversemethod1 = (arr)=>{
//     var result = []
//     for(var i = arr.length-1;i>=0;i--){
//         result.push(arr[i])
//     }
//     return result
// }
//
// console.log("reversemethod1------",reversemethod1([1,2,3,4,5,6,7,8,9]))

reverseMethod = (array ) =>{
    for(var i =0 ; i <= Math.floor((array.length-1)/2);i++){
        var el = array[i]
        array[i] = array[array.length-1-i]
        array[array.length-1-i]=el
    }
    return array
}
console.log("reverseMethod------",reverseMethod([1, 3, 6, 9, 5, 2, 8, 5]))


// 11)


/*reversestring = (str)=>{
    tempstring = ""
    for(var i = str.length-1;i>=0;i--){
        tempstring += str[i]
    }
    return tempstring
}*/

function reverseString(str) {
    if (str === "")
        return "";
    else
        console.log("str.substr(1)",reverseString(str.substr(1)))
    console.log("str.substr(1)",reverseString(str.charAt(0)))
    return reverseString(str.substr(1)) + str.charAt(0);
}
//reverseString("hello");


console.log("reversestring",reverseString("arif"))

// 12)

selectionsort = (array)=>{
    var startIndex= 0;
    while(startIndex < array.length-1){
        var smallestIndex = startIndex;
        console.log("array-----------",array)
        console.log("smallestIndex",smallestIndex)
        console.log("startIndex",startIndex)
        for(var i=startIndex+1;i<array.length;i++){
            console.log("array[smallestIndex]",array[smallestIndex])
            console.log("array[i]",array[i])
            if(array[smallestIndex] > array[i]){
                console.log("smallestIndex-------------->",smallestIndex)
                console.log("i-------------------------->",i)
                smallestIndex = i
            }
        }
        console.log("swap call")
        swap(startIndex,smallestIndex,array)
        startIndex++
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
//0 1 2 3 4 5 6 7 8
console.log("selectionsort",selectionsort([8,4,5,7,9,6,2,1,3]))


// 13)///////

threesumnoArray = (array,target)=>{
    array.sort((a,b) => a-b)
    console.log("array",array)
    var triplets = []
    for(var i=0;i<array.length-2;i++){
        var left = i+1;
        var right = array.length-1
        console.log("i",i)
        console.log("left",left)
        console.log("right",right)
        while (left < right){
            console.log("array[i]",array[i])
            console.log("array[left]",array[left])
            console.log("array[right]",array[right])
            var currentsum = array[i]+array[left]+array[right];
            console.log("currentsum",currentsum)
            if(currentsum == target){
                triplets.push([array[i],array[left],array[right]])
                left++;
                right--;
            }else if(currentsum < target){
                left++
            }else{
                right--
            }

        }
    }
    return triplets
}


console.log(threesumnoArray([12,3,1,2,-6,5,-8,6],0))


// 14)////////
let unionArra = function(array1,array2){
    var newObj = {};
    for(var i=0;i<array1.length;i++){
        newObj[array1[i]] = array1[i]
    }
    for(var j=0;j<array2.length;j++){
        newObj[array2[j]] = array2[j]
    }
    return newObj;


}

console.log(Object.values(unionArra([34,35,45,48,49], [44,55,34])))


// intersectionArray = (array1,array2)=>{
//      var result = []
//     for(var i=0;i<array1.length;i++){
//         if(array2.indexOf(array1[i]) !== -1){
//             console.log("array2.indexOf(array1[i]",array2.indexOf(array1[i]))
//             result.push(array1[i])
//         }
//     }
//     return result
//     console.log("mapobject--------",mapobject)
//
// }
//
// console.log(intersectionArray([34,35,45,48,49], [45,34,78]))


// 15)///////
//Defining function to get unique values from an array

/*uniqueArra = (array)=>{

    var uniqarra = []
    for(var val of  array){
        console.log("val",val)
        console.log("uniqarra.indexOf(val)",uniqarra.indexOf(val))
        if(uniqarra.indexOf(val) === -1){
            uniqarra.push(val)
        }
    }
    return uniqarra
}*/

uniqueArra = (array)=>{

    var uniqarra = []
    for(var i=0;i<array.length;i++){
        // console.log("val",val)
        console.log("uniqarra.indexOf(val)",uniqarra.indexOf(array[i]))
        if(uniqarra.indexOf(array[i]) === -1){
            uniqarra.push(array[i])
        }
    }
    return uniqarra
}

console.log(uniqueArra([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,2]))