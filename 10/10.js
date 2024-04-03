function log(target, key, descriptior) {
    var originalMethod = descriptior.value;
    descriptior.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(key, " with arguments: ").concat(args.join(", ")));
        var result = originalMethod.apply(this, args);
        console.log("".concat(key, " returned ").concat(result));
        return result;
    };
    return descriptior;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log("Result:", calculator.add(5, 3));
