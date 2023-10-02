export interface User {
    name: string;
    // ? question mark可以部分选择properties
    age?: number;
    id: number;
    email: string;
}

// js approach, not type safety
// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: '',
// }

// destructing
let {name : userName, email : userLogin} : User = {name: 'John', id: 1, email: ''}
// user.name;
// user.email;

// userLogin
interface Employees extends User {
    salary: number;
}

// extend interface
let employee: Employees = {name: 'John', id: 1, email: '', salary:1000}

// interface can have method definition
export interface Login {
    login():User;
}

// destructuring
let [user1,user2,...restUsers]: User[] = [
    {name: 'John', id: 1, email: ''},
    {name: 'John', id: 2, email: ''},
    {name: 'John', id: 3, email: ''},
];

console.log(user1);
console.log(user2);
console.log(restUsers);

// Change the behaviour of class at runtime once they are executed
// @Component({})
class Component{
    constructor(public name: string){

    }
}