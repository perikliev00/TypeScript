interface Shape {
    area(): number;
}
class Circlie implements Shape {
    constructor(private radius:number) {}
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle implements Shape {
    constructor(private width: number,private height :number) {}

    area(): number {
        return this.width *this.height;
    }
}
const circle= new Circlie(5);
console.log("Circle Area:",circle.area());

const rectangle= new Rectangle(4,6);
console.log("Rectangle Area: ",rectangle.area());