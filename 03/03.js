var person = {
    name: "Alex",
    age: 24,
    greet: function () {
        console.log("Hello, my name is  ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
person.greet();
