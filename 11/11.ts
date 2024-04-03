interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}
class TodoList {
    private items: TodoItem[] = [];
    addItem(text: string) {
        const newItem:TodoItem = {
            id: Date.now(),
            text,
            completed:false
        };
        this.items.push(newItem);
    }
    toggleItem(id: number) {
        const item = this.items.find(item => item.id ===id);
        if(item) {
            item.completed=!item.completed;
        }
    }
    displayItems() {
        console.log('Todo list');
        this.items.forEach(item=> {
        const status= item.completed ? "Completed" : "Incomplete";
        console.log(` - ${item.text} (${status})`);
        });
    }
}
const todoList = new TodoList();
todoList.addItem("Learn TypeScript");
todoList.addItem("Build a Todo App");
todoList.toggleItem(todoList.items[0].id);
todoList.displayItems();