// 'use strict'

/*Difference between normal Arrow Function*/


// var obj = {
//     a:function () {
//    console.log(this)
//     },
//     b: () =>{
//         console.log(this)
//     }
// }
// obj.a();
// obj.b();
//
// let user = {
//     name: "GFG",
//     gfg1:() => {
//         console.log("hello " + this.name); // no 'this' binding here
//     },
//     gfg2(){
//         console.log("Welcome to " + this.name); // 'this' binding works here
//     }
// };
// user.gfg1();
// user.gfg2();




/*Check Time out function*/

// for( var i = 0; i < 5; i++){
//     // console.log(i)
//     setTimeout(function(){console.log(i)}, 0)
// }
//
// console.log("33333333333333333333333333333",i)

/*check the code of self calling funtion is Valid or in valid*/

// (function abc(){
//      a = 5;
//      b = 6
// })()
//
// console.log(a, b)     // ans = 5,6 if  var a=5 then a is undefind



/*How to check object*/

// // var obj = null
// var obj = {}
// // console.log(obj !== null && typeof obj === Object)
// console.log(obj !== null && obj.constructor === Object)



/*Check the Result of this code*/
// (function(){
//     var a = b = 3;
// })();
//
// console.log("a defined? " + (typeof a ));
// console.log("b defined? " + (typeof b ));


/*What will the code below output to the console and why?*/

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();


/*Consider the two functions below. Will they both return the same thing? Why or why not?*/

// function foo1()
// {
//     return {
//         bar: "hello"
//     };
// }
//
// function foo2()
// {
//     return
//     {
//         bar: "hello"
//     };
// }
//
// console.log(foo1(), foo2())




/*What is NaN? What is its type? How can you reliably test if a value is equal to NaN?*/


// var num = NaN
// var num = 12
// console.log(Number.isNaN(num))

//
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);





/*Discuss possible ways to write a function isInteger(x) that determines if x is an integer.*/

// function isInteger(x) { return (x ^ 0) === x; }
// function isInteger(x) { return (Math.round(x) === x)}
// function isInteger(x) { return (typeof x === 'number' && x%1 === 0)}

// console.log(isInteger(9))


/*In what order data will print*/


// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();




/*Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.*/


// var isPalindrom = (value) =>{
//     str = value.replace(/\W/g, '').toLowerCase()
//     return(str === str.split('').reverse().join(''))
// };
//
// console.log(isPalindrom("level"));                   // logs 'true'
// console.log(isPalindrom("levels"));                  // logs 'false'
// console.log(isPalindrom("A car, a man, a maraca"));  // logs 'true'


/*Write a sum method which will work properly when invoked using either syntax below.*/

// function sum(x) {
//     console.log(arguments.length)
//     if(arguments.length === 2){
//         return arguments[0]+arguments[1]
//     }else{
//         return function (y) {
//             return x+y
//         }
//     }
//
// }
//
// console.log(sum(2,3))
// console.log(sum(2)(3))


/*check the code*/

// var d = {};
//
// [ 'zebra', 'horse' ].forEach(function(k) {
//     d[k] = undefined;
// });
// console.log(d)

/*What will the code below output to the console and why?*/

// var arr1 = "john".split('');
// console.log(arr1)
// var arr2 = arr1.reverse();
// console.log(arr2)
// var arr3 = "jones".split('');
// console.log(arr3)
// arr2.push(arr3)
// console.log(arr2)
// console.log(arr1)
// console.log(arr1.slice(-1))
// console.log(arr2.slice(-1))



// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);






// var list = readHugeList();
//
// var nextListItem = function() {
//     var item = list.pop();
//
//     if (item) {
//         // process the list item...
//         nextListItem();
//     }
// };


var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);
































































/*check Array*/

// var arr = null
// var arr = []
// console.log(Array.isArray(arr))




















