// import { Login, User} from './interface'
import *  as UserLogin from './interface';

interface Address{
    street: string;
    city: string;
    state: string;
    pin: string;
}
class Employee implements UserLogin.Login{
    // ! exclamation mark
    // ts grammer
    // # == private
    #id: number;

    protected name: string;

    // 接口是类型，interface is type
    address: Address;

    static getEmployeeCount(): number {
        return 50;
    }

    // for private use
    get empId(): number{
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }
    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    login(): UserLogin.User {
        return {name: 'John', id: 1, email: ''}
    }

    getNameWithAddress(): string{
        return `${this.name} stays at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    // 同名方法会重写
    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, 'John', {street:'ABC', city:'Bangalore', state:'Karnataka',pin:'560076'});

// 函数原型可以call static方法，实例不行
// Employee.getEmployeeCount();

// set get function to get the private members
john.empId = 100;

console.log(john.empId);

let address = john.getNameWithAddress();

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

// console.log(john);
console.log(address);

// let mike = new Manager(2, 'Mike', ' Cherise Drive');

// console.log(mike.getNameWithAddress());
