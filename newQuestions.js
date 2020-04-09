// 'use strict'

// Difference between normal Arrow Function


// var obj = {
//     a:function () {
//    return this
//     },
//     b: () =>{
//        return this
//     }
// }


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

// console.log(obj.a(), obj.b())


//Check Time out function

// for( i = 0; i < 5; i++){
//     console.log(i)
//     setTimeout(function(){console.log(i)}, 0)
//
// }


// check the code is Valid or in valid

(function abc(){
     a = 5;
      b = 6
})()

console.log(a, b)

