"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a + b;
}
exports.subtract = subtract;
var math = require("./mathOperations");
console.log("addition: ", math.add(5, 3));
console.log("Subtraction", math.subtraction(5, 3));
