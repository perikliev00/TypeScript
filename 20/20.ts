function mergeObjects<T extends object, U extends object, U extends object>(obj1:T,obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const mergedObj= mergeObjects({name: "John"}, {age:30});
