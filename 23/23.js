var TaskManeger = /** @class */ (function () {
    function TaskManeger() {
        this.tasks = [];
        this.nextId = 1;
    }
    //Mehod to add new task
    TaskManeger.prototype.addTask = function (titel) {
        var newTask = {
            id: this.nextId++,
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
        return newTask;
    };
    // Method to remove a task by ID
    TaskManeger.prototype.removeTask = function (id) {
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    };
    // Method to lis all tasks
    TaskManeger.prototype.listTasks = function () {
        return this.tasks;
    };
    // Method to mark a task as completed
    TaskManeger.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    };
    return TaskManeger;
}());
//Example usage 
var taskManeger = new TaskManeger();
taskManeger.addTask('Learn TypeSctipt');
taskManeger.addTask("Build a project");
console.log(taskManeger.listTasks());
taskManeger.completeTask;
console.log(taskManeger.listTasks());
taskManeger.removeTask(2);
console.log(taskManeger.listTasks());
