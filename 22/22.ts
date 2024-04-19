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