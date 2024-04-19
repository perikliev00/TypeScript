function log(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(key, " with arguments: ").concat(args.join(", ")));
        var result = originalMethod.apply(this.args);
        console.log("".concat(key, " returned: ").concat(result));
        return result;
    };
    return descriptor;
}
function logWithMassage(massage) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("".concat(message, " - Calling ").concat(key, " with arguments:").concat(args.join(",")));
            var result = originalMethod.apply(this.args);
            console.log("".concat(message, "- ").concat(key, " returned: ").concat(result));
            return result;
        };
        return descriptor;
    };
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        ;
        Calculator.prototype.add = function (a, b) {
            return a + b;
        };
        Calculator.prototype.subtract = function (a, b) {
            return a - b;
        };
        return Calculator;
    }());
}
