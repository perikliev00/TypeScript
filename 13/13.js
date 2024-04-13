var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
function getColor(color) {
    return Color[color];
}
function getShapeName(shape) {
    return shape;
}
console.log("Color:", getColor(Color.red));
console.log("Shape:", getShapeName("Cirlce"));
