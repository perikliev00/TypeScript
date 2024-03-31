interface Person {
    name: string;
    age: number;
    greet(): void;
}
let person: Person = {
    name: "Alex",
    age: 24,
    greet() {
        console.log(`Hello, my name is  ${this.name} and I am ${this.age} years old.`)
    }
}
person.greet();