// aray -> a special variable that can hold more than 1 value.

var cars = ["Mustang","Togg", "Proton"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla");// add an element
cars.pop();        // removes the last element

var lastCar = cars[cars.length-1];

cars = cars.sort();// sorts an array alphabetically
cars = cars.reverse();

console.log(cars)