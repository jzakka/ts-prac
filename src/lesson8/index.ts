export {};

// import { add, subtract, PI} from './utils';
// import {add as plus} from './utils';
// import * as utils from './utils.js';
// import User from './Users.js';
import MyUser from './Users.js'
import TodoList from './TodoList.js';
// import Config, { User, Status } from './types.js';


// const result = utils.add(1,2)

// const user = new MyUser(1, 'Alice');
// console.log(user.greet())

// const config: Config = {
//     apiUrl: 'https://api.exmaple.com',
//     timeout: 5000,
// }

// const user: User = {
//     id: 1,
//     name: 'Alice',
//     email: 'alice@example.com',
// }

class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    greet(): string {
        return `Hello, ${this.name}!`;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person = new Person('Alice', 30);
console.log(person.introduce())

class BankAccount {
    public accountNumber: string;
    private balance: number;
    protected owner: string;

    constructor(accountNumber: string, owner: string) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount('123-456', 'Alice');
account.deposit(1000);
console.log(account.getBalance())

class Circle {
    constructor(private _radius: number) {}

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value < 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }

    get area(): number {
        return Math.PI * this._radius * this._radius;
    }
}

const circle = new Circle(10);
console.log(circle.radius);
console.log(circle.area);

circle.radius = 20;
// circle.radius = -5;

// class Animal {
//     constructor(protected name: string) {}

//     makeSound(): string {
//         return 'Some Sound';
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, private breed: string) {
//         super(name);
//     }

//     makeSound(): string {
//         return 'Woof!';
//     }

//     fetch(): string {
//         return `${this.name} is fetching!`;
//     }
// }

// const dog = new Dog('Max', 'Labredor');
// console.log(dog.makeSound());
// console.log(dog.fetch());

abstract class Shape {
    constructor(protected color: string) {}

    abstract getArea(): number;

    describe(): string{
        return `A ${this.color} shape with area ${this.getArea()}`;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number){
        super(color);
    }

    getArea(): number {
        return this.width * this.height;
    }
}

// const shape = new Shape('red'); // Error: Cannot create an instance of an abstract class
const rect = new Rectangle('blue', 10, 20)
console.log(rect.describe())

interface Animal {
    name: string;
    makeSound(): string;
}

class Dog implements Animal {
    constructor(public name: string) {}

    makeSound(): string {
        return 'Woof!'; 
    }
}

class Cat implements Animal {
    constructor(public name: string) {}
    
    makeSound(): string {
        return 'Meow!';
    }
}

class MathUtils {
    static PI = 3.14159;

    static add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(1,2));

const utils = new MathUtils();
console.log(utils.multiply(2,3 ));

const todods = new TodoList();
todods.add('Learn Typescript');
todods.add('Build a project');
todods.toggle(1);
console.log(todods.getCompleted())
console.log(todods.getPending())