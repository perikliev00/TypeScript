class GenericList<T> {
    private items: T[]=[]
    addItem(item: T) {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}
const numberList = new GenericList<number>();
numberList.addItem(1);
numberList.addItem(2);
console.log("Numbers:",numberList.getItems());
const stringList=new GenericList<string>();
stringList.addItem("Hello");
stringList.addItem("World");
console.log("Strings:" ,stringList.getItems());