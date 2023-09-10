// let lname = 'John';

let lname : string;

lname = 'John';

let newnam = lname.toUpperCase();

console.log(newnam);

let age : number;

age = 25;
age = 25.5;

let dob = '25';
let restul = parseInt(dob);

let isValid : boolean =false;

console.log(isValid);

// two ways to define the array in typescript
let empList : string[];

empList = ["Santosh", "Santosh1", "Santosh2"];


let numList : Array<number>;

numList = [1,2,3,4,5,6,7,8,9,10,11];

// let newNum = numList[5];

let result = numList.filter((num) => num>2);

let emp = empList.find((emp) => emp==='Santosh');

let sum = numList.reduce((acc, num) => acc + num);

console.log(result);
console.log(emp);
console.log(sum);

// lname = 10;


const enum Color {
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

let swapNumbs: [number, number];

function swapNumbers(num1: number,num2: number) : [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

let department: any;

department = 'IT';

department = 10;