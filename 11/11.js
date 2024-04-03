var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (text) {
        var newItem = {
            id: Date.now(),
            text: text,
            completed: false
        };
        this.items.push(newItem);
    };
    TodoList.prototype.toggleItem = function (id) {
        var item = this.items.find(function (item) { return item.id === id; });
        if (item) {
            item.completed = !item.completed;
        }
    };
    TodoList.prototype.displayItems = function () {
        console.log('Todo list');
        this.items.forEach(function (item) {
            var status = item.completed ? "Completed" : "Incomplete";
            console.log(" - ".concat(item.text, " (").concat(status, ")"));
        });
    };
    return TodoList;
}());
var todoList = new TodoList();
todoList.addItem("Learn TypeScript");
todoList.addItem("Build a Todo App");
todoList.toggleItem(todoList.items[0].id);
todoList.displayItems();
