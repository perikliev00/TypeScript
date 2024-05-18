var myName;
var userName;
userName = 'Any';
//function
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
var subtract = function (c, d) {
    return c - d;
};
var multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (c === void 0) { c = 2; }
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
var total = function (a) {
    var numbs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbs[_i - 1] = arguments[_i];
    }
    return a + numbs.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(10, 2, 3));
var createError = function (errMsg) {
    throw new Error(errMsg);
};
var infinite = function () {
    var i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
var isNumber = function (value) {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
var numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
