function log(target:any,key:string,descriptor:PropertyDescriptor) {
    const originalMethod =descriptor.value;
    descriptor.value = function (...args:any[]) {
        console.log(`Calling ${key} with arguments: ${args.join(", ")}`);
        const result = originalMethod.apply(this,args);
        console.log(`${key} returned :${result}`);
        return result;
    };
    return descriptor;
}
class Calculator {
    @log
    add(a:number, b:number): number {
        return a+b;
    }
}
const calculator= new Calculator();
console.log("Result", calculator.add(5,3));