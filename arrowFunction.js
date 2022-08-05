// arrow function => 
// shortcut for a function expression.

let hello;

// function expression

hello = function(){
    return "Mrb ey cemaati müslimin!";
}
console.log(hello());

// with arrow function

hello = () => "Mrb ey cemaati müslimin!";
console.log(hello());

// level 2 :P
let x = "Yo";
let y = "Soner";

// function expression

hello = function(x, y){
    return x + " " + y;
}
console.log(hello(x,y));

// with arrow function

hello = (x, y) =>  x + " " + y;
console.log(hello(x, y));

hello = (x, y) => {

    console.log(x);
    console.log(y);
};
hello(x, y);

//**************************************** */
// map(), filter(), reduce()

let storeUSD = [5,6,7,8,9];
let storeEUR;

storeEUR = storeUSD.map(value => value *= 0.85);
console.log(storeEUR);

// filter()
let students = [15,16,17,18,19];
let adultStudents;

adultStudents = students.filter(age => age >= 18);
console.log(adultStudents);

// reduce()
let letters = ["H", "E", "L", "P"];
let word;

word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word);
