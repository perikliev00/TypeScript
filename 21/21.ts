function log(target:any, key:string,descriptor : PropertyDescriptor) {
    const originalMethod= descriptor.value;
    descriptor.value = function (...args:any[]) {
        console.log(`Calling ${key} with arguments: ${args.join(", ")}`);
        const result=originalMethod.apply(this.args);
        console.log(`${key} returned: ${result}`);
        return result;
    };
    return descriptor;
}
function logWithMassage(massage: string) {
    return function (target: any, key: string, descriptor: PropertyDecorator) {
        const originalMethod= descriptor.value;
        descriptor.value= function (...args: any[]) {
            console.log(`${message} - Calling ${key} with arguments:${args.join(",")}`);
            const result = originalMethod.apply(this.args);
            console.log(`${message}- ${key} returned: ${result}`);
            return result
        };
        return descriptor;
     }
     class Calculator {
        constructor(){
        };
        add(a: number, b:number): number {
            return a+b;
        }
        subtract(a :number, b: number): number {
            return a-b;
        }     
    }
}