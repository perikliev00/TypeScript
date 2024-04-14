type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
type Person = {
    name:string,
    age:number;
}
const readOnlyPerson: Readonly<Person>= {
    name: "John",
    age:30,
}