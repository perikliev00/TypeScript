export function add(a: number,b: number): number {
    return a+b;
}
export function subtract (a :number, b: number): number {
    return a+b;
}
import * as math from './mathOperations';
console.log("addition: ",math.add(5,3));
console.log("Subtraction", math.subtraction(5,3));