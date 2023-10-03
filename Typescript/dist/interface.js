"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// js approach, not type safety
// var Users = {
//     name: '',
//     age: 1,
//     id: 1,
//     email: '',
// }
// destructing
let { name: userName, email: userLogin } = { name: 'John', id: 1, email: '' };
// extend interface
let employee = { name: 'John', id: 1, email: '', salary: 1000 };
// destructuring
let [user1, user2, ...restUsers] = [
    { name: 'John', id: 1, email: '' },
    { name: 'John', id: 2, email: '' },
    { name: 'John', id: 3, email: '' },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
// Change the behaviour of class at runtime once they are executed
// @Component({})
class Component {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=interface.js.map