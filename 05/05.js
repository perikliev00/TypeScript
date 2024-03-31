var Circlie = /** @class */ (function () {
    function Circlie(radius) {
        this.radius = radius;
    }
    Circlie.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circlie;
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
var circle = new Circlie(5);
console.log("Circle Area:", circle.area());
var rectangle = new Rectangle(4, 6);
console.log("Rectangle Area: ", rectangle.area());

