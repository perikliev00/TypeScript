class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
}
const numberStack= new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Popped number: ",numberStack.pop());
const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log("Popped String", stringStack.pop());