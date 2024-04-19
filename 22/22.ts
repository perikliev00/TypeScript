function add(first:number,second:number): number {
    return first+second;
}
let arr:number[];
let secondArr:string[];
let thirdArr:any[];
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}
const alex:Person= {
firstName: "Alex",
lastName: "Perikliev",
age: 24
}
interface Car {
    make :string,
    model: string,
    year?: number;
}
const tesla: Car = {
    make:"Tesla",
    model: "Model S",
    year:2009
}
interface Vehicle {
    wheels:number;
}
interface Car extends Vehicle {
    make:string;
    model: string;
}
const bmw: Car = {
    make : "BMW",
    model: "X5",
    wheels: 4
}
interface Shape {
    area(): number;
}
class Cirlce implements Shape {
    constructor(private radius:number) {}
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle implements Shape {
    constructor(private width:number,private height:number) {}
    area(): number {
        return this.width * this.height;
    }
}
class Person {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age:number) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const john = new Person("John", "Doe", 30);
console.log(john.getFullName());
class Account {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance=initialBalance;
    }
    deposit(amount: number): void {
        this.balance+= amount;
    }
    withdraw(amount: number): void {
        if(amount<=this.balance) {
            this.balance-= amount;
        } else {
            console.log("Insifficiant balance");
        }
    }
    getBalance(): number {
        return this.balance;
    }
}
const acc= new Account(1000);
acc.deposit(500);
class Temperature {
    private _celsius: number;
    constructor(celsius: number) {
        this._celsius=celsius;
    }
    get celsius(): number {
        return this._celsius;
    }
    set celsius(value: number) {
        if(value< -273.15) {
            throw new Error("Temperature cannot be below -273.15 C");
        }
        this._celsius=value;
    }
}
const temp=new Temperature(25);
console.log(temp.celsius);
temp.celsius=30;
console.log(temp.celsius);