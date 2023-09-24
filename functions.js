"use strict";
// optional parameters
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
// required parameters
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mul = function (num1, num2) {
    return num1 * num2;
};
// rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [3, 4, 5, 5, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 3, 4, 5, 66, 6));
// generic functions T: Type
function getItem(items) {
    return new Array().concat(items);
}
let concatResult = getItem([1, 2, 3, 4, 5]);
let concatString = getItem(["a", "b", "c", "d", "e"]);
