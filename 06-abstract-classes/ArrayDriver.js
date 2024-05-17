"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(3, 7, 0, 0);
// declear an arrays of shapes...Circle... initially empty
let theShape = [];
// ad the shapes to the array
theShape.push(myCircle);
theShape.push(myRectangle);
for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
