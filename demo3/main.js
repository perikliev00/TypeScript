var numbers;
numbers = [1, 2, 3, 4, 5, 6];
var strings;
strings = ["alex", "gosho", "pesho", "misho"];
strings.push("asd");
var booleans;
booleans = [true, true, false, false];
var mixedArr;
mixedArr = ["alex", 123, 111];
var Tuple = ["alex", 123];
//////////////
var stringArr = ['one', 'hey', 'Dave'];
var guitars = ['Strat', 'Les Paul', 5150];
var mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
var test = [];
var bands = [];
bands.push('Van Halen');
// Tuple
var myTuple = ['Dave', 42, true];
var mixed = ['John', 1, false];
myTuple[1] = 42;
//Objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
var exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
var evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
var jp = {
    active: true,
    albums: ['I', 'II', "IV"]
};
var greetGuitarist = function (guitarist) {
    if (guitarist.name) {
        return "Hello ".concat(guitarist.name.toUpperCase());
    }
    return 'Hello';
};
console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
