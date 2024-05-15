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
function identity<T>(arg: T) {
    return arg;
}
let output1=identity<string>("hello");
let output2=identity<number>(123);
const reverseArray = <T>(array:T[]): T[] => {
    return array.reverse();
}
let numbers=[1,2,3,4,5];
let reversedNumbers=reverseArray<number>(numbers);
class GenericBox<T> {
    private item: T;
    constructor(item: T) {
        this.item=item;
    }
    getItem(): T {
        return this.item;
    }
}
let box1= new GenericBox<string>("apple");
console.log(box1.getItem());
let box2= new GenericBox<number>(123);
console.log(box2.getItem());
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length:5,value: "hello"});
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function indentity<T>(arg: T):T {
    return arg;
}
let myIdentity: GenericIdentityFn<number>=identity;
class Pair<T, U> {
    constructor(public first: T,public second: U) {}
}
let pair1=new Pair<number,string>(1,"one");
let pair2= new Pair<string, boolean>("true",true);
function displayValue(value: string | number) {
    console.log(value);
}
displayValue("hello");
displayValue(123);
interface Car {
    make: string;
    model: string;
}
interface Electric {
    range:number
}
type ElectricCar=Car & Electric;
let tesla : ElectricCar = {
     make: "Tesla",
     model: "Model S",
     range: 500
};
class Circle {
    radius:number;
    constructor(radius: number) {
        this.radius=radius
    }
    area(): number {
        return Math.PI **2
    }
}
class Rectangle {
    width:number;
}
