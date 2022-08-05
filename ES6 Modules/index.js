// The idea behind a module is that it's a file of reusable code.
// We can import sections of pre-written code to use whenever.
// Think of modules as a seperate chapters of a book.
/*
import{PI, getCircumference, getArea} from "./math_util.js";

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);
*/

/******************** Second way to import *********************/

import * as mathUtil from "./math_util.js";

console.log(mathUtil.PI);

let circumference = mathUtil.getCircumference(10);
console.log(circumference);

let area = mathUtil.getArea(10);
console.log(area);