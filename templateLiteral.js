// new feature as of ES6

// template literals = another way of formatting output,
//      ${}            can contain placeholders for formatting
//                     and inserting; strings, values, variables etc.

let price = 10;
let taxRate = 0.15;
let total;

console.log("The price is: $${price}");
console.log('Tax rate is: ${taxRate}');
console.log('Tax is: $${price * taxRate}');
console.log('Total is: $${total = price + (price*taxRate)}');