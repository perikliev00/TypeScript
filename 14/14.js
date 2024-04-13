var GenericList = /** @class */ (function () {
    function GenericList() {
        this.items = [];
    }
    GenericList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GenericList.prototype.getItems = function () {
        return this.items;
    };
    return GenericList;
}());
var numberList = new GenericList();
numberList.addItem(1);
numberList.addItem(2);
console.log("Numbers:", numberList.getItems());
var stringList = new GenericList();
stringList.addItem("Hello");
stringList.addItem("World");
console.log("Strings:", stringList.getItems());
