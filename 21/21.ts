function log(target:any, key: string, descriptor:PropertyDecorator) {
    const originalMethod = descriptor.value;
    descriptor.value=function (... args: any[])
    console.log(`Calling ${key} with arguments "${args.join(", ")})
}