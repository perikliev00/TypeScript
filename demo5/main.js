// convert to more or less specific
var a = 'hello';
var b = a;
var c = a;
var d = 'wolrd';
var e = 'world';
var addOrCocat;
(function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
});
