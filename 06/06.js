var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Popped number: ", numberStack.pop());
var stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log("Popped String", stringStack.pop());
