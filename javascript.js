// check object or not using constructor

// var bar = {};
//
// console.log((bar !== null) && (bar.constructor === Object));

//check value assign

// (function () {
//     var  a = b = 3
// })();
//
// console.log(typeof a)
// console.log(typeof b)
//
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));


// check both function returns

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
// console.log(" ----------------", foo1(), foo2())

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));
console.log(isPalindrome("A car, a man, a maraca"));

















