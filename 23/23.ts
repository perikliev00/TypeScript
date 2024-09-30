interface Task {
    id:number;
    title: string;
    completed: boolean;
}

class TaskManeger { 
    private tasks: Task[] = [];
    private nextId: number = 1;

    //Mehod to add new task
    addTask(titel:string): Task {
        const newTask: Task = {
            id:this.nextId++,
            title: '',
            completed: false
        };
        this.tasks.push(newTask);
        return newTask
    }
    // Method to remove a task by ID
    removeTask(id: number): boolean {
        const index =this.tasks.findIndex(task => task.id === id);
        if(index!== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    // Method to lis all tasks
    listTasks(): Task[] {
        return this.tasks;
    }

    // Method to mark a task as completed
    completeTask(id:number): boolean {
        const task = this.tasks.find(task => task.id === id);
        if(task) {
            task.completed = true;
            return true;
        }
        return false
    }
}

//Example usage 
const taskManeger = new TaskManeger();
taskManeger.addTask('Learn TypeSctipt');
taskManeger.addTask("Build a project");
console.log(taskManeger.listTasks());

taskManeger.completeTask;
console.log(taskManeger.listTasks());

taskManeger.removeTask(2);
console.log(taskManeger.listTasks());
