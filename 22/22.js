function add(first, second) {
    return first + second;
}
var arr;
var secondArr;
var thirdArr;
var alex = {
    firstName: "Alex",
    lastName: "Perikliev",
    age: 24
};
var tesla = {
    make: "Tesla",
    model: "Model S",
    year: 2009
};
var bmw = {
    make: "BMW",
    model: "X5",
    wheels: 4
};
var Cirlce = /** @class */ (function () {
    function Cirlce(radius) {
        this.radius = radius;
    }
    Cirlce.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Cirlce;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
