function log(target: any, key:string,descriptior: PropertyDescriptor) {
const originalMethod = descriptior.value;
descriptior.value = function (...args: any[]) {
    console.log(`Calling ${key} with arguments: ${args.join(", ")}`);
    const result= originalMethod.apply (this, args);
    console.log(`${key} returned ${result}`);
    return result; 
};
return descriptior;
}
class Calculator {
    add(a: number, b: number): number {
        return a+b;
    }
}
const calculator=new Calculator();
console.log("Result:", calculator.add(5,3));