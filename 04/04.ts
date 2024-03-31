class Animal {
    constructor(private name:string) {}
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    bark() {
        console.log(`barked!`)
    }
}
let animal=new Animal('Marki');
animal.move(12);