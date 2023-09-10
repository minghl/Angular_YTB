// optional parameters
function add(num1 : number ,num2 : number, num3?: number) : number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2,3));
console.log(add(2,3,5));

// required parameters
const sub = (num1 : number ,num2 : number, num3=10) : number => num1 - num2 - num3;

console.log(sub(2,3));
console.log(sub(2,3,5));

const mul = function(num1 : number ,num2 : number) : number {
    return num1 * num2;
};

// rest parameters
function add2(num1 : number ,num2 : number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b)=> a+ b, 0);
}

let numbers = [3,4,5,5,5]
console.log(add2(2,3,...numbers));
console.log(add2(2,3,3,4,5,66,6,));

// generic functions T: Type
function getItem<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let concatResult = getItem<number>([1,2,3,4,5]);

let concatString = getItem<string>(["a","b","c","d","e"]);