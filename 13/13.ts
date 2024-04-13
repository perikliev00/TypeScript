enum Color {
    red,
    green,
    blue
}
type ShapeType = "Circle" | "Rectangle";
function getColor(color: Color):string {
    return Color[color];
}
function getShapeName(shape:ShapeType): string {
    return shape;
}
console.log("Color:",getColor(Color.red));
console.log("Shape:",getShapeName("Cirlce"));